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
      'In New York, unlike most states, attorney representation at real estate closings is standard practice and strongly recommended. Your attorney reviews the purchase contract before you sign, identifies title defects and liens, negotiates repairs and credits, and represents you at closing. Without counsel, buyers and sellers are exposed to contract terms and title risks that can cost far more to resolve after closing than the legal fee itself.',
  },
  {
    question: 'Can Murray Legal help with zoning issues before a purchase?',
    answer:
      'Yes. Before acquiring property in New York, zoning due diligence is essential to confirm that your intended use is permitted and that no variances or violations affect the parcel. Murray Legal reviews zoning ordinances, confirms permitted use, identifies existing violations, and advises on the risk profile of development plans before you commit to a purchase. This analysis can materially affect the decision to proceed and the terms you negotiate.',
  },
  {
    question: 'Does the firm handle business litigation in addition to transactions?',
    answer:
      'Yes. Murray Legal handles commercial disputes, breach of contract claims, partnership and shareholder conflicts, trade secret enforcement, and business fraud litigation. The firm\'s litigation practice is designed around efficient resolution — through demand, mediation, arbitration, or court — with strategy built around your specific commercial objectives rather than maximizing billable time.',
  },
  {
    question: 'What should I do immediately after a personal injury?',
    answer:
      'After a personal injury in New York, the most important steps are seeking medical care, documenting the scene and your injuries, and preserving any available evidence. New York has a three-year statute of limitations for most personal injury claims, but evidence deteriorates and witnesses disappear quickly. Contacting an attorney early allows you to preserve your claim, understand your options, and avoid the common mistakes that reduce recovery value.',
  },
  {
    question: 'How quickly can I expect a response from Murray Legal?',
    answer:
      'Murray Legal aims to respond to all new inquiries within one business day. For time-sensitive matters — such as a contract deadline, an injury incident, or an impending court filing — clients can note urgency in the contact form and the firm will prioritize same-day response.',
  },
];

const practiceCards = [
  {
    label: 'Featured Practice',
    title: 'Real Estate Attorney',
    description:
      'Murray Legal handles land use approvals, zoning variances, commercial acquisitions, residential closings, and title matters throughout Westchester and New York City. From contract to closing, clients receive hands-on counsel at every stage.',
    href: '/real-estate-attorney',
  },
  {
    label: 'Business Counsel',
    title: 'Corporate Law',
    description:
      'From entity formation to shareholder agreements and M&A transactions, the firm advises closely held businesses and founders on the legal infrastructure that supports growth and protects ownership.',
    href: '/corporate-law',
  },
  {
    label: 'Dispute Strategy',
    title: 'Civil Litigation',
    description:
      'When disputes arise — over contracts, partnerships, injuries, or commercial obligations — Murray Legal builds litigation strategy around resolution efficiency and documented outcomes, not prolonged billable hours.',
    href: '/civil-litigation',
  },
];

