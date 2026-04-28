import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { breadcrumbSchema } from '../lib/schema';

const services = [
  'LLC and corporation formation, NY filing and compliance',
  'Operating agreements and shareholder agreements drafted for your specific ownership structure',
  'Commercial contract drafting, review, and negotiation',
  'Board governance frameworks and fiduciary duty guidance',
  'Mergers, acquisitions, and asset purchase agreements',
  'Officer and director liability analysis',
  'Business succession planning',
];

export default function CorporateLaw(): JSX.Element {
  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Business Law Attorney Yonkers NY | Murray Legal"
        description="Murray Legal advises businesses in Yonkers and New York on formation, governance, contracts, and corporate transactions. Contact us for a consultation."
        canonical={`${SITE_URL}/corporate-law`}
        schema={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Corporate Law', path: '/corporate-law' }])}
      />

      <section className="mx-auto max-w-6xl">
        <h1 className="font-display text-5xl text-navy">Business Law &amp; Corporate Governance Attorney in New York</h1>
        <p className="mt-4 max-w-4xl leading-8 text-text-muted">
          Every business — from a newly formed LLC to an established corporation — faces legal inflection points where
          the right structure and documentation either protect the owners or expose them. Murray Legal advises
          businesses across Yonkers, Westchester County, and New York on entity formation, governance, contract
          negotiation, and transactional matters. The firm works closely with founders, officers, and shareholders to
          build the legal frameworks that support growth, reduce conflict, and document ownership clearly. Whether you
          are starting a new business, negotiating a commercial agreement, or managing a governance dispute, Murray
          Legal provides strategic, practical counsel tailored to your goals.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl rounded-md bg-white p-8 shadow-soft">
        <h2 className="font-display text-4xl text-navy">Business Law &amp; Corporate Governance Services</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-text-muted">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <div className="mt-14">
        <ConsultationCTA />
      </div>
    </main>
  );
}
