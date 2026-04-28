'use client';

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const skillGroups = [
  { title: "Commerce / CMS", items: ["Shopify", "WordPress + WooCommerce", "Zoho Sites", "Zoho Commerce"] },
  { title: "Frontend", items: ["React", "TypeScript", "Next.js","Zustand", "Tailwind CSS", "Tanstack Query"] },
  { title: "Backend", items: ["Node.js", "Express", "Strapi", "PostgreSQL", "MongoDB", "Redis"] },
  { title: "SEO / Analytics", items: ["Technical SEO", "GC Console", "Google Analytics", "On-page SEO"] },
  { title: "DevOps", items: ["Docker", "Nginx", "PM2", "SSH", "GitHub Actions", "DigitalOcean"] },
  { title: "APIs", items: ["REST", "GraphQL","Websockets", "Webhooks", "n8n"] },
  { title: "Full-Stack", items: ["Next.js + Strapi", "MERN", "SSR / ISR"] },
  { title: "UI / UX", items: ["Figma", "Framer", "Prototyping", "Design Systems"] },
  { title: "VCS / Collaboration", items: ["Git", "GitHub"] },
];

const fadeVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden isolate bg-transparent text-white">
      <div className="about__bg">
        <div className="about__glow" />
        <div className="about__mesh" />
        <div className="about__grain" />
      </div>

      <div className="about__container mx-auto max-w-7xl px-6 py-14 md:px-8 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[13px] text-white/85 backdrop-blur">
                About
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Engineer blending hardware discipline with modern web craftsmanship.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-3 max-w-prose text-white/80">
                I started out in <strong className="text-white">Electrical & Electronic Engineering</strong>, then taught myself software to solve
                bigger problems end-to-end. I treat every build like a system: measurable, reliable, and designed to fail gracefully.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <section className="mt-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[13px] text-white/85 backdrop-blur">
                  Currently
                </span>
                <p className="mt-3 max-w-2xl text-emerald-500">
                  Learning n8n to architect systems and business automations, alongside React Native experiments for field-ready tooling.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[13px] text-white/85 backdrop-blur">
                Principles I Build With
              </span>
              <ul className="mt-4 flex gap-4 text-sm text-gray-200 ">
                <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="mb-1 block font-semibold text-white">Systemic Thinking</span>
                  I architect systems with failure modes in mind.
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="mb-1 block font-semibold text-white">Security-First</span>
                  I bake defense layers into every project from the first commit.
                </li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <span className="mb-1 block font-semibold text-white">Iterative Design</span>
                  Each release is a refinement loop, clarity before complexity.
                </li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.25}>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[13px] text-white/85 backdrop-blur">
                Outside Work
              </span>
              <p className="mt-3 max-w-2xl text-gray-300">
                When I’m not optimizing servers or fine-tuning UI components, I’m leaning into social responsibility through Nature Kenya volunteer drives, tracing Nairobi’s nature trails, or tinkering with electrical and electronics hardware just to see what sparks.
                Those detours keep me fascinated by how ecosystems, design, and resilient software mirror the same patterns of balance and efficiency.
              </p>
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[13px] text-white/85 backdrop-blur">
                Skills
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <FadeIn key={group.title} delay={0.05}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10">
                      <h4 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-white/90">{group.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white/85">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section className="mt-16 text-center">
                <h3 className="mb-3 text-2xl font-semibold text-white">Have a project or idea?</h3>
                <p className="mb-6 text-gray-400">Let’s collaborate and turn it into something exceptional.</p>
                <a
                  href="mailto:hello@sephanly.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-50 hover:shadow-none"
                >
                  Get in Touch →
                </a>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
