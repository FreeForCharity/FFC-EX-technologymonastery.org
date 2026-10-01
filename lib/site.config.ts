/**
 * Central site configuration, modeled on the FFC_Single_Page_Template
 * `src/lib/site.config.ts`. Values that vary between FFC-supported sites
 * flow from here so pages, the footer, and metadata stay in sync.
 *
 * NOTE: distinct from `lib/site-config.ts` (hyphen), which re-exports the
 * basePath/origin logic from `lib/base-path.js` and reads public/CNAME via
 * node:fs at build time. This file is a plain typed const with no Node
 * dependencies so client components can import it safely.
 */

export type SiteSocialLink = {
  /** Display label, also used for aria-label. */
  label: string;
  /** Absolute https URL. Empty string disables the link. */
  href: string;
};

export type SiteConfig = {
  /** Display name of the charity site. */
  name: string;
  /** Short tagline. */
  tagline: string;
  /** Plain-language description. */
  description: string;
  /** Canonical production URL with no trailing slash. */
  url: string;
  /** Primary contact email. */
  contactEmail: string;
  /** Where the vulnerability disclosure policy lives on this site. */
  vulnerabilityDisclosurePath: string;
  /** Social links displayed in the footer. */
  social: readonly SiteSocialLink[];
  /**
   * IRS Employer Identification Number. The Technology Monastery is a
   * program of Free For Charity, so this is FFC's EIN.
   */
  ein: string;
  /** GuideStar / Candid transparency profile links shown in the footer. */
  guidestar: { profileUrl: string; directProfileUrl: string };
  /**
   * Permanent attribution to the supporting organization (FFC). Drives the
   * always-rendered "Supported by" clause in the footer bottom bar and the
   * "Supported Charity Login" quick link (`hubUrl`). This is part of the FFC
   * footer standard for every supported charity site: it is REQUIRED, always
   * rendered, and NOT to be removed or repointed when customizing a fork.
   */
  supportedBy: { name: string; url: string; hubUrl: string };
  /**
   * Parent / umbrella organization: this site is "a project of" FFC.
   */
  parentOrg?: { name: string; url: string; hubUrl: string };
  /** Third-party integration endpoints. */
  integrations: {
    /**
     * Zeffy donation-form URL used by the Donate CTA. Currently the FFC
     * interim endowment-fund campaign; a project-specific campaign will
     * replace it later.
     */
    zeffyDonationUrl: string;
  };
};

export const siteConfig: SiteConfig = {
  name: 'The Technology Monastery',
  tagline: 'Free technology for small charities, and a place for the people who build it',
  description:
    'Free technology for small nonprofits, and a planned campus in Pennsylvania where people who give back can live, learn and serve. A project of Free For Charity.',
  url: 'https://technologymonastery.org',
  contactEmail: 'info@technologymonastery.org',
  vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy/',
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/FreeForCharity/FFC-EX-technologymonastery.org',
    },
  ],
  ein: '46-2471893',
  guidestar: {
    profileUrl: 'https://www.guidestar.org/profile/46-2471893',
    directProfileUrl:
      'https://www.guidestar.org/profile/shared/bbbe173a-87b9-4af9-a8a2-cae255a95742',
  },
  supportedBy: {
    name: 'Free For Charity',
    url: 'https://freeforcharity.org',
    hubUrl: 'https://freeforcharity.org/hub/',
  },
  parentOrg: {
    name: 'Free For Charity',
    url: 'https://freeforcharity.org',
    hubUrl: 'https://freeforcharity.org/hub/',
  },
  integrations: {
    zeffyDonationUrl: 'https://www.zeffy.com/donation-form/free-for-charity-endowment-fund',
  },
};
