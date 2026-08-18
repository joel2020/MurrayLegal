import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';
import { BrowserRouter } from '../lib/router';

const renderPath = async (path: string): Promise<void> => {
  window.history.replaceState({}, '', path);
  render(<BrowserRouter><App /></BrowserRouter>);
  await waitFor(() => expect(document.title).toContain('Murray Legal'));
};

describe('SEO and structured data', () => {
  it('publishes one complete metadata set for the homepage', async () => {
    await renderPath('/');
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://murraylegalfirm.com/');
    const schema = JSON.parse(document.querySelector('script[data-schema="murray-legal"]')?.textContent || '{}');
    expect(schema['@graph'].map((item: { '@type': string }) => item['@type'])).toEqual(expect.arrayContaining(['Organization', 'WebSite', 'LegalService', 'FAQPage']));
    expect(JSON.stringify(schema)).toContain('Pennsylvania');
  });

  it('canonicalizes a legacy practice alias', async () => {
    await renderPath('/business-attorney');
    expect(screen.getByRole('heading', { level: 1, name: /Corporate Law Attorney/i })).toBeInTheDocument();
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://murraylegalfirm.com/practice-areas/corporate-law');
  });

  it('marks unknown paths as noindex while allowing link discovery', async () => {
    await renderPath('/insights/unknown-briefing');
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  });
});
