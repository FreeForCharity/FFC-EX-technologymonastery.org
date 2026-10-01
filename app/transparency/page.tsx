import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Transparency - The Technology Monastery',
  description:
    'Legal status, EIN, Candid profile, Form 990 filings, policies and governance for the Technology Monastery, a project of Free For Charity.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';
const direct = siteConfig.directContact;

const records = [
  {
    label: 'Candid profile and Platinum Seal of Transparency',
    href: siteConfig.guidestar.profileUrl,
    note: 'Free For Charity’s profile, updated annually; the seal in our footer is Candid’s live widget for this organization.',
  },
  {
    label: 'Form 990 filings on ProPublica Nonprofit Explorer',
    href: 'https://projects.propublica.org/nonprofits/organizations/462471893',
    note: 'Public copies of Free For Charity’s annual IRS filings, EIN 46-2471893.',
  },
  {
    label: 'Free For Charity: organization, board and programs',
    href: siteConfig.supportedBy.url,
    note: 'The parent organization’s own site, where its leadership and programs are described.',
  },
  {
    label: 'This website’s source code',
    href: 'https://github.com/FreeForCharity/FFC-EX-technologymonastery.org',
    note: 'Every page, and every change to it, is public on GitHub.',
  },
];

const policies = [
  { name: 'Free For Charity donation policy', href: '/free-for-charity-donation-policy/' },
  { name: 'Donation policy for this site', href: '/donation-policy/' },
  { name: 'Privacy policy', href: '/privacy-policy/' },
  { name: 'Cookie policy', href: '/cookie-policy/' },
  { name: 'Terms of service', href: '/terms-of-service/' },
  { name: 'Vulnerability disclosure policy', href: '/vulnerability-disclosure-policy/' },
  { name: 'Security acknowledgements', href: '/security-acknowledgements/' },
];

const commitments = [
  'We describe the property only at the regional level online, near Clear Creek State Park, Cook Forest State Park and Sigel, Pennsylvania.',
  'We publish no metric we cannot verify, and we say plainly when a role, a partnership or a figure is planned rather than secured.',
  'We charge neither the charities we serve nor the people who come to do the work, and we earn no rental, campsite or lodging income.',
  'Gifts to the Technology Monastery are gifts to Free For Charity and are governed by its donation policy.',
  'Personnel policies, a background-check policy and a whistleblower policy will be adopted by the board before the first paid hire, and we will say here when that has happened.',
];

export default function Transparency() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Transparency</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Who we are legally, where the filings are, which policies apply, and what we promise about
            how we describe this work.
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Legal status</h2>
            <p className={pClass}>
              The Technology Monastery is a project of {siteConfig.supportedBy.name}, a US 501(c)(3)
              public charity, EIN {siteConfig.ein}, based in State College, Pennsylvania. It is not a
              separate legal entity today: it has no EIN of its own, and every gift, grant, contract
              and filing runs through Free For Charity under its board of directors, its policies and
              its transparency profile. Free For Charity is a 100 percent volunteer organization, and
              the Technology Monastery is a proposed project; if it is funded, its two staff roles
              would be the only paid positions at Free For Charity.
            </p>
            <p className={pClass}>
              Our goal is for the Technology Monastery to become a stand-alone charity, with its own
              IRS 501(c)(3) determination and state registrations, as the program matures. Until that
              happens, any reference to tax-exempt status on this site is Free For Charity&apos;s.
            </p>
            <p className={pClass}>
              TechnoMonasteries is a volunteer project that helps us create the Technology Monastery.
              It operates under Free For Charity&apos;s brand for the United States campus. It is not
              a separate charity, and gifts are never made to it.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Public records</h2>
            <ul className="space-y-4">
              {records.map((r) => (
                <li key={r.href} className="border-l-2 border-purple-500/60 pl-4">
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-white"
                  >
                    {r.label}
                  </a>
                  <span className="block text-sm text-gray-400">{r.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Policies that apply to this site</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {policies.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-purple-300 underline hover:text-white">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>What we promise about how we describe this work</h2>
            <ul className="space-y-3">
              {commitments.map((c) => (
                <li key={c} className="border-l-2 border-purple-500/60 pl-4 text-gray-300">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a document?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Determination letter, the latest Form 990, board list, budget or the business plan: email{' '}
            {direct.name} at {direct.email} or text {direct.phoneDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`mailto:${direct.email}?subject=${encodeURIComponent('Document request')}`}
              variant="secondary"
            >
              Request documents
            </Button>
            <Button href="/funders/" variant="primary">
              For funders
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
