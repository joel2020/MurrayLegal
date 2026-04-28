import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema } from '../lib/schema';

export default function About(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="About Murray Legal | Yonkers NY Law Firm"
        description="Learn about Murray Legal, a boutique law firm in Yonkers, NY focused on real estate, business law, and civil litigation."
        canonical={`${SITE_URL}/about`}
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />

      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">About Murray Legal</h1>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
        <article className="rounded-md bg-white p-8 shadow-soft md:col-span-2">
          <h2 className="font-display text-3xl text-navy">The Firm</h2>
          <p className="mt-3 text-text-muted">
            Murray Legal is a boutique law firm based in Yonkers, New York, serving property owners, businesses, and
            individuals across Westchester and the greater New York region.
          </p>
        </article>

        <article className="rounded-md bg-white p-8 shadow-soft">
          <h2 className="font-display text-3xl text-navy">Our Approach</h2>
          <p className="mt-3 text-text-muted">
            Clients receive direct attorney-led counsel, clear communication, and focused legal strategy from initial
            consultation through resolution.
          </p>
        </article>

        <article className="rounded-md border border-gold/30 bg-navy-deep p-8 shadow-soft">
          <h2 className="font-display text-3xl text-ivory">Attorney Credentials</h2>
          <p className="mt-3 text-stone/80">
            Attorney credentials, admissions, and professional memberships will be added once finalized. For current
            information, please contact Murray Legal directly.
          </p>
        </article>

        <article className="rounded-md bg-white p-8 shadow-soft md:col-span-2">
          <h2 className="font-display text-3xl text-navy">Serving Yonkers &amp; Westchester</h2>
          <p className="mt-3 text-text-muted">
            Murray Legal represents clients throughout Yonkers, White Plains, New Rochelle, Mount Vernon, and nearby
            Westchester communities.
          </p>
        </article>
      </section>

      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
