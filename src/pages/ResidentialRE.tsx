import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  { question: 'When should I retain a residential real estate attorney?', answer: 'Engage counsel before signing or immediately after offer acceptance to protect contract and title interests.' },
  { question: 'Do I need legal review for co-op purchases?', answer: 'Yes. Co-op transactions involve board packages, proprietary leases, and building-specific obligations.' },
  { question: 'Can an attorney fix title issues before closing?', answer: 'Yes. Counsel can clear liens, resolve deed defects, and negotiate corrective instruments.' },
  { question: 'What happens at residential closing?', answer: 'Closing includes document execution, fund transfers, recording coordination, and legal confirmation of final terms.' },
  { question: 'Do you handle foreclosure-related matters?', answer: 'Yes. Murray Legal advises clients facing foreclosure risks, workouts, and related transactional decisions.' },
];

export default function ResidentialRE(): JSX.Element {
  return <main className="bg-ivory px-4 py-14 md:px-6"><SEOHead title="Residential Real Estate Attorney Yonkers NY | Murray Legal" description="Murray Legal assists buyers and sellers in residential real estate transactions in Yonkers, Westchester, and New York." canonical="https://murraylegal.com/real-estate-attorney/residential-transactions" schema={{ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Murray Legal', serviceType: 'Residential Real Estate' }} /><section className="mx-auto max-w-6xl"><h1 className="font-display text-5xl text-navy">Residential Real Estate Attorney in Yonkers, NY</h1></section><section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft"><h2 className="font-display text-4xl text-navy">Services</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted"><li>Purchase and sale agreements</li><li>Residential closings</li><li>Contract review and negotiation</li><li>Title and deed issues</li><li>Co-op and condo transactions</li><li>Foreclosure-related matters</li></ul></section><section className="mx-auto mt-10 max-w-4xl"><h2 className="font-display text-4xl text-navy">Residential Real Estate FAQ</h2><div className="mt-6"><FAQAccordion items={faqItems} /></div></section><div className="mt-14"><ConsultationCTA /></div></main>;
}
