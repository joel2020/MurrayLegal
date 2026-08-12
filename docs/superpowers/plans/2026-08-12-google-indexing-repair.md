# Murray Legal Indexing Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy a crawlable Murray Legal site with one canonical inventory, prerendered route-specific HTML, genuine 404s, permanent redirects, Eddie-approved services, and working administrative intake channels.

**Architecture:** A typed route manifest is the source of truth for React routing, static prerendering, sitemap generation, and Vercel routing. Vite builds the browser application and an SSR entry; a Node post-build script renders each canonical route into its own HTML file. A shared React intake form powers both the contact page and a guided floating intake assistant, posting validated payloads to the existing Vercel API.

**Tech Stack:** React 18, TypeScript, Vite 5, React DOM server rendering/hydration, Node test runner, Vercel static routing and serverless API.

## Global Constraints

- Preserve the existing visual interface except for the new intake assistant and necessary copy removal.
- Canonical hostname is exactly `https://murraylegalfirm.com`.
- Remove Trusts, Wills & Estates and Divorce & Family Law, their two associated articles, and every related claim or discovery link.
- Keep Corporate Law, Real Estate, Civil Litigation, Entertainment Transactions, Sports Transactions, and Intellectual Property.
- Keep `(914) 214-1880` and `admin@murraylegalfirm.com`.
- Add no attorney photo, credentials, results, awards, or unverified trust claims.
- Unknown paths and invalid insight slugs must return HTTP 404.
- Intake is lead capture only; it must not provide legal advice or imply an attorney-client relationship.
- Do not change Search Console until the repaired production deployment is verified.

---

### Task 1: Test harness and canonical route manifest

**Files:**
- Create: `src/lib/routes.tsx`
- Create: `tests/routes.test.mjs`
- Modify: `src/App.tsx`
- Modify: `src/lib/router.tsx`
- Modify: `package.json`

**Interfaces:**
- Produces: `canonicalRoutes: CanonicalRoute[]`, `redirects: RedirectRoute[]`, `resolvePage(pathname: string): JSX.Element`, `isCanonicalPath(pathname: string): boolean`.
- `CanonicalRoute` contains `path`, `title`, `description`, and `element`.
- `StaticRouter` accepts `{ pathname, children }` and supplies server-safe router context.

- [ ] **Step 1: Add a failing route-manifest test**

Create `tests/routes.test.mjs` that imports a generated route-data module and asserts unique canonical paths, six practice routes, no removed slugs/articles, redirect destinations in the canonical set, and no redirect source in the canonical set.

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { canonicalPaths, redirectMap } from '../scripts/route-data.mjs';

test('canonical inventory contains only Eddie-approved services', () => {
  assert.equal(new Set(canonicalPaths).size, canonicalPaths.length);
  assert.equal(canonicalPaths.filter((path) => path.startsWith('/practice-areas/')).length, 6);
  assert.equal(canonicalPaths.some((path) => /trusts-wills|divorce-family|estate-planning-checklist|high-net-worth-divorce/.test(path)), false);
});

test('redirects terminate at canonical paths', () => {
  for (const [source, destination] of Object.entries(redirectMap)) {
    assert.equal(canonicalPaths.includes(source), false);
    assert.equal(canonicalPaths.includes(destination), true);
  }
});
```

- [ ] **Step 2: Run the test and verify RED**

Run: `node --test tests/routes.test.mjs`  
Expected: FAIL because `scripts/route-data.mjs` does not exist.

- [ ] **Step 3: Implement shared route data and React manifest**

Create `scripts/route-data.mjs` exporting static canonical paths and redirect mappings, deriving insight paths from an exported JSON-safe source. Create `src/lib/routes.tsx` using the same practice/article inventories and expose the interfaces above. Replace `App.tsx`'s inline route object and its first-article fallback with `resolvePage(pathname)`.

Add a `StaticRouter` whose `navigate` is a no-op on the server and update `BrowserRouter.getServerSnapshot` to return `/` only for browser hydration.

- [ ] **Step 4: Run route tests and typecheck**

Run: `node --test tests/routes.test.mjs && npm run typecheck`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add package.json scripts/route-data.mjs tests/routes.test.mjs src/App.tsx src/lib/router.tsx src/lib/routes.tsx
git commit -m "Centralize canonical route inventory"
```

