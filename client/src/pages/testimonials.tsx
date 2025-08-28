import TestimonialCarousel from "@/components/ui/testimonial-carousel";
import CTASection from "@/components/sections/cta-section";
import StatisticsSection from "@/components/sections/statistics-section";

export default function Testimonials() {
  const featuredTestimonials = [
    {
      id: 1,
      name: "Ana Carolina Silva",
      category: "Categoria B",
      date: "Dezembro 2024",
      content: "Excelente autoescola! Os instrutores são muito pacientes e didáticos. Consegui passar de primeira tanto na prova teórica quanto na prática. Recomendo para todos que querem tirar a carteira com tranquilidade.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5
    },
    {
      id: 2,
      name: "Roberto Mendes",
      category: "Categoria B",
      date: "Novembro 2024",
      content: "A metodologia da AutoEscola Plus é realmente diferenciada. Desde a primeira aula me senti seguro e confiante. Hoje dirijo com total tranquilidade graças aos ensinamentos recebidos.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5
    },
    {
      id: 3,
      name: "Marina Costa",
      category: "Categoria A",
      date: "Outubro 2024",
      content: "Estrutura impecável e profissionais altamente qualificados. A taxa de aprovação realmente condiz com a qualidade do ensino. Indicaria para qualquer pessoa!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      rating: 5
    }
  ];

  const moreTestimonials = [
    {
      name: "Carlos Eduardo",
      category: "Categoria C",
      date: "Janeiro 2024",
      content: "Profissionais competentes e curso bem estruturado. Consegui minha habilitação categoria C sem complicações.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      rating: 5
    },
    {
      name: "Patricia Lima",
      category: "Categoria B",
      date: "Dezembro 2023",
      content: "Ambiente acolhedor e instrutores muito atenciosos. Superaram minhas expectativas em todos os aspectos.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      rating: 5
    },
    {
      name: "Felipe Santos",
      category: "Categoria A",
      date: "Novembro 2023",
      content: "Curso de moto excelente! Aprendi desde o básico até técnicas avançadas de pilotagem. Muito satisfeito!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      rating: 5
    },
    {
      name: "Lucia Ferreira",
      category: "Categoria B",
      date: "Outubro 2023",
      content: "Depois de anos com medo de dirigir, encontrei na AutoEscola Plus a confiança que precisava. Obrigada pela paciência!",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      rating: 5
    },
    {
      name: "Marcos Oliveira",
      category: "Categoria D",
      date: "Setembro 2023",
      content: "Categoria D foi um desafio, mas com o suporte da equipe consegui passar de primeira. Escola nota 10!",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      rating: 5
    },
    {
      name: "Amanda Costa",
      category: "Categoria B",
      date: "Agosto 2023",
      content: "Recomendo para todos! Atendimento impecável desde a matrícula até a aprovação. Escola referência na região!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      rating: 5
    }
  ];

  const successStatistics = [
    {
      icon: "fas fa-smile",
      number: "98%",
      label: "Satisfação dos Alunos"
    },
    {
      icon: "fas fa-comments",
      number: "5000+",
      label: "Depoimentos Positivos"
    },
    {
      icon: "fas fa-star",
      number: "4.9",
      label: "Avaliação Média"
    },
    {
      icon: "fas fa-trophy",
      number: "95%",
      label: "Taxa de Aprovação"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600"
            alt="Happy students background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="page-title">
              Depoimentos
            </h1>
            <p className="text-xl text-white/90">
              Veja o que nossos alunos dizem sobre a AutoEscola Plus
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-background relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel testimonials={featuredTestimonials} />
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 bg-muted relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-more-testimonials">
              Mais Depoimentos
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de sucesso dos nossos alunos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border" data-testid={`testimonial-card-${index}`}>
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.category}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  "{testimonial.content}"
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Statistics */}
      <section className="py-20 bg-background relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-success-stories">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-muted-foreground">
              Números que comprovam nossa excelência
            </p>
          </div>
          
          <StatisticsSection statistics={successStatistics} />
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-muted relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-video-testimonials">
              Depoimentos em Vídeo
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça as histórias completas dos nossos alunos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="video-testimonial-1">
              <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                <i className="fas fa-play-circle text-primary text-4xl"></i>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  02:15
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Amanda Costa - Categoria B</h3>
                <p className="text-muted-foreground text-sm">
                  "Uma experiência incrível do início ao fim..."
                </p>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="video-testimonial-2">
              <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                <i className="fas fa-play-circle text-primary text-4xl"></i>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  03:42
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Carlos Mendes - Categoria C</h3>
                <p className="text-muted-foreground text-sm">
                  "Profissionais excepcionais e método único..."
                </p>
              </div>
            </div>
            
            {/* Video 3 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="video-testimonial-3">
              <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                <i className="fas fa-play-circle text-primary text-4xl"></i>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  01:58
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Marina Silva - Categoria A</h3>
                <p className="text-muted-foreground text-sm">
                  "Realizei meu sonho de pilotar com segurança..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Seja o próximo a conquistar sua habilitação"
        subtitle="Junte-se aos milhares de alunos satisfeitos que escolheram a AutoEscola Plus"
        primaryButtonText="Comece Agora"
        primaryButtonHref="/contato"
      />
    </div>
  );
}
