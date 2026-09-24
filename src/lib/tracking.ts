type TrackingPayload = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushEvent(event: string, payload: TrackingPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export const trackingEvents = {
  clickWhatsapp: (source: string) =>
    pushEvent("click_whatsapp", { source }),
  clickPhone: () => pushEvent("click_phone"),
  formStart: (formId: string) => pushEvent("form_start", { form_id: formId }),
  formSubmitQualified: (formId: string) =>
    pushEvent("form_submit_qualified", { form_id: formId }),
  formSubmitDisqualified: (formId: string) =>
    pushEvent("form_submit_disqualified", { form_id: formId }),
} as const;

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export function captureUtms(): UtmParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: UtmParams = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      result[key] = value;
      try {
        sessionStorage.setItem(`ubari_${key}`, value);
      } catch {
        /* ignore */
      }
    } else {
      try {
        const stored = sessionStorage.getItem(`ubari_${key}`);
        if (stored) result[key] = stored;
      } catch {
        /* ignore */
      }
    }
  });
  return result;
}
