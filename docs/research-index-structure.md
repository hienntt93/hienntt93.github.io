# Research Index — Page structure & how to add entries

The Research Index groups content into **6 domains**. Each domain has a short intro and a **card grid** of posts/case studies.

---

## Domains

| ID | Section | Intro focus |
|----|--------|-------------|
| `#api-appsec` | API & Application Security | OWASP, access control, multi-tenant, pentesting |
| `#cloud-aws` | Cloud & AWS Security | IAM, S3, logging, SOC 2, audits |
| `#kubernetes` | Kubernetes & Container Security | RBAC, NetworkPolicies, secrets, workload hardening |
| `#threat-research` | Threat Research | Attack paths, tenant isolation, API abuse, IAM escalation |
| `#detection` | Detection Engineering | Logging, alerting, CloudTrail, SOC 2 evidence |
| `#case-studies` | Case Studies / Practical Write-ups | Anonymized engagements, problem/approach/outcome |

---

## Card structure (per entry)

Each card includes:

- **Title** (link to post or case study anchor)
- **Excerpt** (1–2 sentences)
- **Meta row**: difficulty level + reading time
- **Tags** (small pills)
- **Related service** (optional link to services or case studies)

### Difficulty levels (CSS)

- `data-level="beginner"` → green dot
- `data-level="intermediate"` → yellow dot
- `data-level="advanced"` → red dot

### Example entry (HTML)

```html
<article class="research-post-card">
  <a href="/hien-cybersecurity/blog/your-post-slug/">
    <h3 class="research-post-card-title">Your Post Title</h3>
  </a>
  <p class="research-post-card-excerpt">One-sentence description for the card.</p>
  <div class="research-post-card-meta">
    <span class="post-card-difficulty" data-level="intermediate">Intermediate</span>
    <span class="post-card-read-time">8 min read</span>
  </div>
  <div class="research-post-card-tags">
    <span class="research-post-card-tag">Tag1</span>
    <span class="research-post-card-tag">Tag2</span>
  </div>
  <p class="research-post-card-related">Related: <a href="/hien-cybersecurity/services/...">Service Name</a></p>
</article>
```

### Example entry (Markdown / front matter for Jekyll)

If you move to Jekyll, you can drive the index from data:

```yaml
# _data/research_index.yml
api_appsec:
  title: "API & Application Security"
  intro: "Web and API security for SaaS and fintech..."
  posts:
    - title: "API Security Testing Guide: OWASP API Top 10"
      url: /hien-cybersecurity/blog/owasp-api-security-top-10-explained-for-saas/
      excerpt: "What to test and how to fix BOLA, auth flaws..."
      difficulty: intermediate
      read_time: "10 min read"
      tags: [API Security, OWASP, SaaS]
      related: "/hien-cybersecurity/services/api-security-testing/"
```

---

## CSS classes (styles.css)

- **Section**: `.research-domain`, `.research-domain-title`, `.research-domain-intro`
- **Grid**: `.research-card-grid` (responsive; 1 col on small screens)
- **Card**: `.research-post-card`, `.research-post-card-title`, `.research-post-card-excerpt`, `.research-post-card-meta`, `.research-post-card-tags`, `.research-post-card-related`
- **Meta**: `.post-card-difficulty[data-level="beginner|intermediate|advanced"]`, `.post-card-read-time`
- **Tags**: `.research-post-card-tag`

---

## Current example entries (by domain)

- **API & AppSec**: OWASP API Top 10, Top Web App Vulnerabilities SaaS, Common SaaS Security Risks (all from existing blog).
- **Cloud & AWS**: AWS Audit Checklist, How Startups Fail AWS Audits, SOC 2 Preparation (blog) + case study links.
- **Kubernetes**: Top 10 Kubernetes Security Mistakes (blog).
- **Threat Research**: Three series cards (SaaS threat briefs, API abuse, Cloud IAM) linking to Threat Research Series page.
- **Detection**: Two entries that reuse blog content (AWS checklist logging, SOC 2 evidence).
- **Case Studies**: Three case study cards (SaaS API, S3 exposure, IAM escalation) + Report deliverables link.

To add a new post: add a new `<article class="research-post-card">` in the right `.research-card-grid`, or in Jekyll add an item to the corresponding `_data/research_index.yml` group.
