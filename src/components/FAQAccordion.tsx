import { Minus, Plus } from 'lucide-react';
import { useId, useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps): JSX.Element {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  const instanceId = useId().replace(/:/g, '');

  const toggle = (index: number): void => {
    setOpenIndexes((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  return (
    <div className="border-t border-ink/20">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const panelId = `faq-${instanceId}-panel-${index}`;
        const buttonId = `faq-${instanceId}-button-${index}`;

        return (
          <article key={item.question} className="border-b border-ink/20">
            <h3>
              <button
                id={buttonId}
                className="flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-base font-bold leading-7 text-ink transition hover:text-gold-dark"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                type="button"
              >
                {item.question}
                <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center border border-ink/20">
                  {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-muted sm:text-base">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
