import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import GoogleTagManager from '@/components/GoogleTagManager';
import { CONSENT_MODE_BOOTSTRAP } from '@/lib/consent-mode';
import { basePath, siteOrigin } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'The Technology Monastery - Free Technology for Nonprofits',
  description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of skilled professionals.',
  keywords: ['nonprofit technology', 'free technology services', 'Microsoft 365 for nonprofits', 'charity technology'],
  authors: [{ name: 'The Technology Monastery' }],
  creator: 'The Technology Monastery',
  publisher: 'Free for Charity',
  metadataBase: new URL(`${siteOrigin}/`),
  openGraph: {
    title: 'The Technology Monastery - Free Technology for Nonprofits',
    description: 'Empowering small nonprofits with free, customized technology solutions through our dedicated community of skilled professionals.',
    url: `${siteOrigin}/`,
    siteName: 'The Technology Monastery',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2 defaults — MUST run before any Google tag
            (the GoogleTagManager component below and the GA loader in
            CookieConsent) so the region-scoped defaults are already on the
            dataLayer when they initialise. Granted worldwide, denied
            (cookieless pings) only where Google's EU User Consent Policy
            requires opt-in. See lib/consent-mode.ts. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <meta name="theme-color" content="#2c5aa0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Technology Monastery',
              description: 'Empowering small nonprofits with free technology solutions',
              url: 'https://technologymonastery.org',
              logo: 'https://technologymonastery.org/images/logo.png',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'General Inquiries',
                email: 'info@technologymonastery.org',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        {/* Loads on every pageview; the Consent Mode defaults set in <head>
            decide, per region, whether its tags may use cookies. */}
        <GoogleTagManager />
      </body>
    </html>
  );
}
