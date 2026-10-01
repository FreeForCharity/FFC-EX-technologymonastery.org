import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

const problems = [
  {
    title: 'Small nonprofits cannot hire or keep technical talent',
    body: 'A charity with a small budget cannot compete for engineers, administrators or AI expertise. Email, websites, licensing and data end up neglected, and the mission pays for it.',
  },
  {
    title: 'Volunteer energy is short-lived',
    body: 'Passionate volunteers arrive, help for a few weeks, and leave before the work is finished. Charities receive hand-offs instead of outcomes, and the same problems come back.',
  },
  {
    title: 'The mission runs on unpaid leadership',
    body: 'Free For Charity serves its charities with volunteer time alone. That caps how many organizations we can support, and how reliably, no matter how much demand there is.',
  },
];

const solutions = [
  {
    title: 'A free service program, staffed once the grant lands',
    body: 'Email and productivity on Microsoft or Google nonprofit programs, free .org domains, fast static websites, AI enablement and training, delivered at no cost to qualifying charities.',
    href: '/services/',
    cta: 'Our services',
  },
  {
    title: 'A campus where service is a season',
    body: 'A planned residential campus near Clear Creek State Park, Cook Forest State Park and Sigel, Pennsylvania, where people who want to give back live simply, learn the stack, serve real charities and move on stronger. Open to anyone, with no religious test.',
    href: '/campus/',
    cta: 'The campus plan',
  },
  {
    title: 'Two full-time roles that make it last',
    body: 'A Volunteer Manager and a Program Coordinator turn a volunteer-run program into a staffed one and open the pipelines that need a full-time host. Our five-year goal is to have both positions fully funded, with their endowment under way and on a published path.',
    href: '/about/',
    cta: 'Why staff matter',
  },
];

const todayServices = [
  {
    title: 'Domains and email',
    body: 'A free .org domain and nonprofit email and collaboration on Microsoft 365 or Google Workspace, set up and kept in order.',
  },
  {
    title: 'Websites',
    body: 'Fast, secure static websites hosted at no cost, with the legal, privacy and analytics pieces a professional site needs.',
  },
  {
    title: 'AI enablement',
    body: 'Help deciding where AI fits, a sensible acceptable-use policy, and assistants for the questions your supporters ask most.',
  },
  {
    title: 'Training and support',
    body: 'Plain-language training for staff and volunteers, and ongoing support so the systems keep working after setup.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" aria-hidden="true"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-300 text-sm font-semibold tracking-wide uppercase">
              A project of Free For Charity
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Free technology for small charities, and a place for the people who build it.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl">
              The Technology Monastery runs the systems small nonprofits need, at no cost, through
              volunteers who want to give back. We are now planning a residential campus in
              Pennsylvania so that service can be a season of someone&apos;s life rather than a
              spare evening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/get-started/" variant="secondary">
                Get started
              </Button>
              <Button href="/campus/" variant="primary">
                The campus plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <p className="text-orange-400 text-sm font-semibold tracking-wide uppercase mb-3 text-center">
            The problems we are solving
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Three gaps, one cause
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {problems.map((p) => (
              <article
                key={p.title}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-300">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <p className="text-orange-400 text-sm font-semibold tracking-wide uppercase mb-3 text-center">
            Our solution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            A service program, a campus, and the staff to run both
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-10">
            The campus is not a new charity. It is housing and community wrapped around a service
            program that already works, with two funded roles so the mission no longer depends on
            unpaid time. It is funded by grants, public support and recurring giving, not by
            charging anyone: the charities we serve pay nothing, and neither do the people who come
            to do the work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((s) => (
              <article
                key={s.title}
                className="flex flex-col bg-[#15102a] border border-purple-500/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-300 mb-6 flex-1">{s.body}</p>
                <Button href={s.href} variant="primary" className="self-start text-sm">
                  {s.cta}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Today */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we do today</h2>
            <p className="text-gray-300 max-w-2xl mb-10">
              Every service is free for qualifying 501(c)(3) organizations. It starts with a
              conversation about what you have, what you need, and what we can take off your plate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {todayServices.map((s) => (
                <article key={s.title} className="border border-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm">{s.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/services/" variant="primary">
                All services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and resources */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Target partners and resources
              </h2>
              <p className="text-gray-300 mb-4">
                The campus works because other institutions already do parts of this well. These
                are the partners and programs we are building the plan around. None are commitments
                until they are agreed in writing.
              </p>
              <Button href="/campus/" variant="primary">
                Partners and pipelines
              </Button>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="border-l-2 border-purple-500/60 pl-4">
                <span className="text-white font-semibold">University capstones.</span> Annual
                sponsorship of Penn State Learning Factory capstone projects, a one-time matching
                request to the Smeal College of Business Farrell Center, and regional universities,
                colleges and two-year schools.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                <span className="text-white font-semibold">National service and fellowships.</span>{' '}
                AmeriCorps members, AI-practitioner fellowships that embed people in charities, and
                workforce programs once we can host them.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                <span className="text-white font-semibold">Referral partners.</span> Veteran service
                organizations, women&apos;s shelters and recovery programs that refer people who are
                ready to give back.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                <span className="text-white font-semibold">Land and stewardship.</span> The
                Pennsylvania DCNR service forester, the county conservation district and USDA
                conservation programs, with the two neighboring state parks as natural partners.
              </li>
              <li className="border-l-2 border-purple-500/60 pl-4">
                <span className="text-white font-semibold">TechnoMonasteries.</span> A volunteer
                project helping us build the campus, operating under Free For Charity&apos;s
                Technology Monastery brand.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get involved</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you run a small nonprofit, want to serve, represent a partner or a funder, or
            can give, there is a place to start.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Button href="/get-started/" variant="secondary">
              Nonprofits and volunteers
            </Button>
            <Button href="/funders/" variant="primary">
              Partners and funders
            </Button>
            <a
              href={siteConfig.integrations.zeffyDonationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-purple-500/60 text-white hover:border-purple-400 hover:bg-purple-900/20 transition-all"
            >
              Donate through Free For Charity
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-400 max-w-2xl mx-auto">
            The Technology Monastery is a project of Free For Charity, a US 501(c)(3) public
            charity, EIN {siteConfig.ein}. It is not yet a separate legal entity, so gifts and
            grants are made to Free For Charity. Our goal is to become a stand-alone, IRS- and
            state-approved charity as the program matures.
          </p>
        </div>
      </section>
    </>
  );
}
