import type { Metadata } from "next";
import { Suspense } from "react";
import AutomationAuditForm from "@/components/AutomationAuditForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = {
  title: "Request an E-commerce Automation Audit",
  description: "Share your commerce stack and most costly manual workflow. Receive a structured technical review for automation, integration and recovery.",
  alternates: { canonical: "/contact/ecommerce-automation-audit" },
  openGraph: {
    title: "Request an E-commerce Automation Audit",
    description: "Map the systems, manual work and failure points behind your store before choosing an automation tool.",
    url: `${siteMetadata.siteUrl}/contact/ecommerce-automation-audit`,
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 pb-20 pt-28 text-white md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={[{ label: "Automation audit" }]} />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">E-commerce automation audit</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">Find the workflow worth automating first</h1>
            <p className="mt-5 text-lg leading-8 text-white/70">Describe the current stack, volume and operational bottleneck. The brief makes it possible to assess fit, dependencies and a sensible next step before a sales call.</p>
            <ul className="mt-8 space-y-3 text-white/70">
              <li>• Identify the systems and hand-offs involved.</li>
              <li>• Clarify the current cost, risk and desired outcome.</li>
              <li>• Distinguish an integration project from a process problem.</li>
              <li>• Arrive at discovery with a useful technical brief.</li>
            </ul>
          </div>
          <Suspense fallback={<div className="min-h-[40rem] rounded-3xl border border-white/10 bg-white/5" />}>
            <AutomationAuditForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
