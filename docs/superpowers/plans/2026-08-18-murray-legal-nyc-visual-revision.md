# Murray Legal NYC Visual Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing Murray Legal presentation into the approved firm-focused, Manhattan-led navy-and-gold system while preserving every working route, SEO contract, intake safeguard, and jurisdiction notice.

**Architecture:** Keep the existing React 18, TypeScript, Vite, Tailwind, and custom-router architecture. Centralize the new interaction language in a reusable `ActionLink`, update `PracticeAreaCard` into the Counsel Grid card, and use shared hero, navigation, footer, CTA, and token primitives across existing data-driven page templates. Preserve `src/lib/firm.ts`, route data, schemas, and `/api/intake`; this phase changes presentation and approved copy only.

**Tech Stack:** React 18, TypeScript 5.5, Vite 5, Tailwind CSS 3.4, Lucide React, Vitest, Testing Library, Playwright.

## Global Constraints

- Use Midnight Navy `#0B1930`, Harbor Navy `#132641`, Brass Gold `#B08A32`, Light Brass `#D0B467`, Warm Ivory `#F7F4ED`, Paper White `#FCFAF5`, Ink `#111A28`, and Slate `#68707B`; remove electric blue.
- Use Bodoni Moda weights 500 and 600 for display roles and Instrument Sans weights 400 through 700 for body and utility roles.
- Use full-bleed monochrome Manhattan imagery on the homepage and shorter architectural heroes on relevant internal pages.
- Preserve square or nearly square panels; the inset primary-action arrow carrier is the principal rounded shape.
- Adapt the approved 21st.dev expandable-icon and hover-card patterns locally; add no new runtime component dependency.
- Keep the brand firm-focused. Do not add an attorney portrait, signature, testimonial, rating, ranking, result, award, experience claim, credential, or client logo without verified client material.
- Refer to the Yonkers office factually and never imply New York bar admission; retain the verified Pennsylvania licensing language.
- Preserve all current public routes, canonical relationships, structured data, sitemap behavior, and the `/api/intake` request contract.
- Keep controls keyboard-operable, use visible focus, maintain 44-pixel touch targets, and respect `prefers-reduced-motion`.
- Verify layouts at 375, 768, 1024, and 1440 pixels with no horizontal overflow.

## File Structure Map

- `index.html`: production font request and document-level theme metadata.
- `tailwind.config.js`: approved color, type, shadow, radius, and motion tokens.
- `src/index.css`: global type rules, action variants, card states, focus, fields, image fallback, and reduced motion.
- `public/images/murray-legal-manhattan.webp` and `.jpg`: optimized licensed Manhattan hero source and fallback.
- `src/components/ActionLink.tsx`: one internal/external CTA interface with optional arrow carrier.
- `src/components/PracticeAreaCard.tsx`: Counsel Grid card with category, visible description, and single destination.
- `src/components/Header.tsx` and `Footer.tsx`: persistent consultation/telephone access and global brand shell.
- `src/components/CityHero.tsx`: homepage-specific city hero and approved copy.
- `src/components/PageHero.tsx`: shared `city` or `solid` internal hero.
- `src/components/ConsultationCTA.tsx`, `SectionHeading.tsx`, `LegalDocument.tsx`, and `IntakeForm.tsx`: shared closing, heading, legal, and form surfaces.
- `src/pages/Home.tsx`: approved homepage composition.
- `src/pages/PracticeAreaPage.tsx`, `IndustryPage.tsx`, `About.tsx`, `Blog.tsx`, `BlogPost.tsx`, `Contact.tsx`, and `NotFound.tsx`: internal template adoption.
- `src/data/practiceAreas.ts`: factual category labels for Counsel Grid cards.
- `src/test/*.test.tsx`, `src/test/visual-system.test.ts`, and `e2e/*.spec.ts`: component, route, interaction, SEO, accessibility, responsive, and screenshot evidence.

---

### Task 1: Lock the Approved Tokens, Fonts, and Manhattan Asset

