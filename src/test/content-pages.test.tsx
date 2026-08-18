import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { BrowserRouter } from '../lib/router';

const renderPath = (path: string): void => {
  window.history.replaceState({}, '', path);
  render(<BrowserRouter><App /></BrowserRouter>);
};

describe('editorial content templates', () => {
  it('renders a structured practice-area page with safe jurisdiction copy', () => {
    renderPath('/practice-areas/corporate-law');
    expect(screen.getByRole('heading', { level: 1, name: /Corporate Law Attorney/i })).toBeInTheDocument();
    expect(screen.getByText('Matters handled')).toBeInTheDocument();
    expect(screen.getByText('How an engagement works')).toBeInTheDocument();
    expect(screen.getAllByText(/currently licensed to practice law in Pennsylvania/i).length).toBeGreaterThan(0);
  });

  it('renders industry priorities and related capabilities', () => {
    renderPath('/industries/businesses-founders');
    expect(screen.getByRole('heading', { level: 1, name: 'Businesses & Founders' })).toBeInTheDocument();
    expect(screen.getByText('Company formation and governance')).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Relevant practice areas' })).toBeInTheDocument();
  });

  it('renders the insight index as an article library', () => {
    renderPath('/insights');
    expect(screen.getByRole('region', { name: 'Insight library' })).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(8);
  });

  it('returns an index-safe 404 for an unknown insight slug', () => {
    renderPath('/insights/not-a-real-article');
    expect(screen.getByRole('heading', { level: 1, name: 'Page Not Found' })).toBeInTheDocument();
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  });

  it('publishes legal notices with substantive sections', () => {
    renderPath('/disclaimer');
    expect(screen.getByRole('heading', { level: 2, name: 'No attorney-client relationship' })).toBeInTheDocument();
    expect(screen.getAllByText(/does not create an attorney-client relationship/i).length).toBeGreaterThan(0);
  });
});
