# Murray Legal NYC Visual Revision

**Date:** 2026-08-18

**Status:** User-approved design; awaiting written-spec review

**Primary reference:** [A. Vaughn Law](https://avaughnlaw.com/) for its strong city presence, high-contrast legal presentation, image-led hierarchy, and decisive calls to action. Murray Legal will not copy its branding, content, or composition verbatim.

**Component reference:** 21st.dev's [expandable-icon button](https://21st.dev/community/components/jakobhoeg/button) and [hover-card](https://21st.dev/community/components/ui-layouts/card-hover/default) patterns, adapted to Murray Legal's visual language rather than installed as an opaque dependency.

## Relationship to the Existing Redesign

This document revises the visual direction in `2026-08-18-murray-legal-full-site-redesign-design.md`. It does not replace that specification's information architecture, content boundaries, route coverage, SEO requirements, intake behavior, accessibility requirements, or legal safeguards.

The implementation will update the already-built React/Vite site on the current redesign branch. It will preserve working behavior and substantive content while replacing the warm editorial presentation with the approved Downtown NYC visual system.

## Objective

Make Murray Legal immediately read as a sophisticated New York City–area law firm: metropolitan, decisive, modern, and credible. The experience must feel firm-focused rather than centered on a single attorney. It must use a strong Manhattan visual identity without suggesting that the firm or an attorney is licensed in New York when the verified licensing language identifies Pennsylvania.

Success means that the full route set shares one unmistakable visual system, the homepage achieves the city-forward impact of the reference site, and modern interface details improve usability without making the firm look like a technology startup.

## Approved Creative Direction

The selected direction is **Downtown Litigation with Counsel Grid components**:

- Full-bleed, monochrome Manhattan photography establishes place and authority.
- A deep navy hero panel creates a hard-edged editorial frame over the image.
- A narrow brass-gold architectural edge anchors the panel and becomes the recurring signature detail.
- Bodoni Moda provides high-contrast display typography; Instrument Sans handles navigation, body copy, controls, and metadata.
- Paper white and warm ivory replace stark white in reading areas.
- Modern expandable-arrow buttons and dossier-style practice cards provide interaction without excessive effects.
- The brand remains firm-focused. No fabricated attorney portrait, biography, credential, award, result, testimonial, or team photography will be introduced.

## Visual Tokens

### Color

- **Midnight Navy — `#0B1930`:** primary dark field, hero panels, footer, navigation overlay, and major practice sections.
- **Harbor Navy — `#132641`:** raised cards and secondary dark surfaces.
- **Brass Gold — `#B08A32`:** primary actions, architectural rules, monogram outline, focus accents, and selected states.
- **Light Brass — `#D0B467`:** labels and supporting details on navy where it passes required contrast.
- **Warm Ivory — `#F7F4ED`:** alternate content sections and quiet callouts.
- **Paper White — `#FCFAF5`:** header and primary reading surfaces.
- **Ink — `#111A28`:** body text on light surfaces.
- **Slate — `#68707B`:** supporting text on light surfaces, subject to contrast verification.

Electric blue is removed. Gradients may only be used as restrained photographic overlays for text legibility, not as decorative color effects.

### Typography

- **Display:** Bodoni Moda, weights 500 and 600, used for the wordmark, page titles, section headlines, and practice-card titles.
- **Body and utility:** Instrument Sans, weights 400 through 700, used for paragraphs, navigation, buttons, form controls, captions, and metadata.
- Headlines use tight but readable line height and balanced wrapping. Body content uses comfortable leading and a controlled reading width.
- Font loading must include resilient fallbacks and only the required weights. Text must remain readable while webfonts load or if they fail.

### Shape, Lines, and Elevation

- Major panels and cards use square or nearly square corners. The visual identity should feel architectural rather than soft or app-like.
- The circular arrow carrier inside the primary button is the main rounded element.
- Gold rules encode structure: the hero panel edge, section markers, selected states, and focus accents.
- Shadows are reserved for large photographic overlays and navigation elevation. Practice cards rely on border and tonal contrast rather than floating shadows.

## Global Page System

### Header and Navigation

Desktop uses a paper-white header with the Bodoni wordmark, a thin gold-outlined monogram, restrained uppercase Instrument Sans navigation, and a consultation action. The header may compact on scroll while preserving target size and focus visibility.

Mobile uses a clear menu control and a navy navigation surface. The consultation action remains visible without crowding the viewport. Current-route, expanded-menu, keyboard, and screen-reader states remain explicit.

### Footer

The footer uses midnight navy, paper-white typography, brass-gold section labels, and clear route groupings. It retains verified contact information, office addresses, jurisdiction language, disclaimer and privacy links, and the non-engagement notice.

### Interior Heroes

The homepage receives the largest Manhattan image treatment. Interior pages use shorter monochrome NYC or architectural hero strips with a navy overlay, a gold edge or rule, a Bodoni title, and concise contextual copy. Image treatments must never obscure breadcrumbs, titles, or calls to action.

Legal pages and form-heavy pages may use a typography-led navy hero rather than forcing decorative photography where it does not serve the content.

## Homepage Composition

1. **Header:** paper-white navigation with the firm mark and consultation path.
2. **City hero:** full-bleed monochrome Manhattan image with a left-aligned navy panel, gold architectural edge, firm-location label, headline, supporting statement, and two actions. The approved label is “Murray Legal · Yonkers office,” the headline is “Serious counsel for consequential matters,” and the supporting statement is “Strategic legal advice for businesses, investors, executives, creators, athletes, families, and private clients.” The primary action is “Request a consultation”; the secondary action is “Explore the firm.”
3. **Firm statement:** ivory or paper-white section explaining the firm's direct, strategic approach.
4. **Practice section:** midnight-navy field containing the Counsel Grid cards.
5. **Audience and positioning:** structured light section for the verified client groups and matters the firm serves.
6. **Insights:** selective articles presented with disciplined editorial typography and consistent metadata.
7. **Consultation close:** a decisive ivory or navy call-to-action section with accurate engagement expectations.
8. **Footer:** firm, route, contact, and jurisdiction information.

The hero is the visual thesis. It should create immediate metropolitan identity without adding decorative metrics, unsupported credibility claims, or generic legal symbols.

## Counsel Grid Component System

### Primary Button

The primary action uses a brass-gold rectangular body with navy text and an inset circular navy arrow carrier. On hover, the arrow moves slightly in the action direction. Focus uses a clearly visible outline independent of the hover effect. The control remains at least 44 pixels tall and exposes the same accessible name in every state.

### Secondary Button

The secondary action uses a transparent or tonal background with a clear border. On dark surfaces it uses paper-white text and a restrained light border; hover shifts the border and text toward light brass. It must remain visually subordinate to the primary action.

### Practice Card

Each card uses Harbor Navy over Midnight Navy, a subtle border, a factual category label, a Bodoni practice title, a concise description, and a top-right square arrow control. Hover slightly raises or changes the card tone and turns the arrow carrier gold. The arrow may rotate or shift once, but the transition must remain short and restrained.

Cards are links with one destination and one accessible name. All information remains visible without hovering. Touch devices receive the same content and a static affordance. The grid does not use decorative sequence numbers because practice areas are not sequential steps.

### Other Cards and Links

Industry and insight cards reuse the same border, label, title, and arrow grammar while adjusting density for their content type. They should not clone the practice-card dimensions when that harms article scanning or mobile reading.

## Page Templates

### Practice and Industry Pages

Use the shared interior hero, a readable paper-white content column, navy service bands, related Counsel Grid links, and a consultation close. Existing canonical routes and content data remain authoritative. Related-card labels describe real categories rather than decorative groupings.

### About

Present a firm narrative: approach, clients served, breadth of counsel, and engagement principles. Do not create an attorney-profile layout unless the client later supplies verified biography and portrait assets. Until then, city and architectural imagery support the brand without standing in for a person.

### Insights

Use Bodoni headlines, Instrument Sans metadata and body text, controlled reading width, related-content navigation, and restrained consultation prompts. Articles retain their current metadata, canonical behavior, and substantive content.

### Contact and Intake

Apply the new visual system without changing the existing submission contract. Form controls use paper-white fields, navy text, gold focus indicators, explicit labels, and modern primary/secondary actions. Loading, validation, success, and recoverable failure states remain visible and announced appropriately. User-entered information remains available after recoverable errors.

### Legal and Error Pages

Use the shared shell and typography without reducing readability. The Pennsylvania licensing and jurisdiction language stays accurate and reasonably prominent. The branded 404 retains direct recovery links.

## Imagery

- Use original, licensed, or properly attributed stock imagery suitable for production.
- Prefer Manhattan skyline, downtown streetscape, stone, steel, glass, and architectural geometry.
- Convert hero imagery to optimized AVIF or WebP with an appropriate fallback and declared dimensions.
- Apply monochrome treatment and navy overlays in CSS or during asset preparation.
- Higgsfield or another generator may be used only if the result appears authentic, has no text or logos, includes no recognizable public figure, and is exported as a stable optimized image.
- Do not copy imagery from the reference site.
- Essential content and actions must remain complete if an image fails to load.

## Content and Legal Accuracy

- Preserve `src/lib/firm.ts` as the source of verified firm identity, addresses, contact details, and jurisdiction language.
- Preserve existing practice, industry, and insight data as the content source of truth.
- Refer to the Yonkers office factually. Do not state or imply New York bar admission.
- Keep the verified Pennsylvania licensing and multi-jurisdiction coordination language visible where the existing site requires it.
- Do not add testimonials, client logos, ratings, rankings, case outcomes, monetary results, awards, years of experience, or credentials without client-supplied verification.

## Technical and Interaction Boundaries

- Remain within the existing React 18, TypeScript, Vite, Tailwind, and custom-router architecture.
- Adapt the approved 21st.dev interaction patterns into local, reviewable components. Do not add a runtime dependency or component package unless implementation planning demonstrates a specific need.
- Preserve existing routes, legacy aliases, SEO metadata, structured data, sitemap behavior, and `/api/intake` contract.
- Use semantic links for navigation and buttons for actions.
- Keep motion to transform, color, border, and opacity changes that do not trigger disruptive layout movement.
- Respect `prefers-reduced-motion`; interaction meaning cannot depend on animation.

## Responsive and Accessibility Requirements

- Verify intentional layouts near 375, 768, 1024, and 1440 pixels with no horizontal overflow.
- The hero panel becomes an inset or stacked panel on narrow screens without covering the skyline's useful focal area.
- Counsel Grid uses four columns where space permits, two columns at intermediate widths, and one column on narrow phones.
- Navigation, buttons, cards, forms, and disclosure controls remain keyboard-operable with visible focus.
- Text, labels, borders, and focus states must satisfy WCAG 2.2 AA contrast expectations in their actual states.
- Touch targets are at least 44 by 44 pixels where practical.
- Heading order, landmarks, accessible names, validation announcements, alternative text, and reduced-motion behavior remain correct.

## Error and Fallback States

- Webfont failure uses defined fallbacks without clipping or overlapping text.
- Hero-image failure leaves a complete navy hero with readable text and actions.
- Mobile-menu and dropdown failures must not hide the primary navigation from keyboard users.
- Intake validation identifies affected fields and announces errors.
- Network failures preserve entries and offer verified phone and email alternatives.
- Successful intake clears sensitive fields only after server confirmation.
- Unknown routes render the branded 404 with recovery actions.

## Verification Gates

1. `npm run typecheck`, `npm run lint`, the relevant test command, and `npm run build` succeed.
2. Homepage, representative practice, industry, insight, About, Contact, legal, and 404 routes receive desktop and mobile visual checks.
3. Header, mobile navigation, Counsel Grid links, buttons, internal routing, form controls, and contact links work with keyboard and pointer input.
4. Hover, focus, active, disabled, loading, validation, success, error, image-fallback, font-fallback, and reduced-motion states are checked.
5. Titles, descriptions, canonical URLs, robots behavior, sitemap output, and JSON-LD remain correct for representative routes.
6. No unsupported claim or invented credential appears. Pennsylvania licensing language remains accurate and visible.
7. No horizontal overflow, clipped focus rings, illegible overlay text, inaccessible touch-only interaction, or layout shift from fonts and images remains.
8. Final screenshots at desktop and mobile widths are saved under `artifacts/site-audit/` for the homepage and representative internal pages.
9. The completed implementation is compared visually with the approved Counsel Grid mockup and checked for consistent tokens across the route set.

## Completion Standard

The revision is complete when Murray Legal presents one firm-focused, metropolitan identity across the entire site; the homepage delivers an immediate NYC sense of place; the navy, brass, ivory, Bodoni, Instrument Sans, and Counsel Grid system is consistently implemented; all existing functionality and legal safeguards remain intact; and the technical, responsive, accessibility, SEO, intake, and visual verification gates pass.
