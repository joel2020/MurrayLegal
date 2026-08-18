import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
  document.head.querySelectorAll('[data-schema="murray-legal"]').forEach((node) => node.remove());
});

Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });
