import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'For Funders - The Technology Monastery',
  description:
    'What a multi-year grant to the Technology Monastery buys, how the campus is funded by design, what year five looks like, and where to find the due-diligence documents.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';
const direct = siteConfig.directContact;
const mail = (subject: string) => `mailto:${direct.email}?subject=${encodeURIComponent(subject)}`;

const buys = [
  {
    title: 'Two people, from year one',
    body: 'A Volunteer Manager who owns the people and opens standing volunteer pipelines, and a Program Coordinator who owns the work, the partners, the compliance calendar and the reporting. Their position descriptions, pay bands and hiring plan are already written.',
    href: '/hiring/',
    cta: 'See the hiring plan',
  },
  {
    title: 'A place, in phases',
    body: 'Acquisition and first-phase improvements of a rural site near Clear Creek State Park, Cook Forest State Park and Sigel, Pennsylvania: a shared kitchen and gathering space, a coworking area, a bathhouse, and a small number of campsites and RV pads for the first cohort.',
    href: '/campus/',
    cta: 'Read the campus plan',
  },
  {
    title: 'Five years of runway that tapers',
    body: 'Operating support for the two roles and the campus, structured so that the grant carries most of year one and a declining share each year as other foundations, recurring giving, sponsorships and vendor programs take over.',
    href: '/about/',
    cta: 'About the organization',
  },
];

const yearFive = [
  'Both positions funded every year, with an endowment seeded by year three and growing toward covering them permanently.',
  'Cohorts arriving on a calendar, pipelines that run without heroics, and a published count of charities served per staff member.',
  'A compliance record with no missed permit, inspection or report.',
  'No single source of support above forty percent of operating costs.',
  'A board decision, on evidence, about when the Technology Monastery becomes a stand-alone charity.',
];

const diligence = [
  {
    label: 'Candid profile and Platinum Seal of Transparency (Free For Charity)',
    href: siteConfig.guidestar.profileUrl,
  },
  {
    label: 'Board, filings and policies at freeforcharity.org',
    href: siteConfig.supportedBy.url,
  },
  {
    label: 'This site, built in the open on GitHub',
    href: 'https://github.com/FreeForCharity/FFC-EX-technologymonastery.org',
  },
  {
    label: 'Free For Charity donation policy',
    href: '/free-for-charity-donation-policy/',
  },
  {
    label: 'Transparency page: legal status, records, policies and commitments',
    href: '/transparency/',
  },
  {
    label: 'Impact and measurement: what we will count and publish',
    href: '/impact/',
  },
];

export default function Funders() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <p className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold tracking-wide uppercase">
            For funders
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            A multi-year grant that ends with a program that funds itself
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are seeking a multi-year award structured as capital plus five years of operating
            support. This page says what it buys, how the campus is funded by design, what year five
            looks like, and where the due-diligence documents are.
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>What the grant buys</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {buys.map((b) => (
                <article
                  key={b.title}
                  className="flex flex-col bg-[#15102a] border border-purple-500/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                  <p className="text-gray-300 mb-6 flex-1">{b.body}</p>
                  <Button href={b.href} variant="secondary">
                    {b.cta}
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Funded by design, not by fees</h2>
            <p className={pClass}>
              The campus charges neither the charities it serves nor the people who come to do the
              work. There is no rent, no nightly rate, no program fee and no lodging income. Support
              comes from foundation grants, public support, sponsorships, vendor nonprofit programs
              and recurring giving.
            </p>
            <p className={pClass}>
              That is the case for funding it: every dollar given here is multiplied across the small
              charities that then receive their technology, AI and web services at no cost, which
              stretches the grants and gifts those same funders already make to them. We will publish
              the method and the per-charity figures once the board approves them.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>What year five looks like</h2>
            <ul className="space-y-3">
              {yearFive.map((y) => (
                <li key={y} className="border-l-2 border-purple-500/60 pl-4 text-gray-300">
                  {y}
                </li>
              ))}
            </ul>
            <p className={`${pClass} mt-6`}>
              We will not claim an endowment we have not raised. Fully endowing both positions and the
              campus from a standing start in five years would take a transformational gift; the
              credible plan is to fund the roles every year, seed the endowment early, and keep
              multi-year renewals as the backstop. The numbers behind that plan are in the business
              plan we share with funders directly.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Due diligence</h2>
            <p className={pClass}>
              The Technology Monastery is a project of {siteConfig.supportedBy.name}, a US 501(c)(3)
              public charity, EIN {siteConfig.ein}. It is not a separate legal entity today; its
              finances, policies and transparency profile are Free For Charity&apos;s. Free For
              Charity is a 100 percent volunteer organization, and this is a proposed project: if it
              is funded, its two staff roles would be the only paid positions at Free For Charity.
            </p>
            <ul className="space-y-3 mb-6">
              {diligence.map((d) => (
                <li key={d.href} className="border-l-2 border-purple-500/60 pl-4">
                  <a
                    href={d.href}
                    target={d.href.startsWith('http') ? '_blank' : undefined}
                    rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-purple-300 underline hover:text-white"
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className={pClass}>
              Three things we do on purpose: we describe the property only at the regional level
              online, we publish no metric we cannot verify, and we say plainly when a role, a
              partnership or a figure is planned rather than secured.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start the conversation</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            {direct.name} at {direct.email}, or text {direct.phoneDisplay}. We can share the business
            plan, the budget and the hiring kits directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={mail('Funding conversation')} variant="secondary">
              Email {direct.name}
            </Button>
            <Button href="/campus/" variant="primary">
              Read the campus plan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
