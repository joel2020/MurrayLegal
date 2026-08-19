import type { ReactNode } from 'react';
import Breadcrumbs, { type BreadcrumbItem } from './Breadcrumbs';
import Container from './Container';

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  aside?: ReactNode;
  visual?: 'city' | 'solid';
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  aside,
  visual = 'city',
}: PageHeroProps): JSX.Element {
  return (
    <section
      className={`page-hero page-hero--${visual} relative isolate overflow-hidden bg-navy-deep py-16 text-paper sm:py-20 lg:py-24`}
      data-hero-visual={visual}
      aria-label={title}
    >
      {visual === 'city' && (
        <picture className="pointer-events-none absolute inset-0 -z-20 block" aria-hidden="true">
          <source srcSet="/images/murray-legal-manhattan.webp" type="image/webp" />
          <img
            src="/images/murray-legal-manhattan.jpg"
            alt=""
            width="2400"
            height="1600"
            decoding="async"
            className="hero-image h-full w-full object-cover object-center"
          />
        </picture>
      )}
      <div
        data-hero-overlay
        className={`pointer-events-none absolute inset-0 -z-10 ${visual === 'city' ? 'bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60' : 'bg-navy-deep'}`}
        aria-hidden="true"
      />
      <Container className={`relative grid gap-12 border-l-[5px] border-gold pl-6 sm:border-l-8 sm:pl-10 ${aside ? 'lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:items-end' : ''}`}>
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
