# Visioning Lab — Website PRD

## 1. Overview

Visioning Lab is a research lab. This document defines the requirements for a new website that serves as the lab's public-facing digital presence — showcasing research, attracting collaborators and clients, and providing information to the broader community.

## 2. Goals

| Priority | Goal |
|----------|------|
| **P0** | Showcase research projects, publications, and capabilities |
| **P0** | Provide clear information about the lab's mission, team, and focus areas |
| **P1** | Generate inbound leads from potential clients and collaborators |
| **P1** | Establish credibility with investors, partners, and the academic community |
| **P2** | Serve as a living resource that is easy to update as the lab evolves |

## 3. Target Audience

- **Potential clients** — businesses or organizations seeking research partnerships or services
- **Academic community** — researchers, students, and institutions interested in collaboration or publications
- **Investors & partners** — stakeholders evaluating the lab's work and impact
- **General public** — anyone discovering Visioning Lab for the first time

## 4. Pages & Content

### 4.1 Home

- Hero section with tagline and a clear value proposition
- Highlights of featured research / projects
- Brief "about" blurb with link to full About page
- Call-to-action (e.g. "Get in touch", "Explore our research")

### 4.2 About

- Mission and vision statement
- Research focus areas and methodology
- Lab history / origin story (optional)

### 4.3 Research / Projects

- Filterable grid or list of research projects
- Each project links to a detail page with:
  - Title, description, images/media
  - Status (ongoing / completed)
  - Related publications
  - Collaborators

### 4.4 Team

- Grid of team members with photo, name, role, and short bio
- Links to personal sites, Google Scholar, or social profiles

### 4.5 Publications

- List of academic publications, sortable/filterable by year or topic
- Links to PDFs, DOIs, or external sources

### 4.6 Contact

- Contact form (name, email, subject, message)
- Email address and any relevant social links
- Optional: office location / map

## 5. Non-Functional Requirements

| Requirement | Detail |
|-------------|--------|
| **Performance** | Lighthouse score ≥ 90 across all categories |
| **SEO** | Server-rendered or statically generated pages; proper meta tags and Open Graph data |
| **Accessibility** | WCAG 2.1 AA compliant |
| **Responsive** | Fully responsive across mobile, tablet, and desktop |
| **Maintainability** | Content should be easy to update without deep code changes (markdown, CMS, or config files) |

## 6. Tech Stack (Recommended)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Astro | Lightweight, content-focused, ships minimal JS by default — ideal for a research lab site that is mostly static content |
| **Styling** | Tailwind CSS | Utility-first, fast to iterate, consistent design system |
| **Content** | Markdown / MDX files | Easy for non-developers to author; version-controlled alongside code |
| **Deployment** | Vercel or Netlify | Free tier, automatic deploys from Git, edge CDN |
| **Contact form** | Third-party service (e.g. Formspree) or serverless function | Keeps the site static while still handling form submissions |

## 7. Design Direction

To be determined. Initial exploration should consider:

- **Modern & minimal** — clean whitespace, strong typography, lets the research speak for itself
- **Bold & creative** — expressive layout, motion, and color to convey innovation
- **Academic & professional** — structured, formal, builds trust and credibility

A mood board or style exploration should be the first design deliverable.

## 8. Milestones

| Phase | Scope | Deliverable |
|-------|-------|-------------|
| **1 — Foundation** | Project setup, design system, Home page, About page | Deployable site with core pages |
| **2 — Content** | Research/Projects, Team, Publications pages | Full content structure in place |
| **3 — Interaction** | Contact form, filtering/sorting, animations, SEO polish | Feature-complete site |
| **4 — Launch** | Content population, QA, performance audit, go-live | Production launch |

## 9. Open Questions

- [ ] Does Visioning Lab have existing brand guidelines (logo, colors, fonts)?
- [ ] Is there existing content (bios, project descriptions, publications) ready to migrate?
- [ ] Are there any integrations needed (e.g. Google Scholar feed, newsletter signup)?
- [ ] Who will be responsible for ongoing content updates?
- [ ] Is a blog or news section needed in the future?
