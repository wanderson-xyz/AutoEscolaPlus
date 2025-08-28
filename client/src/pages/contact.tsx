import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import FAQAccordion from "@/components/ui/faq-accordion";
import CTASection from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      category: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os cursos da AutoEscola Plus.");
    const phoneNumber = "5511999999999";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open("tel:+5511999999999", "_self");
  };

  const faqItems = [
    {
      question: "Qual é o tempo médio para conseguir a habilitação?",
      answer: "Em média, o processo completo leva de 2 a 4 meses, dependendo da categoria escolhida e da disponibilidade do aluno para as aulas práticas. Nossa equipe trabalha para agilizar todo o processo respeitando os prazos legais do DETRAN."
    },
    {
      question: "Posso parcelar o pagamento do curso?",
      answer: "Sim! Oferecemos parcelamento em até 12x no cartão de crédito. Também temos condições especiais para pagamento à vista. Entre em contato conosco para conhecer todas as opções de pagamento disponíveis."
    },
    {
      question: "Qual a taxa de aprovação da autoescola?",
      answer: "Nossa taxa de aprovação é de 95%, uma das maiores da região. Esse resultado é fruto do nosso método exclusivo de ensino, instrutores qualificados e acompanhamento personalizado de cada aluno durante todo o processo."
    },
    {
      question: "Vocês fazem busca e entrega na minha residência?",
      answer: "Sim, oferecemos o serviço de busca e entrega em algumas regiões da cidade. Este serviço está incluído no valor do curso para determinadas localidades. Consulte nossa equipe para verificar se sua região está contemplada."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600"
            alt="Contact us background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="page-title">
              Entre em Contato
            </h1>
            <p className="text-xl text-white/90">
              Estamos prontos para ajudar você a conquistar sua habilitação
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="form-title">
                Envie sua Mensagem
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone/WhatsApp *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(11) 9 9999-9999"
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu.email@exemplo.com"
                            {...field}
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria de Interesse</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <FormControl>
                            <SelectTrigger data-testid="select-category">
                              <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="a">Categoria A - Motos</SelectItem>
                            <SelectItem value="b">Categoria B - Carros</SelectItem>
                            <SelectItem value="c">Categoria C - Caminhões</SelectItem>
                            <SelectItem value="d">Categoria D - Ônibus</SelectItem>
                            <SelectItem value="other">Outros serviços</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Conte-nos como podemos ajudar você..."
                            className="resize-none"
                            rows={4}
                            maxLength={500}
                            {...field}
                            value={field.value || ""}
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground">Máximo de 500 caracteres</p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="btn-primary w-full py-3 rounded-lg font-semibold"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-form"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-info-title">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground" data-testid="contact-address">
                        Fortaleza, CE
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefones</h3>
                      <p className="text-muted-foreground">
                        <a 
                          href="tel:+5511999999999" 
                          className="hover:text-primary transition-colors"
                          data-testid="contact-phone"
                        >
                          (11) 9 9999-9999
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground">
                        <a 
                          href="mailto:contato@autoescolaplus.com.br" 
                          className="hover:text-primary transition-colors"
                          data-testid="contact-email"
                        >
                          contato@autoescolaplus.com.br
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                      <div className="text-muted-foreground space-y-1" data-testid="business-hours">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 14h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    onClick={handleWhatsAppClick}
                    className="btn-whatsapp flex-1 py-3 rounded-lg font-semibold text-center"
                    data-testid="button-whatsapp-contact"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Falar no WhatsApp
                  </button>
                  <button
                    onClick={handlePhoneClick}
                    className="btn-primary flex-1 py-3 rounded-lg font-semibold text-center"
                    data-testid="button-call-now"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Ligar Agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted relative z-[2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-location">
              Nossa Localização
            </h2>
            <p className="text-xl text-muted-foreground">
              Visite nossa unidade e conheça nossa estrutura
            </p>
          </div>
          
          {/* Google Maps */}
          <div className="h-96 rounded-xl overflow-hidden shadow-lg mb-6" data-testid="maps-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8957306494713!2d-38.49764812521349!3d-3.8325470961412713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748974adea79d%3A0x6d335f6b60942225!2sAuto%20Escola%20Prime!5e0!3m2!1spt-BR!2sbr!4v1756360434084!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Auto Escola Prime"
            ></iframe>
          </div>
          
          <div className="text-center">
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border inline-block">
              <div className="flex items-center justify-center space-x-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço Completo</h3>
                  <p className="text-muted-foreground">Auto Escola Prime - Fortaleza, CE</p>
                </div>
                <button 
                  className="btn-primary px-6 py-2 rounded-lg font-semibold"
                  onClick={() => window.open("https://www.google.com/maps/place/Auto+Escola+Prime/@-3.8325471,-38.4976481,17z/data=!3m1!4b1!4m6!3m5!1s0x7c748974adea79d:0x6d335f6b60942225!8m2!3d-3.8325471!4d-38.4950732!16s%2Fg%2F11bxcvl8_h", "_blank")}
                  data-testid="button-view-maps"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Ver no Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background relative z-[2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="section-title-faq">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre nossos cursos e serviços
            </p>
          </div>
          
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Não perca mais tempo!"
        subtitle="Entre em contato agora e dê o primeiro passo para conquistar sua independência"
        primaryButtonText="Matricule-se Agora"
        primaryButtonHref="/contato"
      />
    </div>
  );
}
