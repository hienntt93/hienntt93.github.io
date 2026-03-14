# Site architecture — Hien Nguyen Cybersecurity

Suggested structure after adding the security research portfolio layer. Existing pages are unchanged; new entries are **bold**.

---

## Main site (https://hienntt93.github.io)

| Path | Description |
|------|-------------|
| `/` | Homepage — hero, trust strip, about, specialization, proof, impact, tools, philosophy, **Featured Research**, **For Recruiters**, **For Clients**, research & writing, CTA, contact, quick advice |
| `/index.html` | Same as `/` |

### Homepage section changes
- **Featured Research**: New section after Philosophy (or after Research & Writing). 2–3 featured items (series or write-ups) with links to `/hien-cybersecurity/research/`, Threat Research Series, and Write-ups.
- **For Recruiters**: Dedicated mini-section (or clearer CTA block) with: roles (Security Engineer, Security Researcher, AppSec, Cloud Security, DevSecOps), link to Research Index, link to Case studies + Blog, contact.
- **For Clients**: Dedicated mini-section with: consulting services, case studies, reports, contact / book consultation.

---

## Consulting subsite (https://hienntt93.github.io/hien-cybersecurity)

| Path | Description |
|------|-------------|
| `/hien-cybersecurity/` | Subsite homepage — hero, services teaser, **Featured Research**, **For Recruiters** / **For Clients** mini-sections, CTA, support, footer |
| `/hien-cybersecurity/services/` | Services index (unchanged) |
| `/hien-cybersecurity/services/*` | Individual service pages (unchanged) |
| `/hien-cybersecurity/case-studies/` | Case studies index (unchanged) |
| `/hien-cybersecurity/reports/` | Reports & deliverables (unchanged) |
| `/hien-cybersecurity/blog/` | Blog index (unchanged) |
| `/hien-cybersecurity/blog/<slug>/` | Blog posts (unchanged) |
| `/hien-cybersecurity/about/` | About (unchanged) |
| `/hien-cybersecurity/contact/` | Contact (unchanged) |
| **`/hien-cybersecurity/research/`** | **Research Index** — hub for security research portfolio: series, write-ups, and links to blog/case studies |
| **`/hien-cybersecurity/research/threat-research-series/`** | **Threat Research Series** landing — curated series (e.g. SaaS threat briefs, cloud IAM, API abuse) with series cards |
| **`/hien-cybersecurity/research/write-ups/`** | **Write-ups** landing — technical write-ups and CVE-style posts with post cards |

---

## Updated navigation

### Main site header
- Keep: About, Specialization, Proof, Impact, Tools, Philosophy, Contact, theme toggle.
- Add or clarify: **Research** → `/hien-cybersecurity/research/` (or keep single “Services & Case Studies” and add Research inside subsite).

### Subsite header (if you control it in Next source)
- Home | Services | **Research** (dropdown or single link to Research Index) | Blog | Case Studies | Reports | About | Contact | Book consultation

### Footer (both sites)
- Add under Resources: **Research** → `/hien-cybersecurity/research/`, **Threat Research Series** → `/hien-cybersecurity/research/threat-research-series/`, **Write-ups** → `/hien-cybersecurity/research/write-ups/`.

---

## Internal linking

- From **blog posts**: “Part of the [Series Name] series” + link to series page; “Related: [Case study]” / “[Service]” where relevant.
- From **case studies**: “Related blog: [post]”; “Service: [link]”.
- From **services**: “Case studies: [link]”; “Blog: [relevant post]”.
- From **Research Index**: Links to Threat Research Series, Write-ups, Blog, Case studies, Reports.
- From **Threat Research Series** / **Write-ups**: Back to Research Index; each card links to the actual post or series article.

---

## Reusable components (static HTML / Jekyll)

- **Series Card** (class `series-card`): title, short description, count of posts, link to series page or first post, optional tags.
- **Post Card** (class `post-card`): title, date, excerpt, read time, tags, link to post (blog or write-up).

Defined in `styles.css` and used in Research Index, Threat Research Series, and Write-ups pages (and optionally on home/subsite home).

---

## Static / Jekyll compatibility

- New pages under `hien-cybersecurity/research/` are static HTML and work with GitHub Pages without Next build.
- They reference `/styles.css` at repo root so styling matches the main site (dark, minimal).
- **Markdown templates:** `docs/templates/series.md` (series landing), `docs/templates/write-up.md` (blog/write-up post). Use as reference for new content or with Jekyll if you add it.
- **Example post ideas:** `docs/example-cybersecurity-posts.md` — 10 cybersecurity post ideas with angles, series, and internal links.
