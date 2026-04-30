import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema, localLegalServiceSchema } from '../lib/schema';
import { Link, usePathname } from '../lib/router';

type PAServicePage = {
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

const pages: Record<string, PAServicePage> = {
  '/pennsylvania-real-estate-attorney': {
    path: '/pennsylvania-real-estate-attorney',
    title: 'Pennsylvania Real Estate Attorney',
    metaTitle: 'Pennsylvania Real Estate Attorney | Murray Legal',
    metaDescription: 'Murray Legal assists with Pennsylvania real estate transaction matters, contract review, closing preparation, title issues, and commercial or residential deal strategy.',
    h1: 'Pennsylvania Real Estate Attorney for Transaction Review, Closings & Property Matters',
    intro: 'Murray Legal is licensed in Pennsylvania and helps clients evaluate real estate transactions, contract obligations, closing documents, title concerns, and deal risk. The firm maintains an office in Yonkers and works with clients nationwide where permitted by law, including local counsel coordination when needed.',
    bullets: ['Purchase and sale agreement review', 'Residential and commercial closing preparation', 'Title, lien, and document issue spotting', 'Contract deadlines, contingencies, and default-risk review', 'Coordination strategy for investors, owners, buyers, and sellers'],
    faqs: [
      { question: 'When should I contact a Pennsylvania real estate attorney?', answer: 'Before signing a contract, waiving contingencies, responding to title issues, or agreeing to closing terms that affect money, timing, or property rights.' },
      { question: 'Can Murray Legal review a real estate contract before I sign?', answer: 'Yes. Contract review can help identify deadlines, risk allocation, contingencies, default provisions, and practical closing concerns.' },
      { question: 'Does the firm handle matters outside Pennsylvania?', answer: 'Murray Legal may assist with nationwide matters where permitted by law, including through local counsel or jurisdiction-appropriate arrangements when needed.' },
    ],
    related: [{ label: 'Residential Transactions', href: '/real-estate-attorney/residential-transactions' }, { label: 'Commercial Transactions', href: '/real-estate-attorney/commercial-transactions' }, { label: 'New York Closing Process Guide', href: '/blog/new-york-real-estate-closing-process' }],
  },
  '/pennsylvania-business-attorney': {
    path: '/pennsylvania-business-attorney',
    title: 'Pennsylvania Business Attorney',
    metaTitle: 'Pennsylvania Business Attorney | Murray Legal',
    metaDescription: 'Murray Legal advises Pennsylvania businesses on contracts, governance, entity issues, ownership documentation, transactions, and dispute prevention.',
    h1: 'Pennsylvania Business Attorney for Contracts, Governance & Risk Management',
    intro: 'Businesses need clear legal documents before disputes, ownership changes, vendor issues, or growth decisions expose weak structure. Murray Legal supports Pennsylvania business clients with practical contract, governance, and risk-management guidance.',
    bullets: ['Contract drafting and review', 'LLC and corporate governance support', 'Operating agreement and shareholder issue review', 'Vendor, client, and commercial agreement strategy', 'Dispute prevention and pre-litigation planning'],
    faqs: [
      { question: 'What does a Pennsylvania business attorney help with?', answer: 'Business counsel can help with contracts, entity governance, ownership documents, commercial transactions, risk management, and dispute-prevention strategy.' },
      { question: 'When should a small business update legal documents?', answer: 'When ownership changes, services expand, new contracts are introduced, disputes arise, or the business takes on more financial or operational risk.' },
      { question: 'Can legal review reduce business disputes?', answer: 'Clear documents cannot prevent every dispute, but they can reduce uncertainty and improve leverage if disagreements occur.' },
    ],
    related: [{ label: 'Corporate Law', href: '/corporate-law' }, { label: 'Business Disputes', href: '/civil-litigation/business-disputes' }, { label: 'Corporate Law for Small Businesses', href: '/blog/corporate-law-small-business-new-york' }],
  },
  '/pennsylvania-contract-dispute-attorney': {
    path: '/pennsylvania-contract-dispute-attorney',
    title: 'Pennsylvania Contract Dispute Attorney',
    metaTitle: 'Pennsylvania Contract Dispute Attorney | Murray Legal',
    metaDescription: 'Murray Legal helps evaluate Pennsylvania contract disputes, breach issues, evidence, negotiation strategy, and litigation risk.',
    h1: 'Pennsylvania Contract Dispute Attorney for Breach, Negotiation & Litigation Strategy',
    intro: 'Contract disputes often turn on the language of the agreement, the parties’ communications, performance history, damages, and timing. Murray Legal helps clients evaluate contract rights, preserve evidence, and determine practical next steps.',
    bullets: ['Breach of contract issue review', 'Demand letter and response strategy', 'Evidence and document preservation planning', 'Negotiation and settlement positioning', 'Litigation risk and next-step analysis'],
    faqs: [
      { question: 'What should I do first in a contract dispute?', answer: 'Gather the contract, amendments, emails, texts, invoices, payment records, performance documents, and any notices exchanged between the parties.' },
      { question: 'Does every contract dispute go to court?', answer: 'No. Many disputes are negotiated or resolved before litigation, depending on the contract, evidence, damages, and business goals.' },
      { question: 'When should counsel get involved?', answer: 'Before sending formal demands, admitting fault, terminating performance, withholding payment, or responding to legal threats.' },
    ],
    related: [{ label: 'Civil Litigation', href: '/civil-litigation' }, { label: 'Business Disputes', href: '/civil-litigation/business-disputes' }, { label: 'Contract Disputes Guide', href: '/blog/contract-disputes-new-york' }],
  },
  '/philadelphia-real-estate-attorney': {
    path: '/philadelphia-real-estate-attorney',
    title: 'Philadelphia Real Estate Attorney',
    metaTitle: 'Philadelphia Real Estate Attorney | Murray Legal',
    metaDescription: 'Murray Legal assists with Philadelphia and Pennsylvania real estate matters, including transaction review, closing preparation, title issues, and deal-risk strategy.',
    h1: 'Philadelphia Real Estate Attorney for Property Transactions & Closing Review',
    intro: 'Philadelphia real estate transactions can involve contract deadlines, title issues, financing requirements, investor concerns, and closing coordination. Murray Legal is licensed in Pennsylvania and provides practical legal review for clients evaluating property matters.',
    bullets: ['Philadelphia property transaction review', 'Buyer and seller contract issue spotting', 'Commercial and residential deal strategy', 'Title, lien, payoff, and closing-document review', 'Investor and owner risk-management guidance'],
    faqs: [
      { question: 'Can Murray Legal assist with Philadelphia real estate transactions?', answer: 'Yes. Murray Legal is licensed in Pennsylvania and may assist with Philadelphia and Pennsylvania real estate matters.' },
      { question: 'What documents should I prepare for a real estate consultation?', answer: 'Bring the purchase agreement, riders, title documents, inspection reports, lender communications, entity documents if applicable, and any correspondence about deadlines or credits.' },
      { question: 'Why review a contract before signing?', answer: 'Pre-signing review can clarify contingencies, default risk, closing obligations, and the practical consequences of each term.' },
    ],
    related: [{ label: 'Pennsylvania Real Estate Attorney', href: '/pennsylvania-real-estate-attorney' }, { label: 'Commercial Transactions', href: '/real-estate-attorney/commercial-transactions' }, { label: 'Contact Murray Legal', href: '/contact' }],
  },
};

export const pennsylvaniaServicePaths = Object.keys(pages);

export default function PennsylvaniaServices(): JSX.Element {
  const path = usePathname();
  const page = pages[path] ?? pages['/pennsylvania-real-estate-attorney'];

  const schema = [
    localLegalServiceSchema(page.title),
    breadcrumbSchema([{ name: 'Home', path: '/' }, { name: page.title, path: page.path }]),
  ];

  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead title={page.metaTitle} description={page.metaDescription} canonical={`${SITE_URL}${page.path}`} schema={schema} />

      <section className="mx-auto max-w-6xl">
        <span className="section-label">Pennsylvania Legal Services</span>
        <h1 className="mt-3 font-display text-5xl text-navy">{page.h1}</h1>
        <p className="mt-5 max-w-4xl leading-8 text-text-muted">{page.intro}</p>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-text-muted">
          Attorney Advertising. This page is general informational content and does not create an attorney-client relationship.
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
