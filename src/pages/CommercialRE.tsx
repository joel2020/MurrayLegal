import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  { question: 'What should be covered in a commercial purchase agreement?', answer: 'Key terms include price mechanics, representations, due diligence rights, remedies, and closing conditions.' },
  { question: 'Do you represent landlords and tenants?', answer: 'Yes. Murray Legal negotiates commercial lease terms for both landlord and tenant clients.' },
  { question: 'Why is due diligence critical?', answer: 'Due diligence identifies title, survey, environmental, zoning, and financial risks before obligations become final.' },
  { question: 'Can you assist with 1031 exchanges?', answer: 'Yes. The firm coordinates legal documentation and transaction timing with exchange advisors.' },
  { question: 'Do development projects require custom agreements?', answer: 'Yes. Projects often require tailored development, construction, and financing documents.' },
];

export default function CommercialRE(): JSX.Element {
  return <main className="bg-ivory px-4 py-14 md:px-6"><SEOHead title="Commercial Real Estate Attorney New York | Murray Legal" description="Murray Legal handles commercial real estate transactions in New York including acquisition, leasing, development, and due diligence." canonical="https://murraylegal.com/real-estate-attorney/commercial-transactions" schema={{ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Murray Legal', serviceType: 'Commercial Real Estate' }} /><section className="mx-auto max-w-6xl"><h1 className="font-display text-5xl text-navy">Commercial Real Estate Attorney in New York</h1></section><section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft"><h2 className="font-display text-4xl text-navy">Services</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted"><li>Commercial acquisition and sale</li><li>Commercial leasing (landlord and tenant)</li><li>Due diligence and title review</li><li>Real estate development agreements</li><li>Construction contracts</li><li>1031 exchanges</li></ul></section><section className="mx-auto mt-10 max-w-4xl"><h2 className="font-display text-4xl text-navy">Commercial Real Estate FAQ</h2><div className="mt-6"><FAQAccordion items={faqItems} /></div></section><div className="mt-14"><ConsultationCTA /></div></main>;
}
