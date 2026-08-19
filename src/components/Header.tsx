import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { industryNavigation, practiceNavigation, primaryNavigation, type NavigationItem } from '../data/navigation';
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/firm';
import { Link, usePathname } from '../lib/router';
import ActionLink from './ActionLink';
import Container from './Container';

type DesktopMenu = 'practices' | 'industries' | null;

function Dropdown({
  id,
  label,
  items,
  open,
  onToggle,
  pathname,
}: {
  id: string;
  label: string;
  items: NavigationItem[];
  open: boolean;
  onToggle: () => void;
  pathname: string;
}): JSX.Element {
  return (
    <div className="relative">
      <button
        type="button"
        className="flex min-h-12 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.09em] text-ink hover:text-gold-dark"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        {label}<ChevronDown aria-hidden="true" size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div id={id} className="absolute left-0 top-full w-[22rem] border-t-2 border-gold bg-paper p-3 shadow-strong">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              ariaLabel={item.label}
              className={`block border-b border-ink/8 px-4 py-3 text-sm font-semibold transition last:border-0 hover:bg-ivory hover:text-gold-dark ${pathname === item.href ? 'text-gold-dark' : 'text-ink'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const shouldRestoreFocus = mobileOpen;
      setMobileOpen(false);
      setDesktopMenu(null);
      if (shouldRestoreFocus) menuButtonRef.current?.focus();
    };
    const handlePointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setDesktopMenu(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 font-body backdrop-blur-md">
      <div className="hidden bg-ink text-paper md:block">
        <Container className="flex min-h-9 items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.12em]">
          <p>Pennsylvania-licensed counsel</p>
          <p>Serving clients nationwide where permitted by law</p>
        </Container>
      </div>
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-5">
        <Link to="/" ariaLabel="Murray Legal Home" className="group flex items-center gap-3 text-ink">
          <span aria-hidden="true" className="grid h-10 w-10 place-items-center border border-gold font-display text-2xl leading-none text-gold-dark">M</span>
          <span className="font-display text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">Murray Legal</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <Dropdown id="practice-menu" label="Practices" items={practiceNavigation} open={desktopMenu === 'practices'} onToggle={() => setDesktopMenu((value) => value === 'practices' ? null : 'practices')} pathname={pathname} />
          <Dropdown id="industry-menu" label="Industries" items={industryNavigation} open={desktopMenu === 'industries'} onToggle={() => setDesktopMenu((value) => value === 'industries' ? null : 'industries')} pathname={pathname} />
          {primaryNavigation.slice(0, 2).map((item) => (
            <Link key={item.href} to={item.href} ariaLabel={item.label} className={`flex min-h-12 items-center text-xs font-bold uppercase tracking-[0.09em] hover:text-gold-dark ${pathname === item.href ? 'text-gold-dark' : 'text-ink'}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionLink href={`tel:${PHONE_TEL}`} ariaLabel="Call Murray Legal" variant="secondary" showIcon={false}>{PHONE_DISPLAY}</ActionLink>
          <ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="grid h-12 w-12 place-items-center border border-ink text-ink lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {mobileOpen && (
        <nav id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-[4.8rem] overflow-y-auto border-t border-ink/10 bg-paper px-5 pb-12 pt-7 md:top-[7rem] sm:px-8 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-3xl gap-9 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-3">Practice Areas</p>
              {practiceNavigation.map((item) => (
                <Link key={item.href} to={item.href} onClick={closeMobile} ariaLabel={item.label} className="block border-b border-ink/10 py-3 text-sm font-semibold text-ink hover:text-gold-dark">{item.label}</Link>
              ))}
            </div>
            <div>
              <p className="eyebrow mb-3">Industries</p>
              {industryNavigation.map((item) => (
                <Link key={item.href} to={item.href} onClick={closeMobile} ariaLabel={item.label} className="block border-b border-ink/10 py-3 text-sm font-semibold text-ink hover:text-gold-dark">{item.label}</Link>
              ))}
              <p className="eyebrow mb-3 mt-8">Firm</p>
              {primaryNavigation.map((item) => (
                <Link key={item.href} to={item.href} onClick={closeMobile} ariaLabel={item.label} className="block border-b border-ink/10 py-3 text-sm font-semibold text-ink hover:text-gold-dark">{item.label}</Link>
              ))}
              <div className="mt-7 grid gap-3">
                <ActionLink href={`tel:${PHONE_TEL}`} ariaLabel="Call Murray Legal" variant="secondary" showIcon={false} className="w-full">{PHONE_DISPLAY}</ActionLink>
                <ActionLink to="/contact" ariaLabel="Request a consultation" className="w-full">Request a consultation</ActionLink>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
