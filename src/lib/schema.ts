import {
  EMAIL,
  FIRM_NAME,
  PHONE_TEL,
  PRIMARY_ADDRESS_LINE_1,
  PRIMARY_CITY_STATE_ZIP,
  SECONDARY_ADDRESS_LINE_1,
  SECONDARY_CITY_STATE_ZIP,
  SITE_URL,
} from './firm';

type FAQInput = {
  question: string;
  answer: string;
};

type BreadcrumbInput = {
  name: string;
  path: string;
};

const parseCityStateZip = (value: string): { city: string; state: string; zip: string } => {
  const [city, stateZip] = value.split(',').map((part) => part.trim());
  const [state = '', zip = ''] = (stateZip ?? '').split(' ');

  return {
    city: city ?? '',
    state,
    zip,
  };
};

export const localLegalServiceSchema = (practiceArea?: string) => {
  const primary = parseCityStateZip(PRIMARY_CITY_STATE_ZIP);
  const secondary = parseCityStateZip(SECONDARY_CITY_STATE_ZIP);

  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: FIRM_NAME,
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: EMAIL,
    areaServed: ['Yonkers', 'Westchester County', 'New York', 'Pennsylvania'],
    serviceType: practiceArea ?? 'Real Estate Law, Business Law, Civil Litigation',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: PRIMARY_ADDRESS_LINE_1,
        addressLocality: primary.city,
        addressRegion: primary.state,
        postalCode: primary.zip,
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: SECONDARY_ADDRESS_LINE_1,
        addressLocality: secondary.city,
        addressRegion: secondary.state,
        postalCode: secondary.zip,
        addressCountry: 'US',
      },
    ],
  };
};

export const faqSchema = (faqs: FAQInput[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const breadcrumbSchema = (items: BreadcrumbInput[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});
