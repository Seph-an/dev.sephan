import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about full-stack development, headless CMS, SEO, DevOps, and how Sephan delivers high-impact software solutions.",
  alternates: { canonical: "/faqs" },
};

const faqs = [
  {
    question: "What kinds of projects do you work on?",
    answer: (
      <>
        I specialize in high-performance web platforms, custom automation systems, and complex data migrations. My work ranges from building secure recruitment platforms like the{" "}
        <Link href="/case-studies/gap-recruitment-full-stack" className="text-emerald-400 hover:underline">Gap Recruitment platform</Link> to engineering private PaaS solutions using{" "}
        <Link href="/case-studies/coolify-private-paas-orchestration" className="text-emerald-400 hover:underline">Coolify</Link>.
      </>
    ),
    plainText: "I specialize in high-performance web platforms, custom automation systems, and complex data migrations. My work ranges from building secure recruitment platforms like Gap Recruitment to engineering private PaaS solutions using Coolify."
  },
  {
    question: "How long does it take for a project to be completed?",
    answer: "Project timelines vary based on complexity. A professional one-pager or small landing page can be delivered in about 7–10 days. More complex full-stack platforms or deep infrastructure setups typically take 3–6 weeks. I prioritize ship velocity without compromising on security or code quality.",
    plainText: "Project timelines vary based on complexity. A professional one-pager or small landing page can be delivered in about 7–10 days. More complex full-stack platforms or deep infrastructure setups typically take 3–6 weeks. I prioritize ship velocity without compromising on security or code quality."
  },
  {
    question: "What is a Full-Stack Developer?",
    answer: "A full-stack developer is an engineer who can handle both the frontend (user interface, styling, client-side logic) and the backend (servers, databases, APIs, server-side logic). This allows for a unified architectural vision and faster delivery as one person understands how the entire system connects.",
    plainText: "A full-stack developer is an engineer who can handle both the frontend and the backend. This allows for a unified architectural vision and faster delivery."
  },
  {
    question: "What is a Headless CMS (like Strapi)?",
    answer: (
      <>
        A headless CMS is a 'content-only' database that delivers your text and images via an API. Unlike traditional builders, it decouples your content from your design. This means you can update your website text through an easy dashboard, as seen in my{" "}
        <Link href="/case-studies/strapi-headless-cms-creative-autonomy" className="text-emerald-400 hover:underline">Strapi SEO case study</Link>, while the frontend remains lightning-fast.
      </>
    ),
    plainText: "A headless CMS is a content-only database that delivers content via an API. It decouples content from design, allowing for easier updates and faster frontends, as seen in my Strapi SEO case study."
  },
  {
    question: "What is the difference between DevOps and GitOps?",
    answer: "DevOps is a broad cultural and technical shift to automate the building, testing, and releasing of software. GitOps is a specialized subset of DevOps where Git is used as the 'single source of truth' for infrastructure. In a GitOps workflow, any change pushed to a specific Git branch is automatically applied to your live servers.",
    plainText: "DevOps is automated building and testing. GitOps uses Git as the single source of truth for infrastructure changes."
  },
  {
    question: "What are the different types of SEO?",
    answer: (
      <>
        SEO is categorized into three areas: 1. Technical SEO (indexing and schema); 2. On-Page SEO (keywords and meta tags); and 3. Off-Page SEO. I focus on the Technical and On-Page aspects, which helped improve inquiry rates in the{" "}
        <Link href="/case-studies/urbanac-cleaning-one-pager" className="text-emerald-400 hover:underline">Urbanac Cleaning project</Link>.
      </>
    ),
    plainText: "SEO has Technical, On-Page, and Off-Page categories. I focus on Technical and On-Page aspects to improve search results, as shown in the Urbanac Cleaning project."
  },
  {
    question: "Why should I use Next.js instead of standard React?",
    answer: "Next.js is a framework built on top of React that adds powerful features like Server-Side Rendering (SSR) and Static Site Generation (SSG). This results in significantly faster load times, better SEO, and a superior developer experience.",
    plainText: "Next.js adds Server-Side Rendering and Static Site Generation to React, resulting in faster speeds and better SEO."
  },
  {
    question: "What is JSON-LD and why is it important for my site?",
    answer: "JSON-LD (JSON for Linked Data) is a standardized format for providing structured data to search engines. It helps Google understand the context of your page, which can lead to 'rich snippets' like special previews in search results.",
    plainText: "JSON-LD provides structured data to search engines, helping them understand your page context and enabling rich snippets."
  },
  {
    question: "What are the benefits of a self-hosted automation platform like n8n?",
    answer: (
      <>
        Self-hosting your automation (using tools like{" "}
        <Link href="/case-studies/n8n-workflow-automation-systems" className="text-emerald-400 hover:underline">n8n</Link>) allows you to eliminate 'per-task' subscription fees. It also ensures absolute data sovereignty, keeping your sensitive data on your own private server.
      </>
    ),
    plainText: "Self-hosting automation with n8n eliminates per-task fees and ensures absolute data sovereignty."
  },
  {
    question: "What is a Private PaaS (like Coolify)?",
    answer: (
      <>
        A Private PaaS gives you the convenience of platforms like Vercel but on your own private servers. It automates deployments and manages SSL, providing full control over resources as detailed in my{" "}
        <Link href="/case-studies/coolify-private-paas-orchestration" className="text-emerald-400 hover:underline">Coolify case study</Link>.
      </>
    ),
    plainText: "A Private PaaS provides Vercel-like convenience on private servers, offering full control over resource management."
  },
  {
    question: "How do you handle website security?",
    answer: "I implement security-first architectures using industry standards like HSTS, CSP to prevent cross-site scripting, and CORS to restrict unauthorized data access. I also use server-side hardening on NGINX and Docker.",
    plainText: "I use standards like HSTS, CSP, and CORS alongside server hardening on NGINX and Docker to ensure website security."
  },
  {
    question: "What is ISR (Incremental Static Regeneration)?",
    answer: "ISR is a Next.js feature that allows you to update static content after you've built your site, without needing a full redeploy. This ensures your content stays current while maintaining the performance of a static site.",
    plainText: "ISR allows updating static content after building the site, keeping content fresh without sacrificing speed."
  },
  {
    question: "Can I manage my own content without knowing how to code?",
    answer: "Absolutely. I build systems where all frontend content is served from a CMS like Strapi. You'll have a user-friendly dashboard where you can edit text, upload images, and manage SEO tags instantly.",
    plainText: "Yes, I build systems with user-friendly CMS dashboards like Strapi so you can manage text, images, and SEO without coding."
  },
  {
    question: "What is Docker and why do you use it for deployment?",
    answer: "Docker packages an application and all its dependencies into a container. This ensures the app runs exactly the same way on any environment, eliminating deployment inconsistencies and making systems highly reliable.",
    plainText: "Docker containerizes applications to ensure they run consistently across all environments, increasing reliability."
  },
  {
    question: "What is the importance of structured data in Case Studies?",
    answer: "Adding CaseStudy schema via JSON-LD allows search engines to identify your work as professional evidence of expertise, helping your projects appear in specific search queries related to the problems you've solved.",
    plainText: "CaseStudy schema helps search engines recognize your projects as evidence of expertise, improving search relevance."
  },
  {
    question: "Do you provide ongoing maintenance after a project is launched?",
    answer: "Yes. While I build systems to be autonomous and self-healing, I offer maintenance packages for regular security updates, dependency management, and performance monitoring to ensure peak efficiency.",
    plainText: "Yes, I offer maintenance packages for security, dependency management, and performance monitoring to keep systems efficient."
  },
  {
    question: "What is Technical SEO?",
    answer: "Technical SEO refers to website and server optimizations that help search engine spiders crawl and index your site more effectively, including optimizations for site architecture, page speed, and mobile-friendliness.",
    plainText: "Technical SEO involves optimizing site architecture, speed, and mobile-readiness to help search engines crawl and index better."
  },
  {
    question: "How do you integrate local payments like M-Pesa?",
    answer: (
      <>
        I use custom Node.js scripts to connect with the Safaricom Daraja API. This was used to automate catalog operations for{" "}
        <Link href="/case-studies/zoho-pharmacy-ecommerce" className="text-emerald-400 hover:underline">Browns Pharmacy</Link>, enabling real-time transaction verification.
      </>
    ),
    plainText: "I use Node.js and the Safaricom Daraja API for local payments like M-Pesa, as seen in the Browns Pharmacy project."
  },
  {
    question: "What is the benefit of a standalone Next.js build?",
    answer: "A 'standalone' build only includes the necessary files needed to run the application in production, making the final deployment package smaller and more efficient for containerized environments like Docker.",
    plainText: "A standalone build optimizes the deployment package by including only necessary files, making it ideal for Docker."
  },
  {
    question: "How do you ensure a site is fast for mobile users?",
    answer: "I prioritize mobile performance through responsive design, image optimization, efficient caching strategies, and by minimizing the amount of JavaScript sent to the client.",
    plainText: "I ensure mobile speed through responsive design, image optimization, caching, and minimizing client-side JavaScript."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.plainText
      }
    }))
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 md:px-8">
          <div className="hero__bg">
            <div className="hero__glow"></div>
            <div className="hero__mesh"></div>
            <div className="hero__grain"></div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wide text-white/70">
              Information
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
              Insights into my development process, the technologies I use, and common industry concepts to help you understand how I deliver value.
            </p>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 md:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/[0.07] open:bg-white/[0.08]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-white/90 list-none">
                  <span className="text-lg md:text-xl">{faq.question}</span>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform group-open:rotate-45">
                    <Plus className="h-5 w-5 text-emerald-400" />
                  </div>
                </summary>
                <div className="mt-4 text-base leading-relaxed text-white/70 transition-all duration-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center md:p-12">
            <h2 className="text-2xl font-semibold text-white">Still have questions?</h2>
            <p className="mt-3 text-white/70">
              I’m always open to discussing technical architecture, project scopes, or how I can help solve your specific business challenges.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:sephan@sephanly.com"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:brightness-95"
              >
                Email Me
              </a>
              <a
                href="/case-studies"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Browse Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={faqSchema} />
    </>
  );
}
