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
  metadataBase: new URL('https://webvanguard.co'),
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
  authors: [{ name: 'Web Vanguard', url: 'https://webvanguard.co' }],
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
    url: 'https://webvanguard.co',
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
    canonical: 'https://webvanguard.co',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFFFFF',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web Vanguard websites start from AED 1,500 for a single-page launch site, and AED 2,500 for a full multi-page site with SEO, contact form, WhatsApp button, Google Analytics, and Google Maps. No hidden fees. You own 100% of the code.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '48 hours from approval. We build a live working demo of your business first — at no cost — so you can see exactly what you\'re getting before committing. Once approved, your site is live within 48 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a website if I have Instagram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Instagram doesn\'t show up on Google — so customers actively searching for your service in Dubai will never find you. A website captures search traffic 24/7, converts followers into bookings, and gives you data on who\'s visiting and what they want. Instagram is for awareness; your website is where customers convert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you build a website in Arabic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, bilingual Arabic/English websites are available. We build fully RTL-compatible Arabic sites and dual-language experiences for businesses serving both Arabic and English-speaking customers across Dubai and the UAE.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s included in a Web Vanguard website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every website includes mobile-responsive design, WhatsApp button, contact form, local SEO setup, Google Analytics GA4, Google Maps embed, schema markup, fast-loading optimized code, domain setup, and Vercel hosting. You own 100% of your code and domain from day one.',
      },
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Web Vanguard',
  description: 'Dubai-based web design agency that builds high-converting websites for businesses.',
  url: 'https://webvanguard.co',
  logo: 'https://webvanguard.co/logo.png',
  image: 'https://webvanguard.co/og-image.png',
  telephone: '+971501234567',
  email: 'hello@webvanguard.co',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  )
}
