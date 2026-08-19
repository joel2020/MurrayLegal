import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { practiceAreas } from '../data/practiceAreas';
import { BrowserRouter } from '../lib/router';

const routes: Array<[path: string, heading: RegExp]> = [
  ['/', /Serious counsel for consequential matters/i],
  ['/insights', /Legal Insights/i],
  ['/blog', /Legal Insights/i],
  ['/insights/business-contract-red-flags-executives-should-review-before-signing', /Business Contract Red Flags/i],
  ['/about', /About Murray Legal/i],
  ['/contact', /Schedule a Consultation/i],
  ['/disclaimer', /Disclaimer/i],
  ['/privacy-policy', /Privacy Policy/i],
  ['/practice-areas/corporate-law', /Corporate Law Attorney/i],
  ['/practice-areas/real-estate', /Real Estate Attorney/i],
  ['/practice-areas/civil-litigation', /Civil Litigation Attorney/i],
  ['/practice-areas/entertainment-transactions', /Entertainment Lawyer/i],
  ['/practice-areas/sports-transactions', /Sports Lawyer/i],
  ['/practice-areas/intellectual-property', /Intellectual Property Attorney/i],
  ['/practice-areas/trusts-wills-estates', /Estate Planning Attorney/i],
  ['/practice-areas/divorce-family-law', /Divorce Attorney/i],
  ['/industries/businesses-founders', /Businesses & Founders/i],
  ['/industries/real-estate-investors', /Real Estate Investors/i],
  ['/industries/entertainment-professionals', /Entertainment Professionals/i],
  ['/industries/athletes-sports-organizations', /Athletes & Sports Organizations/i],
  ['/industries/high-net-worth-individuals', /High-Net-Worth Individuals/i],
  ['/real-estate-attorney', /Real Estate Attorney/i],
  ['/corporate-law', /Corporate Law Attorney/i],
  ['/civil-litigation', /Civil Litigation Attorney/i],
  ['/business-attorney', /Corporate Law Attorney/i],
  ['/contract-disputes', /Civil Litigation Attorney/i],
  ['/missing-route', /Page Not Found/i],
];

describe('public route contract', () => {
  it.each(routes)('renders %s with its page heading', (path, heading) => {
    window.history.replaceState({}, '', path);
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });

  it.each(practiceAreas.flatMap((area) => area.legacyPaths.map((path) => [path, area.heroHeadline] as const)))(
    'derives legacy practice alias %s from practice-area data',
    (path, heading) => {
      window.history.replaceState({}, '', path);
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      );

      expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    },
  );
});
