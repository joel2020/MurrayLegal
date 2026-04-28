import { type JSX, useState } from 'react';
import { ChevronRight, Menu, Scale, X } from 'lucide-react';

type NavItem = {
  href:
    | '#home'
    | '#real-estate-attorney'
    | '#corporate-law'
    | '#civil-litigation'
    | '#entertainment-transactions'
    | '#sports-transactions'
    | '#faq'
    | '#contact';
  label: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#real-estate-attorney', label: 'Real Estate Attorney' },
  { href: '#corporate-law', label: 'Corporate Law' },
  { href: '#civil-litigation', label: 'Civil Litigation' },
  { href: '#entertainment-transactions', label: 'Entertainment Transactions' },
  { href: '#sports-transactions', label: 'Sports Transactions' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const faqItems: FaqItem[] = [
  {
    question: 'What types of real estate matters does Murray Legal handle?',
    answer:
      'Murray Legal handles land use and zoning, commercial and residential purchase and sale transactions, leasing matters, title and due diligence review, and related property agreements.',
  },
  {
    question: 'Can Murray Legal help with land use and zoning matters?',
    answer:
      'Yes. The firm advises on permits, variances, zoning review, administrative process strategy, and project-related land use compliance issues.',
  },
  {
    question: 'Does Murray Legal handle commercial real estate transactions?',
    answer:
      'Yes. Murray Legal supports commercial acquisitions, dispositions, leasing, contract negotiation, and due diligence review for business-focused property transactions.',
  },
  {
    question: 'Does Murray Legal assist with residential real estate matters?',
    answer:
      'Yes. The firm handles residential contract review, transaction support, and closing coordination as a supporting part of the real estate practice.',
  },
  {
    question: 'What corporate law services does Murray Legal provide?',
    answer:
      'Murray Legal advises on business law, entity structuring, contract matters, governance documents, board process issues, and ongoing corporate governance obligations.',
  },
  {
    question: 'What kinds of civil litigation does Murray Legal handle?',
    answer:
      'The civil litigation practice includes business disputes such as contract and ownership conflicts, as well as personal injury claims involving negligence-based losses.',
  },
  {
    question: 'Does Murray Legal handle entertainment and sports transactions?',
    answer:
      'Yes. Murray Legal handles entertainment and sports transaction matters, including agreement drafting, negotiation support, and deal-structure review.',
  },
  {
    question: 'When should I contact an attorney during a real estate transaction?',
    answer:
      'Contact an attorney early, ideally before signing a letter of intent or contract, so legal issues can be identified and negotiated before commitments become difficult to change.',
  },
];

function App(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <a aria-label="Go to homepage section" className="inline-flex items-center gap-3" href="#home">
            <span className="inline-flex rounded-md bg-brand-navy p-2 text-white">
              <Scale className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold text-brand-navy">Murray Legal</span>
          </a>

          <ul className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  aria-label={`Navigate to ${item.label}`}
                  className="text-sm font-semibold text-slate-700 transition hover:text-brand-navy"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex rounded-md border border-stone-300 p-2 text-brand-navy md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileMenuOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-stone-200 bg-white md:hidden" id="mobile-navigation">
            <ul className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    aria-label={`Navigate to ${item.label}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-stone-100"
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main className="bg-stone-50" id="home">
        <section className="border-b border-slate-800 bg-brand-navy py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-sm font-semibold tracking-wide text-brand-gold">
              Call [INSERT PHONE] or email [INSERT EMAIL] to discuss your matter.
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              Real Estate Attorney for Land Use, Transactions, and Property Matters
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Murray Legal advises clients on land use, commercial real estate transactions, residential property matters,
              corporate law, civil litigation, and transaction-focused legal work across entertainment and sports.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                aria-label="Schedule a consultation"
                className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-amber-400"
                href="#contact"
              >
                Schedule a Consultation
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                aria-label="Explore practice areas"
                className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-stone-100"
                href="#real-estate-attorney"
              >
                Explore Practice Areas
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Credibility strip" className="border-b border-stone-200 bg-white py-5">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
            {['Real Estate', 'Corporate Law', 'Litigation', 'Transactions'].map((item) => (
              <p className="text-sm font-semibold tracking-wide text-slate-700" key={item}>
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="real-estate-attorney">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Real Estate Attorney</h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              Real estate is the lead practice at Murray Legal. The firm handles land use and zoning issues, commercial
              real estate transactions, transactional property documentation, and supporting residential real estate matters.
              Clients engage the firm early to identify risk, structure terms, and keep property deals moving.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
              {[
                'Land use and zoning analysis, permit strategy, and variance support',
                'Commercial real estate purchase, sale, leasing, and development agreements',
                'Transactional drafting and negotiation for property-related contracts',
                'Title and due diligence review for investment and operating properties',
                'Dispute-prevention planning for transaction and closing terms',
                'Residential real estate contract and closing support',
              ].map((service) => (
                <li className="flex items-start gap-2" key={service}>
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Land Use</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Murray Legal advises on zoning review, permit pathways, variance applications, and municipal process
                  issues that affect development and property use decisions.
                </p>
                <a className="mt-4 inline-flex text-sm font-semibold text-brand-navy" href="#faq">
                  See common land use questions →
                </a>
              </article>

              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Transactional</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  The firm structures and negotiates transaction terms, drafts key agreements, and aligns timelines so
                  real estate transactions close with fewer unresolved legal issues.
                </p>
                <a className="mt-4 inline-flex text-sm font-semibold text-brand-navy" href="#contact">
                  Discuss a transaction timeline →
                </a>
              </article>

              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Commercial Real Estate</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Murray Legal supports commercial buyers, sellers, landlords, tenants, and developers with contracts,
                  leasing structures, due diligence findings, and closing documentation.
                </p>
                <a className="mt-4 inline-flex text-sm font-semibold text-brand-navy" href="#corporate-law">
                  Link corporate and property strategy →
                </a>
              </article>

              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Residential Real Estate</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Residential representation is available for purchase and sale transactions, contract review, and closing
                  support where clear documentation and risk identification are needed.
                </p>
                <a className="mt-4 inline-flex text-sm font-semibold text-brand-navy" href="#contact">
                  Request residential transaction support →
                </a>
              </article>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="corporate-law">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Corporate Law</h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              Murray Legal provides corporate law guidance for operating companies, growth-stage businesses, and closely
              held entities that need clear legal structure, governance controls, and enforceable agreements.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Business Law</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Services include formation decisions, contract drafting and negotiation, and business-law support for
                  operational and transaction planning.
                </p>
              </article>
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Corporate Governance</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  The firm advises on governance documents, board process, ownership controls, and legal obligations tied
                  to management and fiduciary decision-making.
                </p>
              </article>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="civil-litigation">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Civil Litigation</h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              Murray Legal represents clients in civil litigation involving business conflicts and negligence-based personal
              injury claims, with focus on case assessment, documentation, and enforceable outcomes.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Business Disputes</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Litigation services include breach of contract disputes, ownership and governance conflicts, and related
                  commercial claims requiring court action or negotiated resolution.
                </p>
              </article>
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Personal Injury</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  The firm handles personal injury claims involving negligence allegations, liability analysis, and damages
                  development through settlement discussions or litigation.
                </p>
              </article>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="entertainment-transactions">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Entertainment Transactions</h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              Murray Legal provides transaction counsel for entertainment-related agreements, including contract review,
              negotiation support, and rights allocation terms tied to deal execution.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="sports-transactions">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Sports Transactions</h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              The firm advises on sports transaction documentation and negotiated terms where clear contract language,
              timing, and stakeholder responsibilities are essential to closing a deal.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Firm Credentials and Professional Standards</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Jurisdiction and Admissions</h3>
                <p className="mt-2 text-sm text-slate-700">[INSERT BAR ADMISSIONS AND JURISDICTION DETAILS]</p>
              </article>
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Professional Memberships</h3>
                <p className="mt-2 text-sm text-slate-700">[INSERT LAW ASSOCIATION AND INDUSTRY MEMBERSHIPS]</p>
              </article>
              <article className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Client Feedback Policy</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Testimonials or reviews may be published only when ethically permitted and accurately presented.
                </p>
              </article>
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" id="faq">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-5">
              {faqItems.map((faq) => (
                <article key={faq.question}>
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-slate-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8" aria-labelledby="insights-heading">
          <article className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-brand-navy" id="insights-heading">
              Insights
            </h2>
            <p className="mt-4 max-w-4xl text-slate-700">
              Murray Legal is preparing practical legal insights focused on real estate decision points and transaction risk.
            </p>
            {/* Expand the blog only if the firm can publish attorney-reviewed, jurisdiction-specific content consistently. */}
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                'When to hire a real estate attorney during a transaction',
                'What a zoning variance means for a development project',
                'Key issues to review before signing a property agreement',
              ].map((title) => (
                <article className="rounded-lg border border-stone-200 bg-stone-50 p-5" key={title}>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-700">Future attorney-reviewed insight article.</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" id="contact">
          <article className="rounded-xl border border-stone-200 bg-brand-navy p-8 text-white shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold">Contact Murray Legal</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Schedule a consultation to review your real estate, corporate law, civil litigation, or transaction matter.
              Early legal review improves contract terms, timing, and risk management.
            </p>
            <div className="mt-5 space-y-1 text-sm text-slate-200">
              <p>Phone: [INSERT PHONE]</p>
              <p>Email: [INSERT EMAIL]</p>
              <p>Office: [INSERT ADDRESS], [INSERT CITY], [INSERT STATE] [INSERT ZIP]</p>
            </div>
            <a
              aria-label="Schedule consultation by email"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-amber-400"
              href="mailto:[INSERT EMAIL]"
            >
              Schedule a Consultation
              <ChevronRight className="h-4 w-4" />
            </a>
          </article>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Murray Legal</h2>
            <p className="mt-2 text-sm text-slate-700">
              Real Estate Attorney services lead the firm&apos;s practice, supported by corporate law, civil litigation, and
              transaction counsel.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Practice Areas</h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>Real Estate Attorney</li>
              <li>Corporate Law</li>
              <li>Civil Litigation</li>
              <li>Entertainment Transactions</li>
              <li>Sports Transactions</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Office Information</h2>
            <p className="mt-2 text-sm text-slate-700">Phone: [INSERT PHONE]</p>
            <p className="text-sm text-slate-700">Email: [INSERT EMAIL]</p>
            <p className="text-sm text-slate-700">Office: [INSERT ADDRESS], [INSERT CITY], [INSERT STATE] [INSERT ZIP]</p>
            <p className="mt-3 text-xs text-slate-500">© 2026 Murray Legal. All rights reserved.</p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default App;
