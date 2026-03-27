import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Stella Atelier — Luxury Fashion Boutique Dubai',
  description:
    'Stella Atelier is a luxury fashion boutique in Dubai. Curated collections from international designers and exclusive pieces for the modern woman.',
  keywords:
    'luxury fashion boutique Dubai, designer clothes Dubai, luxury womens fashion UAE, boutique fashion DIFC, high end fashion Dubai',
  openGraph: {
    title: 'Stella Atelier — Luxury Fashion Boutique Dubai',
    description: 'Curated luxury fashion in Dubai. New arrivals, exclusive pieces, private styling.',
    url: 'https://stella-atelier.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stella Atelier — Luxury Fashion Boutique Dubai',
    description: 'Curated luxury fashion in Dubai.',
  },
  alternates: { canonical: 'https://stella-atelier.vercel.app' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Stella Atelier',
  description: 'Luxury fashion boutique in Dubai offering curated international designer collections.',
  url: 'https://stella-atelier.vercel.app',
  telephone: '+971501234567',
  email: 'hello@stellaatelier.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gate Village 4, Level 1',
    addressLocality: 'DIFC, Dubai',
    addressCountry: 'AE',
  },
  openingHours: 'Mo-Su 10:00-22:00',
  priceRange: 'AED 800 – AED 25,000+',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-STELLAATELIER" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-STELLAATELIER');
        `}</Script>
      </head>
      <body style={{ background: '#0C0C0C', color: '#F0EDE8' }}>{children}</body>
    </html>
  );
}
