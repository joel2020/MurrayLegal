# PRELAUNCH_AUDIT

Date: 2026-04-29

## Website
- **WARNING**: Requested Bravo Mechanical launch-blocker files are not present in this checkout (`src/components/LeadForm.tsx`, `src/lib/site.ts`, HVAC schema in `index.html`, and `public/assets` OG image targets).
- **WARNING**: Repository appears to be Murray Legal site content, not Bravo Mechanical app.
- **PASS**: Added `/llms.txt` with required business facts for LLM crawlers.

## Supabase
- **FAIL**: No Supabase client, edge function bindings, or lead-notification paths were found in this repository snapshot.
- **Manual test required before launch**: Verify `notify-lead` edge function (or webhook fallback) exists in production and receives both owner + customer notification payloads.

## CRM / Lead intake
- **FAIL**: No lead form component or pipeline files found (`LeadForm.tsx` missing).
- **Manual test required before launch**:
  1. Submit a new lead with urgency = Emergency and city populated.
  2. Submit a duplicate lead and verify dedupe/update logic.
  3. Verify owner notification delivery.
  4. Verify customer auto-reply with urgent call-to-action to (914) 361-9142.
  5. Verify notification failure does not block successful lead save.

## Go-live
- **WARNING**: Cannot certify Bravo Mechanical go-live from this checkout due to repository mismatch.
- **Manual verification checklist**:
  1. Confirm canonical URLs are absolute and use `https://bravomechanicalny.com`.
  2. Confirm OG image is dedicated brand image (or documented fallback).
  3. Confirm HVACBusiness schema values match shared site config.
  4. Run production build + lint in the actual Bravo repository.
