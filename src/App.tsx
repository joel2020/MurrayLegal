import { type JSX, useState } from 'react';
import {
  Building2,
  ChevronRight,
  Landmark,
  Menu,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react';

/*
  Structural notes:
  - Uses semantic HTML landmarks (header/nav/main/section/article/aside/footer) for SEO and LLM readability.
  - Keeps one H1 and applies H2/H3 hierarchy for practice areas and sub-practices.
  - Implements responsive sticky desktop header + mobile hamburger navigation with accessible labels.
*/

type NavItem = {
  href: '#business-law' | '#corporate-governance' | '#real-estate' | '#civil-litigation' | '#faq' | '#contact';
  label: string;
};

type PracticeSection = {
  id: 'business-law' | 'corporate-governance' | 'real-estate' | 'civil-litigation';
  icon: typeof Building2;
  title: string;
  summary: string[];
  subPractices: Array<{
    title: string;
    items: string[];
  }>;
};

type FaqItem = {
  question: string;
  answer: string;
};

const navItems: NavItem[] = [
  { href: '#business-law', label: 'Business Law' },
  { href: '#corporate-governance', label: 'Corporate Governance' },
  { href: '#real-estate', label: 'Real Estate Law' },
  { href: '#civil-litigation', label: 'Civil Litigation' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const practiceSections: PracticeSection[] = [
  {
    id: 'business-law',
    icon: Building2,
    title: 'Business Law',
    summary: [
      'Murray Legal advises businesses through the full lifecycle of formation, growth, and strategic transactions.',
      'We structure LLCs, corporations, and partnerships to match ownership, tax, and management goals.',
      'Our attorneys draft and negotiate contracts that allocate risk clearly and support long-term operations.',
      'We also provide compliance and regulatory guidance tailored to the client’s industry and jurisdiction.',
    ],
    subPractices: [
      {
        title: 'Entity Formation and Structuring',
        items: [
          'LLC, corporation, and partnership formation',
          'Entity conversion and restructuring',
          'Founder and ownership structure planning',
          'Formation document preparation and filing support',
        ],
      },
      {
        title: 'Contracts and Transactions',
        items: [
          'Contract drafting, review, and negotiation',
          'Master service, vendor, and client agreements',
          'Asset and stock purchase transactions',
          'Mergers and acquisition deal documentation',
        ],
      },
      {
        title: 'Compliance and Risk Management',
        items: [
          'Regulatory compliance assessments',
          'Internal policy and process documentation',
          'Commercial risk allocation strategy',
          'Pre-dispute contract enforcement planning',
        ],
      },
    ],
  },
  {
    id: 'corporate-governance',
    icon: ShieldCheck,
    title: 'Corporate Governance',
    summary: [
      'Murray Legal counsels boards, officers, and business owners on governance frameworks that meet legal duties and business objectives.',
      'We help companies maintain reliable governance records and effective decision-making procedures.',
      'Our firm addresses shareholder agreements and disputes with practical, documentation-driven strategies.',
      'We also advise on officer and director liability exposure and governance controls.',
    ],
    subPractices: [
      {
        title: 'Board and Fiduciary Governance',
        items: [
          'Board governance and oversight frameworks',
          'Fiduciary duty counseling for directors and officers',
          'Meeting procedures, resolutions, and minutes',
          'Governance policy implementation',
        ],
      },
      {
        title: 'Shareholder and Ownership Matters',
        items: [
          'Shareholder agreements and updates',
          'Buy-sell and transfer restriction provisions',
          'Shareholder dispute analysis and strategy',
          'Minority and majority rights review',
        ],
      },
      {
        title: 'Organizational Documents and Liability',
        items: [
          'Corporate bylaws and operating agreements',
          'Officer and director liability assessment',
          'Indemnification and advancement provisions',
          'Governance compliance remediation',
        ],
      },
    ],
  },
  {
    id: 'real-estate',
    icon: Landmark,
    title: 'Real Estate Law',
    summary: [
      'Murray Legal represents clients in land use, transactional, commercial, and residential real estate matters.',
      'We handle permits, variances, appeals, and entitlement strategies for development and redevelopment projects.',
      'Our attorneys manage commercial acquisitions, sales, and leasing while coordinating due diligence and title review.',
      'We also support residential closings and construction-related contracts for owners, investors, and developers.',
    ],
    subPractices: [
      {
        title: 'Land Use and Zoning',
        items: [
          'Permit and entitlement applications',
          'Zoning variance and special-use approvals',
          'Land use appeals and administrative proceedings',
          'Development feasibility and zoning compliance review',
        ],
      },
      {
        title: 'Commercial and Residential Transactions',
        items: [
          'Commercial acquisition and sale agreements',
          'Commercial lease drafting and negotiation',
          'Residential purchase and sale contracts',
          'Residential real estate closings and title coordination',
        ],
      },
      {
        title: 'Due Diligence and Development Contracts',
        items: [
          'Title review and curative planning',
          'Survey and diligence package analysis',
          'Construction and development contract drafting',
          'Risk allocation for project delivery and financing',
        ],
      },
    ],
  },
  {
    id: 'civil-litigation',
    icon: Scale,
    title: 'Civil Litigation',
    summary: [
      'Murray Legal litigates business disputes and personal injury claims in state and federal forums.',
      'We build case strategies grounded in facts, contract language, and procedural timelines.',
      'Our business dispute practice includes partnership, shareholder, and trade secret matters.',
      'Our personal injury practice addresses negligence-based claims, including catastrophic loss and wrongful death.',
    ],
    subPractices: [
      {
        title: 'Business Disputes',
        items: [
          'Breach of contract actions',
          'Partnership and joint venture disputes',
          'Shareholder and ownership litigation',
          'Trade secret and non-compete enforcement',
        ],
      },
      {
        title: 'Personal Injury',
        items: [
          'Motor vehicle accident claims',
          'Premises liability and slip-and-fall cases',
          'Wrongful death litigation',
          'General negligence and damages recovery',
        ],
      },
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: 'What areas of business law does Murray Legal handle?',
    answer:
      'Murray Legal handles business formation, contract drafting and negotiation, business transactions, and merger and acquisition matters. The firm also advises on compliance and regulatory obligations affecting day-to-day operations and growth planning.',
  },
  {
    question: 'Does Murray Legal handle residential real estate closings?',
    answer:
      'Yes. Murray Legal advises buyers and sellers in residential transactions, including contract review, title diligence coordination, and closing support. The firm addresses legal issues that arise before, during, and after closing.',
  },
  {
    question: 'What types of civil litigation does Murray Legal take?',
    answer:
      'Murray Legal litigates business disputes and personal injury cases. Business matters include breach of contract, partnership disputes, shareholder litigation, and trade secret or non-compete enforcement, while personal injury matters include negligence-based claims.',
  },
  {
    question: 'Can Murray Legal help with land use permits and zoning variances?',
    answer:
      'Yes. Murray Legal represents clients with permits, zoning variances, entitlement matters, and related appeals. The firm provides legal analysis and advocacy tied to project approvals and land use compliance requirements.',
  },
  {
    question: 'Does Murray Legal handle personal injury cases?',
    answer:
      'Yes. Murray Legal handles personal injury claims involving motor vehicle accidents, premises liability, wrongful death, and general negligence. Representation focuses on proving liability, documenting damages, and pursuing appropriate recovery.',
  },
];

function App(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <a
            aria-label="Murray Legal home"
            className="inline-flex items-center gap-3"
            href="#top"
          >
            <Scale className="h-8 w-8 text-brand-navy" />
            <span className="text-lg font-semibold text-brand-navy">Murray Legal</span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  aria-label={`Navigate to ${item.label}`}
                  className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-navy"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close mobile navigation' : 'Open mobile navigation'}
            className="inline-flex rounded-md border border-slate-300 p-2 text-brand-navy md:hidden"
            onClick={() => setIsMobileMenuOpen((prevOpen) => !prevOpen)}
            type="button"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMobileMenuOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white md:hidden">
            <ul className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    aria-label={`Navigate to ${item.label}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main className="bg-slate-50" id="top">
        <section className="bg-brand-navy py-20 text-white">
          <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-brand-gold">
              Business Law • Corporate Governance • Real Estate • Civil Litigation
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              Trusted Legal Counsel for Business, Real Estate &amp; Litigation
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Murray Legal provides strategic legal representation for business operations,
              corporate governance, real estate transactions, land use matters, and civil litigation.
              The firm delivers clear legal analysis, practical documentation, and courtroom advocacy.
            </p>
            <p className="mt-4 max-w-3xl text-lg text-slate-200">
              We represent companies, property owners, investors, and individuals with a focus on
              risk management, enforceable agreements, and results-driven case strategy.
            </p>
            <a
              aria-label="Schedule a consultation with Murray Legal"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-amber-400"
              href="#contact"
            >
              Schedule a Consultation
              <ChevronRight className="h-4 w-4" />
            </a>
          </article>
        </section>

        <section aria-label="Practice areas" className="py-16">
          <article className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
            {practiceSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                  id={section.id}
                  key={section.id}
                >
                  <header className="mb-6 flex items-center gap-3">
                    <span className="inline-flex rounded-md bg-brand-navy p-2 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-3xl font-bold text-brand-navy">{section.title}</h2>
                  </header>

                  {section.summary.map((paragraph) => (
                    <p className="mb-3 text-base leading-7 text-slate-700" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  <article className="mt-6 grid gap-6 lg:grid-cols-3">
                    {section.subPractices.map((group) => (
                      <article className="rounded-lg bg-slate-50 p-5" key={group.title}>
                        <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                          {group.items.map((item) => (
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

        <aside className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm" id="contact">
            <h2 className="text-2xl font-bold text-brand-navy">Contact Murray Legal</h2>
            <p className="mt-3 max-w-3xl text-slate-700">
              Request a free initial consultation to discuss your business law, governance,
              real estate, or civil litigation matter. We provide direct legal assessment and a
              clear next-step strategy based on your facts and timeline.
            </p>
            <a
              aria-label="Schedule a consultation with Murray Legal"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              href="mailto:info@murraylegal.com"
            >
              Schedule a Consultation
              <ChevronRight className="h-4 w-4" />
            </a>
          </section>
        </aside>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="faq">
          <article className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
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
      </main>

      <footer className="border-t border-slate-200 bg-brand-navy py-10 text-white">
        <article className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <section>
            <h2 className="text-lg font-semibold">Murray Legal</h2>
            <p className="mt-2 text-sm text-slate-200">
              Business Law, Corporate Governance, Real Estate Law, and Civil Litigation.
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
            <p className="text-sm text-slate-200">Address: [INSERT ADDRESS], [INSERT CITY], [INSERT STATE] [INSERT ZIP]</p>
            <p className="mt-2 text-sm text-slate-300">© 2025 Murray Legal. All rights reserved.</p>
          </section>
        </article>
      </footer>
    </>
  );
}

export default App;
