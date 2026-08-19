import { industryNavigation, legalNavigation, practiceNavigation, primaryNavigation } from '../data/navigation';
import {
  EMAIL,
  FIRM_NAME,
  JURISDICTION_NOTICE,
  PHONE_DISPLAY,
  PHONE_TEL,
  PRIMARY_ADDRESS_LINE_1,
  PRIMARY_CITY_STATE_ZIP,
  SECONDARY_ADDRESS_LINE_1,
  SECONDARY_CITY_STATE_ZIP,
} from '../lib/firm';
import { Link } from '../lib/router';
import Container from './Container';

const footerLinkClass = 'block min-h-8 text-sm text-stone transition hover:text-gold-light';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-navy-deep font-body text-stone">
      <Container className="grid gap-12 border-b border-paper/10 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:py-20">
        <div>
          <p className="font-display text-4xl text-paper">{FIRM_NAME}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-stone">Strategic legal counsel for businesses, investors, executives, creators, athletes, families, and private clients navigating consequential decisions.</p>
          <div className="mt-7 flex flex-col items-start gap-2 text-sm">
            <a href={`tel:${PHONE_TEL}`} className="font-semibold text-paper hover:text-gold-light">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="font-semibold text-paper hover:text-gold-light">{EMAIL}</a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">Explore</h2>
          <div className="mt-5">
            {[...primaryNavigation, ...industryNavigation.slice(0, 2)].map((item) => (
              <Link key={item.href} to={item.href} ariaLabel={item.label} className={footerLinkClass}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">Practice Areas</h2>
          <div className="mt-5">
            {practiceNavigation.map((item) => (
              <Link key={item.href} to={item.href} ariaLabel={item.label} className={footerLinkClass}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gold-light">Offices</h2>
          <address className="mt-5 space-y-6 text-sm not-italic leading-7 text-stone">
            <p><span className="block font-semibold text-paper">New York office</span>{PRIMARY_ADDRESS_LINE_1}<br />{PRIMARY_CITY_STATE_ZIP}</p>
            <p><span className="block font-semibold text-paper">Pennsylvania office</span>{SECONDARY_ADDRESS_LINE_1}<br />{SECONDARY_CITY_STATE_ZIP}</p>
          </address>
        </div>
      </Container>
      <Container className="py-8">
        <p className="max-w-none text-xs leading-6 text-stone-dark">{JURISDICTION_NOTICE}</p>
        <div className="mt-6 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-stone-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {FIRM_NAME}. All rights reserved.</p>
          <div className="flex gap-5">
            {legalNavigation.map((item) => <Link key={item.href} to={item.href} ariaLabel={item.label} className="hover:text-paper">{item.label}</Link>)}
          </div>
        </div>
      </Container>
    </footer>
  );
}
