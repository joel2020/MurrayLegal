# Google Indexing Repair Design

Date: August 12, 2026  
Site: `https://murraylegalfirm.com`  
Platform: Vite, React, TypeScript, Vercel

## Objective

Make every valuable Murray Legal page independently discoverable, crawlable, and indexable while ensuring duplicate and nonexistent URLs resolve through unambiguous HTTP redirects or genuine HTTP 404 responses.

The repair must preserve the existing visual interface, page content, contact workflow, and canonical production hostname.

## Canonical URL inventory

A single typed route manifest will define the canonical indexable URL set. It will include:

- The homepage
- About, contact, insights, privacy policy, and disclaimer pages
- Eight practice-area pages
- Five industry pages
- Every valid insight article from `src/data/insights.ts`

The same manifest will drive prerendering, Vercel rewrites, route validation, and sitemap generation so these surfaces cannot silently drift apart.

## Rendering architecture

The application will remain a Vite/React project. A build-time prerender step will generate a separate HTML document for each canonical route.

Each generated document must contain, before JavaScript executes:

- The page-specific title
- Meta description
- Robots directive
- Absolute canonical URL
- Open Graph URL and core sharing metadata
- The page's H1 and meaningful body content
- Page-specific structured data when supplied by the React page

React will hydrate the generated markup in the browser. Client-side navigation will continue to work without changing the visible design.

The build must fail if a canonical route cannot be rendered or if a generated page lacks required SEO fields.

## Routing and HTTP behavior

Vercel will rewrite only known canonical application routes to their generated HTML documents.

Unknown paths will not use a catch-all application rewrite. Vercel will therefore return a genuine HTTP 404 response without first serving an indexable homepage shell.

Known legacy or duplicate paths will permanently redirect in one hop:

- `/blog` to `/insights`
- `/corporate-law` and `/business-attorney` to `/practice-areas/corporate-law`
- `/civil-litigation` and `/contract-disputes` to `/practice-areas/civil-litigation`
- `/real-estate-attorney` to `/practice-areas/real-estate`
- Existing retired child-service routes to the most relevant canonical practice page

Unknown `/blog/*` and `/insights/*` article slugs will return HTTP 404. The current fallback to the first article will be removed.

The `www` hostname will permanently redirect to the apex hostname while preserving the path and query string. HTTP-to-HTTPS behavior will remain enforced by Vercel.

## Query parameters

The blanket `Disallow: /*?` robots rule will be removed. Search engines must be able to fetch parameterized URLs and see their redirects, canonical tags, or 404 responses.

Known tracking parameters may remain on a request, but the rendered page will declare the clean canonical URL. No parameterized URL will be added to the sitemap or internal navigation.

## Sitemap and discovery

The XML sitemap will be generated from the canonical route manifest at build time. It will contain only absolute, canonical, indexable, HTTP-200 URLs. Article modification dates will be used as `lastmod` values; static routes will omit `lastmod` unless a trustworthy modification date exists.

After the repaired site is deployed and verified:

1. Submit `https://murraylegalfirm.com/sitemap.xml` to the connected Search Console property.
2. Remove `http://murraylegalfirm.com/?sitemapindex.xml` from that property.
3. Inspect representative priority pages with the URL Inspection API.

No mass indexing requests or URL-removal requests will be made.

## Testing strategy

Automated tests will establish the desired behavior before implementation:

- The route manifest includes every valid static and article route exactly once.
- Every redirect source is excluded from the canonical manifest and points to a canonical destination.
- Unknown article slugs resolve to the Not Found component rather than an existing article.
- Sitemap output exactly matches the canonical indexable manifest.
- The production build generates HTML for every canonical route.
- Every generated HTML file contains its expected canonical, title, robots directive, H1, and rendered content.
- Generated 404 HTML uses `noindex` and does not claim a valid canonical page.
- Vercel configuration has no catch-all rewrite and contains the expected permanent redirects.

Production-style verification will run against `vercel dev` or a Vercel preview deployment. Representative checks will confirm:

- Canonical routes return HTTP 200 with unique raw HTML.
- Alias routes return one-hop permanent redirects.
- A fabricated path returns HTTP 404.
- The `www` host redirects to the apex host in the deployed environment.
- `robots.txt` and `sitemap.xml` return the intended content types and bodies.

## Deployment and rollback

The code will be deployed through the already-linked Vercel project after local tests, type checking, linting, build verification, and preview-route checks pass.

The production deployment URL and representative response evidence will be recorded before Search Console submissions are changed. If production route checks fail, the deployment will be rolled back before Search Console changes are made.

The previous Vercel deployment remains the rollback point. Search Console sitemap changes will occur only after the repaired production responses are confirmed.

## Success criteria

The repair is complete when:

- All canonical routes return HTTP 200 and meaningful page-specific HTML without requiring JavaScript.
- All specified aliases return a permanent one-hop redirect to a canonical route.
- Random nonexistent paths and invalid article slugs return HTTP 404.
- The sitemap and application route inventory agree exactly.
- The current sitemap is accepted in Search Console and the obsolete sitemap is removed.
- Google URL Inspection can discover the submitted inner pages, even if Google has not yet completed indexing them.

The historical count of 6,977 excluded URLs is not a completion criterion because Google may retain old exclusions until it recrawls or ages them out.

## Out of scope

- Visual redesign
- Rewriting legal content
- Migrating to Next.js, Astro, or another framework
- Backlink acquisition or directory submissions
- Guaranteeing Google indexing or rankings
- Removing historical URLs through Search Console's temporary removals tool
