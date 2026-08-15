import React from "react";
import Link from "next/link";

const KEYWORD_MAP: Record<string, string> = {
  "E-commerce automation": "/ke/ecommerce-automation",
  "e-commerce automation": "/ke/ecommerce-automation",
  "API integrations": "/services",
  "M-Pesa": "/ke/mpesa-ecommerce-integration",
  "Shopify": "/services/shopify-automation",
  "automation": "/ke/ecommerce-automation",
  "Next.js": "/faqs",
  "headless CMS": "/faqs",
  "Strapi": "/case-studies/strapi-headless-cms-creative-autonomy",
  "n8n": "/services/n8n-ecommerce-automation",
  "Coolify": "/case-studies/coolify-private-paas-orchestration",
  "workflow automation": "/services/n8n-ecommerce-automation",
  "high-performance API": "/services",
  "robust DevOps": "/services",
};

export function linkKeywords(text: string) {
  if (!text) return text;

  // Sort keywords by length descending to avoid partial matches (e.g., "API" matching "API integrations")
  const sortedKeywords = Object.keys(KEYWORD_MAP).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${sortedKeywords.join("|")})\\b`, "gi");

  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const lowerPart = part.toLowerCase();
    const originalKeyword = Object.keys(KEYWORD_MAP).find(k => k.toLowerCase() === lowerPart);

    if (originalKeyword) {
      return (
        <Link 
          key={i} 
          href={KEYWORD_MAP[originalKeyword]} 
          className="text-emerald-400 hover:underline decoration-emerald-400/30 underline-offset-4"
        >
          {part}
        </Link>
      );
    }
    return part;
  });
}
