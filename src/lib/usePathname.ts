import { useRouter } from './routerContext';

export function usePathname(): string {
  return useRouter().pathname;
}
