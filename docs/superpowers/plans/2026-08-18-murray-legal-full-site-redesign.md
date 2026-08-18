# Murray Legal Full-Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing Murray Legal presentation layer into a premium, modern, responsive law-firm experience while preserving and validating its routes, content, SEO, intake delivery, accessibility, performance, and jurisdictional safeguards.

**Architecture:** Keep the current React 18, TypeScript, Vite, Tailwind, and custom-router stack. Build a small shared design layer, use the existing firm/practice/insight modules as authoritative data, compose all routed pages from accessible primitives, and isolate the consultation form's state and network behavior in a focused component. Add component and browser-level verification so visual polish does not regress legal, routing, or intake behavior.

**Tech Stack:** React 18, TypeScript 5, Vite, Tailwind CSS, Lucide React, Vitest, Testing Library, Playwright, Vercel serverless intake endpoint, Resend.

## Global Constraints

- Preserve `src/lib/firm.ts` as the central source for firm name, phone, email, office addresses, site URL, and jurisdiction language.
- Preserve `src/data/practiceAreas.ts`, `src/data/insights.ts`, and blog data as authoritative content sources.
- Keep every current route in `src/App.tsx` and every canonical relationship working, including legacy aliases.
- Do not fabricate testimonials, ratings, client logos, case outcomes, dollar amounts, attorney credentials, bar admissions, awards, years of experience, or office photography.
- Do not imply New York licensure; retain the accurate Pennsylvania licensing and jurisdiction-coordination language.
- Keep `/api/intake` as the delivery path; keep API credentials server-side.
- Meet WCAG 2.2 AA expectations for landmarks, headings, names, labels, focus, contrast, keyboard behavior, touch targets, and reduced motion.
- Intentionally support 375, 768, 1024, and 1440 pixel widths without horizontal overflow.
- Higgsfield may be used only for one authentic, text-free hero asset that has an optimized static fallback; the site must remain complete without video or motion.
- `npm run typecheck`, `npm run lint`, `npm run test`, `npm run test:e2e`, and `npm run build` must pass before completion.

## File Structure

- `src/data/navigation.ts`: one source for primary, practice, industry, and footer navigation.
- `src/components/Container.tsx`: width and horizontal-padding boundary.
- `src/components/SectionHeading.tsx`: eyebrow, heading, description, and alignment API.
- `src/components/PageHero.tsx`: shared interior hero with breadcrumb and optional aside.
- `src/components/Breadcrumbs.tsx`: semantic linked breadcrumb trail.
- `src/components/Header.tsx`: sticky desktop/mobile navigation and focus management.
- `src/components/Footer.tsx`: firm, navigation, office, and disclaimer content.
- `src/components/ConsultationCTA.tsx`: reusable final conversion section.
- `src/components/IntakeForm.tsx`: form values, validation, submission, and status UI.
- `src/pages/*.tsx`: composition and page-specific SEO only.
- `src/index.css`, `tailwind.config.js`: global tokens, typography, states, and layout utilities.
- `src/test/*`, `e2e/*`: component, route, intake, accessibility, and responsive regression tests.
- `public/images/*`: optimized hero image and static fallback only if the asset review passes.

---

### Task 1: Add the Verification Harness and Lock Existing Contracts

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Create: `playwright.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/test/routes.test.tsx`
- Create: `e2e/site-shell.spec.ts`

**Interfaces:**
- Consumes: current `App`, `BrowserRouter`, and route table behavior.
- Produces: `npm run test`, `npm run test:e2e`, shared jsdom setup, and a browser project at `http://127.0.0.1:4173`.

- [ ] **Step 1: Install the focused test dependencies**

Run:

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom @playwright/test
npx playwright install chromium
```

Expected: `package.json` and `package-lock.json` include the test packages and Chromium is available.

- [ ] **Step 2: Add deterministic test scripts and configuration**

Add these scripts to `package.json`:

```json
"test": "vitest run",
"test:watch": "vitest",
"test:e2e": "playwright test"
```

Add to `vite.config.ts`:

```ts
/// <reference types="vitest/config" />
test: {
  environment: 'jsdom',
  setupFiles: ['./src/test/setup.ts'],
  css: true,
},
```

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => cleanup());
```

