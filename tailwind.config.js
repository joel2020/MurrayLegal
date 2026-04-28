export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f1f3d',
        gold: '#b8972a',
        ivory: '#f8f6f1',
        stone: '#e8e4dc',
        'text-dark': '#1a1a1a',
        'text-muted': '#6b6b6b',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 31, 61, 0.08)',
      },
    },
  },
  plugins: [],
};
