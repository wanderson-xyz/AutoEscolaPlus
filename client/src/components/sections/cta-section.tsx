import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showWhatsApp?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  showWhatsApp = true,
}: CTASectionProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os cursos da AutoEscola Plus.");
    const phoneNumber = "5511999999999";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 stats-gradient relative z-[2]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-testid="cta-title">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8" data-testid="cta-subtitle">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonHref}
            className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors inline-block"
            data-testid="button-cta-primary"
          >
            {primaryButtonText}
          </Link>
          {showWhatsApp ? (
            <button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
              data-testid="button-whatsapp"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp
            </button>
          ) : secondaryButtonText && secondaryButtonHref ? (
            <Link
              href={secondaryButtonHref}
              className="btn-whatsapp px-8 py-4 rounded-lg text-lg font-semibold shadow-lg inline-block"
              data-testid="button-cta-secondary"
            >
              {secondaryButtonText}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
