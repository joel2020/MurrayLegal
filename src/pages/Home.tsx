import { Link } from '../lib/router';
import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion, { type FAQItem } from '../components/FAQAccordion';
import PracticeAreaCard from '../components/PracticeAreaCard';
import SEOHead from '../components/SEOHead';

const faqs: FAQItem[] = [
  {
    question: 'Do I need a real estate attorney for property transactions in New York?',
    answer:
      'In New York, attorney representation is standard for property transactions. Counsel protects your rights in contracts, due diligence, title review, and closing documents.',
  },
  {
    question: 'Can Murray Legal help with zoning issues before a property purchase?',
    answer:
      'Yes. Murray Legal evaluates zoning compliance, permitted use, and municipal risk so clients can make informed acquisition and development decisions.',
  },
  {
    question: 'Does the firm handle business litigation in addition to transactions?',
    answer:
      'Yes. The firm handles commercial disputes, breach of contract claims, shareholder conflicts, and strategic litigation support for New York businesses.',
  },
  {
    question: 'What types of entertainment and sports matters do you handle?',
    answer:
      'Murray Legal advises on agreements, licensing, sponsorships, athlete and talent contracts, and business transactions involving media and sports operations.',
  },
];

export default function Home(): JSX.Element {
  return (
    <main>
      <SEOHead
        title="Murray Legal | Real Estate Attorney in Yonkers & New York"
        description="Murray Legal is a boutique law firm in Yonkers, NY specializing in real estate law, land use, corporate law, civil litigation, and entertainment transactions."
        canonical="https://murraylegal.com/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LegalService',
          name: 'Murray Legal',
          url: 'https://murraylegal.com',
          telephone: '(914) 555-0199',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Yonkers',
            addressRegion: 'NY',
            addressCountry: 'US',
          },
          description:
            'Murray Legal is a boutique law firm in Yonkers, NY providing real estate attorney services, corporate law, civil litigation, and transactional legal services.',
          areaServed: ['Yonkers', 'Westchester County', 'New York'],
          serviceType: [
            'Real Estate Attorney',
            'Land Use and Zoning',
            'Commercial Real Estate',
            'Corporate Law',
            'Civil Litigation',
            'Personal Injury',
            'Entertainment Law',
            'Sports Transactions',
          ],
        }}
      />

      <section className="relative bg-navy text-ivory">
        <img
          src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1800&q=80"
          alt="Manhattan and Yonkers New York real estate attorney Murray Legal"
          width={1800}
          height={900}
          loading="lazy"
          className="h-[520px] w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-4 md:px-6">
          <h1 className="max-w-3xl font-display text-5xl leading-tight text-ivory">Real Estate Attorney in Yonkers & New York</h1>
          <p className="mt-4 max-w-2xl text-base text-stone">
            Murray Legal advises property owners, developers, investors, businesses, and individuals across real
            estate, land use, commercial and residential transactions, corporate matters, litigation, and sports and
            entertainment deals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" ariaLabel="Schedule a consultation" className="min-h-11 rounded-sm bg-gold px-6 py-3 font-semibold text-navy">Schedule a Consultation</Link>
            <Link to="/real-estate-attorney" ariaLabel="Explore practice areas" className="min-h-11 rounded-sm border border-ivory px-6 py-3">Explore Practice Areas</Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 text-center text-sm text-navy sm:grid-cols-5 md:px-6">
          {['Real Estate Law', 'Land Use & Zoning', 'Corporate Law', 'Civil Litigation', 'Entertainment & Sports'].map((item) => (
            <p key={item} className="border-r border-gold/30 last:border-r-0">{item}</p>
          ))}
        </div>
      </section>

      <section className="bg-stone px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-navy">Practice Areas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <PracticeAreaCard featured title="Real Estate Attorney" description="Counsel for land use, zoning, commercial transactions, residential closings, and risk-focused real estate strategy throughout New York." href="/real-estate-attorney" />
            <PracticeAreaCard title="Corporate Law" description="Formation, governance, contracts, and transactional support for founders, closely held companies, and established businesses." href="/corporate-law" />
            <PracticeAreaCard title="Civil Litigation" description="Business disputes and personal injury representation with practical strategy designed for strong outcomes and efficient resolution." href="/civil-litigation" />
            <PracticeAreaCard title="Entertainment & Sports" description="Deal structuring, agreement negotiation, licensing, and transactional representation for talent, athletes, and related businesses." href="/entertainment-law" />
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-navy">Real Estate Attorney</h2>
          <p className="mt-3 text-text-muted">
            New York real estate matters demand careful drafting, due diligence, regulatory alignment, and decisive
            advocacy.
          </p>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
            alt="Manhattan and Yonkers New York real estate attorney Murray Legal"
            width={1200}
            height={800}
            loading="lazy"
            className="mt-8 h-64 w-full rounded-md object-cover shadow-soft md:h-80"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['Land Use', ['Variances and appeals', 'Permit strategy', 'Municipal approvals']],
              ['Transactional', ['Contract drafting', 'Title and survey review', 'Closing support']],
              ['Commercial', ['Lease negotiation', 'Development agreements', 'Construction contracts']],
              ['Residential', ['Purchase and sale counsel', 'Co-op and condo closings', 'Deed and title issues']],
            ].map(([title, bullets]) => (
              <article key={String(title)} className="rounded-md bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold">{title}</h3>
                <ul className="mt-3 list-disc pl-5 text-sm text-text-muted">
                  {(bullets as string[]).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone px-4 py-16 md:px-6"><div className="mx-auto max-w-6xl"><h2 className="font-display text-4xl text-navy">Corporate Law & Business Governance</h2><p className="mt-3 text-text-muted">From entity formation to board-level governance and transaction structuring, Murray Legal provides disciplined corporate counsel.</p><ul className="mt-4 list-disc pl-6 text-sm text-text-muted"><li>Entity selection and formation</li><li>Commercial contract negotiation</li><li>Governance frameworks and fiduciary duties</li><li>Mergers, acquisitions, and operational agreements</li></ul></div></section>

      <section className="bg-ivory px-4 py-16 md:px-6"><div className="mx-auto max-w-6xl"><h2 className="font-display text-4xl text-navy">Civil Litigation</h2><div className="mt-6 grid gap-6 md:grid-cols-2"><article className="rounded-md bg-white p-6 shadow-soft"><h3 className="text-xl font-semibold">Business Disputes</h3><p className="mt-2 text-text-muted">Strategic representation in contract claims, ownership disputes, and enforcement actions.</p><ul className="mt-3 list-disc pl-5 text-sm text-text-muted"><li>Breach of contract litigation</li><li>Shareholder and partnership disputes</li><li>Commercial debt and fraud claims</li></ul></article><article className="rounded-md bg-white p-6 shadow-soft"><h3 className="text-xl font-semibold">Personal Injury</h3><p className="mt-2 text-text-muted">Plaintiff-side injury litigation focused on liability analysis and full damages development.</p><ul className="mt-3 list-disc pl-5 text-sm text-text-muted"><li>Motor vehicle accidents</li><li>Premises liability claims</li><li>Wrongful death and negligence cases</li></ul></article></div></div></section>

      <section className="bg-stone px-4 py-16 md:px-6"><div className="mx-auto max-w-6xl"><h2 className="font-display text-4xl text-navy">Why Murray Legal</h2><div className="mt-6 grid gap-5 md:grid-cols-3">{[
        ['Local expertise', 'Deep familiarity with Yonkers and Westchester land use boards, closing practices, and New York legal procedure.'],
        ['Focused practice', 'Concentrated service lines in real estate, corporate advisory, and complex civil disputes.'],
        ['Direct access', 'Clients work directly with senior counsel for strategy, communication, and execution.'],
      ].map(([title, description]) => (<article key={String(title)} className="rounded-md bg-white p-6 shadow-soft"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm text-text-muted">{description}</p></article>))}</div></div></section>

      <section className="bg-ivory px-4 py-16 md:px-6"><div className="mx-auto max-w-4xl"><h2 className="font-display text-4xl text-navy">Frequently Asked Questions</h2><div className="mt-8"><FAQAccordion items={faqs} /></div><Link to="/faq" ariaLabel="View all frequently asked questions" className="mt-5 inline-block min-h-11 py-3 text-sm font-semibold text-navy">View all FAQs →</Link></div></section>

      <ConsultationCTA />
    </main>
  );
}
