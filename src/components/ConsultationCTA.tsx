import { Link } from '../lib/router';

export default function ConsultationCTA(): JSX.Element {
  return (
    <section className="bg-navy px-4 py-16 text-center text-ivory md:px-6" aria-label="Consultation call to action">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl">Ready to Discuss Your Legal Matter?</h2>
        <p className="mt-4 text-base text-stone">
          Murray Legal provides experienced legal counsel for real estate, corporate, and litigation matters in
          New York. Schedule a consultation today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            ariaLabel="Schedule a consultation"
            className="min-h-11 rounded-sm bg-gold px-6 py-3 font-semibold text-navy"
          >
            Schedule a Consultation
          </Link>
          <a href="tel:+19145550199" aria-label="Call Murray Legal" className="min-h-11 py-3 text-stone underline">
            (914) 555-0199
          </a>
        </div>
      </div>
    </section>
  );
}
