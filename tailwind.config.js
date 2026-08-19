/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1930',
        navy: '#0b1930',
        'navy-deep': '#081426',
        'navy-mid': '#132641',
        gold: '#b08a32',
        'gold-dark': '#947027',
        'gold-light': '#d0b467',
        'gold-readable': '#806020',
        ivory: '#f7f4ed',
        paper: '#fcfaf5',
        stone: '#e8e2d8',
        'stone-dark': '#b7aea0',
        'text-dark': '#111a28',
        muted: '#68707b',
        'muted-on-stone': '#5c6470',
        control: '#848a93',
        'text-muted': '#68707b',
        'text-faint': '#838996',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Didot', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.15rem, 7vw, 6.75rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.4rem, 4.6vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.9rem, 3.4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.018em' }],
        'display-sm': ['clamp(1.5rem, 2.6vw, 2.2rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '36': '9rem',
      },
      boxShadow: {
        soft: '0 2px 18px rgba(11,25,48,0.07)',
        medium: '0 12px 40px rgba(11,25,48,0.11)',
        strong: '0 24px 70px rgba(11,25,48,0.18)',
        gold: '0 8px 26px rgba(176,138,50,0.24)',
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
