import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServicesContent from "@/components/ServicesContent";
import { siteMetadata } from "@/lib/siteMetadata";

const serviceSections = [
  {
    title: "Web Development Packages",
    description: "Web builds engineered for speed, SEO, and measurable conversion gains.",
    items: ["Landing page", "Full website", "Web app", "E-commerce", "Betting site", "Booking site", "Portfolio site", "Blog CMS"],
    evidence: { label: "View Gap Recruitment build", href: "/case-studies/gap-recruitment-full-stack" }
  },
  {
    title: "Automation Services",
    description: "Replace manual busywork with resilient automation powered by n8n and API orchestration.",
    items: ["WhatsApp bots", "Browser automations", "Online payment", "Web scraping", "Workflow automation (Zoho, Google, etc.)"],
    evidence: { label: "View n8n workflow system", href: "/case-studies/n8n-workflow-automation-systems" }
  },
  {
    title: "AI Services",
    description: "Production-ready AI integrations that align with your data governance and product goals.",
    items: ["AI integration", "RAG setup", "Custom agent", "Internal tools"],
    evidence: { label: "View Postiz automation", href: "/case-studies/postiz-social-media-automation" }
  },
  {
    title: "Search Engine Optimization",
    description: "Holistic SEO programs that align content, technical health, and analytics instrumentation.",
    items: ["Content strategy", "Technical SEO", "On-page SEO", "Off-page SEO", "Google Cloud Console", "Content calendar"],
    evidence: { label: "View Strapi SEO case study", href: "/case-studies/strapi-headless-cms-creative-autonomy" }
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure tuned for predictable releases, observability, and cost efficiency.",
    items: ["Docker deployments", "Nginx configuration", "Droplet setup", "CI/CD pipelines"],
    evidence: { label: "View Coolify PaaS setup", href: "/case-studies/coolify-private-paas-orchestration" }
  },
  {
    title: "Security & Observability",
    description: "Security-first practices and telemetry baked into every engagement.",
    items: ["HSTS / CSP", "Rate limiting", "Logging & tracing", "Secrets hygiene"],
    evidence: { label: "View Urbanac security setup", href: "/case-studies/urbanac-cleaning-one-pager" }
  },
];

export const metadata: Metadata = {
  title: "Engineering Services and Technical Capabilities",
  description:
    "Advanced technical services including high-performance API integrations, automation workflows, SEO optimization, and secure DevOps systems.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Engineering Services and Technical Capabilities",
    description:
      "Specialized engineering services for high-volume automation, resilient API integrations, and secure infrastructure management.",
    url: `${siteMetadata.siteUrl}/services`,
    type: "website",
  },
  twitter: {
    title: "Engineering Services and Technical Capabilities",
    description:
      "Specialized engineering services for high-volume automation, resilient API integrations, and secure infrastructure management.",
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
