import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps): JSX.Element {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number): void => {
    setOpenIndexes((current) => (current.includes(index) ? current.filter((i) => i !== index) : [...current, index]));
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article key={item.question} className="overflow-hidden rounded-md bg-white shadow-soft">
            <h3>
              <button
                id={buttonId}
                className="flex min-h-11 w-full items-center justify-between px-5 py-4 text-left text-base font-semibold text-text-dark"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={item.question}
                type="button"
              >
                {item.question}
                <span aria-hidden="true" className="ml-3 text-xl text-navy">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-80'}`}
            >
              <p className="overflow-hidden px-5 pb-4 text-sm leading-7 text-text-muted">{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
