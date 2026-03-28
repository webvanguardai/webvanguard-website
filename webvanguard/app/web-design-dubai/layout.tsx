import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design Dubai — Custom Websites That Win Clients | Web Vanguard',
  description: 'Professional web design in Dubai that converts visitors into paying clients. Fast, SEO-optimized, mobile-first websites built for Dubai businesses. Get a free proposal today.',
  keywords: [
    'web design dubai',
    'website design dubai',
    'web designer dubai',
    'custom website dubai',
    'business website dubai',
    'professional website dubai',
    'web design agency dubai',
    'website development dubai',
    'affordable web design dubai',
    'best web design dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/web-design-dubai',
  },
  openGraph: {
    title: 'Web Design Dubai — Custom Websites That Win Clients | Web Vanguard',
    description: 'Professional web design in Dubai that converts visitors into paying clients. Fast, SEO-optimized, mobile-first websites built for Dubai businesses.',
    url: 'https://webvanguard.co/web-design-dubai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Dubai — Custom Websites That Win Clients | Web Vanguard',
    description: 'Professional web design in Dubai that converts visitors into paying clients.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}
