import { Metadata } from 'next';
import Button from '@/components/Button';
import PrintButton from '@/components/PrintButton';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'The Plan in One Page - The Technology Monastery',
  description:
    'The public briefing for funders: the problem, the stack a charity leaves with, how a multi-year capacity grant is structured, why an owned place, the first summer, and the charities served over five years.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';
const direct = siteConfig.directContact;
const mail = (subject: string) => `mailto:${direct.email}?subject=${encodeURIComponent(subject)}`;

const stack = [
  {
    rung: 'Identity',
    what: 'Own domain and DNS, professional email on Google Workspace or Microsoft 365, shared calendars and files.',
  },
  {
    rung: 'Presence',
    what: 'An accessible website with privacy, cookie, terms and donation policies, search, and the analytics chain end to end.',
  },
  {
    rung: 'Money',
    what: 'Zero-fee donation processing, donor records, a Candid profile and transparency seal, and grant-ready documents.',
  },
  {
    rung: 'People',
    what: 'Their own volunteer management system: intake, screening, scheduling, hours and recognition.',
  },
  {
    rung: 'Governance',
    what: 'Registered agent service, a compliance calendar, board and policy templates, and records that survive a leadership change.',
  },
  {
    rung: 'Capability',
    what: 'AI tools from vendor nonprofit programs, training on both productivity stacks, security defaults, and a named Free For Charity volunteer to call.',
  },
];

const conditions = [
  {
    title: 'Front-loaded, then tapering.',
    body: 'The early years are carried while the two hires open the other sources; the grant share then falls each year, to under 40 percent of cost in year five.',
  },
  {
    title: 'Capital inside year one.',
    body: 'The acquisition and initial improvements close in the first quarter so the first summer runs on owned ground. Any later phase is a separate ask, never hidden in operating support.',
  },
  {
    title: 'Raises tied to results.',
    body: 'Each staff increase is contingent on the next year of funding being secured and the prior year scorecard being met: pipelines signed, cohort filled, retention held.',
  },
  {
    title: 'Annual release against a published report.',
    body: 'Charities served and graduated, volunteer retention at twelve months, the incident record, support by source, and the endowment balance.',
  },
  {
    title: 'Endowment seeded early.',
    body: 'A year-two surplus, planned gifts and a named-position campaign start the fund that carries the two roles when the grant ends.',
  },
];

const timeline = [
  {
    when: 'Quarter one',
    what: 'Award. Acquisition and initial improvements close. The Volunteer Manager is hired and living on site.',
  },
  {
    when: 'May to September',
    what: 'First season: four to six residents at campsites and RV pads, recruited through partners that already exist. No winterized housing is needed.',
  },
  {
    when: 'By September',
    what: 'Goal: the first ten charities set up with the full stack. First pipelines signed with veteran programs, PA CareerLink and Penn State.',
  },
  {
    when: 'Winter into year two',
    what: 'The Program Coordinator is hired, Learning Factory projects begin, the cohort grows toward 20, and the second season is planned.',
  },
];

// Chart geometry, written out so the drawing can be checked by hand.
// viewBox is 520 by 210. The plot runs from y = 14 (a value of 80) down to
// y = 166 (a value of 0): 152 px for 80 charities, so 1.9 px per charity.
// The five year groups share the 462 px between x = 44 and x = 506, so each
// group is 92.4 px wide and centered at 44 + 92.4 * (i + 0.5): 90.2, 182.6,
// 275.0, 367.4, 459.8. The two 22 px bars in a group sit at center - 23 and
// center + 1. Bar height = value * 1.9 and bar top = 166 - height, so an
// active cohort of 20 is 38 px tall with its top at y = 128, and the year
// five cumulative figure of 70 is 133 px tall with its top at y = 33.
const chart = { left: 44, right: 506, top: 14, base: 166, max: 80, barWidth: 22 };
const pxPerUnit = (chart.base - chart.top) / chart.max;
const charities = [
  { year: 1, active: 10, established: 10 },
  { year: 2, active: 20, established: 22 },
  { year: 3, active: 20, established: 36 },
  { year: 4, active: 20, established: 52 },
  { year: 5, active: 20, established: 70 },
];
const groupWidth = (chart.right - chart.left) / charities.length;
const gridValues = [0, 20, 40, 60, 80];
// Palette on the #15102a card background: purple-400 (#c084fc) is about
// 7.0:1 against it and orange-400 (#fb923c) about 8.2:1, both above the
// 3:1 floor for graphics; the gray-400 (#9ca3af) axis text is about 7.3:1.
const activeFill = '#c084fc';
const establishedFill = '#fb923c';
const axisText = '#9ca3af';
const gridStroke = '#3b2d5c';

const managerPoints = [
  'A Certified Scrum Master (SAFe or PMI-ACP) held or completed in the first year; work planned in GitHub, where Free For Charity projects already live.',
  'Google Workspace or Microsoft 365 at hire, and both at full performance within the first year.',
  'Three or more years leading volunteers, residents, students or service members in person, with experience of at least one cohort: veterans, survivors of domestic violence, people in recovery.',
  'The salary band is published on the hiring page, with housing, meals and a shared site vehicle on top; each step up is tied to results and checked against the state wage tables for Jefferson County and its neighbors.',
];

