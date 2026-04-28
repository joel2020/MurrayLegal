import { Briefcase, Building2, Landmark, Scale, ShieldCheck, type LucideIcon } from 'lucide-react';

export type NavLink = {
  href: '#home' | '#business-law' | '#corporate-governance' | '#real-estate-law' | '#civil-litigation' | '#faq' | '#contact';
  label: string;
};

export type Subtopic = {
  heading: string;
  bullets: string[];
};

export type PracticeArea = {
  id: 'business-law' | 'corporate-governance' | 'real-estate-law' | 'civil-litigation';
  title: string;
  icon: LucideIcon;
  description: string;
  matters: string[];
  subtopics: Subtopic[];
  relatedLinks: Array<{ href: NavLink['href']; label: string }>;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#business-law', label: 'Business Law' },
  { href: '#corporate-governance', label: 'Corporate Governance' },
  { href: '#real-estate-law', label: 'Real Estate Law' },
  { href: '#civil-litigation', label: 'Civil Litigation' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'business-law',
    title: 'Business Law',
    icon: Briefcase,
    description:
      'We advise founders, growth-stage companies, and established businesses on the legal decisions that shape operations and reduce risk. Murray Legal builds practical legal frameworks so business leaders can move with confidence.',
    matters: [
      'Entity formation and ownership structuring',
      'Commercial contract drafting and negotiation',
      'Vendor, customer, and partnership agreements',
      'Business purchases, sales, and strategic transactions',
      'Ongoing compliance and risk-management counseling',
    ],
    subtopics: [
      {
        heading: 'Entity Formation',
        bullets: [
          'LLC and corporation setup with custom operating terms',
          'Founder agreements and ownership rights planning',
          'Governance provisions aligned with growth goals',
        ],
      },
      {
        heading: 'Contracts',
        bullets: [
          'Review and negotiation of high-value agreements',
          'Master service agreements and statements of work',
          'Contract language focused on enforcement and clarity',
        ],
      },
    ],
    relatedLinks: [
      { href: '#corporate-governance', label: 'Corporate Governance' },
      { href: '#civil-litigation', label: 'Business Disputes & Litigation' },
    ],
  },
  {
    id: 'corporate-governance',
    title: 'Corporate Governance',
    icon: ShieldCheck,
    description:
      'Murray Legal supports boards, owners, and leadership teams with governance systems that protect the company and its decision-makers. We translate fiduciary obligations into clear processes, records, and policies.',
    matters: [
      'Board governance and fiduciary duty counseling',
      'Bylaws and operating agreement updates',
      'Shareholder rights and voting structure planning',
      'Owner/officer dispute prevention and response',
      'Corporate records, resolutions, and governance policies',
    ],
    subtopics: [
      {
        heading: 'Board Governance',
        bullets: [
          'Board procedures and approval workflows',
          'Conflict-of-interest review and protocols',
          'Decision documentation for defensibility',
        ],
      },
      {
        heading: 'Shareholder Matters',
        bullets: [
          'Shareholder agreement drafting and revision',
          'Buy-sell and transfer restrictions',
          'Governance planning for ownership transitions',
        ],
      },
    ],
    relatedLinks: [
      { href: '#business-law', label: 'Business Law' },
      { href: '#civil-litigation', label: 'Shareholder Litigation' },
    ],
  },
  {
    id: 'real-estate-law',
    title: 'Real Estate Law',
    icon: Landmark,
    description:
      'We represent developers, investors, and property owners in transactional and land-use matters. The firm handles the legal details behind acquisitions, development, leasing, and zoning so projects stay on track.',
    matters: [
      'Commercial and residential purchase/sale agreements',
      'Land use strategy, zoning permits, and variances',
      'Leasing and landlord-tenant commercial terms',
      'Title, survey, and diligence issue analysis',
      'Construction and development contract support',
    ],
    subtopics: [
      {
        heading: 'Land Use & Zoning',
        bullets: [
          'Permit and variance application guidance',
          'Zoning compliance and entitlement planning',
          'Administrative hearing and appeal support',
        ],
      },
      {
        heading: 'Transactions & Development',
        bullets: [
          'Commercial acquisition and sale documentation',
          'Residential closing counsel and issue remediation',
          'Development agreements and risk allocation',
        ],
      },
    ],
    relatedLinks: [
      { href: '#business-law', label: 'Business Law for Developers' },
      { href: '#faq', label: 'Real Estate FAQs' },
    ],
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    icon: Scale,
    description:
      'When disputes escalate, Murray Legal provides strategic litigation counsel grounded in preparation and courtroom experience. We represent businesses and individuals through negotiation, motion practice, and trial-focused case development.',
    matters: [
      'Breach of contract and business tort claims',
      'Partnership and shareholder disputes',
      'Trade secret and restrictive covenant enforcement',
      'Personal injury and premises liability litigation',
      'Wrongful death and negligence-based claims',
    ],
    subtopics: [
      {
        heading: 'Business Disputes',
        bullets: [
          'Contract enforcement and defense',
          'Ownership and control disputes',
          'Emergency relief and injunction strategy',
        ],
      },
      {
        heading: 'Personal Injury',
        bullets: [
          'Motor vehicle accident claims',
          'Premises liability litigation',
          'Case valuation and damages development',
        ],
      },
    ],
    relatedLinks: [
      { href: '#business-law', label: 'Business Law' },
      { href: '#contact', label: 'Request Litigation Counsel' },
    ],
  },
];

