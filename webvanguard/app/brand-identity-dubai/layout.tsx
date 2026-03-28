import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Identity Dubai — Logos & Brand Systems That Build Trust | Web Vanguard',
  description: 'Professional brand identity design in Dubai. Logos, color systems, typography, and brand guidelines that make your business look credible and premium. Built for Dubai businesses.',
  keywords: [
    'brand identity dubai',
    'logo design dubai',
    'branding dubai',
    'brand designer dubai',
    'brand agency dubai',
    'logo designer dubai',
    'brand guidelines dubai',
    'corporate identity dubai',
    'visual identity dubai',
    'brand strategy dubai',
  ],
  authors: [{ name: 'Web Vanguard' }],
  alternates: {
    canonical: 'https://webvanguard.co/brand-identity-dubai',
  },
  openGraph: {
    title: 'Brand Identity Dubai — Logos & Brand Systems That Build Trust | Web Vanguard',
    description: 'Professional brand identity design in Dubai. Logos, color systems, typography, and brand guidelines that make your business look credible and premium.',
    url: 'https://webvanguard.co/brand-identity-dubai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity Dubai — Logos & Brand Systems That Build Trust | Web Vanguard',
    description: 'Professional brand identity design in Dubai. Logos, color systems, and brand guidelines built for Dubai businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}
