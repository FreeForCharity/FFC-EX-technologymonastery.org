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

export type SitePlace = {
  /** Capitalized common noun, used mid-sentence as a proper name: "the Village opens". */
  noun: string;
  /** Lower-case form for generic uses: "a village where service is a season". */
  nounLower: string;
  /** The noun with its article, as it reads in a sentence: "the Village". */
  withArticle: string;
  /** Route segment, without slashes. Must match the folder name under app/. */
  slug: string;
  /** Label shown in the header and footer navigation. */
  navLabel: string;
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
  /** A named person funders and partners can reach directly. */
  directContact: { name: string; role: string; email: string; phoneDisplay: string; phoneE164: string };
  /** Where the vulnerability disclosure policy lives on this site. */
  vulnerabilityDisclosurePath: string;
  /** Social links displayed in the footer. */
  social: readonly SiteSocialLink[];
  /**
   * IRS Employer Identification Number. The Technology Monastery is a
   * program of Free For Charity, so this is FFC's EIN.
   */
  ein: string;
  /**
   * Candid (GuideStar) transparency seal and profile links shown in the footer.
   * `sealUrl` is Candid's live seal widget for the EIN above, so the seal always
   * shows the current year's level (same source freeforcharity.org renders).
   */
  guidestar: { sealUrl: string; profileUrl: string; directProfileUrl: string };
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
  /**
   * What we call the residential place in Pennsylvania (the owner picks the word;
   * "Village" is the current choice; "campus" was retired because it reads as
   * educational). Every user-visible mention of the place flows from here.
   *
   * To rename it: change the five strings in PLACE, rename the route folder
   * `app/<slug>/` to match, and update the two static JSON files that cannot
   * read this constant: `public/manifest.json` ("description") and
   * `_data/settings.json` ("site_description"). `siteConfig.description`, the
   * page metadata, Open Graph and JSON-LD all derive from PLACE. Leave
   * `app/campus/` in place: it is a redirect kept for links already shared.
   */
  place: SitePlace;
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

const PLACE: SitePlace = {
    noun: 'Village',
    nounLower: 'village',
    withArticle: 'the Village',
    slug: 'village',
    navLabel: 'The Village',
};

export const siteConfig: SiteConfig = {
  name: 'The Technology Monastery',
  tagline: 'Free technology for small charities, and a place for the people who build it',
  description: `Free technology for small nonprofits, and a planned ${PLACE.nounLower} in Pennsylvania where people who give back can live, learn and serve. A project of Free For Charity.`,
  url: 'https://technologymonastery.org',
  contactEmail: 'info@technologymonastery.org',
  directContact: {
    name: 'Clarke Moyer',
    role: 'Free For Charity',
    email: 'clarkemoyer@freeforcharity.org',
    phoneDisplay: '520-222-8104',
    phoneE164: '+15202228104',
  },
  vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy/',
  social: [
    {
      label: 'GitHub',
      href: 'https://github.com/FreeForCharity/FFC-EX-technologymonastery.org',
    },
  ],
  ein: '46-2471893',
  guidestar: {
    sealUrl: 'https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/9326392/svg',
    profileUrl: 'https://app.candid.org/profile/9326392/free-for-charity-46-2471893/?pkId=7232730a-03b5-467f-a82c-443dcd2122ed',
    directProfileUrl: 'https://app.candid.org/profile/9326392/free-for-charity/?pkId=7232730a-03b5-467f-a82c-443dcd2122ed&isActive=true',
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
  place: PLACE,
  integrations: {
    zeffyDonationUrl: 'https://www.zeffy.com/donation-form/free-for-charity-endowment-fund',
  },
};

/** The five-step resident pathway, shared by the place page and the Come and Serve page. */
export const residentPathway = [
  { step: 'Arrive', body: 'Orientation, a place to stay, and the community agreements everyone keeps.' },
  { step: 'Stabilize', body: 'Routine, peer support, and no cost of living while you find your footing.' },
  { step: 'Learn', body: 'The Technology Monastery stack: nonprofit email and collaboration, websites, AI tools, and how to teach them.' },
  { step: 'Serve', body: `Real work for the charities we support, and stewardship of ${PLACE.withArticle} itself.` },
  { step: 'Launch', body: 'Employment, further study, home, or a longer role here as a mentor or staff member.' },
];

/** Root-relative href of the place page, with the trailing slash the static export uses. */
export function placeHref(): string {
  return `/${siteConfig.place.slug}/`;
}
