import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beit Al Layl — Modern Lebanese Restaurant Dubai | Downtown",
  description:
    "Modern Lebanese cuisine in the heart of Downtown Dubai. Where Beirut meets the table — family recipes, contemporary execution. Reserve your table today.",
  keywords: [
    "Lebanese restaurant Dubai",
    "modern Lebanese cuisine Downtown Dubai",
    "Beit Al Layl",
    "mezze Dubai",
    "charcoal grill Dubai",
    "Mediterranean restaurant Dubai",
    "Lebanese food Dubai Mall",
    "best Lebanese restaurant Dubai",
    "Downtown Dubai dining",
    "rooftop restaurant Dubai",
  ],
  authors: [{ name: "Beit Al Layl" }],
  creator: "Beit Al Layl",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://beit-al-layl.vercel.app",
    siteName: "Beit Al Layl",
    title: "Beit Al Layl — Modern Lebanese Restaurant Dubai | Downtown",
    description:
      "Modern Lebanese cuisine in the heart of Downtown Dubai. Where Beirut meets the table.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Beit Al Layl — Modern Lebanese Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beit Al Layl — Modern Lebanese Restaurant Dubai | Downtown",
    description:
      "Modern Lebanese cuisine in the heart of Downtown Dubai. Where Beirut meets the table.",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85",
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
    "Modern Lebanese cuisine in Downtown Dubai. Where Beirut meets the table — family recipes, contemporary execution.",
  url: "https://beit-al-layl.vercel.app",
  telephone: "+971XXXXXXXXX",
  image:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=85",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Downtown Dubai",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
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
      opens: "12:00",
      closes: "00:00",
    },
  ],
  servesCuisine: ["Lebanese", "Mediterranean", "Middle Eastern"],
  priceRange: "AED 150–350 per person",
  sameAs: ["https://instagram.com/beitallayldubai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-dm bg-offwhite text-charcoal antialiased">
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
