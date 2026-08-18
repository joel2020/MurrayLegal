import type { ReactNode } from 'react';
import Breadcrumbs, { type BreadcrumbItem } from './Breadcrumbs';
import Container from './Container';

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  aside?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, breadcrumbs, aside }: PageHeroProps): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(135deg,transparent_45%,rgba(176,138,50,0.11)_45%,rgba(176,138,50,0.11)_45.6%,transparent_45.6%)]" aria-hidden="true" />
      <Container className={`relative grid gap-12 ${aside ? 'lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:items-end' : ''}`}>
        <div className="max-w-[52rem]">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && <p className="eyebrow mt-8">{eyebrow}</p>}
          <h1 className="mt-5 max-w-4xl font-display text-display-xl text-paper">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone sm:text-xl">{description}</p>
        </div>
        {aside && <div className="border-l border-gold/40 pl-6 text-stone">{aside}</div>}
      </Container>
    </section>
  );
}
