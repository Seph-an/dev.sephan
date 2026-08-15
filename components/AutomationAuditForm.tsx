"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { siteMetadata } from "@/lib/siteMetadata";

const inputClass = "mt-2 w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white placeholder:text-white/30";

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
      `Current platform/tools: ${form.get("platform")}`,
      `Monthly order range: ${form.get("orders")}`,
      `Main manual workflow or problem: ${form.get("problem")}`,
      `Desired outcome: ${form.get("outcome")}`,
      `Timeline: ${form.get("timeline")}`,
      `Budget range: ${form.get("budget")}`,
    ].join("\n");

    trackEvent("submit_project_brief", { service, market, form_name: "automation_audit" });
    trackEvent("generate_lead", { service, market, method: "email_brief" });
    setSubmitted(true);
    window.location.href = `mailto:${siteMetadata.contactEmail}?subject=${encodeURIComponent(
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
          <select className={inputClass} name="market" defaultValue="Kenya" required>
            <option>Kenya</option><option>United States</option><option>Other</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">Service
          <select className={inputClass} name="service" defaultValue={searchParams.get("service") || "E-commerce automation"} required>
            <option>E-commerce automation</option><option>M-Pesa e-commerce integration</option><option>n8n e-commerce automation</option><option>Shopify automation</option><option>Other integration</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">Current store and tools<input className={inputClass} name="platform" placeholder="Shopify, WooCommerce, POS, ERP, Zoho, spreadsheets…" required /></label>
        <label className="text-sm font-medium">Monthly orders
          <select className={inputClass} name="orders" required><option value="">Select range</option><option>Under 100</option><option>100–500</option><option>501–2,000</option><option>2,001–10,000</option><option>Over 10,000</option></select>
        </label>
        <label className="text-sm font-medium">Desired timeline
          <select className={inputClass} name="timeline" required><option value="">Select timeline</option><option>Within 30 days</option><option>1–3 months</option><option>3–6 months</option><option>Planning/research</option></select>
        </label>
        <label className="text-sm font-medium sm:col-span-2">What manual workflow or failure costs the most time?
          <textarea className={inputClass} name="problem" rows={4} required />
        </label>
        <label className="text-sm font-medium sm:col-span-2">What should be different after the project?
          <textarea className={inputClass} name="outcome" rows={3} required />
        </label>
        <label className="text-sm font-medium sm:col-span-2">Indicative implementation budget
          <select className={inputClass} name="budget" required><option value="">Select a range</option><option>Under USD 1,000 / KES 130,000</option><option>USD 1,000–3,000</option><option>USD 3,000–7,500</option><option>USD 7,500+</option><option>Need scoping first</option></select>
        </label>
      </div>
      <p className="mt-5 text-xs leading-5 text-white/45">Submitting opens your email client with the structured brief. Your personal form details are not sent to Google Analytics.</p>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto">
        Prepare email brief <ArrowRight className="ml-2 h-4 w-4" />
      </button>
      {submitted && <p className="mt-4 flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 className="h-4 w-4" />Your email client should now be open. Send the prepared message to complete the request.</p>}
    </form>
  );
}
