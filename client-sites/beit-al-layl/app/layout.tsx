import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Beit Al Layl — Lebanese Fine Dining, Downtown Dubai",
  description:
    "Authentic Lebanese cuisine in the heart of Downtown Dubai. Family recipes, premium execution. Open from sundown. Reserve your table at Beit Al Layl.",
  keywords: [
    "Lebanese restaurant Dubai",
    "Arabic restaurant Downtown Dubai",
    "fine dining Lebanese Dubai",
    "Beit Al Layl",
    "Lebanese food Dubai Mall",
    "authentic Lebanese cuisine UAE",
    "mezze Dubai",
    "Arabic fine dining Downtown Dubai",
  ],
  authors: [{ name: "Beit Al Layl" }],
  creator: "Beit Al Layl",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://beitallaylae.com",
    siteName: "Beit Al Layl",
    title: "Beit Al Layl — Lebanese Fine Dining, Downtown Dubai",
    description:
      "Authentic Lebanese cuisine in the heart of Downtown Dubai. Family recipes, premium execution. Open from sundown.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Beit Al Layl — Lebanese Fine Dining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beit Al Layl — Lebanese Fine Dining, Downtown Dubai",
    description:
      "Authentic Lebanese cuisine in the heart of Downtown Dubai. Family recipes, premium execution.",
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Beit Al Layl",
  description:
    "Lebanese fine dining in Downtown Dubai. Family recipes, premium execution. Open from sundown.",
  url: "https://beitallaylae.com",
  telephone: "+97140000000",
  email: "hello@beitllayl.com",
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Downtown Dubai",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1972,
    longitude: 55.2744,
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
      opens: "18:00",
      closes: "02:00",
    },
  ],
  servesCuisine: ["Lebanese", "Arabic", "Middle Eastern"],
  priceRange: "AED 200–400 per person",
  sameAs: ["https://instagram.com/beitallayldubai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </body>
    </html>
  );
}
