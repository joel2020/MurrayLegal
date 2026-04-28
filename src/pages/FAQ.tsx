import FAQAccordion, { type FAQItem } from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';

const realEstate: FAQItem[] = [
  { question: 'Do New York real estate transactions require attorneys?', answer: 'Attorney representation is standard and strongly recommended for contract drafting, title review, and closing protection.' },
  { question: 'What is title review?', answer: 'Title review confirms ownership rights and identifies liens, easements, and legal restrictions affecting use and transfer.' },
  { question: 'Can a contract be negotiated after signing?', answer: 'Certain changes may be negotiated by amendment, but leverage is strongest before signing.' },
  { question: 'How does zoning affect property value?', answer: 'Zoning determines permitted use and development potential, which can materially impact valuation and financing.' },
  { question: 'Do you handle co-op and condo transactions?', answer: 'Yes. We advise clients on board packages, governing documents, and closing requirements.' },
  { question: 'What are common closing delays?', answer: 'Common delays involve title defects, lender issues, municipal certificates, and unresolved contract conditions.' },
];
const corporate: FAQItem[] = [
  { question: 'What business entity should I choose?', answer: 'Entity choice depends on liability, tax planning, ownership structure, and future capital strategy.' },
  { question: 'Do I need an operating agreement for a single-member LLC?', answer: 'Yes, formal documentation supports governance clarity, banking, and legal protection.' },
  { question: 'Can you review vendor and client contracts?', answer: 'Yes. We draft and negotiate contracts to align commercial terms and legal risk controls.' },
  { question: 'What does corporate governance include?', answer: 'Governance includes board procedures, fiduciary oversight, decision authority, and compliance structures.' },
];
const litigation: FAQItem[] = [
  { question: 'How long does civil litigation take?', answer: 'Timeline depends on case complexity, court schedules, motion practice, and settlement opportunities.' },
  { question: 'Should I send a demand letter first?', answer: 'Often yes. A well-structured demand can frame issues and encourage early resolution.' },
  { question: 'Can business partners force a buyout?', answer: 'Rights depend on governing agreements, statutory remedies, and case-specific facts.' },
  { question: 'What should I do after an injury incident?', answer: 'Seek medical care, document conditions, preserve evidence, and consult counsel promptly.' },
];
const entSports: FAQItem[] = [
  { question: 'Do you negotiate talent and athlete agreements?', answer: 'Yes. We negotiate compensation, rights, obligations, termination, and dispute provisions.' },
  { question: 'What is an NIL agreement?', answer: 'A NIL agreement governs compensation and use of an athlete’s name, image, and likeness rights.' },
  { question: 'Can you review production and distribution contracts?', answer: 'Yes. We advise on ownership, royalties, delivery terms, and risk allocation.' },
];
const general: FAQItem[] = [
  { question: 'Where is Murray Legal located?', answer: 'Murray Legal is based in Yonkers, New York, serving Westchester County and greater New York.' },
  { question: 'How do consultations work?', answer: 'Consultations assess objectives, legal posture, timelines, and recommended next steps.' },
  { question: 'How quickly can I expect a response?', answer: 'The firm aims to respond to new inquiries within 24 hours during business days.' },
];

export default function FAQ(): JSX.Element {
  const all = [...realEstate, ...corporate, ...litigation, ...entSports, ...general];
  return <main className="bg-ivory px-4 py-14 md:px-6"><SEOHead title="Frequently Asked Questions | Murray Legal" description="Frequently asked questions about Murray Legal services in real estate, corporate law, civil litigation, entertainment law, and sports transactions." canonical="https://murraylegal.com/faq" schema={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: all.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }} /><section className="mx-auto max-w-5xl"><h1 className="font-display text-5xl text-navy">Frequently Asked Questions</h1><div className="mt-10 space-y-10"><section><h2 className="font-display text-3xl text-navy">Real Estate</h2><div className="mt-4"><FAQAccordion items={realEstate} /></div></section><section><h2 className="font-display text-3xl text-navy">Corporate Law</h2><div className="mt-4"><FAQAccordion items={corporate} /></div></section><section><h2 className="font-display text-3xl text-navy">Civil Litigation</h2><div className="mt-4"><FAQAccordion items={litigation} /></div></section><section><h2 className="font-display text-3xl text-navy">Entertainment & Sports</h2><div className="mt-4"><FAQAccordion items={entSports} /></div></section><section><h2 className="font-display text-3xl text-navy">General / Working With Murray Legal</h2><div className="mt-4"><FAQAccordion items={general} /></div></section></div></section></main>;
}
