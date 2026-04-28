import ConsultationCTA from '../components/ConsultationCTA';
import SEOHead from '../components/SEOHead';

export default function EntertainmentLaw(): JSX.Element {
  return <main className="bg-ivory px-4 py-14 md:px-6"><SEOHead title="Entertainment Lawyer New York | Murray Legal" description="Murray Legal advises artists, producers, and entertainment businesses in New York on contracts, licensing, and production transactions." canonical="https://murraylegal.com/entertainment-law" schema={{ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Murray Legal', serviceType: 'Entertainment Law' }} /><section className="mx-auto max-w-6xl"><h1 className="font-display text-5xl text-navy">Entertainment Attorney in New York</h1></section><section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft"><h2 className="font-display text-4xl text-navy">Services</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted"><li>Contract drafting and negotiation</li><li>Talent agreements</li><li>Licensing and IP</li><li>Production agreements</li><li>Label and distribution deals</li></ul></section><div className="mt-14"><ConsultationCTA /></div></main>;
}
