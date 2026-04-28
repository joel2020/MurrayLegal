import { useEffect, useMemo, useState } from 'react';
import { Link, usePathname } from '../lib/router';

const PHONE = '(914) 555-0199';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Real Estate', href: '/real-estate-attorney' },
  { label: 'Corporate Law', href: '/corporate-law' },
  { label: 'Civil Litigation', href: '/civil-litigation' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const headerClass = useMemo(
    () =>
      `sticky top-0 z-50 border-b border-[rgba(15,31,61,0.10)] bg-[rgba(248,246,241,0.97)] backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-medium' : ''
      }`,
    [scrolled]
  );

  const isActive = (href: string): boolean => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link to="/" ariaLabel="Go to homepage" className="group inline-flex flex-col">
          <span className="font-display text-[1.5rem] leading-none text-navy">Murray Legal</span>
          <span className="mt-2 h-[2px] w-6 bg-gold" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                to={item.href}
                ariaLabel={item.label}
                className={`group relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.08em] transition-colors duration-300 ${
                  active ? 'text-navy' : 'text-text-muted hover:text-navy'
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-[2px] left-0 h-[2px] bg-gold transition-all duration-300 ease-premium ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <a
            href="tel:+19145550199"
            aria-label="Call Murray Legal"
            className="inline-flex items-center gap-2 py-2 text-[0.8rem] text-navy"
          >
            <span aria-hidden="true">☎</span>
            {PHONE}
          </a>
          <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`h-[2px] w-6 bg-navy transition-all duration-300 ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-navy transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`h-[2px] w-6 bg-navy transition-all duration-300 ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-[rgba(15,31,61,0.10)] bg-ivory transition-[max-height] duration-300 ease-premium xl:hidden ${
          menuOpen ? 'max-h-[640px]' : 'max-h-0'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-4 md:px-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  ariaLabel={item.label}
                  className={`w-full border-b border-[rgba(15,31,61,0.08)] px-1 py-3 text-[0.8rem] font-medium uppercase tracking-[0.08em] ${
                    active ? 'text-navy' : 'text-text-muted'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a href="tel:+19145550199" aria-label="Call Murray Legal" className="w-full px-1 py-3 text-[0.8rem] text-navy">
              ☎ {PHONE}
            </a>
            <Link to="/contact" ariaLabel="Schedule a consultation" className="btn-primary mt-2 w-full">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
