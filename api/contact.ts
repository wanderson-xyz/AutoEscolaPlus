import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { ZodError } from 'zod';
import { db } from './_db';
import { contacts, insertContactSchema } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    const validatedData = insertContactSchema.parse(req.body);
    
    const [contact] = await db.insert(contacts)
      .values(validatedData)
      .returning();
    
    res.json({ success: true, contact });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Dados inválidos", 
        errors: error.errors 
      });
    } else {
      console.error('Error creating contact:', error);
      res.status(500).json({ 
        success: false, 
        message: "Erro interno do servidor" 
      });
    }
  }
}