- [ ] **Step 3: Write a route-preservation test before redesigning pages**

In `src/test/routes.test.tsx`, render `App` inside `BrowserRouter`, set `window.history` to each current path, and assert a unique page heading. Cover `/`, `/insights`, `/about`, `/contact`, the eight canonical practice routes, the five industry routes, all five legacy aliases, and a missing route. Use the exact expectation shape:

```ts
it.each([
  ['/', /Premium Legal Counsel/i],
  ['/insights', /Legal Insights/i],
  ['/blog', /Legal Insights/i],
  ['/insights/business-contract-red-flags-executives-should-review-before-signing', /Business Contract Red Flags/i],
  ['/about', /About Murray Legal/i],
  ['/contact', /Schedule a Consultation/i],
  ['/disclaimer', /Disclaimer/i],
  ['/privacy-policy', /Privacy Policy/i],
  ['/practice-areas/corporate-law', /Corporate Law Attorney/i],
  ['/practice-areas/real-estate', /Real Estate Attorney/i],
  ['/practice-areas/civil-litigation', /Civil Litigation Attorney/i],
  ['/practice-areas/entertainment-transactions', /Entertainment Lawyer/i],
  ['/practice-areas/sports-transactions', /Sports Lawyer/i],
  ['/practice-areas/intellectual-property', /Intellectual Property Attorney/i],
  ['/practice-areas/trusts-wills-estates', /Estate Planning Attorney/i],
  ['/practice-areas/divorce-family-law', /Divorce Attorney/i],
  ['/industries/businesses-founders', /Businesses & Founders/i],
  ['/industries/real-estate-investors', /Real Estate Investors/i],
  ['/industries/entertainment-professionals', /Entertainment Professionals/i],
  ['/industries/athletes-sports-organizations', /Athletes & Sports Organizations/i],
  ['/industries/high-net-worth-individuals', /High-Net-Worth Individuals/i],
  ['/real-estate-attorney', /Real Estate Attorney/i],
  ['/corporate-law', /Corporate Law Attorney/i],
  ['/civil-litigation', /Civil Litigation Attorney/i],
  ['/business-attorney', /Corporate Law Attorney/i],
  ['/contract-disputes', /Civil Litigation Attorney/i],
  ['/missing-route', /Page Not Found/i],
])('renders %s', (path, heading) => {
  window.history.replaceState({}, '', path);
  render(<BrowserRouter><App /></BrowserRouter>);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
});
```

- [ ] **Step 4: Add a browser smoke test for the current shell**

Create `playwright.config.ts` with Chromium desktop and mobile projects, `webServer.command: 'npm run dev -- --host 127.0.0.1'`, and `baseURL: 'http://127.0.0.1:5173'`. In `e2e/site-shell.spec.ts`, assert the homepage has one `h1`, the consultation link reaches `/contact`, the mobile menu exposes Practice and Industry links, and no page creates horizontal overflow:

```ts
expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
```

- [ ] **Step 5: Run the baseline tests**

Run: `npm run test && npm run test:e2e`

Expected: route and shell tests pass against the current site. If exact current wording differs, adjust only the test expectation to the authoritative current content.

- [ ] **Step 6: Commit the harness**

```bash
git add package.json package-lock.json vite.config.ts playwright.config.ts src/test/setup.ts src/test/routes.test.tsx e2e/site-shell.spec.ts
git commit -m "test: add site redesign verification harness"
```

### Task 2: Build the Design Tokens, Primitives, and Hero Asset

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `index.html`
- Create: `src/components/Container.tsx`
- Create: `src/components/SectionHeading.tsx`
- Create: `src/components/Breadcrumbs.tsx`
- Create: `src/components/PageHero.tsx`
- Create: `src/test/design-primitives.test.tsx`
- Create: `public/images/murray-legal-architecture.png`
- Create: `public/images/murray-legal-architecture.webp`

