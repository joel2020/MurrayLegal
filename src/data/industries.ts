export type Industry = {
  slug: string;
  title: string;
  description: string;
  perspective: string;
  priorities: string[];
  links: { name: string; slug: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'businesses-founders',
    title: 'Businesses & Founders',
    description: 'Strategic counsel for the contracts, governance decisions, transactions, and disputes that shape a growing enterprise.',
    perspective: 'Legal advice is most useful when it reflects how the business actually operates. Murray Legal helps leadership teams connect commercial objectives with practical protections before decisions become obligations.',
    priorities: ['Company formation and governance', 'Commercial contracts and negotiations', 'Ownership, intellectual property, and growth', 'Dispute prevention and resolution'],
    links: [{ name: 'Corporate Law', slug: 'corporate-law' }, { name: 'Civil Litigation', slug: 'civil-litigation' }, { name: 'Intellectual Property', slug: 'intellectual-property' }, { name: 'Real Estate', slug: 'real-estate' }],
  },
  {
    slug: 'real-estate-investors',
    title: 'Real Estate Investors',
    description: 'Coordinated advice for acquisitions, dispositions, leasing, ownership structures, diligence, and property-related disputes.',
    perspective: 'Real estate decisions combine legal, financial, operational, and timing risk. Counsel should clarify what must be known, negotiated, or preserved before contingencies expire and capital moves.',
    priorities: ['Acquisition and disposition agreements', 'Due diligence and transaction structure', 'Leasing and operating arrangements', 'Property and contract disputes'],
    links: [{ name: 'Real Estate', slug: 'real-estate' }, { name: 'Corporate Law', slug: 'corporate-law' }, { name: 'Civil Litigation', slug: 'civil-litigation' }],
  },
  {
    slug: 'entertainment-professionals',
    title: 'Entertainment Professionals',
    description: 'Business-minded representation for creators, producers, executives, and entertainment ventures navigating rights and revenue.',
    perspective: 'Creative deals can define ownership, control, credit, and compensation long after signature. Murray Legal evaluates both the immediate opportunity and the durable consequences of the agreement.',
    priorities: ['Talent and production agreements', 'Licensing and rights strategy', 'Brand and commercial partnerships', 'Contract enforcement and disputes'],
    links: [{ name: 'Entertainment Transactions', slug: 'entertainment-transactions' }, { name: 'Intellectual Property', slug: 'intellectual-property' }, { name: 'Civil Litigation', slug: 'civil-litigation' }],
  },
  {
    slug: 'athletes-sports-organizations',
    title: 'Athletes & Sports Organizations',
    description: 'Focused counsel for athletes, agents, organizations, and ventures handling endorsements, NIL, licensing, and commercial deals.',
    perspective: 'Sports transactions move quickly and can affect future earnings, exclusivity, personal brands, and marketability. Clear rights and exit terms help preserve optionality.',
    priorities: ['Athlete and representation agreements', 'Endorsements, sponsorships, and NIL', 'Brand licensing and intellectual property', 'Commercial conflicts and enforcement'],
    links: [{ name: 'Sports Transactions', slug: 'sports-transactions' }, { name: 'Intellectual Property', slug: 'intellectual-property' }, { name: 'Civil Litigation', slug: 'civil-litigation' }],
  },
  {
    slug: 'high-net-worth-individuals',
    title: 'High-Net-Worth Individuals',
    description: 'Discreet counsel for significant assets, family transitions, property interests, legacy planning, and sensitive disputes.',
    perspective: 'Private-client matters often cross legal disciplines and involve personal, financial, and reputational consequences. Murray Legal brings those considerations into one measured strategy.',
    priorities: ['Estate and legacy planning', 'Complex family and financial matters', 'Real estate and private investments', 'Sensitive disputes and risk management'],
    links: [{ name: 'Trusts, Wills & Estates', slug: 'trusts-wills-estates' }, { name: 'Divorce & Family Law', slug: 'divorce-family-law' }, { name: 'Real Estate', slug: 'real-estate' }, { name: 'Civil Litigation', slug: 'civil-litigation' }],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((industry) => [industry.slug, industry]));
