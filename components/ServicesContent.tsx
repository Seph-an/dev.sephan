'use client';

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ServiceSection = {
  title: string;
  description: string;
  items: string[];
  evidence?: { label: string; href: string };
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FadeInOnView({
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
    <motion.div ref={ref} variants={fadeInVariants} initial="hidden" animate={controls} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function ServicesContent({ sections }: { sections: ServiceSection[] }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 pb-20 pt-28 text-white md:px-8 md:pt-32">
      <FadeInOnView>
        <section className="mx-auto max-w-5xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/70 backdrop-blur">
            Services
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Connect the operations behind your store.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Replace fragile copy-paste work with monitored flows across payments, orders, stock, fulfilment, CRM and reporting.
          </p>
        </section>
      </FadeInOnView>

      <section className="mx-auto mt-16 max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((service, index) => (
            <FadeInOnView key={service.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:border-emerald-400/40 hover:bg-white/10">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200">
                    Outcome-led
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{service.description}</p>
                {service.evidence && (
                  <div className="mt-4">
                    <Link
                      href={service.evidence.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      {service.evidence.label}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                )}
                <ul className="mt-4 flex flex-wrap gap-2 text-sm text-emerald-200">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnView>
          ))}
        </div>

        <FadeInOnView delay={0.2}>
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-400/10 to-transparent p-8 text-center shadow-2xl shadow-emerald-500/20">
            <h3 className="text-2xl font-semibold text-white">Start with the workflow that costs the most.</h3>
            <p className="mt-3 text-white/80">
              Share the store, tools and manual hand-off. The automation audit turns them into a structured technical brief.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Button
                asChild
                size="lg"
                className="group h-11 w-full rounded-xl bg-white text-black transition hover:brightness-95 sm:w-auto"
              >
                <Link href="/contact/ecommerce-automation-audit" data-ga-event="book_consultation" data-ga-placement="services_footer">
                  <Mail className="mr-2 h-4 w-4" />
                  Request an audit
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 w-full rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
              >
                <Link href="/case-studies">
                  See proof of work
                </Link>
              </Button>
            </div>
          </div>
        </FadeInOnView>
      </section>
    </main>
  );
}
