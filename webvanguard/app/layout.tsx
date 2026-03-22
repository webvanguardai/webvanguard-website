import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://webvanguard.ai'),
  title: {
    default: 'Web Vanguard — Web Design & Digital Growth Agency in Dubai',
    template: '%s | Web Vanguard',
  },
  description: 'Dubai-based web design agency that builds high-converting websites for businesses. Custom design, SEO, branding, and analytics to grow your revenue and attract more customers.',
  keywords: [
    'web design dubai',
    'website design agency dubai',
    'business website dubai',
    'seo agency dubai',
    'digital agency dubai',
    'ecommerce website dubai',
    'web development uae',
    'professional website design',
    'small business website dubai',
    'restaurant website dubai',
    'real estate website dubai',
    'corporate website dubai',
    'brand identity dubai',
    'google seo dubai',
    'web vanguard',
  ],
  authors: [{ name: 'Web Vanguard', url: 'https://webvanguard.ai' }],
  creator: 'Web Vanguard',
  publisher: 'Web Vanguard',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://webvanguard.ai',
    title: 'Web Vanguard — Web Design & Digital Growth Agency in Dubai',
    description: 'We build high-converting websites for businesses in Dubai. Custom design, SEO, branding, and analytics.',
    siteName: 'Web Vanguard',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Vanguard — Dubai Web Design Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Vanguard — Web Design Agency in Dubai',
    description: 'High-converting websites for businesses. Design, SEO, branding.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://webvanguard.ai',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFFFFF',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Web Vanguard',
  description: 'Dubai-based web design agency that builds high-converting websites for businesses.',
  url: 'https://webvanguard.ai',
  logo: 'https://webvanguard.ai/logo.png',
  image: 'https://webvanguard.ai/og-image.png',
  telephone: '+971501234567',
  email: 'hello@webvanguard.ai',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2048',
    longitude: '55.2708',
  },
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: ['Web Design', 'SEO', 'Brand Identity', 'Digital Marketing'],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '21:00',
  },
  sameAs: [],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '1',
    bestRating: '5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${playfair.variable} [--sat:env(safe-area-inset-top)]`}>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  )
}
