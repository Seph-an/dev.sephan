"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { siteMetadata } from "@/lib/siteMetadata";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }
    if (!window.gtag) return;
    const query = searchParams.toString();
    window.gtag("config", siteMetadata.analyticsId, {
      page_path: query ? `${pathname}?${query}` : pathname,
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-ga-event]");
      const eventName = element?.dataset.gaEvent as AnalyticsEvent | undefined;
      if (!element || !eventName) return;

      trackEvent(eventName, {
        link_url: element instanceof HTMLAnchorElement ? element.href : undefined,
        link_text: element.textContent?.trim().slice(0, 100),
        service: element.dataset.gaService,
        market: element.dataset.gaMarket,
        placement: element.dataset.gaPlacement,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${siteMetadata.analyticsId}');
        `}
      </Script>
    </>
  );
}
