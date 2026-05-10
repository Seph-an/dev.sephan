import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-white/40">
      <Link href="/" className="flex items-center gap-1.5 transition hover:text-emerald-400">
        <Home className="h-3 w-3" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="h-3 w-3 shrink-0 text-white/20" />
          {item.href ? (
            <Link href={item.href} className="transition hover:text-emerald-400">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/70">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
