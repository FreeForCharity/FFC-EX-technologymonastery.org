import { Metadata } from 'next';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: `Get Technology for Your Nonprofit - ${siteConfig.name}`,
  description:
    'How a small nonprofit applies for free technology from the Technology Monastery: eligibility, how it goes, and what to have ready.',
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get technology for your nonprofit
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every service is free for qualifying 501(c)(3) organizations, and it starts with an
            email to{' '}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who is eligible</h2>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={mail('Nonprofit services inquiry')} className={linkClass}>
                Email us about services
              </a>
              <Button href="/services/" variant="primary">
                What we do
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Here to serve rather than to be served?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Volunteers, future residents, student teams and referral partners have their own page.
            Not sure which path? Write to us and we will point you the right way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/serve/" variant="secondary">
              Come and serve
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
