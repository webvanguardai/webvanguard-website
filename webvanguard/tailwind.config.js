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
        bg: '#0A0A0A',
        'bg-card': '#111111',
        'bg-elevated': '#181818',
        accent: '#D4956B',
        'accent-dim': '#B87D56',
        'accent-light': '#E8B08A',
        'text-primary': '#F2F2F2',
        'text-secondary': '#8A8A8A',
        'text-muted': '#4A4A4A',
        border: '#1E1E1E',
        'border-hover': '#333333',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      fontSize: {
        'mega': ['clamp(4.5rem, 13vw, 12rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        'hero': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'heading': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': 'clamp(6rem, 15vw, 12rem)',
      },
    },
  },
  plugins: [],
}
