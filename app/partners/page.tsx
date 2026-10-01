import { Metadata } from 'next';
import Button from '@/components/Button';
import { placeHref, siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Partners and Pipelines - The Technology Monastery',
  description:
    'The programs and organizations the Technology Monastery works with today and is pursuing: people pipelines, universities, technology vendors, land stewardship and trust.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-3';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';
const direct = siteConfig.directContact;

type Partner = { name: string; href: string; what: string; status: 'In use' | 'Pursuing' | 'To propose' };

const groups: { title: string; intro: string; items: Partner[] }[] = [
  {
    title: 'People pipelines',
    intro:
      'Standing sources of residents, volunteers and fellows. The Volunteer Manager opens and keeps these; a full-time host is the reason they can exist.',
    items: [
      { name: 'AmeriCorps VISTA', href: 'https://americorps.gov/', what: 'A 12-month capacity-building member to build the volunteer systems.', status: 'Pursuing' },
      { name: 'AmeriCorps State through PennSERVE', href: 'https://www.pa.gov/agencies/dli/programs-services/workforce-development-home/americorps-in-pennsylvania', what: 'Members placed through an existing Pennsylvania program that takes host sites.', status: 'Pursuing' },
      { name: 'Claude Corps and Claude for Nonprofits', href: 'https://www.anthropic.com/claude-corps/host', what: 'An embedded AI fellow for the volunteer CRM, intake triage and reporting; discounted tools.', status: 'Pursuing' },
      { name: 'PA CareerLink and Workforce Solutions for North Central PA', href: 'https://www.workforcesolutionspa.com/', what: 'Employer services, On-the-Job Training and job placement for residents.', status: 'Pursuing' },
      { name: 'VA Compensated Work Therapy', href: 'https://department.va.gov/vha/compensated-work-therapy/', what: 'Transitional work placements for veterans in recovery under a VA agreement.', status: 'Pursuing' },
      { name: 'Hiring Our Heroes and DoD SkillBridge', href: 'https://www.hiringourheroes.org/', what: 'Fellowships for transitioning service members.', status: 'Pursuing' },
      { name: 'Travis Manion Foundation', href: 'https://www.travismanion.org/', what: 'Veteran service community and referrals (merged with The Mission Continues in 2025).', status: 'Pursuing' },
      { name: 'VetsinTech and Code Platoon', href: 'https://vetsintech.co/', what: 'Veterans with technology skills, and training partners.', status: 'Pursuing' },
      { name: 'Idealist and freeforcharity.org/volunteer', href: 'https://freeforcharity.org/volunteer/', what: 'Free For Charity’s existing volunteer front door and listings.', status: 'In use' },
    ],
  },
  {
    title: 'Universities and colleges',
    intro:
      'Capstone teams and interns, with a summer cohort aligned to the residency proposed to each school for at least the first three years.',
    items: [
      { name: 'Penn State Learning Factory', href: 'https://lf.psu.edu/', what: 'Sponsored engineering capstone projects, every year.', status: 'To propose' },
      { name: 'Smeal College of Business Farrell Center', href: 'https://www.smeal.psu.edu/fcfe', what: 'A one-time matching gift request for the capstone sponsorship.', status: 'To propose' },
      { name: 'Penn State DuBois, PennWest Clarion, IUP, Pitt-Bradford', href: 'https://career.pennwest.edu/channels/employer/', what: 'Regional career services, capstones and interns.', status: 'To propose' },
    ],
  },
  {
    title: 'Technology vendors',
    intro: 'The nonprofit programs behind the free services we deliver. We are neutral between Microsoft and Google.',
    items: [
      { name: 'Microsoft for Nonprofits', href: 'https://www.microsoft.com/en-us/nonprofits', what: 'Donated and discounted Microsoft 365 for the charities we serve.', status: 'In use' },
      { name: 'Google for Nonprofits', href: 'https://www.google.com/nonprofits/', what: 'Workspace, Gemini, NotebookLM and Ad Grants for the charities we serve.', status: 'In use' },
      { name: 'Cloudflare and GitHub Pages', href: 'https://pages.github.com/', what: 'DNS and hosting for every charity website, including this one.', status: 'In use' },
      { name: 'Anthropic Claude for Nonprofits', href: 'https://claude.com/solutions/nonprofits', what: 'Discounted Claude access for AI enablement work.', status: 'Pursuing' },
    ],
  },
  {
    title: 'Land stewardship',
    intro: 'Partners for a forest stewardship plan residents help carry out.',
    items: [
      { name: 'Pennsylvania DCNR service foresters and the state parks', href: 'https://www.pa.gov/agencies/dcnr/recreation/where-to-go/state-parks/find-a-park/cook-forest-state-park', what: 'Stewardship planning and volunteer days with the two neighboring state parks.', status: 'Pursuing' },
      { name: 'USDA NRCS and the county conservation district', href: 'https://www.nrcs.usda.gov/', what: 'Conservation cost-share for stewardship practices.', status: 'Pursuing' },
      { name: 'Family Forest Carbon Program', href: 'https://familyforestcarbon.org/', what: 'Carbon-smart forestry for family forest owners, to evaluate once ownership is settled.', status: 'Pursuing' },
    ],
  },
  {
    title: 'Trust and giving',
    intro: 'Where the records and the donations live.',
    items: [
      { name: 'Candid', href: siteConfig.guidestar.profileUrl, what: 'Free For Charity’s transparency profile and Platinum seal.', status: 'In use' },
      { name: 'Zeffy', href: 'https://www.zeffy.com/', what: 'Zero-fee donation processing for Free For Charity.', status: 'In use' },
    ],
  },
];

const badge = (s: Partner['status']) =>
  s === 'In use'
    ? 'bg-green-500/20 text-green-300 border-green-500/40'
    : s === 'Pursuing'
      ? 'bg-orange-500/20 text-orange-300 border-orange-500/40'
      : 'bg-purple-500/20 text-purple-200 border-purple-500/40';

export default function Partners() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Partners and pipelines</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The programs we use today and the ones we are pursuing. &quot;In use&quot; means Free For
            Charity already works with it. &quot;Pursuing&quot; and &quot;To propose&quot; mean we have
            not yet signed anything, and no organization listed has endorsed the Technology Monastery
            unless it says so itself.
          </p>
        </div>
      </section>

      {groups.map((g, i) => (
        <section
          key={g.title}
          className={`${sectionClass} ${i % 2 === 0 ? 'bg-[#0f0a1e]' : 'bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className={h2Class}>{g.title}</h2>
              <p className={`${pClass} max-w-3xl`}>{g.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {g.items.map((p) => (
                  <article key={p.name} className="bg-[#15102a] border border-purple-500/20 rounded-lg p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-semibold underline decoration-purple-500/60 hover:text-purple-300"
                      >
                        {p.name}
                      </a>
                      <span className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full border ${badge(p.status)}`}>
                        {p.status}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{p.what}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner with us</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Referral partners, schools, workforce programs and vendors: {direct.name} at {direct.email},
            or text {direct.phoneDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`mailto:${direct.email}?subject=${encodeURIComponent('Partnership inquiry')}`}
              variant="secondary"
            >
              Email {direct.name}
            </Button>
            <Button href={placeHref()} variant="primary">
              Read the {siteConfig.place.noun} plan
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
