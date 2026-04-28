import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  {
    question: 'What legal terms are most important in endorsement agreements?',
    answer:
      'Athletes should review exclusivity limits, compensation triggers, content approvals, morality provisions, deliverables, and termination rights before signing.',
  },
  {
    question: 'How are NIL agreements structured for student-athletes?',
    answer:
      'NIL agreements should clearly define usage rights, campaign obligations, payment timing, school-policy compliance, and post-term content rights.',
  },
  {
    question: 'Can representation agreements be negotiated for flexibility?',
    answer:
      'Yes. Scope of authority, commission structure, duration, renewal mechanics, and dispute resolution clauses can often be negotiated.',
  },
  {
    question: 'Why is transaction counsel useful for sports-related businesses?',
    answer:
      'Sports ventures often involve sponsorship, media rights, licensing, and vendor contracts that benefit from coordinated legal and commercial planning.',
  },
];

export default function SportsTransactions(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Sports Attorney New York | Murray Legal"
        description="Murray Legal advises athletes and sports businesses in New York on representation contracts, NIL deals, endorsements, and transaction structuring."
        canonical="https://murraylegal.com/sports-transactions"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Murray Legal',
          serviceType: 'Sports Transactions',
        }}
      />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Sports Transactions Attorney in New York</h1>
        <p className="mt-4 text-lg text-text-muted">
          Sports transactions combine high-visibility opportunities with significant legal complexity. Athletes,
          managers, agencies, and sports-focused businesses need contracts that protect value, preserve flexibility, and
          account for performance and reputation risk. Murray Legal advises clients through negotiations, drafting, and
          deal execution with a practical focus on enforceable terms and strategic positioning. We support both single
          transactions and long-term legal planning for clients building sustainable careers and enterprises in sports.
        </p>
        <p className="mt-4 text-lg text-text-muted">
          Our work includes endorsement and sponsorship agreements, representation contracts, event-related arrangements,
          media and licensing terms, and NIL matters for student-athletes. We help clients evaluate compensation models,
          usage rights, approvals, exclusivity, and termination language so obligations are clear and commercial upside is
          preserved. For sports businesses, we structure agreements that align business development goals with operational
          realities, including vendor relationships, partnership terms, and promotional commitments. We also coordinate
          risk allocation strategies to reduce dispute exposure and protect brand integrity.
        </p>
        <p className="mt-4 text-lg text-text-muted">
          Transaction success in sports often depends on timing, clarity, and leverage. Our approach begins with a
          thorough review of business priorities, then translates those priorities into concise and defensible legal
          terms. We communicate directly and efficiently throughout negotiations so clients can make informed decisions
          under tight deadlines. Whether you are evaluating your first endorsement, managing a portfolio of brand deals,
          or scaling a sports-related venture, Murray Legal provides disciplined legal support designed to protect your
          interests now and position you for future growth.
        </p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Sports Transaction Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted">
          <li>Athlete representation contracts and negotiation support</li>
          <li>Endorsement, sponsorship, and brand collaboration agreements</li>
          <li>Team, league, and event-related transactional counsel</li>
          <li>NIL deal structuring and policy-aligned documentation</li>
          <li>Sports business agreements and strategic commercial guidance</li>
        </ul>
      </section>
      <section className="mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-4xl text-navy">Sports Transactions FAQ</h2>
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
