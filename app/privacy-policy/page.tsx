import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - The Technology Monastery',
  description:
    'How The Technology Monastery collects, uses, and safeguards your information when you visit our website.',
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f] py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              <em>Last Updated: August 30, 2026</em>
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Introduction</h2>
              <p className="leading-relaxed">
                The Technology Monastery (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                We may collect information about your visit to our website, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>General location data (country/region)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Improve our website and services</li>
                <li>Understand how visitors use our site</li>
                <li>Communicate with you about our programs</li>
                <li>Process donations (if applicable)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Third-Party Services</h2>
              <p className="leading-relaxed mb-3">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-white">Cloudflare:</strong> For website hosting and
                  security
                </li>
                <li>
                  <strong className="text-white">Zeffy:</strong> For donation processing
                </li>
                <li>
                  <strong className="text-white">VolunteerMatch:</strong> For volunteer opportunity
                  listings
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Cookies and Tracking</h2>
              <p className="leading-relaxed mb-3">
                We use Google Tag Manager and Google Analytics under Google Consent Mode v2 with
                regional defaults. Whether the permissive or the opt-in default applies to
                Google&apos;s tags is determined by Google from your IP address at the time of your
                visit; IP geolocation is approximate. In the European Economic Area, the United
                Kingdom, and Switzerland, Google Analytics runs cookie-free until you accept
                through the cookie consent banner. Everywhere else, including the United States,
                analytics cookies are set from your first pageview.
              </p>
              <p className="leading-relaxed">
                You can control cookie preferences through the banner, the &quot;Cookie
                Preferences&quot; link in the site footer, or your browser settings; withdrawing
                consent deletes the analytics cookies this site set and returns Google&apos;s tags
                to the cookieless state. See our Cookie Policy for details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Your Rights in the EU, UK, and EEA (GDPR)
              </h2>
              <p className="leading-relaxed mb-3">
                If you visit from the European Union, the United Kingdom, or the wider European
                Economic Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR
                applies to our handling of your personal data. You have the right to: access the
                personal data we hold about you; have inaccurate data rectified; have your data
                erased; restrict or object to processing; receive your data in a portable format;
                and withdraw any consent you have given, at any time, without affecting the
                lawfulness of processing before withdrawal.
              </p>
              <p className="leading-relaxed">
                In these regions, Google&apos;s tags set no cookies and read no identifiers until
                you accept through the cookie consent banner &mdash; until then only aggregate,
                cookieless measurement takes place. To exercise any of these rights, contact us
                using the details below; you also have the right to lodge a complaint with your
                national data protection supervisory authority (in the UK, the Information
                Commissioner&apos;s Office).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Your California Privacy Rights (CCPA/CPRA)
              </h2>
              <p className="leading-relaxed mb-3">
                We do not sell personal information, and we do not share it for cross-context
                behavioral advertising, as those terms are defined by California law &mdash; and
                have not done so in the preceding 12 months. We do not knowingly collect or sell
                the personal information of anyone under 16.
              </p>
              <p className="leading-relaxed">
                California residents have the right to: know what personal information we collect,
                use, and disclose, and to access it; delete personal information we collected from
                you; correct inaccurate personal information; opt out of any sale or sharing of
                personal information (not applicable, since we do neither); and not be
                discriminated against for exercising any of these rights. This site does not read
                or respond to the Global Privacy Control or Do Not Track browser signals; because
                we do not sell or share personal information, there is nothing for those signals to
                opt out of. Analytics cookies are set automatically for visitors outside the EEA,
                the UK, and Switzerland; any visitor can turn them off at any time via the Cookie
                Preferences link in the footer, and we delete the cookies when you do. Submit
                requests using the contact details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your
                personal information. However, no method of transmission over the Internet is 100%
                secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:{' '}
                <a
                  href="mailto:privacy@technologymonastery.org"
                  className="text-purple-400 underline hover:text-purple-300 transition"
                >
                  privacy@technologymonastery.org
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