**Interfaces:**
- Produces: `Container({ as?, className?, children })`, `SectionHeading({ eyebrow?, title, description?, align? })`, `Breadcrumbs({ items })`, and `PageHero({ eyebrow?, title, description, breadcrumbs?, aside? })`.

- [ ] **Step 1: Write primitive accessibility tests**

Assert that `PageHero` renders one `h1`, `Breadcrumbs` renders a named navigation landmark and ordered list, and `SectionHeading` uses an `h2` by default. Assert caller-supplied `className` values are preserved.

- [ ] **Step 2: Run the primitive test and confirm it fails**

Run: `npm run test -- src/test/design-primitives.test.tsx`

Expected: FAIL because the four component modules do not exist.

- [ ] **Step 3: Implement the four focused primitives**

Use semantic elements and this public shape:

```ts
export type BreadcrumbItem = { label: string; href?: string };
export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  aside?: ReactNode;
};
```

`Container` must apply `mx-auto w-full max-w-[82rem] px-5 sm:px-8 lg:px-12`. `PageHero` must use a two-column grid only when `aside` exists and keep text width under `52rem`.

- [ ] **Step 4: Replace the global visual system**

Keep navy/ivory/gold but refine exact roles: `ink #0b1930`, `navy #102544`, `ivory #f7f4ed`, `paper #fffdf8`, `stone #e8e2d8`, `gold #b08a32`, `muted #5d6470`. Define fluid `display-xl/lg/md`, 44–48px minimum controls, `.btn-primary`, `.btn-secondary`, `.btn-text`, `.field`, `.surface-card`, `.section-shell`, `.eyebrow`, visible focus, selection, reduced motion, and body line length. Remove the global `ul li::before` pseudo-element so semantic lists do not receive duplicate decorative marks.

- [ ] **Step 5: Decide and prepare the hero asset**

Generate one text-free still showing refined contemporary architecture with warm limestone, dark bronze, deep shadow, and negative space; no people, courthouse clichés, flags, seals, or logos. Inspect it at desktop and mobile crops, export an optimized WebP under 300 KB plus the source PNG, declare intrinsic dimensions, and use `object-position` per breakpoint. If the generated output has visible artifacts, regenerate it once; if the second output still fails the photographic-quality check, remove both asset files and implement the documented CSS editorial composition instead. Do not add video.

- [ ] **Step 6: Verify primitives and production CSS**

Run: `npm run test -- src/test/design-primitives.test.tsx && npm run typecheck && npm run build`

Expected: all commands pass and the emitted CSS contains no missing Tailwind classes.

- [ ] **Step 7: Commit the visual foundation**

```bash
git add tailwind.config.js src/index.css index.html src/components/Container.tsx src/components/SectionHeading.tsx src/components/Breadcrumbs.tsx src/components/PageHero.tsx src/test/design-primitives.test.tsx public/images
git commit -m "feat: establish Murray Legal design system"
```

### Task 3: Rebuild the Header, Footer, and Conversion Shell

