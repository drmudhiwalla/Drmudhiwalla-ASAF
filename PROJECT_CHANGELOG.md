# ASAF Website — Project Change Log

**Project:** DrMudhiwalla HealthTech Pvt Ltd corporate & screening website (`drmudhiwalla.com`)
**Period covered:** 26 August 2026 – 30 September 2026 (20 commits + one remediation session)
**Stack:** Static HTML5 / CSS3 / vanilla JavaScript — no framework, no build step, no backend
**Companion doc:** `PROJECT_DOCUMENTATION.txt` covers *what the site is and why*; this document covers *what changed, when, and what is still open*.

---

## 1. Executive summary

The project opened on 26 August as a single-page marketing site and ended on 30 September as a 31-page corporate site carrying seven browser-based health screening tools, a shared navigation and footer system, and a full legal/compliance section.

The single most consequential decision was architectural. A parallel Next.js application (`gym-mvp`) was scaffolded on 9 September — a dynamic screening platform with Prisma, NextAuth, a staff dashboard and server-side PDF generation. Two days later it was deleted outright (12,521 lines removed) and its scoring logic was re-implemented as client-side JavaScript inside static pages. The static route won because the assessments are pure arithmetic, nothing needs to be persisted, and hosting costs nothing.

**Delivered:** 31 pages, 7 assessment tools, 5 compliance PDFs, 13 sitemap entries, shared footer/nav, OG share previews, 404 page, `robots.txt`, and full legal pages.

**Current state:** functionally complete and verified across 155 automated checks. The primary outstanding risk is stylesheet duplication, which caused the one serious defect found in the final review.

---

## 2. Timeline

### Phase 1 — Foundation (26 Aug – 4 Sep)
Established the base design system and a printable artefact.
- Initial redesigned site: `index.html`, `styles.css`, `script.js`, `logo.png`, `bg.jpg`
- Offer letter page, Poppins typeface, "HealthTech" branding, responsive pass
- `page/index.html` — standalone printable offer letter
- Landing page reworked: social icons, GST/CIN identifiers, mobile responsiveness
- Mobile alignment defects corrected

### Phase 2 — Core product pages (7 Sep)
The first real content push — the business model itself.
- `bank-model.html` (642 lines) — the flagship page explaining the branch-screening model
- `sleep.html` (699 lines) — first full screening tool
- BP heart-ECG iconography, lifestyle section polish, tablet breakpoints

### Phase 3 — Architecture pivot (9 – 11 Sep)
The defining decision of the project.
- **9 Sep:** `gym-mvp` committed — Next.js 15 + Prisma + NextAuth app, 12,438 lines: multi-step screening flow, consent capture, staff dashboard, admin panel, server-side PDF reports
- **11 Sep:** `gym-mvp` deleted in full; static site built out in its place. New pages: `bmi.html`, `bri.html`, `bp-category.html`, `sedentary.html`, `stress.html`, certificate viewers, annual report, founder page

### Phase 4 — Site infrastructure (15 Sep)
Largest single commit (+2,886 lines) — everything needed to operate a real site.
- `404.html`, `robots.txt`, `sitemap.xml`
- `share-preview.html` — 354-line Open Graph preview template for WhatsApp/LinkedIn
- Mobile hamburger menu, mobile optimisation pass
- Assessment PDF downloads, footer placeholder pages, UI polish

### Phase 5 — Footer and legal (16 – 17 Sep)
- Footer redesign; privacy policy expanded from stub to full document
- BMI and BRI calculator corrections
- Privacy policy, Terms & Conditions, Medical Disclaimer completed (+744 lines)

### Phase 6 — Corporate pages and encoding repair (19 Sep)
- `careers.html`, `our-approach.html`, `corporates.html`; `favicon.svg`; scroll-reveal animations; team photography under `/members`
- A three-stage encoding repair: charset corrections on assessment pages, `.gitattributes` to normalise line endings, and a fix for **double-encoded Devanagari** (Hindi) text across 7 pages

### Phase 7 — Assessment depth (22 Sep)
- `sedentary.html` rebuilt on the **IPAQ Short Form with MET scoring**, plus skip logic and mobile spacing fixes (+618/−363)

### Phase 8 — Gym model and report cards (25 Sep)
- `gym-model.html` (655), `ghq.html` (596 — GHQ-12), `early-backers.html` (423)
- `report-card.js` + `report.css` introduced for shareable result cards
- Scroll/hover card animations, logo weight refinements (+3,776/−620)

### Phase 9 — Corporate info and the shared footer (29 Sep)
The structural shift that set up the final remediation.
- `corporate-info.html` created (312 lines)
- **Footer extracted into shared components:** `footer.css` (427) and `site-footer.js` (161), injected by script rather than copy-pasted per page
- Nav restructured into four dropdowns: Products / Industries / Health Tools / About
- Early-backer profile added

