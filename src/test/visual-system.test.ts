import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const read = (path: string) => readFileSync(resolve(root, path), 'utf8');

describe('NYC visual foundation', () => {
  it('loads the approved fonts and tokens', () => {
    expect(read('index.html')).toContain('family=Bodoni+Moda');
    expect(read('index.html')).toContain('family=Instrument+Sans');
    expect(read('src/index.css')).toContain("font-family: 'Instrument Sans'");
    expect(read('src/index.css')).toContain("font-family: 'Bodoni Moda'");
    expect(read('tailwind.config.js')).toContain("paper: '#fcfaf5'");
    expect(read('tailwind.config.js')).toContain("'navy-mid': '#132641'");
  });

  it('ships efficient responsive grayscale Manhattan sources', () => {
    for (const width of [600, 1200, 2400]) {
      const webp = resolve(root, `public/images/murray-legal-manhattan-${width}.webp`);
      const jpeg = resolve(root, `public/images/murray-legal-manhattan-${width}.jpg`);
      expect(existsSync(webp), `missing ${width}px WebP`).toBe(true);
      expect(existsSync(jpeg), `missing ${width}px JPEG`).toBe(true);
      expect(statSync(webp).size, `${width}px WebP should be at least 10% smaller than JPEG`).toBeLessThan(statSync(jpeg).size * 0.9);
      expect(statSync(webp).size, `${width}px WebP should stay below the previous 1.50MB asset`).toBeLessThan(1_500_000);
    }
  });

  it('renders reusable hero imagery in deterministic grayscale', () => {
    expect(read('src/index.css')).toMatch(/\.hero-image\s*\{[^}]*filter:\s*grayscale\(1\);/);
  });
});