export const faqs: Faq[] = [
  {
    question: 'How quickly can I expect a response after submitting the contact form?',
    answer:
      'Most consultation requests receive a response within one business day. If your issue is time-sensitive, call the office directly so we can prioritize immediate next steps.',
  },
  {
    question: 'Do you work with both new and established businesses?',
    answer:
      'Yes. Murray Legal advises startups, privately held companies, and established organizations on formation, contracts, governance, and disputes.',
  },
  {
    question: 'Can you help with zoning and land use approvals?',
    answer:
      'Yes. We assist with zoning analysis, permit applications, variances, and hearings tied to development and property use changes.',
  },
  {
    question: 'What types of civil litigation do you handle?',
    answer:
      'Our litigation work includes commercial disputes, partnership and shareholder conflicts, contract claims, and personal injury matters including negligence and premises liability.',
  },
  {
    question: 'Do I need all my documents ready before a consultation?',
    answer:
      'No. Bring what you have, and we will identify what additional contracts, correspondence, or records are needed to evaluate your matter thoroughly.',
  },
  {
    question: 'Can Murray Legal serve as outside general counsel?',
    answer:
      'Yes. We provide ongoing counsel for business and governance matters for clients who need practical legal support without building an in-house legal department.',
  },
];

export const trustPoints = [
  'Focused counsel in business law, governance, real estate, and litigation.',
  'Responsive communication with clear next steps at every stage.',
  'Practical contract and compliance guidance designed to prevent disputes.',
  'Courtroom and dispute-resolution experience when conflict cannot be avoided.',
];

export const highlightCards = [
  {
    title: 'Business Law',
    summary: 'Entity formation, contracts, transactions, and day-to-day legal guidance.',
    href: '#business-law' as const,
    icon: Building2,
  },
  {
    title: 'Corporate Governance',
    summary: 'Board counsel, fiduciary duty guidance, and owner dispute prevention.',
    href: '#corporate-governance' as const,
    icon: ShieldCheck,
  },
  {
    title: 'Real Estate Law',
    summary: 'Land use, zoning, acquisitions, leases, and development documentation.',
    href: '#real-estate-law' as const,
    icon: Landmark,
  },
  {
    title: 'Civil Litigation',
    summary: 'Business disputes and personal injury representation when stakes are high.',
    href: '#civil-litigation' as const,
    icon: Scale,
  },
];
