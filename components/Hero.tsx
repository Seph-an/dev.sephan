'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Clock, ExternalLink, Mail, MapPin, ShieldCheck, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

  return (
   <section id="home" className="hero">
      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__glow"></div>
        <div className="hero__mesh"></div>
        <div className="hero__grain"></div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 pt-24 md:grid-cols-12 md:gap-10 md:px-8 lg:pt-28">
        {/* Left: Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7 lg:col-span-7"
        >
          <motion.div variants={item} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span>Open to roles · Remote & On‑site (Nairobi, KE)</span>
          </motion.div>

          <motion.h1 variants={item} className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Hi, I’m <span className="text-emerald-500">Sephan</span> ·
            <span className="block">Full‑Stack Engineer & AI‑ready Problem Solver</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
            I design and ship resilient web platforms with measurable business outcomes: faster load times, secure architectures, and developer‑friendly DX.
          </motion.p>

          {/* Proof points */}
          <motion.ul variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <li className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              <span><strong className="text-white">Security‑first</strong> (HSTS, CSP, COOP/COEP)</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
              <Clock className="h-4 w-4 text-sky-300" />
              <span><strong className="text-white"><span className="tabular-nums">95th</span>‑percentile</strong> ship velocity</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
              <Briefcase className="h-4 w-4 text-indigo-300" />
              <span><strong className="text-white">Multifaceted shipper</strong> (Web Dev, UI/UX, SEO, DevOps…)</span>
            </li>
          </motion.ul>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group h-11 rounded-xl bg-white text-black transition hover:brightness-95">
              <a href="mailto:sephan@sephanly.com" aria-label="Email me">
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10">
              <a href="/case-studies" aria-label="View work">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Work
              </a>
            </Button>
          </motion.div>

          {/* Skill chips */}
          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
            {["Next.js 15","TypeScript","Tailwind","Node","Docker","CI/CD","Redis","WebSec"].map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-lg border-white/15 bg-white/10 text-white/80 backdrop-blur hover:bg-white/20">
                {skill}
              </Badge>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="mt-6 flex items-center gap-4 text-white/75">
            <a href="https://github.com/Seph-an" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm backdrop-blur transition hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Visual / Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 120, damping: 18 }}
          className="md:col-span-5 lg:col-span-5"
        >
          <Card className="relative overflow-hidden rounded-2xl border-white/10 bg-white/[0.06] p-0 backdrop-blur">
            {/* Light sweep */}
            <div className="pointer-events-none absolute -inset-x-10 -top-40 h-80 rotate-12 bg-gradient-to-br from-white/20 via-transparent to-transparent blur-2xl" />
            <CardContent className="relative p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-white/15">
                    <Image
                      src="/Sephan-new.jpg"
                      alt="Sephan"
                      width={600}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Sephan</h3>
                    <p className="text-sm text-white/70">Full‑Stack · Next.js · DevOps</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-white/60">
                      <MapPin className="h-3.5 w-3.5" /> Nairobi, KE
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2.5 py-1 text-xs font-medium text-emerald-200">Available</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  { label: "Years", value: "3+" },
                  { label: "Launches", value: "25+" },
                  { label: "SLA", value: "99.9%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-white/80">
                    <div className="text-xl font-semibold text-white tabular-nums">{m.value}</div>
                    <div className="text-[11px] uppercase tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm text-white/75">
                  <span className="text-emerald-500">Recent highlight:</span> reduced LCP from <span className="tabular-nums">4.2s</span> → <span className="tabular-nums">1.6s</span> on a high‑traffic e‑commerce build by optimizing images, caching, and edge‑rendering.
                </p>
              </div>

              {/* Faux logo strip */}
              <div className="mt-6">
                <p className="mb-2 text-xs uppercase tracking-wide text-white/50">Trusted by teams at</p>
                <div className="grid grid-cols-3 gap-2">
                  {["Gap Recruitment","Urbanac","Browns Pharmacy"].map((l) => (
                    <div key={l} className="flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[11px] font-medium uppercase tracking-wide text-white/60">
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom wave accent */}
      <svg aria-hidden className="pointer-events-none -mb-px block h-16 w-full text-white/5" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </svg>
    </section>
  );
}