**Files:**
- Create: `src/data/navigation.ts`
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/ConsultationCTA.tsx`
- Modify: `src/lib/router.tsx`
- Create: `src/test/navigation.test.tsx`

**Interfaces:**
- Produces: `practiceNavigation`, `industryNavigation`, `primaryNavigation`, and `legalNavigation` arrays of `{ label: string; href: string }`.
- Consumes: firm constants, `Container`, and the existing `Link` contract.

- [ ] **Step 1: Write keyboard and disclosure tests**

Test that the menu button has `aria-expanded`, opening the mobile menu exposes grouped practice/industry links, Escape closes it and restores button focus, and selecting a link closes it. Test that Footer contains both office addresses, phone, email, Disclaimer, Privacy Policy, and the non-engagement statement.

- [ ] **Step 2: Run tests and confirm current failures**

Run: `npm run test -- src/test/navigation.test.tsx`

Expected: FAIL on Escape/focus behavior, address coverage, and complete footer navigation.

- [ ] **Step 3: Centralize navigation data and rebuild Header**

Replace duplicated arrays with `src/data/navigation.ts`. Implement one desktop nav with accessible buttons for Practices and Industries, outside-click and Escape dismissal, `aria-expanded`, `aria-controls`, and current-page styling from `usePathname()`. Implement a mobile drawer with grouped headings, body-scroll lock while open, a 48px menu button, and close-on-navigation behavior.

- [ ] **Step 4: Make internal links scroll and focus predictably**

In `Link`, after `pushState`, dispatch navigation, scroll to the top unless the target contains a hash, and preserve modifier-click/new-tab behavior. Do not intercept external, download, mail, or telephone links.

- [ ] **Step 5: Rebuild Footer and ConsultationCTA**

Use firm constants for all contact and address data. Footer must present Primary Navigation, Practices, Offices, and Legal columns plus the full `JURISDICTION_NOTICE`. `ConsultationCTA` must offer `/contact` and `tel:${PHONE_TEL}` paths, use the revised headline “Strategic counsel starts with a focused conversation,” and avoid New York-specific practice claims.

- [ ] **Step 6: Run navigation and shell tests**

Run: `npm run test -- src/test/navigation.test.tsx && npm run test:e2e -- e2e/site-shell.spec.ts`

Expected: keyboard, mobile, footer, routing, and overflow assertions pass.

- [ ] **Step 7: Commit the shell**

```bash
git add src/data/navigation.ts src/components/Header.tsx src/components/Footer.tsx src/components/ConsultationCTA.tsx src/lib/router.tsx src/test/navigation.test.tsx
git commit -m "feat: rebuild accessible site shell"
```

### Task 4: Recompose the Homepage Around Trust and Decision-Making

**Files:**
- Modify: `src/pages/Home.tsx`
- Modify: `src/components/PracticeAreaCard.tsx`
- Modify: `src/components/FAQAccordion.tsx`
- Create: `src/test/home.test.tsx`
- Create: `e2e/home-visual.spec.ts`

**Interfaces:**
- Consumes: `practiceAreas`, `insights`, `Container`, `SectionHeading`, `PracticeAreaCard`, `FAQAccordion`, and `ConsultationCTA`.

- [ ] **Step 1: Write homepage hierarchy tests**

Assert one `h1`; consultation and practice links; eight practice cards with unique accessible names; the five supported audience groups; three insight links; three FAQ disclosure buttons; `organizationSchema`, `websiteSchema`, `legalServiceSchema`, and `faqSchema` output; and the jurisdiction-safe serving statement.

- [ ] **Step 2: Run the homepage test and capture expected failures**

Run: `npm run test -- src/test/home.test.tsx`

Expected: FAIL because existing FAQs are static, industries are absent, and the new hierarchy is not implemented.

- [ ] **Step 3: Build the new homepage composition**

Use this section order: art-directed hero; three-item credibility band (“Strategic perspective”, “Discreet counsel”, “Cross-disciplinary support”); practice grid; firm approach split panel; five audience/industry links; three insights; FAQ accordion; consultation CTA. Keep the existing supported audience and service claims. Use alternating paper/ivory/navy surfaces and asymmetrical grids, not eight identical boxed cards.

- [ ] **Step 4: Improve card and accordion semantics**

`PracticeAreaCard` must expose the practice name once as a heading and make its action name unique. `FAQAccordion` must use a button with `aria-expanded` and `aria-controls`; answer panels must be associated with their buttons and remain readable with JavaScript-disabled print styles.

- [ ] **Step 5: Add responsive screenshot assertions**

In `e2e/home-visual.spec.ts`, save full-page screenshots for 1440×1000 and 390×844 to `artifacts/site-audit/redesign-desktop-home.png` and `redesign-mobile-home.png`. Assert the primary CTA is visible without horizontal scrolling and the mobile menu does not overlap the hero.

- [ ] **Step 6: Verify and commit Homepage**

Run: `npm run test -- src/test/home.test.tsx && npm run test:e2e -- e2e/home-visual.spec.ts && npm run build`

```bash
git add src/pages/Home.tsx src/components/PracticeAreaCard.tsx src/components/FAQAccordion.tsx src/test/home.test.tsx e2e/home-visual.spec.ts artifacts/site-audit/redesign-desktop-home.png artifacts/site-audit/redesign-mobile-home.png
git commit -m "feat: redesign Murray Legal homepage"
```

### Task 5: Redesign Practice, Industry, About, Insight, Legal, and Error Pages

**Files:**
- Modify: `src/pages/PracticeAreaPage.tsx`
- Modify: `src/pages/IndustryPage.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/BlogPost.tsx`
- Modify: `src/pages/Disclaimer.tsx`
- Modify: `src/pages/PrivacyPolicy.tsx`
- Modify: `src/pages/NotFound.tsx`
- Create: `src/test/content-pages.test.tsx`
- Create: `e2e/content-pages.spec.ts`

**Interfaces:**
- Consumes: `PageHero`, `Breadcrumbs`, `SectionHeading`, `FAQAccordion`, `ConsultationCTA`, practice/insight data, and schema helpers.

- [ ] **Step 1: Write representative content-page tests**

Cover one canonical practice page, one alias, one industry, About, insight archive, exact insight detail, Disclaimer, Privacy, and 404. Assert unique `h1`, breadcrumb navigation where appropriate, consultation path, expected canonical, supported content, and visible jurisdiction/non-engagement language. Assert an unknown insight slug renders Not Found rather than silently substituting the first article.

- [ ] **Step 2: Run tests and confirm failures**

Run: `npm run test -- src/test/content-pages.test.tsx`

Expected: FAIL for breadcrumbs, unknown insight handling, expanded About content, and consistent legal-page shell.

- [ ] **Step 3: Recompose practice and industry templates**

Practice pages: breadcrumb hero, overview/risk panel, matters grid, who-it-helps panel, numbered process, accessible FAQs, jurisdiction note, related practices, CTA. Industry pages: breadcrumb hero, audience-specific intro using existing supported phrasing, related practices, engagement principles, and CTA. Do not add facts beyond current data.

- [ ] **Step 4: Expand About using verified firm positioning only**

Use sections titled “Counsel for consequential decisions,” “How Murray Legal works,” “Who the firm serves,” and “Jurisdiction-aware representation.” Reuse only established client categories and `JURISDICTION_NOTICE`; do not invent a biography, portrait, admission, award, result, or founding story.

- [ ] **Step 5: Recompose insights and handle missing posts correctly**

Archive: editorial lead article plus remaining grid with category/date/description. Detail: category/date, readable article width, key-takeaway panel, semantic sections, FAQ accordion, related practice, disclaimer, CTA. Replace `insights[0]` fallback with a Not Found render and `noindex, follow` metadata for unknown slugs.

- [ ] **Step 6: Bring legal and 404 pages into the global system**

Use `PageHero`, readable legal prose width, and unique metadata. Keep legal copy intact. The 404 page must offer Home, Practice Areas, and Contact recovery paths and set `robots="noindex, follow"`.

- [ ] **Step 7: Visually verify representative pages**

In `e2e/content-pages.spec.ts`, visit the representative routes from Step 1 at desktop and mobile; assert no console errors and no horizontal overflow. Save `redesign-desktop-practice.png`, `redesign-mobile-practice.png`, `redesign-desktop-insight.png`, and `redesign-mobile-about.png` under `artifacts/site-audit/`.

- [ ] **Step 8: Run verification and commit content templates**

Run: `npm run test -- src/test/content-pages.test.tsx && npm run test:e2e -- e2e/content-pages.spec.ts && npm run build`

```bash
git add src/pages src/test/content-pages.test.tsx e2e/content-pages.spec.ts artifacts/site-audit/redesign-*.png
git commit -m "feat: redesign legal content templates"
```

### Task 6: Implement and Test the Consultation Intake Flow

**Files:**
- Create: `src/components/IntakeForm.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `api/intake.js`
- Create: `src/test/intake-form.test.tsx`
- Create: `e2e/contact.spec.ts`