const realEstatePillars = [
  {
    number: '01',
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
    number: '02',
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
    number: '03',
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
    number: '04',
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

export default function Home(): JSX.Element {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <SEOHead
        title="Murray Legal | Real Estate Attorney & Business Law Counsel in Yonkers"
        description="Murray Legal represents Westchester and New York clients in real estate, business law, corporate governance, civil litigation, and personal injury matters with direct attorney counsel."
        canonical="https://murraylegal.com/"
      />

      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-navy-deep text-ivory md:min-h-screen">
        <img
          src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=85"
          alt="Yonkers and New York skyline"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy-deep/80" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <span className="gold-rule" aria-hidden="true" />
          <h1 className="font-display text-display-xl text-ivory">
            Real Estate Attorney &amp; Business Law Counsel
            <span className="block text-display-md font-normal text-stone/90">in Yonkers, New York</span>
          </h1>
          <p className="mt-6 max-w-[62ch] text-base text-stone/80">
            Murray Legal represents property owners, buyers, developers, businesses, and injury clients across
            Westchester County and greater New York. Direct counsel from senior attorneys — no handoffs to junior
            staff — on matters where legal precision and local knowledge determine outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link to="#practice-areas" ariaLabel="View practice areas" className="btn-outline">
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-0 text-stone/70">
        <div className="h-[2px] w-full bg-gold/70" />
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 text-center text-[0.7rem] uppercase tracking-[0.15em] sm:grid-cols-5 md:px-6">
          {['Real Estate Law', 'Land Use & Zoning', 'Business Law', 'Civil Litigation', 'Personal Injury'].map(
            (item, index) => (
              <div key={item} className="relative">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -left-2 top-1/2 hidden h-5 w-[1px] -translate-y-1/2 bg-gold/70 sm:block"
                  />
                )}
                <p>{item}</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <span className="section-label">About the Firm</span>
            <span className="gold-rule" aria-hidden="true" />
            <h2 className="font-display text-display-lg text-navy">Direct Counsel. Precise Execution.</h2>
            <div className="mt-6 space-y-5 text-text-muted">
              <p>
                Murray Legal is a boutique law firm in Yonkers, New York, providing direct senior-level counsel for
                real estate transactions, business law, corporate governance, and civil litigation. The firm serves
                clients in Westchester County, the Bronx, Manhattan, and throughout New York State.
              </p>
              <p>
                Clients work directly with their attorney from intake through resolution — not a paralegal, not a
                junior associate. That direct access means faster communication, fewer surprises, and legal strategy
                built around your specific facts and objectives.
              </p>
              <p>
                Whether you are closing on a $3M commercial property, forming a new business entity, or pursuing a
                breach of contract claim, Murray Legal delivers the kind of focused, unhurried attention that boutique
                practice makes possible.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['Yonkers, New York', 'Established'],
                ['Westchester County & New York State', 'Licensed'],
                ['Real Estate · Business Law · Litigation', 'Focus Areas'],
              ].map(([value, label]) => (
                <article key={label} className="rounded-sm border border-navy/10 bg-white p-4">
                  <p className="text-sm font-semibold text-navy">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.08em] text-text-muted">{label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hidden md:col-span-2 md:block">
            <div className="h-full rounded-md border border-gold/40 bg-navy-deep/95 p-10 text-ivory">
              <p className="font-display text-4xl text-gold">Westchester</p>
              <p className="mt-4 text-sm text-stone/80">
                Local counsel for transactions, disputes, and regulatory issues where regional knowledge changes the
                speed and outcome of legal work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone px-4 py-20 md:px-6 md:py-28" id="practice-areas">
        <div className="mx-auto max-w-7xl">
          <span className="section-label">Our Practice Areas</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg text-navy">Focused Counsel for High-Stakes Legal Work</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {practiceCards.map((card) => (
              <article
                key={card.title}
                className={`card-premium ${card.title === 'Real Estate Attorney' ? 'bg-navy text-ivory md:col-span-2' : 'bg-white'}`}
              >
                <span className={`section-label ${card.title === 'Real Estate Attorney' ? 'text-gold-light' : ''}`}>
                  {card.label}
                </span>
                <h3 className={`text-xl ${card.title === 'Real Estate Attorney' ? 'text-ivory' : 'text-navy'}`}>
                  {card.title}
                </h3>
                <p className={`mt-3 text-sm ${card.title === 'Real Estate Attorney' ? 'text-stone/80' : 'text-text-muted'}`}>
                  {card.description}
                </p>
                <Link
                  to={card.href}
                  ariaLabel={`Learn more about ${card.title}`}
                  className={`mt-6 inline-block text-sm font-semibold ${card.title === 'Real Estate Attorney' ? 'text-ivory' : 'text-navy'}`}
                >
                  Learn More <span className="text-gold">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="section-label">Real Estate Services</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg text-navy">Real Estate Attorney Services in New York</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {realEstatePillars.map((pillar) => (
              <article key={pillar.title} className="card-premium relative bg-white">
                <span className="section-number">{pillar.number}</span>
                <span className="mb-6 block h-[2px] w-10 bg-gold" aria-hidden="true" />
                <h3 className="text-xl text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{pillar.intro}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-muted">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="section-label">Corporate Counsel</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg text-navy">Business Law &amp; Corporate Governance</h2>
          <p className="mt-4 max-w-4xl text-text-muted">
            Strong legal foundations protect businesses from the disputes, ambiguities, and governance failures that
            derail growth. Murray Legal advises business owners, founders, and officers on the structures and
            agreements that make organizations defensible and well-run.
          </p>
          <ul className="mt-8 grid gap-3 rounded-md bg-white p-8 text-sm text-text-muted md:grid-cols-2">
            <li>LLC and corporation formation, NY filing and compliance</li>
            <li>Operating agreements and shareholder agreements drafted for your specific ownership structure</li>
            <li>Commercial contract drafting, review, and negotiation</li>
            <li>Board governance frameworks and fiduciary duty guidance</li>
            <li>Mergers, acquisitions, and asset purchase agreements</li>
            <li>Officer and director liability analysis</li>
            <li>Business succession planning</li>
          </ul>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <span className="section-label">Civil Litigation</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg text-navy">Litigation Backed by Strategy and Evidence</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-md bg-white p-8 shadow-soft">
              <h3 className="text-2xl text-navy">Business Dispute Litigation</h3>
              <p className="mt-3 text-sm text-text-muted">
                When a business relationship breaks down, the outcome depends on legal preparation, contract analysis,
                and litigation strategy. Murray Legal represents businesses in commercial disputes from pre-litigation
                demand through trial or arbitration.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-muted">
                <li>Breach of contract claims and defenses</li>
                <li>Partnership and LLC member disputes</li>
                <li>Shareholder litigation and buyout disputes</li>
                <li>Trade secret and non-compete enforcement</li>
                <li>Commercial fraud and misrepresentation claims</li>
              </ul>
            </article>

            <article className="rounded-md bg-white p-8 shadow-soft">
              <h3 className="text-2xl text-navy">Personal Injury Representation</h3>
              <p className="mt-3 text-sm text-text-muted">
                Injury cases succeed when liability is documented early, damages are developed fully, and the claim is
                managed with the precision of a commercial litigation matter. Murray Legal represents injured
                plaintiffs in New York on a contingency basis for qualifying matters.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-text-muted">
                <li>Motor vehicle and truck accident claims</li>
                <li>Premises liability (slip and fall, unsafe conditions)</li>
                <li>Wrongful death claims</li>
                <li>General negligence</li>
                <li>Construction site injury</li>
                <li>Insurance dispute and negotiation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-7xl text-ivory">
          <span className="section-label">Why Murray Legal</span>
          <span className="gold-rule" aria-hidden="true" />
          <h2 className="font-display text-display-lg">Strategic Representation With Local Precision</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article>
              <h3 className="text-lg font-semibold text-ivory">Yonkers &amp; Westchester Knowledge</h3>
              <p className="mt-3 text-sm text-stone/70">
                Murray Legal has direct working relationships with Westchester County land use boards, municipal
                agencies, and local courts. That local depth shortens timelines and reduces the friction common with
                outside counsel unfamiliar with regional practice.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-ivory">One Attorney. Full Accountability.</h3>
              <p className="mt-3 text-sm text-stone/70">
                Clients are not routed to junior staff. You work with the same attorney who takes your initial call,
                reviews your documents, and appears on your behalf. That consistency produces better outcomes and
                fewer misunderstandings.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold text-ivory">Boutique Speed, Firm-Level Execution</h3>
              <p className="mt-3 text-sm text-stone/70">
                As a boutique practice, Murray Legal can move faster than larger firms on time-sensitive transactions
                and urgent filings. Clients receive same-day responses to substantive questions during active matters.
              </p>
            </article>
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
                    className={`overflow-hidden transition-[max-height] duration-300 ease-premium ${
                      isOpen ? 'max-h-72' : 'max-h-0'
                    }`}
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
