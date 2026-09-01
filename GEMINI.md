# Ernest Care B2B — Visual, Narrative, and Technical Law

These invariants MUST be followed whenever modifying the Ernest Care website (`ernest.care`).
If a Figma export, shadcn kit, changelog draft, or older HTML disagrees with this file, **this file wins**.
Commercial prices, ICP, and SLA: `00_Canon/Ernest_Care_Commercial_Canon.md` wins over this file.
Outcome language: `00_Canon/Ernest_Care_Evidence_Framing.md` wins over this file.

**Authority for live HTML/CSS/JS:** this document.
**Not a component source:** `05_Brand/Figma_Brand_Deck/` (Vite/shadcn healthcare deck). Mood only. Never copy its rounded-xl cards, slate palette, or React runtime into `06_Web/ernest.care/`.
**Visual token source:** Ernest Care social Figma kit (obsidian / cream / spruce / ochre, Fraunces, Public Sans, IBM Plex Mono).

---

## 0. What the site is

A private-bank monograph for a CRPO-regulated clinical carve-out sold to Ontario professional firms.
It is an **experience** (material, type, marks, one instrument) and a **vendor file** (true, forwardable, no fanfic).
It is not a SaaS landing page, not a wellness app, and not a legal blog.

---

## 1. Visual law (iconographic, visceral, grounded)

### 1.1 Tokens (locked)

| Token | Value | Use |
|---|---|---|
| `--obsidian` | `#0E120F` | Deep dark obsidian glass fields, hero, air-gap vault, closer |
| `--ink` | `#1B1814` | Body type on paper |
| `--paper` | `#F6F3EA` | Light canvas (social kit cream) |
| `--paper-deep` | `#ECE6D8` | Alternate light field (monographs, board kit) |
| `--spruce` | `#15241D` | Medium-dark spruce ledger background |
| `--ochre` | `#C4843D` | Gold rules, accent marks, active highlights |
| `--brass` / `--brass-bright` | `#8C6631` / `#C59B5F` | Legacy aliases; prefer ochre on dark, brass on paper |
| `--serif` | **Fraunces** (optical 9–144, 400/600, italic) | Display, headings, and delicate specification numerals |
| `--sans` | **Public Sans** 400/500/600/700 | Body, navigation links, buttons, and UI chrome (natural casing) |
| `--mono` | **IBM Plex Mono** 500/600 | Technical data only (timestamps, hashes, code). NEVER for UI nav or buttons. |
| `--radius` | **0px** ledger grids; **6px–8px** floating frosted-glass plates and buttons | Never clunky bubble 14px+ cards. |
| `--radius-full` | 9999px | Status pulse dots and Apple-style pill action buttons |

One display serif. Do not load Playfair, Bodoni, and Fraunces together. Fraunces is the lock.

### 1.2 Surfaces & Spatial Engineering (De-Boxing Law)

- Luxury is **material change and open negative space**, not chrome or border prisons.
- **De-Boxed Negative Space:**
  - **BANNED:** Perimeter border fences around sections (`.hero-obsidian::after { inset: 16px; border: ... }`).
  - **BANNED:** Attaching CAD corner brackets to outer screen perimeters. Content floats with atmospheric room.
  - Floating specification plates use subtle frosted glass (`background: rgba(18, 25, 20, 0.45); border: 1px solid rgba(196, 132, 61, 0.2); border-radius: 8px; backdrop-filter: blur(16px)`).
- **The 4-Stage Executive Vault Cadence:**
  - Module 1 (Hero): Dark Studio Obsidian (`#0E120F`)
  - Module 2 (`.ledger-strip`): Medium-Dark Spruce (`#15241D`) with 1px ochre hairline grid
  - Module 3 (`.airgap-field`): Deep Obsidian Statutory Isolation Vault (`#0E100E`)
  - Module 4 (`.tariff-section`): Dark Executive Schedule (`#101411`) with gold rules
  - Module 5 (`#diligence-kit`): Tactile Warm Paper (`#ECE6D8`)
- **Tapered Gold Hairlines:** Major section thresholds are separated by 1px tapered gradient hairlines (`.gold-rule`):
  `linear-gradient(to right, transparent, rgba(196, 132, 61, 0.45), transparent)`.
- **Hairline ledger grids:** parent `gap: 1px; background: var(--rule);` children solid fills.
- **No white tile on cream.** No `--white` rounded rectangle sitting on `--paper`.
- Dark fields use **paper/cream type** and **ochre rules**. Never `--ink` type on dark backgrounds.

### 1.3 Marks (iconographic language)

