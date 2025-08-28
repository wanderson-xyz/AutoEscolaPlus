import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-card rounded-xl shadow-lg border border-border">
          <button
            className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
            onClick={() => toggleItem(index)}
            data-testid={`faq-question-${index}`}
          >
            <h3 className="font-semibold text-foreground pr-4">
              {item.question}
            </h3>
            <i
              className={`fas fa-chevron-down text-muted-foreground transition-transform duration-200 ${
                openItems.has(index) ? 'rotate-180' : ''
              }`}
            ></i>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-6">
              <p className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${index}`}>
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
