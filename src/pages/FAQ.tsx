import FAQAccordion, { type FAQItem } from '../components/FAQAccordion';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../lib/firm';
import { faqSchema } from '../lib/schema';

const realEstate: FAQItem[] = [
  {
    question: 'Do New York real estate transactions require attorneys?',
    answer:
      'In New York, attorney involvement in real estate transactions is standard and strongly advised for both buyers and sellers. Your attorney reviews and negotiates contract terms before signature, confirms the title condition, and coordinates legal requirements before closing. Counsel also handles issues such as repair credits, escrow disputes, and unresolved liens that can interrupt or delay transfer. Having legal representation at the outset usually prevents costly post-closing problems.',
  },
  {
    question: 'Can Murray Legal help with zoning due diligence before I buy property?',
    answer:
      "Yes. Zoning due diligence should be completed before you commit to a purchase, especially for mixed-use, multifamily, or commercial property. Murray Legal reviews local zoning rules, confirms permitted uses, and identifies existing violations or approval requirements that may affect value and financing. The firm also advises whether a variance, special permit, or site plan process is likely before development or occupancy.",
  },
  {
    question: 'What are common reasons real estate closings are delayed in New York?',
    answer:
      'The most common delays include unresolved title defects, lender underwriting conditions, municipal certificate issues, and contract contingencies that were not fully satisfied. Co-op transactions can also be delayed by board package and interview timelines. Early legal review helps identify these issues before they become closing-week emergencies. Murray Legal manages deal timelines proactively and addresses risk items early in the process.',
  },
  {
    question: 'Do you represent both residential and commercial clients?',
    answer:
      'Yes. Murray Legal represents clients in residential purchases and sales, co-op and condo matters, and commercial acquisitions and leasing transactions. The legal approach is tailored to the specific risk profile of each matter, whether it is a first-time home purchase or a high-value investment property. Clients receive direct attorney communication from contract through closing rather than being routed through layers of staff. That continuity improves clarity and execution across the transaction lifecycle.',
  },
];

const corporate: FAQItem[] = [
  {
    question: 'Should I form an LLC or a corporation for my New York business?',
    answer:
      'The right entity depends on ownership structure, tax planning, liability exposure, and long-term capital goals. LLCs and corporations have different governance requirements, flexibility, and treatment of distributions and management authority. Choosing the wrong structure at formation can create avoidable disputes and expensive restructuring later. Murray Legal helps founders evaluate these tradeoffs and implement documentation aligned with business strategy.',
  },
  {
    question: 'Do I need an operating agreement if I am the only owner?',
    answer:
      'Yes, in most cases an operating agreement remains important even for single-member LLCs. It creates formal governance records, clarifies control rights, and supports banking, contracting, and liability separation. Investors, lenders, and counterparties often request these documents during diligence. A clear agreement also reduces legal ambiguity if ownership changes later.',
  },
  {
    question: 'Can Murray Legal review and negotiate commercial contracts?',
    answer:
      'Yes. The firm drafts, reviews, and negotiates commercial agreements to align legal terms with business objectives and operating realities. Contract review focuses on payment structure, limitation of liability, indemnity, termination rights, and dispute provisions. Early negotiation of these terms can prevent disputes and preserve leverage if enforcement becomes necessary. Clients receive practical guidance on what terms are negotiable and where risk is acceptable.',
  },
];

const litigation: FAQItem[] = [
  {
    question: 'Does the firm handle business litigation as well as transactions?',
    answer:
      'Yes. Murray Legal represents businesses in breach of contract disputes, ownership conflicts, fraud claims, and related commercial litigation. That litigation experience also informs how the firm drafts transactional documents to reduce future exposure. When disputes arise, strategy is built around efficient resolution through demand, negotiation, mediation, arbitration, or trial as needed. The goal is outcome-driven advocacy tied to your commercial priorities.',
  },
  {
    question: 'What should I do first if I anticipate a business dispute?',
    answer:
      'Preserve documents immediately, including signed agreements, emails, payment records, and timeline notes. Avoid informal admissions in writing before counsel reviews the legal posture. Early assessment can determine whether a pre-suit demand, negotiated resolution, or immediate filing is the best path. Prompt legal action also helps protect evidence and procedural leverage.',
  },
];