Every primary module carries a **custom 48×48 line mark**: 1.5px stroke, square geometry, ochre on dark / spruce on paper.
Marks are architectural (vault, filament, ledger ticks, sealed envelope, named figure, 48h arc).
**Banned:** Lucide/Heroicons rounded filled blobs, emoji, 3D tilt, magnetic buttons, marquees, “LIVE TELEMETRY”, pulsing SaaS beacons.

### 1.4 Motion

- Section fade: `0.9s cubic-bezier(0.22, 1, 0.36, 1)`.
- Hover blooms: `0.7s`. Opacity and rule, not `scale(1.02)` or `rotateX`.
- `prefers-reduced-motion: reduce` and `<noscript>` must restore `.reveal`, `.fade-up`, and `.fade-up-stagger` to full opacity.
- No marquee. No 3D perspective tilt. No button magnetic translate.

### 1.5 Type (Anti-Blocky Typography Law)

- **UI Navigation & Controls:** Must use **`Public Sans`** (or system-ui), natural sentence/title case, subtle `-0.01em` tracking. **BANNED:** Using `IBM Plex Mono` or mechanical all-caps blocks for navigation links, buttons, or card titles.
- **Hero Open:** Zero eyebrow above `<h1>`. The page opens immediately with the headline.
- **Eyebrows & Metadata:** Proportional sans-serif with delicate uppercase tracking (`letter-spacing: 0.1em` to `0.12em`), never typewriter monospace.
- **Hero Display:** Fraunces, fluid `clamp()`, italic reserved for the wound / the turn.
- **Specification Numerals:** Elegant Fraunces serif numerals (`01`, `02`, `03`, `04`) in ochre, not chunky typewriter glyphs.
- **Measure:** Long, editorial, generous negative space. Do not wrap every sentence in a box.

### 1.6 Controls

- Primary hero button: Ochre fill with deep slate text, soft `6px` Apple radius, subtle metallic shadow (`box-shadow: 0 4px 18px rgba(...)`), natural sentence case.
- Secondary button: Subtle glass blur (`backdrop-filter: blur(12px)`), delicate hairline border, soft `6px` radius.
- Nav CTA: Apple-style pill button (`border-radius: 9999px; background: rgba(196, 132, 61, 0.12); border: 1px solid rgba(196, 132, 61, 0.35)`).
- Tooltips / term definitions:
  - Trigger is **ochre**, dashed gold rule, `tabindex="0"`, keyboard and tap.
  - Panel is **paper fill, ink type**, never dark-on-dark.
  - On viewports `max-width: 768px`, the definition is an **inline callout always in flow** (not hover-only).

### 1.7 Breathing room

Vertical section padding: `clamp(72px, 10vw, 128px)`. Not tight SaaS. Not so vast the offer falls off the first two screens.

---

## 2. Module order & Architecture (Ernest Care 2.0 Locked)

Above-the-fold through screen two, in this order:

1. **Top Navigation Canopy:** Sticky Dark Obsidian Glass (`top: 0`, blur 16px). Zero top-banner clutter above header.
2. **Hero (Zero Eyebrows + Pure Typographic Signal):**
   - **Left Column:** Devastating hook opening directly with `<h1>` (`They will not call the EAP. Build them a door they will use.`), clear lede, dual action buttons. No `.coord` eyebrow preceding `<h1>`. No duplicate micro-badges.
   - **Right Column:** **Carve-Out Specification Plate** (`.hero-spec-card`) answering Who, SLA, Privacy, and Invoicing.
   - **Personal Photo Ban:** No personal therapist headshot on the landing hero.
3. **Four-mark ledger** (static, Medium Spruce `#15241D`): CRPO #17513 · 48-business-hour intake · 10-session bank · blind Net-15.
4. **Air-gap** (Deep Obsidian Vault `#0E100E`): three chambers, literal void, luminous amber filaments. Chamber 02 anchors Daniel Cooper, RP as sole Health Information Custodian.
5. **Tariff / offer** (Dark Executive Schedule `#101411`): Core $2,200 / 10 / overage $220. Enterprise $4,000 / 20 / overage $200. Workshop $2,500 credited within 14 days. SLA service credit.
6. **Board kit** (Tactile Warm Paper `#ECE6D8`): three physical cream paper monographs for executive forwardability.
7. **Fit / enough sessions** (evidence). Flückiger 2018 + Howard 1986. Highlighting corporate fluency.
8. **Duty footnote** (short, legally accurate). WSIA chronic mental stress / OHSA s. 32.0.1 as context.
9. **Architectural FAQ → how we start → closer.** Details accordions with minimalist animated `+` / `−` indicators.

**Parked (do not restore without a new law):** scenario outcome deck, 2×2 vendor matrix, comparison inspector, cohort ROI calculator.

Nav matches scroll: Air-Gap · Programs · Board Kit · Evidence · FAQ.

---

## 3. Narrative and copy law

