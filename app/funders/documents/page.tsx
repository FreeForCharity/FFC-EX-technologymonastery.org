import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Documents for Funders - The Technology Monastery',
  description:
    'Every document that exists for due diligence on the Technology Monastery: what is public now, what is available on request, and what does not exist yet.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';
const direct = siteConfig.directContact;
const requestHref = `mailto:${direct.email}?subject=${encodeURIComponent('Document request')}`;

type PublicDoc = { label: string; href: string; note: string };
type RequestDoc = { label: string; note: string };

const publicNow: PublicDoc[] = [
  {
    label: 'The plan in one page',
    href: '/funders/briefing/',
    note: 'The public briefing: the problem, the stack, how the grant is structured, the first summer, and the charities chart.',
  },
  {
    label: 'For funders',
    href: '/funders/',
    note: 'What the grant buys, how the campus is funded by design, and what year five looks like.',
  },
  {
    label: 'Transparency',
    href: '/transparency/',
    note: 'Legal status, EIN, public records, the policies that apply, and what we promise about how we describe this work.',
  },
  {
    label: 'Impact and measurement',
    href: '/impact/',
    note: 'What we will count, how, what we will publish, and the models the program is built on.',
  },
  {
    label: 'Partners and pipelines',
    href: '/partners/',
    note: 'Every partnership with its status: in use, pursuing, or to propose.',
  },
  {
    label: 'Hiring',
    href: '/hiring/',
    note: 'The two roles, their planned salary bands, the timeline and where we will post.',
  },
  {
    label: 'Candid profile and Platinum Seal of Transparency',
    href: siteConfig.guidestar.profileUrl,
    note: "Free For Charity's profile, updated annually.",
  },
  {
    label: 'Form 990 filings on ProPublica Nonprofit Explorer',
    href: 'https://projects.propublica.org/nonprofits/organizations/462471893',
    note: `Public copies of Free For Charity's annual IRS filings, EIN ${siteConfig.ein}.`,
  },
  {
    label: 'This website on GitHub',
    href: 'https://github.com/FreeForCharity/FFC-EX-technologymonastery.org',
    note: 'Every page, and every change to it, is public.',
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

const onRequest: RequestDoc[] = [
  {
    label: 'Business plan, Draft 3',
    note: 'The full plan: program, place, people, partnerships, five-year financials and the assumptions appendix behind every figure.',
  },
  {
    label: 'Five-year model',
    note: 'The spreadsheet behind the plan: cost by line and year, support by source, the grant share each year, and the endowment arithmetic.',
  },
  {
    label: 'Budget narrative',
    note: 'A line-by-line explanation of year one and the five-year totals, in the form most foundation applications ask for.',
  },
  {
    label: 'Letter of inquiry',
    note: 'A two-page introduction to the ask, suitable for a first contact with a program officer.',
  },
  {
    label: 'Proposal narrative',
    note: 'The full proposal text: need, approach, outcomes, evaluation, sustainability and organizational capacity.',
  },
  {
    label: 'Logic model',
    note: 'Inputs, activities, outputs and outcomes on one page, matched to the measures on the impact page.',
  },
  {
    label: 'Attachments checklist',
    note: 'What accompanies a proposal, which items exist today, and which are listed below under Not yet.',
  },
  {
    label: 'Hiring kits',
    note: 'Position descriptions, screening questions, scoring rubrics and the posting plan for both roles.',
  },
  {
    label: 'Compensation memo',
    note: 'How the salary bands and the housing, meals and site vehicle were set, with the regional wage comparables.',
  },
  {
    label: 'Partnership kit',
    note: 'The one-page introduction and draft terms we take to each prospective pipeline, school and vendor partner.',
  },
  {
    label: 'Board policy drafts',
    note: 'Operating reserve policy, endowment fund policy, personnel, background-check and whistleblower policies. Draft, for board and counsel review.',
  },
];

const notYet: RequestDoc[] = [
  {
    label: 'Verified program counts',
    note: 'Pending board approval of which figures are public and the method behind each. Planning targets are labeled as such until then.',
  },
  {
    label: 'Adopted personnel policies',
    note: 'To be adopted by the board before the first paid hire; the drafts above are not yet adopted.',
  },
  {
    label: 'Signed partner agreements',
    note: 'Every partnership is planned or in conversation; none has a signed agreement yet, and the partners page says so for each.',
  },
  {
    label: 'Property documents',
    note: 'Nothing about the property beyond the regional sentence is published: near Clear Creek State Park, Cook Forest State Park and Sigel, Pennsylvania. Site details are discussed with funders directly and not posted here.',
  },
];

function isExternal(href: string) {
  return href.startsWith('http');
}

export default function Documents() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <p className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold tracking-wide uppercase">
            For funders
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Documents for funders</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Every document that exists for due diligence, in three groups: what is public now, what
            we share on request, and what does not exist yet. We would rather say &quot;not yet&quot;
            here than have you find out later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={requestHref} variant="secondary">
              Request documents
            </Button>
            <Button href="/funders/briefing/" variant="primary">
              Read the plan in one page
            </Button>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Public now</h2>
            <p className={pClass}>
              The Technology Monastery is a project of {siteConfig.supportedBy.name}, a US 501(c)(3)
              public charity, EIN {siteConfig.ein}. Its filings, profile and policies are Free For
              Charity&apos;s, and they are public.
            </p>
            <ul className="space-y-4">
              {publicNow.map((d) => (
                <li key={d.href} className="border-l-2 border-purple-500/60 pl-4">
                  <a
                    href={d.href}
                    target={isExternal(d.href) ? '_blank' : undefined}
                    rel={isExternal(d.href) ? 'noopener noreferrer' : undefined}
                    className="text-purple-300 underline hover:text-white"
                  >
                    {d.label}
                  </a>
                  <span className="block text-sm text-gray-400">{d.note}</span>
                </li>
              ))}
              <li className="border-l-2 border-purple-500/60 pl-4">
                <span className="text-white font-semibold">Policies that apply to this site</span>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {policies.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="text-purple-300 underline hover:text-white text-sm">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Available on request</h2>
            <p className={pClass}>
              These exist and are shared with funders directly. Email {direct.name} at {direct.email}{' '}
              with the subject &quot;Document request&quot;, or use the button below, and say which
              items you want.
            </p>
            <ul className="space-y-4">
              {onRequest.map((d) => (
                <li key={d.label} className="border-l-2 border-orange-500/60 pl-4">
                  <span className="text-white font-semibold">{d.label}</span>
                  <span className="block text-sm text-gray-400">{d.note}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={requestHref} variant="secondary">
                Request documents
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Not yet</h2>
            <p className={pClass}>
              A funder&apos;s checklist will ask for some of these. They do not exist today, and we
              will say here when each one does.
            </p>
            <ul className="space-y-4">
              {notYet.map((d) => (
                <li key={d.label} className="border-l-2 border-gray-500/60 pl-4">
                  <span className="text-white font-semibold">{d.label}</span>
                  <span className="block text-sm text-gray-400">{d.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ask for what you need</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            {direct.name} at {direct.email}, or text {direct.phoneDisplay}. Determination letter,
            the latest Form 990 and the board list come from Free For Charity on the same request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={requestHref} variant="secondary">
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
