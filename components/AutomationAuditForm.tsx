"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const inputClass = "mt-2 w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white placeholder:text-white/30";
const selectClass = `${inputClass} appearance-none pr-10`;
const auditEmail = "services@sephanly.com";

export default function AutomationAuditForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = String(form.get("service") || "E-commerce automation");
    const market = String(form.get("market") || "Not specified");
    const body = [
      "E-commerce automation audit request",
      "",
      `Name: ${form.get("name")}`,
      `Business: ${form.get("business")}`,
      `Email: ${form.get("email")}`,
      `Market: ${market}`,
      `Service: ${service}`,
      `Main manual workflow or problem: ${form.get("problem")}`,
      `Desired outcome: ${form.get("outcome")}`,
    ].join("\n");

    trackEvent("submit_project_brief", { service, market, form_name: "automation_audit" });
    trackEvent("generate_lead", { service, market, method: "email_brief" });
    setSubmitted(true);
    window.location.href = `mailto:${auditEmail}?subject=${encodeURIComponent(
      `Automation audit: ${String(form.get("business") || service)}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">Your name<input className={inputClass} name="name" autoComplete="name" required /></label>
        <label className="text-sm font-medium">Business name<input className={inputClass} name="business" autoComplete="organization" required /></label>
        <label className="text-sm font-medium">Work email<input className={inputClass} name="email" type="email" autoComplete="email" required /></label>
        <label className="text-sm font-medium">Market
          <span className="relative block">
            <select className={selectClass} name="market" defaultValue="Kenya" required>
              <option>Kenya</option><option>United States</option><option>Other</option>
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-[10px] top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </span>
        </label>
        <label className="text-sm font-medium sm:col-span-2">Service
          <span className="relative block">
            <select className={selectClass} name="service" defaultValue={searchParams.get("service") || "E-commerce automation"} required>
              <option>E-commerce automation</option><option>M-Pesa e-commerce integration</option><option>n8n e-commerce automation</option><option>Shopify automation</option><option>Other integration</option>
            </select>
            <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-[10px] top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          </span>
        </label>
        <label className="text-sm font-medium sm:col-span-2">What manual workflow or failure costs the most time?
          <textarea className={inputClass} name="problem" rows={4} required />
        </label>
        <label className="text-sm font-medium sm:col-span-2">What should be different after the project?
          <textarea className={inputClass} name="outcome" rows={3} required />
        </label>
      </div>
      <p className="mt-5 text-xs leading-5 text-white/45">Submitting opens your email client with the structured brief.</p>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto">
        Prepare email brief <ArrowRight className="ml-2 h-4 w-4" />
      </button>
      {submitted && <p className="mt-4 flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4" />Your email client should now be open. Send the prepared message to complete the request.</p>}
    </form>
  );
}