- **Enemy first.** The people whose book the firm cannot replace will not call a 1-800 EAP. That is an unused benefit on the exact risk that matters.
- **Mechanism, not poetry.** Named clinician. Session bank. 48 business hours. Blind invoice.
- **No promised clinical or commercial results.** No “zero billable disruption”, no hedged $950k, no “WSIB defense”.
- **WSIA / Bill 127:** workers may claim WSIB benefits for a diagnosed mental injury predominantly caused by a substantial work-related stressor (in force 2018). Ordinary employer decisions are generally excluded. A retainer is **not** WSIB coverage, **not** “WSIB compliant”, and **not** a legal defense. RPs do not diagnose.
- **OHSA s. 32.0.1** is the workplace harassment *policy* duty. Do not conflate it with a therapy retainer.
- **Proof stack:** credentials, mechanism, experience of the air-gap, then (post-sale) permissioned aggregates. No testimonials.
- **One booking URL sitewide:** `https://cal.com/daniel-cooper/30min`. Every booking control gets `js-booking`. Label: “Book a 20-minute briefing”.
- **No micro-copy under primary buttons.** SLA credit lives on the tariff, not as needy subtext.
- **No street addresses** in HTML, JSON-LD, or footers. `Toronto, Ontario` or `In-Person (Toronto) & Virtual (Ontario-Wide)`.
- **Regulatory & Governance Positioning (Platform Masterbrand):** The public site (`index.html`) is branded strictly as an institutional B2B enterprise platform (*"Registered Psychotherapy Practice · College of Registered Psychotherapists of Ontario · Statutory Health Information Custodian under Ontario PHIPA, 2004"*). **Do NOT put Daniel Cooper's personal registration number (`CRPO #17513`) on the public landing page.** Individual clinician license numbers and named credentials are kept strictly inside private vendor diligence dossiers (`reports/vendor-diligence.html`), legal contracts, and signed proposals.
- Language bans: absolute privilege, solicitor-client privilege, full clinical privilege, diagnostic capacity as an RP selling point, LIVE TELEMETRY, trainee-bashing that implies uniqueness in the CRPO 6.2 sense.

Voice: direct, unsentimental, adult. Treat the person, not the title. No “healing journey”, “safe space”, “holding space”.

---

## 4. Experience law (how it can be visceral *and* trustworthy)

Visceral here means **felt material**, not animation.

- Drop from cream nav into an **obsidian hero**. The body feels the temperature change.
- The headline is large enough to be the image. The portrait is a treated plate, not a friendly avatar.
- The air-gap is a **physical diagram**: three chambers, a void you can see, a brass filament. That is the partner’s real question (“will HR see me?”) answered in space, not in a paragraph.
- The tariff is a **printed sheet** (rules, mono captions, large serif figures), like a private account schedule.
- Marks repeat so the eye learns a language: vault, 48h, envelope, ticks.
- Grounding is the other half of the same system: CRPO number in mono, crisis 988, accurate statute footnote, prices a GC can audit, SLA credit instead of outcome guarantees.

If a device would look at home on a Series B marketing site, it does not ship.

---

## 5. Technical law

- Zero-dependency: HTML + CSS + one `site.js`. No React, Vite, Tailwind, or shadcn in `ernest.care/`.
- Cache bust: any edit to `styles.css` or `site.js` bumps `?v=XX` on **every** `.html` in this folder.
- JSON-LD must be valid JSON (no raw HTML inside strings) and must match visible FAQs.
- `#contact` stays **inside** `<main>`.
- The visible headline is the `<h1>`.
- Booking links that open Cal.com: `target="_blank" rel="noopener"` plus `js-booking`.
- After editing `site.js`, run `scratch/validate_js.py` if present; otherwise a syntax check that the file parses.
- **Google Drive Primary Source of Truth:** All production files are written and served directly from `G:\My Drive_Clinical Practice_Ernest Care (B2B)_Web\ernest.care\`. Zero dependency on remote Git repositories or FTP pipelines.
- **Dated Drive Archiving:** Every release milestone must be archived as a standalone dated snapshot directory (`90_Archive_Versions/YYYY-MM-DD_vX.X.X_Descriptor/`) and `.zip` archive (`Snapshot_vX.X.X_YYYY-MM-DD_Live.zip`) in Google Drive.
- **Mandatory Git Version Control:** Every update to `ernest.care/` MUST also be committed to local git with descriptive commit messages (`feat(...)`, `fix(...)`) and tagged at major milestones (`v2.0.0-release`).

---

## 6. Change control

1. Prices / SLA / ICP → Commercial Canon, then this page.
2. Visual tokens / module order / radius / type → this file, then CSS/HTML.
3. Do not write changelog entries for designs that are not in the HTML.
