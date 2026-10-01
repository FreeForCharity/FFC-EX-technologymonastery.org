import { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';
import { placeHref, residentPathway, siteConfig } from '@/lib/site.config';

const place = siteConfig.place;

export const metadata: Metadata = {
  title: `Come and Serve - ${siteConfig.name}`,
  description: `Three ways to do the work: serve remotely now, live and serve for a season at ${place.withArticle} in Pennsylvania, or join a student capstone team. How the pathway works, the safeguards, and how referral partners refer.`,
};

const email = siteConfig.contactEmail;
const mail = (subject: string) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const linkClass =
  'inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg';
const h2Class = 'text-3xl md:text-4xl font-bold text-white mb-4';
const pClass = 'text-lg text-gray-300 mb-6 leading-relaxed';

const doors = [
  {
    title: 'Serve remotely, now',
    who: 'Technology professionals and volunteers anywhere',
    body: 'Take a defined project for a charity we support, from where you are today: an email migration, a website, an AI acceptable-use policy, a training session. Structured programs such as AmeriCorps terms and AI-practitioner fellowships will be listed here as they open.',
    subject: 'Volunteering with the Technology Monastery',
    cta: 'Email us about volunteering',
  },
  {
    title: 'Live and serve for a season',
    who: 'Veterans, survivors leaving shelters, people in recovery who have stabilized, public-good technologists',
    body: `Come to ${place.withArticle} in Pennsylvania, live simply at no cost, learn the stack, serve real charities and move on stronger. ${place.noun} is in planning and is not yet accepting residents; tell us about yourself and we will keep you informed as it opens. The first cohorts will come through referral partners.`,
    subject: 'Future resident interest',
    cta: 'Register interest',
  },
  {
    title: 'Student capstones',
    who: 'University, college and two-year-school teams and their faculty',
    body: `Spend a summer at ${place.withArticle} working a real project for a real charity before returning to finish your degree. We plan to sponsor Penn State Learning Factory capstones every year and to extend the model to schools around the region.`,
    subject: 'Student capstone inquiry',
    cta: 'Email us about capstones',
  },
];

const safeguards = [
  `${place.noun} will be substance-free.`,
  'Residents are screened, referrals are verified, and people who come from shelters and recovery programs are supported by partners who know them.',
  'Staff will be trained in trauma-informed practice, with a crisis plan agreed with local partners.',
  'Community agreements cover respect and consent, quiet hours, shared work, how conflicts are resolved, and how someone can leave without stigma.',
  "The full policies will be approved by Free For Charity's board before the first resident arrives.",
];

const referralSteps = [
  'Write to us with who you serve or support and what a partnership would need to look like for you.',
  'We share the program design, the safeguards, the community agreements and what we need from a referral.',
  'Once we agree in writing, you refer people who are ready to give back; we verify each referral with you and keep you in the loop through their stay.',
];

export default function Serve() {
  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Come and serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Small charities need people who will stay with the work. Three ways in, and every one
            of them starts with an email to{' '}
            <a href={`mailto:${email}`} className="text-purple-300 underline hover:text-white break-all">
              {email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Three doors */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${h2Class} text-center`}>Three ways to do the work</h2>
            <p className={`${pClass} text-center max-w-3xl mx-auto`}>
              Open to anyone who wants to give back through charitable work, with no religious
              test. Nobody is charged: there is no rent, no program fee and no nightly rate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doors.map((d) => (
                <article
                  key={d.title}
                  className="flex flex-col bg-[#15102a] border border-purple-500/20 rounded-lg p-6"
                >
                  <p className="text-orange-400 text-xs font-semibold tracking-wide uppercase mb-2">
                    {d.who}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
                  <p className="text-gray-300 mb-6 flex-1">{d.body}</p>
                  <a href={mail(d.subject)} className={`${linkClass} self-start text-sm`}>
                    {d.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Crisis resources, kept with the residents door */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border border-orange-500/50 bg-orange-500/10 rounded-lg p-5 mb-8 text-gray-200">
              <p className="font-semibold text-white mb-2">If you are in crisis right now</p>
              <p className="text-sm">
                Call or text 988 (Suicide and Crisis Lifeline, United States). Veterans: call 988 and
                press 1. Domestic violence: the National Domestic Violence Hotline is 1-800-799-7233.
                {place.noun} is not an emergency service.
              </p>
            </div>
            <h2 className={h2Class}>Who we expect to welcome first</h2>
            <p className={pClass}>
              People who already know what it means to start again and want to give back: veterans
              leaving service who want structure and a skill set that travels; women rebuilding
              after leaving a shelter, referred by partners, with safety designed in from the start;
              people beyond the acute phase of recovery for whom service, routine and community are
              part of staying well; builders of open-source and other public-good software who want
              a sabbatical with purpose; and students on capstone projects. If that is you, or
              someone you support, see{' '}
              <Link href={placeHref()} className="text-purple-300 underline hover:text-white">
                {place.navLabel}
              </Link>{' '}
              for where it is and who runs it.
            </p>
          </div>
        </div>
      </section>

      {/* Pathway */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className={`${h2Class} text-center`}>The pathway</h2>
            <p className={`${pClass} text-center max-w-3xl mx-auto`}>
              A season at {place.withArticle} follows the same five steps for everyone, whether it
              lasts a summer or a year.
            </p>
            <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className={h2Class}>Open to anyone, and safe for everyone</h2>
            <ul className="space-y-3 text-gray-300 mb-6">
              {safeguards.map((item) => (
                <li key={item} className="border-l-2 border-purple-500/60 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Referral partners */}
      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={h2Class}>How referral partners refer</h2>
            <p className={pClass}>
              Veteran service organizations, shelters, recovery programs, universities and colleges,
              and service programs: residents will come through you for the first cohorts. Partners
              are named on this site only once they have agreed in writing.
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
              {referralSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <a href={mail('Partnership inquiry')} className={linkClass}>
              Email us about referring
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Run a nonprofit instead?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            The free services for charities, and how to apply, are on their own page. Everyone
            else: write to us and we will point you the right way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/get-started/" variant="secondary">
              Get technology for your nonprofit
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
