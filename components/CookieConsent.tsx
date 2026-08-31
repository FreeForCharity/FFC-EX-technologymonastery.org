'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { analyticsConfig, isProvisioned } from '@/lib/analytics.config';
import { updateGoogleConsent } from '@/lib/consent-mode';

// Cookie consent banner + preferences modal, aligned with the behavior of
// the FFC-EX-canary reference (Google Consent Mode v2 with regional
// defaults) and restyled for this site's dark/purple aesthetic. Consent is
// stored as a JSON preferences object in localStorage under
// `cookie-consent` (plus a matching cookie).
//
// Google tags (GTM in the layout, the direct GA4 loader here) load on
// every pageview; the Consent Mode defaults set in the layout <head>
// (lib/consent-mode.ts) decide per region whether they may use cookies,
// and this component pushes the `consent update` reflecting the visitor's
// actual choice. Non-Google tags (Microsoft Clarity, Meta Pixel) do not
// speak Consent Mode, so they stay strictly opt-in everywhere — both are
// currently unprovisioned placeholders on this site.
//
// The banner itself is rendered into the static export (initial state is
// visible) so a fresh browser sees it on first load; the mount effect hides
// it when a stored choice exists.

const GA_MEASUREMENT_ID = analyticsConfig.gaMeasurementId;
const META_PIXEL_ID = analyticsConfig.metaPixelId;
const CLARITY_PROJECT_ID = analyticsConfig.clarityProjectId;

interface DataLayerEvent {
  event: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    // Broad type: once gtag.js/GTM load they push non-object entries (e.g.
    // arguments arrays). DataLayerEvent describes only the objects we push.
    dataLayer: unknown[];
    openCookiePreferences?: () => void;
  }
}

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'cookie-consent';

/**
 * Read the raw stored consent JSON, preferring localStorage and falling back
 * to the `cookie-consent` cookie (consent is persisted to both; localStorage
 * may be unavailable or cleared while the cookie persists).
 */
