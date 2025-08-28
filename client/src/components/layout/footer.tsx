import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <i className="fas fa-car text-primary text-2xl mr-3"></i>
              <span className="text-xl font-bold text-foreground">AutoEscola Plus</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Há mais de 20 anos formando condutores responsáveis com metodologia 
              comprovada e 95% de aprovação. Sua habilitação começa aqui!
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-inicio"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-sobre"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-servicos"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="/depoimentos" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-depoimentos"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="footer-link-contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <i className="fas fa-phone w-4 mr-2"></i>
                <a 
                  href="tel:+5511999999999" 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-phone"
                >
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope w-4 mr-2"></i>
                <a 
                  href="mailto:contato@autoescolaplus.com.br" 
                  className="hover:text-primary transition-colors"
                  data-testid="footer-email"
                >
                  contato@autoescolaplus.com.br
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt w-4 mr-2 mt-1 flex-shrink-0"></i>
                <span data-testid="footer-address">Fortaleza, CE</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                data-testid="footer-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                data-testid="footer-instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                data-testid="footer-whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm" data-testid="footer-copyright">
            © 2024 AutoEscola Plus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
