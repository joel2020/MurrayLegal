import { useState } from 'react';
import { Link, usePathname } from '../lib/router';

const PHONE = '(914) 555-0199';

const navItems = [
  { label: 'Real Estate', href: '/real-estate-attorney' },
  { label: 'Corporate Law', href: '/corporate-law' },
  { label: 'Civil Litigation', href: '/civil-litigation' },
  { label: 'Entertainment', href: '/entertainment-law' },
  { label: 'Sports', href: '/sports-transactions' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link to="/" ariaLabel="Go to homepage" className="text-3xl font-display font-semibold text-navy">
          Murray Legal
        </Link>

        <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              ariaLabel={item.label}
              className={`min-h-11 px-1 py-2 text-sm font-medium ${
                pathname === item.href ? 'border-b-2 border-gold text-navy' : 'text-text-dark hover:text-navy'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+19145550199" aria-label="Call Murray Legal" className="min-h-11 py-2 text-sm text-navy">
            {PHONE}
          </a>
          <Link
            to="/contact"
            ariaLabel="Schedule a consultation"
            className="min-h-11 rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-navy"
          >
            Schedule a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="min-h-11 min-w-11 rounded-sm border border-navy px-3 text-navy lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone bg-ivory px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                ariaLabel={item.label}
                className={`min-h-11 rounded-sm px-3 py-3 ${
                  pathname === item.href ? 'bg-stone font-semibold text-navy' : 'text-text-dark'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+19145550199" className="min-h-11 px-3 py-3 text-navy" aria-label="Call Murray Legal">
              {PHONE}
            </a>
            <Link
              to="/contact"
              ariaLabel="Schedule a consultation"
              className="min-h-11 rounded-sm bg-gold px-3 py-3 font-semibold text-navy"
            >
              Schedule a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
