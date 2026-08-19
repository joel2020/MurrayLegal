import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ActionLink from '../components/ActionLink';
import { BrowserRouter } from '../lib/router';

describe('ActionLink', () => {
  it('renders an internal primary action with the expandable arrow carrier', () => {
    render(<BrowserRouter><ActionLink to="/contact" ariaLabel="Request a consultation">Request a consultation</ActionLink></BrowserRouter>);
    const link = screen.getByRole('link', { name: 'Request a consultation' });
    expect(link).toHaveAttribute('href', '/contact');
    expect(link).toHaveClass('action-link--primary');
    expect(link.querySelector('.action-link__icon')).not.toBeNull();
  });

  it('renders a telephone outline action without changing its destination', () => {
    render(<ActionLink href="tel:+19142141880" ariaLabel="Call Murray Legal" variant="outline">(914) 214-1880</ActionLink>);
    expect(screen.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');
  });
});
