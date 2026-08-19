import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BrowserRouter, Link } from '../lib/router';

afterEach(() => vi.restoreAllMocks());

describe('router accessibility', () => {
  it('uses instant hash scrolling when reduced motion is requested', async () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }),
    });
    const scrollIntoView = vi.fn();
    render(
      <BrowserRouter>
        <Link to="/#target">Jump to target</Link>
        <div
          id="target"
          ref={(node) => {
            if (node) Object.defineProperty(node, 'scrollIntoView', { value: scrollIntoView });
          }}
        >
          Target
        </div>
      </BrowserRouter>,
    );

    await userEvent.click(screen.getByRole('link', { name: 'Jump to target' }));

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'auto' }));
  });
});
