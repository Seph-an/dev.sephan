import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServicesContent from "@/components/ServicesContent";
import { siteMetadata } from "@/lib/siteMetadata";

const serviceSections = [
  {
    title: "Web Development Packages",
    description: "Web builds engineered for speed, SEO, and measurable conversion gains.",
    items: ["Landing page", "Full website", "Web app", "E-commerce", "Betting site", "Booking site", "Portfolio site", "Blog CMS"],
  },
  {
    title: "Automation Services",
    description: "Replace manual busywork with resilient automation powered by n8n and API orchestration.",
    items: ["WhatsApp bots", "Browser automations", "Online payment", "Web scraping", "Workflow automation (Zoho, Google, etc.)"],
  },
  {
    title: "AI Services",
    description: "Production-ready AI integrations that align with your data governance and product goals.",
    items: ["AI integration", "RAG setup", "Custom agent", "Internal tools"],
  },
  {
    title: "Search Engine Optimization",
    description: "Holistic SEO programs that align content, technical health, and analytics instrumentation.",
    items: ["Content strategy", "Technical SEO", "On-page SEO", "Off-page SEO", "Google Cloud Console", "Content calendar"],
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure tuned for predictable releases, observability, and cost efficiency.",
    items: ["Docker deployments", "Nginx configuration", "Droplet setup", "CI/CD pipelines"],
  },
  {
    title: "Security & Observability",
    description: "Security-first practices and telemetry baked into every engagement.",
    items: ["HSTS / CSP", "Rate limiting", "Logging & tracing", "Secrets hygiene"],
  },
];

export const metadata: Metadata = {
  title: "Services & capabilities",
  description:
    "Explore Sephan’s service catalog—from high-performance web development to automation, AI integrations, SEO, DevOps, and security.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & capabilities",
    description:
      "Web development, automation, AI, SEO, DevOps, and security services crafted by Sephan for ambitious organizations.",
    url: `${siteMetadata.siteUrl}/services`,
    type: "website",
  },
  twitter: {
    title: "Services & capabilities",
    description:
      "Work with Sephan on web platforms, automation, AI enablement, SEO, DevOps, and security-first delivery.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full-stack web, automation, and AI services",
  provider: {
    "@type": "Person",
    name: siteMetadata.siteAuthor,
    email: siteMetadata.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadata.location.city,
      addressCountry: siteMetadata.location.country,
    },
  },
  areaServed: ["Remote", "On-site Nairobi"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Service catalog",
    itemListElement: serviceSections.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        serviceType: service.title,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesContent sections={serviceSections} />
      <JsonLd data={servicesSchema} />
    </>
  );
}
