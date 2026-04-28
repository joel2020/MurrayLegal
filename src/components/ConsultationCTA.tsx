import { Link } from '../lib/router';

export default function ConsultationCTA(): JSX.Element {
  return (
    <section className="bg-navy px-4 py-20 md:px-6 md:py-28" aria-label="Consultation call to action">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-display-lg text-ivory">Ready to Discuss Your Legal Matter?</h2>
        <span className="gold-rule mt-6" aria-hidden="true" />
        <p className="text-base text-stone/80">
          Murray Legal provides experienced counsel for real estate, corporate, and litigation matters throughout
          Yonkers, Westchester, and greater New York.
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
            Schedule a Consultation
          </Link>
          <a
            href="tel:+19142141880"
            aria-label="Call Murray Legal"
            className="inline-flex min-h-[48px] items-center text-sm font-medium uppercase tracking-[0.08em] text-gold"
          >
            ☎ 9142141880
          </a>
        </div>
      </div>
    </section>
  );
}