export function readStoredConsentRaw(): string | null {
  try {
    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    if (fromStorage) return fromStorage;
  } catch {
    // localStorage unavailable — fall through to the cookie.
  }
  const match = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${STORAGE_KEY}=`));
  if (!match) return null;
  try {
    return decodeURIComponent(match.slice(STORAGE_KEY.length + 1));
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  // Visible by default so the banner is part of the prerendered HTML.
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be changed
    functional: true, // Always true, cannot be changed
    analytics: false,
    marketing: false,
  });
  const [savedPreferencesBackup, setSavedPreferencesBackup] =
    useState<CookiePreferences>(preferences);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  // Whether the direct GA4 tag has been loaded + the last path a page_view
  // was sent for (the initial gtag config already reports the page it
  // loaded on).
  const gaLoadedRef = useRef(false);
  const lastTrackedPathRef = useRef<string | null>(null);
  const pathname = usePathname();

  // Google tags speak Consent Mode, so loading is NOT gated on the
  // analytics toggle: the direct GA4 tag loads on every pageview (like GTM
  // in the layout) and the Consent Mode defaults/updates decide whether it
  // may use cookies. With the shipped placeholder ID this loader is inert.
  const loadGoogleAnalytics = useCallback(() => {
    if (!isProvisioned(GA_MEASUREMENT_ID) || typeof window === 'undefined') return;
    gaLoadedRef.current = true;
    if (!document.querySelector('script[src*="googletagmanager.com/gtag"]')) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gaScript);

      const gaConfigScript = document.createElement('script');
      const secureFlag = window.location.protocol === 'https:' ? ';Secure' : '';
      gaConfigScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          'anonymize_ip': true,
          'cookie_flags': 'SameSite=Lax${secureFlag}'
        });
      `;
      document.head.appendChild(gaConfigScript);
      // The gtag config just sent covers the current page.
      lastTrackedPathRef.current = window.location.pathname;
    }
  }, []);

  // Meta Pixel does NOT speak Consent Mode, so it stays strictly opt-in:
  // it loads only on an explicit marketing grant, everywhere in the world.
  const loadMetaPixel = useCallback(() => {
    if (
      isProvisioned(META_PIXEL_ID) &&
      typeof window !== 'undefined' &&
      !document.querySelector('script[src*="fbevents.js"]')
    ) {
      const fbScript = document.createElement('script');
      fbScript.textContent = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }
  }, []);

  // Microsoft Clarity does NOT speak Consent Mode, so it stays strictly
  // opt-in: it loads only on an explicit analytics grant, everywhere.
  const loadMicrosoftClarity = useCallback(() => {
    if (
      isProvisioned(CLARITY_PROJECT_ID) &&
      typeof window !== 'undefined' &&
      !document.querySelector('script[src*="clarity.ms"]')
    ) {
      const clarityScript = document.createElement('script');
      clarityScript.textContent = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `;
      document.head.appendChild(clarityScript);
    }
  }, []);

  const expireCookies = useCallback((names: string[]) => {
    // A cookie can only be deleted by a request whose domain attribute
    // MATCHES the one it was set with. GA4 scopes `_ga` to the registrable
    // domain with a leading dot (e.g. `.example.org`) so it is readable
    // across subdomains — expiring it with only the bare hostname silently
    // does nothing and the visitor keeps the identifier they just asked us
    // to drop.
    //
    // Best-effort candidate set, no public-suffix list needed: walk up the
    // hostname's labels and try every suffix that keeps at least two
    // labels, each with and without a leading dot, plus the host-only
    // form. Candidates that happen to be public suffixes (e.g. `co.uk`)
    // are harmless no-ops — browsers reject cookie writes (and therefore
    // expirations) scoped to a public suffix.
    const labels = window.location.hostname.split('.');
    const domains = new Set<string>();
    for (let i = 0; i < labels.length - 1; i++) {
      const suffix = labels.slice(i).join('.');
      domains.add(suffix);
      domains.add(`.${suffix}`);
    }

    names.forEach((name) => {
      const expiry = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // Host-only (no domain attribute).
      document.cookie = expiry;
      domains.forEach((domain) => {
        document.cookie = `${expiry} domain=${domain};`;
      });
    });
  }, []);

  // Expires the cookies of each category that is NOT granted in `prefs`.
  // Called with no argument it drops both categories (the "withdraw
  // everything" case), which is why the name says "tracking" rather than
  // "analytics".
  //
  // Keyed on the RESULTING preference state rather than on what changed:
  // withdrawing marketing alone must not wipe GA4/Clarity cookies while
  // analytics consent still stands, and a first-time decline must still
  // clear cookies that the granted-by-default regional bootstrap allowed
  // to be set before any choice was stored.
  const deleteTrackingCookies = useCallback(
    (prefs?: CookiePreferences) => {
      const deleteAnalytics = !prefs || !prefs.analytics;
      const deleteMarketing = !prefs || !prefs.marketing;

      if (deleteAnalytics) {
        // GA4 + Microsoft Clarity
        expireCookies(['_ga', '_gid', '_clck', '_clsk']);

        // Dynamically expire all cookies matching _ga_* (e.g. _ga_G-XXXXXXXXXX)
        const dynamicNames = document.cookie
          .split(';')
          .map((cookie) => cookie.split('=')[0].trim())
          .filter((cookieName) => cookieName.startsWith('_ga_'));
        expireCookies(dynamicNames);
      }

      if (deleteMarketing) {
        // Meta Pixel. `fr` is normally a third-party cookie on facebook.com,
        // which document.cookie cannot touch — expiring it here is a no-op
        // in that case and is kept only for a first-party copy.
        expireCookies(['_fbp', 'fr']);
      }
    },
    [expireCookies]
  );

  const applyConsent = useCallback(
    (prefs: CookiePreferences) => {
      const cookieValue = JSON.stringify(prefs);
      const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie = `${STORAGE_KEY}=${encodeURIComponent(cookieValue)}; path=/; max-age=31536000; SameSite=Lax${secureFlag}`;

      // Expire each non-granted category's cookies on EVERY apply — not only
      // when a stored grant is withdrawn. Under the regional Consent Mode
      // defaults, storage is granted outside the EEA/UK/CH before any choice
      // is made, so cookies can already exist the first time a visitor
      // declines, and a restore from storage carries no `previousPrefs` at
      // all.
      if (!prefs.analytics || !prefs.marketing) {
        deleteTrackingCookies(prefs);
      }

      // Expose the coarse choice for styling/other scripts. "accepted" when
      // any tracking category (analytics or marketing) is granted.
      document.documentElement.dataset.cookieConsent =
        prefs.analytics || prefs.marketing ? 'accepted' : 'declined';

      // NOTE: the previous `ga-disable-<ID>` window flag is intentionally
      // gone — it would fully silence gtag.js on decline, defeating the
      // Consent Mode model where a declined visitor is still measured via
      // cookieless pings. The `consent update` below is what makes gtag.js
      // stop using cookies after withdrawal (and deleteTrackingCookies
      // removes the ones already set), matching the canary reference.

      // Push the Google Consent Mode `update` mirroring this choice. For an
      // EEA/UK/CH visitor this is what lifts the regional denied default to
      // granted; for everyone else it matters when they decline (storage
      // flips to denied and GA4 falls back to cookieless pings). Pushed
      // BEFORE the loaders below so a stored denial is on the queue ahead
      // of the tag's first hit.
      updateGoogleConsent(prefs);

      // Also push the legacy consent_update dataLayer event so any GTM
      // container triggers keyed on it keep working.
      window.dataLayer = window.dataLayer || [];
      const consentEvent: DataLayerEvent = {
        event: 'consent_update',
        functional_consent: prefs.functional ? 'granted' : 'denied',
        analytics_consent: prefs.analytics ? 'granted' : 'denied',
        marketing_consent: prefs.marketing ? 'granted' : 'denied',
      };
      window.dataLayer.push(consentEvent);

      // Google tags load regardless of the toggle — Consent Mode (above)
      // gates whether they may use cookies. Inert with a placeholder ID.
      // The direct gtag.js load alongside the GTM container mirrors the FFC
      // template architecture (cookie-consent loads gtag; GTM is the tag
      // management umbrella). The FFC-provisioned GTM container does not
      // duplicate the GA4 page_view tag, so this does not double-count.
      loadGoogleAnalytics();

      // Non-Google tags don't speak Consent Mode, so they stay strictly
      // opt-in everywhere: Clarity needs an explicit analytics grant, Meta
      // Pixel an explicit marketing grant.
      if (prefs.analytics) {
        loadMicrosoftClarity();
      }
      if (prefs.marketing) {
        loadMetaPixel();
      }
    },
    [deleteTrackingCookies, loadGoogleAnalytics, loadMetaPixel, loadMicrosoftClarity]
  );

  const loadPreferencesFromLocalStorage = useCallback(
    (hideBannerIfPresent = true) => {
      try {
        const consent = readStoredConsentRaw();
        if (!consent) {
          // No stored choice: the Consent Mode defaults set in the layout
          // <head> govern, so the Google tag loads now (a first-time EEA
          // visitor is measured cookielessly until they accept) and we ask.
          // Ordering matters — when a stored choice DOES exist, applyConsent
          // below pushes the consent update BEFORE loading GA, so a stored
          // denial is on the queue ahead of the tag's first hit.
          loadGoogleAnalytics();
          return;
        }
        let savedPreferences: CookiePreferences;
        try {
          savedPreferences = JSON.parse(consent);
        } catch {
          loadGoogleAnalytics();
          return;
        }
        if (
          typeof savedPreferences === 'object' &&
          savedPreferences !== null &&
          typeof savedPreferences.necessary === 'boolean' &&
          typeof savedPreferences.analytics === 'boolean' &&
          typeof savedPreferences.marketing === 'boolean'
        ) {
          const updatedPreferences: CookiePreferences = {
            ...savedPreferences,
            // Necessary and functional are always-on; force them true even if
            // the stored JSON was tampered with.
            necessary: true,
            functional: true,
          };
          setPreferences(updatedPreferences);
          setSavedPreferencesBackup(updatedPreferences);
          applyConsent(updatedPreferences);
          if (hideBannerIfPresent) setShowBanner(false);
        } else {
          // Invalid stored data — the regional defaults govern.
          loadGoogleAnalytics();
        }
      } catch {
        // localStorage unavailable — keep the banner visible; the regional
        // defaults govern.
        loadGoogleAnalytics();
      }
    },
    [applyConsent, loadGoogleAnalytics]
  );

  const handleCancelPreferences = useCallback(() => {
    setPreferences(savedPreferencesBackup);
    setShowPreferences(false);
    // If the modal was reopened via window.openCookiePreferences() and the
    // visitor already has a stored choice, return to the hidden steady state
    // instead of re-showing the banner.
    if (readStoredConsentRaw()) {
      setShowBanner(false);
    }
  }, [savedPreferencesBackup]);

  useEffect(() => {
    window.openCookiePreferences = () => {
      setShowBanner(true);
      setShowPreferences(true);
      loadPreferencesFromLocalStorage(false);
    };
    loadPreferencesFromLocalStorage(true);
    return () => {
      delete window.openCookiePreferences;
    };
  }, [loadPreferencesFromLocalStorage]);

  // Report client-side route transitions to GA (app-router navigations do a
  // full page_view only on first load; subsequent navigation is SPA-style).
  // Gated on the tag being loaded, not on the analytics toggle: under
  // Consent Mode the tag decides per region whether the hit is
  // cookie-based or a cookieless ping.
  useEffect(() => {
    if (!pathname) return;
    if (!gaLoadedRef.current || !isProvisioned(GA_MEASUREMENT_ID)) return;
    if (lastTrackedPathRef.current === pathname) return;
    lastTrackedPathRef.current = pathname;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === 'function') {
      gtag('config', GA_MEASUREMENT_ID, { page_path: pathname });
    }
    window.dataLayer = window.dataLayer || [];
    const pageViewEvent: DataLayerEvent = { event: 'page_view', page_path: pathname };
    window.dataLayer.push(pageViewEvent);
  }, [pathname]);

  // Focus management for the preferences modal.
  useEffect(() => {
    if (showPreferences && modalRef.current) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCancelPreferences();
          return;
        }
        // Trap focus within the dialog while it is open.
        if (e.key === 'Tab' && modalRef.current) {
          const focusable = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          const active = document.activeElement;
          if (e.shiftKey) {
            if (active === first || !modalRef.current.contains(active)) {
              e.preventDefault();
              last.focus();
            }
          } else if (active === last || !modalRef.current.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      document.addEventListener('keydown', handleKeydown);
      return () => {
        document.removeEventListener('keydown', handleKeydown);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [showPreferences, handleCancelPreferences]);

  const persist = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {
      console.warn('Unable to save preferences to localStorage:', e);
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    persist(allAccepted);
    applyConsent(allAccepted);
    setSavedPreferencesBackup(allAccepted);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    persist(onlyNecessary);
    // No deleteTrackingCookies() here: applyConsent expires every
    // non-granted category itself, so calling it first only repeated the
    // same expiry writes.
    applyConsent(onlyNecessary);
    setSavedPreferencesBackup(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    persist(preferences);
    applyConsent(preferences);
    setSavedPreferencesBackup(preferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleShowPreferences = () => {
    setSavedPreferencesBackup(preferences);
    setShowPreferences(true);
  };

  if (!showBanner) {
    return null;
  }

  if (showPreferences) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCancelPreferences();
          }
        }}
      >
        <div
          ref={modalRef}
          className="bg-[#0f0a1e] border border-purple-500/30 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6">
            <h2 id="cookie-preferences-title" className="text-2xl font-bold text-white mb-4">
              Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-6">
              We use cookies to enhance your browsing experience and analyze our traffic. You can
              choose which types of cookies you allow.
            </p>

            {/* Necessary Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Necessary Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    aria-label="Necessary cookies (always active)"
                    className="w-5 h-5 text-purple-600 bg-gray-500 rounded cursor-not-allowed"
                  />
                  <span className="ml-2 text-sm text-gray-400">Always Active</span>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                These cookies are essential for the website to function properly. They enable basic
                features like page navigation and storing your cookie consent preferences.
              </p>
            </div>

            {/* Functional Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Functional Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    disabled
                    aria-label="Functional cookies (always active)"
                    className="w-5 h-5 text-purple-600 bg-gray-500 rounded cursor-not-allowed"
                  />
                  <span className="ml-2 text-sm text-gray-400">Always Active</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                These cookies enable enhanced functionality that is essential for our core
                services, such as donation processing.
              </p>
              <p className="text-xs text-gray-400">Services: Zeffy (Donation Processing)</p>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Analytics Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="sr-only peer"
                    aria-label="Enable analytics cookies"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-400/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                These cookies help us understand how visitors interact with our website by
                collecting and reporting information anonymously.
              </p>
              <p className="text-xs text-gray-400">
                Services: Google Tag Manager, Google Analytics
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="mb-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Marketing Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="sr-only peer"
                    aria-label="Enable marketing cookies"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-400/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                These cookies are used to track visitors across websites to display relevant and
                engaging content. No marketing services are currently active on this site.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={handleCancelPreferences}
                className="flex-1 px-6 py-3 bg-transparent border border-purple-500/40 text-gray-300 rounded-lg font-semibold hover:text-white hover:border-purple-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0514] border-t border-purple-500/30 shadow-2xl"
      role="region"
      aria-label="Cookie consent notice"
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">We Value Your Privacy</h3>
            <p className="text-sm text-gray-300 mb-3">
              We use cookies to improve your experience and analyze site usage. By clicking
              &quot;Accept All&quot;, you consent to our use of cookies for analytics and
              marketing purposes. You can manage your preferences or decline non-essential
              cookies.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy-policy/"
                className="text-purple-400 underline hover:text-purple-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy/"
                className="text-purple-400 underline hover:text-purple-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={handleDeclineAll}
              className="px-6 py-2.5 bg-transparent border border-purple-500/40 text-gray-300 rounded-lg font-semibold hover:text-white hover:border-purple-400 transition-colors text-sm whitespace-nowrap"
            >
              Decline All
            </button>
            <button
              onClick={handleShowPreferences}
              className="px-6 py-2.5 bg-transparent border border-purple-500/40 text-gray-300 rounded-lg font-semibold hover:text-white hover:border-purple-400 transition-colors text-sm whitespace-nowrap"
            >
              Customize
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors text-sm whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
