import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PracticeAreaCard from '../components/PracticeAreaCard';
import { BrowserRouter } from '../lib/router';

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
});
