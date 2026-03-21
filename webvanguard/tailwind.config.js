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
        bg: '#050505',
        'bg-card': '#0a0a0a',
        'bg-elevated': '#111111',
        accent: '#c8ff00',
        'accent-dim': '#a3cc00',
        'text-primary': '#f5f5f5',
        'text-secondary': '#888888',
        'text-muted': '#444444',
        border: '#1a1a1a',
        'border-hover': '#333333',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'mega': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'hero': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'heading': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': 'clamp(6rem, 15vw, 12rem)',
      },
      transitionDuration: {
        '500': '500ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
