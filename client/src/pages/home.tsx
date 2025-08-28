import { Link } from "wouter";
import HeroSection from "@/components/sections/hero-section";
import StatisticsSection from "@/components/sections/statistics-section";
import CTASection from "@/components/sections/cta-section";

export default function Home() {
  const statistics = [
    {
      icon: "fas fa-users",
      number: "5000+",
      label: "Alunos Formados"
    },
    {
      icon: "fas fa-check-circle",
      number: "95%",
      label: "Taxa de Aprovação"
    },
    {
      icon: "fas fa-calendar-alt",
      number: "20",
      label: "Anos de Experiência"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      number: "15",
      label: "Instrutores Especializados"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Sua Habilitação Começa Aqui"
        subtitle="Há mais de 20 anos formando condutores responsáveis com metodologia comprovada e 95% de aprovação"
        primaryButtonText="Matricule-se Agora"
        primaryButtonHref="/contato"
        secondaryButtonText="Conheça Nossa História"
        secondaryButtonHref="/sobre"
        backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
        backgroundAlt="Happy student with instructor in modern car interior"
      />

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-why-choose">
              Por que escolher a AutoEscola Plus?
            </h2>
            <p className="text-xl text-muted-foreground">
              Tradição, qualidade e compromisso com sua aprovação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border text-center" data-testid="card-aprovacao">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-trophy text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">95% de Aprovação</h3>
              <p className="text-muted-foreground">
                Uma das maiores taxas de aprovação da região, fruto do nosso método exclusivo de ensino.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border text-center" data-testid="card-tradicao">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-medal text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">20 Anos de Tradição</h3>
              <p className="text-muted-foreground">
                Duas décadas formando condutores responsáveis e comprometidos com a segurança no trânsito.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border text-center" data-testid="card-instrutores">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-graduate text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Instrutores Qualificados</h3>
              <p className="text-muted-foreground">
                Equipe especializada e certificada, sempre atualizada com as melhores práticas de ensino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-services">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos cursos completos para todas as categorias de habilitação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Category A */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="service-category-a">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-motorcycle text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Categoria A</h3>
              <p className="text-muted-foreground mb-4">Motos e Ciclomotores</p>
              <Link
                href="/servicos"
                className="text-primary font-medium hover:underline"
                data-testid="link-categoria-a"
              >
                Saiba mais <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
            
            {/* Category B */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="service-category-b">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-car text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Categoria B</h3>
              <p className="text-muted-foreground mb-4">Carros e Utilitários</p>
              <Link
                href="/servicos"
                className="text-primary font-medium hover:underline"
                data-testid="link-categoria-b"
              >
                Saiba mais <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
            
            {/* Category C */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="service-category-c">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-truck text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Categoria C</h3>
              <p className="text-muted-foreground mb-4">Caminhões</p>
              <Link
                href="/servicos"
                className="text-primary font-medium hover:underline"
                data-testid="link-categoria-c"
              >
                Saiba mais <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
            
            {/* Category D */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border" data-testid="service-category-d">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-bus text-primary text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Categoria D</h3>
              <p className="text-muted-foreground mb-4">Ônibus</p>
              <Link
                href="/servicos"
                className="text-primary font-medium hover:underline"
                data-testid="link-categoria-d"
              >
                Saiba mais <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/servicos"
              className="btn-primary px-8 py-3 rounded-lg font-semibold inline-block"
              data-testid="button-ver-todos-servicos"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection statistics={statistics} />

      {/* CTA Section */}
      <CTASection
        title="Pronto para tirar sua habilitação?"
        subtitle="Entre em contato conosco e dê o primeiro passo para conquistar sua independência"
        primaryButtonText="Fale Conosco"
        primaryButtonHref="/contato"
      />
    </div>
  );
}
