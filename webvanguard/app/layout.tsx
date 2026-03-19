import type { Metadata, Viewport } from 'next'
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
      <body className="antialiased bg-background text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}