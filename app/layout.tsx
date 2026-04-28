import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
    default: `${siteMetadata.siteName} · ${siteMetadata.brandTagline}`,
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.siteName} · ${siteMetadata.brandTagline}`,
    description: siteMetadata.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        <Footer />
      </body>
    </html>
  );
}
