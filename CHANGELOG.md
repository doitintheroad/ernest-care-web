# Changelog

All notable changes to the **Ernest Care** web platform are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to strict clinical, regulatory, and technical performance standards.

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
