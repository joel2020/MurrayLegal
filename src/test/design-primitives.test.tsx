import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BrowserRouter } from '../lib/router';

function withRouter(children: ReactNode) {
  return render(<BrowserRouter>{children}</BrowserRouter>);
}

describe('design primitives', () => {
  it('renders an accessible breadcrumb trail', () => {
    withRouter(<Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Corporate Law' }]} />);
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Corporate Law')).toHaveAttribute('aria-current', 'page');
  });

  it('renders exactly one page heading in PageHero', () => {
    withRouter(
      <PageHero
        eyebrow="Practice area"
        title="Corporate Law"
        description="Strategic counsel for consequential business decisions."
      />,
    );
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByText('Strategic counsel for consequential business decisions.')).toBeInTheDocument();
  });

  it('renders SectionHeading as an h2 and preserves classes', () => {
    render(<SectionHeading title="Practice Areas" className="custom-heading" />);
    expect(screen.getByRole('heading', { level: 2, name: 'Practice Areas' }).parentElement).toHaveClass('custom-heading');
  });

  it('preserves Container classes and element choice', () => {
    const { container } = render(<Container as="section" className="custom-container">Content</Container>);
    expect(container.querySelector('section')).toHaveClass('custom-container');
  });
});
