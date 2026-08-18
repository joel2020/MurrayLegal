export type NavigationItem = {
  label: string;
  href: string;
};

export const practiceNavigation: NavigationItem[] = [
  { label: 'Corporate Law', href: '/practice-areas/corporate-law' },
  { label: 'Real Estate', href: '/practice-areas/real-estate' },
  { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
  { label: 'Entertainment Transactions', href: '/practice-areas/entertainment-transactions' },
  { label: 'Sports Transactions', href: '/practice-areas/sports-transactions' },
  { label: 'Intellectual Property', href: '/practice-areas/intellectual-property' },
  { label: 'Trusts, Wills & Estates', href: '/practice-areas/trusts-wills-estates' },
  { label: 'Divorce & Family Law', href: '/practice-areas/divorce-family-law' },
];

export const industryNavigation: NavigationItem[] = [
  { label: 'Businesses & Founders', href: '/industries/businesses-founders' },
  { label: 'Real Estate Investors', href: '/industries/real-estate-investors' },
  { label: 'Entertainment Professionals', href: '/industries/entertainment-professionals' },
  { label: 'Athletes & Sports Organizations', href: '/industries/athletes-sports-organizations' },
  { label: 'High-Net-Worth Individuals', href: '/industries/high-net-worth-individuals' },
];

export const primaryNavigation: NavigationItem[] = [
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const legalNavigation: NavigationItem[] = [
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
