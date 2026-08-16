import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleAlert } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import type { ServicePageConfig } from "@/lib/servicePages";
import { siteMetadata } from "@/lib/siteMetadata";

export default function ServiceLandingPage({ service }: { service: ServicePageConfig }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteMetadata.siteUrl}${service.path}#service`,
        name: service.eyebrow,
        description: service.description,
        url: `${siteMetadata.siteUrl}${service.path}`,
        provider: { "@id": siteMetadata.personId },
        areaServed: service.market,
        serviceType: service.eyebrow,
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-28 md:px-8 md:pt-36">
          <div className="hero__bg">
            <div className="hero__glow" />
            <div className="hero__mesh" />
            <div className="hero__grain" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.eyebrow }]} />
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)]">
              <div>
                <p className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  {service.eyebrow}
                </p>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/75">{service.description}</p>
                <p className="mt-4 text-base leading-7 text-emerald-100/80">{service.outcome}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/contact/ecommerce-automation-audit?service=${encodeURIComponent(service.eyebrow)}`}
                    className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                    data-ga-event="book_consultation"
                    data-ga-service={service.slug}
                    data-ga-market={service.market}
                    data-ga-placement="service_hero"
                  >
                    Request an automation audit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href={service.proof.href} className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                    See relevant proof
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-emerald-400/10 blur-3xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-2 shadow-2xl shadow-emerald-950/40">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    width={1200}
                    height={800}
                    priority
                    className="h-auto w-full rounded-[1.15rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Where time and orders leak</p>
              <h2 className="mt-3 text-3xl font-semibold">The workflow should surface exceptions—not create them</h2>
            </div>
            <ul className="space-y-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                  <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">What is delivered</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold">A system your team can understand, operate and recover</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/65">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Delivery process</p>
          <h2 className="mt-3 text-3xl font-semibold">Measured before automated</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.workflow.map((item) => (
              <li key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="text-sm font-bold text-emerald-400">{item.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10">
            <h2 className="text-2xl font-semibold">Systems that can be connected</h2>
            <p className="mt-2 text-white/65">The final architecture depends on API access, data quality, ownership and operational return.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.integrations.map((integration) => (
                <li key={integration} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-sm text-white/75">
                  {integration}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:px-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Relevant proof</p>
            <h2 className="mt-3 text-2xl font-semibold">{service.proof.title}</h2>
            <p className="mt-3 leading-7 text-white/65">{service.proof.description}</p>
            <Link
              href={service.proof.href}
              className="mt-6 inline-flex items-center font-semibold text-emerald-300 hover:text-emerald-200"
              data-ga-event="view_case_study"
              data-ga-service={service.slug}
              data-ga-placement="service_proof"
            >
              Read the case study <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Questions before an integration starts</h2>
            <div className="mt-6 space-y-3">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                  <p className="mt-3 leading-7 text-white/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-emerald-500/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <h2 className="text-3xl font-semibold">Start with the workflow, not the tool</h2>
              <p className="mt-2 max-w-2xl text-white/70">Share the systems involved and the manual work that slows the team down. You will receive a structured brief for technical review.</p>
            </div>
            <Link
              href={`/contact/ecommerce-automation-audit?service=${encodeURIComponent(service.eyebrow)}`}
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-slate-950"
              data-ga-event="book_consultation"
              data-ga-service={service.slug}
              data-ga-market={service.market}
              data-ga-placement="service_footer"
            >
              Request the audit <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <JsonLd data={schema} />
    </>
  );
}
