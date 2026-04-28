/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f1f3d',
        'navy-deep': '#091429',
        'navy-mid': '#162848',
        gold: '#b8972a',
        'gold-dark': '#9e7e1f',
        'gold-light': '#d4b84a',
        ivory: '#f8f6f1',
        stone: '#ede9e2',
        'stone-dark': '#d8d3c9',
        'text-dark': '#1a1a1a',
        'text-muted': '#5c5c5c',
        'text-faint': '#9a9a9a',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 5vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem, 4vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.005em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '36': '9rem',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(15,31,61,0.07)',
        medium: '0 4px 24px rgba(15,31,61,0.10)',
        strong: '0 8px 48px rgba(15,31,61,0.14)',
        gold: '0 4px 20px rgba(184,151,42,0.25)',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
      },
      letterSpacing: {
        'widest-2': '0.18em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
