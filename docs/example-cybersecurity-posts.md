# Example cybersecurity post ideas (10)

Use these as prompts for new blog posts, write-ups, or series entries. Each fits the existing positioning: SaaS/fintech, cloud security, offensive security, AppSec, DevSecOps.

---

## 1. **SaaS tenant isolation: what can go wrong and how to test it**

- **Angle:** Multi-tenant data leakage, authz at the data layer, testing with multiple tenant accounts.
- **Series:** SaaS & multi-tenant security.
- **Internal links:** Case study (SaaS API Access Control), Services (Web/API pentest, API security testing).

---

## 2. **AWS IAM permission boundaries in practice**

- **Angle:** How to use permission boundaries to cap privilege escalation, with a minimal PoC and before/after policy snippets.
- **Series:** Cloud IAM & privilege escalation.
- **Internal links:** Case study (Privilege Escalation in Cloud IAM), Services (AWS Security Audit).

---

## 3. **BOLA/IDOR in REST and GraphQL APIs: same idea, different shapes**

- **Angle:** Object-level authorization failures in REST vs GraphQL; how to test and fix in both.
- **Series:** API abuse & OWASP API Top 10.
- **Internal links:** Blog (OWASP API Top 10), Case study (SaaS API Access Control), API Security Testing service.

---

## 4. **Kubernetes RBAC and NetworkPolicies: a 15-minute hardening pass**

- **Angle:** Minimal, high-impact RBAC and NetworkPolicy rules for a typical app namespace; copy-paste friendly.
- **Series:** (Standalone or “Kubernetes security” series.)
- **Internal links:** Blog (Top 10 Kubernetes security mistakes), Kubernetes Security Review service.

---

## 5. **What SOC 2 auditors actually look at in your cloud environment**

- **Angle:** Control evidence, logging, and change management from an auditor’s perspective; how to prepare without over-building.
- **Internal links:** Blog (How startups prepare for SOC 2), Case studies (audit readiness), GRC / Security Program Setup service.

---

## 6. **S3 and storage exposure: beyond “block public access”**

- **Angle:** Bucket policies, ACLs, and cross-account access; how to audit and lock down existing buckets.
- **Series:** Cloud IAM or standalone.
- **Internal links:** Case study (Public S3 data exposure), AWS Security Audit service.

---

## 7. **Secrets in CI/CD: what we keep finding and how to fix it**

- **Angle:** Hardcoded secrets, env vars, and secret management in pipelines; practical remediation (e.g. OIDC, vault, least privilege).
- **Internal links:** DevSecOps Security Assessment service, Blog (common SaaS security risks).

---

## 8. **Rate limiting and abuse detection for APIs**

- **Angle:** Why rate limiting matters for auth and data endpoints; simple patterns and when to add abuse detection.
- **Series:** API abuse & OWASP API Top 10.
- **Internal links:** API Security Testing, Blog (OWASP API Top 10).

---

## 9. **GCP IAM vs AWS IAM: where privilege escalation hides**

- **Angle:** Compare IAM models; common escalation paths in GCP (e.g. resource hierarchy, custom roles) and how to audit.
- **Series:** Cloud IAM & privilege escalation.
- **Internal links:** AWS-focused posts, Cloud security services.

---

## 10. **From pentest report to backlog: how to prioritize findings**

- **Angle:** For product/engineering: how to turn a report into tickets, risk-based ordering, and when to re-test.
- **Internal links:** Reports page, Case studies, Contact / Book consultation.
