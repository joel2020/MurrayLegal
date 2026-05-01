import { useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/firm';
import { Link } from '../lib/router';

const practices = [
  { label: 'Corporate Law', href: '/practice-areas/corporate-law' },
  { label: 'Real Estate', href: '/practice-areas/real-estate' },
  { label: 'Civil Litigation', href: '/practice-areas/civil-litigation' },
  { label: 'Entertainment Transactions', href: '/practice-areas/entertainment-transactions' },
  { label: 'Sports Transactions', href: '/practice-areas/sports-transactions' },
  { label: 'Intellectual Property', href: '/practice-areas/intellectual-property' },
  { label: 'Trusts, Wills & Estates', href: '/practice-areas/trusts-wills-estates' },
  { label: 'Divorce & Family Law', href: '/practice-areas/divorce-family-law' },
];

const industries = [
  { label: 'Businesses & Founders', href: '/industries/businesses-founders' },
  { label: 'Real Estate Investors', href: '/industries/real-estate-investors' },
  { label: 'Entertainment Professionals', href: '/industries/entertainment-professionals' },
  { label: 'Athletes & Sports Organizations', href: '/industries/athletes-sports-organizations' },
  { label: 'High-Net-Worth Individuals', href: '/industries/high-net-worth-individuals' },
];

export default function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(15,31,61,0.1)] bg-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link to="/" ariaLabel="Murray Legal Home" className="font-display text-2xl text-navy">
          Murray Legal
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          <details className="group relative">
            <summary className="cursor-pointer list-none text-sm font-semibold text-navy">Practices</summary>
            <div className="absolute left-0 top-8 min-w-[280px] rounded border bg-white p-4 shadow-soft">
              {practices.map((item) => (
                <Link key={item.href} to={item.href} ariaLabel={item.label} className="block py-1 text-sm text-text-muted hover:text-navy">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="group relative">
            <summary className="cursor-pointer list-none text-sm font-semibold text-navy">Industries</summary>
            <div className="absolute left-0 top-8 min-w-[280px] rounded border bg-white p-4 shadow-soft">
              {industries.map((item) => (
                <Link key={item.href} to={item.href} ariaLabel={item.label} className="block py-1 text-sm text-text-muted hover:text-navy">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <Link to="/insights" ariaLabel="Insights" className="text-sm font-semibold text-navy">Insights</Link>
          <Link to="/about" ariaLabel="About" className="text-sm font-semibold text-navy">About</Link>
          <Link to="/contact" ariaLabel="Contact" className="text-sm font-semibold text-navy">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={`tel:${PHONE_TEL}`} className="text-sm font-medium text-navy">{PHONE_DISPLAY}</a>
          <Link to="/contact" ariaLabel="Schedule a Consultation" className="btn-primary">Schedule a Consultation</Link>
        </div>

        <button type="button" className="xl:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle mobile menu">
          Menu
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[rgba(15,31,61,0.1)] bg-ivory px-4 py-4 xl:hidden" aria-label="Mobile navigation">
          {[...practices, ...industries].map((item) => (
            <Link key={item.href} to={item.href} ariaLabel={item.label} className="block py-2 text-sm text-navy">
              {item.label}
            </Link>
          ))}
          <Link to="/insights" ariaLabel="Insights" className="block py-2 text-sm text-navy">Insights</Link>
          <Link to="/about" ariaLabel="About" className="block py-2 text-sm text-navy">About</Link>
          <Link to="/contact" ariaLabel="Contact" className="block py-2 text-sm text-navy">Contact</Link>
          <Link to="/contact" ariaLabel="Schedule a Consultation" className="btn-primary mt-2 inline-block">Schedule a Consultation</Link>
        </nav>
      )}
    </header>
  );
}
