import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'About - The Technology Monastery',
  description:
    'What the Technology Monastery is, how it serves small nonprofits today, the campus we are planning in Pennsylvania, and why two funded staff roles are the point.',
};

const sectionClass = 'py-16';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-6';
const pClass = 'text-lg text-gray-300 mb-4 leading-relaxed';

export default function About() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About the Technology Monastery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A project of Free For Charity: free technology for small nonprofits today, and a campus
            where the people who deliver it can live, learn and serve.
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Our mission</h2>
            <p className={pClass}>
              Small nonprofits should not have to choose between their mission and their technology.
              The Technology Monastery removes that choice by running the systems a charity needs,
              email, domains, websites, AI tools and training, at no cost, through people who have
              chosen to give their skills away.
            </p>
            <p className={pClass}>
              We are part of {siteConfig.supportedBy.name}, a US 501(c)(3) nonprofit (EIN {siteConfig.ein})
              whose purpose is to reduce costs and increase revenues for other nonprofits so that more
              money reaches their charitable work.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>How it works today</h2>
            <p className={pClass}>
              A charity applies, we talk through what they have and what they need, and then we do
              the work: a free .org domain, nonprofit email and collaboration on Microsoft 365 or
              Google Workspace, a fast static website with the legal and privacy pages a
              professional site requires, help deciding where AI fits, and training for the people
              who will use it all. Everything is documented so it keeps working after we step back.
            </p>
            <p className={pClass}>
              The program is delivered by volunteers today. That is the strength of the model and
              its limit: volunteers are generous, and their time is short.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>The monastery idea</h2>
            <p className={pClass}>
              A monastery is a place where people live simply, keep a rhythm of work, study and
              rest, and give their effort to something larger than themselves. We borrow that
              shape, not a creed. The Technology Monastery is non-sectarian and open to anyone: no
              religious test, every faith and none welcome, and a short set of community agreements
              in place of a rule.
            </p>
            <p className={pClass}>
              The people we expect to welcome first are those who already know what it means to
              start again and want to give back: veterans, survivors leaving women&apos;s shelters,
              people in recovery who have stabilized, technologists who build open-source and other
              public-good software, and university students on capstone projects. Each arrives,
              finds their footing, learns the stack, serves real charities, and leaves stronger, or
              stays on as a mentor or staff member.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Where we have been</h2>
            <p className={pClass}>
              Free For Charity has run a campus-style program before, in Arizona, and learned what
              it takes to host people and work in one place. The Technology Monastery began as the
              digital successor to that effort: a service program that could run anywhere, without
              a building. The Pennsylvania campus revives the campus capability on land we intend to
              own, in a setting suited to focused work and to recovery.
            </p>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#0f0a1e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Why staff matter</h2>
            <p className={pClass}>
              The grant we are seeking funds two full-time positions from the start: a Volunteer
              Manager, who recruits, places and supports residents and remote volunteers and opens
              the pipelines that need a full-time host, and a Program Coordinator, who runs intake,
              service delivery to charities, partner relationships and reporting.
            </p>
            <p className={pClass}>
              Our five-year goal is to have both positions fully funded and endowed at reasonable
              compensation for the work, based at the campus. That is the point of the project:
              stability for the whole Free For Charity mission, so that it no longer depends on
              unpaid leadership.
            </p>
            <Button href="/campus/" variant="primary">
              Read the campus plan
            </Button>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Partners and governance</h2>
            <p className={pClass}>
              <a
                href="https://technomonasteries.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 underline hover:text-white"
              >
                TechnoMonasteries
              </a>{' '}
              is a volunteer project helping us create the Technology Monastery. It operates under
              Free For Charity&apos;s Technology Monastery brand for the United States campus and
              hopes, over the next decade or more, to develop a similar place abroad focused on the
              open-source community. It is not a separate charity, and gifts to the campus are made
              through Free For Charity.
            </p>
            <p className={pClass}>
              The Technology Monastery is governed by Free For Charity&apos;s board of directors, and
              its finances, policies and transparency profile are Free For Charity&apos;s. The board,
              the latest filings and the Candid (GuideStar) profile are published on{' '}
              <a
                href={siteConfig.supportedBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 underline hover:text-white"
              >
                freeforcharity.org
              </a>
              .
            </p>
            <p className={pClass}>
              To be clear about where we stand today: the Technology Monastery is not a separate
              legal entity. It has no EIN of its own, and every gift, grant, contract and filing runs
              through Free For Charity, EIN {siteConfig.ein}. Our goal is to become a stand-alone
              charity, with its own IRS 501(c)(3) determination and state registrations, as the
              program matures. We will say so here when that changes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join us</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Whether you run a nonprofit that needs technology, want to serve, or represent a partner
            or funder, we would like to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-started/" variant="secondary">
              Get started
            </Button>
            <Button href="/contact/" variant="primary">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
