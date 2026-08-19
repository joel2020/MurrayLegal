import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { JURISDICTION_NOTICE } from '../lib/firm';
import { BrowserRouter } from '../lib/router';

describe('site navigation', () => {
  it('opens and closes the mobile menu with focus restoration', async () => {
    const user = userEvent.setup();
    render(<BrowserRouter><Header /></BrowserRouter>);

    const menuButton = screen.getByRole('button', { name: 'Open navigation' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveFocus();
  });

  it('closes the mobile menu after navigation', async () => {
    const user = userEvent.setup();
    render(<BrowserRouter><Header /></BrowserRouter>);
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile navigation' });
    await user.click(within(mobileNavigation).getByRole('link', { name: 'Corporate Law' }));
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('keeps consultation and verified phone paths in the global header', async () => {
    const user = userEvent.setup();
    render(<BrowserRouter><Header /></BrowserRouter>);

    expect(screen.getAllByRole('link', { name: 'Request a consultation' })
      .some((link) => link.getAttribute('href') === '/contact')).toBe(true);
    expect(screen.getByRole('link', { name: 'Call Murray Legal' })).toHaveAttribute('href', 'tel:+19142141880');

    const persistentMobileCta = screen.getAllByRole('link', { name: 'Request a consultation' })
      .find((link) => link.classList.contains('lg:hidden'));
    expect(persistentMobileCta).toHaveAttribute('href', '/contact');
    expect(persistentMobileCta?.closest('#mobile-navigation')).toBeNull();

    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' });
    expect(mobile.firstElementChild).toHaveAttribute('data-mobile-conversion-actions');
    expect(within(mobile).getByRole('link', { name: 'Request a consultation' })).toBeVisible();
    expect(within(mobile).getByRole('link', { name: 'Call Murray Legal' })).toBeVisible();
  });

  it('publishes complete firm and legal information in the footer', () => {
    render(<BrowserRouter><Footer /></BrowserRouter>);
    expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent?.includes('465 Tuckahoe Road #1246') === true)).toBeInTheDocument();
    expect(screen.getByText((_, element) => element?.tagName === 'P' && element.textContent?.includes('7244 Castor Avenue #1048') === true)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '(914) 214-1880' })).toHaveAttribute('href', 'tel:+19142141880');
    expect(screen.getByRole('link', { name: 'admin@murraylegalfirm.com' })).toHaveAttribute('href', 'mailto:admin@murraylegalfirm.com');
    expect(screen.getByRole('link', { name: 'Disclaimer' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument();
    screen.getAllByRole('link').forEach((link) => {
      expect(link.className).toMatch(/min-h-(11|12)/);
    });
    expect(screen.getByText(JURISDICTION_NOTICE)).toBeInTheDocument();
  });
});
