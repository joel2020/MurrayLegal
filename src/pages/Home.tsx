import { useState } from 'react';
import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { faqSchema, localLegalServiceSchema } from '../lib/schema';
import { Link } from '../lib/router';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Does Murray Legal work with clients across the United States?',
    answer:
      'Yes. Murray Legal supports clients across the United States where permitted by law and coordinates with local counsel when a matter requires jurisdiction-specific representation.',
  },
  {
    question: 'Can I hire a lawyer remotely for a real estate or business matter?',
    answer:
      'Many contract reviews, transaction strategy sessions, business matters, and dispute assessments can begin remotely. If a matter requires local court or jurisdiction-specific representation, Murray Legal can coordinate with local counsel where required.',
  },
  {
    question: 'What types of matters does Murray Legal handle?',
    answer:
      'The firm focuses on real estate transactions, contract review and negotiation, business and corporate matters, civil litigation strategy, and contract disputes.',
  },
  {
    question: 'When should I contact Murray Legal?',
    answer:
      'Contact the firm before signing a major agreement, closing a transaction, responding to a dispute, or taking action that could affect your rights, leverage, or financial exposure.',
  },
];

const practiceCards = [
  {
    title: 'Real Estate Legal Counsel',
    description: 'Transaction strategy, contract review, closing preparation, title concerns, and property-related risk analysis.',
    href: '/real-estate-attorney',
  },
  {
    title: 'Business Attorney Services',
    description: 'Contracts, governance, ownership documentation, commercial agreements, and business risk management.',
    href: '/business-attorney',
  },
  {
    title: 'Contract Dispute Lawyer Services',
    description: 'Breach analysis, demand strategy, negotiation support, evidence preservation, and litigation-risk planning.',
    href: '/contract-disputes',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [localLegalServiceSchema(), faqSchema(faqs)],
};

export default function Home(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <SEOHead
        title="Murray Legal | Real Estate, Business & Transactional Counsel"
        description="Murray Legal provides premium legal guidance for real estate transactions, business matters, contracts, and disputes for clients across the United States where permitted by law."
        canonical={`${SITE_URL}/`}
        schema={schema}
      />

      <section className="relative isolate overflow-hidden bg-navy-deep text-ivory">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80"
          alt="Modern city skyline representing national legal counsel"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/90" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-6 md:py-36">
          <span className="gold-rule" aria-hidden="true" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">Murray Legal</p>
          <h1 className="max-w-5xl font-display text-display-xl text-ivory">
            Real Estate, Business &amp; Transactional Counsel
          </h1>
          <p className="mt-6 max-w-[76ch] text-base text-stone/85 md:text-lg">
            Legal guidance for property transactions, business matters, contracts, and disputes — supporting clients
            across the United States where permitted by law and in coordination with local counsel when required.
          </p>
          <div className="mt-8 grid max-w-3xl gap-3 text-sm text-stone/90 sm:grid-cols-2">
            <span>✓ Real Estate Transactions</span>
            <span>✓ Contract Review &amp; Negotiation</span>
            <span>✓ Business &amp; Corporate Matters</span>
            <span>✓ Dispute Strategy</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 max-sm:flex-col">
            <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="/real-estate-attorney" ariaLabel="View real estate legal counsel services" className="btn-outline text-center">
              View Real Estate Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="section-label">National Legal Advisory</span>
            <span className="gold-rule" aria-hidden="true" />
            <h2 className="font-display text-display-lg text-navy">Premium counsel for high-stakes property, business, and contract decisions.</h2>
            <p className="mt-5 text-text-muted">
              Murray Legal helps clients clarify risk, protect leverage, and move decisively before documents are signed,
              transactions close, or disputes escalate. The firm supports matters across the country where permitted by law,
              with local counsel coordination when a jurisdiction requires it.
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
            <Link to="/corporate-law" ariaLabel="Corporate law services" className="btn-secondary">Corporate Law</Link>
            <Link to="/civil-litigation" ariaLabel="Civil litigation services" className="btn-secondary">Civil Litigation</Link>
            <Link to="/contact" ariaLabel="Contact Murray Legal" className="btn-secondary">Discuss Your Matter</Link>
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
              Murray Legal helps clients organize documents, identify legal and business risks, and choose practical next steps. Services
              are provided where permitted by law and in coordination with local counsel where required.
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
