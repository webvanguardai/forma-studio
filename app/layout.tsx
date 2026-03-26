import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forma Studio — Interior Design Dubai | Luxury Residential & Commercial",
  description:
    "Award-winning interior design studio in Dubai. Specializing in luxury residential, commercial, and hospitality spaces. Space, crafted with precision and soul.",
  keywords: [
    "interior design Dubai",
    "luxury interior design",
    "residential design Dubai",
    "commercial interior design",
    "hospitality design",
    "Dubai interior designer",
    "space planning Dubai",
    "FF&E procurement",
    "DIFC interior design",
    "Downtown Dubai design",
  ],
  openGraph: {
    title: "Forma Studio — Interior Design Dubai",
    description:
      "Award-winning interior design for Dubai's most discerning homes and businesses.",
    url: "https://forma-studio.vercel.app",
    siteName: "Forma Studio",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Forma Studio — Luxury Interior Design Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forma Studio — Interior Design Dubai",
    description:
      "Award-winning interior design for Dubai's most discerning homes and businesses.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Forma Studio",
  url: "https://forma-studio.vercel.app",
  logo: "https://forma-studio.vercel.app/favicon.svg",
  description:
    "Award-winning interior design studio in Dubai specializing in luxury residential, commercial, and hospitality spaces.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
    streetAddress: "Downtown Dubai",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1972,
    longitude: 55.2744,
  },
  telephone: "+971XXXXXXXXX",
  foundingDate: "2016",
  areaServed: "Dubai, UAE",
  priceRange: "$$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-charcoal antialiased">
        {children}
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
