import { existsSync, readFileSync } from 'node:fs';
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

  it('ships local Manhattan hero sources', () => {
    expect(existsSync(resolve(root, 'public/images/murray-legal-manhattan.webp'))).toBe(true);
    expect(existsSync(resolve(root, 'public/images/murray-legal-manhattan.jpg'))).toBe(true);
  });

  it('renders reusable hero imagery in deterministic grayscale', () => {
    expect(read('src/index.css')).toMatch(/\.hero-image\s*\{[^}]*filter:\s*grayscale\(1\);/);
  });
});
