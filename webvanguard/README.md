# WebVanguard - Corporate Website

A premium, minimalist corporate website built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Smooth Framer Motion scroll-triggered reveals and hover effects
- **SEO**: Built-in meta tags, Open Graph, sitemap.xml, robots.txt
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized for Vercel deployment

## Design Specifications

- **Color Palette**:
  - Background: `#0a0a0a` (deep charcoal)
  - Accent: `#1e3a5f` (petroleum blue)
  - Hover Accent: `#c5a059` (muted gold)
- **Typography**:
  - Headings: Clash Display (via Google Fonts)
  - Body: Inter
- **Layout**:
  - Section numbering in huge gray text on left margin
  - Left-aligned hero with bold typography
  - Clean service listings with vertical separators
  - Placeholder work cards
  - Minimal contact form with direct contact details

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build

```bash
# Create production build
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

## Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import the project in [Vercel](https://vercel.com/new):
   - Connect your repository
   - Vercel will automatically detect Next.js and use the optimal configuration
   - Click "Deploy"

3. Once deployed, you'll get a live URL for your site

### Manual Deployment

Build the production bundle:

```bash
npm run build
```

The `.next` folder contains the optimized production build. You can deploy this folder to any Node.js hosting provider.

## Project Structure

```
webvanguard/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles with Tailwind
├── components/             # Reusable React components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SectionNumber.tsx
├── public/                 # Static assets
│   ├── sitemap.xml
│   └── robots.txt
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      background: '#0a0a0a',
      accent: '#1e3a5f',
      'accent-hover': '#c5a059',
      'section-number': '#2a2a2a',
    },
  },
},
```

### Fonts

The project uses Clash Display for headings and Inter for body text via Google Fonts. Update the font import in `app/globals.css` to change fonts.

### Content

All content is defined in the component files within the `components/` directory. Update the text and structure as needed.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

## License

This project is created for WebVanguard. All rights reserved.

## Support

For issues or questions, contact: hello@webvanguard.com