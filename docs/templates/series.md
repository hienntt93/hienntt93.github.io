---
# Series landing page (e.g. for Threat Research Series)
# Use with Jekyll collections or as a reference for static HTML series pages.

layout: default
title: "Series Title Here"
description: "One-line description of the series for meta and cards."
series_id: saas-threat-briefs  # slug for anchor / URL
tags:
  - AppSec
  - API
  - SaaS
posts:
  - title: "First Post in Series"
    url: /hien-cybersecurity/blog/first-post-slug/
    date: 2026-03-01
  - title: "Second Post"
    url: /hien-cybersecurity/blog/second-post-slug/
    date: 2026-03-15
---

# {{ page.title }}

Short intro (1–2 sentences). What this series covers and who it’s for (e.g. engineering leads, security teams, recruiters).

## Posts in this series

{% for post in page.posts %}
- [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%b %Y" }})
{% endfor %}

---

**Related:** [Case study: Example](/hien-cybersecurity/case-studies/#example) · [Service: API Security Testing](/hien-cybersecurity/services/api-security-testing/)
