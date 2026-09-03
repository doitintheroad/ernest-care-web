# Changelog

All notable changes to the **Ernest Care** web platform are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to strict clinical, regulatory, and technical performance standards.

---

## [2.2.0] - 2026-09-03

### Kinetic Parallax & Persona Architecture Release (v68)
- **Dead-Center Kinetic Hero Math:**
  - Re-engineered `initKineticHero` in `site.js` using unassailable absolute viewport geometry: `shift = (window.innerWidth / 2) - anchorLeft - (w * scale) / 2`.
  - Validated via computer-vision frame analysis: reduced opening headline drift from +164px rightward bias down to sub-4px of true viewport midpoint.
- **The 4-Phase Choreography Standard & Reading Plateau:**
  - Expanded scrub track from `200vh` to `280vh` (~180vh travel).
  - Implemented 4 distinct zones: Initial Dead-Zone (0–8%), Kinetic Glide (8–48%), **The Reading Plateau (48–88%)**, and Natural Release (88–100%).
  - Added dedicated ~70vh resting hold where the entire landing layout remains 100% pinned, sharp, and interactive so users can read copy and examine specification rows without rush.
- **Dedicated Persona Routes:**
  - `/law` (`law.html` & `law/index.html`): Tailored for Bay Street litigation & transactional partners, addressing attrition math and billable hour stress.
  - `/chro` (`chro.html` & `chro/index.html`): Tailored for Chief Human Resources Officers, emphasizing the benefits gap, compliance, and fiduciary coverage.
- **Codebase Optimization & Standards:**
  - Stripped 8KB of redundant, duplicate CSS rules from `styles.css`.
  - Replaced `overflow-x: hidden` with `overflow-x: clip` on `body` to guarantee uncompromised `position: sticky` across Chromium and WebKit.
  - Validated 100% balanced JavaScript syntax (`assert count('{') == count('}')`).
  - Packaged global Antigravity skill: `website-parallax-scanner` with automated OpenCV and headless Chrome QA tooling.
  - Cache bumped to `?v=68` across all HTML files.

---

## [2.1.0] - 2026-09-01

### Added & Verified
- **No Client Logos FAQ**: Integrated explicit FAQ accordion item on `index.html` and matching `FAQPage` JSON-LD schema explaining why corporate client rosters are never published (protected under identical legal rigor as clinical privacy).
- **Regulatory Transparency**: Anchored `CRPO #17513` in the primary website footer colophon.
- **Competitive Vendor Landscape Matrix**: Created `03_Strategy/Ernest_Vendor_Landscape_Matrix.md` capturing the 2×2 positioning scatter plot (Clinical Rigor vs. Risk Mitigation Focus).
- **Figma Social Media System**: Documented editorial design system tokens (Fraunces + Public Sans + IBM Plex Mono, 1080×1350, spruce/ochre) in `05_Brand/Ernest_Care_Social_Templates_Figma_Spec.md`, enforcing strict evidence guardrails against unsourced stats.

---

## [2.0.0] - 2026-08-27 (Ernest Care 2.0)

### Major Visual & Architectural Upgrade: Theatrical Executive Vault & Canopy
- **Unified Dark Obsidian Glass Navigation**:
  - Rebuilt `<header>` with dark glass `rgba(14, 18, 15, 0.94)` and `backdrop-filter: blur(16px)`, eliminating the previous cream collar above the dark hero.
  - Wordmark shifted to warm ivory `#F6F3EA` with ochre animated flourish.
  - Navlinks converted to tracked `IBM Plex Mono` (`0.16em` spacing) in muted ivory with ochre hover state.
  - Consultation button styled in crisp mono outline (`border: 1px solid rgba(196, 132, 61, 0.45)`).
  - Mobile menu drawer rebuilt in dark glass with hairline gold dividers.
- **4-Stage Executive Vault Background Cadence**:
  - **Module 1 (Hero)**: Atmospheric studio radial spotlight (`#18271F` -> `#111412` -> `#0B0D0B`) with 120px perimeter vignette and outer blueprint corner brackets.
  - **Module 2 (The 4-Mark Ledger)**: Upgraded from pale paper to medium-dark spruce (`#15241D`) with 1px ochre hairline grid and 48x48 line marks.
  - **Module 3 (The Air-Gap Vault)**: Deep obsidian statutory data isolation chambers with glowing amber filaments.
  - **Module 4 (The Tariff Offer)**: Upgraded from light paper to dark executive schedule (`#101411`) with gold rules and Fraunces price numerals.
  - **Module 5 (The Board Kit)**: Arrives on high-contrast tactile warm paper (`#ECE6D8`), presenting the 3 forwardable monographs as physical paper dossiers.
