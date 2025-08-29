import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { desc } from 'drizzle-orm';
import { db } from './_db';
import { contacts } from '../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    const allContacts = await db.select()
      .from(contacts)
      .orderBy(desc(contacts.createdAt));
    
    res.json({ success: true, contacts: allContacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      success: false, 
      message: "Erro ao buscar contatos" 
    });
  }
}