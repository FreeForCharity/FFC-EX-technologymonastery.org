import Link from 'next/link';
import { siteConfig } from '@/lib/site.config';
import CookiePreferencesLink from '@/components/CookiePreferencesLink';

// FFC standard footer, following the structure of FFC_Single_Page_Template
// src/components/footer/index.tsx (Endorsements / Quick Links + Policies /
// Contact Us columns, plus the permanent "Supported by" attribution bar),
// restyled for this site's dark/purple aesthetic.

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Campus', href: '/campus/' },
  { name: 'Services', href: '/services/' },
  { name: 'Get Started', href: '/get-started/' },
  { name: 'Hiring', href: '/hiring/' },
  { name: 'For Funders', href: '/funders/' },
  { name: 'Partners', href: '/partners/' },
  { name: 'Impact', href: '/impact/' },
  { name: 'Transparency', href: '/transparency/' },
  { name: 'Contact', href: '/contact/' },
  // Interim FFC campaign; a project-specific campaign will replace it later.
  { name: 'Donate', href: siteConfig.integrations.zeffyDonationUrl },
  // FFC footer standard: every supported charity site links back to the
  // supporting org's hub. Always rendered — keep this entry when customizing.
  { name: 'Supported Charity Login', href: siteConfig.supportedBy.hubUrl },
];

const policyLinks = [
  {
    // Hardcoded on purpose: this page documents FFC's OWN donation policy,
    // so the label must keep FFC's name. The adjacent '/donation-policy'
    // entry is this site's own policy.
    name: 'Free For Charity Donation Policy',
    href: '/free-for-charity-donation-policy/',
  },
  { name: 'Donation Policy', href: '/donation-policy/' },
  { name: `${siteConfig.name} Privacy Policy`, href: '/privacy-policy/' },
  { name: `${siteConfig.name} Cookie Policy`, href: '/cookie-policy/' },
  { name: `${siteConfig.name} Terms of Service`, href: '/terms-of-service/' },
  {
    name: `${siteConfig.name} Vulnerability Disclosure Policy`,
    href: '/vulnerability-disclosure-policy/',
  },
  {
    name: `${siteConfig.name} Security Acknowledgements`,
    href: '/security-acknowledgements/',
  },
];

export default function Footer() {
  // Static export: evaluated at build time, so the year refreshes on each
  // rebuild/deploy (this site deploys on every push) rather than live on Jan 1.
  const currentYear = new Date().getFullYear();
  const socialLinks = siteConfig.social.filter((s) => s.href);

  return (
    <footer className="bg-[#0a0514] border-t border-purple-500/20 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Endorsements */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Endorsements</h2>
            <div className="space-y-4">
              <a
                href={siteConfig.guidestar.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.supportedBy.name} Candid Seal of Transparency`}
                className="inline-block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- Candid's live seal widget (current-year level), as on freeforcharity.org */}
                <img
                  src={siteConfig.guidestar.sealUrl}
                  alt="Candid Seal of Transparency"
                  width={108}
                  height={108}
                />
              </a>
              <p>
                <a
                  href={siteConfig.guidestar.directProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-2 border-purple-500/60 px-5 py-2.5 text-purple-300 hover:text-white hover:border-purple-400 transition font-medium"
                >
                  Direct Candid Profile Link
                </a>
              </p>
              <p className="font-semibold text-gray-300">
                {siteConfig.supportedBy.name} EIN: {siteConfig.ein}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links + Policies */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Quick Links</h2>
            <nav aria-label="Quick links">
              <ul className="space-y-2">
                {quickLinks.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-purple-400 transition"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-purple-400 transition"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">{siteConfig.name} Policy</h2>
              <nav aria-label="Policy links">
                <ul className="space-y-2">
                  {policyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-8 h-8 text-purple-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-gray-300">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-gray-400 hover:text-purple-400 transition break-all"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                {socialLinks.map(({ href, label }) => (
                  <a
                    key={`${label}-${href}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-purple-600 p-2 rounded-full hover:bg-purple-500 transition-colors"
                  >
                    {/* GitHub mark (inline SVG; repo has no icon library) */}
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-900/30 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {siteConfig.name}, a project of {siteConfig.supportedBy.name}, a
            US 501(c)(3) nonprofit. Licensed under GNU AGPL v3.0.
            {/* FFC footer standard: the permanent "Supported by" attribution.
                Always rendered — do NOT remove or hide it when customizing. */}
            {' | Supported by '}
            <a
              href={siteConfig.supportedBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-purple-400 hover:text-purple-300 transition-colors"
            >
              {siteConfig.supportedBy.name}
            </a>
            {siteConfig.parentOrg && siteConfig.parentOrg.url !== siteConfig.supportedBy.url && (
              <>
                {' | A project of '}
                <a
                  href={siteConfig.parentOrg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {siteConfig.parentOrg.name}
                </a>
              </>
            )}
          </p>
          <p className="mt-2 text-sm">
            <CookiePreferencesLink />
          </p>
        </div>
      </div>
    </footer>
  );
}