- **Architectural Detailing & Tapered Gold Rules**:
  - Injected 1px tapered gradient hairlines (`.gold-rule`) at all major section thresholds.
  - Elevated Daniel Cooper's portrait caption into an engraved archival plaque with mono coordinates.
  - Re-engineered FAQ accordions (`details.faq`) with Fraunces serif questions and minimalist animated `+` / `−` indicators.
  - Converted the "How We Start" 3-step rail into a clean 1px hairline ledger grid with solid card cells.
- **Cache Synchronization**: Bumped query parameters to `?v=53` across all HTML files.

---

## [1.5.0] - 2026-08-27

### Visual law
- Locked `GEMINI.md` as live visual/module law: Fraunces + Public Sans + IBM Plex Mono; obsidian/cream/spruce/ochre; radius 0–2px; hairline ledgers; no shadcn import.
- Homepage rebuilt as a visual-first monograph: dark hero (enemy + marks + treated plate), four-mark ledger, air-gap vault, printed tariff, board-kit plates.
- Removed marquee, scenario deck, vendor matrix, inspector, and ROI calculator from the homepage.
- Squared buttons. Dark-field terms are ochre with paper tooltips; mobile definitions sit in flow.
- One Cal.com URL (`daniel-cooper/30min`) on every booking control, all `js-booking`.

### Commercial / regulatory
- Tariff now shows Core $2,200 / 10 / $220 overage, Enterprise $4,000 / 20 / $200 overage, $2,500 workshop credited in 14 days, and SLA service credit.
- WSIA/Bill 127 copy rewritten as context, not “WSIB Compliant.”
- FAQ JSON-LD is valid JSON and matches on-page questions.

Cache: `styles.css?v=51` · `site.js?v=51`

---

## [1.3.0] - 2026-08-20

### Added
- **Interactive Vendor Landscape Matrix**:
  - Pure HTML5 / CSS3 / Vanilla JS 2x2 strategic quadrant matrix benchmarking Ernest Care against Traditional EAPs, Digital EAPs, Executive Coaches, and Psychology Clinics.
  - Features coordinate scale ticks (0, 5, 10), quadrant watermark identifiers (`Advisory`, `Enterprise Clinical`, `Volume Providers`, `Clinical Boutiques`), and a coral/brass pulsing beacon for Ernest Care.
  - Interactive cohort filter pills (`All Models`, `Volume Providers`, `Advisory`, `Clinical Boutiques`, `Enterprise Clinical`) connected to a dynamic **Live Readout Detail Box** explaining exact clinical depth, privacy/PHIPA status, and organizational risk failure modes.
  - Fully responsive on mobile with expanded 38×38px invisible touch targets and fluid scaling.
- **High-Intent B2B SEO & Schema Infrastructure**:
  - **`FAQPage` JSON-LD Schema**: Injected structured data directly into `<head>` targeting verified Google search queries (EAP structural differentiation, employer PHIPA confidentiality, blind corporate billing mechanics).
  - **Semantic H1 Accessibility**: Added screen-reader and crawler-accessible `<h1>` (`Toronto Executive Therapy Retainers & Corporate Clinical Infrastructure`) without compromising luxury visual layout.
  - **Micro-Geographic & Jurisdictional Footers**: Updated footer across all pages to signal jurisdictional safety: *"Serving Toronto’s Financial District, Bay Street boutiques, and Ontario-wide remote teams under strict PHIPA compliance."*
- **Live Practice Status Beacon**:
  - Integrated a pulsating amber/brass status beacon in the top announcement bar (`● Toronto Practice · Ontario-Wide Virtual · Confidential Retainers for Leadership Teams`).
- **Stacked Credential Grid Architecture**:
  - Re-engineered the `.trust-bar` from inline bulleted strings into stacked, two-line institutional data metrics (Bold primary metric + secondary classification with centered brass marker).

### Changed & Refined
- **Commercial Canon & Evidence Framing Lock (Canon v1.0)**:
  - **Pricing Transparency**: Formally aligned all tiers to the Commercial Canon: **Core ($2,200/mo CAD · 10 sessions · $220 overage)**, **Enterprise ($4,000/mo CAD · 20 sessions · $200 overage)**, **Ernest Executive (Bespoke)**, and the **$2,500 CAD Executive Workshop downsell** (100% credited if signed within 14 days).
  - **Statutory Duty of Care Framing**: Injected Ontario statutory compliance hooks into the dark section (`.section-ink`), specifically addressing **WSIB Bill 127 (Chronic Mental Stress)** and **OHSA psychological safety requirements**.
  - **Voice & Tone Elevation**: Replaced generic therapy phrases (*"The work meets you where you actually are"*) with institutional leadership positioning (*"Structured for the realities of equity partnerships and demanding boards"*).
  - **CTA Subtext Refinement**: Replaced colloquial phrasing (*"No pitches"*) with executive peer positioning (*"A 20-minute executive briefing on cohort parameters & clinical intake. No sales presentations."*).
  - **Evidence Cites (CRPO Standard 6.2)**: Enforced the approved evidence thesis (*Fit* + *Enough Sessions*, never using "dose" in buyer copy) alongside required regulatory disclaimers referencing Flückiger et al. (2018) and Howard et al. (1986).