**Interfaces:**
- Produces: `IntakeForm` posting `IntakePayload` to `/api/intake`.
- Payload: `{ name, email, phone, company, practiceArea, jurisdiction, urgency, contactMethod, matterDescription, consent, pageUrl }` as strings except `consent: boolean`.
- Status: `'idle' | 'submitting' | 'success' | 'error'`.

- [ ] **Step 1: Write validation and network tests**

Use `userEvent` and mocked `fetch` to prove: name/email/phone/practice/jurisdiction/matter/consent are required; invalid email is rejected; no request occurs on invalid input; valid input posts the exact payload once; submit disables while pending; success clears form values after confirmation; server failure preserves entries and displays phone/email alternatives; a second click while pending cannot duplicate the request.

- [ ] **Step 2: Run the intake tests and confirm failure**

Run: `npm run test -- src/test/intake-form.test.tsx`

Expected: FAIL because `IntakeForm` does not exist and Contact has no submission behavior.

- [ ] **Step 3: Implement accessible fields and client validation**

Use native required/type validation plus explicit field errors keyed by input name. Give each input a stable `id`, label, `autoComplete`, `aria-invalid`, and `aria-describedby`. Use select controls for practice area, urgency, and preferred contact method. Use `role="alert"` for the error summary and `role="status"` for pending/success messaging. The consent checkbox must be required.

