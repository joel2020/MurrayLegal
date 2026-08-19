import { render, screen, waitFor, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '../pages/Home';
import { BrowserRouter } from '../lib/router';

describe('redesigned homepage', () => {
  it('presents the complete conversion hierarchy', () => {
    window.history.replaceState({}, '', '/');
    render(<BrowserRouter><Home /></BrowserRouter>);

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'Serious counsel for consequential matters.' })).toBeInTheDocument();
    expect(screen.getByText('Murray Legal · Yonkers office')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Monochrome view of the Lower Manhattan skyline' })).toBeInTheDocument();
    const consultationLinks = screen.getAllByRole('link', { name: 'Request a consultation' });
    expect(consultationLinks).toHaveLength(2);
    consultationLinks.forEach((link) => expect(link).toHaveAttribute('href', '/contact'));
    expect(screen.getByRole('link', { name: 'Explore the firm' })).toHaveAttribute('href', '/about');

    const practices = screen.getByRole('region', { name: 'Practice areas' });
    expect(within(practices).getAllByRole('article')).toHaveLength(8);
    expect(within(practices).getByRole('link', { name: 'Explore Corporate Law' })).toBeInTheDocument();
    expect(within(practices).queryByText('01')).not.toBeInTheDocument();

    for (const audience of ['Businesses & Founders', 'Real Estate Investors', 'Entertainment Professionals', 'Athletes & Sports Organizations', 'High-Net-Worth Individuals']) {
      expect(screen.getByRole('link', { name: audience })).toBeInTheDocument();
    }

    const insights = screen.getByRole('region', { name: 'Latest insights' });
    expect(within(insights).getAllByRole('article')).toHaveLength(3);
    expect(screen.getAllByRole('button', { name: /^(What|Who|Where)/ })).toHaveLength(3);
    expect(screen.getByText(/serves clients across the United States where permitted by law/i)).toBeInTheDocument();
  });

  it('publishes organization, website, service, and FAQ structured data', async () => {
    render(<BrowserRouter><Home /></BrowserRouter>);
    await waitFor(() => expect(document.head.querySelector('script[data-schema="murray-legal"]')).not.toBeNull());
    const schema = JSON.parse(document.head.querySelector('script[data-schema="murray-legal"]')?.textContent || '{}') as { '@graph': Array<{ '@type': string }> };
    const types = schema['@graph'].map((entry) => entry['@type']);
    expect(types).toEqual(expect.arrayContaining(['Organization', 'WebSite', 'LegalService', 'FAQPage']));
  });
});
