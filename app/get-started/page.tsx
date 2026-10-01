import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Get Started - The Technology Monastery',
  description:
    'How nonprofits apply for free technology services, how volunteers and future residents get involved, and how partners refer people to the campus.',
};

const email = siteConfig.contactEmail;
const mail = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const linkClass =
  'inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg';

export default function GetStarted() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get started</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the path that fits you. Every one of them starts with an email to{' '}
            <a href={`mailto:${email}`} className="text-purple-300 underline hover:text-white break-all">
              {email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Nonprofits */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nonprofits</h2>
            <p className="text-lg text-gray-300 mb-6">
              You may be eligible if you are a registered 501(c)(3), your technology budget is
              limited, and you have someone willing to work with us through setup. If you are not
              sure, write anyway.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">How it goes</h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>Tell us about your organization and what is getting in the way.</li>
                  <li>A conversation about what you have, what you need, and what you can maintain.</li>
                  <li>A short written plan you own.</li>
                  <li>Setup, hand-over notes and training.</li>
                  <li>Ongoing support when something stops working.</li>
                </ol>
              </div>
              <div className="border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">What to have ready</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Legal name and EIN</li>
                  <li>Mission statement</li>
                  <li>Roughly how many staff and volunteers you have</li>
                  <li>What you use today for email, website and files</li>
                  <li>The one problem you most want solved</li>
                </ul>
              </div>
            </div>
            <a href={mail('Nonprofit services inquiry')} className={linkClass}>
              Email us about services
            </a>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Volunteers and technology professionals
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              You can serve from where you are today, remotely, on a defined project for a charity
              we support. As the campus opens, service stints on site, mentoring residents, and
              structured programs such as AmeriCorps terms and AI-practitioner fellowships will be
              listed here as they become available. Two paid staff roles, a Volunteer Manager and a
              Program Coordinator, are planned for the first year of the grant; the{' '}
              <a href="/hiring/" className="text-purple-300 underline hover:text-white">
                hiring plan
              </a>{' '}
              explains both.
            </p>
            <a href={mail('Volunteering with the Technology Monastery')} className={linkClass}>
              Email us about volunteering
            </a>
          </div>
        </div>
      </section>

      {/* Residents */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Future residents</h2>
            <div className="border border-orange-500/50 bg-orange-500/10 rounded-lg p-5 mb-6 text-gray-200">
              <p className="font-semibold text-white mb-2">If you are in crisis right now</p>
              <p className="text-sm">
                Call or text 988 (Suicide and Crisis Lifeline, United States). Veterans: call 988 and
                press 1. Domestic violence: the National Domestic Violence Hotline is 1-800-799-7233.
                The campus is not an emergency service.
              </p>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              The campus is in planning and is not yet accepting residents. If you think a season of
              living simply, learning and serving could be right for you, or for someone you support,
              tell us a little about your situation and we will keep you informed as the program
              opens. Residents will come through referral partners for the first cohorts; see{' '}
              <a href="/campus/" className="text-purple-300 underline hover:text-white">
                the campus plan
              </a>{' '}
              for who it is for and how a stay works.
            </p>
            <a href={mail('Future resident interest')} className={linkClass}>
              Register interest
            </a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partners and referrers</h2>
            <p className="text-lg text-gray-300 mb-6">
              Veteran service organizations, shelters, recovery programs, universities and colleges,
              service programs and funders: tell us who you serve or support and what a partnership
              would need to look like for you. We will share the program design, the safeguards, and
              what we need from a referral.
            </p>
            <a href={mail('Partnership inquiry')} className={linkClass}>
              Email us about partnering
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not sure which path?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Write to us and we will point you the right way.
          </p>
          <Button href="/contact/" variant="primary">
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
