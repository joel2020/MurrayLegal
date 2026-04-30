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
    question: 'Where is Murray Legal licensed to practice law?',
    answer:
      'Murray Legal is licensed in Pennsylvania, maintains an office in Yonkers, New York, and works with clients on nationwide matters where permitted by law, including through local counsel or jurisdiction-appropriate arrangements when needed.',
  },
  {
    question: 'Can Murray Legal help with Pennsylvania real estate transactions?',
    answer:
      'Yes. The firm assists with Pennsylvania real estate contract review, transaction planning, closing preparation, title-related concerns, and deal-risk strategy.',
  },
  {
    question: 'Does the firm handle business and contract matters?',
    answer:
      'Yes. Murray Legal supports business owners and companies with contract review, governance issues, dispute prevention, and contract dispute strategy.',
  },
  {
    question: 'How quickly can I expect a response from Murray Legal?',
    answer: 'The firm aims to respond to new inquiries within one business day and prioritizes urgent matters.',
  },
];

const practiceCards = [
  {
    title: 'Pennsylvania Real Estate Attorney',
    description: 'Contract review, closing preparation, title concerns, and transaction strategy for Pennsylvania property matters.',
    href: '/pennsylvania-real-estate-attorney',
  },
  {
    title: 'Pennsylvania Business Attorney',
    description: 'Contracts, governance, entity issues, ownership documentation, and business risk management.',
    href: '/pennsylvania-business-attorney',
  },
  {
    title: 'Pennsylvania Contract Disputes',
    description: 'Breach review, negotiation strategy, document preservation, and litigation-risk planning.',
    href: '/pennsylvania-contract-dispute-attorney',
  },
];

const secondaryLinks = [
  { label: 'Philadelphia Real Estate Attorney', href: '/philadelphia-real-estate-attorney' },
  { label: 'Real Estate Legal Guides', href: '/blog' },
  { label: 'Contact Murray Legal', href: '/contact' },
];

export default function Home(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <SEOHead
        title="Murray Legal | Pennsylvania Real Estate, Business & Contract Counsel"
        description="Murray Legal is licensed in Pennsylvania, maintains an office in Yonkers, and helps clients with real estate, business, contract, and dispute matters where permitted by law."
        canonical={`${SITE_URL}/`}
        schema={localLegalServiceSchema()}
      />

      <section className="relative isolate overflow-hidden bg-navy-deep text-ivory">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
          alt="City skyline at dusk"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/90" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-6 md:py-36">
          <span className="gold-rule" aria-hidden="true" />
          <h1 className="max-w-4xl font-display text-display-xl text-ivory">
            Pennsylvania Real Estate, Business &amp; Contract Counsel
          </h1>
          <p className="mt-6 max-w-[72ch] text-base text-stone/85 md:text-lg">
            Murray Legal is licensed in Pennsylvania, maintains an office in Yonkers, New York, and helps clients evaluate
            real estate transactions, business contracts, governance issues, and disputes where permitted by law.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 max-sm:flex-col">
            <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/pennsylvania-real-estate-attorney" ariaLabel="View Pennsylvania real estate services" className="btn-outline text-center">
              Pennsylvania Real Estate Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-label">Pennsylvania Legal Services</span>
            <span className="gold-rule" aria-hidden="true" />
            <h2 className="font-display text-display-lg text-navy">Focused legal guidance for property, business, and contract matters.</h2>
            <p className="mt-5 text-text-muted">
              The site includes educational resources for New York and nationwide topics, but Murray Legal’s licensed-service
              focus is Pennsylvania. These pages help clients quickly find the right starting point for real estate,
              business, and contract-related matters.
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

          <div className="mt-8 flex flex-wrap gap-3">
            {secondaryLinks.map((link) => (
              <Link key={link.href} to={link.href} ariaLabel={link.label} className="btn-secondary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="section-label">Why Clients Contact Murray Legal</span>
            <span className="gold-rule" aria-hidden="true" />
            <h2 className="font-display text-display-md text-navy">Legal issues are easier to manage before deadlines, disputes, or closing pressure take over.</h2>
          </div>
          <div className="space-y-5 text-text-muted">
            <p>
              Buyers, sellers, investors, founders, and business owners often wait until a contract is signed, a title issue appears,
              or a disagreement has already escalated. Early review can clarify rights, preserve options, and reduce avoidable risk.
            </p>
            <p>
              Murray Legal helps clients organize documents, identify legal and business risks, and choose practical next steps. For matters
              outside Pennsylvania, the firm works only where permitted by law, including through local counsel or jurisdiction-appropriate arrangements when required.
            </p>
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
