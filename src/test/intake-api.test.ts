import { afterEach, describe, expect, it, vi } from 'vitest';
// @ts-expect-error The serverless endpoint is intentionally plain JavaScript for Vercel.
import handler from '../../api/intake.js';

const response = () => {
  const res = { statusCode: 200, body: undefined as unknown, headers: {} as Record<string, string>, setHeader: vi.fn((key: string, value: string) => { res.headers[key] = value; }), status: vi.fn((code: number) => { res.statusCode = code; return res; }), json: vi.fn((body: unknown) => { res.body = body; return res; }) };
  return res;
};

const validBody = { name: 'Jordan Client', email: 'jordan@example.com', phone: '215-555-0123', practiceArea: 'Corporate Law', jurisdiction: 'Pennsylvania', matterDescription: 'Contract review.', consent: true };

afterEach(() => {
  vi.unstubAllGlobals();
  delete process.env.RESEND_API_KEY;
});

describe('intake API', () => {
  it('rejects non-JSON requests', async () => {
    const res = response();
    await handler({ method: 'POST', headers: { 'content-type': 'text/plain' }, body: validBody }, res);
    expect(res.statusCode).toBe(415);
  });

  it('requires consent and a valid email', async () => {
    const res = response();
    await handler({ method: 'POST', headers: { 'content-type': 'application/json' }, body: { ...validBody, consent: false, email: 'bad' } }, res);
    expect(res.statusCode).toBe(400);
  });

  it('suppresses honeypot submissions without attempting delivery', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const res = response();
    await handler({ method: 'POST', headers: { 'content-type': 'application/json' }, body: { ...validBody, website: 'bot-field.example' } }, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('delivers a validated request without exposing the API key', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    const res = response();
    await handler({ method: 'POST', headers: { 'content-type': 'application/json' }, body: validBody }, res);
    expect(res.statusCode).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][1].headers.Authorization).toBe('Bearer test-key');
  });
});