**Files:**
- Create: `src/test/visual-system.test.ts`
- Create: `public/images/murray-legal-manhattan.webp`
- Create: `public/images/murray-legal-manhattan.jpg`
- Modify: `index.html`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: the approved hex values, font families, and image rules from the design specification.
- Produces: Tailwind names `ink`, `navy`, `navy-deep`, `navy-mid`, `gold`, `gold-light`, `ivory`, `paper`, and `muted`; CSS classes used by all later tasks; `/images/murray-legal-manhattan.webp` and `.jpg`.

- [ ] **Step 1: Write the failing foundation contract test**

```ts
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = new URL('../../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');

describe('NYC visual foundation', () => {
  it('loads the approved fonts and tokens', () => {
    expect(read('index.html')).toContain('family=Bodoni+Moda');
    expect(read('index.html')).toContain('family=Instrument+Sans');
    expect(read('src/index.css')).toContain("font-family: 'Instrument Sans'");
    expect(read('src/index.css')).toContain("font-family: 'Bodoni Moda'");
    expect(read('tailwind.config.js')).toContain("paper: '#fcfaf5'");
    expect(read('tailwind.config.js')).toContain("'navy-mid': '#132641'");
  });

  it('ships local Manhattan hero sources', () => {
    expect(existsSync(new URL('public/images/murray-legal-manhattan.webp', root))).toBe(true);
    expect(existsSync(new URL('public/images/murray-legal-manhattan.jpg', root))).toBe(true);
  });
});
```

- [ ] **Step 2: Run the contract and verify it fails on the old fonts and missing asset**

Run: `npm test -- src/test/visual-system.test.ts`

Expected: FAIL because the document still requests Cormorant Garamond/Manrope and the Manhattan files do not exist.

- [ ] **Step 3: Add the licensed, local hero image**

Run:

```bash
curl -L 'https://images.unsplash.com/photo-1701200368668-096d514f3680?auto=format&fit=crop&w=2400&q=84&fm=webp' -o public/images/murray-legal-manhattan.webp
curl -L 'https://images.unsplash.com/photo-1701200368668-096d514f3680?auto=format&fit=crop&w=2400&q=84&fm=jpg' -o public/images/murray-legal-manhattan.jpg
```

Confirm both responses are real images with `file public/images/murray-legal-manhattan.*` and record the Unsplash source URL in the eventual image-credit or project evidence note if attribution is retained.

- [ ] **Step 4: Replace the font request and visual tokens**

Use this font request in `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500;6..96,600&family=Instrument+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Update `tailwind.config.js` to include:

```js
colors: {
  ink: '#0b1930',
  navy: '#0b1930',
  'navy-deep': '#081426',
  'navy-mid': '#132641',
  gold: '#b08a32',
  'gold-dark': '#947027',
  'gold-light': '#d0b467',
  ivory: '#f7f4ed',
  paper: '#fcfaf5',
  stone: '#e8e2d8',
  'stone-dark': '#b7aea0',
  'text-dark': '#111a28',
  muted: '#68707b',
},
fontFamily: {
  display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
  body: ['"Instrument Sans"', 'Arial', 'sans-serif'],
},
```

Change the base body, headings, action, Counsel Grid, hero-image fallback, and reduced-motion rules in `src/index.css` so they derive from these tokens. Keep `.field`, `.skip-link`, `.prose-legal`, and visible `:focus-visible` behavior intact.

- [ ] **Step 5: Run the foundation contract**

Run: `npm test -- src/test/visual-system.test.ts`

Expected: PASS.

- [ ] **Step 6: Commit the foundation**

```bash
git add index.html tailwind.config.js src/index.css src/test/visual-system.test.ts public/images/murray-legal-manhattan.webp public/images/murray-legal-manhattan.jpg
git commit -m "feat: establish NYC visual foundation"
```

### Task 2: Build the 21st.dev-Inspired Action Primitive

**Files:**
- Create: `src/components/ActionLink.tsx`
- Create: `src/test/action-link.test.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: the custom `Link` API from `src/lib/router.tsx` and the global action classes from Task 1.
- Produces: `ActionLink(props)` supporting exactly one of `to` or `href`, variants `primary | secondary | outline`, and `showIcon?: boolean`.

