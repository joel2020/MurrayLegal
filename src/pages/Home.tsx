import { useState } from 'react';
import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { Link } from '../lib/router';

type FAQItem = {
  question: string;
  answer: string;
};

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

const practiceCards = [
  {
    label: 'Corporate Advisory',
    title: 'Corporate Law',
    description:
      'Formation, governance, contracts, and transactional support for founders, closely held companies, and established businesses.',
    href: '/corporate-law',
  },
  {
    label: 'Dispute Resolution',
    title: 'Civil Litigation',
    description:
      'Business disputes and personal injury representation with practical strategy designed for strong outcomes and efficient resolution.',
    href: '/civil-litigation',
  },
  {
    label: 'Industry Counsel',
    title: 'Entertainment & Sports',
    description:
      'Deal structuring, agreement negotiation, licensing, and transactional representation for talent, athletes, and related businesses.',
    href: '/entertainment-law',
  },
];

const realEstatePillars = [
  {
    number: '01',
    title: 'Land Use',
    bullets: ['Variances and appeals', 'Permit strategy', 'Municipal approvals'],
  },
  {
    number: '02',
    title: 'Transactional',
    bullets: ['Contract drafting', 'Title and survey review', 'Closing support'],
  },
  {
    number: '03',
    title: 'Commercial',
    bullets: ['Lease negotiation', 'Development agreements', 'Construction contracts'],
  },
  {
    number: '04',
    title: 'Residential',
    bullets: ['Purchase and sale counsel', 'Co-op and condo closings', 'Deed and title issues'],
  },
];

