import { type JSX, useState } from 'react';
import { Briefcase, Building2, ChevronRight, Landmark, Menu, Scale, ShieldCheck, X } from 'lucide-react';

/*
  Structural notes:
  - Single-page semantic layout with one H1, H2 practice sections, and H3 subtopics for SEO + LLM readability.
  - Navigation uses anchor links, desktop sticky header, and accessible mobile hamburger menu.
  - Content is intentionally factual, concise, and limited to the four required Murray Legal practice areas.
*/

type NavLink = {
  href: '#business-law' | '#corporate-governance' | '#real-estate' | '#civil-litigation' | '#faq' | '#contact';
  label: string;
};

type Subtopic = {
  heading: string;
  bullets: string[];
};

type PracticeArea = {
  id: 'business-law' | 'corporate-governance' | 'real-estate' | 'civil-litigation';
  title: string;
  icon: typeof Building2;
  description: string[];
  services: string[];
  subtopics: Subtopic[];
};

type Faq = {
  question: string;
  answer: string;
};

const navLinks: NavLink[] = [
  { href: '#business-law', label: 'Business Law' },
  { href: '#corporate-governance', label: 'Corporate Governance' },
  { href: '#real-estate', label: 'Real Estate Law' },
  { href: '#civil-litigation', label: 'Civil Litigation' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const practiceAreas: PracticeArea[] = [
  {
    id: 'business-law',
    title: 'Business Law',
    icon: Briefcase,
    description: [
      'Murray Legal advises companies from initial formation through expansion, investment, and operational change.',
      'The firm structures LLCs, corporations, and partnerships with clear ownership, management, and decision-making terms.',
      'Attorneys draft and negotiate contracts that define obligations, limit disputes, and support commercial objectives.',
      'The practice also includes compliance and regulatory guidance tailored to industry and jurisdictional requirements.',
    ],
    services: [
      'Business formation for LLCs, corporations, and partnerships',
      'Contract drafting, review, and negotiation',
      'Business transactions, acquisitions, and M&A documentation',
      'Commercial agreement risk allocation and enforcement planning',
      'Regulatory and compliance guidance for operating businesses',
    ],
    subtopics: [
      {
        heading: 'Entity and Contract Foundation',
        bullets: [
          'Formation filings and governance setup',
          'Founder and ownership structuring',
          'Vendor, client, and service agreement drafting',
          'Contract review before execution and renewal',
        ],
      },
      {
        heading: 'Transactions and Compliance',
        bullets: [
          'Asset and equity transaction support',
          'Due diligence document review for transactions',
          'M&A term and closing document preparation',
          'Ongoing compliance issue analysis and remediation',
        ],
      },
    ],
  },
  {
    id: 'corporate-governance',
    title: 'Corporate Governance',
    icon: ShieldCheck,
    description: [
      'Murray Legal helps boards, officers, and owners establish governance practices that satisfy legal duties and business needs.',
      'The firm prepares and updates governing documents to reflect capitalization, control rights, and dispute procedures.',
      'Counsel includes board governance, fiduciary duties, and practical guidance for sensitive internal decisions.',
      'When conflicts arise, the firm addresses shareholder issues and officer or director liability exposure.',
    ],
    services: [
      'Board governance and fiduciary duty counseling',
      'Shareholder agreements and dispute management strategy',
      'Corporate bylaws and LLC operating agreement drafting',
      'Officer and director liability analysis',
      'Governance documentation, resolutions, and recordkeeping',
    ],
    subtopics: [
      {
        heading: 'Board and Fiduciary Guidance',
        bullets: [
          'Board process and oversight protocols',
          'Fiduciary duty risk review',
          'Conflict-of-interest process recommendations',
          'Director and officer decision documentation',
        ],
      },
      {
        heading: 'Shareholder and Governing Documents',
        bullets: [
          'Shareholder agreement negotiation and revision',
          'Ownership transfer and buy-sell planning',
          'Bylaw and operating agreement updates',
          'Governance response planning for internal disputes',
        ],
      },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Law',
    icon: Landmark,
    description: [
      'Murray Legal represents clients in land use, zoning, and transactional real estate matters across commercial and residential contexts.',
      'The firm handles permits, variances, entitlement strategy, zoning appeals, and related administrative processes.',
      'Attorneys support acquisition, sale, leasing, title review, and due diligence for commercial and residential property transactions.',
      'The practice also covers development and construction-related agreements for projects from planning through execution.',
    ],
    services: [
      'Land use and zoning permits, variances, appeals, and entitlements',
      'Commercial acquisition, sale, and lease transactions',
      'Residential purchase, sale, and closing representation',
      'Title review and due diligence analysis',
      'Development and construction contract drafting and negotiation',
    ],
    subtopics: [
      {
        heading: 'Land Use and Transactional Work',
        bullets: [
          'Zoning and entitlement application strategy',
          'Permit and variance preparation support',
          'Commercial purchase, sale, and lease agreements',
          'Land use appeal and hearing preparation',
        ],
      },
      {
        heading: 'Closings, Diligence, and Development',
        bullets: [
          'Residential closing document review and coordination',
          'Title exception analysis and curative steps',
          'Survey, diligence, and risk issue spotting',
          'Construction and development contract negotiation',
        ],
      },
    ],
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    icon: Scale,
    description: [
      'Murray Legal litigates business disputes and personal injury matters in courts and pre-trial proceedings.',
      'The firm handles contract and ownership conflicts, including partnership disputes and shareholder litigation.',
      'Litigation work includes trade secret and non-compete enforcement when contractual or statutory rights are at issue.',
      'Personal injury representation includes motor vehicle accidents, premises liability, wrongful death, and negligence claims.',
    ],
    services: [
      'Breach of contract and commercial dispute litigation',
      'Partnership disputes and shareholder litigation',
      'Trade secret and non-compete enforcement actions',
      'Motor vehicle accident and premises liability claims',
      'Wrongful death and negligence-based injury litigation',
    ],
    subtopics: [
      {
        heading: 'Business Disputes and Enforcement',
        bullets: [
          'Contract enforcement and defense strategy',
          'Ownership and control conflict litigation',
          'Partnership dissolution and accounting disputes',
          'Trade secret and restrictive covenant claims',
        ],
      },
      {
        heading: 'Personal Injury Claims',
        bullets: [
          'Motor vehicle accident injury claims',
          'Premises liability and slip-and-fall actions',
          'Wrongful death claim litigation',
          'General negligence liability and damages analysis',
        ],
      },
    ],
  },
];

const faqs: Faq[] = [
  {
    question: 'What areas of business law does Murray Legal handle?',
    answer:
      'Murray Legal handles business formation, contract drafting and negotiation, business transactions, and M&A matters. The firm also provides compliance and regulatory guidance for operating businesses across multiple industries.',
  },
  {
    question: 'Does Murray Legal handle residential real estate closings?',
    answer:
      'Yes. Murray Legal represents clients in residential purchase and sale transactions, including contract review and closing coordination. The firm also reviews title and due diligence materials to identify and address legal issues before closing.',
  },
  {
    question: 'What types of civil litigation does Murray Legal take?',
    answer:
      'Murray Legal handles business disputes and personal injury litigation. Business matters include breach of contract, partnership disputes, shareholder litigation, and enforcement matters, while personal injury matters include negligence-based claims.',
  },
  {
    question: 'Can Murray Legal help with land use permits and zoning variances?',
    answer:
      'Yes. Murray Legal advises on land use and zoning matters, including permits, variances, appeals, and entitlement strategy. The firm supports clients through administrative review and project-specific compliance requirements.',
  },
  {
    question: 'Does Murray Legal handle personal injury cases?',
    answer:
      'Yes. Murray Legal handles personal injury claims involving motor vehicle accidents, premises liability, wrongful death, and other negligence claims. Representation includes liability analysis, damages development, and litigation support through resolution.',
  },
];

function App(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <a aria-label="Go to Murray Legal homepage top" className="inline-flex items-center gap-3" href="#top">
            <Scale className="h-8 w-8 text-brand-navy" />
            <span className="text-lg font-semibold text-brand-navy">Murray Legal</span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  aria-label={`Navigate to ${link.label}`}
                  className="text-sm font-semibold text-slate-700 hover:text-brand-navy"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex rounded-md border border-stone-300 p-2 text-brand-navy md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-stone-200 bg-white md:hidden" id="mobile-nav">
            <ul className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    aria-label={`Navigate to ${link.label}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-stone-100"
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main className="bg-stone-50" id="top">
        <section className="bg-brand-navy py-20 text-white">
          <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-semibold tracking-wide text-brand-gold">
              Business Law • Corporate Governance • Real Estate Law • Civil Litigation
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              Trusted Legal Counsel for Business, Real Estate &amp; Litigation
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Murray Legal advises businesses, property owners, and individuals in business law,
              corporate governance, real estate transactions and land use, and civil litigation.
              The firm focuses on clear legal analysis, strong documentation, and practical dispute strategy.
            </p>
            <section className="mt-8 flex flex-wrap gap-4">
              <a
                aria-label="Schedule a consultation with Murray Legal"
                className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-amber-400"
                href="#contact"
              >
                Schedule a Consultation
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                aria-label="View Murray Legal practice areas"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-stone-100"
                href="#business-law"
              >
                View Practice Areas
              </a>
            </section>
          </article>
        </section>

        <section aria-label="Practice Areas" className="py-14">
          <article className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <section className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm" id={area.id} key={area.id}>
                  <header className="mb-5 flex items-center gap-3">
                    <span className="inline-flex rounded-md bg-brand-navy p-2 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-3xl font-bold text-brand-navy">{area.title}</h2>
                  </header>

                  {area.description.map((paragraph) => (
                    <p className="mb-3 leading-7 text-slate-700" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  <ul className="mb-6 mt-4 space-y-2 text-sm text-slate-800">
                    {area.services.map((service) => (
                      <li className="flex items-start gap-2" key={service}>
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <article className="grid gap-4 md:grid-cols-2">
                    {area.subtopics.map((subtopic) => (
                      <article className="rounded-lg bg-stone-50 p-5" key={subtopic.heading}>
                        <h3 className="text-lg font-semibold text-slate-900">{subtopic.heading}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                          {subtopic.bullets.map((item) => (
                            <li className="flex items-start gap-2" key={item}>
                              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </article>
                </section>
              );
            })}
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8" id="faq">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <section className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <article key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </section>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" id="contact">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-navy">Schedule a Legal Consultation</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Murray Legal provides direct assessment of your legal issue and practical next steps for business,
              real estate, and litigation matters. Contact the firm to discuss timelines, documentation, and
              representation options in a confidential consultation.
            </p>
            <p className="mt-4 text-sm text-slate-700">Phone: [INSERT PHONE]</p>
            <p className="text-sm text-slate-700">Email: [INSERT EMAIL]</p>
            <p className="text-sm text-slate-700">Office: [INSERT ADDRESS], [INSERT CITY], [INSERT STATE] [INSERT ZIP]</p>
            <a
              aria-label="Schedule a consultation by email"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              href="mailto:[INSERT EMAIL]"
            >
              Schedule a Consultation
              <ChevronRight className="h-4 w-4" />
            </a>
          </article>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-brand-navy py-10 text-white">
        <article className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <section>
            <h2 className="text-lg font-semibold">Murray Legal</h2>
            <p className="mt-2 text-sm text-slate-200">
              Legal counsel for business law, corporate governance, real estate law, and civil litigation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Practice Areas</h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              <li>Business Law</li>
              <li>Corporate Governance</li>
              <li>Real Estate Law</li>
              <li>Civil Litigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-slate-200">Phone: [INSERT PHONE]</p>
            <p className="text-sm text-slate-200">Email: [INSERT EMAIL]</p>
            <p className="text-sm text-slate-200">Office: [INSERT ADDRESS], [INSERT CITY], [INSERT STATE] [INSERT ZIP]</p>
            <p className="mt-2 text-sm text-slate-300">© 2026 Murray Legal. All rights reserved.</p>
          </section>
        </article>
      </footer>
    </>
  );
}

export default App;
