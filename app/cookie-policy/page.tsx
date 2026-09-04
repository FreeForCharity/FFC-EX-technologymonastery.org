import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy - The Technology Monastery",
  description: "Cookie Policy for The Technology Monastery website.",
};

// Update this date when the policy changes
const LAST_UPDATED = "August 30, 2026";

const thClass = "text-left py-2 pr-4 text-white";
const tdClass = "py-2 pr-4 text-gray-300";
const monoClass = "py-2 pr-4 font-mono text-gray-300";

export default function CookiePolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300">
              <em>Last Updated: {LAST_UPDATED}</em>
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                1. What Are Cookies?
              </h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and provide information to website owners.
                Cookies can be &quot;persistent&quot; or &quot;session&quot;
                cookies. Persistent cookies remain on your device after you
                close your browser, while session cookies are deleted when you
                close your browser.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                2. How We Use Cookies
              </h2>
              <p className="leading-relaxed mb-3">
                When you visit our website, we use cookies to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Remember your cookie consent preferences</li>
                <li>
                  Understand how you use our website and analyze traffic (only
                  after you consent, wherever you are &mdash; see Section 3.3)
                </li>
                <li>Improve our website and user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                3. Types of Cookies We Use
              </h2>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">
                  3.1 Necessary Cookies (Always Active)
                </strong>
              </p>
              <p className="leading-relaxed mb-3">
                These cookies are essential for the website to function
                properly. They enable basic features like storing your cookie
                consent preferences. These cookies do not store any personally
                identifiable information and cannot be disabled.
              </p>
              <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-lg mb-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className={thClass}>Cookie Name</th>
                      <th className={thClass}>Purpose</th>
                      <th className={thClass}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={monoClass}>cookie-consent</td>
                      <td className={tdClass}>
                        Stores your cookie preferences
                      </td>
                      <td className={tdClass}>12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">
                  3.2 Functional Cookies (Always Active)
                </strong>
              </p>
              <p className="leading-relaxed mb-3">
                These cookies enable essential functionality such as donation
                processing. They are necessary for these services to work and
                cannot be disabled if you wish to use these features.
              </p>
              <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2 text-white">
                  Zeffy Donation Platform
                </h3>
                <p className="text-sm mb-2">
                  Zero-fee donation processing platform used to accept
                  donations. Our Donate links open the Zeffy donation form.
                </p>
                <p className="text-xs text-gray-400">
                  Privacy Policy:{" "}
                  <a
                    href="https://support.zeffy.com/legal-data-privacy-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 underline hover:text-purple-300"
                  >
                    https://support.zeffy.com/legal-data-privacy-security
                  </a>
                </p>
              </div>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">3.3 Analytics Cookies</strong>
              </p>
              <p className="leading-relaxed mb-3">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously. We
                use this information to improve our website and user experience.
                We use Google Tag Manager and Google Analytics, which run under
                Google Consent Mode v2 with regional defaults.
              </p>
              <div className="bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded-lg mb-4">
                <p className="text-sm text-white mb-2">
                  <strong>When we ask permission first</strong>
                </p>
                <p className="text-sm mb-2">
                  If you are in the European Economic Area, the United Kingdom,
                  or Switzerland, Google Analytics sets{" "}
                  <strong className="text-white">
                    no analytics or advertising cookies and collects no
                    identifiers from your device
                  </strong>{" "}
                  until you accept. It still counts your visit in an aggregate,
                  cookie-free way so we know how many people used the site
                  &mdash; that measurement cannot be tied back to you or to your
                  next visit.
                </p>
                <p className="text-sm mb-2">
                  There is no country in which analytics cookies are set before
                  you choose. You can turn them off at any time using the Cookie
                  Preferences link in our footer, and we will delete the cookies
                  listed below when you do.
                </p>
                <p className="text-sm">
                  The same rule applies to every visitor, so nothing depends on
                  where you are.
                </p>
              </div>
              <div className="bg-purple-900/20 border border-purple-500/20 p-4 rounded-lg mb-6 overflow-x-auto">
                <h3 className="font-semibold mb-2 text-white">
                  Google Analytics
                </h3>
                <p className="text-sm mb-2">
                  Google Analytics is a web analytics service offered by Google
                  that tracks and reports website traffic. We use Google
                  Analytics to understand how users interact with our website.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className={thClass}>Cookie Name</th>
                      <th className={thClass}>Purpose</th>
                      <th className={thClass}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-purple-500/20">
                      <td className={monoClass}>_ga</td>
                      <td className={tdClass}>Distinguishes unique users</td>
                      <td className={tdClass}>2 years</td>
                    </tr>
                    <tr className="border-b border-purple-500/20">
                      <td className={monoClass}>_ga_*</td>
                      <td className={tdClass}>Maintains session state</td>
                      <td className={tdClass}>2 years</td>
                    </tr>
                    <tr>
                      <td className={monoClass}>_gid</td>
                      <td className={tdClass}>Distinguishes users</td>
                      <td className={tdClass}>24 hours</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs mt-2 text-gray-400">
                  Privacy Policy:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 underline hover:text-purple-300"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </div>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">
                  3.4 Marketing Cookies (Requires Consent)
                </strong>
              </p>
              <p className="leading-relaxed">
                These cookies are used to track visitors across websites. No
                marketing services are currently active on this site; if that
                changes, this policy will be updated and any marketing tag will
                load only after you explicitly enable marketing cookies through
                the consent banner &mdash; everywhere in the world, in every
                region.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                4. How to Manage Cookies
              </h2>
              <p className="leading-relaxed mb-3">
                You have several options for managing cookies:
              </p>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">
                  4.1 Cookie Consent Banner
                </strong>
              </p>
              <p className="leading-relaxed mb-2">
                When you first visit our website, you&apos;ll see a cookie
                consent banner. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong className="text-white">Accept All:</strong> Allow all
                  cookies including analytics and marketing
                </li>
                <li>
                  <strong className="text-white">Decline All:</strong> Only
                  essential cookies will be used
                </li>
                <li>
                  <strong className="text-white">Customize:</strong> Choose
                  which types of cookies you want to allow
                </li>
              </ul>
              <p className="leading-relaxed mb-4">
                You can change your mind at any time: the Cookie Preferences
                link in the footer reopens these choices, and withdrawing
                consent deletes the analytics cookies this site set.
              </p>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">4.2 Browser Settings</strong>
              </p>
              <p className="leading-relaxed mb-2">
                Most web browsers allow you to control cookies through their
                settings. You can typically:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-3">
                <li>
                  View what cookies are stored and delete them individually
                </li>
                <li>Block third-party cookies</li>
                <li>Block all cookies from specific websites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="leading-relaxed mb-4">
                Please note that if you block all cookies, you may not be able
                to use all features of our website.
              </p>

              <p className="leading-relaxed mb-2">
                <strong className="text-white">4.3 Opt-Out Links</strong>
              </p>
              <p className="leading-relaxed mb-2">
                You can opt out of specific third-party cookies:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-white">Google Analytics:</strong>{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 underline hover:text-purple-300"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                5. Do Not Track and Global Privacy Control
              </h2>
              <p className="leading-relaxed">
                This site does not read or respond to the &quot;Do Not
                Track&quot; or Global Privacy Control browser signals. We do not
                sell or share personal information as defined by the CCPA/CPRA,
                so there is nothing for those signals to opt out of. Analytics
                cookies stay off until you opt in through the consent banner,
                wherever you are, and you can turn them off again at any time
                via the Cookie Preferences link in the footer &mdash; we delete
                the cookies when you do. No session recording or marketing tools
                are currently used on this site; if any are added, they will
                load only with your explicit opt-in, anywhere in the world.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                6. Updates to This Cookie Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. Please review this policy periodically for
                changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                7. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about our use of cookies, please contact
                us at:{" "}
                <a
                  href="mailto:privacy@technologymonastery.org"
                  className="text-purple-400 underline hover:text-purple-300"
                >
                  privacy@technologymonastery.org
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                8. More Information
              </h2>
              <p className="leading-relaxed">
                For more information about how we handle your personal data,
                please see our{" "}
                <Link
                  href="/privacy-policy/"
                  className="text-purple-400 underline hover:text-purple-300"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
