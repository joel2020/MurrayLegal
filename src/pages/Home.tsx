import { useState } from 'react';
import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { localLegalServiceSchema } from '../lib/schema';
import { Link } from '../lib/router';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Do I need a real estate attorney for property transactions in New York?',
    answer:
      'In New York, attorney representation is standard for closings. Counsel helps with contract terms, title issues, and closing coordination before risks become expensive.',
  },
  {
    question: 'Can Murray Legal help with zoning issues before a purchase?',
    answer:
      'Yes. Zoning due diligence can identify use restrictions, violations, and approval requirements before acquisition decisions are final.',
  },
  {
    question: 'Does the firm handle business litigation in addition to transactions?',
    answer:
      'Yes. Murray Legal handles contract disputes, ownership conflicts, and related commercial litigation matters in addition to transactional work.',
  },
  {
    question: 'How quickly can I expect a response from Murray Legal?',
    answer: 'The firm aims to respond to new inquiries within one business day and prioritizes urgent matters.',
  },
];

const practiceCards = [
  {
    title: 'Real Estate Law',
    description: 'Land use, zoning, commercial transactions, and residential closings.',
    href: '/real-estate-attorney',
  },
  {
    title: 'Business Law',
    description: 'Entity formation, contracts, governance, and strategic legal support.',
    href: '/corporate-law',
  },
  {
    title: 'Civil Litigation',
    description: 'Business disputes and civil claims handled with disciplined case strategy.',
    href: '/civil-litigation',
  },
];

export default function Home(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <SEOHead
        title="Murray Legal | Real Estate Attorney & Business Law Counsel in Yonkers"
        description="Murray Legal provides focused, attorney-led representation for real estate, business law, and civil litigation matters in Yonkers, Westchester, and greater New York."
        canonical={`${SITE_URL}/`}
        schema={localLegalServiceSchema()}
      />

      <section className="relative isolate overflow-hidden bg-navy-deep text-ivory">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
          alt="New York skyline at dusk"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/90" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-6 md:py-36">
          <span className="gold-rule" aria-hidden="true" />
          <h1 className="max-w-4xl font-display text-display-xl text-ivory">
            Real Estate, Business &amp; Litigation Counsel in Yonkers, New York
          </h1>
          <p className="mt-6 max-w-[70ch] text-base text-stone/85 md:text-lg">
            Murray Legal provides focused, attorney-led representation for property owners, businesses, and
            individuals navigating important legal matters across Westchester and greater New York.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="#practice-areas" ariaLabel="View practice areas" className="btn-outline">
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-label">About the Firm</span>
            <span className="gold-rule" aria-hidden="true" />
            <h2 className="font-display text-display-lg text-navy">Direct attorney-led counsel with clear strategy.</h2>
            <p className="mt-5 text-text-muted">
              Murray Legal advises clients on real estate, business, and litigation matters with clear communication and
              practical legal execution.
            </p>
          </div>

          <div id="practice-areas" className="grid gap-6 md:grid-cols-3">
            {practiceCards.map((card) => (
              <article key={card.title} className="card-premium bg-white">
                <h3 className="text-2xl text-navy">{card.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{card.description}</p>
                <Link to={card.href} ariaLabel={`Learn more about ${card.title}`} className="mt-6 inline-block text-sm font-semibold text-navy">
                  Learn More <span className="text-gold">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone px-4 py-20 md:px-6 md:py-24" id="faq">
        <div className="mx-auto max-w-4xl">
          <span className="section-label">Frequently Asked Questions</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-md text-navy">Your Questions, Clearly Answered</h2>

          <div className="mt-10">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article key={item.question} className="border-b border-[rgba(15,31,61,0.08)] py-2">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`home-faq-panel-${index}`}
                      id={`home-faq-button-${index}`}
                    >
                      <span className="text-[0.95rem] font-semibold text-navy">{item.question}</span>
                      <span className="text-2xl leading-none text-gold" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`home-faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`home-faq-button-${index}`}
                    className={`overflow-hidden transition-[max-height] duration-300 ease-premium ${
                      isOpen ? 'max-h-48' : 'max-h-0'
                    }`}
                  >
                    <p className="pb-4 text-[0.9rem] text-text-muted">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <Link to="/faq" ariaLabel="View all frequently asked questions" className="mt-8 inline-block text-sm font-semibold text-navy">
            View all FAQs <span className="text-gold">→</span>
          </Link>
        </div>
      </section>

      <ConsultationCTA />
    </main>
  );
}
