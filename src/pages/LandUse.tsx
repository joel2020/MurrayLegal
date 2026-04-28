import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';
import { Link } from '../lib/router';

const faqItems = [
  {
    question: 'What is a zoning variance?',
    answer:
      'A zoning variance is municipal permission to depart from strict zoning requirements when legal hardship standards are met.',
  },
  {
    question: 'How long does land use approval take in New York?',
    answer:
      'Timelines vary by municipality, project size, environmental review, and public hearing schedules.',
  },
  {
    question: 'Can I appeal a zoning board decision?',
    answer:
      'Yes, zoning determinations may be challenged through administrative and judicial procedures when legally justified.',
  },
  {
    question: 'Do I need environmental review for development?',
    answer:
      'Many projects require environmental analysis under SEQRA and related local procedures.',
  },
  {
    question: 'What is zoning compliance analysis?',
    answer:
      'It is a legal review of permitted use, dimensional rules, parking requirements, and development restrictions before project commitment.',
  },
];

export default function LandUse(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Land Use Attorney New York | Zoning Variance Lawyer | Murray Legal"
        description="Murray Legal advises clients on land use, zoning variances, permits, and entitlements in New York and Westchester County."
        canonical="https://murraylegal.com/real-estate-attorney/land-use-zoning"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Murray Legal',
          serviceType: 'Land Use and Zoning',
        }}
      />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Land Use & Zoning Attorney in New York</h1>
        <p className="mt-3 text-text-muted">
          Land use law governs how property may be used, developed, and modified under municipal codes, planning
          frameworks, and environmental review standards.
        </p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted">
          <li>Zoning variances and appeals</li>
          <li>Use permits and special exceptions</li>
          <li>Environmental review</li>
          <li>Subdivision and site plan approval</li>
          <li>Zoning compliance analysis</li>
        </ul>
      </section>
      <section className="mx-auto mt-10 max-w-6xl">
        <h2 className="font-display text-4xl text-navy">Our Process</h2>
        <p className="mt-3 text-text-muted">
          We begin with zoning and entitlement due diligence, coordinate submissions with design professionals, prepare
          board presentations, and manage hearing and approval strategy through final determination.
        </p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-3xl text-navy">Related Services</h2>
        <p className="mt-3 text-text-muted">Need support for purchase, leasing, or development closing work?</p>
        <Link
          to="/real-estate-attorney/commercial-transactions"
          ariaLabel="Commercial real estate transactions"
          className="mt-4 inline-block font-semibold text-navy"
        >
          Explore Commercial Real Estate Transactions →
        </Link>
      </section>
      <section className="mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-4xl text-navy">Land Use FAQ</h2>
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