### Phase 10 — Footer remediation and nav fix (30 Sep, uncommitted)
Full review of Phase 9 surfaced one critical defect and three smaller issues.

| # | Issue found | Impact | Fix |
|---|---|---|---|
| 1 | Contact modal styles lived only in `styles.css`, but 17 pages load `footer.css` | **Critical** — modal rendered unstyled on **14 pages**: 958px tall, clipped off-screen, 286×286 unconstrained SVGs | Ported card/close/icon/animation rules into `footer.css` → 360×217, padded, rounded, 56×56 icons |
| 2 | 4 footer columns are a fixed 727px and can never fit beside a 360px brand below ~1180px | Footer collapsed into a dead-space band | 2×2 grid for 769–1200px |
| 3 | 5 pages use `body { flex-direction: column; align-items: center }`, so the footer shrink-to-fit (984px in a 1024px viewport) | Footer not full-bleed | `align-self: stretch` (inert in block layout, so zero risk elsewhere) |
| 4 | Footer chevron was decorative — no handler, `cursor: auto` | Looked interactive, did nothing | Real button: `role`, `tabindex`, click + Enter/Space scroll-to-top |
| 5 | "Health Infrastructure" linked to the homepage — a dead link on the homepage itself | Misleading navigation | Now points to `bank-model.html` in the desktop nav, footer, and mobile menu |

---

## 3. Current inventory

| | |
|---|---|
| Pages | 31 published HTML pages (+ `share-preview.html` OG template) |
| Code size | 577 KB HTML, 67 KB CSS, 24 KB JS |
| Stylesheets | `styles.css` (48 KB), `footer.css` (11 KB), `report.css` (8 KB) |
| Scripts | `site-footer.js` (10 KB), `report-card.js` (13 KB), `script.js` |
| Compliance PDFs | DPIIT, Udyam, FY25-26 Annual Report, FY25-26 Financial Statements |
| Stylesheet loading | 17 pages load `footer.css`, 13 load `styles.css` |

### Assessment tools

| Tool | Instrument | Output |
|---|---|---|
| Sleep | Pittsburgh Sleep Quality Index (PSQI) | 0–15 across 5 components |
| Stress | Perceived Stress Scale (PSS) | scored bands |
| Sedentary behaviour | IPAQ Short Form | MET-based score |
| Mental wellbeing | GHQ-12 | scored bands |
| BMI | — | category |
| BRI | — | category |
| Blood pressure | — | category |

All scoring runs in the browser. No data is transmitted or stored — a deliberate privacy decision.

---

## 4. Open items

**1. Stylesheet duplication (highest priority).** `footer.css` and `styles.css` both define footer styles, and pages load one or the other. This is the direct cause of the critical modal defect. Global injection was deliberately *not* used as a fix because `.logo-title`, `.logo-subtitle`, and `.pvt-ltd` are shared with headers and would restyle them. Consolidation should be addressed deliberately.

**2. Three competing contact-modal implementations.** `footer.css` (injected), `bank-model.html`/`gym-model.html` (`.modal-overlay`), and `careers.html`/`early-backers.html`/`index.html` (hard-coded markup). All currently work but must be maintained in parallel.

**3. Sitemap covers 13 of 31 pages.** Several assessment, legal, and corporate pages are absent.

**4. Mobile menu shows two labels for one destination** — "Health Infrastructure" and "Bank Model" both go to `bank-model.html`. Intentional for now (mirrors the Products/Industries split on desktop) but worth a decision.

**5. Footer chevron points down but scrolls to top.** Matches the original code's documented intent; visually contradictory.

**6. `gym-mvp` residue.** The Next.js app was deleted in September; on 30 September leftover build artefacts were removed. Two tracked files were restored from git; a gitignored `.env` was lost and **any credentials in it should be assumed compromised and rotated**.

---

## 5. Verification approach

The final review used a temporary Puppeteer harness (`serve.js` + `verify.js`, kept outside the repository) to load every page at 1440 / 1201 / 1200 / 1024 / 900 / 769 / 768 / 390 px, and to assert:

- contact modal geometry, padding, radius, icon size, and viewport overflow
- footer width, height, and whether columns sit side-by-side
- footer arrow handler wiring and ARIA state
- console errors and failed network requests

Result: **155 checks, 0 genuine footer failures.** The 5 residual flags are benign — Chrome's speculative `/favicon.ico` request, and the bank/gym modal's own deliberate icon scaling on small screens. Live-versus-local comparison confirmed mobile footer heights are byte-identical to production and the modal is fixed on every affected page.

---

*Generated 30 September 2026. Uncommitted work from Phase 10 (`footer.css`, `styles.css`, `site-footer.js`, `index.html`) is not yet in git.*
