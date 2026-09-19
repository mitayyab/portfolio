# Muhammad Ibrahim Tayyab — portfolio

Personal portfolio site for a full-stack engineer, built from the desktop (1280px) and mobile (390px) design handoff. Server-rendered, statically generated, and fast: three small client components (mobile menu, request-trace explorer, contact form) and no runtime dependencies beyond Next.js and React.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- TypeScript in strict mode
- Tailwind CSS 4, with the design's tokens defined in `src/app/globals.css`
- Self-hosted Cormorant Garamond and Lora via `next/font/local`
- ESLint (Next.js config) and Prettier (with Tailwind class sorting)

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script                 | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Development server                        |
| `npm run build`        | Production build                          |
| `npm start`            | Serve the production build                |
| `npm run lint`         | ESLint, including the 200-line file limit |
| `npm run typecheck`    | `next typegen`, then `tsc --noEmit`       |
| `npm run format`       | Prettier, write                           |
| `npm run format:check` | Prettier, check only                      |

## Environment

Copy `.env.example` to `.env.local` and set the deployed origin:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

It drives the canonical URL, Open Graph and Twitter URLs, `sitemap.xml`, `robots.txt` and the JSON-LD graph. If it is unset the site falls back to `https://$VERCEL_PROJECT_PRODUCTION_URL` (set automatically on Vercel) and then to `http://localhost:3000`, so a build never fails for lack of it.

## Résumé and project images

- **Résumé.** The "Résumé ↓" buttons download `public/ibrahim-tayyab-cv.pdf`. Replace that file to update it; the path is `site.links.resume` in `src/content/site.ts`.
- **Project images.** Each project's thumbnail lives in `public/projects/` and is set with `image: { src: "/projects/iris.jpg", alt: "…" }` on the project in `src/content/projects.ts`. Images are served through `next/image` and cropped to the plate's 4:3 (mobile), 16:9 (tablet) or 16:11 (desktop) frame, so keep the subject centred with some margin. A project without an image shows the design's striped placeholder.

## Project structure

```
src/
  app/            Routes and metadata: layout, page, not-found, sitemap, robots,
                  Open Graph image and icons
  components/
    layout/       Header, mobile menu, skip link, footer
    hero/         Hero band and the "stack, top to bottom" ladder
    work/         Selected work: section, project block, project plate
    trace/        "Under the hood": the interactive request-trace explorer
    practice/     "How I work": the working-practices section
    experience/   Experience timeline and education
    skills/       Skills grouped by purpose
    contact/      Contact section, links and the mailto form
    seo/          JSON-LD component
    ui/           Shared primitives: Container, Section, SectionLabel, buttons, Copy
  content/        All copy and data, typed (see below)
  hooks/          useLayerTrace
  lib/            cn, fonts, site URL, structured data, contact validation
  assets/fonts/   Self-hosted font files and their licences
```

Rules the codebase follows:

- **Content is separate from markup.** Facts and lists (site details, projects, roles, education, skills, the request layers, the working practices) live in typed files under `src/content`; components only render them. Section headings and intro copy stay with their section component.
- **Server components by default.** Only `MobileMenu`, `TraceExplorer` and `ContactForm` are client components, and the trace explorer receives its intro as server-rendered children.
- **No file over 200 lines** (enforced by ESLint for `src/**/*.{ts,tsx}`); split a component when it grows.

## Editing content

| To change…                                   | Edit                                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| Name, role, email, phone, links, description | `src/content/site.ts`                                   |
| Section anchors, numbers and titles          | `src/content/sections.ts`                               |
| Projects                                     | `src/content/projects.ts`                               |
| The eight request layers                     | `src/content/layers.ts`                                 |
| The "How I work" points                      | `src/content/practices.ts`                              |
| Roles and education                          | `src/content/experience.ts`, `src/content/education.ts` |
| Skills and "currently exploring"             | `src/content/skills.ts`                                 |
| Hero stack ladder                            | `src/content/stack.ts`                                  |
| Colours, type sizes, radii, shadows          | `@theme` in `src/app/globals.css`                       |

The design words some copy differently on phones and desktops. Those fields are typed as `ResponsiveText` (`string` or `{ compact, full }`) and rendered with `<Copy>`, which shows `compact` below the `lg` breakpoint and `full` from it.

Sections are numbered 01–06 in page order; change `number` in `sections.ts` to renumber.

## Responsive behaviour

The layout is mobile-first with one structural breakpoint, `lg` (1024px), where the design's desktop layout takes over. Below it the mobile design is used at any width, with a few tablet refinements from `sm` (640px): buttons size to their label, project plates use a 16:9 frame, and body copy is capped to a readable line length. Bands stay full-bleed while content is centred in a container that grows to the design's 1280px frame, so large screens keep the design's proportions.

Checked for horizontal overflow at 320px, 375px, 1024px, 1280px and 2560px. The sections that came with the design handoff were matched to it at 390px and 1280px, apart from typographic apostrophes (the two design files disagree on straight versus curly quotes; the site uses curly throughout). Added since the handoff, and so not in the design: the "How I work" section, the request-trace list aligned to the heading and the detail card, and the header tagline, which shows from 1280px up so the five nav links fit on one line.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), labelled sections and one `h1`; a skip link is the first tab stop.
- Visible keyboard focus everywhere (sand ring on dark bands, gold-deep on light).
- The mobile menu is a native modal `<dialog>`: focus is trapped and restored, Escape closes it, and page scroll is locked while it is open.
- The trace explorer is built from real buttons with `aria-current="step"`, announces its state through a polite status region (on start and when a layer settles, not on every step), and can be interrupted by picking any layer.
- The contact form has explicit labels, `required`, per-field error text linked with `aria-describedby`, `aria-invalid`, and moves focus to the first invalid field on submit.
- Every palette pair used for text meets WCAG AA contrast (lowest is 4.56:1). Hover-only effects are gated to devices that hover and respect `prefers-reduced-motion`.
- axe-core reports no violations on the desktop and mobile layouts.

## SEO and performance

- Metadata API: title template, description, canonical, Open Graph and Twitter cards, and a generated 1200×630 social image built from the site content.
- `sitemap.xml`, `robots.txt`, and a schema.org JSON-LD graph (`WebSite`, `ProfilePage`, `Person`) generated from the same content the page renders. Email and phone are left out of the structured data on purpose.
- Statically prerendered; fonts are self-hosted, preloaded and use a size-adjusted fallback, so text does not shift when they load. Images go through `next/image`.
- Security headers are set in `next.config.ts`.

## Contact form

There is no backend. A valid form opens the visitor's mail app with the message pre-filled (`mailto:`), and every value is percent-encoded so nothing typed into the form can inject headers. The form is part of the desktop layout only, as designed; on smaller screens the email address and profile links are used.

## Deploying

The site is fully static, so any Next.js host works. On Vercel, import the repository; the framework and build settings are detected automatically. `NEXT_PUBLIC_SITE_URL` is optional at first, because the site falls back to the project's production URL. Set it to your own domain once you add a custom one, then redeploy.
