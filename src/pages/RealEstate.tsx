import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema, faqSchema, localLegalServiceSchema } from '../lib/schema';
import { Link } from '../lib/router';

const serviceAreas = [
  {
    title: 'Transaction Strategy',
    intro:
      'Real estate transactions move quickly, but the risks often sit inside contract language, title records, financing terms, and closing obligations. Murray Legal helps clients understand the deal before they commit.',
    bullets: [
      'Purchase and sale agreement review',
      'Contract contingency and deadline analysis',
      'Buyer, seller, investor, and owner-side strategy',
      'Closing preparation and document coordination',
    ],
  },
  {
    title: 'Commercial Real Estate',
    intro:
      'Commercial property matters often involve entities, leases, financing, due diligence, zoning, and significant capital exposure. The firm helps clients clarify obligations and reduce preventable deal friction.',
    bullets: [
      'Commercial acquisition and sale review',
      'Lease and occupancy issue analysis',
      'Development and due diligence planning',
      'Entity authority and deal-risk review',
    ],
  },
  {
    title: 'Residential Real Estate',
    intro:
      'A residential purchase or sale may be one of the largest financial transactions a client makes. Legal review can help identify risks before title issues, inspection disputes, or closing pressure take over.',
    bullets: [
      'Buyer and seller contract review',
      'Title, lien, and payoff issue spotting',
      'Inspection, credit, and repair negotiation support',
      'First-time buyer and owner guidance',
    ],
  },
  {
    title: 'Property Disputes & Risk Review',
    intro:
      'When a property disagreement appears, early legal strategy can preserve leverage. Murray Legal helps clients evaluate claims, documents, communications, and practical next steps.',
    bullets: [
      'Contract breach and default issue review',
      'Title, boundary, and ownership concern assessment',
      'Demand and response strategy',
      'Coordination with local counsel where required',
    ],
  },
];

const faqs = [
  {
    question: 'Can Murray Legal help clients with real estate matters across the United States?',
    answer:
      'Yes. Murray Legal supports clients across the United States where permitted by law and coordinates with local counsel when a matter requires jurisdiction-specific representation.',
  },
  {
    question: 'When should I contact a real estate attorney?',
    answer:
      'Contact counsel before signing a purchase agreement, waiving contingencies, accepting major deal terms, responding to a title issue, or escalating a property-related dispute.',
  },
  {
    question: 'Can real estate legal services be handled remotely?',
    answer:
      'Many real estate contract reviews, transaction strategy sessions, and document assessments can begin remotely. Local counsel may be coordinated when required by state law, court rules, or closing practice.',
  },
  {
    question: 'What documents should I prepare before a consultation?',
    answer:
      'Helpful documents include contracts, riders, title reports, inspection documents, lender communications, entity documents, leases, notices, emails, text messages, and any deadline-related correspondence.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    localLegalServiceSchema('Real Estate Attorney Services'),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Real Estate Attorney Services', path: '/real-estate-attorney' }]),
  ],
};

export default function RealEstate(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Real Estate Attorney Services | Murray Legal"
        description="Murray Legal provides real estate attorney services for property transactions, contract review, closing strategy, commercial deals, residential matters, and disputes nationwide where permitted by law."
        canonical={`${SITE_URL}/real-estate-attorney`}
        schema={schema}
      />

      <section className="mx-auto max-w-6xl">
        <span className="section-label">Real Estate Legal Counsel</span>
        <h1 className="mt-3 font-display text-5xl text-navy">Real Estate Attorney Services for Transactions, Contracts & Property Disputes</h1>
        <p className="mt-5 max-w-4xl leading-8 text-text-muted">
          Murray Legal helps buyers, sellers, investors, property owners, founders, and companies evaluate real estate
          transactions, contracts, title concerns, closing risk, and property-related disputes. The firm supports clients
          across the United States where permitted by law and coordinates with local counsel when jurisdiction-specific
          representation is required.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 max-sm:flex-col">
          <Link to="/contact" ariaLabel="Schedule a real estate consultation" className="btn-primary">
            Schedule a Consultation
          </Link>
          <Link to="/business-attorney" ariaLabel="View business attorney services" className="btn-secondary text-center">
            Business Attorney Services
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
        {serviceAreas.map((section) => (
          <article key={section.title} className="rounded-md bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl text-navy">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-text-muted">{section.intro}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Real Estate Matters We Help Clients Evaluate</h2>
        <div className="mt-6 grid gap-4 text-sm text-text-muted md:grid-cols-3">
          <p>Purchase agreements, sale contracts, riders, contingencies, repair credits, closing timelines, and default risk.</p>
          <p>Title issues, liens, payoff concerns, entity authority, leases, financing conditions, and due diligence gaps.</p>
          <p>Property disputes, contract breaches, negotiation strategy, document preservation, and local counsel coordination.</p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-navy">{faq.question}</h3>
              <p className="mt-2 text-text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-md border border-[rgba(15,31,61,0.10)] bg-white p-8 shadow-soft">
        <h2 className="font-display text-3xl text-navy">Related Legal Resources</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/blog/new-york-real-estate-closing-process" className="btn-secondary" ariaLabel="Read real estate closing guide">Real Estate Closing Guide</Link>
          <Link to="/blog/commercial-real-estate-transactions-new-york" className="btn-secondary" ariaLabel="Read commercial real estate guide">Commercial Real Estate Guide</Link>
          <Link to="/contract-disputes" className="btn-secondary" ariaLabel="Contract dispute lawyer services">Contract Disputes</Link>
          <Link to="/contact" className="btn-secondary" ariaLabel="Contact Murray Legal">Discuss Your Matter</Link>
        </div>
      </section>

      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
