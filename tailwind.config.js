/**
 * Structural notes:
 * - Extends theme with a conservative navy/gold palette for legal branding.
 * - Preserves default Tailwind utilities and scans existing project paths.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f1f3d',
        'brand-gold': '#b8972a',
      },
    },
  },
  plugins: [],
};
