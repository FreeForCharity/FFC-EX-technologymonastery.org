import { Metadata } from 'next';
import Button from '@/components/Button';
import Photo from '@/components/Photo';
import { residentPathway, siteConfig } from '@/lib/site.config';

const place = siteConfig.place;

export const metadata: Metadata = {
  title: `${place.navLabel} - ${siteConfig.name}`,
  description: `A planned charity ${place.nounLower} near Clear Creek State Park, Cook Forest State Park and Sigel, Pennsylvania, where people who want to give back live simply, learn, and serve small nonprofits.`,
};

const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';

const cohorts = [
  {
    title: 'Veterans',
    body: 'People leaving service who want structure, a mission, and a skill set that travels.',
  },
  {
    title: 'Survivors leaving shelters',
    body: 'Women rebuilding after leaving a shelter, referred by partners, with safety designed in from the start.',
  },
  {
    title: 'People in recovery who have stabilized',
    body: 'People beyond the acute phase of recovery for whom service, routine and community are part of staying well.',
  },
  {
    title: 'Public-good technologists',
    body: 'Builders of open-source and other public-good software who want a sabbatical with purpose.',
  },
  {
    title: 'University capstone teams',
    body: `Students who spend a summer at ${place.withArticle} working a real project for a real charity before returning to finish their degree.`,
  },
];

const phases = [
  {
    name: 'Planning',
    status: 'Now',
    body: 'Site planning, utility and septic evaluation, permitting research, volunteer coordination, and the long-term stewardship plan.',
  },
  {
    name: 'Acquire and open the pilot',
    status: 'Phase 1',
    body: 'Acquire the property; build a shared kitchen and gathering space, a coworking area, a community bathhouse, a small number of campsites and RV pads; hire the two staff; welcome the first cohort.',
  },
  {
    name: 'Longer stays',
    status: 'Phase 2',
    body: 'Accessible tiny homes, workshop space, and expanded utilities and outdoor spaces for residents who stay for a season or more.',
  },
  {
    name: 'Learning laboratory',
    status: 'Phase 3',
    body: 'Documented patterns and infrastructure so that what works here can be repeated elsewhere.',
  },
];

const pipelines = [
  {
    title: 'University capstones',
    body: `We plan to sponsor Penn State Learning Factory capstone projects every year, request a one-time matching gift from the Smeal College of Business Farrell Center for Corporate Innovation and Entrepreneurship, and extend the model to universities, colleges and two-year schools around ${place.withArticle}. We will propose to each school that capstone teams join the summer residency for at least the first three years.`,
  },
  {
    title: 'National service and fellowships',
    body: `AmeriCorps members hosted by the Volunteer Manager, and AI-practitioner fellowships that embed people in charities, with ${place.withArticle} as a host site.`,
  },
  {
    title: 'Workforce programs',
    body: 'On-the-job training and work experience under the Workforce Innovation and Opportunity Act once we have the staff to act as an employer of record.',
  },
  {
    title: 'Referral partners',
    body: "Veteran service organizations, women's shelters and recovery programs that refer people who are ready to give back. Partners are named here only once they have agreed in writing.",
  },
  {
    title: 'Land and stewardship',
    body: 'The Pennsylvania DCNR service forester, the county conservation district and USDA conservation programs for a forest stewardship plan residents help carry out, with the two neighboring state parks as natural partners.',
  },
  {
    title: 'TechnoMonasteries',
    body: `A volunteer project helping us build ${place.withArticle} under Free For Charity's Technology Monastery brand, with a long-term hope of a similar place abroad for the open-source community.`,
  },
];

