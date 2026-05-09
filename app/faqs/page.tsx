import type { Metadata } from "next";
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
    answer: "I specialize in high-performance web platforms, custom automation systems, and complex data migrations. My work ranges from building secure recruitment platforms and e-commerce stores with local payment integrations to engineering private PaaS (Platform as a Service) and AI-ready automation hubs."
  },
  {
    question: "How long does it take for a project to be completed?",
    answer: "Project timelines vary based on complexity. A professional one-pager or small landing page can be delivered in about 7–10 days. More complex full-stack platforms or deep infrastructure setups typically take 3–6 weeks. I prioritize ship velocity without compromising on security or code quality."
  },
  {
    question: "What is a Full-Stack Developer?",
    answer: "A full-stack developer is an engineer who can handle both the frontend (user interface, styling, client-side logic) and the backend (servers, databases, APIs, server-side logic). This allows for a unified architectural vision and faster delivery as one person understands how the entire system connects."
  },
  {
    question: "What is a Headless CMS (like Strapi)?",
    answer: "A headless CMS is a 'content-only' database that delivers your text and images via an API. Unlike traditional builders, it decouples your content from your design. This means you can update your website text through an easy dashboard, while the frontend remains lightning-fast and benefits from the latest tech stack (like Next.js)."
  },
  {
    question: "What is the difference between DevOps and GitOps?",
    answer: "DevOps is a broad cultural and technical shift to automate the building, testing, and releasing of software. GitOps is a specialized subset of DevOps where Git is used as the 'single source of truth' for infrastructure. In a GitOps workflow, any change pushed to a specific Git branch is automatically applied to your live servers."
  },
  {
    question: "What are the different types of SEO?",
    answer: "SEO is generally categorized into three areas: 1. Technical SEO (site speed, mobile-friendliness, indexing, and schema markup); 2. On-Page SEO (content quality, keyword optimization, and meta tags); and 3. Off-Page SEO (backlinks and social signals). I primarily focus on the Technical and On-Page aspects to ensure search engines can crawl and understand your site perfectly."
  },
  {
    question: "Why should I use Next.js instead of standard React?",
    answer: "Next.js is a framework built on top of React that adds powerful features like Server-Side Rendering (SSR) and Static Site Generation (SSG). This results in significantly faster load times, better SEO (since the content is pre-rendered for search engines), and a superior developer experience."
  },
  {
    question: "What is JSON-LD and why is it important for my site?",
    answer: "JSON-LD (JSON for Linked Data) is a standardized format for providing structured data to search engines. It helps Google understand the context of your page (e.g., that it's a Case Study, a Product, or a Person), which can lead to 'rich snippets' like star ratings or special previews in search results."
  },
  {
    question: "What are the benefits of a self-hosted automation platform like n8n?",
    answer: "Self-hosting your automation (using tools like n8n) allows you to eliminate 'per-task' subscription fees found in platforms like Zapier. It also ensures absolute data sovereignty, as your sensitive business data stays on your own private server rather than passing through a third-party service."
  },
  {
    question: "What is a Private PaaS (like Coolify)?",
    answer: "A Private PaaS (Platform as a Service) gives you the convenience of platforms like Vercel or Heroku but on your own private servers. It automates deployments, manages SSL certificates, and monitors your applications, all while giving you full control over your resources and reducing hosting costs."
  },
  {
    question: "How do you handle website security?",
    answer: "I implement security-first architectures using industry standards like HSTS (strict HTTPS), CSP (Content Security Policy) to prevent cross-site scripting, and CORS (Cross-Origin Resource Sharing) to restrict unauthorized data access. I also use server-side hardening on NGINX and Docker."
  },
  {
    question: "What is ISR (Incremental Static Regeneration)?",
    answer: "ISR is a Next.js feature that allows you to update static content after you've built your site, without needing a full redeploy. For example, if you change a price in your CMS, ISR can update just that page in the background while the rest of the site stays static and fast."
  },
  {
    question: "Can I manage my own content without knowing how to code?",
    answer: "Absolutely. I build systems where all frontend content is served from a CMS (like Strapi). You'll have a user-friendly dashboard similar to a word processor where you can edit text, upload images, and manage SEO tags. Your changes go live instantly without my intervention."
  },
  {
    question: "What is Docker and why do you use it for deployment?",
    answer: "Docker is a tool that 'packages' an application and all its dependencies into a container. This ensures the app runs exactly the same way on my machine as it does on your production server, eliminating the 'it works on my machine' problem and making deployments highly reliable."
  },
  {
    question: "What is the importance of structured data in Case Studies?",
    answer: "Adding CaseStudy schema via JSON-LD allows search engines to identify your work as professional evidence of expertise. This helps your projects appear in specific search queries related to the problems you've solved, increasing your authority in those niches."
  },
  {
    question: "Do you provide ongoing maintenance after a project is launched?",
    answer: "Yes. While I build systems to be autonomous and self-healing, I offer maintenance packages for regular security updates, dependency management, and performance monitoring to ensure your platform remains at peak efficiency as it scales."
  },
  {
    question: "What is Technical SEO?",
    answer: "Technical SEO refers to website and server optimizations that help search engine spiders crawl and index your site more effectively. This includes optimizing your site's architecture, improving page speed, ensuring mobile-friendliness, and implementing correct robots.txt and sitemap configurations."
  },
  {
    question: "How do you integrate local payments like M-Pesa?",
    answer: "I use custom Node.js scripts or middleware to connect with the Safaricom Daraja API. This allows for automated STK pushes, real-time transaction verification, and seamless synchronization with your inventory or order management system."
  },
  {
    question: "What is the benefit of a standalone Next.js build?",
    answer: "A 'standalone' build only includes the necessary files needed to run the application in production. This makes the final deployment package much smaller and more efficient, which is ideal for containerized environments like Docker and leads to faster startup times."
  },
  {
    question: "How do you ensure a site is fast for mobile users?",
    answer: "I prioritize mobile performance through responsive design, image optimization (using Next.js Image component), efficient caching strategies, and by minimizing the amount of JavaScript sent to the client. I aim for high Core Web Vitals scores across all devices."
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
        "text": f.answer
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
