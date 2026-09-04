"use client";

import Script from "next/script";
import { analyticsConfig, isProvisioned } from "@/lib/analytics.config";

// Google Tag Manager integration. GTM loads on EVERY pageview; whether its
// tags may use cookies is governed by Google Consent Mode v2 (see
// lib/consent-mode.ts, whose bootstrap runs from the root layout <head>
// BEFORE this component's script executes). There is one default and it
// applies everywhere:
//
//   - Analytics and advertising storage is DENIED for every visitor,
//     worldwide, until they accept via the cookie banner
//     (components/CookieConsent.tsx pushes the `consent update`). Until
//     then GA4 sends cookieless pings only.
//
// There is no second, permissive branch. This used to read "outside
// EEA/UK/CH → storage granted by default", which was the shipped behaviour
// and is now the opposite of it.
//
// Loading GTM unconditionally still matters, and is not the same thing as
// measuring unconditionally: the previous consent-gated loader kept GTM
// from loading at all until an explicit grant, which made every visitor who
// ignored the banner invisible. Cookieless pings keep aggregate measurement
// while storing nothing on the device.
//
// The template's noscript iframe fallback remains intentionally omitted:
// the noscript iframe does not participate in Consent Mode, so it could
// not honor the denial.
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
