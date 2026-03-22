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
        bg: '#F4F1EC',          // warm off-white / recycled paper
        'bg-card': '#EDE9E2',   // slightly darker warm card
        'bg-elevated': '#E6E1D8', // elevated surfaces
        'bg-dark': '#1C1A17',   // dark sections (not pure black)
        'bg-dark-card': '#252220', // dark cards
        accent: '#FF3B00',
        'accent-dim': '#E03500',
        'accent-light': '#FF5C2B',
        'text-primary': '#1A1814',   // near-black with warmth (not pure #000)
        'text-secondary': '#5A5650',
        'text-muted': '#9A9690',
        'text-on-dark': '#F4F1EC',   // light text for dark sections
        'text-on-dark-muted': '#8A8680',
        border: '#D8D3CB',
        'border-dark': '#302E2A',
        'border-hover': '#B8B3AA',
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
