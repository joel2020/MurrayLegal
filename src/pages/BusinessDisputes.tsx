import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  { question: 'What types of business disputes do you handle?', answer: 'Murray Legal handles contract, ownership, fiduciary duty, fraud, and enforcement disputes.' },
  { question: 'Can disputes be resolved without trial?', answer: 'Many cases resolve through early negotiation, motion practice, mediation, or arbitration.' },
  { question: 'What evidence should I collect early?', answer: 'Keep signed agreements, amendments, communications, financial records, and relevant internal policies.' },
  { question: 'Do you represent minority owners?', answer: 'Yes, including minority shareholder and member rights enforcement matters.' },
  { question: 'How quickly should legal action begin?', answer: 'Prompt review is important to preserve rights, leverage, and statutory deadlines.' },
];

export default function BusinessDisputes(): JSX.Element {
  return <main className="bg-ivory px-4 py-14 md:px-6"><SEOHead title="Business Dispute Attorney New York | Murray Legal" description="Murray Legal represents businesses and owners in New York business dispute litigation, including contract, partnership, and fraud claims." canonical="https://murraylegal.com/civil-litigation/business-disputes" schema={{ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Murray Legal', serviceType: 'Business Disputes Litigation' }} /><section className="mx-auto max-w-6xl"><h1 className="font-display text-5xl text-navy">Business Dispute Attorney in New York</h1></section><section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft"><h2 className="font-display text-4xl text-navy">Services</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted"><li>Breach of contract litigation</li><li>Partnership and shareholder disputes</li><li>Trade secret and non-compete enforcement</li><li>Commercial debt collection</li><li>Fraud and misrepresentation claims</li></ul></section><section className="mx-auto mt-10 max-w-4xl"><h2 className="font-display text-4xl text-navy">Business Disputes FAQ</h2><div className="mt-6"><FAQAccordion items={faqItems} /></div></section><div className="mt-14"><ConsultationCTA /></div></main>;
}
