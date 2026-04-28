import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';
import { Link } from '../lib/router';

const faqItems = [
  { question: 'What does a real estate attorney do in New York?', answer: 'A real estate attorney drafts and negotiates contracts, reviews title and due diligence documents, coordinates with lenders, and handles closing documentation.' },
  { question: 'Do I need counsel for commercial leasing?', answer: 'Commercial leases are negotiable legal agreements. Counsel helps protect renewal rights, assignment terms, remedies, and operating expense obligations.' },
  { question: 'Can you help resolve title defects before closing?', answer: 'Yes. Murray Legal identifies and addresses liens, encroachments, easement conflicts, and deed chain issues before final closing documents are signed.' },
  { question: 'How early should I involve counsel in development projects?', answer: 'As early as possible. Early legal review helps align zoning, permitting, financing, and contract strategy before significant costs are committed.' },
  { question: 'Do you represent buyers and sellers?', answer: 'Yes. Murray Legal represents buyers, sellers, landlords, tenants, developers, and investors in residential and commercial matters.' },
  { question: 'What areas do you serve?', answer: 'The firm serves Yonkers, Westchester County, and clients throughout New York on transactional and advisory real estate matters.' },
];

export default function RealEstate(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead title="Real Estate Attorney Yonkers NY | Murray Legal" description="Murray Legal provides real estate attorney services in Yonkers and New York including land use, zoning, commercial and residential transactions, and disputes." canonical="https://murraylegal.com/real-estate-attorney" schema={{ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Murray Legal', serviceType: 'Real Estate Attorney', areaServed: ['Yonkers', 'Westchester County', 'New York'] }} />
      <section className="mx-auto max-w-6xl"><h1 className="font-display text-5xl text-navy">Real Estate Attorney in Yonkers & New York</h1><p className="mt-4 max-w-3xl text-text-muted">Murray Legal advises on acquisitions, sales, leasing, land use approvals, and real estate disputes with practical, transaction-focused legal counsel.</p></section>
      <section className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-4">{[
        ['Land Use', '/real-estate-attorney/land-use-zoning'],
        ['Transactional', '/real-estate-attorney/commercial-transactions'],
        ['Commercial', '/real-estate-attorney/commercial-transactions'],
        ['Residential', '/real-estate-attorney/residential-transactions'],
      ].map(([label, href]) => <Link key={String(label)} to={String(href)} ariaLabel={String(label)} className="rounded-md bg-white p-5 text-center text-lg font-semibold text-navy shadow-soft">{label}</Link>)}</section>
      <section className="mx-auto mt-12 max-w-6xl rounded-md bg-white p-8 shadow-soft"><h2 className="font-display text-4xl text-navy">Detailed Real Estate Services</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{[
        ['Land use and zoning', ['Variance petitions', 'Special permit applications', 'Zoning board appeals']],
        ['Commercial real estate', ['Acquisition and sale agreements', 'Lease negotiation', 'Development documentation']],
        ['Residential transactions', ['Contract review', 'Closing representation', 'Title and deed matters']],
        ['Property disputes', ['Boundary and easement disputes', 'Contract enforcement', 'Transaction-related litigation support']],
      ].map(([title, items]) => <article key={String(title)}><h3 className="text-xl font-semibold">{title}</h3><ul className="mt-3 list-disc pl-6 text-sm text-text-muted">{(items as string[]).map((it) => <li key={it}>{it}</li>)}</ul></article>)}</div></section>
      <section className="mx-auto mt-12 max-w-6xl"><h2 className="font-display text-4xl text-navy">Why Hire a Real Estate Attorney?</h2><p className="mt-3 text-text-muted">Real estate transactions in New York carry contractual, title, financing, and regulatory exposure. Counsel helps evaluate risk, negotiate terms, and protect your long-term rights before and after closing.</p></section>
      <section className="mx-auto mt-12 max-w-4xl"><h2 className="font-display text-4xl text-navy">Real Estate FAQ</h2><div className="mt-6"><FAQAccordion items={faqItems} /></div></section>
      <div className="mt-14"><ConsultationCTA /></div>
    </main>
  );
}
