# Hien Nguyen Cybersecurity — Root Landing Site

High-converting, static landing page for **Hien Nguyen Cybersecurity**. This repo is the **GitHub Pages root site** and acts as the main entry point for security consulting. It links to the full consulting site at [hien-cybersecurity](https://hienntt93.github.io/hien-cybersecurity/).

**Live site:** [https://hienntt93.github.io/](https://hienntt93.github.io/)  
**Full consulting site:** [https://hienntt93.github.io/hien-cybersecurity/](https://hienntt93.github.io/hien-cybersecurity/)

---

## Tech stack

- **HTML** + **CSS** (no build step)
- Minimal JavaScript (contact form mailto, nav toggle, footer year)
- Google Fonts: DM Sans, JetBrains Mono

---

## Preview locally

1. Clone the repo:
   ```bash
   git clone https://github.com/hienntt93/hienntt93.github.io.git
   cd hienntt93.github.io
   ```

2. Serve the folder with a static server (recommended so links and fonts work as in production):

   **Python 3:**
   ```bash
   python3 -m http.server 8000
   ```
   Open [http://localhost:8000](http://localhost:8000).

   **Node (npx):**
   ```bash
   npx serve .
   ```

   **Direct open:** You can also open `index.html` in a browser; relative links and some fonts may behave slightly differently than on GitHub Pages.

---

## How GitHub Pages deploys this site

This repository is the **root site** for the `hienntt93` GitHub account:

1. **Repo name:** `hienntt93.github.io` (required for root URL).
2. **Settings → Pages:**  
   - **Source:** Deploy from a branch  
   - **Branch:** `main` (or your default branch)  
   - **Folder:** `/ (root)`  
3. **No build:** GitHub serves the files as static HTML/CSS. No Jekyll or other generator unless you enable it.
4. After you push to the default branch, the site updates at **https://hienntt93.github.io/**.

---

## How to edit content quickly

- **Copy and links:** Edit `index.html`. Section IDs (`#services`, `#proof`, `#blog`, `#process`, `#pricing`, `#faq`, `#contact`) are used for in-page navigation; keep them if you change section order.
- **Contact form:** Submitting the form opens the user’s email client with a prefilled message to `hienntt.kma@gmail.com`. To change the recipient, edit the `mailto:` URL in the form’s submit handler in the `<script>` at the bottom of `index.html`.
- **Styling:** All styles are in `styles.css`. CSS variables at the top control colors, spacing, and typography.
- **Consulting site links:** All links to the full site use root-relative paths (`/hien-cybersecurity/`, `/hien-cybersecurity/case-studies/`, etc.). Update those in `index.html` if the project site path changes.
- **Social preview (OG/Twitter):** Meta tags reference `assets/og.png` (1200×630). If you only have `assets/og.svg`, export it to PNG at that size (e.g. browser DevTools, or an SVG→PNG tool) and save as `assets/og.png`.

---

## Repository structure

```
hienntt93.github.io/
├── index.html       # Single-page landing (nav, hero, services, proof, blog, tools, process, pricing, FAQ, explore, contact)
├── styles.css       # All styles (dark theme, responsive)
├── assets/          # Icons, SVGs (e.g. icon-shield.svg)
└── README.md        # This file
```

---

## Testing checklist (local + GitHub Pages)

Before pushing, verify:

**Local (e.g. `python3 -m http.server 8000` → http://localhost:8000):**

- [ ] Hero: primary CTA “Book consultation” goes to `#contact`; secondary “View services” goes to `#services`.
- [ ] Hero microcopy shows: “Remote EU timezone • Response within 24–48 hours • Fixed quote after scope”.
- [ ] Services: 4 cards show short outcome + price range + “Learn more”; each “Learn more” goes to `/hien-cybersecurity/services/...` (same tab).
- [ ] Proof: 3 short cards with 1-line outcome; “Case studies” and “View report samples” go to project site (same tab).
- [ ] Blog: 2 latest links + “All posts” go to `/hien-cybersecurity/blog/` (same tab).
- [ ] Tools strip: up to 8 badges visible; no full grid.
- [ ] Explore details: Services details, Case studies, Reports, Blog links go to project site (same tab).
- [ ] Footer: “Portfolio & detailed writeups → hien-cybersecurity” and other internal links open in same tab; GitHub and LinkedIn open in new tab with `rel="noopener noreferrer"`.
- [ ] Mobile: open menu, tap a nav link → menu closes; press Escape → menu closes. Button has `aria-controls="site-nav"`, nav has `id="site-nav"`.
- [ ] Contact form: submit opens mailto with prefilled body.

**On GitHub Pages (https://hienntt93.github.io/):**

- [ ] Same as above; all `/hien-cybersecurity/...` links resolve to https://hienntt93.github.io/hien-cybersecurity/...
- [ ] No 404s on in-page anchors or project-site paths.
- [ ] Fonts and styles load; layout is correct on mobile and desktop.

---

## Related

- **Full consulting website** (services, case studies, reports): [hien-cybersecurity](https://github.com/hienntt93/hien-cybersecurity) → [https://hienntt93.github.io/hien-cybersecurity/](https://hienntt93.github.io/hien-cybersecurity/)
