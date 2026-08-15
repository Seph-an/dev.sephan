export type AnalyticsEvent =
  | "book_consultation"
  | "click_email"
  | "click_whatsapp"
  | "generate_lead"
  | "submit_project_brief"
  | "view_case_study";

type EventParameters = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js",
      target: string | Date,
      parameters?: EventParameters,
    ) => void;
  }
}

export function trackEvent(name: AnalyticsEvent, parameters: EventParameters = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
}
