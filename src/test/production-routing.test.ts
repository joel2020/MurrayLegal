import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

type VercelConfig = {
  cleanUrls?: boolean;
  rewrites?: Array<{ source: string; destination: string }>;
};

describe('production SPA routing', () => {
  it('uses the clean-URL Vite catch-all so direct and unknown routes reach React', () => {
    const config = JSON.parse(readFileSync('vercel.json', 'utf8')) as VercelConfig;

    expect(config.cleanUrls).toBe(true);
    expect(config.rewrites).toEqual([
      { source: '/(.*)', destination: '/index' },
    ]);
  });
});
