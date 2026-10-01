# Campus grant-readiness plan: representing the Sigel, PA charity campus on technologymonastery.org

**Status:** research brief and conversion plan (2026-10-01). Tracked by the `[EPIC]` issues in this
repository. This document is the shared context for every issue in that set; the issues carry the
acceptance criteria.

## 1. Why this exists

Free For Charity (FFC) is competing for a large grant that would fund the purchase of a rural
property in the Clear Creek and Cook Forest area near Sigel, Pennsylvania, and its conversion
into a charity campus under the Technology Monastery concept of operations: a non-secular,
open-to-anyone place where people who want to give back to the charitable world can live simply,
work, learn, and serve. The first residents the concept names are veterans, survivors coming out of
women's shelters, and people who have stabilized after drug and alcohol rehabilitation, alongside
builders of open-source and other public-good technology.

The purpose behind the campus is **stability for the whole Free For Charity mission**. The
Technology Monastery is a project of FFC and a revitalization of the campus capability FFC
previously operated in Arizona. Its first job is to fund two full-time staff, a **Volunteer
Manager** and a **Program Coordinator**, who turn FFC's volunteer-run service program into a
staffed one and open the volunteer pipelines that need a full-time host: AmeriCorps members,
AI-practitioner fellows embedded in charities (such as Anthropic's Claude Corps), and Workforce
Innovation and Opportunity Act (WIOA) participants once staffing allows an employer of record. The
five-year goal is that both positions are fully funded and endowed at reasonable compensation for
the work, based at the campus, so the mission no longer depends on unpaid leadership.

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

- **Location, as it may be described publicly.** "Near Clear Creek State Park, Cook Forest State
  Park and Sigel, Pennsylvania", in a year-round outdoor-recreation region of northwestern
  Pennsylvania within reach of the major population and technology centers of the northeastern
  United States and Canada. **That sentence is the whole public description.** No acreage, parcel
  count, road or route names, driving directions, maps or aerials that show the parcel, names of
  existing businesses on or beside the land, or descriptions of structures that would identify
  the property. Specifics live in the grant application and the private facts sheet (Epic H).
- **Land, in general terms only.** Rural acreage with a mix of open ground and woodland, existing
  access and nearby utilities, and some existing camping use, which is why the plan is to acquire
  and convert rather than build from nothing.
- **Planned first-phase infrastructure** (from the pilot notes): shared kitchen and gathering
  space, coworking area, community bathhouse and restrooms, roughly ten campsites, RV parking,
  site planning for accessible tiny homes, shared utility connections and outdoor spaces.
- **Current phase.** Planning and evaluation: ownership transfer, preliminary site planning,
  utility and septic evaluation, volunteer coordination, nonprofit structuring, and a long-term
  stewardship plan. A county service forester has already been consulted; forest stewardship and
  NRCS cost-share programs are candidate complements to the grant.
- **TechnoMonasteries (partner, not a second organization).** technomonasteries.org is run by an
  external volunteer group with no 501(c)(3) status that is helping FFC create the Technology
  Monastery. Its site presents the broader "network of places where builders, researchers, and
  creators can travel, exchange ideas, and refine their craft" idea and links to a Discord. The
  agreed direction: the group folds under FFC's Technology Monastery branding for the United
  States campus, and may in 10 to 15 years develop a similar offering at an international
  location focused on the open-source community rather than direct service to charities. Both
  sites must say this plainly so a funder reads one organization with a volunteer partner, not two
  competing projects.

## 4. Concept of operations the site must communicate

The pitch has five parts, and each needs a home on the site.

1. **Place.** A quiet, rural campus that already works as a campground, in a recreation corridor,
   with room to grow. Show it with a regional map, non-identifying photographs and the phased plan; never a parcel map or aerial (section 8).
2. **People served.** Open to anyone, non-secular, with named first cohorts: veterans; survivors
   leaving women's shelters; people in recovery who have stabilized; public-good and open-source
   technologists on sabbatical. State eligibility and the referral partners each cohort comes
   through, and the safeguards that make co-residence safe (substance-free campus, background
   screening, trauma-informed practice, clear community agreements).
3. **Pathway.** Arrive, stabilize, learn, serve, launch. Residents give back by doing real work for
   real charities through the existing Technology Monastery service program (the 100+ supported
   charities are the service placements), and by stewarding the campus itself. That link between
   the existing program and the campus is the core of the case: the campus is not a new charity, it
   is housing and community wrapped around a working service engine.
   **Staffing is what makes the pathway real.** The Volunteer Manager recruits, places, and
   supports residents and remote volunteers and opens the AmeriCorps, AI-fellow, and WIOA
   pipelines; the Program Coordinator runs intake, service delivery to charities, and reporting.
   Say on the site that the grant funds these two roles and that the five-year plan endows them.
   **University capstones are the first pipeline that turns short-lived volunteers into long-term
   ones.** FFC intends to sponsor Penn State Learning Factory capstone projects every year in
   perpetuity at its sponsorship tier, request a one-off matching gift from the Farrell Center for
   Corporate Innovation and Entrepreneurship at the Smeal College of Business (no published
   program), and extend the model to universities, colleges and two-year schools around the
   campus. Capstone teams join the summer residency for at least the first three years, while the two staff and
   enablers are on site, and every project is either an internal improvement to FFC and the
   Technology Monastery or a supported-charity project with far deeper engagement than
   short-duration volunteering allows. The outcome to measure is volunteer longevity: engagement
   measured in seasons and years rather than hours.
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
  story covers the service program and the campus; record and implement the TechnoMonasteries
  relationship (volunteer partner folding under FFC's brand); add the non-secular, open-to-anyone
  statement; new navigation.
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
- **H. Business plan refresh.** Rewrite the 2023 plan as a capital-plus-five-years plan around
  the two funded roles, the volunteer pipelines, the sustainability sources and the endowment;
  see section 10.
- **I. University capstone and student pipeline.** Penn State Learning Factory sponsorship as a
  recurring grant line at its sponsorship tier, a one-off Farrell Center matching gift, regional
  universities, colleges and two-year schools, and the summer capstone cohort aligned with the
  residency for the first three years; the volunteer-longevity metric.

## 7. Content and decisions the board must supply

These cannot be invented by a developer and block the corresponding issues.

- Campus name as it will appear publicly, and the wording of the TechnoMonasteries relationship
  statement for both sites (Epic A).
- Target compensation ranges and start dates for the Volunteer Manager and Program Coordinator,
  and which volunteer pipelines (AmeriCorps, AI fellows, WIOA) launch in which year (Epic H).
- Approval of the exact public wording for the location (the one-sentence form above), and
  permission to publish photographs that do not identify the property (Epic C).
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
- **Keep the property general.** The site describes the location only as "near Clear Creek State
  Park, Cook Forest State Park and Sigel, Pennsylvania". No acreage, parcel count, road or route
  names, directions, parcel-level maps or aerials, names of existing businesses on or next to the
  land, identifiable structures, or photo metadata (strip EXIF location data). This applies to
  issues, PRs and commit messages in this public repository as much as to the site.
- **Every number is a claim.** "100+ charities", "24/7 support", and "Silver Partner" must be
  verified or rewritten before the campaign page launches. A reviewer who catches one inflated
  figure discounts the rest.
- **Planning language until commitments exist.** "Planned", "proposed", and "pilot" are correct
  words until permits, purchase, and funding are in hand.
- **Keep the FFC footer standard intact** (`siteConfig.supportedBy`, policy pages, GuideStar).
- **Accessibility is a funder signal.** New pages ship with alt text, keyboard navigation, and
  contrast that pass the existing standards.

## 9. Sources consulted

Internal (FFC Google Drive and mail, summarized above without private detail): Pennsylvania pilot
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
a capital-plus-five-years plan: the grant funds the property and two full-time positions, a
Volunteer Manager and a Program Coordinator, and those two people build the volunteer pipelines
(AmeriCorps, AI fellows embedded in charities, WIOA) and the sustainability sources (earned
revenue from the land, sponsored services, program funding, vendor programs, recurring and planned
giving) so that by year five both positions are fully funded and endowed at reasonable
compensation and the campus's permanent costs are covered. The plan itself is confidential and
lives in Drive; only its public-safe outputs land here and on the site.
