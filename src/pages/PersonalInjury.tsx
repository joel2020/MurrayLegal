import ConsultationCTA from '../components/ConsultationCTA';
import FAQAccordion from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const faqItems = [
  { question: 'When should I contact a personal injury attorney?', answer: 'Immediately after obtaining medical care so evidence and insurance communications are managed correctly.' },
  { question: 'What damages are available in New York injury cases?', answer: 'Potential damages include medical costs, lost earnings, pain and suffering, and future care needs.' },
  { question: 'Do most injury cases settle?', answer: 'Many do, but preparation for trial strengthens negotiating leverage and case value.' },
  { question: 'What if I was partially at fault?', answer: 'New York comparative negligence rules may still allow recovery with adjusted damages.' },
  { question: 'How long do I have to file?', answer: 'Deadlines vary by claim type and defendant, so legal review should happen quickly.' },
];

export default function PersonalInjury(): JSX.Element {
  return <main className="bg-ivory px-4 py-14 md:px-6"><SEOHead title="Personal Injury Attorney Yonkers NY | Murray Legal" description="Murray Legal represents injury victims in Yonkers and New York for motor vehicle accidents, premises liability, wrongful death, and negligence claims." canonical="https://murraylegal.com/civil-litigation/personal-injury" schema={{ '@context': 'https://schema.org', '@type': 'LegalService', name: 'Murray Legal', serviceType: 'Personal Injury Law' }} /><section className="mx-auto max-w-6xl"><h1 className="font-display text-5xl text-navy">Personal Injury Attorney in Yonkers, NY</h1></section><section className="mx-auto mt-10 max-w-6xl rounded-md bg-white p-8 shadow-soft"><h2 className="font-display text-4xl text-navy">Services</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-text-muted"><li>Motor vehicle accidents</li><li>Slip and fall / premises liability</li><li>Wrongful death</li><li>General negligence claims</li></ul></section><section className="mx-auto mt-10 max-w-4xl"><h2 className="font-display text-4xl text-navy">Personal Injury FAQ</h2><div className="mt-6"><FAQAccordion items={faqItems} /></div></section><div className="mt-14"><ConsultationCTA /></div></main>;
}
