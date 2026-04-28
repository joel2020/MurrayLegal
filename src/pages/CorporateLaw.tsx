import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';
import { Link } from '../lib/router';

const faqItems = [
  {
    question: 'Should I form an LLC or corporation in New York?',
    answer: 'Entity choice depends on governance, tax treatment, investment goals, and liability planning.',
  },
  {
    question: 'Do you review operating agreements?',
    answer:
      'Yes. We draft and revise operating, shareholder, and partnership agreements for clarity and enforceability.',
  },
  {
    question: 'Can you support acquisitions?',
    answer: 'Yes. Murray Legal handles transaction structure, diligence, and acquisition documentation.',
  },
  {
    question: 'What is corporate governance?',
    answer:
      'Governance is the system of decision-making, oversight, and fiduciary obligations for owners, boards, and officers.',
  },
  {
    question: 'Do you provide ongoing general counsel support?',
    answer:
      'Yes. The firm provides outside counsel guidance for day-to-day contracts and strategic decisions.',
  },
];

export default function CorporateLaw(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Corporate Law Attorney New York | Business Law | Murray Legal"
        description="Murray Legal provides corporate and business law services in New York including formation, contracts, governance, and transactions."
        canonical="https://murraylegal.com/corporate-law"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Murray Legal',
          serviceType: 'Corporate Law',
        }}
      />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Corporate Law Attorney in New York</h1>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted">
          <li>Business formation (LLC, corporation, partnership)</li>
          <li>Contract drafting, review, negotiation</li>
          <li>Business acquisitions and mergers</li>
          <li>Shareholder and operating agreements</li>
          <li>Regulatory compliance</li>
          <li>Corporate governance</li>
        </ul>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-3xl text-navy">Related Services</h2>
        <p className="mt-3 text-text-muted">
          Looking for deeper support with board procedures, fiduciary obligations, and governance controls?
        </p>
        <Link
          to="/corporate-law/corporate-governance"
          ariaLabel="Corporate governance services"
          className="mt-4 inline-block min-h-11 py-3 font-semibold text-navy"
        >
          Explore Corporate Governance →
        </Link>
      </section>
      <section className="mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-4xl text-navy">Corporate Law FAQ</h2>
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