### Task 2: Remove Eddie-declined practices and claims

**Files:**
- Modify: `src/data/practiceAreas.ts`
- Modify: `src/data/insights.ts`
- Modify: `src/components/Header.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/pages/About.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/App.tsx`
- Modify: `src/lib/schema.ts`
- Modify: affected industry route declarations in `src/lib/routes.tsx`
- Test: `tests/content-scope.test.mjs`

**Interfaces:**
- Consumes: canonical inventory from Task 1.
- Produces: six-item `practiceAreas`, seven-item `insights`, and six service types in `legalServiceSchema()`.

- [ ] **Step 1: Write a failing source-scope regression test**

Create `tests/content-scope.test.mjs` that recursively reads `src/` and asserts prohibited service phrases are absent outside an explicit test allowlist.

```js
test('published source does not claim removed services', () => {
  const published = readPublishedSource();
  for (const phrase of ['Trusts, Wills & Estates', 'Divorce & Family Law', 'estate planning counsel', 'family law matters']) {
    assert.equal(published.includes(phrase), false, phrase);
  }
});
```

- [ ] **Step 2: Run the test and verify RED**

Run: `node --test tests/content-scope.test.mjs`  
Expected: FAIL listing existing removed-service references.

- [ ] **Step 3: Remove the two practices, articles, routes, schema entries, links, and claims**

Delete the two practice objects and two insight objects. Remove their routes and navigation entries. Rewrite sitewide copy to describe only the retained services. Update the high-net-worth-individual industry page to link only to Real Estate and Civil Litigation, without implying family or estate services.

- [ ] **Step 4: Run scope, route, and type tests**

