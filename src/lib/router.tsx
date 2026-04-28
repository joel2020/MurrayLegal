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
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
}: {
  to: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}): JSX.Element {
  const { navigate } = useRouter();

  return (
    <a
      href={to}
      aria-label={ariaLabel}
      className={className}
      onClick={(event) => {
        event.preventDefault();
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
