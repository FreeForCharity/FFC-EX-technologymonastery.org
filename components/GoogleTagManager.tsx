'use client';

import Script from 'next/script';
import { analyticsConfig, isProvisioned } from '@/lib/analytics.config';

// Google Tag Manager integration. GTM loads on EVERY pageview; whether its
// tags may use cookies is governed by Google Consent Mode v2 with regional
// defaults (see lib/consent-mode.ts, whose bootstrap runs from the root
// layout <head> BEFORE this component's script executes):
//
//   - Outside EEA/UK/CH → storage granted by default; full measurement
//     from the first pageview, no banner interaction needed.
//   - Inside EEA/UK/CH  → storage denied until the visitor accepts via
//     the cookie banner (components/CookieConsent.tsx pushes the
//     `consent update`); until then GA4 sends cookieless pings only.
//
// This replaces the previous consent-gated loader, which kept GTM from
// loading at all until an explicit analytics grant — that model made every
// visitor who ignored the banner invisible, worldwide. Matches the
// FFC-EX-canary reference implementation.
//
// The template's noscript iframe fallback remains intentionally omitted:
// the noscript iframe does not participate in Consent Mode, so it could
// not honor the region-scoped denial.
const GTM_ID = analyticsConfig.gtmId;

export default function GoogleTagManager() {
  if (!isProvisioned(GTM_ID)) {
    return null;
  }

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}
