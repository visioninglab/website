# Visioning Lab

Website for Visioning Lab — a research lab at the intersection of ontological thinking, infrastructure systems, and immersive technology.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Content:** MDX files in `/content`
- **Fonts:** Geist (body) + Source Serif 4 (headings)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Essays and projects are MDX files in the `content/` directory:

```
content/
  essays/      # MDX files with frontmatter (title, date, summary, tags, featured)
  projects/    # MDX files with frontmatter (title, summary, status, year, tags, featured, external)
```

To add a new essay or project, create a new `.mdx` file in the appropriate folder.

## Pages

- `/` — Homepage (latest essay, featured essays, featured projects)
- `/thinking` — All essays
- `/thinking/[slug]` — Essay detail
- `/projects` — All projects
- `/projects/[slug]` — Project detail
- `/about` — About the lab
- `/collaborate` — Contact form and collaboration info

## Deployment

Deploy to Vercel by connecting this repo. Builds are static — no server required.
