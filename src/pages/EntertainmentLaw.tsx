import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  {
    question: 'What should artists focus on before signing a recording or distribution deal?',
    answer:
      'Key terms include rights granted, ownership of masters, exclusivity scope, recoupment language, payment calculations, and termination rights.',
  },
  {
    question: 'Can legal review help prevent disputes during production?',
    answer:
      'Yes. Clear chain-of-title documentation, release forms, scope definitions, and payment milestones reduce misunderstandings and protect delivery timelines.',
  },
  {
    question: 'Do independent creators need formal agreements with collaborators?',
    answer:
      'Absolutely. Written agreements for producers, writers, editors, and contractors are essential to define ownership, compensation, and reuse rights.',
  },
  {
    question: 'How do licensing agreements support monetization?',
    answer:
      'Licensing agreements set permitted uses, territory, media formats, term, compensation models, and enforcement rights so creators can monetize safely.',
  },
];

export default function EntertainmentLaw(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Entertainment Lawyer New York | Murray Legal"
        description="Murray Legal advises artists, producers, and entertainment businesses in New York on contracts, licensing, and production transactions."
        canonical="https://murraylegal.com/entertainment-law"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Murray Legal',
          serviceType: 'Entertainment Law',
        }}
      />
      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Entertainment Attorney in New York</h1>
        <p className="mt-4 text-lg text-text-muted">
          Entertainment projects move fast, involve multiple stakeholders, and often depend on rights that can be
          difficult to unwind once content is released. Murray Legal advises creators, production teams, managers,
          agencies, and entertainment businesses on legal structures that support both creative momentum and commercial
          protection. We negotiate contracts that reflect project realities, protect ownership interests, and clarify the
          economics of distribution, promotion, and revenue participation.
        </p>
        <p className="mt-4 text-lg text-text-muted">
          Our representation spans talent agreements, producer and contractor arrangements, collaboration terms,
          production services contracts, and licensing frameworks. We focus on practical risk management: confirming
          chain-of-title, documenting rights grants, and addressing approval, credit, and payment mechanics before they
          become disputed issues. For businesses developing recurring content pipelines, we help standardize templates and
          workflows so legal review remains efficient without sacrificing quality. We also support negotiations with
          labels, distributors, sponsors, and digital platforms where rights and obligations can materially impact a
          project’s long-term value.
        </p>
        <p className="mt-4 text-lg text-text-muted">
          Every entertainment matter is different. A first-time independent release may require lightweight but precise
          agreements, while larger productions demand layered contracts, release documentation, and clear responsibility
          mapping across teams. Our approach is strategic and client-centered: we identify what must be protected,
          prioritize core deal points, and prepare terms that are understandable and enforceable. Whether you are
          launching a project, expanding your catalog, or renegotiating an existing relationship, Murray Legal helps you
          move forward with legal clarity and stronger negotiating leverage.
        </p>
      </section>
      <section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Entertainment Law Services</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted">
          <li>Contract drafting and negotiation for creative services</li>
          <li>Talent, management, and collaboration agreements</li>
          <li>Licensing strategy for content, music, and branded media</li>
          <li>Production agreements and release documentation</li>
          <li>Distribution, label, and platform-facing deal support</li>
        </ul>
      </section>
      <section className="mx-auto mt-10 max-w-4xl">
        <h2 className="font-display text-4xl text-navy">Entertainment Law FAQ</h2>
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
