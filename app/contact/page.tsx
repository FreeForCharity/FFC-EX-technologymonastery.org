import { Metadata } from 'next';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Contact - The Technology Monastery',
  description:
    'Contact the Technology Monastery about free technology services for your nonprofit, volunteering, the campus, partnerships, funding or press.',
};

const email = siteConfig.contactEmail;
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
    body: 'Grant and gift conversations about the service program, the campus, and the two staff roles we are funding.',
    subject: 'Funding conversation',
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
                <a
                  href={mail(r.subject)}
                  className="self-start inline-block px-5 py-2.5 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
                >
                  Email about this
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Response time</h2>
              <p>We are volunteer-run today and usually reply within two business days.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Organization</h2>
              <p>
                The Technology Monastery is a project of {siteConfig.supportedBy.name}, a US
                501(c)(3) nonprofit, EIN {siteConfig.ein}. Gifts are made through{' '}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
