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
        background: '#0a0a0a',
        accent: '#1e3a5f',
        'accent-hover': '#c5a059',
        'section-number': '#2a2a2a',
      },
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
        // Keep default sans as Tailwind's default (system fonts)
      },
    },
  },
  plugins: [],
}