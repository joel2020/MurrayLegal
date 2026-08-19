import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PracticeAreaCard from '../components/PracticeAreaCard';
import { practiceAreas } from '../data/practiceAreas';
import { BrowserRouter } from '../lib/router';

const styles = readFileSync(resolve(process.cwd(), 'src/index.css'), 'utf8');

describe('Counsel Grid card', () => {
  it('exposes one destination and keeps all decision content visible', () => {
    render(<BrowserRouter><PracticeAreaCard category="Business" title="Corporate Law" description="Formation, governance, contracts, and strategic transactions." href="/practice-areas/corporate-law" /></BrowserRouter>);

    expect(screen.getByText('Business')).toBeVisible();
    expect(screen.getByRole('heading', { name: 'Corporate Law' })).toBeVisible();
    expect(screen.getByText(/Formation, governance/i)).toBeVisible();
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByRole('link', { name: 'Explore Corporate Law' })).toHaveAttribute('href', '/practice-areas/corporate-law');
    expect(screen.queryByText('01')).not.toBeInTheDocument();
  });

  it('stores the approved factual category for every practice area', () => {
    expect(practiceAreas.map(({ slug, category }) => [slug, category])).toEqual([
      ['corporate-law', 'Business'],
      ['real-estate', 'Property'],
      ['civil-litigation', 'Disputes'],
      ['entertainment-transactions', 'Creative'],
      ['sports-transactions', 'Sports'],
      ['intellectual-property', 'Brands & Rights'],
      ['trusts-wills-estates', 'Private Client'],
      ['divorce-family-law', 'Family'],
    ]);
  });

  it('uses the navy Counsel Grid visual contract', () => {
    expect(styles).toMatch(/\.counsel-section\s*\{[^}]*bg-navy-deep/);
    expect(styles).toMatch(/\.counsel-card\s*\{[^}]*bg-navy-mid/);
    expect(styles).toMatch(/\.counsel-card__content h3\s*\{[^}]*font-display/);
    expect(styles).toMatch(/\.counsel-card:focus-within \.counsel-card__arrow\s*\{[^}]*border-gold[^}]*bg-gold[^}]*text-ink/);
  });
});
