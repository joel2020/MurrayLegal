import {
  EMAIL,
  FIRM_NAME,
  PHONE_TEL,
  PRIMARY_ADDRESS_LINE_1,
  PRIMARY_CITY_STATE_ZIP,
  SECONDARY_ADDRESS_LINE_1,
  SECONDARY_CITY_STATE_ZIP,
  SITE_URL,
  LICENSED_JURISDICTION,
} from './firm';

const allServiceTypes = [
  'Corporate Law',
  'Real Estate',
  'Civil Litigation',
  'Entertainment Transactions',
  'Sports Transactions',
  'Intellectual Property',
  'Trusts, Wills & Estates',
  'Divorce & Family Law',
];

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: FIRM_NAME,
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_TEL,
  areaServed: { '@type': 'AdministrativeArea', name: LICENSED_JURISDICTION },
  address: [`${PRIMARY_ADDRESS_LINE_1}, ${PRIMARY_CITY_STATE_ZIP}`, `${SECONDARY_ADDRESS_LINE_1}, ${SECONDARY_CITY_STATE_ZIP}`],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: FIRM_NAME,
  url: SITE_URL,
});

export const legalServiceSchema = (serviceType?: string[] | string) => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: FIRM_NAME,
  url: SITE_URL,
  areaServed: { '@type': 'AdministrativeArea', name: LICENSED_JURISDICTION },
  description: 'Pennsylvania-licensed legal counsel serving clients in other jurisdictions where permitted by law and through jurisdiction-appropriate arrangements when necessary.',
  serviceType: serviceType ? (Array.isArray(serviceType) ? serviceType : [serviceType]) : allServiceTypes,
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const articleSchema = (post: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  category: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  datePublished: post.datePublished,
  dateModified: post.dateModified,
  author: { '@type': 'Organization', name: FIRM_NAME },
  publisher: { '@type': 'Organization', name: FIRM_NAME },
  mainEntityOfPage: `${SITE_URL}/insights/${post.slug}`,
  articleSection: post.category,
});

export const contactPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Murray Legal',
  url: `${SITE_URL}/contact`,
});

export const localLegalServiceSchema = legalServiceSchema;