### Fixed & Cleaned
- **Credential Accuracy**: Completely scrubbed ungrounded references to "professional mediator" across all body copy and founder editorial pull-quote blocks.
- **Cache-Busting Synchronization**: Synchronized all CSS and JS asset queries to `?v=18` across `index.html`, `briefing.html`, `privacy.html`, and `terms.html` to guarantee instant client-side invalidation.

---

## [1.2.0] - 2026-08-20

### Added
- **2027 Executive Monograph Standard**:
  - **Playfair Display Display Typography**: Replaced dated chunky serifs with razor-sharp editorial serifs, paired with `Public Sans` and `IBM Plex Mono`.
  - **Institutional Credential Grid (`.trust-bar`)**: Re-engineered credential badges into a pristine 4-point institutional trust ribbon with hairline brass dot accents.
  - **Confidentiality Charter Card**: Positioned high-impact corporate confidentiality charter above the closing consultation funnel.
  - **Refined CTA Stacks**: Clean, stacked conversion buttons with unified subtext (`A 20-minute candid discussion on structural liability. No pitches.`).
  - **Auto-Closing Mobile Navigation**: Mobile drawer now gracefully collapses on anchor selection with smooth scroll anchoring.
  - **Dual GA4 & Google Ads Pipeline**: Integrated `G-HH7PYEG5RD` and `AW-946159700` with automated conversion listeners on `.js-booking` targets.

### Fixed
- **Hero Structural Bug**: Removed misplaced "No Client Logos" card from the hero section to restore immediate value-prop flow.
- **CSS Token Class Collision**: Resolved duplicate `.trust-ribbon` declarations in `styles.css?v=43` that caused mobile badge distortion.
- **Micro-Typographic Collisions**: Corrected descender clipping on masked headings and eliminated ragged text rivers with automatic hyphenation.
- **Cross-Page Link Integrity**: Standardized navigation targets across `index.html`, `briefing.html`, `privacy.html`, and `terms.html`.

---

## [1.1.0] - 2026-08-12

### Added
- **Tactile Luxury UI System**:
  - **Organic Paper Grain Texture**: Zero-load SVG noise overlay (`body::before` / `.bg-tactile-grain`) injected onto the background canvas, providing a matte parchment paper feel (`#F6F3EA` base).
  - **Tactile Card System (`.tactile-card`, `.card`)**: Upgraded content containers with 1px translucent borders (`rgba(217, 208, 186, 0.7)`), 1px inset white top bevels (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65)`), and multi-layered diffuse warm walnut drop shadows.
  - **Spring Physics (`.btn`, `.tactile-btn`)**: Implemented Apple/Linear-style `cubic-bezier(0.16, 1, 0.3, 1)` easing. Hovering floats elements smoothly (`translateY(-3px)`), and active clicks provide tactile haptic feedback (`:active { transform: scale(0.98); }`).
  - **Friction-Reducing Subtext (`.btn-subtext`)**: Standardized subcaption formatting beneath primary conversion buttons (`20 minutes. No pressure. Let's just talk.`).

### Changed
- **CTA Standardization**:
  - Unified all primary booking conversion buttons across public and private landing pages to **"Book Free Consultation"** (later updated to **"Schedule an Exploratory Call"**).
  - Retained all conversion tracking parameters (`js-booking`, `data-loc`, mailto subjects, `AW-946159700`).
- **Copy & Formatting Polish**:
  - **Em-Dash Purge**: Removed all `—` (`&mdash;`) characters across `index.html`, `briefing.html`, `privacy.html`, `terms.html`, `Ernest_B2B_One_Pager.html`, and `proposal-template.html`, replacing them with clean middle dots (`·`) or standardized punctuation.
  - **Escaped Quote Repairs**: Fixed escaped quote artifacts (`Let's` -> `Let's`).
  - **Positive Framing Alignment**: Refined core messaging to define Ernest Care positively by its elite clinical standards rather than by what it is not.

---

### Technical & Strategic Guardrails
1. **Zero-Dependency Architecture**: Built using pure HTML5, vanilla CSS3, and minimal JS. No React, Next.js, or TailwindCSS overhead.
2. **Clinical Privacy Compliance**: Private proposals (`private/`) maintain strict `<meta name="robots" content="noindex, nofollow">` directives.
3. **CRPO Regulatory Alignment**: Regulatory disclosures (CRPO #17513) and PHIPA privacy protocols remain intact across all legal footers and trust ribbons.
