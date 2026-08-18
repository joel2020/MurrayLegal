# Murray Legal Full-Site Redesign

**Date:** 2026-08-18  
**Status:** Approved direction, implementation-ready design  
**Reference:** [A. Vaughn Law](https://avaughnlaw.com/) for clarity, restraint, and direct conversion structure—not for visual or content duplication.

## Objective

Refine the existing Murray Legal React/Vite website into a cohesive, premium legal-services experience. Preserve the site's established routes, substantive content, SEO metadata, structured data, consultation intake endpoint, and jurisdictional safeguards while rebuilding its visual hierarchy and reusable presentation layer. The result must feel specific to Murray Legal's broad business and private-client practice, not like a template or a copy of the reference site.

## Design Direction

The experience will combine editorial authority with quiet modernity. Deep navy and warm ivory provide the primary contrast; muted stone supports long-form sections; antique gold appears only as a controlled accent for rules, labels, focus states, and primary actions. Display typography will use a high-contrast legal/editorial serif, paired with a highly legible sans serif for navigation, forms, metadata, and body copy.

Large headlines, short introductory paragraphs, restrained section labels, generous whitespace, and disciplined grids will create authority. Decorative effects will remain subtle: fine rules, tonal panels, modest hover elevation, and short opacity/position transitions. The design will avoid gavels, scales of justice, handshakes, staged courtroom scenes, excessive gradients, glassmorphism, and ornamental animation.

One art-directed hero image may be used if it strengthens the brand. The preferred subject is refined architecture, an abstract urban detail, or a credible professional environment with negative space for composition. A Higgsfield-generated asset is acceptable only if it appears authentic, contains no embedded text or logos, avoids identifiable public figures, and has an optimized static WebP/AVIF fallback. The page must remain complete and visually strong without motion.

## Global Experience

### Header and Navigation

The header will use a slim utility row for telephone/contact context and a primary navigation row with the Murray Legal wordmark, Practice Areas, Industries, Insights, About, and a high-visibility consultation action. Desktop dropdowns will be spacious, keyboard-operable, and grouped logically. Mobile navigation will use a clearly labeled menu button, an accessible expanded state, comfortable touch targets, and the same information architecture. The header may become compact and sticky after scrolling, without covering anchored content.

### Footer

The footer will present the firm identity, concise jurisdiction-safe positioning, primary navigation, practice-area links, contact details, both office addresses, disclaimer and privacy links, and the non-attorney-client-relationship notice. Contact details will remain selectable and use functional `tel:` and `mailto:` links.

### Reusable Visual System

Shared tokens will define color, spacing, typography, container widths, borders, shadows, radii, and motion. Reusable components will cover section introductions, editorial cards, practice-area links, industry links, insight cards, breadcrumbs, statistics or credibility statements where factually supported, consultation CTAs, form controls, and interior-page heroes. Components will remain small and data-driven so existing practice and insight content stays authoritative.

## Page Design

### Homepage

The homepage will follow a clear conversion narrative:

1. A focused hero states Murray Legal's value and audience, includes consultation and practice-area actions, and provides a restrained visual focal point.
2. A compact credibility strip communicates strategic, discreet, business-minded counsel without unsupported superlatives or invented achievements.
3. Practice areas appear in a more scannable editorial grid, with clear descriptions and accessible links.
4. A firm-positioning section explains how Murray Legal supports high-stakes decisions across transactional, litigation, and private-client matters.
5. Industries or client types demonstrate relevance to founders, real-estate investors, creators, athletes, executives, families, and high-net-worth clients.
6. A selective insights section reinforces expertise and links to the existing archive.
7. An accessible FAQ section answers common fit and jurisdiction questions.
8. A decisive final consultation section provides both form-page and telephone paths.

Copy may be tightened for clarity and hierarchy, but claims must remain supportable and jurisdiction-safe. Existing SEO intent and structured data must be retained or improved without keyword stuffing.

### Practice-Area and Industry Pages

All practice and industry pages will share a consistent editorial template: breadcrumb, focused hero, overview, services or situations handled, who the service supports, related capabilities, jurisdiction note where appropriate, and consultation CTA. Existing data remains the source of truth. The redesign must not collapse distinct canonical routes or remove substantive page content.

### About Page

The About page will become a credible firm narrative rather than a single paragraph. It will explain Murray Legal's strategic approach, clients served, breadth of counsel, and engagement principles using only established facts. No attorney biography, credentials, awards, admissions, case results, testimonials, or staff photography may be invented. If verified attorney-profile content is unavailable, the design will emphasize the firm's approach and direct visitors to consultation.

### Insights

The insights archive and article template will receive consistent typography, category and date treatment, readable line lengths, related-content navigation, and consultation prompts that do not interrupt the article. Existing canonical behavior and metadata remain intact.

### Contact and Intake

The contact page will pair concise expectation-setting with a functional consultation form. The existing `/api/intake` endpoint will remain the delivery path. The form will use controlled submission state, required-field validation, the explicit non-engagement consent checkbox, disabled/loading behavior, clear success confirmation, and a recoverable error message with phone/email alternatives. It must warn against confidential or time-sensitive submissions. Keyboard navigation, associated labels, error announcements, autofill attributes, and appropriate input types are required.

### Legal and Error Pages

Privacy, disclaimer, and not-found pages will use the same shell and editorial typography. Legal text and the Pennsylvania licensing/jurisdiction notice must not be weakened, hidden, or visually de-emphasized below reasonable readability.

## Content and Data Boundaries

- Preserve `src/lib/firm.ts` as the central source for firm name, phone, email, office addresses, site URL, and jurisdiction language.
- Preserve `src/data/practiceAreas.ts`, `src/data/insights.ts`, and blog data as the authoritative content sources.
- Keep every current public route and canonical relationship working, including legacy practice-route aliases.
- Do not fabricate testimonials, ratings, client logos, case outcomes, dollar amounts, attorney credentials, bar admissions, awards, years of experience, or office photography.
- Do not imply New York licensure. The current Pennsylvania licensure and multi-jurisdiction coordination language must remain accurate and visible.

## Technical Architecture

The redesign will remain within the current React 18, TypeScript, Vite, Tailwind, and custom-router architecture. New dependencies require a demonstrated need; visual polish should primarily come from CSS, existing Lucide icons, semantic markup, and reusable React components. Page-level components will compose shared section primitives and data modules rather than duplicating large blocks of JSX.

The intake flow will submit JSON to `/api/intake`, handle non-2xx responses, guard duplicate submission, and keep user-entered values available after recoverable failures. No API key or secret may appear in client code. Existing Resend environment-variable behavior remains server-side.

SEO behavior will continue through `SEOHead` and schema helpers. Every indexable page must retain a unique title, description, canonical URL, and suitable structured data. Heading order, landmarks, links, buttons, labels, alt text, focus visibility, contrast, reduced-motion behavior, and mobile touch targets must satisfy WCAG 2.2 AA expectations.

## Responsive and Performance Requirements

The layout must be intentionally designed at approximately 375, 768, 1024, and 1440 pixel widths, with no horizontal overflow. Typography will use fluid sizing with controlled maximums. Images will declare dimensions, use responsive sources when beneficial, load below-the-fold assets lazily, and avoid becoming Largest Contentful Paint bottlenecks. Any hero media must include an optimized static image and must not autoplay audio. Motion will respect `prefers-reduced-motion`.

The finished production bundle must avoid unnecessary JavaScript and layout shift. Font loading should use a small, intentional family/weight set and a resilient fallback strategy.

## Error Handling and States

- Navigation controls expose correct expanded/current states and remain usable without pointer input.
- Missing content and unknown routes render a branded 404 with clear recovery links.
- Intake validation identifies the affected fields and provides an error summary or live announcement.
- Network or server failures preserve form entries and offer phone/email alternatives.
- Successful intake submission clears sensitive form content only after the endpoint confirms success.
- Image failure or motion unavailability never removes essential text or actions.

## Verification Gates

Implementation is complete only when all of the following are evidenced:

1. `npm run typecheck`, `npm run lint`, and `npm run build` succeed.
2. Every route in `src/App.tsx`, every insight detail route, and legacy aliases render without console errors.
3. Homepage, representative practice, industry, insight, About, Contact, legal, and 404 pages are visually checked on desktop and mobile.
4. Header dropdowns/mobile menu, internal routing, telephone/email links, accordions, and CTA links work with keyboard and pointer input.
5. The intake form is tested for validation, successful submission behavior using an appropriate local/mocked endpoint, recoverable server failure, consent enforcement, and duplicate-submit prevention.
6. Titles, descriptions, canonicals, robots directives, sitemap/robots files, and JSON-LD are checked for representative routes.
7. No unsupported claims or invented credentials appear, and the Pennsylvania jurisdiction notice remains accurate and visible.
8. No horizontal overflow, clipped focus rings, unreadable contrast, missing accessible names, or unhandled reduced-motion behavior is present at target widths.
9. Final desktop and mobile screenshots are saved under `artifacts/site-audit/` as visual evidence.

## Completion Standard

The site is complete when it presents one consistent Murray Legal identity across the full route set, materially improves clarity and visual credibility over the current implementation, preserves functional and legal safeguards, and passes the technical, accessibility, SEO, responsive, intake, and visual verification gates above.
