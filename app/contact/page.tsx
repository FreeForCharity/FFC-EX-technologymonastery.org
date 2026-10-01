import { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Contact - The Technology Monastery',
  description:
    'Contact the Technology Monastery about free technology services for your nonprofit, volunteering, the campus, partnerships, funding or press.',
};

const email = siteConfig.contactEmail;
const direct = siteConfig.directContact;
const mail = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const routes = [
  {
    title: 'Nonprofits seeking services',
    body: 'Questions about eligibility, what we set up, and how to apply.',
    subject: 'Nonprofit services inquiry',
  },
  {
    title: 'Volunteers and future residents',
    body: 'Serving remotely today, or living and serving on the campus as it opens.',
    subject: 'Volunteering or residency',
  },
  {
    title: 'Partners and referrers',
    body: 'Veteran, shelter and recovery organizations, universities and colleges, and service programs.',
    subject: 'Partnership inquiry',
  },
  {
    title: 'Funders',
    body: 'Grant and gift conversations about the service program, the campus, and the two staff roles we are funding. Start with the For Funders page.',
    subject: 'Funding conversation',
    href: '/funders/',
    hrefLabel: 'For Funders page',
  },
  {
    title: 'Press',
    body: 'Interviews, background and the Free For Charity relationship.',
    subject: 'Press inquiry',
  },
  {
    title: 'Everything else',
    body: 'General questions and anything that does not fit above.',
    subject: 'General inquiry',
  },
];

export default function Contact() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One address reaches us all:{' '}
            <a href={`mailto:${email}`} className="text-purple-300 underline hover:text-white break-all">
              {email}
            </a>
            . Pick a subject below and we will route it to the right person.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((r) => (
              <article key={r.title} className="flex flex-col border border-purple-500/20 rounded-lg p-6 bg-[#15102a]">
                <h2 className="text-xl font-bold text-white mb-2">{r.title}</h2>
                <p className="text-gray-300 text-sm mb-6 flex-1">{r.body}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href={mail(r.subject)}
                    className="inline-block px-5 py-2.5 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
                  >
                    Email about this
                  </a>
                  {'href' in r && r.href ? (
                    <a href={r.href} className="text-purple-300 underline hover:text-white text-sm">
                      {r.hrefLabel}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Direct contact</h2>
              <p className="mb-2">
                {direct.name}, {direct.role}
              </p>
              <p className="mb-2">
                <a
                  href={`mailto:${direct.email}`}
                  className="text-purple-300 underline hover:text-white break-all"
                >
                  {direct.email}
                </a>
              </p>
              <p>
                Text preferred:{' '}
                <a href={`sms:${direct.phoneE164}`} className="text-purple-300 underline hover:text-white">
                  {direct.phoneDisplay}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Response time</h2>
              <p>We are volunteer-run today and usually reply within two business days.</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-10 text-gray-300">
            <h2 className="text-lg font-bold text-white mb-2">Organization and legal status</h2>
            <p className="mb-3">
              The Technology Monastery is a project of {siteConfig.supportedBy.name}{' '}
              (
              <a
                href={siteConfig.supportedBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 underline hover:text-white"
              >
                FreeForCharity.org
              </a>
              ), a US 501(c)(3) public charity, EIN {siteConfig.ein}. It is not a separate legal
              entity today: it has no EIN of its own, and every gift, grant, contract and filing runs
              through Free For Charity under its board, policies and transparency profile.
            </p>
            <p>
              Our goal is for the Technology Monastery to become a stand-alone charity, with its own
              IRS 501(c)(3) determination and state registrations, as the program matures. Until that
              happens, any reference to tax-exempt status on this site is Free For Charity&apos;s.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
