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
  title: 'WebVanguard — Get More Customers With a Website That Works',
  description: 'We create professional websites that attract customers, build trust, and grow your revenue. Based in Dubai, working worldwide.',
  keywords: ['web design dubai', 'business website dubai', 'get more customers online', 'seo dubai', 'professional website'],
  authors: [{ name: 'WebVanguard' }],
  creator: 'WebVanguard',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webvanguard.ai',
    title: 'WebVanguard — Get More Customers With a Website That Works',
    description: 'We create professional websites that attract customers, build trust, and grow your revenue.',
    siteName: 'WebVanguard',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
