import { setTimeout as delay } from 'node:timers/promises';
import { afterEach, describe, expect, it, vi } from 'vitest';
// @ts-expect-error The serverless endpoint is intentionally plain JavaScript for Vercel.
import handler from '../../api/intake.js';

const response = () => {
  const res = {
    statusCode: 200,
    body: undefined as unknown,
    headers: {} as Record<string, string>,
    setHeader: vi.fn((key: string, value: string) => { res.headers[key] = value; }),
    status: vi.fn((code: number) => { res.statusCode = code; return res; }),
    json: vi.fn((body: unknown) => { res.body = body; return res; }),
  };
  return res;
};

const validBody = {
  name: 'Jordan Client',
  email: 'jordan@example.com',
  phone: '215-555-0123',
  company: '',
  practiceArea: 'Corporate Law',
  jurisdiction: 'Pennsylvania',
  urgency: '',
  contactMethod: '',
  matterDescription: 'Contract review.',
  pageUrl: 'https://murraylegalfirm.com/contact',
  consent: true,
  website: '',
};

const request = (body: Record<string, unknown> = validBody, headers: Record<string, string> = {}) => ({
  method: 'POST',
  headers: { 'content-type': 'application/json', ...headers },
  body,
});

const expectGenericFailure = (res: ReturnType<typeof response>, status: number): void => {
  expect(res.statusCode).toBe(status);
  expect(res.body).toEqual({ ok: false, error: expect.any(String) });
};

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  delete process.env.RESEND_API_KEY;
});

describe('intake API', () => {
  it('rejects unsupported methods with the generic failure contract', async () => {
    const res = response();
    await handler({ method: 'GET', headers: {}, body: {} }, res);
    expectGenericFailure(res, 405);
    expect(res.headers.Allow).toBe('POST');
  });

  it('rejects non-JSON requests with the generic failure contract', async () => {
    const res = response();
    await handler({ method: 'POST', headers: { 'content-type': 'text/plain' }, body: validBody }, res);
    expectGenericFailure(res, 415);
  });

  it('requires consent and a valid email using the generic failure contract', async () => {
    const res = response();
    await handler(request({ ...validBody, consent: false, email: 'bad' }), res);
    expectGenericFailure(res, 400);
  });

  it.each([
    ['company', 'x'.repeat(241)],
    ['pageUrl', `https://example.com/${'x'.repeat(1000)}`],
    ['website', 'x'.repeat(201)],
  ])('rejects an oversized %s string before delivery', async (field, value) => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const res = response();

    await handler(request({ ...validBody, [field]: value }), res);

    expectGenericFailure(res, 400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('suppresses ordinary honeypot submissions without attempting delivery', async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const res = response();
    await handler(request({ ...validBody, website: 'bot-field.example' }), res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('server-generates submittedAt and ignores a spoofed client timestamp', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-08-19T03:00:00.000Z'));
    process.env.RESEND_API_KEY = 'test-key';
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    const res = response();

    await handler(request({ ...validBody, submittedAt: '1999-01-01T00:00:00.000Z' }), res);

    const outbound = JSON.parse(String(fetchMock.mock.calls[0][1].body)) as { text: string; html: string };
    expect(outbound.text).toContain('Submitted At: 2026-08-19T03:00:00.000Z');
    expect(outbound.text).not.toContain('1999-01-01');
    expect(outbound.html).not.toContain('1999-01-01');
  });

  it('returns a generic missing-configuration response', async () => {
    const res = response();
    await handler(request(), res);
    expectGenericFailure(res, 500);
  });

  it('returns a generic response for an upstream non-2xx without leaking provider detail', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 429, text: vi.fn().mockResolvedValue('provider secret detail') }));
    const res = response();

    await handler(request(), res);

    expectGenericFailure(res, 502);
    expect(JSON.stringify(res.body)).not.toContain('provider secret detail');
  });

  it('returns a generic response when delivery throws', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('socket contained provider detail')));
    const res = response();

    await handler(request(), res);

    expectGenericFailure(res, 502);
    expect(JSON.stringify(res.body)).not.toContain('provider detail');
  });

  it('aborts a stalled delivery and returns a bounded timeout response', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const timeoutSpy = vi.spyOn(globalThis, 'setTimeout').mockImplementation(((callback: TimerHandler) => {
      queueMicrotask(() => {
        if (typeof callback === 'function') callback();
      });
      return 1;
    }) as typeof setTimeout);
    vi.spyOn(globalThis, 'clearTimeout').mockImplementation(() => undefined);
    vi.stubGlobal('fetch', vi.fn((_url: string, options?: RequestInit) => new Promise((_resolve, reject) => {
      options?.signal?.addEventListener('abort', () => reject(Object.assign(new Error('timed out'), { name: 'AbortError' })));
    })));
    const res = response();

    const outcome = await Promise.race([
      handler(request(), res).then(() => 'handled', () => 'rejected'),
      delay(100).then(() => 'hung'),
    ]);

    expect(timeoutSpy).toHaveBeenCalled();
    expect(outcome).toBe('handled');
    expectGenericFailure(res, 504);
  });

  it('applies a conservative best-effort limit per forwarded IP', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const res = response();
      await handler(request(validBody, { 'x-forwarded-for': '203.0.113.42' }), res);
      expect(res.statusCode).toBe(200);
    }

    const limited = response();
    await handler(request(validBody, { 'x-forwarded-for': '203.0.113.42' }), limited);
    expectGenericFailure(limited, 429);
    expect(limited.headers['Retry-After']).toBeDefined();

    const otherIp = response();
    await handler(request(validBody, { 'x-forwarded-for': '198.51.100.9' }), otherIp);
    expect(otherIp.statusCode).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(6);
  });

  it('delivers a validated request without exposing the API key', async () => {
    process.env.RESEND_API_KEY = 'test-key';
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);
    const res = response();
    await handler(request(), res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][1].headers.Authorization).toBe('Bearer test-key');
  });
});
