import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundImage,
  backgroundAlt,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-[1]">
        <img 
          src={backgroundImage}
          alt={backgroundAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-[3] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg" data-testid="hero-title">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md" data-testid="hero-subtitle">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={primaryButtonHref}
            className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold shadow-lg inline-block"
            data-testid="button-primary-cta"
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link 
              href={secondaryButtonHref}
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors inline-block"
              data-testid="button-secondary-cta"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
