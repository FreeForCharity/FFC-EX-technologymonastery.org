# Campus grant-readiness plan: representing the Sigel, PA charity campus on technologymonastery.org

**Status:** research brief and conversion plan (2026-10-01). Tracked by the `[EPIC]` issues in this
repository. This document is the shared context for every issue in that set; the issues carry the
acceptance criteria.

## 1. Why this exists

Free For Charity (FFC) is competing for a large grant that would fund the purchase of a rural
property near Sigel, Pennsylvania, including an operating seasonal campground, and its conversion
into a charity campus under the Technology Monastery concept of operations: a non-secular,
open-to-anyone place where people who want to give back to the charitable world can live simply,
work, learn, and serve. The first residents the concept names are veterans, survivors coming out of
women's shelters, and people who have stabilized after drug and alcohol rehabilitation, alongside
builders of open-source and other public-good technology.

The website at technologymonastery.org currently describes only the existing service program (free
Microsoft 365, hosting, AI tools, and social media support for small nonprofits). It says nothing
about a campus, land, residents, Pennsylvania, or a capital project. A grant reviewer who visits the
site today finds no evidence that the campus exists as a plan, no leadership or governance page, no
outcomes, placeholder testimonials, a contact form wired to a dummy endpoint, and buttons that do
nothing. That gap is the problem this plan addresses.

## 2. What the site says today (inventory)

| Route                            | Current content                                                                    | Grant-readiness gap                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `/` (`app/page.tsx`)             | Hero "Technology Monastery", four service cards, "100+ charities", testimonials    | Lorem-ipsum testimonials, dead "Free Demo" / "Join" buttons, no campus, unverified stats |
| `/about/`                        | Mission (talent gap for small nonprofits), "Our Team & Approach" bullet lists      | No named people, no board, no history, no campus or place                               |
| `/services/`                     | Core + additional service cards, "Microsoft Partnership" (Silver status aspiration) | Aspirational claim presented as fact; no outcomes                                       |
| `/get-started/`                  | Eligibility + 5-step intake for nonprofits                                         | Only one audience (nonprofits); no resident / volunteer / partner / funder pathways     |
| `/contact/`                      | Email, hours, Formspree form with `YOUR_FORM_ID`                                   | Form is non-functional; no funder or press routing                                      |
| Policy pages (7)                 | FFC footer standard pages                                                          | Fine; keep                                                                              |
| Footer (`components/Footer.tsx`) | Quick links, endorsements, EIN, GuideStar seal, "Supported by FFC"                 | Fine; add Transparency and Campus links                                                 |
| `admin/config.yml` (Decap CMS)   | Collections reference `_data/hero.json`, `_data/about.json`, `_data/services.json` | Those files do not exist; copy is hard-coded in TSX, so non-developers cannot update it |

