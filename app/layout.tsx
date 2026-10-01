import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import GoogleTagManager from '@/components/GoogleTagManager';
import { basePath, siteOrigin } from '@/lib/site-config';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'The Technology Monastery - Free Technology for Nonprofits',
  description: siteConfig.description,
  keywords: ['nonprofit technology', 'free technology services', 'Microsoft 365 for nonprofits', 'Google Workspace for nonprofits', 'charity technology', `volunteer ${siteConfig.place.nounLower} Pennsylvania`],
  authors: [{ name: 'The Technology Monastery' }],
  creator: 'The Technology Monastery',
  publisher: 'Free for Charity',
  metadataBase: new URL(`${siteOrigin}/`),
  openGraph: {
    title: 'The Technology Monastery - Free Technology for Nonprofits',
    description: siteConfig.description,
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
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <meta name="theme-color" content="#1a0b2e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'The Technology Monastery',
              description: `Free technology for small nonprofits, and a planned ${siteConfig.place.nounLower} in Pennsylvania where people who give back can live, learn and serve.`,
              url: 'https://technologymonastery.org',
              logo: 'https://technologymonastery.org/images/icon.svg',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Free For Charity',
                url: 'https://freeforcharity.org',
              },
              sameAs: ['https://github.com/FreeForCharity/FFC-EX-technologymonastery.org'],
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
        {/* Consent-gated: only loads after analytics consent is granted. */}
        <GoogleTagManager />
      </body>
    </html>
  );
}
