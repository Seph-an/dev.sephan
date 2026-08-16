import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ServicesContent from "@/components/ServicesContent";
import { siteMetadata } from "@/lib/siteMetadata";

const serviceSections = [
  {
    title: "E-commerce Operations Automation",
    description: "Connect the operational flow from checkout through payment, inventory, fulfilment, customer communication and reporting.",
    items: ["Order routing", "Inventory sync", "Fulfilment", "CRM", "Accounting", "Reporting"],
    evidence: { label: "Explore Kenya automation", href: "/ke/ecommerce-automation" }
  },
  {
    title: "n8n Workflow Engineering",
    description: "Design and self-host maintainable n8n automations with validation, retries, alerts, recovery and handover.",
    items: ["n8n hosting", "Workflow design", "API orchestration", "Monitoring", "Runbooks"],
    evidence: { label: "Explore n8n automation", href: "/services/n8n-ecommerce-automation" }
  },
  {
    title: "M-Pesa Commerce Integration",
    description: "Implement payment initiation, callbacks, order state, reconciliation and production recovery for Kenyan stores.",
    items: ["Daraja", "STK Push", "Callbacks", "Reconciliation", "Payment status"],
    evidence: { label: "Explore M-Pesa integration", href: "/ke/mpesa-ecommerce-integration" }
  },
  {
    title: "Shopify Automation",
    description: "Connect Shopify to the ERP, POS, 3PL, CRM, accounting, support and reporting tools behind the store.",
    items: ["Webhooks", "ERP and POS", "3PL", "Inventory", "Customer data", "Finance"],
    evidence: { label: "Explore Shopify automation", href: "/services/shopify-automation" }
  },
  {
    title: "Custom Commerce Integrations",
    description: "Build secure middleware and APIs where an off-the-shelf connector cannot represent the business rules.",
    items: ["Custom APIs", "Webhooks", "Middleware", "Data migration", "Security", "Observability"],
    evidence: { label: "See integration case studies", href: "/case-studies" }
  },
];

export const metadata: Metadata = {
  title: "E-commerce Automation & Integration Services",
  description:
    "Connect payments, orders, inventory, fulfilment, CRM and reporting with n8n, Shopify, M-Pesa and custom e-commerce integrations.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "E-commerce Engineering Services and Technical Capabilities",
    description:
      "Specialized engineering services for high-conversion e-commerce, resilient API integrations, and automated workflows.",
    url: `${siteMetadata.siteUrl}/services`,
    type: "website",
  },
  twitter: {
    title: "E-commerce Engineering Services and Technical Capabilities",
    description:
      "Specialized engineering services for high-conversion e-commerce, resilient API integrations, and automated workflows.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "E-commerce Automation and Integration Services",
  provider: { "@id": siteMetadata.professionalServiceId },
  areaServed: ["Kenya", "Remote"],
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
