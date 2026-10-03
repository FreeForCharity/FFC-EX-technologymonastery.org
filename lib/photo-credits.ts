// Single source of truth for photo attribution. Rendered by app/credits/page.tsx;
// public/images/photos/CREDITS.md is generated from the same entries (keep in sync).

export interface PhotoCredit {
  /** Filename under public/images/photos/ */
  file: string;
  /** Additional responsive variants of the same photograph */
  variants: string[];
  /** Title as given at the source */
  title: string;
  /** What the picture shows (regional or generic; never the project site itself) */
  subject: string;
  author: string;
  authorUrl: string;
  license: string;
  licenseUrl: string;
  /** Page where the photograph's metadata and licence can be verified */
  sourceUrl: string;
  usedOn: string[];
  modifications: string;
}

export const photoCredits: PhotoCredit[] = [
  {
    file: 'cook-forest-hemlock-canopy.webp',
    variants: ['cook-forest-hemlock-canopy-900.webp'],
    title: 'Cookcanopy.jpg',
    subject: 'Looking up into the old-growth hemlock canopy, Cook Forest State Park, Pennsylvania',
    author: 'VitaleBaby (Wikimedia Commons user)',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:VitaleBaby',
    license: 'Public domain',
    licenseUrl: 'https://commons.wikimedia.org/wiki/Template:PD-self',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cookcanopy.jpg',
    usedOn: ['Home (hero background)', 'Link preview image (images/og-image.jpg)'],
    modifications:
      'Cropped to fit, resized, softened slightly and re-encoded as WebP; the link preview image adds a dark overlay and the site name',
  },
  {
    file: 'clear-creek-hemlocks-stream.webp',
    variants: ['clear-creek-hemlocks-stream-900.webp'],
    title: 'Clear Creek State Park Shallow',
    subject: 'Hemlock boughs over Little Clear Creek, Clear Creek State Park, Jefferson County, Pennsylvania',
    author: 'Nicholas (Flickr user 14922165@N00)',
    authorUrl: 'https://www.flickr.com/people/14922165@N00',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Clear_Creek_State_Park_Shallow.jpg',
    usedOn: ['Campus (hero background)'],
    modifications: 'Cropped to fit, resized, softened slightly and re-encoded as WebP',
  },
  {
    file: 'clarion-river-forested-hills.webp',
    variants: [],
    title: 'Clarion River (US 332) 2018-10-30 055',
    subject: 'The Clarion River between forested hills, Clarion County, Pennsylvania',
    author: 'Chris Light',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Chris_Light',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Clarion_River_(US_332)_2018-10-30_055.jpg',
    usedOn: ['Campus'],
    modifications: 'Resized and re-encoded as WebP',
  },
  {
    file: 'state-park-walk-in-campsite.webp',
    variants: [],
    title: 'Buckhorn State Park Campsite 241',
    subject: 'A walk-in campsite in a public state park campground (Buckhorn State Park, Wisconsin)',
    author: 'Markheffron2 (Wikimedia Commons user)',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Markheffron2',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Buckhorn_State_Park_Campsite_241.jpg',
    usedOn: ['Campus'],
    modifications: 'Resized and re-encoded as WebP',
  },
  {
    file: 'allegheny-misty-lake-dawn.webp',
    variants: [],
    title: '180911-FS-Allegheny-KC-001-BeaverMeadows',
    subject: 'Mist over a forest lake at dawn, Allegheny National Forest, Pennsylvania',
    author: 'USDA Forest Service (Forest Service Photography)',
    authorUrl: 'https://www.flickr.com/photos/usforestservice/29872347367',
    license: 'Public domain (US federal government work)',
    licenseUrl: 'https://www.usa.gov/government-copyright',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:180911-FS-Allegheny-KC-001-BeaverMeadows_(29872347367).jpg',
    usedOn: ['About'],
    modifications: 'Resized and re-encoded as WebP',
  },
  {
    file: 'hackerspace-working-session.webp',
    variants: [],
    title: 'WMNYC Hacking Nite 2024-02a jeh',
    subject: 'Three people working together around a table with laptops in a hackerspace',
    author: 'Jim.henderson',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Jim.henderson',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:WMNYC_Hacking_Nite_2024-02a_jeh.jpg',
    usedOn: ['Services'],
    modifications: 'Resized and re-encoded as WebP',
  },
  {
    file: 'code-sprint-laptops.webp',
    variants: [],
    title: 'Code Sprint',
    subject: 'People working on laptops together at a shared table during a code sprint',
    author: 'Development Seed',
    authorUrl: 'https://www.flickr.com/photos/developmentseed/3795722033/',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Development_Seed_-_Code_Sprint.jpg',
    usedOn: ['Hiring'],
    modifications: 'Resized and re-encoded as WebP',
  },
  {
    file: 'hands-typing-laptop.webp',
    variants: [],
    title: 'hand-laptop-notebook-typing',
    subject: 'Hands typing on a laptop keyboard',
    author: 'www.Pixel.la Free Stock Photos',
    authorUrl: 'https://www.flickr.com/photos/137643065@N06/23698140194/',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hand-laptop-notebook-typing_(23698140194).jpg',
    usedOn: ['Home'],
    modifications: 'Resized and re-encoded as WebP',
  },
];
