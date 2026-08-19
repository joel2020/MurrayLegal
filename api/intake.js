const ADMIN_EMAIL = 'admin@murraylegalfirm.com';
const DELIVERY_TIMEOUT_MS = 8_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_MAX_BUCKETS = 1_000;

const stringLimits = {
  name: 160,
  email: 320,
  phone: 80,
  company: 240,
  practiceArea: 160,
  jurisdiction: 160,
  urgency: 120,
  contactMethod: 80,
  matterDescription: 4_000,
  pageUrl: 1_000,
  website: 200,
};

const rateLimitBuckets = new Map();

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function row(label, value) {
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;color:#0f1f3d;width:220px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;">${escapeHtml(value || 'Not provided')}</td></tr>`;
}

function plainText(data) {
  return [
    'New Consultation Request - Murray Legal Firm',
    '',
    `Name: ${data.name || 'Not provided'}`,
    `Email: ${data.email || 'Not provided'}`,
    `Phone: ${data.phone || 'Not provided'}`,
    `Company: ${data.company || 'Not provided'}`,
    `Practice Area: ${data.practiceArea || 'Not provided'}`,
    `State / Jurisdiction: ${data.jurisdiction || 'Not provided'}`,
    `Urgency: ${data.urgency || 'Not provided'}`,
    `Preferred Contact Method: ${data.contactMethod || 'Not provided'}`,
    `Matter Description: ${data.matterDescription || 'Not provided'}`,
    `Submitted At: ${data.submittedAt}`,
    `Page URL: ${data.pageUrl || 'Not provided'}`,
  ].join('\n');
}

function fail(res, status, error) {
  return res.status(status).json({ ok: false, error });
}

function normalizeBody(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  const normalized = {};
  for (const [key, limit] of Object.entries(stringLimits)) {
    const value = body[key] ?? '';
    if (typeof value !== 'string' || value.length > limit) return null;
    normalized[key] = value;
  }
  normalized.consent = body.consent === true;
  return normalized;
}

function clientIp(req) {
  const forwarded = req.headers?.['x-forwarded-for'];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  if (typeof value === 'string' && value.trim()) return value.split(',')[0].trim();

  const realIp = req.headers?.['x-real-ip'];
  if (typeof realIp === 'string' && realIp.trim()) return realIp.trim();

  const socketIp = req.socket?.remoteAddress;
  return typeof socketIp === 'string' && socketIp.trim() ? socketIp.trim() : null;
}

function rateLimit(req, res) {
  const ip = clientIp(req);
  if (!ip) return false;

  const now = Date.now();
  const current = rateLimitBuckets.get(ip);
  const bucket = !current || now - current.startedAt >= RATE_LIMIT_WINDOW_MS
    ? { count: 0, startedAt: now }
    : current;

  if (bucket.count >= RATE_LIMIT_MAX) {
    const remainingMs = Math.max(1_000, RATE_LIMIT_WINDOW_MS - (now - bucket.startedAt));
    res.setHeader('Retry-After', String(Math.ceil(remainingMs / 1_000)));
    return true;
  }

  bucket.count += 1;
  rateLimitBuckets.set(ip, bucket);

  if (rateLimitBuckets.size > RATE_LIMIT_MAX_BUCKETS) {
    for (const [key, value] of rateLimitBuckets) {
      if (now - value.startedAt >= RATE_LIMIT_WINDOW_MS) rateLimitBuckets.delete(key);
    }
  }

  return false;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return fail(res, 405, 'Method not allowed.');
  }

  const contentType = String(req.headers?.['content-type'] || '');
  if (!contentType.toLowerCase().includes('application/json')) {
    return fail(res, 415, 'Content-Type must be application/json.');
  }

  const data = normalizeBody(req.body);
  if (!data) {
    return fail(res, 400, 'One or more fields are invalid or exceed the allowed length.');
  }

  if (data.website) {
    return res.status(200).json({ ok: true });
  }

  const requiredFields = ['name', 'email', 'phone', 'practiceArea', 'jurisdiction', 'matterDescription'];
  const missingFields = requiredFields.filter((key) => !data[key].trim());
  if (missingFields.length > 0 || !data.consent) {
    return fail(res, 400, 'Please complete all required fields.');
  }

  const email = data.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail(res, 400, 'Please enter a valid email address.');
  }

  if (rateLimit(req, res)) {
    return fail(res, 429, 'Too many consultation requests. Please wait before trying again.');
  }

  if (!process.env.RESEND_API_KEY) {
    return fail(res, 500, 'The consultation service is temporarily unavailable.');
  }

  const submittedAt = new Date().toISOString();
  const deliveryData = { ...data, email, submittedAt };
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;"><h1 style="color:#0f1f3d;">New Consultation Request</h1><p>A new intake form was submitted on the Murray Legal Firm website.</p><table style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e5e7eb;">${row('Full Name', deliveryData.name)}${row('Email', deliveryData.email)}${row('Phone', deliveryData.phone)}${row('Company / Organization', deliveryData.company)}${row('Practice Area', deliveryData.practiceArea)}${row('State / Jurisdiction', deliveryData.jurisdiction)}${row('Urgency', deliveryData.urgency)}${row('Preferred Contact Method', deliveryData.contactMethod)}${row('Matter Description', deliveryData.matterDescription)}${row('Submitted At', deliveryData.submittedAt)}${row('Page URL / Source', deliveryData.pageUrl)}</table></div>`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DELIVERY_TIMEOUT_MS);

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_EMAIL_FROM || 'Murray Legal Firm <onboarding@resend.dev>',
        to: ADMIN_EMAIL,
        reply_to: deliveryData.email,
        subject: 'New Consultation Request - Murray Legal Firm',
        html,
        text: plainText(deliveryData),
      }),
      signal: controller.signal,
    });

    if (!emailResponse.ok) {
      console.error('Intake email delivery returned a non-success status.', emailResponse.status);
      return fail(res, 502, 'Unable to send consultation request.');
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    const timedOut = controller.signal.aborted || (error instanceof Error && error.name === 'AbortError');
    console.error(timedOut ? 'Intake email delivery timed out.' : 'Intake email delivery failed.');
    return fail(
      res,
      timedOut ? 504 : 502,
      timedOut ? 'The consultation request timed out. Please try again.' : 'Unable to send consultation request.',
    );
  } finally {
    clearTimeout(timeout);
  }
}
