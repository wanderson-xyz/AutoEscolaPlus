import HeroSection from "@/components/sections/hero-section";
import CTASection from "@/components/sections/cta-section";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="page-title">
              Nossa História
            </h1>
            <p className="text-xl text-muted-foreground">
              20 anos de tradição formando condutores responsáveis
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="section-title-journey">
                Uma jornada de excelência desde 2004
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A AutoEscola Plus nasceu da paixão de formar condutores responsáveis e conscientes. 
                Desde nossa fundação em 2004, temos o compromisso de oferecer ensino de qualidade, 
                aliando tradição e inovação para garantir que nossos alunos estejam preparados 
                para os desafios do trânsito moderno.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nossa metodologia única combina teoria sólida, prática intensiva e acompanhamento 
                personalizado, resultando em uma das maiores taxas de aprovação da região. 
                Acreditamos que dirigir é muito mais que uma habilidade técnica - é um ato de 
                responsabilidade social.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao longo dos anos, formamos mais de 5.000 condutores que hoje transitam com 
                segurança e confiança pelas ruas e estradas do país. Cada aprovação é uma 
                conquista que compartilhamos com orgulho.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Instructor and student in car lesson"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="image-instructor-student"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-values">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground">
              Princípios que nos guiam há mais de duas décadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border text-center" data-testid="value-seguranca">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Segurança</h3>
              <p className="text-muted-foreground">
                Priorizamos sempre a segurança de nossos alunos e de todos no trânsito, 
                ensinando técnicas defensivas e consciência sobre responsabilidade no volante.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border text-center" data-testid="value-compromisso">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Compromisso</h3>
              <p className="text-muted-foreground">
                Dedicação total ao sucesso e aprovação de cada um de nossos alunos, 
                oferecendo suporte completo durante toda a jornada de aprendizado.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="card-hover bg-card p-8 rounded-xl shadow-lg border border-border text-center" data-testid="value-inovacao">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lightbulb text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inovação</h3>
              <p className="text-muted-foreground">
                Sempre atualizados com as melhores metodologias de ensino e tecnologias 
                educacionais para proporcionar a melhor experiência de aprendizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-team">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground">
              Profissionais qualificados e dedicados ao seu sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border text-center" data-testid="team-member-carlos">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Carlos Silva - Diretor e Instrutor"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Carlos Silva</h3>
              <p className="text-primary font-medium mb-2">Diretor e Instrutor</p>
              <p className="text-muted-foreground text-sm">
                Fundador da AutoEscola Plus, com mais de 25 anos de experiência 
                no ensino de condução segura.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border text-center" data-testid="team-member-maria">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332c1ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="Maria Santos - Instrutora Teórica"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Maria Santos</h3>
              <p className="text-primary font-medium mb-2">Instrutora Teórica</p>
              <p className="text-muted-foreground text-sm">
                Especialista em legislação de trânsito, responsável pela 
                preparação teórica dos nossos alunos.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="card-hover bg-card p-6 rounded-xl shadow-lg border border-border text-center" data-testid="team-member-joao">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
                alt="João Oliveira - Instrutor Prático"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">João Oliveira</h3>
              <p className="text-primary font-medium mb-2">Instrutor Prático</p>
              <p className="text-muted-foreground text-sm">
                Instrutor de direção prática com foco em técnicas defensivas 
                e desenvolvimento de confiança ao volante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-facilities">
              Nossa Estrutura
            </h2>
            <p className="text-xl text-muted-foreground">
              Conheça nossas instalações modernas e bem equipadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Facility 1 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="facility-classroom">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Modern classroom for driving theory"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Salas de Aula Modernas</h3>
              </div>
            </div>
            
            {/* Facility 2 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="facility-fleet">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Modern car fleet for driving lessons"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Frota Moderna e Segura</h3>
              </div>
            </div>
            
            {/* Facility 3 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="facility-waiting">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Comfortable waiting area"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Área de Espera Confortável</h3>
              </div>
            </div>
            
            {/* Facility 4 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="facility-simulators">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Advanced driving simulators"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Simuladores Avançados</h3>
              </div>
            </div>
            
            {/* Facility 5 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="facility-reception">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Welcoming reception area"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Recepção Acolhedora</h3>
              </div>
            </div>
            
            {/* Facility 6 */}
            <div className="card-hover bg-card rounded-xl shadow-lg border border-border overflow-hidden" data-testid="facility-track">
              <img 
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
                alt="Training track for driving practice"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Pista de Treinamento</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Faça parte da nossa história"
        subtitle="Junte-se aos milhares de condutores que conquistaram sua habilitação conosco"
        primaryButtonText="Comece Sua Jornada"
        primaryButtonHref="/contato"
        showWhatsApp={false}
      />
    </div>
  );
}
