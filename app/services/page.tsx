import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { siteConfig } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'What We Do - The Technology Monastery',
  description:
    'Free technology services for small nonprofits: domains and email on Microsoft or Google, static websites, AI enablement, training and ongoing support.',
};

export default function Services() {
  const coreServices = [
    {
      title: 'Domain name and email',
      description:
        'A free .org domain registered and managed for you, with nonprofit email and collaboration on Microsoft 365 or Google Workspace. We handle eligibility, setup, security basics and keeping the licenses right-sized as the programs change.',
    },
    {
      title: 'Website hosting and build',
      description:
        'A fast, secure static website hosted at no cost, with the privacy, cookie, terms and donation policy pages a professional site needs, analytics wired in, and a path for your own volunteers to keep it current.',
    },
    {
      title: 'AI enablement',
      description:
        'Help deciding where AI genuinely helps your work, an acceptable-use policy your board can adopt, assistants for the questions supporters ask most, and the data hygiene that makes any of it safe.',
    },
    {
      title: 'Training and ongoing support',
      description:
        'Plain-language training for staff and volunteers on the tools we set up, written hand-over notes, and a support route when something stops working.',
    },
  ];

  const consulting = [
    {
      title: 'It starts with a conversation',
      description:
        'Before any setup, we talk through what you have today, what you need to succeed, and what you can realistically maintain. The outcome is a short, written plan you own.',
    },
    {
      title: 'Introductions to trusted partners',
      description:
        'For needs we do not cover, Free For Charity introduces charities to partners it has worked with and to discounted nonprofit programs.',
    },
    {
      title: 'Longer engagements',
      description:
        `As ${siteConfig.place.withArticle} opens, charities will be able to request a resident or a student capstone team for a season of focused work on a single project. The Monastery is built for up to 20 of the 100 charities Free For Charity seeks to support at a time: those further along in maturity, or with rarer needs, that call for longer-term volunteers.`,
    },
  ];

  return (
    <>
      <section className="relative pt-36 pb-16 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#4a2c6f]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">What we do</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The systems a small nonprofit needs, set up and supported at no cost, on whichever
            platform fits you best.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are deliberately neutral between Microsoft and Google. Both run nonprofit programs
              with donated and discounted licenses, and the right one depends on your people, not on
              us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0f0a1e] to-[#1a0b2e]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How we work with you</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {consulting.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0a1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Free for qualifying nonprofits
            </h2>
            <p className="text-gray-300 mb-6">
              Services are provided at no cost to registered 501(c)(3) organizations with limited
              technology budgets. Where a charity chooses a paid add-on, such as a premium license
              or hosting tier, the cost is disclosed first and paid by the charity directly.
            </p>
            <Button href="/get-started/" variant="secondary">
              Apply for services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