const partnerships = [
  {
    group: 'People',
    items: [
      'AmeriCorps VISTA',
      'PennSERVE host site',
      'VA Compensated Work Therapy',
      'Hiring Our Heroes',
      'DoD SkillBridge',
      'Travis Manion Foundation',
      'PA CareerLink',
      'Workforce Solutions for North Central PA',
      'Claude Corps fellow',
    ],
  },
  {
    group: 'Schools',
    items: [
      'Penn State Learning Factory, two capstone projects a year',
      'Smeal Farrell Center match',
      'Penn State DuBois',
      'PennWest Clarion',
      'IUP',
    ],
  },
  {
    group: 'Money',
    items: [
      'Veterans, recovery, housing-stability and rural Pennsylvania foundations',
      'Free For Charity annual fund and Zeffy',
      'Vendor nonprofit programs',
      'Named-position endowment campaign',
    ],
  },
];

export default function Briefing() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <p className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold tracking-wide uppercase">
            For funders
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">The plan in one page</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A multi-year capacity grant, structured as capital plus five years of tapering operating
            support, buys a small owned place in rural Pennsylvania, the two staff who run it in
            sequence, and the partnerships that keep both funded after the grant ends. Nothing is
            charged to the charities or to the people who serve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/funders/documents/" variant="secondary">
              Documents for funders
            </Button>
            <Button href="/funders/" variant="primary">
              Back to the funders page
            </Button>
            <PrintButton />
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>A validated problem, solved at a fraction of the cost</h2>
            <p className={pClass}>
              Most of the small charities that come to Free For Charity have run for one or two years
              on a single personal Gmail address. No domain, no professional email, no website, no
              donor records, no volunteer system, no registered agent, no policies a funder can read.
              They are doing real work and cannot pass the first page of a funder&apos;s due diligence.
              Paid help for that stack costs five figures a year, which is exactly what they do not
              have.
            </p>
            <p className={pClass}>
              Free For Charity stands up the whole digital and business infrastructure at no cost to
              the charity, using vendor nonprofit programs, long-term volunteers and AI-assisted
              delivery. Once a charity is established, maintenance is light and it graduates to
              conventional support, which opens the slot for the next one.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mt-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              The stack a charity leaves with
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-5">
              {stack.map((s, i) => (
                <article key={s.rung} className="bg-[#15102a] border border-purple-500/20 rounded-lg p-6">
                  <p className="text-orange-300 text-sm font-semibold tracking-wide uppercase mb-1">
                    Rung {i + 1}
                  </p>
                  <h4 className="text-xl font-bold text-white mb-2">{s.rung}</h4>
                  <p className="text-gray-300">{s.what}</p>
                </article>
              ))}
            </div>
            <p className="text-sm text-gray-400 mt-6 text-center">
              Delivered through programs Free For Charity already uses: Google for Nonprofits,
              Microsoft for Nonprofits, Cloudflare, GitHub Pages, Zeffy and Candid. The per-charity
              value method will be published once the board approves it.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>How the grant is structured so it works</h2>
            <p className={pClass}>
              The ask is a multi-year capacity grant: capital for the place in year one, plus five
              years of operating support that tapers. Year one is one hire, the Volunteer Manager,
              and a first summer season. The Program Coordinator is hired in year two. The grant
              carries the early years while the two staff open the other sources; by year five the
              lead grant is under 40 percent of cost, and no single source is above 40 percent.
            </p>
            <ol className="space-y-4 mt-6">
              {conditions.map((c, i) => (
                <li key={c.title} className="flex gap-4 bg-[#15102a] border border-purple-500/20 rounded-lg p-5">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-gray-300">
                    <span className="text-white font-semibold">{c.title}</span> {c.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Why an owned place, not a city office</h2>
            <p className={pClass}>
              Technology volunteers can work from anywhere. What they cannot get in a city is a reason
              to stay for a season. A place to live, eat and work together turns a weekend volunteer
              into a resident who finishes what they start, and it gives the charities we serve a
              team that is still there in month four.
            </p>
            <p className={pClass}>
              It is also the cheaper option over five years. An office and rented housing for a cohort
              leave nothing behind when the lease ends; a modest rural site, bought outright and
              improved in phases, costs less over the same five years and leaves an asset the
              program keeps. We describe the property only at the regional level online, near Clear
              Creek State Park, Cook Forest State Park and Sigel, Pennsylvania; the comparison figures
              are in the business plan we share with funders directly.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>Year one concentrates its value in one summer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 gap-5">
              {timeline.map((t) => (
                <article key={t.when} className="bg-[#15102a] border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{t.when}</h3>
                  <p className="text-gray-300">{t.what}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Charities served rise every year on a fixed team</h2>
            <div className="bg-[#15102a] border border-purple-500/20 rounded-lg p-6">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300 mb-4">
                <span className="inline-flex items-center gap-2">
                  <span
                    className="print-swatch inline-block w-3 h-3 rounded-sm"
                    style={{ backgroundColor: activeFill }}
                    aria-hidden="true"
                  />
                  Active cohort, capped at 20
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    className="print-swatch inline-block w-3 h-3 rounded-sm"
                    style={{ backgroundColor: establishedFill }}
                    aria-hidden="true"
                  />
                  Charities established, cumulative
                </span>
              </div>
              <svg
                viewBox="0 0 520 210"
                className="w-full h-auto"
                role="img"
                aria-label="Paired columns by year: the active cohort is 10 in year one and 20 from year two on, while cumulative charities established rise 10, 22, 36, 52 and 70. Planning targets."
              >
                <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11" fill={axisText}>
                  {gridValues.map((v) => {
                    const y = chart.base - v * pxPerUnit;
                    return (
                      <g key={v}>
                        <line x1={chart.left} y1={y} x2={chart.right} y2={y} stroke={gridStroke} strokeWidth="1" />
                        <text x={chart.left - 8} y={y + 4} textAnchor="end">
                          {v}
                        </text>
                      </g>
                    );
                  })}
                  {charities.map((c, i) => {
                    const center = chart.left + groupWidth * (i + 0.5);
                    const activeH = c.active * pxPerUnit;
                    const estH = c.established * pxPerUnit;
                    return (
                      <g key={c.year}>
                        <rect
                          x={center - chart.barWidth - 1}
                          y={chart.base - activeH}
                          width={chart.barWidth}
                          height={activeH}
                          rx="3"
                          fill={activeFill}
                        >
                          <title>{`Year ${c.year}: active cohort ${c.active}`}</title>
                        </rect>
                        <rect
                          x={center + 1}
                          y={chart.base - estH}
                          width={chart.barWidth}
                          height={estH}
                          rx="3"
                          fill={establishedFill}
                        >
                          <title>{`Year ${c.year}: cumulative established ${c.established} (planning target)`}</title>
                        </rect>
                        <text
                          x={center + 1 + chart.barWidth / 2}
                          y={chart.base - estH - 5}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontWeight="600"
                        >
                          {c.established}
                        </text>
                        <text x={center} y={chart.base + 16} textAnchor="middle">
                          {`Year ${c.year}`}
                        </text>
                      </g>
                    );
                  })}
                  <line x1={chart.left} y1={chart.base} x2={chart.right} y2={chart.base} stroke={axisText} strokeWidth="1" />
                </g>
              </svg>
              <p className="text-sm text-gray-400 mt-3">
                Planning targets, not results. No number is published as a result until it is
                verified; the method is on the impact page.
              </p>
            </div>
            <p className={`${pClass} mt-6`}>
              Free For Charity seeks to support 100 charities at a time; the Monastery takes the 20
              with the deepest needs. Setting a charity up is the hard part. Once its domain, email,
              site, donor and volunteer systems and policies are in place, maintenance is light and it
              graduates back to conventional volunteers, which opens the slot. The active cohort stays
              flat while the total served climbs, on the same two staff.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Why the Volunteer Manager is a senior technical lead</h2>
            <p className={pClass}>
              The volunteers who do this work are college-educated engineers and administrators with
              rare, in-demand skills who earn well in their day jobs and give Free For Charity their
              evenings and seasons. Keeping them requires someone they respect as a peer: a manager
              who runs the work as sprints with a real backlog and speaks both productivity stacks.
            </p>
            <ul className="space-y-3">
              {managerPoints.map((m) => (
                <li key={m} className="border-l-2 border-purple-500/60 pl-4 text-gray-300">
                  {m}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/hiring/" variant="secondary">
                See the hiring plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>The partnerships that carry it after year five</h2>
            <p className={pClass}>
              Each of these is planned or in conversation unless the partners page says otherwise;
              that page carries the status of every one.
            </p>
            <div className="space-y-5">
              {partnerships.map((p) => (
                <div key={p.group} className="flex flex-wrap items-start gap-2">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 text-xs font-semibold tracking-wide uppercase">
                    {p.group}
                  </span>
                  {p.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[#15102a] border border-purple-500/30 text-gray-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/partners/" variant="secondary">
                Partners and pipelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The rest of the plan</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            The full budget and business plan are shared with funders directly: {direct.name} at{' '}
            {direct.email}, or text {direct.phoneDisplay}. The Technology Monastery is a proposed
            project of {siteConfig.supportedBy.name}, a US 501(c)(3) public charity, EIN{' '}
            {siteConfig.ein}; these would be its only paid staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={mail('Funding conversation')} variant="secondary">
              Email {direct.name}
            </Button>
            <Button href="/funders/documents/" variant="primary">
              Documents for funders
            </Button>
          </div>
          <p className="hidden print:block text-sm mt-6">
            Printed from technologymonastery.org/funders/briefing/, which is the current version.
            Counts are planning targets. Documents for funders: technologymonastery.org/funders/documents/
          </p>
        </div>
      </section>
    </>
  );
}