- [ ] **Step 1: Write failing internal/external action tests**

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ActionLink from '../components/ActionLink';
import { BrowserRouter } from '../lib/router';

describe('ActionLink', () => {
  it('renders an internal primary action with the expandable arrow carrier', () => {
    render(<BrowserRouter><ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink></BrowserRouter>);
    const link = screen.getByRole('link', { name: 'Request a consultation' });
    expect(link).toHaveAttribute('href', '/contact');
    expect(link).toHaveClass('action-link--primary');
    expect(link.querySelector('.action-link__icon')).not.toBeNull();
  });

  it('renders a telephone outline action without changing its destination', () => {
    render(<ActionLink href="tel:+19142141880" ariaLabel="Call Murray Legal" variant="outline">(914) 214-1880</ActionLink>);
    expect(screen.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
  });
});
```

- [ ] **Step 2: Run the test and verify the missing module failure**

Run: `npm test -- src/test/action-link.test.tsx`

Expected: FAIL because `ActionLink.tsx` does not exist.

- [ ] **Step 3: Implement the typed action interface**

```tsx
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from '../lib/router';

type SharedProps = {
  children: ReactNode;
  ariaLabel: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  showIcon?: boolean;
};

type ActionLinkProps = SharedProps & (
  | { to: string; href?: never }
  | { href: string; to?: never }
);

export default function ActionLink({ children, ariaLabel, variant = 'primary', className = '', showIcon = true, ...destination }: ActionLinkProps): JSX.Element {
  const classes = `action-link action-link--${variant} ${className}`.trim();
  const content = <>{children}{showIcon && <span className="action-link__icon" aria-hidden="true"><ArrowRight size={15} /></span>}</>;
  return 'to' in destination
    ? <Link to={destination.to} ariaLabel={ariaLabel} className={classes}>{content}</Link>
    : <a href={destination.href} aria-label={ariaLabel} className={classes}>{content}</a>;
}
```

Add CSS for a minimum 48-pixel action height, the gold primary body, outlined secondary states, the circular navy icon carrier, visible focus, a three-pixel arrow shift on hover, and a zero-motion reduced-motion state.

- [ ] **Step 4: Run the action tests**

Run: `npm test -- src/test/action-link.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit the primitive**

```bash
git add src/components/ActionLink.tsx src/index.css src/test/action-link.test.tsx
git commit -m "feat: add modern action link system"
```

### Task 3: Convert Practice Cards into the Counsel Grid

**Files:**
- Modify: `src/data/practiceAreas.ts`
- Modify: `src/components/PracticeAreaCard.tsx`
- Modify: `src/pages/Home.tsx`
- Create: `src/test/counsel-grid.test.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `PracticeArea` content, custom routing, Harbor Navy card styles, and the approved non-sequential card rule.
- Produces: `PracticeArea.category: string` and `PracticeAreaCard({ category, title, description, href, featured? })`.

- [ ] **Step 1: Write the failing Counsel Grid behavior test**

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PracticeAreaCard from '../components/PracticeAreaCard';
import { BrowserRouter } from '../lib/router';

describe('Counsel Grid card', () => {
  it('exposes one destination and keeps all decision content visible', () => {
    render(<BrowserRouter><PracticeAreaCard category="Business" title="Corporate Law" description="Formation, governance, contracts, and strategic transactions." href="/practice-areas/corporate-law" /></BrowserRouter>);
    expect(screen.getByText('Business')).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Corporate Law' })).toBeVisible();
    expect(screen.getByText(/Formation, governance/i)).toBeVisible();
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'Explore Corporate Law' })).toHaveAttribute('href', '/practice-areas/corporate-law');
    expect(screen.queryByText('01')).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the card test and verify the prop mismatch**

Run: `npm test -- src/test/counsel-grid.test.tsx`

Expected: FAIL because the component still expects decorative numbering and has no `category` prop.

- [ ] **Step 3: Add factual practice categories**

Add `category: string` to `PracticeArea` and use this exact mapping:

```ts
const approvedCategories = {
  'corporate-law': 'Business',
  'real-estate': 'Property',
  'civil-litigation': 'Disputes',
  'entertainment-transactions': 'Creative',
  'sports-transactions': 'Sports',
  'intellectual-property': 'Brands & Rights',
  'trusts-wills-estates': 'Private Client',
  'divorce-family-law': 'Family',
} as const;
```

Store the matching literal on each existing practice object; do not calculate it at render time.

- [ ] **Step 4: Implement the card as one full-card link**

```tsx
export default function PracticeAreaCard({ category, title, description, href, featured = false }: PracticeAreaCardProps): JSX.Element {
  return (
    <article className={`counsel-card ${featured ? 'md:col-span-2' : ''}`} data-counsel-card>
      <Link to={href} ariaLabel={`Explore ${title}`} className="counsel-card__link">
        <span className="counsel-card__category">{category}</span>
        <span className="counsel-card__arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
        <span className="counsel-card__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </span>
      </Link>
    </article>
  );
}
```

Style the card with Harbor Navy, visible description, subtle border, square arrow carrier, short tone/translation hover, gold hover carrier, visible focus-within, and no hover-only information.

- [ ] **Step 5: Update the existing homepage call site**

Replace the numbered props without changing the surrounding homepage composition yet:

```tsx
{practiceAreas.map((practice) => (
  <PracticeAreaCard
    key={practice.slug}
    category={practice.category}
    title={practice.name}
    description={practice.cardDescription}
    href={`/practice-areas/${practice.slug}`}
  />
))}
```

- [ ] **Step 6: Run the card and data tests**

Run: `npm test -- src/test/counsel-grid.test.tsx src/test/home.test.tsx`

Run: `npm run typecheck`

Expected: both tests PASS and TypeScript exits 0.

- [ ] **Step 7: Commit the Counsel Grid component**

```bash
git add src/data/practiceAreas.ts src/components/PracticeAreaCard.tsx src/pages/Home.tsx src/index.css src/test/counsel-grid.test.tsx
git commit -m "feat: add Counsel Grid practice cards"
```

### Task 4: Modernize the Global Header and Footer

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/test/navigation.test.tsx`

**Interfaces:**
- Consumes: `ActionLink`, `PHONE_DISPLAY`, `PHONE_TEL`, existing navigation arrays, and jurisdiction constants.
- Produces: persistent desktop consultation/phone controls; a mobile menu containing both controls; the approved paper-white/navy/gold shell.

- [ ] **Step 1: Extend the navigation tests for paired conversion access**

```tsx
it('keeps consultation and verified phone paths in the global header', async () => {
  const user = userEvent.setup();
  render(<BrowserRouter><Header /></BrowserRouter>);
  expect(screen.getByRole('link', { name: 'Request a consultation' })).toHaveAttribute('href', '/contact');
  expect(screen.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
  await user.click(screen.getByRole('button', { name: 'Open navigation' }));
  const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' });
  expect(within(mobile).getByRole('link', { name: 'Request a consultation' })).toBeVisible();
  expect(within(mobile).getByRole('link', { name: 'Call Murray Legal' })).toBeVisible();
});
```

- [ ] **Step 2: Run the navigation test and verify the mobile consultation failure**

Run: `npm test -- src/test/navigation.test.tsx`

Expected: FAIL because the mobile menu currently exposes only the telephone action and desktop labels differ.

- [ ] **Step 3: Apply the approved shell**

Use `ActionLink` for the paired controls:

```tsx
<div className="hidden items-center gap-3 lg:flex">
  <ActionLink href={`tel:${PHONE_TEL}`} ariaLabel="Call Murray Legal" variant="secondary" showIcon={false}>{PHONE_DISPLAY}</ActionLink>
  <ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink>
</div>
```

Add both actions inside the mobile navigation. Keep Escape handling, focus restoration, body-scroll locking, outside-click closure, current-path styling, utility-row licensing copy, footer addresses, disclaimer/privacy links, and `JURISDICTION_NOTICE` unchanged. Update wordmark and label classes to Bodoni Moda/Instrument Sans tokens.

- [ ] **Step 4: Run the shell tests**

Run: `npm test -- src/test/navigation.test.tsx src/test/routes.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit the global shell**

```bash
git add src/components/Header.tsx src/components/Footer.tsx src/test/navigation.test.tsx
git commit -m "feat: modernize global legal shell"
```

### Task 5: Build the Approved Manhattan Homepage

**Files:**
- Create: `src/components/CityHero.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/test/home.test.tsx`
- Modify: `e2e/home-visual.spec.ts`
- Modify: `e2e/final-visual.spec.ts`

**Interfaces:**
- Consumes: `ActionLink`, Counsel Grid `PracticeAreaCard`, Manhattan image sources, practice/industry/insight data, and existing schemas.
- Produces: `CityHero()` with the approved label, headline, supporting text, image alt, and actions; the approved homepage section sequence.

- [ ] **Step 1: Update the homepage contract to the approved content**

```tsx
expect(screen.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeInTheDocument();
expect(screen.getByText('Murray Legal · Yonkers office')).toBeInTheDocument();
expect(screen.getByRole('img', { name: 'Monochrome view of the Lower Manhattan skyline' })).toBeInTheDocument();
expect(screen.getByRole('link', { name: 'Request a consultation' })).toHaveAttribute('href', '/contact');
expect(screen.getByRole('link', { name: 'Explore the firm' })).toHaveAttribute('href', '/about');
const practices = screen.getByRole('region', { name: 'Practice areas' });
expect(within(practices).getAllByRole('article')).toHaveLength(8);
expect(within(practices).queryByText('01')).not.toBeInTheDocument();
```

- [ ] **Step 2: Run the homepage test and verify the old hero failure**

Run: `npm test -- src/test/home.test.tsx`

Expected: FAIL because the old architecture image and old headline still render.

- [ ] **Step 3: Implement `CityHero`**

Use this semantic structure:

```tsx
<section className="city-hero" data-hero-visual="city" aria-labelledby="home-title">
  <picture className="city-hero__media">
    <source srcSet="/images/murray-legal-manhattan.webp" type="image/webp" />
    <img src="/images/murray-legal-manhattan.jpg" alt="Monochrome view of the Lower Manhattan skyline" width="2400" height="1600" />
  </picture>
  <Container className="city-hero__layout">
    <div className="city-hero__panel">
      <p className="eyebrow">Murray Legal · Yonkers office</p>
      <h1 id="home-title">Serious counsel for consequential matters.</h1>
      <p>Strategic legal advice for businesses, investors, executives, creators, athletes, families, and private clients.</p>
      <div className="city-hero__actions">
        <ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink>
        <ActionLink to="/about" ariaLabel="Explore the firm" variant="outline" showIcon={false}>Explore the firm</ActionLink>
      </div>
    </div>
  </Container>
</section>
```

Ensure the navy panel remains complete if the image fails.

- [ ] **Step 4: Recompose `Home.tsx`**

Render in this exact order: `CityHero`, specific firm statement, navy Counsel Grid, firm approach, verified client groups, insights, FAQ, and `ConsultationCTA`. Pass `category={practice.category}` to each card. Remove decorative practice and audience numbering. Preserve `SEOHead`, Organization/WebSite/LegalService/FAQ schema, all eight practices, five client groups, three insights, and three FAQs.

Use this first-section heading:

```tsx
<SectionHeading
  eyebrow="The firm"
  title="Counsel for business, property, disputes, and private matters."
  description="From a Yonkers office, Murray Legal advises corporate and private clients across transactions, real estate, civil disputes, creative rights, estate planning, and family matters where representation is permitted by law."
/>
```

- [ ] **Step 5: Update the homepage Playwright assertions**

```ts
await expect(page.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeVisible();
await expect(page.getByAltText('Monochrome view of the Lower Manhattan skyline')).toBeVisible();
await expect(page.locator('[data-counsel-card]')).toHaveCount(8);
await expect(page.getByRole('link', { name: 'Request a consultation' }).first()).toBeVisible();
```

Keep the full-page desktop, tablet, and mobile screenshot paths under `artifacts/site-audit/`.

- [ ] **Step 6: Run homepage unit and visual tests**

Run: `npm test -- src/test/home.test.tsx src/test/counsel-grid.test.tsx`

Run: `npm run test:e2e -- e2e/home-visual.spec.ts e2e/final-visual.spec.ts`

Expected: PASS with no horizontal overflow.

- [ ] **Step 7: Commit the homepage**

```bash
git add src/components/CityHero.tsx src/pages/Home.tsx src/test/home.test.tsx e2e/home-visual.spec.ts e2e/final-visual.spec.ts
git commit -m "feat: build Manhattan-led homepage"
```

### Task 6: Carry the NYC System Across Internal Templates

**Files:**
- Modify: `src/components/PageHero.tsx`
- Modify: `src/components/SectionHeading.tsx`
- Modify: `src/components/LegalDocument.tsx`
- Modify: `src/pages/PracticeAreaPage.tsx`
- Modify: `src/pages/IndustryPage.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/BlogPost.tsx`
- Modify: `src/test/design-primitives.test.tsx`
- Modify: `src/test/content-pages.test.tsx`

**Interfaces:**
- Consumes: the shared Manhattan assets, existing breadcrumbs/asides, practice and industry data, and Counsel Grid card.
- Produces: `PageHeroProps.visual?: 'city' | 'solid'` with default `city`; consistent city heroes and direct content headings across all internal templates.

- [ ] **Step 1: Add failing hero-variant and non-decorative-list tests**

```tsx
it('renders explicit city and solid hero treatments', () => {
  const { rerender } = withRouter(<PageHero visual="city" title="Corporate Law" description="Description" />);
  expect(screen.getByRole('region', { name: 'Corporate Law' })).toHaveAttribute('data-hero-visual', 'city');
  rerender(<BrowserRouter><PageHero visual="solid" title="Contact" description="Description" /></BrowserRouter>);
  expect(screen.getByRole('region', { name: 'Contact' })).toHaveAttribute('data-hero-visual', 'solid');
});
```

In `content-pages.test.tsx`, assert that Corporate Law still renders all matters but does not render a decorative `01` beside “Business formation”; assert that the About page contains no image with an attorney-related accessible name.

- [ ] **Step 2: Run the template tests and verify the missing variant failure**

Run: `npm test -- src/test/design-primitives.test.tsx src/test/content-pages.test.tsx`

Expected: FAIL because `PageHero` has no `visual` prop or region label and existing non-sequential lists use numbers.

- [ ] **Step 3: Implement the shared internal hero**

Extend the props and root section:

```tsx
export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  aside?: ReactNode;
  visual?: 'city' | 'solid';
};

<section
  className={`page-hero page-hero--${visual}`}
  data-hero-visual={visual}
  aria-label={title}
>
```

For `city`, render the local Manhattan `<picture>` under a monochrome/navy overlay and retain the gold architectural edge. For `solid`, render a complete navy field with no decorative photograph. In both variants, keep breadcrumbs, one `<h1>`, description, and aside readable.

- [ ] **Step 4: Assign variants and remove decorative numbering**

- Practice, industry, About, insights index, and insight detail pages use `visual="city"`.
- `Contact` and `LegalDocument` use `visual="solid"`.
- Practice “Matters handled,” industry priorities, About principles, and insight index cards use gold rules, labels, or arrows without sequence numbers.
- Practice engagement steps and Contact “What happens next” retain numbers because their order is meaningful.
- Related practice links use Counsel Grid visual grammar and existing canonical destinations.
- Section headings name the actual practice, audience, or decision; preserve substantive content and schemas.

Use the current page data as the source of every title and description. Do not add new claims.

- [ ] **Step 5: Run template, route, and SEO tests**

Run: `npm test -- src/test/design-primitives.test.tsx src/test/content-pages.test.tsx src/test/routes.test.tsx src/test/seo.test.tsx`

Expected: PASS with the same canonical URLs, one `<h1>` per route, and visible jurisdiction copy.

- [ ] **Step 6: Commit the internal templates**

```bash
git add src/components/PageHero.tsx src/components/SectionHeading.tsx src/components/LegalDocument.tsx src/pages/PracticeAreaPage.tsx src/pages/IndustryPage.tsx src/pages/About.tsx src/pages/Blog.tsx src/pages/BlogPost.tsx src/test/design-primitives.test.tsx src/test/content-pages.test.tsx
git commit -m "feat: extend NYC system to content templates"
```

### Task 7: Finish Consultation, Legal, and Recovery Surfaces

**Files:**
- Modify: `src/components/ConsultationCTA.tsx`
- Modify: `src/components/IntakeForm.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/pages/NotFound.tsx`
- Modify: `src/test/intake-form.test.tsx`
- Modify: `e2e/intake.spec.ts`

**Interfaces:**
- Consumes: `ActionLink`, existing intake state machine and payload, verified phone/email/address constants, and solid `PageHero`.
- Produces: modern consultation actions and visually consistent idle, validation, loading, success, network-failure, legal, and 404 states without changing data flow.

- [ ] **Step 1: Add a failing intake preservation and action-label assertion**

```tsx
it('keeps the approved action label and legal warning after validation failure', async () => {
  render(<IntakeForm />);
  await userEvent.click(screen.getByRole('button', { name: 'Request a consultation' }));
  expect(await screen.findByRole('alert')).toHaveTextContent('highlighted fields');
  expect(screen.getByText(/does not create an attorney-client relationship/i)).toBeVisible();
  expect(screen.getByRole('button', { name: 'Request a consultation' })).toBeEnabled();
});
```

Extend the Playwright test to assert the Contact hero uses `data-hero-visual="solid"`, the phone link is visible, and the form still submits the existing payload.

- [ ] **Step 2: Run the intake tests before restyling**

Run: `npm test -- src/test/intake-form.test.tsx`

Expected: the behavior assertions PASS before presentation changes, establishing the preservation baseline.

- [ ] **Step 3: Apply the approved components without changing intake logic**

In `ConsultationCTA`, replace legacy button markup with:

```tsx
<ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink>
<ActionLink href={`tel:${PHONE_TEL}`} ariaLabel="Call Murray Legal" variant="outline">{PHONE_DISPLAY}</ActionLink>
```

In `IntakeForm`, retain `IntakePayload`, `emptyFields`, `validate`, `submit`, honeypot, duplicate-submit guard, focus-on-invalid behavior, `/api/intake`, success clearing, and failure preservation. Change only classes and the submit-button inner arrow carrier. Keep red validation styles distinguishable from gold focus styles.

Use this submit control while retaining the existing state variable and handler:

```tsx
<button className="action-link action-link--primary mt-8 w-full sm:w-auto" type="submit" disabled={status === 'submitting'}>
  <span>{status === 'submitting' ? 'Sending request…' : 'Request a consultation'}</span>
  <span className="action-link__icon" aria-hidden="true"><ArrowRight size={15} /></span>
</button>
```

In `Contact`, retain verified contact data and the ordered next-step list. Use the solid hero and approved navy/paper form layout. In `NotFound`, use the same ActionLink variants and keep `noindex, follow`.

- [ ] **Step 4: Run intake unit and browser tests**

Run: `npm test -- src/test/intake-form.test.tsx src/test/intake-api.test.ts`

Run: `npm run test:e2e -- e2e/intake.spec.ts`

Expected: PASS for validation, payload, success, failure preservation, consent enforcement, and visual shell.

- [ ] **Step 5: Commit the consultation surfaces**

```bash
git add src/components/ConsultationCTA.tsx src/components/IntakeForm.tsx src/pages/Contact.tsx src/pages/NotFound.tsx src/test/intake-form.test.tsx e2e/intake.spec.ts
git commit -m "feat: finish consultation and recovery surfaces"
```

### Task 8: Complete Cross-Route Accessibility, SEO, and Visual Verification

**Files:**
- Modify: `e2e/site-shell.spec.ts`
- Modify: `e2e/content-pages.spec.ts`
- Modify: `e2e/seo-accessibility.spec.ts`
- Modify: `e2e/final-visual.spec.ts`
- Regenerate: `artifacts/site-audit/redesign-desktop-home.png`
- Regenerate: `artifacts/site-audit/redesign-mobile-home.png`
- Regenerate: `artifacts/site-audit/redesign-tablet-home.png`
- Regenerate: `artifacts/site-audit/content-desktop-chromium.png`
- Regenerate: `artifacts/site-audit/content-mobile-chromium.png`
- Regenerate: `artifacts/site-audit/contact-desktop-chromium.png`
- Regenerate: `artifacts/site-audit/contact-mobile-chromium.png`

**Interfaces:**
- Consumes: the completed site, existing canonical route list, approved mockup, and all verification gates.
- Produces: automated cross-route evidence and final desktop/tablet/mobile screenshots.

- [ ] **Step 1: Extend browser checks for the new visual contract**

Add these assertions to the relevant specifications:

```ts
const isMobile = testInfo.project.name.startsWith('mobile');
const header = page.locator('header');
if (isMobile) {
  await header.getByRole('button', { name: 'Open navigation' }).click();
  const mobile = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(mobile.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
  await expect(mobile.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
} else {
  await expect(header.getByRole('link', { name: 'Request a consultation' })).toBeVisible();
  await expect(header.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
}
await expect(page.locator('[data-hero-visual]').first()).toBeVisible();
expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBe(true);
```

Add a separate reduced-motion check:

```ts
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.goto('/');
expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
await expect(page.getByRole('link', { name: 'Request a consultation' }).first()).toBeVisible();
```

Keep all existing canonical, metadata, form-label, skip-link, dropdown, robots, sitemap, and console-error checks.

- [ ] **Step 2: Run the complete unit gate**

Run: `npm run typecheck && npm run lint && npm test && npm run build`

Expected: all commands exit 0.

- [ ] **Step 3: Run the complete browser gate**

Run: `npm run test:e2e`

Expected: all desktop and mobile projects PASS; canonical routes have one `<h1>`, one description, one canonical link, no unlabeled form controls, no console errors, and no overflow.

- [ ] **Step 4: Perform the manual visual comparison**

Inspect the regenerated artifacts against the approved Counsel Grid preview. Confirm:

- the Manhattan hero is monochrome and readable;
- the navy panel has the brass architectural edge;
- Bodoni Moda and Instrument Sans are visibly loaded;
- primary arrows expand subtly and secondary controls remain subordinate;
- all Counsel Grid content is visible without hover;
- the header phone and consultation paths survive desktop and mobile;
- the Pennsylvania jurisdiction notice remains visible;
- no portrait, testimonial, rating, or unsupported claim appears;
- 375, 768, 1024, and 1440 layouts show no clipped text, focus ring, or horizontal scroll.

- [ ] **Step 5: Check the final diff for accidental behavior changes**

Run:

```bash
git diff --check
git status --short
git diff --stat
```

Review changes to `src/lib/firm.ts`, `src/lib/schema.ts`, `src/lib/router.tsx`, `api/intake.js`, and data content. These files should remain unchanged except for the approved `PracticeArea.category` additions.

- [ ] **Step 6: Commit verification evidence**

```bash
git add e2e/site-shell.spec.ts e2e/content-pages.spec.ts e2e/seo-accessibility.spec.ts e2e/final-visual.spec.ts artifacts/site-audit
git commit -m "test: verify NYC visual revision"
```

- [ ] **Step 7: Push the branch and verify the existing pull request checks**

Run:

```bash
git push origin codex/murray-legal-redesign
gh pr checks 25 --watch
```

Expected: the branch pushes successfully and every required pull-request check passes.
