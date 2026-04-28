import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  {
    question: 'When should a company update bylaws or an operating agreement?',
    answer:
      'Businesses should revisit governing documents after ownership changes, leadership transitions, financing rounds, or major regulatory developments to reduce ambiguity and dispute risk.',
  },
  {
    question: 'What governance issues matter most to closely held companies?',
    answer:
      'Decision-making authority, voting thresholds, transfer restrictions, succession planning, and conflict resolution procedures are often the highest-priority issues for closely held entities.',
  },
  {
    question: 'How can governance planning reduce litigation exposure?',
    answer:
      'Clear board procedures, accurate recordkeeping, strong conflict policies, and consistent compliance protocols help companies demonstrate diligence and avoid preventable disputes.',
  },
  {
    question: 'Do startups need formal governance before outside investment?',
    answer:
      'Yes. Investors expect organized governance, clear cap table controls, and documented authority for material decisions before committing capital.',
  },
];

export default function CorporateGovernance(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Corporate Governance Attorney New York | Murray Legal"
        description="Murray Legal advises New York businesses on board governance, fiduciary duties, internal controls, and ownership frameworks."
        canonical="https://murraylegal.com/corporate-law/corporate-governance"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Murray Legal',
          serviceType: 'Corporate Governance',
        }}
      />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Corporate Governance Attorney in New York</h1>
        <p className="mt-4 text-lg text-text-muted">
          Effective governance gives organizations a reliable framework for decision-making, accountability, and long-term
          growth. At Murray Legal, we counsel founders, executives, boards, and closely held owners on practical systems
          that align legal requirements with business goals. Our work focuses on building processes that support
          day-to-day operations while protecting the enterprise when challenges arise, including ownership friction,
          strategic pivots, financing activity, and leadership transitions.
        </p>
        <p className="mt-4 text-lg text-text-muted">
          We help clients develop governance structures that clarify authority across owners, managers, officers, and
          directors. That means drafting and updating bylaws, operating agreements, shareholder agreements, and board
          policies so each stakeholder understands their rights and responsibilities. We also advise on fiduciary duties,
          approval mechanics for major transactions, and governance controls that can support audits, investor diligence,
          and regulatory compliance. For businesses preparing to scale, we coordinate governance planning with capital
          strategy and contract infrastructure to avoid unnecessary legal bottlenecks.
        </p>
        <p className="mt-4 text-lg text-text-muted">
          Corporate governance is not one-size-fits-all. A family-owned business, a venture-backed startup, and an
          established operating company each require tailored policies and documentation. Our approach is collaborative
          and business-focused: we assess current governance practices, identify risk points, and deliver implementation
          steps that are realistic for leadership teams to maintain. When disagreements occur, strong governance records
          often make the difference between an efficient resolution and a costly dispute. Murray Legal positions clients
          to make confident decisions while preserving optionality for growth, succession, and exit opportunities.
        </p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Governance Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted">
          <li>Board governance policies and fiduciary duty guidance</li>
          <li>Bylaw and operating agreement drafting or amendments</li>
          <li>Shareholder agreements and transfer restriction structures</li>
          <li>Officer and director authority, indemnification, and controls</li>
          <li>Compliance frameworks and governance due diligence support</li>
        </ul>
      </section>
      <section className="mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-4xl text-navy">Corporate Governance FAQ</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
