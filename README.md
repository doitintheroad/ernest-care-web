# Ernest Care (B2B Web Platform)

Authoritative production deployment directory for **Ernest Care** ([ernest.care](https://ernest.care)), an executive psychotherapy carve-out practice for high-leverage leadership teams, partners, and high-attrition organizations in Ontario.

---

## 1. Production Architecture

- **Stack:** Zero-runtime vanilla HTML5, modern CSS3, and vanilla ES6+ JavaScript. Zero external frameworks, bundlers, or remote runtime dependencies.
- **Visual Aesthetic:** Apple-grade Tactile Luxury. Atmospheric obsidian glass, Public Sans typography, Fraunces headline styling, and statutory air-gap framing.
- **Kinetic Physics:** Scroll-driven hero choreography featuring dead-center layout math, independent typography scaling, and a dedicated 40% **Reading Plateau** hold.
- **Routing & Personas:**
  - `/` (`index.html`): Primary B2B executive carve-out homepage.
  - `/law` (`law.html` & `law/index.html`): Dedicated Bay Street / commercial law firm partner track page.
  - `/chro` (`chro.html` & `chro/index.html`): Dedicated HR / Enterprise C-suite benefits carve-out page.
  - `/reports/`: Downloadable executive board monographs (`executive-memo.html`, `vendor-diligence.html`, `liability-audit.html`).
  - `/private/`: B2B proposals and client onboarding agreements.
- **Deployment:** Apache / cPanel static hosting via `.htaccess` (HTTPS enforcement, clean extensionless URLs, security headers).
- **Active Cache Version:** `?v=68`

---

## 2. Platform Invariants

1. **Hero Purity & The Zero-Eyebrow Open:**
   The homepage opens immediately with the dark obsidian glass navigation and the primary headline: *"They will not call the EAP. Build them a door they will use."* No clutter, countdowns, or top banners.
2. **Statutory Data Air-Gap (PHIPA):**
   Sole Health Information Custodian (HIC) boundary under Ontario PHIPA, 2004. Daniel Cooper is the named registered clinician; corporate clients receive blind Net-15 invoicing with zero attendance reporting.
3. **Typography Standard:**
   Public Sans for all navigation, buttons, and interface copy; Fraunces for display headlines and editorial accents; IBM Plex Mono strictly for code, hashes, and data metrics.
4. **Cache Busting Protocol:**
   Any change to `styles.css` or `site.js` requires incrementing the `?v=XX` query parameter across all referring HTML documents.