- [ ] **Step 4: Implement guarded submission**

On submit, return immediately when status is `submitting`; validate; call:

```ts
await fetch('/api/intake', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ...values, consent: true, pageUrl: window.location.href }),
});
```

Treat non-2xx responses as errors. Clear the form only after a confirmed success. Never log payload contents.

- [ ] **Step 5: Harden server validation without changing delivery**

In `api/intake.js`, require POST, reject invalid content types, cap string lengths, verify consent is `true`, validate email format, and return consistent JSON `{ ok: false, error: '...' }` with 400/405/500 statuses. Preserve environment variables and Resend delivery. Do not echo inquiry content in error responses or logs.

- [ ] **Step 6: Recompose Contact around the working form**

Use `PageHero`; place `IntakeForm` beside a dark consultation-standards panel containing phone/email, response expectations without time guarantees, confidentiality warning, and the exact jurisdiction-safe engagement language.

- [ ] **Step 7: Add browser intake coverage**

In `e2e/contact.spec.ts`, intercept `/api/intake` for success and 500 responses. Test required errors, consent enforcement, success UI, failure recovery, duplicate prevention, keyboard order, and mobile overflow. Save desktop/mobile contact screenshots after successful rendering, not after submission with sensitive sample data visible.

- [ ] **Step 8: Verify and commit Intake**

Run: `npm run test -- src/test/intake-form.test.tsx && npm run test:e2e -- e2e/contact.spec.ts && npm run build`

```bash
git add src/components/IntakeForm.tsx src/pages/Contact.tsx api/intake.js src/test/intake-form.test.tsx e2e/contact.spec.ts artifacts/site-audit/redesign-*contact.png
git commit -m "feat: complete consultation intake flow"
```

### Task 7: Audit SEO, Routes, Accessibility, and Production Output

**Files:**
- Modify: `src/components/SEOHead.tsx`
- Modify: `src/lib/schema.ts`
- Modify: `public/robots.txt`
- Modify: `public/sitemap.xml`
- Modify: `public/llms.txt`
- Modify: `llms.txt`
- Create: `src/test/seo.test.tsx`
- Create: `e2e/seo-accessibility.spec.ts`
- Create: `docs/REDESIGN_COMPLETION_AUDIT_2026-08-18.md`

**Interfaces:**
- Consumes: final route table, `SEOHead`, schema helpers, public crawler files, and rendered pages.
- Produces: a requirement-by-requirement evidence record.

- [ ] **Step 1: Write SEO head and schema tests**

Assert representative pages replace rather than duplicate title/description/canonical/robots tags; JSON-LD is valid JSON; organization data uses `SITE_URL`, firm constants, and Pennsylvania jurisdiction; alias routes canonicalize to canonical practice URLs; and 404/unknown insight pages are noindex.

- [ ] **Step 2: Run tests and fix only evidenced metadata defects**

