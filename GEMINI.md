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
| `--obsidian` | `#121312` | Dark fields, hero, air-gap, closer |
| `--ink` | `#1B1814` | Body type on paper |
| `--paper` | `#F6F3EA` | Light canvas (social kit cream) |
| `--paper-deep` | `#ECE6D8` | Alternate light field |
| `--spruce` | `#1C3F34` | Ledger / primary fill on buttons |
| `--ochre` | `#C4843D` | Emphasis, marks, rules |
| `--brass` / `--brass-bright` | `#8C6631` / `#C59B5F` | Legacy aliases; prefer ochre on dark, brass on paper |
| `--serif` | **Fraunces** (optical 9–144, 400/600, italic) | Display and headings |
| `--sans` | **Public Sans** 400/500/600/700 | Body |
| `--mono` | **IBM Plex Mono** 500/600 | Coordinates, eyebrows, prices-as-data, SLA |
| `--radius` | **0px** surfaces, **2px** only if a clip is required | Never 8px+. Never 14px. |
| `--radius-full` | 9999px | Status *dot* only. Not buttons. Not cards. |

One display serif. Do not load Playfair, Bodoni, and Fraunces together. Fraunces is the lock.

### 1.2 Surfaces

- Luxury is **material change**, not chrome. Ink field, then paper field, then a 1px rule.
- **Hairline ledger grids:** parent `gap: 1px; background: var(--rule);` children solid fills. No per-card box-shadow on a cream page.
- **No white tile on cream.** No `--white` rounded rectangle sitting on `--paper`.
- **No drop-shadow cards.** Elevation is a field change or a 1px rule.
- Dark fields use **paper/cream type** and **ochre rules**. Never `--ink` type on `--obsidian` or `--ink` backgrounds.
- Ambient photography (founder plate) is treated: `mix-blend-mode: luminosity` under an obsidian gradient. No bright stock. No illustrations.

### 1.3 Marks (iconographic language)

Every primary module carries a **custom 48×48 line mark**: 1.5px stroke, square geometry, ochre on dark / spruce on paper.
Marks are architectural (vault, filament, ledger ticks, sealed envelope, named figure, 48h arc).
**Banned:** Lucide/Heroicons rounded filled blobs, emoji, 3D tilt, magnetic buttons, marquees, “LIVE TELEMETRY”, pulsing SaaS beacons.

### 1.4 Motion

- Section fade: `0.9s cubic-bezier(0.22, 1, 0.36, 1)`.
- Hover blooms: `0.7s`. Opacity and rule, not `scale(1.02)` or `rotateX`.
- `prefers-reduced-motion: reduce` and `<noscript>` must restore `.reveal`, `.fade-up`, and `.fade-up-stagger` to full opacity.
- No marquee. No 3D perspective tilt. No button magnetic translate.

### 1.5 Type

- Eyebrows: `--mono`, `letter-spacing: 0.28em` to `0.35em`, uppercase.
- Hero display: Fraunces, fluid `clamp()`, italic reserved for the wound / the turn.
- Coordinates (`01`, `EST.`, SLA): mono.
- Measure: long, editorial. Do not wrap every paragraph in a card.

### 1.6 Controls

- Primary button: spruce (or obsidian) **rectangle**, 1px rule, 0 radius. Not a pill.
- Secondary: outlined rectangle.
- Tooltips / term definitions:
  - Trigger is **ochre**, dashed gold rule, `tabindex="0"`, keyboard and tap.
  - Panel is **paper fill, ink type**, never dark-on-dark.
  - On viewports `max-width: 768px`, the definition is an **inline callout always in flow** (not hover-only).

### 1.7 Breathing room

Vertical section padding: `clamp(72px, 10vw, 128px)`. Not tight SaaS. Not so vast the offer falls off the first two screens.

---

## 2. Module order (locked)

Above-the-fold through screen two, in this order. Do not insert toys in front.

1. **Hero — enemy + mechanism + one CTA.** Named problem (partners will not use the EAP). Named mechanism (named RP, session bank, 48 business hours, blind billing). Portrait plate. One booking URL.
2. **Four-mark ledger** (static): CRPO #17513 · 48-business-hour intake · 10-session bank · blind Net-15. No marquee. No “WSIB Compliant”. No “Zero App Bloat”.
3. **Air-gap** (visual centerpiece): three chambers, literal void, vault mark. How HR never sees who attended.
4. **Tariff / offer:** Core $2,200 / 10 / overage $220. Enterprise $4,000 / 20 / overage $200. Workshop $2,500, 100% credited if a retainer is signed within 14 days. SLA service credit if the 48-business-hour window is missed. Bespoke = conversation, no invented public menu.
5. **Board kit:** three forwardable monographs.
6. **Fit / enough sessions** (evidence). Flückiger 2018 + Howard 1986. No guaranteed results.
7. **Duty footnote** (short, legally accurate). WSIA chronic mental stress / OHSA s. 32.0.1 as context, **not** a vendor certification or a legal defense.
8. **FAQ → how we start → closer.**

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
- **No “Toronto, ON, Toronto”.**
- Stage 1 delivery is founder-led (Daniel Cooper, RP, CRPO #17513). Do not pluralize a bench that is not named on the public register.
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
- **Mandatory Git Version Control:** Every update to `ernest.care/` MUST be committed to git immediately upon completion with a descriptive commit message (`feat(...)`, `fix(...)`) and tagged at major milestones. Never leave uncommitted changes at session close.

---

## 6. Change control

1. Prices / SLA / ICP → Commercial Canon, then this page.
2. Visual tokens / module order / radius / type → this file, then CSS/HTML.
3. Do not write changelog entries for designs that are not in the HTML.