Site facts: Next.js 14 App Router, TypeScript, Tailwind, static export, pnpm, deployed by
`.github/workflows/deploy.yml` to GitHub Pages (project URL by default; apex cutover is a gated
switch). Donations currently use an FFC interim Zeffy campaign (issue #57).

## 3. What the campus is (public-safe summary)

Drawn from FFC's internal planning notes for the Pennsylvania pilot and from public sources. Figures
are planning-stage and must be re-confirmed before they are published as commitments.

- **Location.** Near Sigel, Jefferson County, Pennsylvania, in the Clarion River valley between
  Clear Creek State Park (about ten minutes) and Cook Forest State Park (about twenty minutes), off
  PA Route 949. Reached from I-80 exit 78 via PA 36. The area is a year-round outdoor-recreation
  destination with existing lodging, campgrounds, and the Farmer's Inn attractions.
- **Land.** Two adjacent rural parcels totalling roughly 70 acres. One holds a multi-generation
  family farmhouse and pasture; the other is woodland with a natural spring, existing driveway
  access, and nearby utilities. Part of the land is already operated as a small seasonal campground
  (publicly listed as about four acres with 25 seasonal sites) under a lease, which is what makes
  "buy a campground and convert it" the honest description of the acquisition.
- **Planned first-phase infrastructure** (from the pilot notes): shared kitchen and gathering
  space, coworking area, community bathhouse and restrooms, roughly ten campsites, RV parking,
  site planning for accessible tiny homes, shared utility connections and outdoor spaces.
- **Current phase.** Planning and evaluation: ownership transfer, preliminary site planning,
  utility and septic evaluation, volunteer coordination, nonprofit structuring, and a long-term
  stewardship plan. A county service forester has already been consulted; forest stewardship and
  NRCS cost-share programs are candidate complements to the grant.
- **Sister concept.** technomonasteries.org (also an FFC repository) presents the broader
  "network of places where builders, researchers, and creators can travel, exchange ideas, and
  refine their craft" idea and links to a Discord. The Pennsylvania site is described there as the
  first pilot. The two brands must be reconciled so a funder does not read them as two
  organizations.

## 4. Concept of operations the site must communicate

The pitch has five parts, and each needs a home on the site.

1. **Place.** A quiet, rural campus that already works as a campground, in a recreation corridor,
   with room to grow. Show it: map, aerial, photos, phases.
2. **People served.** Open to anyone, non-secular, with named first cohorts: veterans; survivors
   leaving women's shelters; people in recovery who have stabilized; public-good and open-source
   technologists on sabbatical. State eligibility and the referral partners each cohort comes
   through, and the safeguards that make co-residence safe (substance-free campus, background
   screening, trauma-informed practice, clear community agreements).
3. **Pathway.** Arrive, stabilise, learn, serve, launch. Residents give back by doing real work for
   real charities through the existing Technology Monastery service program (the 100+ supported
   charities are the service placements), and by stewarding the campus itself. That link between
   the existing program and the campus is the core of the case: the campus is not a new charity, it
   is housing and community wrapped around a working service engine.
4. **Evidence.** Service as a route to recovery and reintegration has precedent: The Mission
   Continues fellowship model for veterans, peer recovery support in substance-use recovery,
   Domestic Violence Housing First plus social support for survivors, and work-sabbatical retreats
   for technologists (Recurse Center). Cite them, and state what the pilot will measure.
5. **Trust.** FFC is a 501(c)(3) (EIN 46-2471893) with a Candid Platinum seal. Put governance,
   financials, leadership, policies, and the use-of-funds plan where a reviewer will look.

## 5. What a grant reviewer will check, mapped to site work

| Reviewer question                              | Where the answer must live                                   | Epic |
| ---------------------------------------------- | ------------------------------------------------------------ | ---- |
| What exactly are you building, where, and why? | `/campus/` overview, `/campus/the-site/`, `/campus/plan/`    | B, C |
| Who benefits and how do they get in?           | `/campus/residents/` with cohorts, eligibility, referral     | B    |
| Is it safe and well run?                       | Safeguards and community agreements page                     | B    |
| What will the money buy, by phase?             | Phased plan with budget table and timeline, use of funds     | C    |
| Is it legal and permitted?                     | Compliance section: PA DEP campground permit, septic, zoning | C    |
| Will it work? What is the evidence?            | Theory of change, outcomes, precedents                       | D    |
| Who are you? Who governs?                      | Leadership and board page, transparency page                 | E    |
| Can you sustain it after the grant?            | Operating model and sustainability page                      | E    |
| Can we trust the numbers?                      | Verified metrics, 990s, Candid link, annual report           | D, E |
| How do we give or partner?                     | Campaign page, funder packet, contact routing                | F    |

## 6. Epic map

- **A. Narrative, brand, and information architecture.** Rewrite the home and about pages so one
  story covers the service program and the campus; decide how Technology Monastery and
  TechnoMonasteries relate; add the non-secular, open-to-anyone statement; new navigation.
- **B. People served and the pathway.** Residents page, cohorts, eligibility, referral partners,
  safeguards and community agreements.
- **C. The site and the plan.** Property page with map and photos, phased development plan with
  budget and timeline, compliance and land stewardship.
- **D. Impact, evidence, and honest metrics.** Theory of change, verified program metrics, evidence
  and precedents, remove placeholder testimonials.
- **E. Trust, governance, and transparency.** Leadership and board, transparency page, operating
  model and sustainability, fix non-functional elements and unverifiable claims.
- **F. Funder and donor conversion.** Campaign page tied to a campus-specific Zeffy campaign,
  downloadable funder packet, contact routing.
- **G. Technical enablement.** Content moved into data files or CMS collections, metadata and
  structured data, accessibility and performance, map and document hosting.

## 7. Content and decisions the board must supply

These cannot be invented by a developer and block the corresponding issues.

- Campus name as it will appear publicly, and the brand decision (Epic A).
- Confirmed acreage, parcel description for public use, and permission to publish photos and an
  aerial of the land (Epic C).
- Phase budget, timeline, and the grant ask broken into use-of-funds lines (Epic C).
- Named referral and service partners willing to be listed, with letters of support (Epic B).
- Safeguarding policies: screening, substance-free policy, incident response, insurance (Epic B).
- Board roster, bios, headshots, conflict-of-interest and whistleblower policies, latest 990 and
  annual report, audited or reviewed financials if any (Epic E).
- Verified counts for the existing program: charities served, sites hosted, volunteer hours
  (Epic D). The hub repository's sites list and status feed are the sources of truth.
- Real testimonials with written consent, or none (Epic D).
- A campus-specific Zeffy campaign (closes #57) (Epic F).

## 8. Guardrails

- **Do not publish private facts.** Estate, probate, lease terms, family names, parcel numbers,
  purchase price, and internal financial projections stay out of this public repository and the
  site. Use ranges and phases, not private documents.
- **Every number is a claim.** "100+ charities", "24/7 support", and "Silver Partner" must be
  verified or rewritten before the campaign page launches. A reviewer who catches one inflated
  figure discounts the rest.
- **Planning language until commitments exist.** "Planned", "proposed", and "pilot" are correct
  words until permits, purchase, and funding are in hand.
- **Keep the FFC footer standard intact** (`siteConfig.supportedBy`, policy pages, GuideStar).
- **Accessibility is a funder signal.** New pages ship with alt text, keyboard navigation, and
  contrast that pass the existing standards.

## 9. Sources consulted

Internal (FFC Google Drive and mail, summarised above without private detail): Pennsylvania pilot
project notes for the TechnoMonasteries website; land project aerial; stewardship correspondence
with the Family Forest Carbon Program outreach forester; the current campground operator's public
site. The internal "Technology Monastery Biz Plan Draft" is rights-managed and could not be opened
from this session; it should be reviewed by hand and reconciled with this plan.

Public:

- technologymonastery.org and technomonasteries.org (live sites)
- freeforcharity.org (programs, board, endowment)
- Candid: Platinum Seal requirements (goals, strategies, metrics, board demographics)
- Foundation Group, "How to design your site to impress grantmakers"
- Bridgespan and GEO resources on philanthropic due diligence
- 28 Pa. Code Chapter 19, Organized Camps and Campgrounds (DEP permit for five or more sites)
- Northern Jefferson County Comprehensive Plan (Barnett, Heath, Polk Townships)
- PA DCNR: Clear Creek State Park, Cook Forest State Park; Visit Jefferson County PA: Sigel
- The Mission Continues (veteran service fellowships); Code Platoon and VetsinTech (veterans to
  tech); peer recovery support literature (PMC); Domestic Violence Housing First evaluations (OJP,
  PMC); Recurse Center (programmer retreat model)
- Capital campaign guidance (Capital Campaign Pro, Bloomerang, Double the Donation)

## 10. Business plan refresh (Epic H)

The existing Technology Monastery business plan is a 2023 draft written around Microsoft offers,
a leased city office, and professional volunteer "monks", before the Pennsylvania site, the
resident cohorts, Google support, and AI-assisted delivery existed. Its problem statement still
holds; its service model, location, resident model, and financials do not, and several of its
claims (notably a "Silver Partner" goal for a Microsoft tier retired in 2022, and the free M365
grants that ended in July 2025) are still repeated on the live site. Epic H tracks the rewrite as
a capital-plus-five-years plan in which grant-funded staff build multiple sustainability sources
and an endowment that covers the campus's permanent floor costs. The plan itself is confidential
and lives in Drive; only its public-safe outputs land here and on the site.
