# Murray Legal Redesign Completion Audit

Date: August 18, 2026  
Branch: `codex/murray-legal-redesign`  
Audited implementation commit: `4822bf1`

## Outcome

Murray Legal now uses one responsive editorial design system across its homepage, practice areas, industries, firm story, insights, legal notices, 404 state, and consultation flow. The work preserves the current React/Vite architecture, authoritative firm details, canonical practice URLs, aliases, structured data, and jurisdiction safeguards.

The visual direction uses the clarity and confidence of the client reference as a quality bar without copying its branding, copy, imagery, or exact composition. The homepage adapts the editorial image-first hierarchy of the 21st.dev `Editorial Image Hero` pattern into an original Murray Legal composition. Direct 21st.dev CLI retrieval required account authentication, so the publicly documented pattern was adapted locally without adding its optional dependencies.

## Verification Gates

| Gate | Evidence | Result |
| --- | --- | --- |
| Production build | `npm run build` | Pass. HTML 1.03 kB; CSS 35.55 kB (6.78 kB gzip); JS 250.48 kB (75.56 kB gzip). |
| Type safety | `npm run typecheck` | Pass, zero TypeScript errors. |
| Lint | `npm run lint` | Pass, zero errors and zero warnings. |
| Component/API regression suite | `npm test -- --run` | Pass, 8 files and 50 tests. |
| Browser suite | `npm run test:e2e` | Pass, 15 tests; 1 intentional project skip for a desktop-only mobile-menu condition. |
| Canonical route coverage | `e2e/seo-accessibility.spec.ts` | Pass on desktop and mobile for all 28 sitemap URLs; one `h1`, one description, one canonical, no unlabeled controls, no horizontal overflow, and no console errors. |
| Route aliases | `src/test/routes.test.tsx`, `src/test/seo.test.tsx` | Pass for `/blog`, five legacy practice aliases, and alias-to-canonical metadata. Valid `/blog/:slug` insight aliases retain `/insights/:slug` canonicals. |
| Intake validation and delivery contract | `src/test/intake-form.test.tsx`, `src/test/intake-api.test.ts`, `e2e/intake.spec.ts` | Pass for required fields, email validation, consent, JSON-only requests, success reset, delivery-error preservation, and submitted payload. |
| SEO/schema | `src/test/seo.test.tsx` | Pass for unique metadata, canonical URLs, noindex 404s, valid JSON-LD graph, and Pennsylvania jurisdiction. |
| Crawler discovery | `public/robots.txt`, `public/sitemap.xml`, both `llms.txt` files | 28 canonical URLs; canonical `murraylegalfirm.com` domain throughout; robots points to the correct sitemap. |
| Production dependency security | `npm audit --omit=dev --audit-level=high` | Pass: 0 production vulnerabilities. An unused Supabase dependency and its vulnerable transitive WebSocket package were removed. |
| Jurisdiction language | `src/lib/firm.ts`, shell/page tests | Pass. Pennsylvania licensure, New York office-location wording, nationwide-where-permitted qualification, and no-relationship notice remain explicit. |
| Responsive visual review | screenshots listed below and `view_image` inspection | Approved at 1440px, 768px, and 390px. No observed collision, clipping, illegible text, or overflow. |
| Reduced motion/focus/touch | `src/index.css`, `e2e/seo-accessibility.spec.ts` | Pass. Reduced-motion override, visible focus, skip link, 48px menu control, keyboard dropdown dismissal, and deliberate touch behavior are present. |

## Canonical Route Inventory

- 6 core pages: home, about, contact, insights, disclaimer, privacy policy.
- 8 practice-area pages.
- 5 industry pages.
- 9 insight detail pages.
- Total sitemap URLs: 28.
- Additional compatibility paths: `/blog`, five legacy practice aliases, and `/blog/:slug` for valid insight slugs.

## Visual Evidence

- `artifacts/site-audit/redesign-desktop-home.png` — 1440px homepage.
- `artifacts/site-audit/redesign-tablet-home.png` — 768px homepage.
- `artifacts/site-audit/redesign-mobile-home.png` — 390px homepage.
- `artifacts/site-audit/content-desktop-chromium.png` and `content-mobile-chromium.png` — representative practice template.
- `artifacts/site-audit/contact-desktop-chromium.png` and `contact-mobile-chromium.png` — consultation intake.

## Material Audit Corrections

| Page / viewport | Defect | Correction | Verification |
| --- | --- | --- | --- |
| All direct production routes | Canonical practice, industry, insight, and privacy paths lacked hosting rewrites. | Added scoped SPA rewrites in `vercel.json`. | Canonical browser-route suite. |
| Crawler files | Sitemap omitted industries, articles, and legal pages; root `llms.txt` used the old domain and stale service framing. | Rebuilt the 28-URL sitemap and aligned both AI-discovery files to current content and domain. | Crawler-file browser test. |
| All pages / keyboard | No skip-navigation link. | Added a focus-visible skip link and focusable main-content target. | Desktop/mobile keyboard test. |
| Homepage / browser console | React warned about the image priority attribute in the installed runtime. | Removed the unsupported property; the above-fold image remains eagerly loaded by default. | Full canonical console-error test. |
| Consultation / all widths | Placeholder form had no delivery action or durable validation states. | Added controlled intake, field errors, consent, duplicate-submit guard, success/error states, and server validation. | Unit, API, and browser intake tests. |
| Dependencies | Unused Supabase dependency introduced a high-severity transitive production advisory. | Removed unused dependency. | Production audit reports 0 vulnerabilities. |

## Asset Decision

The built-in image generation tool created `public/images/murray-legal-architecture.png` from an original premium architectural brief; `public/images/murray-legal-architecture.webp` is the optimized 55,808-byte production source. Final prompt:

> Use case photorealistic-natural; premium law-firm hero; original architectural photo with warm limestone, dark bronze, deep shadows, civic/institutional but not identifiable, negative space, no people/text/logos/flags/courthouse/gavel/scales/handshake/books/desk; late afternoon calm editorial photo.

Higgsfield/video was intentionally omitted. The static asset achieved the intended brand mood with lower motion, bandwidth, and accessibility cost.

## Known Non-Blocking Tooling Notes

- The build reports an outdated local `caniuse-lite` dataset; this does not fail the build or alter the tested output.
- The full development dependency audit reports advisories in build/test tooling. The production-only audit reports zero vulnerabilities.
- Live Resend delivery requires deployment environment variables (`RESEND_API_KEY` and optionally `CONTACT_EMAIL_FROM`); endpoint validation and the outbound request contract are covered with mocked delivery tests.
