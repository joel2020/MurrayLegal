import { render, screen } from '@testing-library/react';
import { readFileSync } from 'node:fs';
import type { ReactNode } from 'react';
import { describe, expect, it } from 'vitest';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BrowserRouter } from '../lib/router';

const stylesheet = readFileSync('src/index.css', 'utf8');

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

  it('renders explicit city and solid hero treatments', () => {
    const { rerender } = withRouter(
      <PageHero visual="city" title="Corporate Law" description="Description" />,
    );

    const cityHero = screen.getByRole('region', { name: 'Corporate Law' });
    expect(cityHero).toHaveAttribute('data-hero-visual', 'city');
    const cityPicture = cityHero.querySelector('picture');
    expect(cityPicture).toBeInTheDocument();
    expect(cityPicture?.querySelector('source')).toHaveAttribute(
      'srcset',
      '/images/murray-legal-manhattan.webp',
    );
    const cityImage = cityPicture?.querySelector('img');
    expect(cityImage).toHaveAttribute('src', '/images/murray-legal-manhattan.jpg');
    expect(cityImage).toHaveClass('hero-image');
    expect(stylesheet).toMatch(/\.hero-image\s*{[^}]*filter:\s*grayscale\(1\);/s);
    expect(cityHero.querySelector('[data-hero-overlay]')).toHaveClass(
      'from-navy-deep',
      'via-navy-deep/85',
      'to-navy-deep/60',
    );
    expect(cityHero.querySelector('.border-gold')).toHaveClass('border-l-[5px]', 'border-gold');

    rerender(
      <BrowserRouter>
        <PageHero visual="solid" title="Contact" description="Description" />
      </BrowserRouter>,
    );

    const solidHero = screen.getByRole('region', { name: 'Contact' });
    expect(solidHero).toHaveAttribute('data-hero-visual', 'solid');
    expect(solidHero.querySelector('picture')).not.toBeInTheDocument();
    expect(solidHero.querySelector('[data-hero-overlay]')).toHaveClass('bg-navy-deep');
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
