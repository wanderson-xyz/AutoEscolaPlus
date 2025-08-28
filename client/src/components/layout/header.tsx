import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Depoimentos", href: "/depoimentos" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <i className="fas fa-car text-primary text-2xl mr-3"></i>
            <span className="text-xl font-bold text-foreground">AutoEscola Plus</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button */}
          <Link
            href="/contato"
            className="hidden md:block btn-primary px-6 py-2 rounded-lg font-semibold"
            data-testid="button-matricule-se"
          >
            Matricule-se
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contato"
                className="block mx-3 mt-4 btn-primary px-4 py-2 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-button-matricule-se"
              >
                Matricule-se
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