const personalInjury: FAQItem[] = [
  {
    question: 'What is the statute of limitations for personal injury in New York?',
    answer:
      'For most personal injury claims in New York, the limitations period is three years from the date of injury under CPLR § 214. Medical malpractice claims are generally subject to a 2.5-year period. Claims against municipalities usually require a Notice of Claim within 90 days and have additional procedural deadlines. Missing a filing deadline can permanently bar recovery, so case review should happen as early as possible after an incident.',
  },
  {
    question: 'Does Murray Legal handle personal injury on contingency?',
    answer:
      'Yes. For qualifying personal injury matters, Murray Legal accepts cases on a contingency fee basis, meaning legal fees are owed only if there is a recovery. The applicable contingency structure is governed by New York rules and explained clearly in the engagement agreement. Clients receive transparent information about costs, disbursements, and settlement allocation before representation begins. This model allows injured clients to pursue claims without paying hourly legal fees upfront.',
  },
  {
    question: 'What evidence should I preserve after an accident?',
    answer:
      'Preserve photographs of the scene, your injuries, and any property damage as soon as possible. Collect names and contact details of witnesses, obtain the police or incident report number, and keep all treatment records and medical bills. Do not post details of the incident or your injuries on social media because insurers may use that content to challenge credibility. Early evidence preservation materially improves claim value and litigation readiness.',
  },
  {
    question: 'Can I sue if I was partially at fault?',
    answer:
      'Yes. New York applies a pure comparative negligence standard, so you may still recover damages even if you were partly responsible for the incident. Any recovery is reduced by your percentage of fault as determined by the evidence. Liability allocation is highly fact-specific and often disputed by insurers and defense counsel. An early legal analysis helps frame the facts and protect the strongest recovery position.',
  },
  {
    question: 'What damages can I recover in a New York personal injury case?',
    answer:
      "Potential damages may include past and future medical expenses, lost wages, reduced earning capacity, and pain and suffering. In wrongful death matters, additional damages may be pursued on behalf of the decedent's estate and dependents. Case value depends on injury severity, permanence, causation evidence, and available insurance coverage. Murray Legal evaluates each case based on documentation and realistic settlement-versus-trial outcomes.",
  },
];

const general: FAQItem[] = [
  {
    question: 'How quickly can I expect a response from Murray Legal?',
    answer:
      'Murray Legal aims to respond to new inquiries within one business day. If your issue involves an active contract deadline, injury event, or imminent filing date, note that urgency in your message. Time-sensitive matters are prioritized for same-day review whenever possible. Early contact usually preserves more legal options and improves strategic planning.',
  },
  {
    question: 'Does submitting the contact form create an attorney-client relationship?',
    answer:
      'No. Submitting an inquiry does not by itself create an attorney-client relationship. Representation begins only after conflict review, mutual agreement, and a signed engagement letter. Until then, legal duties remain limited to intake communications and screening. You should avoid sending highly sensitive documents until requested by the firm.',
  },
];

export default function FAQ(): JSX.Element {
  const all = [...realEstate, ...corporate, ...litigation, ...personalInjury, ...general];

  return (
    <main className="bg-ivory px-4 py-14 md:px-6">
      <SEOHead
        title="Frequently Asked Questions | Murray Legal"
        description="Frequently asked questions about Murray Legal services in real estate, business law, corporate governance, civil litigation, and personal injury matters in New York."
        canonical={`${SITE_URL}/faq`}
        schema={faqSchema(all)}
      />

      <section className="mx-auto max-w-5xl">
        <h1 className="font-display text-5xl text-navy">Frequently Asked Questions</h1>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="font-display text-3xl text-navy">Real Estate Questions</h2>
            <div className="mt-4">
              <FAQAccordion items={realEstate} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-navy">Business Law Questions</h2>
            <div className="mt-4">
              <FAQAccordion items={corporate} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-navy">Contract Dispute Questions</h2>
            <div className="mt-4">
              <FAQAccordion items={litigation} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-navy">Personal Injury Questions</h2>
            <div className="mt-4">
              <FAQAccordion items={personalInjury} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-navy">General Questions</h2>
            <div className="mt-4">
              <FAQAccordion items={general} />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
