/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-card': '#F8F8F8',
        'bg-elevated': '#F0F0F0',
        accent: '#FF3B00',
        'accent-dim': '#E03500',
        'accent-light': '#FF5C2B',
        'text-primary': '#000000',
        'text-secondary': '#555555',
        'text-muted': '#999999',
        border: '#E0E0E0',
        'border-hover': '#BBBBBB',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        'mega': ['clamp(2.2rem, 8vw, 10rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'hero': ['clamp(2rem, 6vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'heading': ['clamp(1.8rem, 4vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'subheading': ['clamp(1.1rem, 1.8vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        'section': 'clamp(5rem, 12vw, 10rem)',
      },
    },
  },
  plugins: [],
}