Run: `node --test tests/routes.test.mjs tests/content-scope.test.mjs && npm run typecheck`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src tests/content-scope.test.mjs scripts/route-data.mjs
git commit -m "Remove declined legal services from site"
```

### Task 3: Shared validated intake and guided assistant

**Files:**
- Create: `src/lib/intake.ts`
- Create: `src/components/IntakeForm.tsx`
- Create: `src/components/IntakeAssistant.tsx`
- Modify: `src/pages/Contact.tsx`
- Modify: `src/App.tsx`
- Modify: `api/intake.js`
- Test: `tests/intake.test.mjs`
- Test: `tests/intake-api.test.mjs`

**Interfaces:**
- Produces: `IntakePayload`, `validateIntake(payload): Record<string,string>`, and `submitIntake(payload): Promise<void>`.
- `IntakeForm` accepts `{ source: 'contact' | 'chatbot', compact?: boolean, onSuccess?: () => void }`.
- `IntakeAssistant` renders a fixed launcher and an accessible `role="dialog"`.

- [ ] **Step 1: Write failing validation and API tests**

Tests assert required fields, valid email, maximum lengths, accepted source values, honeypot handling, POST-only behavior, and that the email request targets `admin@murraylegalfirm.com` without logging matter content.

```js
test('rejects malformed intake before sending email', async () => {
  const response = await invoke({ method: 'POST', body: { name: 'Eddie', email: 'bad' } });
  assert.equal(response.status, 400);
  assert.equal(fetchCalls.length, 0);
});
```

- [ ] **Step 2: Run tests and verify RED**

Run: `node --test tests/intake.test.mjs tests/intake-api.test.mjs`  
Expected: FAIL because shared validators and strengthened endpoint behavior do not exist.

- [ ] **Step 3: Implement the shared form and assistant**

Implement controlled fields, inline errors, pending/success/failure states, acknowledgement checkbox, honeypot, payload source, and `fetch('/api/intake')`. Replace the inert contact form. Mount `IntakeAssistant` once in `App` after the main page and before `Footer`.

Implement endpoint normalization and limits: name 120, email 254, phone 40, company 160, practice area 120, jurisdiction 120, urgency 80, contact method 80, matter description 5,000, page URL 2,000. Accept only `contact` and `chatbot` sources.

- [ ] **Step 4: Run intake tests, typecheck, and lint**

Run: `node --test tests/intake.test.mjs tests/intake-api.test.mjs && npm run typecheck && npm run lint`  
Expected: PASS with no warnings.

- [ ] **Step 5: Commit**

```bash
git add api/intake.js src/App.tsx src/components/IntakeAssistant.tsx src/components/IntakeForm.tsx src/lib/intake.ts src/pages/Contact.tsx tests/intake.test.mjs tests/intake-api.test.mjs
git commit -m "Add administrative intake assistant"
```

### Task 4: Build-time prerendering and hydration

**Files:**
- Create: `src/entry-server.tsx`
- Create: `scripts/prerender.mjs`
- Create: `tests/prerender.test.mjs`
- Modify: `src/main.tsx`
- Modify: `src/components/SEOHead.tsx`
- Modify: `vite.config.ts`
- Modify: `package.json`
- Modify: `index.html`

**Interfaces:**
- Produces: `render(pathname): { html: string; head: SeoSnapshot }` from the SSR bundle.
- `SeoSnapshot` contains `title`, `description`, `canonical`, `robots`, `openGraph`, and serialized schema.

- [ ] **Step 1: Write failing prerender assertions**

The test runs the production build, loads representative generated files, and asserts unique title, description, canonical, robots, H1, body content, and structured data in raw HTML. It also asserts all canonical paths have a corresponding HTML artifact.

```js
test('corporate law ships complete raw HTML', () => {
  const html = readRoute('/practice-areas/corporate-law');
  assert.match(html, /<link rel="canonical" href="https:\/\/murraylegalfirm.com\/practice-areas\/corporate-law"/);
  assert.match(html, /<h1[^>]*>Corporate Law Attorney/);
  assert.doesNotMatch(html, /Trusts, Wills|Divorce &amp; Family/);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run: `node --test tests/prerender.test.mjs`  
Expected: FAIL because route-specific build artifacts do not exist.

- [ ] **Step 3: Implement SSR collection, prerender generation, and hydration**

Make `SEOHead` render a server-side `SeoContext` snapshot while retaining client updates. Add `entry-server.tsx` using `renderToString`, `StaticRouter`, and the resolved route. Update `main.tsx` to call `hydrateRoot` when `#root` has prerendered children, falling back to `createRoot` during development.

Build the browser bundle, build `src/entry-server.tsx` as an SSR bundle, then run `scripts/prerender.mjs` to inject route content and head markup into `dist/index.html` and write `dist/<path>.html`. Remove the temporary SSR bundle afterward.

- [ ] **Step 4: Run prerender tests and full build**

Run: `node --test tests/prerender.test.mjs && npm run build`  
Expected: PASS and one generated HTML artifact per canonical path.

- [ ] **Step 5: Commit**

```bash
git add index.html package.json scripts/prerender.mjs src/components/SEOHead.tsx src/entry-server.tsx src/main.tsx tests/prerender.test.mjs vite.config.ts
git commit -m "Prerender canonical pages for search engines"
```

### Task 5: Sitemap, robots, redirects, and real 404 routing

**Files:**
- Create: `scripts/generate-seo-files.mjs`
- Create: `public/404.html`
- Modify: `public/robots.txt`
- Generate: `public/sitemap.xml`
- Modify: `vercel.json`
- Test: `tests/edge-routing.test.mjs`
- Test: `tests/sitemap.test.mjs`

**Interfaces:**
- Consumes: canonical paths and redirect map from Task 1.
- Produces: sitemap XML and Vercel rewrites for canonical routes only.

- [ ] **Step 1: Write failing sitemap and edge-config tests**

Assert that sitemap URLs equal canonical paths exactly, robots has no query-string disallow, aliases use permanent redirects, canonical routes have explicit rewrites, no catch-all rewrite exists, and a noindex 404 document exists.

- [ ] **Step 2: Run tests and verify RED**

Run: `node --test tests/sitemap.test.mjs tests/edge-routing.test.mjs`  
Expected: FAIL on the current stale sitemap, catch-all-style route handling, and missing static 404.

- [ ] **Step 3: Generate SEO files and replace Vercel routing**

Generate sitemap XML during build. Remove `Disallow: /*?`. Configure `redirects` with `permanent: true`; configure explicit rewrites from extensionless canonical paths to their generated `.html` files. Add a `www` host redirect through a Vercel host condition while preserving `/:path*`. Configure the 404 document without a SPA fallback.

- [ ] **Step 4: Run tests and validate Vercel config**

Run: `node --test tests/sitemap.test.mjs tests/edge-routing.test.mjs && npx vercel build`  
Expected: PASS; Vercel build completes.

- [ ] **Step 5: Commit**

```bash
git add package.json public/404.html public/robots.txt public/sitemap.xml scripts/generate-seo-files.mjs tests/edge-routing.test.mjs tests/sitemap.test.mjs vercel.json
git commit -m "Enforce canonical redirects and real 404s"
```

### Task 6: Local production-style verification and documentation

**Files:**
- Modify: `docs/GOOGLE_INDEXING_AUDIT_2026-08-12.md`
- Modify: plan checkboxes in this file

**Interfaces:**
- Produces: recorded evidence for canonical responses, redirects, 404s, sitemap, robots, rendered accessibility, and intake behavior.

- [ ] **Step 1: Run the full quality gate**

Run: `npm run test && npm run typecheck && npm run lint && npm run build`  
Expected: all commands exit 0.

- [ ] **Step 2: Run a Vercel production server and probe representative URLs**

Run `vercel dev` or `vercel build && vercel dev --prebuilt`, then use `curl` to assert:

- `/`, `/practice-areas/corporate-law`, and a valid insight return 200 with unique raw HTML.
- `/corporate-law` and `/blog` return one-hop permanent redirects.
- A fabricated path and both removed practices return 404.
- `/robots.txt` and `/sitemap.xml` return correct bodies and content types.

- [ ] **Step 3: Browser verification**

Use Chrome DevTools to verify hydration has no console errors, internal navigation works, the assistant is keyboard-operable, and a controlled invalid intake shows validation without a network send.

- [ ] **Step 4: Update the audit with implemented status and evidence**

Record exact commands, response codes, and any remaining external dependency such as a missing Resend configuration.

- [ ] **Step 5: Commit**

```bash
git add docs/GOOGLE_INDEXING_AUDIT_2026-08-12.md docs/superpowers/plans/2026-08-12-google-indexing-repair.md
git commit -m "Document indexing repair verification"
```

### Task 7: Deploy, verify production, and update Search Console

**Files:**
- No source files unless production verification reveals a defect.

**Interfaces:**
- Produces: verified production deployment and corrected Search Console sitemap state.

- [ ] **Step 1: Deploy to a Vercel preview**

Run: `vercel deploy --yes`  
Expected: a preview deployment URL.

- [ ] **Step 2: Verify preview responses**

Repeat Task 6 HTTP and browser checks against the preview URL. If any check fails, fix through a new test-first cycle and redeploy preview.

- [ ] **Step 3: Deploy production**

Run: `vercel deploy --prod --yes`  
Expected: production alias `https://murraylegalfirm.com` updated.

- [ ] **Step 4: Verify production before changing Search Console**

Repeat all response checks, including `www` host redirect and a controlled intake delivery test. Confirm the previous deployment remains available for rollback.

- [ ] **Step 5: Correct Search Console sitemap submissions**

Submit `https://murraylegalfirm.com/sitemap.xml`, wait for Search Console acceptance, then remove `http://murraylegalfirm.com/?sitemapindex.xml`.

- [ ] **Step 6: Inspect representative canonical URLs**

Inspect the homepage, contact, insights index, two practice pages, one industry page, and one article. Record verdict, coverage state, crawl allowance, and last crawl time. Do not claim immediate indexing if Google reports discovery pending.

- [ ] **Step 7: Final verification and completion**

Run a fresh full quality gate, inspect `git status`, confirm production HTTP evidence, and update the active goal only when code, deployment, and Search Console work are all complete.
