import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema, faqSchema, localLegalServiceSchema } from '../lib/schema';
import { Link } from '../lib/router';
import { usePathname } from '../lib/usePathname';

type NationalServicePage = {
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

const pages: Record<string, NationalServicePage> = {
  '/business-attorney': {
    path: '/business-attorney',
    title: 'Business Attorney Services',
    metaTitle: 'Business Attorney Services | Murray Legal',
    metaDescription:
      'Murray Legal provides business attorney services for contracts, governance, transactions, ownership matters, and dispute prevention for clients across the United States where permitted by law.',
    h1: 'Business Attorney Services for Contracts, Governance & Strategic Risk Management',
    intro:
      'Murray Legal supports business owners, founders, investors, and companies with practical legal guidance for contracts, governance, transactions, ownership documentation, and dispute prevention. The firm works with clients across the United States where permitted by law and in coordination with local counsel when required.',
    bullets: [
      'Contract drafting, review, and negotiation',
      'Business formation and governance guidance',
      'Operating agreement, shareholder, and ownership issue review',
      'Vendor, client, and commercial agreement strategy',
      'Dispute prevention and pre-litigation planning',
    ],
    faqs: [
      {
        question: 'Can Murray Legal work with business clients outside New York?',
        answer:
          'Yes. Murray Legal supports clients across the United States where permitted by law and coordinates with local counsel when a matter requires jurisdiction-specific representation.',
      },
      {
        question: 'What does a business attorney help with?',
        answer:
          'A business attorney can help with contracts, entity governance, ownership documentation, transaction planning, commercial risk, and dispute-prevention strategy.',
      },
      {
        question: 'When should a company involve legal counsel?',
        answer:
          'Counsel should be involved before signing major contracts, changing ownership, entering new partnerships, responding to disputes, or taking on significant financial or operational risk.',
      },
    ],
    related: [
      { label: 'Corporate Law', href: '/corporate-law' },
      { label: 'Contract Disputes', href: '/contract-disputes' },
      { label: 'Schedule a Consultation', href: '/contact' },
    ],
  },
  '/contract-disputes': {
    path: '/contract-disputes',
    title: 'Contract Dispute Lawyer Services',
    metaTitle: 'Contract Dispute Lawyer Services | Murray Legal',
    metaDescription:
      'Murray Legal helps clients evaluate contract disputes, breach issues, negotiation strategy, evidence preservation, and litigation risk where permitted by law.',
    h1: 'Contract Dispute Lawyer Services for Breach, Negotiation & Litigation Strategy',
    intro:
      'Contract disputes often turn on the agreement language, party communications, performance history, damages, and timing. Murray Legal helps clients evaluate contract rights, preserve evidence, assess leverage, and choose practical next steps where permitted by law and in coordination with local counsel when required.',
    bullets: [
      'Breach of contract review and issue analysis',
      'Demand letter and response strategy',
      'Evidence and document preservation planning',
      'Negotiation and settlement positioning',
      'Litigation risk and next-step analysis',
    ],
    faqs: [
      {
        question: 'What should I do first in a contract dispute?',
        answer:
          'Gather the signed contract, amendments, emails, text messages, invoices, payment records, performance documents, and any formal notices exchanged between the parties.',
      },
      {
        question: 'Does every contract dispute go to court?',
        answer:
          'No. Many disputes are resolved through negotiation, settlement, or pre-litigation strategy depending on the contract, evidence, damages, and business goals.',
      },
      {
        question: 'Can I hire a contract dispute lawyer remotely?',
        answer:
          'Often, yes. Many contract reviews and dispute assessments can begin remotely, with local counsel coordination when required by the jurisdiction or court rules.',
      },
    ],
    related: [
      { label: 'Civil Litigation', href: '/civil-litigation' },
      { label: 'Business Disputes', href: '/civil-litigation/business-disputes' },
      { label: 'Business Attorney Services', href: '/business-attorney' },
    ],
  },
};

export default function NationalServices(): JSX.Element {
  const path = usePathname();
  const page = pages[path] ?? pages['/business-attorney'];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      localLegalServiceSchema(page.title),
      faqSchema(page.faqs),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.title, path: page.path }]),
    ],
  };

  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead title={page.metaTitle} description={page.metaDescription} canonical={`${SITE_URL}${page.path}`} schema={schema} />

      <section className="mx-auto max-w-6xl">
        <span className="section-label">National Legal Advisory</span>
        <h1 className="mt-3 font-display text-5xl text-navy">{page.h1}</h1>
        <p className="mt-5 max-w-4xl leading-8 text-text-muted">{page.intro}</p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-text-muted">
          Attorney Advertising. This website provides general information only and does not constitute legal advice.
          Contacting Murray Legal does not create an attorney-client relationship. Services are provided where permitted
          by law and in coordination with local counsel where required.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">How Murray Legal Can Help</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-text-muted">
          {page.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-5">
          {page.faqs.map((faq) => (
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
          {page.related.map((link) => <Link key={link.href} to={link.href} className="btn-secondary" ariaLabel={link.label}>{link.label}</Link>)}
        </div>
      </section>

      <div className="mt-14"><ConsultationCTA /></div>
    </main>
  );
}
