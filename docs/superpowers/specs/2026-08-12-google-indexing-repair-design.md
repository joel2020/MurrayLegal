# Google Indexing Repair Design

Date: August 12, 2026  
Site: `https://murraylegalfirm.com`  
Platform: Vite, React, TypeScript, Vercel

## Source decisions

The scope includes the decisions Eddie made in the August 11, 2026 Granola meeting titled **Property management AI implementation — website redesign, compliance automation, and resident services**:

- Remove only the Trusts, Wills & Estates and Divorce & Family Law practices.
- Keep the other existing practice areas, including corporate law, real estate, civil litigation, entertainment transactions, sports transactions, and intellectual property.
- Do not add an attorney photo or credentials yet.
- Keep the confirmed phone number, `(914) 214-1880`.
- Provide a chatbot-style intake channel that captures lead information, emails it to `admin@murraylegalfirm.com`, and supports follow-up by Eddie's virtual assistant.

## Objective

Make every valuable Murray Legal page independently discoverable, crawlable, and indexable while ensuring duplicate and nonexistent URLs resolve through unambiguous HTTP redirects or genuine HTTP 404 responses.

The repair must preserve the existing visual interface, page content, contact workflow, and canonical production hostname.

## Canonical URL inventory

A single typed route manifest will define the canonical indexable URL set. It will include:

- The homepage
- About, contact, insights, privacy policy, and disclaimer pages
- Six practice-area pages
- Five industry pages
- Every valid insight article from `src/data/insights.ts`

The same manifest will drive prerendering, Vercel rewrites, route validation, and sitemap generation so these surfaces cannot silently drift apart.

The removed practice pages and their two directly associated articles will not appear in the manifest, sitemap, navigation, structured data, or internal links:

- `/practice-areas/trusts-wills-estates`
- `/practice-areas/divorce-family-law`
- `/insights/estate-planning-checklist-for-executives-and-business-owners`
- `/insights/high-net-worth-divorce-legal-and-financial-issues-to-consider`

Those URLs will return HTTP 404 because the firm does not want to present those services and there is no equivalent replacement page. Sitewide titles, descriptions, FAQs, service descriptions, and industry links will be updated to remove estate-planning and family-law claims.

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

## Intake chatbot

An accessible, deterministic intake assistant will be available from every page. It is a guided lead form, not a legal-advice or generative-AI system.

The assistant will:

- Explain that it collects information for consultation review and cannot provide legal advice.
- Collect name, email, phone, practice area, state or jurisdiction, a brief matter description, urgency, and preferred contact method.
- Require acknowledgement that submission does not create an attorney-client relationship and should not include confidential information.
- Submit to the existing `/api/intake` endpoint with `source: chatbot`.
- Show an explicit success or error state and preserve the user's entries when a submission fails.
- Be keyboard accessible, closable, and usable on mobile without obscuring the page.

The existing contact-page intake form will use the same validated submission path and will be repaired so its submit button sends the request. Both channels will email `admin@murraylegalfirm.com` for virtual-assistant follow-up. No automated legal response, engagement decision, or claim of immediate availability will be made.

The intake endpoint will enforce required fields, input-length limits, email validation, the existing honeypot, and a defined source value. It will not log matter descriptions or other intake contents to application logs.

## Attorney profile constraints

No attorney portrait, biography credentials, bar credentials beyond the existing jurisdiction-safe firm disclosures, awards, results, or unverified trust claims will be added. The implementation will preserve this constraint while correcting SEO content.

## Testing strategy

Automated tests will establish the desired behavior before implementation:

- The route manifest includes every valid static and article route exactly once.
- Every redirect source is excluded from the canonical manifest and points to a canonical destination.
- Removed practices and their associated articles are absent from navigation, content data, structured data, sitemap output, and the canonical manifest.
- Unknown article slugs resolve to the Not Found component rather than an existing article.
- Sitemap output exactly matches the canonical indexable manifest.
- The production build generates HTML for every canonical route.
- Every generated HTML file contains its expected canonical, title, robots directive, H1, and rendered content.
- Generated 404 HTML uses `noindex` and does not claim a valid canonical page.
- Vercel configuration has no catch-all rewrite and contains the expected permanent redirects.
- Chatbot and contact-form submissions validate required fields and send the expected intake payload to the shared endpoint.
- The intake endpoint rejects malformed or oversized submissions without exposing their contents in logs.

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
- Removed practice and article URLs return HTTP 404 and are absent from every discovery surface.
- The sitemap and application route inventory agree exactly.
- Both intake interfaces successfully deliver a test submission to the configured administrative inbox in a non-production recipient test or controlled production verification.
- The current sitemap is accepted in Search Console and the obsolete sitemap is removed.
- Google URL Inspection can discover the submitted inner pages, even if Google has not yet completed indexing them.

The historical count of 6,977 excluded URLs is not a completion criterion because Google may retain old exclusions until it recrawls or ages them out.

## Out of scope

- Visual redesign
- Rewriting unrelated legal content
- Migrating to Next.js, Astro, or another framework
- Backlink acquisition or directory submissions
- Guaranteeing Google indexing or rankings
- Removing historical URLs through Search Console's temporary removals tool
