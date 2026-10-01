import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Hiring - The Technology Monastery',
  description:
    'Our hiring plan for the two grant-funded staff roles, a Volunteer Manager and a Program Coordinator: what they do, planned pay ranges, where we will post, and how to express interest now.',
};

const direct = siteConfig.directContact;
const mail = (subject: string) => `mailto:${direct.email}?subject=${encodeURIComponent(subject)}`;

const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-gray-300 mb-4 leading-relaxed';

const roles = [
  {
    title: 'Volunteer Manager',
    owns: 'People',
    purpose:
      'Finds the people who come here, brings them in safely, and turns a season of service into years of it.',
    outcomes: [
      'Open at least three standing volunteer pipelines in year one, each with a signed agreement and a first placement.',
      'Recruit, screen and welcome the first resident cohort and the remote volunteer bench that supports it.',
      'By year five, most people who complete a first season are still serving twelve months later.',
    ],
    brings: [
      'Three or more years recruiting or managing volunteers, residents, students or service members, including in-person supervision.',
      'Experience working respectfully with veterans, survivors of domestic violence, or people in recovery.',
      "Plain, warm communication; everyday technology fluency; a driver's license; a clear background check.",
    ],
    band: '$54,000 to $64,000',
    subject: 'Volunteer Manager',
  },
  {
    title: 'Program Coordinator',
    owns: 'Work',
    purpose:
      'Turns requests from small charities into delivered services and honest numbers, and keeps the place compliant.',
    outcomes: [
      'Every charity request tracked from application to hand-over, on both the Microsoft and Google stacks.',
      'Partner agreements signed and kept current; funder reports delivered on time, every time.',
      'Every resident and student capstone team has a scoped project with a mentor and a finish line.',
    ],
    brings: [
      'Three or more years coordinating programs, projects or services, with strong tracker-and-hand-off habits.',
      'Microsoft 365 or Google Workspace basics and the willingness to learn the other; comfort with AI assistants.',
      "Clear writing for reports and training; a driver's license; a clear background check.",
    ],
    band: '$50,000 to $60,000',
    subject: 'Program Coordinator',
  },
];

const steps = [
  {
    when: 'Now',
    what: 'Position descriptions, scorecards, interview guides and onboarding plans are drafted. Pay bands are set from Pennsylvania market data. We collect expressions of interest.',
  },
  {
    when: 'Award month',
    what: 'The board adopts personnel policies and both postings go live on the job boards below. Applications open for about four weeks.',
  },
  {
    when: 'Weeks 4 to 10',
    what: 'Screening, phone interviews, a panel interview with a board member and, where possible, a referral partner, a short practical exercise, and references.',
  },
  {
    when: 'Within 120 days',
    what: 'Offers made, background checks cleared, both people start. Their first 90 days are planned before they arrive.',
  },
];

const channels = [
  {
    name: 'Idealist',
    note: 'Free For Charity already has an organization page there; the two paid roles will be posted as 30-day job listings ($145 each for a US nonprofit). VolunteerMatch merged into Idealist in 2025.',
    href: 'https://www.idealist.org/en/nonprofit/356bfc8e2ae64f83beea4a4e677e99d7-free-for-charity-state-college',
  },
  {
    name: 'PA CareerLink and Workforce Solutions for North Central PA',
    note: "Pennsylvania's workforce system: free employer postings, local candidates and employer services through the Jefferson County office and the regional Workforce Development Board.",
    href: 'https://www.pa.gov/agencies/dli/programs-services/workforce-development-home/pa-careerlink-',
  },
  {
    name: 'LinkedIn and Indeed',
    note: "One free LinkedIn post at a time and up to three free Indeed posts a month, shared through Free For Charity's network and board.",
    href: 'https://nonprofit.linkedin.com/',
  },
  {
    name: 'Penn State and regional colleges',
    note: 'Nittany Lion Careers for every Penn State campus including DuBois, and Handshake for PennWest Clarion and IUP; all free to employers.',
    href: 'https://career.engr.psu.edu/employers/recruiting/nlc.aspx',
  },
  {
    name: 'PANO',
    note: 'The Pennsylvania Association of Nonprofit Organizations job board ($25 for members, $100 otherwise, 30 days).',
    href: 'https://pano.org/benefits/job-board/',
  },
  {
    name: 'AmeriCorps VISTA and veteran programs',
    note: 'Parallel routes that place people beside the two staff: a VISTA member for capacity building, VA Compensated Work Therapy, Hiring Our Heroes fellowships and SkillBridge.',
    href: 'https://americorps.gov/',
  },
  {
    name: 'Taproot Plus',
    note: 'Free pro bono projects for the hiring process itself: employee handbook, compensation review and interview design. It is not a job board.',
    href: 'https://taprootplus.org/',
  },
  {
    name: 'freeforcharity.org/volunteer',
    note: "Free For Charity's existing volunteer front door, which will link to these roles.",
    href: 'https://freeforcharity.org/volunteer/',
  },
];

