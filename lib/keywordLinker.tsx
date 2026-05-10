import React from "react";
import Link from "next/link";

const KEYWORD_MAP: Record<string, string> = {
  "API integrations": "/services",
  "DevOps": "/services",
  "automation": "/services",
  "SEO": "/services",
  "Next.js": "/faqs",
  "headless CMS": "/faqs",
  "Strapi": "/case-studies/strapi-headless-cms-creative-autonomy",
  "n8n": "/case-studies/n8n-workflow-automation-systems",
  "Coolify": "/case-studies/coolify-private-paas-orchestration",
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