Run: `npm run test -- src/test/seo.test.tsx`

Expected: tests identify any duplicate/fallback metadata defects. Update `SEOHead` or schema helpers without changing authoritative business facts.

- [ ] **Step 3: Cross-check crawler files against live routes**

Generate a route inventory from `src/App.tsx` and insight slugs. Verify every sitemap URL maps to a live canonical page, robots references the correct sitemap, and both llms files use `https://murraylegalfirm.com`. Remove stale domains or unsupported routes; do not remove valid published content merely because it is not linked prominently.

- [ ] **Step 4: Add browser accessibility assertions**

For Home, Practice, Industry, Insight, About, Contact, Disclaimer, Privacy, and 404, assert one `main`, one `h1`, named navigation, no empty buttons/links, logical heading levels, visible focus when tabbing, 44px primary controls, and reduced-motion emulation. Capture browser console errors and fail the test on uncaught errors.

- [ ] **Step 5: Run the complete automated suite**

Run:

```bash
npm run typecheck
npm run lint
npm run test
npm run test:e2e
npm run build
```

Expected: all commands exit 0; lint has no warnings in modified files; every route and viewport test passes.

- [ ] **Step 6: Write the evidence-based completion audit**

In `docs/REDESIGN_COMPLETION_AUDIT_2026-08-18.md`, list each design-spec verification gate with: evidence command/file, result, and any limitation. Include bundle sizes from the build, route count, screenshot paths, intake test cases, SEO/schema checks, jurisdiction check, and the exact final commit SHA. Do not claim manual checks that were not performed.

- [ ] **Step 7: Commit the audit and final corrections**

```bash
git add src/components/SEOHead.tsx src/lib/schema.ts public/robots.txt public/sitemap.xml public/llms.txt llms.txt src/test/seo.test.tsx e2e/seo-accessibility.spec.ts docs/REDESIGN_COMPLETION_AUDIT_2026-08-18.md
git commit -m "test: verify Murray Legal redesign completion"
```

### Task 8: Final Visual Review and Completion Gate

**Files:**
- Modify as evidence requires: files changed in Tasks 2–7
- Update: `docs/REDESIGN_COMPLETION_AUDIT_2026-08-18.md`
- Update: `artifacts/site-audit/redesign-*.png`

**Interfaces:**
- Consumes: final production build and all automated evidence.
- Produces: approved desktop/mobile screenshots and a complete audit with no open required items.

- [ ] **Step 1: Run the production server and inspect every representative page**

Run `npm run build && npm run preview -- --host 127.0.0.1`. Inspect Home, one Practice, one Industry, About, Insights, one article, Contact, Disclaimer, Privacy, and 404 at 1440×1000, 768×1024, and 390×844. Check crop quality, rhythm, line length, focus, menus, form states, footer, and overflow.

- [ ] **Step 2: Compare against the design objective**

Confirm the site is materially more editorial, distinctive, and visually confident than `artifacts/site-audit/desktop-home.png`; confirm it does not copy A. Vaughn Law's text, branding, imagery, or exact composition; confirm Higgsfield/video was omitted unless the still-asset test could not achieve the intended result.

- [ ] **Step 3: Fix every observed required defect and rerun its nearest test**

For each issue, record the page, viewport, defect, changed file, and verifying test in the completion audit. Re-run the specific component/browser test immediately, then re-run the full suite after the last fix.

- [ ] **Step 4: Run the final gate from a clean process**

Run:

```bash
npm run typecheck && npm run lint && npm run test && npm run test:e2e && npm run build
git diff --check
git status --short
```

Expected: all checks pass, no unintended files are staged, user-owned `.vercel/`, pre-existing audit artifacts, and unrelated documents remain untouched.

- [ ] **Step 5: Finalize evidence and commit**

Update the audit with the final test timestamp, screenshot list, output sizes, known non-blocking limitations (if any), and final commit SHA. Then:

```bash
git add docs/REDESIGN_COMPLETION_AUDIT_2026-08-18.md artifacts/site-audit/redesign-*.png
git commit -m "docs: finalize redesign verification evidence"
```
