import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';

export default function About(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="About Murray Legal | Yonkers NY Law Firm"
        description="Learn about Murray Legal, a boutique law firm in Yonkers, NY focused on real estate, business law, and civil litigation."
        canonical="https://murraylegal.com/about"
      />

      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">About Murray Legal</h1>
      </section>

      <section className="mx-auto mt-10 max-w-6xl space-y-6">
        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">The Firm</h2>
          <p className="mt-3 text-text-muted">
            Murray Legal is a boutique law firm based in Yonkers, New York, providing direct senior-level legal
            counsel to individuals, property owners, and businesses across Westchester County and the greater New York
            region. The firm focuses its practice on real estate law, business and corporate law, and civil litigation
            — areas where local knowledge, transactional precision, and advocacy skill determine client outcomes.
          </p>
        </article>

        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">Our Approach</h2>
          <p className="mt-3 text-text-muted">
            Boutique practice means clients are never routed to junior associates or support staff for substantive
            work. Every client works directly with their attorney from the initial consultation through resolution.
            This model produces sharper strategy, faster communication, and full accountability — qualities that
            matter most when legal outcomes carry real financial or personal consequences.
          </p>
        </article>

        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">Bar Admission &amp; Credentials</h2>
          <p className="mt-3 text-text-muted">
            [PLACEHOLDER — Attorney to provide: Name, Bar admission year, Law school, Bar admissions (NY + any
            others), Professional memberships, Westchester Bar Association, NYSBA sections, any specialized
            certifications]
          </p>
        </article>

        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">Serving Yonkers &amp; Westchester</h2>
          <p className="mt-3 text-text-muted">
            Murray Legal is headquartered in Yonkers and maintains active working relationships with Westchester County
            courts, municipal boards, and local counsel. That local presence is particularly valuable in land use
            matters, where familiarity with planning boards and zoning officials can accelerate approvals and reduce
            opposition. The firm represents clients throughout Yonkers, White Plains, New Rochelle, Mount Vernon, and
            surrounding Westchester communities.
          </p>
        </article>
      </section>

      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
