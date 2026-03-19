import type { Metadata, Viewport } from 'next'
import Header from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebVanguard - Digital Excellence',
  description: 'WebVanguard is a premium digital agency delivering innovative web solutions with precision and creativity.',
  keywords: ['WebVanguard', 'digital agency', 'web development', 'design', 'innovation'],
  authors: [{ name: 'WebVanguard' }],
  creator: 'WebVanguard',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webvanguard.com',
    title: 'WebVanguard - Digital Excellence',
    description: 'WebVanguard is a premium digital agency delivering innovative web solutions with precision and creativity.',
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
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-white min-h-screen font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}