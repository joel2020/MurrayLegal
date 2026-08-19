/* eslint-disable react-refresh/only-export-components -- router primitives and hook intentionally share one small module */
import { createContext, type ReactNode, useContext, useMemo, useSyncExternalStore } from 'react';

type RouterContextValue = {
  pathname: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const subscribe = (callback: () => void): (() => void) => {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
};

const getSnapshot = (): string => window.location.pathname;

export function BrowserRouter({ children }: { children: ReactNode }): JSX.Element {
  const pathname = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const navigate = (to: string): void => {
    const destination = new URL(to, window.location.origin);
    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    const next = `${destination.pathname}${destination.search}${destination.hash}`;
    if (next === current) return;

    window.history.pushState({}, '', next);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (destination.hash) {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
      window.requestAnimationFrame(() => document.querySelector(destination.hash)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }));
    } else {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  const value = useMemo(
    () => ({
      pathname,
      navigate,
    }),
    [pathname]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('Router context is unavailable.');
  }
  return ctx;
}

export function Link({
  to,
  className,
  children,
  ariaLabel,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}): JSX.Element {
  const { navigate, pathname } = useRouter();
  const destinationPath = new URL(to, window.location.origin).pathname;

  return (
    <a
      href={to}
      aria-label={ariaLabel}
      aria-current={destinationPath === pathname ? 'page' : undefined}
      className={className}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export function usePathname(): string {
  return useRouter().pathname;
}

export function Route({ path, element }: { path: string; element: JSX.Element }): JSX.Element | null {
  const pathname = usePathname();
  return pathname === path ? element : null;
}

export function Routes({ children }: { children: ReactNode }): JSX.Element {
  return <>{children}</>;
}
