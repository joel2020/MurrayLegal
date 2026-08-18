const ADMIN_EMAIL = 'admin@murraylegalfirm.com';

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
    `Submitted At: ${data.submittedAt || new Date().toISOString()}`,
    `Page URL: ${data.pageUrl || 'Not provided'}`,
  ].join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const contentType = String(req.headers?.['content-type'] || '');
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json.' });
  }

  const data = req.body || {};

  if (data.website) {
    return res.status(200).json({ ok: true });
  }

  const requiredFields = ['name', 'email', 'phone', 'practiceArea', 'jurisdiction', 'matterDescription'];
  const missingFields = requiredFields.filter((key) => !String(data[key] || '').trim());

  if (missingFields.length > 0 || data.consent !== true) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }

  const email = String(data.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const limits = { name: 160, email: 320, phone: 80, company: 240, practiceArea: 160, jurisdiction: 160, urgency: 120, contactMethod: 80, matterDescription: 4000, pageUrl: 1000 };
  if (Object.entries(limits).some(([key, limit]) => String(data[key] || '').length > limit)) {
    return res.status(400).json({ error: 'One or more fields exceed the allowed length.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const submittedAt = data.submittedAt || new Date().toISOString();
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;"><h1 style="color:#0f1f3d;">New Consultation Request</h1><p>A new intake form was submitted on the Murray Legal Firm website.</p><table style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e5e7eb;">${row('Full Name', data.name)}${row('Email', data.email)}${row('Phone', data.phone)}${row('Company / Organization', data.company)}${row('Practice Area', data.practiceArea)}${row('State / Jurisdiction', data.jurisdiction)}${row('Urgency', data.urgency)}${row('Preferred Contact Method', data.contactMethod)}${row('Matter Description', data.matterDescription)}${row('Submitted At', submittedAt)}${row('Page URL / Source', data.pageUrl)}</table></div>`;

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_EMAIL_FROM || 'Murray Legal Firm <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      reply_to: data.email,
      subject: 'New Consultation Request - Murray Legal Firm',
      html,
      text: plainText({ ...data, submittedAt }),
    }),
  });

  if (!emailResponse.ok) {
    console.error('Email send failed:', await emailResponse.text());
    return res.status(502).json({ error: 'Unable to send consultation request.' });
  }

  return res.status(200).json({ ok: true });
}
