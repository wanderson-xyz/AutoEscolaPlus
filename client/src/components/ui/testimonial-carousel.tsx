import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  category: string;
  date: string;
  content: string;
  avatar: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export default function TestimonialCarousel({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Nenhum depoimento disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Content */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border text-center">
                <div className="flex justify-center mb-4" data-testid={`testimonial-stars-${testimonial.id}`}>
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-lg text-muted-foreground mb-6 italic" data-testid={`testimonial-content-${testimonial.id}`}>
                  "{testimonial.content}"
                </blockquote>
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  data-testid={`testimonial-avatar-${testimonial.id}`}
                />
                <h3 className="font-semibold text-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                  {testimonial.name}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`testimonial-details-${testimonial.id}`}>
                  {testimonial.category} - {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-primary rounded-full text-white hover:bg-primary/80 transition-colors"
            data-testid="button-testimonial-prev"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-primary rounded-full text-white hover:bg-primary/80 transition-colors"
            data-testid="button-testimonial-next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}

      {/* Indicators */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
              data-testid={`testimonial-indicator-${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
