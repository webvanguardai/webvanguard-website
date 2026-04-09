import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bella Studio Dubai | Premium Beauty Salon in Discovery Gardens",
  description:
    "Luxury beauty salon in Discovery Gardens, Dubai. Expert hair styling, coloring, balayage, nails, facials, waxing & bridal makeup. Book your transformation today.",
  keywords:
    "salon Dubai, beauty Dubai, hair Dubai, Discovery Gardens salon, balayage Dubai, nails Dubai, facial Dubai, bridal makeup Dubai, hair coloring Dubai, keratin Dubai",
  authors: [{ name: "Bella Studio Dubai" }],
  openGraph: {
    title: "Bella Studio Dubai | Premium Beauty Salon",
    description:
      "Luxury beauty salon in Discovery Gardens, Dubai. Expert hair styling, coloring, nails, facials & bridal makeup.",
    url: "https://bella-studio-dubai.vercel.app",
    siteName: "Bella Studio Dubai",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Bella Studio Dubai - Premium Beauty Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Studio Dubai | Premium Beauty Salon",
    description:
      "Luxury beauty salon in Discovery Gardens, Dubai. Expert hair styling, nails, facials & bridal makeup.",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://bella-studio-dubai.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bella-studio-dubai.vercel.app",
  name: "Bella Studio Dubai",
  description:
    "Premium beauty salon in Discovery Gardens, Dubai offering hair styling, coloring, nails, facials, waxing and bridal makeup services.",
  url: "https://bella-studio-dubai.vercel.app",
  telephone: "+971585324519",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Discovery Gardens",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.0386,
    longitude: 55.1378,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  image:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=630&fit=crop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 Placeholder */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