const comparables = [
  {
    label: 'Pennsylvania Center for Workforce Information and Analysis: occupational wages, North Central Workforce Development Area',
    href: 'https://www.pa.gov/content/dam/copapwp-pagov/en/dli/documents/cwia/products/occupational-wages/wda/ncwda_ow.pdf',
    note: 'May 2025 wages for Jefferson County and its neighbors. Social and community service managers: median $72,190, entry $51,230. Community and social service specialists: median $38,510, mean $55,390.',
  },
  {
    label: 'U.S. Bureau of Labor Statistics: Social and Community Service Managers',
    href: 'https://www.bls.gov/ooh/management/social-and-community-service-managers.htm',
    note: 'National median $80,390 (May 2025); the lowest ten percent earned under $53,150.',
  },
  {
    label: 'Salary.com: Volunteer Coordinator and Nonprofit Program Coordinator, Pennsylvania',
    href: 'https://www.salary.com/research/salary/benchmark/volunteer-coordinator-salary/pa',
    note: 'Statewide medians of $54,196 and $67,294 respectively (October 2026), with rural interior towns lower.',
  },
  {
    label: 'Idealist: nonprofit jobs in Pennsylvania',
    href: 'https://www.idealist.org/en/nonprofit-jobs-pennsylvania',
    note: 'Live postings for similar titles; recent regional coordinator and manager roles posted between $38,000 and $65,000.',
  },
];

export default function Hiring() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <p className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold tracking-wide uppercase">
            Hiring plan
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Two roles that turn volunteer time into a program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The grant we are seeking funds a Volunteer Manager and a Program Coordinator from year
            one. Here is what they will do, what we plan to pay, where we will post, and how to tell
            us you are interested before the postings open.
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto border border-orange-500/40 bg-orange-500/10 rounded-lg p-6 text-gray-200">
            <p className="font-semibold text-white mb-2">Plain statement of status</p>
            <p>
              Neither role is open today. Both are contingent on funding. They would be Free For
              Charity&apos;s first full-time paid staff positions, which is why the plan, the pay and the
              process are published here before an award rather than after.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>The roles</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-center mb-10">
              One owns people, one owns work. Both are full-time, based near Clear Creek State Park,
              Cook Forest State Park and Sigel, Pennsylvania, with regular remote work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {roles.map((r) => (
                <article
                  key={r.title}
                  className="flex flex-col bg-[#15102a] border border-purple-500/20 rounded-lg p-6"
                >
                  <p className="text-orange-400 text-xs font-semibold tracking-wide uppercase mb-2">
                    Owns {r.owns}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-3">{r.title}</h3>
                  <p className="text-gray-300 mb-5">{r.purpose}</p>
                  <h4 className="text-white font-semibold mb-2">What they will achieve</h4>
                  <ul className="space-y-2 text-gray-300 text-sm mb-5 list-disc pl-5">
                    {r.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                  <h4 className="text-white font-semibold mb-2">What they bring</h4>
                  <ul className="space-y-2 text-gray-300 text-sm mb-5 list-disc pl-5">
                    {r.brings.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-purple-500/20 pt-4">
                    <p className="text-gray-300 text-sm">
                      <span className="text-white font-semibold">Planned salary band:</span> {r.band}{' '}
                      per year, plus benefits as adopted by the board. Full-time, exempt, grant-funded
                      for five years with the goal of a permanently endowed position.
                    </p>
                    <a
                      href={mail(r.subject)}
                      className="mt-4 inline-block px-5 py-2.5 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
                    >
                      Express interest: {r.title}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>How we set the pay</h2>
            <p className={pClass}>
              The bands are planning ranges for a rural Pennsylvania nonprofit employer, set on
              1 October 2026 from the public sources below. They sit above the Pennsylvania volunteer-coordinator median and the regional
              community-service-specialist median, and below the medians for nonprofit program
              coordinators and community-service managers, so that the roles attract people who
              will stay without pricing a small organization out of its own plan. Both are reviewed against current data before each posting goes live, and the
              grant budget carries the fully loaded cost: salary, employer taxes, benefits and the
              direct costs of the work.
            </p>
            <ul className="space-y-3">
              {comparables.map((c) => (
                <li key={c.href} className="border-l-2 border-purple-500/60 pl-4 text-gray-300">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-white"
                  >
                    {c.label}
                  </a>
                  <span className="block text-sm text-gray-400">{c.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${h2Class} text-center`}>The timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.when} className="bg-[#15102a] border border-purple-500/20 rounded-lg p-5">
                  <p className="text-orange-400 text-sm font-semibold mb-2">{s.when}</p>
                  <p className="text-gray-300 text-sm">{s.what}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm text-center mt-6">
              Selection panels include a Free For Charity board member and, where possible, a
              referral partner. Every applicant receives a decision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${h2Class} text-center`}>Where we will post</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#15102a] border border-purple-500/20 rounded-lg p-5 hover:border-purple-400 transition"
                >
                  <p className="text-white font-semibold mb-1">{c.name}</p>
                  <p className="text-gray-300 text-sm">{c.note}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Equal opportunity</h2>
            <p className={pClass}>
              Free For Charity is an equal opportunity employer. We make employment decisions without
              regard to race, color, religion, sex, sexual orientation, gender identity, national
              origin, age, disability, veteran status, or any other status protected by law, and we
              provide reasonable accommodations in the hiring process on request. Veterans, people in
              recovery, and survivors who have rebuilt their lives are encouraged to apply.
            </p>
            <p className={pClass}>
              Both roles work alongside adults in vulnerable situations, so every offer is contingent
              on a background check under Free For Charity policy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tell us you are interested</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Send a short note about yourself to {direct.name} at {direct.email}, or text{' '}
            {direct.phoneDisplay}. We will keep it and contact you when the posting opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={mail('Hiring interest')} variant="secondary">
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
