import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteMetadata } from "@/lib/siteMetadata";

const groups = [
  {
    title: "Services",
    links: [
      { label: "E-commerce automation", href: "/ke/ecommerce-automation" },
      { label: "M-Pesa integration", href: "/ke/mpesa-ecommerce-integration" },
      { label: "n8n automation", href: "/services/n8n-ecommerce-automation" },
      { label: "Shopify automation", href: "/services/shopify-automation" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Case studies", href: "/case-studies" },
      { label: "Engineering insights", href: "/blog" },
      { label: "About Sephan", href: "/about" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="text-2xl font-semibold" aria-label="Sephan home">
            SE<span className="text-emerald-500">.</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
            E-commerce automation and integration engineering for Kenyan businesses and remote teams.
            Connect payments, orders, inventory, fulfilment, CRM and reporting.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/65">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-400" />
              Nairobi, Kenya · Remote worldwide
            </span>
            <a
              href={`mailto:${siteMetadata.contactEmail}`}
              className="inline-flex items-center gap-2 hover:text-emerald-400"
              data-ga-event="click_email"
              data-ga-placement="footer"
            >
              <Mail className="h-4 w-4" />
              {siteMetadata.contactEmail}
            </a>
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">{group.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-emerald-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Sephan. E-commerce systems built from Nairobi.</p>
          <div className="flex items-center gap-4">
            <a href={siteMetadata.social.github} target="_blank" rel="noreferrer" aria-label="Sephan on GitHub" className="hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href={siteMetadata.social.linkedin} target="_blank" rel="noreferrer" aria-label="Sephan on LinkedIn" className="hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
