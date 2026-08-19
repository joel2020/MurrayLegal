import { render, screen, within } from '@testing-library/react';
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
    const matters = screen.getByText('Business formation').closest('ul');
    expect(matters).not.toBeNull();
    [
      'Business formation',
      'Operating agreements',
      'Shareholder agreements',
      'Vendor and customer contracts',
      'Commercial agreements',
      'Corporate governance',
      'Mergers and acquisitions support',
      'Business disputes',
      'Risk reviews',
      'Contract negotiation',
    ].forEach((matter) => expect(within(matters!).getByText(matter)).toBeInTheDocument());
    expect(within(matters!).queryByText('01')).not.toBeInTheDocument();
    expect(screen.getByText('How an engagement works')).toBeInTheDocument();
    expect(screen.getByText('Initial consultation').closest('li')).toHaveTextContent('01');
    expect(screen.getAllByText(/currently licensed to practice law in Pennsylvania/i).length).toBeGreaterThan(0);
  });

  it('uses Counsel Grid cards for related practice links', () => {
    renderPath('/practice-areas/corporate-law');
    const related = screen.getByRole('region', { name: 'Related practice areas' });
    expect(related.querySelectorAll('[data-counsel-card]')).toHaveLength(2);
    expect(within(related).getByRole('link', { name: 'Explore Civil Litigation' })).toHaveAttribute(
      'href',
      '/practice-areas/civil-litigation',
    );
  });

  it('renders industry priorities and related capabilities', () => {
    renderPath('/industries/businesses-founders');
    expect(screen.getByRole('heading', { level: 1, name: 'Businesses & Founders' })).toBeInTheDocument();
    expect(screen.getByText('Company formation and governance')).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Relevant practice areas' })).toBeInTheDocument();
  });

  it('renders the insight index as an article library', () => {
    renderPath('/insights');
    const library = screen.getByRole('region', { name: 'Insight library' });
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(8);
    expect(within(library).queryByText('01')).not.toBeInTheDocument();
  });

  it('keeps About firm-focused without an attorney portrait', () => {
    renderPath('/about');
    expect(screen.getByRole('heading', { level: 1, name: 'About Murray Legal' })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /attorney|lawyer|counsel|portrait|headshot/i })).not.toBeInTheDocument();
  });

  it('uses a solid, image-free hero for legal documents', () => {
    renderPath('/disclaimer');
    const hero = screen.getByRole('region', { name: 'Disclaimer' });
    expect(hero).toHaveAttribute('data-hero-visual', 'solid');
    expect(hero.querySelector('picture')).not.toBeInTheDocument();
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
