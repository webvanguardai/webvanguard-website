import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Dubai — Get Found on Google & Win More Clients | Web Vanguard',
  description: 'SEO services in Dubai that get your business to page one of Google. Local SEO, content strategy, and technical optimization for Dubai businesses. Results you can measure.',
  keywords: [
    'seo dubai',
    'seo agency dubai',
    'local seo dubai',
    'google ranking dubai',
    'seo services dubai',
    'search engine optimization dubai',
    'seo consultant dubai',
    'digital marketing dubai',
    'google seo dubai',
    'best seo dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/seo-dubai',
  },
  openGraph: {
    title: 'SEO Dubai — Get Found on Google & Win More Clients | Web Vanguard',
    description: 'SEO services in Dubai that get your business to page one of Google. Local SEO, content strategy, and technical optimization for Dubai businesses.',
    url: 'https://webvanguard.co/seo-dubai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Dubai — Get Found on Google & Win More Clients | Web Vanguard',
    description: 'SEO services in Dubai that get your business to page one of Google.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}
