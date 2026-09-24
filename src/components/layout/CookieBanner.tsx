"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "ubari_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY) as
        | "granted"
        | "denied"
        | null;
      if (stored === "granted" || stored === "denied") {
        setConsent(stored);
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "granted" | "denied") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
    setVisible(false);
  }

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <>
      {consent === "granted" && gtmId && (
        <Script id="gtm" strategy="lazyOnload">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}</Script>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed bottom-4 left-4 z-50 max-w-sm border border-ubari-line bg-white p-5 shadow-sm md:bottom-6 md:left-6"
        >
          <p className="font-sans text-xs font-light leading-relaxed text-ubari-mute">
            Ao utilizar este website você concorda com o uso de cookies para
            tornar a navegação possível, analisar métricas e contribuir com
            estratégias de marketing. Veja nossa{" "}
            <a href="/politica-de-privacidade" className="underline">
              Política de Privacidade
            </a>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => decide("denied")}
              className="font-sans text-[10px] uppercase tracking-[0.15em] text-ubari-mute hover:text-ubari-ink"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => decide("granted")}
              className="font-sans text-[10px] uppercase tracking-[0.15em] text-ubari-ink underline underline-offset-4"
            >
              Concordar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
