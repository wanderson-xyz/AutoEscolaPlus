import { Link } from "wouter";
import CTASection from "@/components/sections/cta-section";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="page-title">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground">
              Cursos completos para todas as categorias de habilitação
            </p>
          </div>
        </div>
      </section>

      {/* License Categories Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Category A */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border" data-testid="category-a">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-motorcycle text-primary text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Categoria A</h3>
                  <p className="text-muted-foreground">Motos e Ciclomotores</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">O que inclui:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    45 horas/aula teóricas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Simulador de direção
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    20 horas/aula práticas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Exame médico e psicotécnico
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">R$ 1.299</span>
                  <span className="text-muted-foreground"> em até 12x</span>
                </div>
                <Link
                  href="/contato"
                  className="btn-primary w-full py-3 rounded-lg font-semibold text-center block"
                  data-testid="button-matricular-categoria-a"
                >
                  Matricule-se
                </Link>
              </div>
            </div>
            
            {/* Category B */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border" data-testid="category-b">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-car text-primary text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Categoria B</h3>
                  <p className="text-muted-foreground">Carros e Utilitários</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">O que inclui:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    45 horas/aula teóricas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Simulador de direção
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    25 horas/aula práticas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Exame psicotécnico
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">R$ 1.799</span>
                  <span className="text-muted-foreground"> em até 12x</span>
                </div>
                <Link
                  href="/contato"
                  className="btn-primary w-full py-3 rounded-lg font-semibold text-center block"
                  data-testid="button-matricular-categoria-b"
                >
                  Matricule-se
                </Link>
              </div>
            </div>
            
            {/* Category C */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border" data-testid="category-c">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-truck text-primary text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Categoria C</h3>
                  <p className="text-muted-foreground">Caminhões</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">O que inclui:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    30 horas/aula teóricas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    20 horas/aula práticas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Curso de transporte de cargas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Simulador especializado
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">R$ 2.299</span>
                  <span className="text-muted-foreground"> em até 12x</span>
                </div>
                <Link
                  href="/contato"
                  className="btn-primary w-full py-3 rounded-lg font-semibold text-center block"
                  data-testid="button-matricular-categoria-c"
                >
                  Matricule-se
                </Link>
              </div>
            </div>
            
            {/* Category D */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border" data-testid="category-d">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-bus text-primary text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Categoria D</h3>
                  <p className="text-muted-foreground">Ônibus</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">O que inclui:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    30 horas/aula teóricas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    25 horas/aula práticas
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Curso de transporte de passageiros
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-accent mr-2"></i>
                    Primeiros socorros
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-primary">R$ 2.599</span>
                  <span className="text-muted-foreground"> em até 12x</span>
                </div>
                <Link
                  href="/contato"
                  className="btn-primary w-full py-3 rounded-lg font-semibold text-center block"
                  data-testid="button-matricular-categoria-d"
                >
                  Matricule-se
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-additional">
              Serviços Adicionais
            </h2>
            <p className="text-xl text-muted-foreground">
              Oferecemos também outros serviços para complementar sua formação
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border text-center" data-testid="service-reciclagem">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-redo-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reciclagem CNH</h3>
              <p className="text-muted-foreground mb-4">
                Curso obrigatório para renovação de habilitação após suspensão ou cassação.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">R$ 299</div>
              <button className="text-primary font-medium hover:underline" data-testid="button-saiba-mais-reciclagem">
                Saiba Mais
              </button>
            </div>
            
            {/* Service 2 */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border text-center" data-testid="service-defensiva">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Direção Defensiva</h3>
              <p className="text-muted-foreground mb-4">
                Curso especializado em técnicas de direção segura e prevenção de acidentes.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">R$ 199</div>
              <button className="text-primary font-medium hover:underline" data-testid="button-saiba-mais-defensiva">
                Saiba Mais
              </button>
            </div>
            
            {/* Service 3 */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border text-center" data-testid="service-primeiros-socorros">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Primeiros Socorros</h3>
              <p className="text-muted-foreground mb-4">
                Aprenda a prestar socorro em situações de emergência no trânsito.
              </p>
              <div className="text-2xl font-bold text-primary mb-4">R$ 149</div>
              <button className="text-primary font-medium hover:underline" data-testid="button-saiba-mais-primeiros-socorros">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-how-it-works">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples e transparente para obter sua habilitação
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center" data-testid="step-matricula">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Matrícula</h3>
              <p className="text-muted-foreground">
                Venha até nossa unidade ou entre em contato para se matricular
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center" data-testid="step-exames">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Exames</h3>
              <p className="text-muted-foreground">
                Realizamos os exames médico e psicotécnico necessários
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center" data-testid="step-aulas">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Aulas</h3>
              <p className="text-muted-foreground">
                Aulas teóricas e práticas com nossos instrutores qualificados
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center" data-testid="step-aprovacao">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Aprovação</h3>
              <p className="text-muted-foreground">
                Prova final no DETRAN e retirada da sua habilitação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Pronto para começar?"
        subtitle="Escolha o curso ideal para você e comece sua jornada hoje mesmo"
        primaryButtonText="Matricule-se Agora"
        primaryButtonHref="/contato"
        secondaryButtonText="Fale no WhatsApp"
      />
    </div>
  );
}
