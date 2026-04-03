# Project Roadmap

This document describes the three planned implementation phases for the
KarFamSoft Agency Website — from a modern redesign to a fully customizable,
self-hosted white-label platform.

Each phase builds on the previous one. Existing site behavior is preserved
throughout. No breaking changes are introduced until a phase is fully complete
and tested.

---

## Phase 1 — Modern Redesign System

**Goal:** Establish a professional, reusable design foundation before adding
any customization logic.

**Timeline estimate:** 2–3 weeks

### Deliverables

- **Design tokens** (colors, typography, spacing, border-radius, shadows)
  defined in `tailwind.config.js` or `src/styles/tokens.css`.
- **Atomic UI components** in `src/components/ui/`:
  - `Button`, `Input`, `Textarea`, `Select`
  - `Card`, `Badge`, `Tag`
  - `SectionContainer`, `Heading`, `Paragraph`
- **Section components** in `src/components/sections/`:
  - `Hero`, `Services`, `Portfolio`, `Testimonials`, `CTA`, `Contact`, `Footer`
- Consistent responsive layout (mobile-first).
- Accessibility baseline (semantic HTML, ARIA labels, keyboard navigation).
- Dark mode polish using existing `ThemeContext`.

### Suggested folder structure additions

```
src/
  components/
    ui/           ← atomic, reusable primitives
    sections/     ← full page sections/blocks
  styles/
    tokens.css    ← design token overrides (if not in tailwind config)
  lib/
    design-system/ ← constants, helpers
```

### Branch

`feature/design-system`

---

## Phase 2 — Full Customization Engine

**Goal:** Make every page and section data-driven so content can be changed
without touching code. This is the foundation for selling the site to multiple
clients.

**Timeline estimate:** 2–4 weeks

### Deliverables

- **PostgreSQL database** (hosted on Neon, Supabase self-managed, or Railway).
- **Prisma ORM** schema with the following models:
  - `Tenant` — one row per client/installation.
  - `SiteSettings` — brand colors, logo, typography, contact info.
  - `Page` — list of all site pages (home, about, services, …).
  - `PageSection` — ordered list of sections on each page.
  - `SectionContent` — JSON config blob per section (text, images, links).
  - `MediaAsset` — uploaded images/videos.
  - `NavigationItem` — header nav links.
  - `FooterItem` — footer links and columns.
- **API routes** (Next.js API or a simple Express layer) to read/write content.
- **Content renderer** — sections read their props from the DB instead of
  hardcoded values.
- Seed script to migrate current hardcoded content into the database.

### What becomes customizable

- Page text and images
- Theme colors and fonts
- Section order (drag/reorder)
- Show/hide individual sections
- CTA button labels and URLs
- SEO title/description per page
- Navigation and footer links

### Branch

`feature/customization-engine`

---

## Phase 3 — Admin / Editor Panel

**Goal:** Allow non-technical clients to edit content and appearance through a
visual dashboard — no code required.

**Timeline estimate:** 3–5 weeks

### Deliverables

- **Authentication** — admin login (NextAuth.js or JWT session).
- **Admin dashboard routes:**

  | Route | Purpose |
  |---|---|
  | `/admin` | Dashboard overview |
  | `/admin/pages` | List and manage pages |
  | `/admin/pages/[id]/edit` | Section editor for a page |
  | `/admin/theme` | Colors, fonts, and logo editor |
  | `/admin/media` | Media library / uploader |
  | `/admin/settings` | Site-wide settings (contact info, SEO, …) |

- **Block editor** — dynamic form fields per section type.
- **Theme editor** — live color/font preview.
- **Media uploader** — upload to S3-compatible storage
  (Cloudflare R2 / AWS S3 / Supabase Storage).
- **Draft / Publish toggle** — save without going live immediately.
- **Live preview** — see changes before publishing.

### Branch

`feature/admin-panel`

---

## Migration & Safety Strategy

To avoid breaking the live site at any stage:

1. Build new features behind feature flags or on separate branches.
2. Keep existing hardcoded pages working until the DB-driven renderer is
   fully tested.
3. Use a staging Vercel deployment for each feature branch (Vercel creates
   preview URLs automatically on every push).
4. Migrate content section-by-section using the seed script.
5. Run `npm run build` and verify the production bundle before merging.

---

## Tech Stack Summary

| Layer | Technology |
|---|---|
| Frontend | React + Next.js (App Router) |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL (self-managed, no subscription) |
| ORM | Prisma |
| Auth | NextAuth.js or custom JWT |
| Storage | Cloudflare R2 / AWS S3 / Supabase Storage |
| Deployment | Vercel (frontend + API) + managed DB host |

> The current codebase uses **React + Next.js (App Router)**.

---

For local development setup, see [local-setup.md](local-setup.md).  
For contribution guidelines, see [../CONTRIBUTING.md](../CONTRIBUTING.md).