export default function Village() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#1a0b2e]">
        {/* Decorative background photo (hemlocks over Little Clear Creek, Clear Creek State Park) under a dark overlay for text contrast. */}
        <Photo
          src="/images/photos/clear-creek-hemlocks-stream.webp"
          mobileSrc="/images/photos/clear-creek-hemlocks-stream-900.webp"
          mobileWidth={900}
          width={1600}
          height={1200}
          alt=""
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e]/90 via-[#2d1b4e]/85 to-[#4a2c6f]/80"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold tracking-wide uppercase">
            In planning
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{place.navLabel}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A place near Clear Creek State Park, Cook Forest State Park and Sigel, Pennsylvania,
            where people who want to give back can live simply, learn, and serve small nonprofits
            for a season or longer.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Where</h2>
            <figure className="mb-8">
              <Photo
                src="/images/photos/clarion-river-forested-hills.webp"
                width={1800}
                height={1200}
                alt="The Clarion River winding between forested hills under a partly cloudy sky."
                className="w-full rounded-lg border border-purple-500/20 object-cover aspect-[3/2]"
              />
              <figcaption className="mt-3 text-sm text-gray-400">
                The Clarion River, which runs past Cook Forest State Park.
              </figcaption>
            </figure>
            <p className={pClass}>
              {place.noun} will sit in the forested hills of northwestern Pennsylvania near Clear
              Creek State Park, Cook Forest State Park and Sigel, in a year-round outdoor-recreation region
              within reach of the population and technology centers of the northeastern United
              States and Canada. It is rural land with woodland and open ground, existing access and
              nearby utilities, which is why the plan is to acquire and convert rather than build
              from nothing.
            </p>
            <p className={pClass}>
              The setting is the point: quiet enough for focused work and for recovery, close enough
              to parks and neighbors to be part of a community, and large enough to grow in phases.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>Who it is for</h2>
            <p className={`${pClass} text-center max-w-3xl mx-auto mb-10`}>
              Open to anyone who wants to give back through charitable work. Non-secular, with no
              religious test. These are the people we expect to welcome first.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cohorts.map((c) => (
                <article key={c.title} className="border border-purple-500/20 rounded-lg p-6 bg-[#15102a]">
                  <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-gray-300 text-sm">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>How a stay works</h2>
            <ol className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
              {residentPathway.map((p, i) => (
                <li key={p.step} className="border border-purple-500/20 rounded-lg p-5">
                  <p className="text-orange-400 text-xs font-semibold tracking-wide uppercase mb-1">
                    Step {i + 1}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">{p.step}</h3>
                  <p className="text-gray-300 text-sm">{p.body}</p>
                </li>
              ))}
            </ol>
            <p className={`${pClass} mt-8`}>
              Every resident gives back by serving the charities the Technology Monastery already
              supports and by helping run {place.withArticle}. Those charities are a cohort of not more than
              20 of the 100 that Free For Charity seeks to support at a time: the ones further
              along in maturity, or with rarer needs, that call for longer-term volunteers. That is
              what turns a short burst of volunteer
              energy into work that lasts, measured in seasons and years rather than hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Open to anyone, and safe for everyone</h2>
            <p className={pClass}>
              {place.noun} will be substance-free. Residents are screened, referrals are verified, and
              the people who come from shelters and recovery programs are supported by partners who
              know them. Staff will be trained in trauma-informed practice, there will be a crisis plan with
              local partners, and the community agreements cover respect and consent, quiet hours,
              shared work, how conflicts are resolved, and how someone can leave without stigma.
              The full policies will be approved by Free For Charity&apos;s board before the first
              resident arrives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>The people who run it</h2>
            <p className={pClass}>
              The grant we are seeking funds two full-time positions from the first year. The
              Volunteer Manager recruits, places and supports residents and remote volunteers and
              opens the pipelines below. The Program Coordinator runs intake, service delivery to
              charities, partner relationships and outcomes reporting.
            </p>
            <p className={pClass}>
              Our five-year goal is to have both roles fully funded, with their endowment under way and on a
              published path, and the permanent costs of {place.withArticle} covered entirely by foundation
              grants, public support, sponsorships and recurring giving. {place.noun} exists to give
              the whole Free For Charity mission that stability.
            </p>
            <p className={pClass}>
              We do not charge the charities we serve, and we do not charge the people who come to
              do that work. There is no rent, no nightly rate and no fee to stay. That is a
              deliberate difference from a campground or a retreat center: every dollar a funder
              gives here is multiplied across the small charities that then receive their
              technology, AI and web services at no cost, which stretches the grants and gifts
              those same funders already make to them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>Phases</h2>
            <figure className="mt-8">
              <Photo
                src="/images/photos/state-park-walk-in-campsite.webp"
                width={1280}
                height={960}
                alt="A tent and a shade canopy on a grassy walk-in campsite among trees beside a lake in a public state park."
                className="w-full rounded-lg border border-purple-500/20 object-cover aspect-[2/1]"
              />
              <figcaption className="mt-3 text-sm text-gray-400 text-center">
                Phase 1 starts small: a handful of campsites and RV pads, like those in any public
                park campground.
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {phases.map((ph) => (
                <article key={ph.name} className="border border-purple-500/20 rounded-lg p-6 bg-[#15102a]">
                  <p className="text-orange-400 text-xs font-semibold tracking-wide uppercase mb-1">{ph.status}</p>
                  <h3 className="text-lg font-bold text-white mb-2">{ph.name}</h3>
                  <p className="text-gray-300 text-sm">{ph.body}</p>
                </article>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-6 text-center">
              Facilities, counts and dates are planning targets and will be confirmed as permits,
              purchase and funding are secured.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>Target partners, pipelines and resources</h2>
            <p className={`${pClass} text-center max-w-3xl mx-auto mb-10`}>
              The plan is built around institutions that already do parts of this well. None are
              commitments until they are agreed in writing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pipelines.map((p) => (
                <article key={p.title} className="border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Permits and stewardship</h2>
            <p className={pClass}>
              As we read the rules, a campground in Pennsylvania with five or more sites needs an annual permit from the
              Department of Environmental Protection covering water, sewage, waste and sanitation,
              alongside on-lot sewage permits, township land-development and building approvals,
              and accessibility requirements for the bathhouse and tiny homes. Those permits are
              the critical path for the first phase, and we are planning around them rather than
              after them.
            </p>
            <p className={pClass}>
              The woodland will be managed under a forest stewardship plan developed with the state
              service forester, with conservation cost-share programs as a complement to the grant.
              Stewardship work is part of how residents serve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Help build it</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Funders, referral partners, schools, neighbors and future residents:
            we would like to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact/" variant="primary">
              Contact us
            </Button>
            <Button href="/serve/" variant="secondary">
              Come and serve
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
