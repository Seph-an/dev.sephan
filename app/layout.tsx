import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: `${siteMetadata.siteName} · E-commerce Systems Engineer`,
    template: `%s | ${siteMetadata.siteName}`,
  },
  description: siteMetadata.defaultDescription,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.siteAuthor }],
  creator: siteMetadata.siteAuthor,
  publisher: siteMetadata.siteAuthor,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteMetadata.siteName} · ${siteMetadata.brandTagline}`,
    description: siteMetadata.defaultDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Sephan-new.jpg",
        width: 1200,
        height: 1200,
        alt: "Sephan, e-commerce automation and integration engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.siteName} · ${siteMetadata.brandTagline}`,
    description: siteMetadata.defaultDescription,
    images: ["/Sephan-new.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
};

const entitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": siteMetadata.websiteId,
      url: siteMetadata.siteUrl,
      name: siteMetadata.siteName,
      description: siteMetadata.defaultDescription,
      inLanguage: "en",
      publisher: { "@id": siteMetadata.personId },
    },
    {
      "@type": ["Person", "ProfessionalService"],
      "@id": siteMetadata.personId,
      name: siteMetadata.siteAuthor,
      url: siteMetadata.siteUrl,
      image: `${siteMetadata.siteUrl}/Sephan-new.jpg`,
      email: siteMetadata.contactEmail,
      jobTitle: "E-commerce Automation and Integration Engineer",
      description: siteMetadata.defaultDescription,
      sameAs: [siteMetadata.social.github, siteMetadata.social.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: siteMetadata.location.city,
        addressCountry: siteMetadata.location.country,
      },
      areaServed: [
        { "@type": "Country", name: "Kenya" },
        { "@type": "State", name: "Texas" },
        { "@type": "State", name: "Florida" },
        { "@type": "State", name: "Georgia" },
        { "@type": "State", name: "North Carolina" },
        { "@type": "State", name: "Arizona" },
      ],
      knowsAbout: [
        "E-commerce automation",
        "n8n workflow automation",
        "Shopify automation",
        "WooCommerce automation",
        "M-Pesa integrations",
        "API integrations",
      ],
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <WhatsAppWidget />
        <Footer />
        <JsonLd data={entitySchema} />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
