import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'WebVanguard — AI-Powered Web Design Agency',
  description: 'We design and build high-performance websites for businesses in Dubai and beyond. Strategy, design, development, SEO — all powered by AI.',
  keywords: ['web design dubai', 'ai web agency', 'web development', 'seo dubai', 'digital agency'],
  authors: [{ name: 'WebVanguard' }],
  creator: 'WebVanguard',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webvanguard.ai',
    title: 'WebVanguard — AI-Powered Web Design Agency',
    description: 'We design and build high-performance websites for businesses in Dubai and beyond.',
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
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
