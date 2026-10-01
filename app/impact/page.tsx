import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Impact and Measurement - The Technology Monastery',
  description:
    'What the Technology Monastery will measure, how it will count, what it will publish, and the models it is built on.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';
const direct = siteConfig.directContact;

const measures = [
  {
    area: 'Charities served',
    what: 'The Monastery cohort: not more than 20 of the 100 charities Free For Charity seeks to support at a time; services delivered per cohort charity; charities graduated back to conventional support each year; and charities served per staff member across the whole 100, published each year as AI-assisted delivery matures.',
    how: 'The intake tracker, from application to written hand-over, and the graduation log.',
  },
  {
    area: 'People',
    what: 'Residents served and the share who complete a season; volunteers still active twelve months after their first season; residents who leave with a portfolio, a reference and a next step.',
    how: 'Volunteer records and exit interviews, counted by the Volunteer Manager.',
  },
  {
    area: 'Pipelines',
    what: 'Pipelines open with a signed agreement, and placements per pipeline per year.',
    how: 'The partner agreements file and the placement log.',
  },
  {
    area: 'Safety',
    what: 'Incidents and near misses, with response time and what changed afterward.',
    how: 'The incident log, reviewed by the board.',
  },
  {
    area: 'Money',
    what: 'Support by source, the share from the largest single source, the endowment balance against its target, and funder reports delivered on time.',
    how: "Free For Charity's books and the annual filing.",
  },
  {
    area: 'Value to charities',
    what: 'The replacement cost of what each charity receives at no cost, using a published per-charity method the board approves.',
    how: 'Market prices for domains, email, website builds, hosting and policy work, reviewed yearly.',
  },
];

const models = [
  {
    name: 'Recurse Center',
    href: 'https://www.recurse.com/',
    what: 'A self-directed retreat for programmers: the reference for how technologists learn and build together in a season.',
  },
  {
    name: "Veterans' villages and Community First! Village",
    href: 'https://mlf.org/community-first/',
    what: 'Supportive residential communities that funders know, and the source of the "village" model of long-term belonging.',
  },
  {
    name: 'VA Compensated Work Therapy',
    href: 'https://department.va.gov/vha/compensated-work-therapy/',
    what: 'Structured transitional work for veterans in recovery, with a host site and a clinical partner kept separate.',
  },
  {
    name: 'AmeriCorps national service',
    href: 'https://americorps.gov/',
    what: 'Time-bound service with a living allowance, training and an education award: the template for a season of service.',
  },
  {
    name: 'Travis Manion Foundation and The Mission Continues',
    href: 'https://www.travismanion.org/',
    what: 'Veteran service platoons and fellowships that turn service into community.',
  },
];

export default function Impact() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Impact and measurement</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What we will count, how we will count it, what we will publish, and the models this work is
            built on. No number appears here until it is verified.
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Where we start</h2>
            <p className={pClass}>
              Free For Charity serves small nonprofits today with volunteer time alone. The counts
              behind that work exist in its records; we will publish them here, with the method, once
              the board approves which figures are public. Until then this page describes the
              measurement system the two staff will run from year one, so a funder can see what will
              be reported and how.
            </p>
            <p className={pClass}>
              Free For Charity as a whole seeks to support 100 charities at a time through their
              digital infrastructure establishment and management journeys. The Technology
              Monastery is specialized for the charities among those 100 that are further along in
              maturity, or that have rarer needs, and that call for higher-level, longer-term
              volunteers. It will start with a group of not more than 20, while Free For
              Charity&apos;s conventional volunteers serve the remaining 80. When a rare need is
              met, that charity graduates back to conventional support, which opens a slot.
            </p>
            <p className={pClass}>
              The theory of change is short. A full-time Volunteer Manager and Program Coordinator turn
              a volunteer-run program into a staffed one. Staff open standing pipelines of people and
              work. A place to live for a season turns short volunteers into long ones. More long
              volunteers, served by AI-assisted methods, means more of the rare, long work gets
              done, which stretches every grant those charities already receive.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>What we will measure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {measures.map((m) => (
                <article key={m.area} className="bg-[#15102a] border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{m.area}</h3>
                  <p className="text-gray-300 mb-3">{m.what}</p>
                  <p className="text-sm text-gray-400">
                    <span className="text-gray-300 font-semibold">How we count: </span>
                    {m.how}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>How we will report</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="border-l-2 border-purple-500/60 pl-4">
                A monthly internal report to the board, and funder reports on the schedule each award
                sets.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                An annual public summary on this page: the counts above, the method behind each, and
                what changed because of what we learned.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                No testimonial or photograph of a resident or volunteer without written consent, under
                Free For Charity&apos;s publicity consent policy.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                Where a number is an estimate, it is labeled one.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Models we learned from</h2>
            <p className={pClass}>
              No existing program combines free technology for charities with a mixed residential
              service cohort on stewarded land. Pieces of it exist and work, and we borrowed from
              each. None of these organizations is affiliated with the Technology Monastery.
            </p>
            <ul className="space-y-4">
              {models.map((m) => (
                <li key={m.href} className="border-l-2 border-purple-500/60 pl-4">
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-white"
                  >
                    {m.name}
                  </a>
                  <span className="block text-sm text-gray-400">{m.what}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ask for the detail</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            The evaluation plan and the logic model are part of the proposal we share with funders
            directly: {direct.name} at {direct.email}, or text {direct.phoneDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/funders/" variant="secondary">
              For funders
            </Button>
            <Button href="/transparency/" variant="primary">
              Transparency
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
