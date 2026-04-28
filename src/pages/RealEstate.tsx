import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema } from '../lib/schema';

const sections = [
  {
    title: 'Land Use',
    intro:
      "Navigating New York's zoning and land use process requires both regulatory knowledge and relationships with local boards. Murray Legal advises clients on variance applications, special use permits, site plan approvals, and zoning appeals.",
    bullets: [
      'Variance and special use permit applications',
      'Zoning compliance analysis',
      'Municipal board representation',
      'Environmental review navigation',
      'Entitlement strategy for development sites',
    ],
  },
  {
    title: 'Transactional',
    intro:
      'Every New York real estate transaction carries legal risk that contract language either controls or exposes. Murray Legal drafts, reviews, and negotiates purchase agreements, co-op and condo contracts, and commercial sale documents.',
    bullets: [
      'Purchase and sale agreement drafting',
      'Contract contingency negotiation',
      'Title search and defect resolution',
      'Survey review',
      'Closing preparation and representation',
    ],
  },
  {
    title: 'Commercial',
    intro:
      'Commercial real estate deals involve layered obligations, extended timelines, and significant capital exposure. Murray Legal represents buyers, sellers, and tenants in commercial acquisitions, dispositions, and lease negotiations.',
    bullets: [
      'Commercial acquisition and sale counsel',
      'Net lease and ground lease negotiation',
      'Development agreement drafting',
      'Construction contract review',
      'Due diligence coordination',
    ],
  },
  {
    title: 'Residential',
    intro:
      'For most clients, a home purchase or sale is the largest financial transaction of their lives. Murray Legal provides clear, responsive counsel so residential clients understand every document they sign.',
    bullets: [
      'Buyer and seller representation',
      'Co-op board package preparation',
      'Condo closing counsel',
      'Deed preparation and title issues',
      'First-time buyer guidance',
    ],
  },
];

export default function RealEstate(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Real Estate Attorney in Yonkers, NY | Murray Legal"
        description="Murray Legal provides real estate attorney services in Yonkers and Westchester County — land use, commercial and residential transactions, closings, and title matters. Schedule a consultation."
        canonical={`${SITE_URL}/real-estate-attorney`}
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Real Estate', path: '/real-estate-attorney' }])}
      />

      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Real Estate Attorney in Yonkers &amp; Westchester County</h1>
        <p className="mt-4 max-w-4xl leading-8 text-text-muted">
          Murray Legal provides real estate legal services to property owners, buyers, sellers, developers, and
          investors throughout Yonkers, Westchester County, and greater New York. From the first contract review to
          the final closing document, the firm handles every stage of the transaction with attention to title risk,
          regulatory compliance, and deal structure. New York real estate law is complex — co-op approval
          requirements, municipal transfer taxes, zoning restrictions, and title defects can derail even
          straightforward purchases. Murray Legal's deep familiarity with Westchester County boards, local closing
          practices, and New York State real estate procedure means clients receive counsel that is both legally
          precise and locally informed.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-md bg-white p-8 shadow-soft">
            <h2 className="font-display text-3xl text-navy">{section.title}</h2>
            <p className="mt-4 text-sm text-text-muted">{section.intro}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
