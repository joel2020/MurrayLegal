import { ChevronRight, Menu, X } from 'lucide-react';
import { type JSX, useState } from 'react';
import { faqs, highlightCards, navLinks, practiceAreas, trustPoints } from './siteData';

export function SiteHeader(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a aria-label="Go to Murray Legal home" className="text-xl font-semibold text-brand-navy" href="#home">
          Murray Legal
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="text-sm font-medium text-slate-700 hover:text-brand-navy" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            aria-label="Schedule a consultation"
            className="hidden rounded-md bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:inline-flex"
            href="#contact"
          >
            Schedule a Consultation
          </a>
          <button
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex rounded-md border border-stone-300 p-2 text-brand-navy lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <nav aria-label="Mobile navigation" className="border-t border-stone-200 bg-white lg:hidden" id="mobile-nav">
          <ul className="space-y-1 p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-stone-100"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function HeroSection(): JSX.Element {
  return (
    <section className="bg-brand-navy py-20 text-white" id="home">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold tracking-wide text-brand-gold">
          Murray Legal | Strategic Counsel for Businesses, Property Owners, and Litigants
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Business Law, Real Estate &amp; Civil Litigation Counsel
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-200">
          Murray Legal helps companies, investors, and individuals resolve legal issues with practical strategy and clear
          communication. Our firm focuses on business law, corporate governance, real estate matters, and civil
          litigation.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            aria-label="Schedule a consultation"
            className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-amber-400"
            href="#contact"
          >
            Schedule a Consultation
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            aria-label="View practice areas"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-stone-100"
            href="#practice-areas"
          >
            View Practice Areas
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomeSections(): JSX.Element {
  return (
    <>
      <section className="py-14" id="practice-areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy">Practice Areas</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Focused legal services across the matters most critical to our clients. Explore each area for detailed
            services and common matter types.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  href={card.href}
                  key={card.title}
                >
                  <span className="inline-flex rounded-md bg-brand-navy p-2 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-navy">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{card.summary}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-7xl rounded-xl border border-stone-200 bg-white p-8 shadow-sm sm:px-10">
          <h2 className="text-2xl font-bold text-brand-navy">Why Murray Legal</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {trustPoints.map((point) => (
              <li className="flex items-start gap-2 text-slate-700" key={point}>
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function PracticeAreaSections(): JSX.Element {
  return (
    <section className="pb-14">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        {practiceAreas.map((area) => {
          const Icon = area.icon;
          return (
            <section className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm" id={area.id} key={area.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex rounded-md bg-brand-navy p-2 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-3xl font-bold text-brand-navy">{area.title}</h2>
              </div>

              <p className="max-w-4xl leading-7 text-slate-700">{area.description}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-800">
                {area.matters.map((matter) => (
                  <li className="flex items-start gap-2" key={matter}>
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                    <span>{matter}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {area.subtopics.map((subtopic) => (
                  <article className="rounded-lg border border-stone-200 bg-stone-50 p-5" key={subtopic.heading}>
                    <h3 className="text-lg font-semibold text-slate-900">{subtopic.heading}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {subtopic.bullets.map((bullet) => (
                        <li className="flex items-start gap-2" key={bullet}>
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="font-semibold text-slate-800">Related:</span>
                {area.relatedLinks.map((related) => (
                  <a className="font-medium text-brand-navy underline-offset-2 hover:underline" href={related.href} key={related.href}>
                    {related.label}
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export function FAQSection(): JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8" id="faq">
      <div className="rounded-xl border border-stone-200 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold text-brand-navy">Frequently Asked Questions</h2>
          <a className="text-sm font-semibold text-brand-navy hover:underline" href="#contact">
            Need a specific answer? Schedule a consultation.
          </a>
        </div>

        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details className="rounded-lg border border-stone-200 p-4" key={faq.question}>
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">{faq.question}</summary>
              <p className="mt-3 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection(): JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-brand-navy p-8 text-white shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold">Speak With Murray Legal About Your Matter</h2>
        <p className="mt-3 max-w-3xl text-slate-200">
          Whether you need proactive counsel or immediate dispute support, our team can assess your situation and outline
          a practical path forward.
        </p>
        <a
          aria-label="Schedule a consultation"
          className="mt-6 inline-flex rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-amber-400"
          href="#contact"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

export function ContactSection(): JSX.Element {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" id="contact">
      <div className="grid gap-6 rounded-xl border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-brand-navy">Schedule a Consultation</h2>
          <p className="mt-3 text-slate-700">
            Send us a brief summary of your legal matter. We typically respond within one business day with intake steps
            and scheduling options.
          </p>
          <p className="mt-5 text-sm text-slate-700">Phone: (555) 123-4567</p>
          <p className="text-sm text-slate-700">Email: contact@murraylegal.com</p>
          <a
            aria-label="Schedule a consultation by email"
            className="mt-6 inline-flex rounded-md bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            href="mailto:contact@murraylegal.com"
          >
            Schedule a Consultation
          </a>
        </div>

        <form action="#" className="grid gap-4 lg:col-span-3" method="post">
          <label className="text-sm font-medium text-slate-800" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-md border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand-navy"
            id="name"
            name="name"
            required
            type="text"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-800" htmlFor="email">
                Email
              </label>
              <input
                className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand-navy"
                id="email"
                name="email"
                required
                type="email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800" htmlFor="phone">
                Phone
              </label>
              <input
                className="mt-1 w-full rounded-md border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand-navy"
                id="phone"
                name="phone"
                type="tel"
              />
            </div>
          </div>

          <label className="text-sm font-medium text-slate-800" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-32 rounded-md border border-stone-300 px-3 py-2 text-sm outline-none focus:border-brand-navy"
            id="message"
            name="message"
            required
          />

          <button
            aria-label="Submit consultation request"
            className="w-fit rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-amber-400"
            type="submit"
          >
            Schedule a Consultation
          </button>
        </form>
      </div>
    </section>
  );
}

export function SiteFooter(): JSX.Element {
  return (
    <footer className="border-t border-stone-200 bg-brand-navy py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <section>
          <h2 className="text-lg font-semibold">Murray Legal</h2>
          <p className="mt-2 text-sm text-slate-200">
            Counsel in business law, corporate governance, real estate law, and civil litigation.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Practice Areas</h2>
          <ul className="mt-2 space-y-1 text-sm text-slate-200">
            <li>
              <a href="#business-law">Business Law</a>
            </li>
            <li>
              <a href="#corporate-governance">Corporate Governance</a>
            </li>
            <li>
              <a href="#real-estate-law">Real Estate Law</a>
            </li>
            <li>
              <a href="#civil-litigation">Civil Litigation</a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-slate-200">(555) 123-4567</p>
          <p className="text-sm text-slate-200">contact@murraylegal.com</p>
          <p className="mt-3 text-sm text-slate-300">© 2026 Murray Legal. All rights reserved.</p>
        </section>
      </div>
    </footer>
  );
}