export default function Home(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-navy-deep text-ivory md:min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=85"
          alt="New York City skyline at dusk representing Yonkers and Manhattan legal markets"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(9,20,41,0.85) 10%, rgba(9,20,41,0.15) 65%, transparent 100%)' }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 py-20 md:grid-cols-2 md:gap-10 md:px-6 md:py-28">
          <div>
            <span className="gold-rule" aria-hidden="true" />
            <h1 className="font-display text-display-xl text-ivory">
              <span className="section-label text-gold">Murray Legal</span>
              <em className="not-italic">Real Estate Attorney</em>
              <span className="block text-display-md font-normal text-stone/80">in Yonkers &amp; New York</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-base text-stone/80">
              Murray Legal advises property owners, developers, investors, businesses, and individuals across real
              estate, land use, commercial and residential transactions, corporate matters, litigation, and sports and
              entertainment deals.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/real-estate-attorney" ariaLabel="Explore practice areas" className="btn-outline">
                Explore Practice Areas
              </Link>
            </div>
          </div>

          <div className="hidden items-center justify-end md:flex">
            <div className="w-full max-w-sm space-y-8 border-l border-gold/40 pl-8">
              <div>
                <p className="font-display text-5xl leading-none text-gold">01</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-stone/80">Yonkers, NY</p>
              </div>
              <div>
                <p className="font-display text-5xl leading-none text-gold">02</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-stone/80">Serving Westchester &amp; NYC</p>
              </div>
              <div>
                <p className="font-display text-5xl leading-none text-gold">03</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-stone/80">Real Estate · Corporate · Litigation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="block h-10 w-[2px] animate-pulse bg-gold" />
        </div>
      </section>

      <section className="bg-navy py-0 text-stone/70">
        <div className="h-[2px] w-full bg-gold/70" />
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 text-center text-[0.7rem] uppercase tracking-[0.15em] sm:grid-cols-5 md:px-6">
          {['Real Estate Law', 'Land Use & Zoning', 'Corporate Law', 'Civil Litigation', 'Entertainment & Sports'].map((item, index) => (
            <div key={item} className="relative">
              {index > 0 && <span aria-hidden="true" className="absolute -left-2 top-1/2 hidden h-5 w-[1px] -translate-y-1/2 bg-gold/70 sm:block" />}
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="section-label">Our Practice Areas</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg text-navy">Focused Counsel for Complex New York Matters</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="card-premium relative overflow-hidden bg-navy text-ivory md:col-span-2">
              <span className="section-label text-gold-light">Featured Practice</span>
              <h3 className="text-2xl font-semibold text-ivory">Real Estate Attorney</h3>
              <p className="mt-4 text-sm text-stone/80">
                Counsel for land use, zoning, commercial transactions, residential closings, and risk-focused real
                estate strategy throughout New York.
              </p>
              <Link to="/real-estate-attorney" ariaLabel="Learn more about real estate services" className="mt-6 inline-block text-sm font-semibold text-ivory">
                Learn More <span className="text-gold">→</span>
              </Link>
              <svg
                viewBox="0 0 320 140"
                className="pointer-events-none absolute bottom-0 right-0 h-28 w-48 text-ivory/10"
                aria-hidden="true"
              >
                <path fill="currentColor" d="M10 130h25V60h20v70h18V40h28v90h15V20h30v110h18V52h22v78h17V35h28v95h20V75h24v55H10z" />
              </svg>
            </article>

            {practiceCards.map((card) => (
              <article key={card.title} className="card-premium bg-white">
                <span className="section-label">{card.label}</span>
                <h3 className="text-xl text-navy">{card.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{card.description}</p>
                <Link to={card.href} ariaLabel={`Learn more about ${card.title}`} className="mt-6 inline-block text-sm font-semibold text-navy">
                  Learn More <span className="text-gold">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="section-label">Primary Practice</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg text-navy">Real Estate Attorney</h2>
          <p className="mt-4 text-text-muted">
            New York real estate matters demand careful drafting, due diligence, regulatory alignment, and decisive
            advocacy.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {realEstatePillars.map((pillar) => (
              <article key={pillar.title} className="card-premium relative bg-white">
                <span className="section-number">{pillar.number}</span>
                <span className="mb-6 block h-[2px] w-10 bg-gold" aria-hidden="true" />
                <h3 className="text-xl text-navy">{pillar.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-text-muted">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl text-ivory">
          <span className="section-label">Why Murray Legal</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg">Strategic Representation With Local Precision</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {[
              ['I', 'Local expertise', 'Deep familiarity with Yonkers and Westchester land use boards, closing practices, and New York legal procedure.'],
              ['II', 'Focused practice', 'Concentrated service lines in real estate, corporate advisory, and complex civil disputes.'],
              ['III', 'Direct access', 'Clients work directly with senior counsel for strategy, communication, and execution.'],
            ].map(([roman, title, description], index) => (
              <article key={String(title)} className="relative">
                {index > 0 && <span aria-hidden="true" className="absolute -left-5 top-0 hidden h-full w-[1px] bg-gold/40 md:block" />}
                <p className="font-display text-5xl text-gold">{roman}</p>
                <h3 className="mt-4 text-lg font-semibold text-ivory">{title}</h3>
                <p className="mt-3 text-sm text-stone/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-28" id="faq">
        <div className="mx-auto max-w-4xl">
          <span className="section-label">Frequently Asked Questions</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-md text-navy">Your Questions, Clearly Answered</h2>

          <div className="mt-10">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article key={item.question} className="border-b border-[rgba(15,31,61,0.08)] py-2">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`home-faq-panel-${index}`}
                      id={`home-faq-button-${index}`}
                    >
                      <span className="text-[0.95rem] font-semibold text-navy">{item.question}</span>
                      <span className="text-2xl leading-none text-gold" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`home-faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`home-faq-button-${index}`}
                    className={`overflow-hidden transition-[max-height] duration-300 ease-premium ${isOpen ? 'max-h-40' : 'max-h-0'}`}
                  >
                    <p className="pb-4 text-[0.9rem] text-text-muted">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <Link to="/faq" ariaLabel="View all frequently asked questions" className="mt-8 inline-block text-sm font-semibold text-navy">
            View all FAQs <span className="text-gold">→</span>
          </Link>
        </div>
      </section>

      <ConsultationCTA />
    </main>
  );
}
