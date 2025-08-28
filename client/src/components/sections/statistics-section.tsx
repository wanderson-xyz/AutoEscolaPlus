import { useEffect, useRef, useState } from "react";

interface Statistic {
  icon: string;
  number: string;
  label: string;
}

interface StatisticsSectionProps {
  statistics: Statistic[];
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = target / steps;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(Math.floor(stepValue * currentStep), target);
      setCount(currentValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="number-counter" data-testid="animated-counter">
      {count}{suffix}
    </div>
  );
}

export default function StatisticsSection({ statistics }: StatisticsSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/\D/g, ''));
            const suffix = stat.number.replace(/\d/g, '');
            
            return (
              <div key={index} className="p-6" data-testid={`stat-item-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${stat.icon} text-primary text-2xl`}></i>
                </div>
                <AnimatedCounter target={numericValue} suffix={suffix} />
                <p className="text-muted-foreground font-medium" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
