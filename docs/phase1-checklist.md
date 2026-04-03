# Phase 1 Checklist

Use this checklist after **each prompt** in
[phase1-first-5-prompts.md](phase1-first-5-prompts.md).
Tick every item before moving to the next prompt.

> Copy this checklist into your PR description when opening a Phase 1 pull
> request.

---

## After Prompt 1 — Repo Analysis & Plan

- [ ] Agent produced a list of current files/folders in `src/`.
- [ ] Agent listed every file it plans to touch (with reasons).
- [ ] Agent provided a numbered task list covering tokens → components →
      Hero migration → QA.
- [ ] No code was written yet.
- [ ] You reviewed the plan and agree with it (or asked for adjustments).

---

## After Prompt 2 — Design Tokens

- [ ] `tailwind.config.js` has a `theme.extend` block with custom colors,
      fonts, radii, and shadows.
- [ ] `src/styles/tokens.css` exists (or was confirmed not needed).
- [ ] `npm run dev` starts without errors.
- [ ] `npm run build` completes without errors.
- [ ] No existing component files were modified.
- [ ] New token names appear in Tailwind IntelliSense (hover over a class in
      VS Code to verify).

---

## After Prompt 3 — Base UI Components

- [ ] `src/components/ui/Button.jsx` exists and accepts `variant`, `size`,
      `disabled`, `onClick`, `children`, `className` props.
- [ ] `src/components/ui/Card.jsx` exists and accepts `children`, `className`,
      `padding`, `shadow` props.
- [ ] `src/components/ui/SectionContainer.jsx` exists and accepts `children`,
      `className`, `id`, `as` props.
- [ ] `src/components/ui/index.js` re-exports all three components.
- [ ] All three components use only Tailwind classes (no inline styles).
- [ ] `npm run dev` starts without errors.
- [ ] `npm run build` completes without errors.
- [ ] No existing page is broken (check Home, Portfolio, Blog, Contact).

---

## After Prompt 4 — Hero Migration

- [ ] Hero component file was updated.
- [ ] Hero wraps its content in `<SectionContainer>`.
- [ ] Hero uses `<Button>` for CTA buttons.
- [ ] Hero uses design token class names (e.g. `text-primary`) where possible.
- [ ] All existing text content and images are unchanged.
- [ ] Framer Motion animations still work.
- [ ] Hero looks correct in **light mode**.
- [ ] Hero looks correct in **dark mode** (toggle the theme and verify).
- [ ] No console errors in the browser.
- [ ] `npm run build` completes without errors.
- [ ] No other section was accidentally changed (check Services, Portfolio,
      Footer).

---

## After Prompt 5 — QA / Refactor Pass

- [ ] No unused imports remain in Phase 1 files.
- [ ] No hardcoded hex/rgb colors remain in Phase 1 files (use tokens).
- [ ] All lists with `.map()` have a `key` prop.
- [ ] Buttons and interactive elements have accessible labels.
- [ ] Agent provided a written summary of changes.
- [ ] `npm run dev` — zero console errors on all pages.
- [ ] `npm run build` — clean build, zero warnings about Phase 1 files.
- [ ] All pages load correctly: Home, Portfolio, Blog, Contact.
- [ ] Committed to `feature/design-system` branch with a descriptive message.

---

## Phase 1 PR Checklist (before merging to `main`)

- [ ] Branch is `feature/design-system`.
- [ ] All five per-prompt checklists above are ticked.
- [ ] `npm run build` passes on the PR branch.
- [ ] Vercel preview deployment is green (no build errors).
- [ ] At least one manual visual review of the Home page on mobile width
      (≤ 375 px) and desktop (≥ 1280 px).
- [ ] No changes to Phase 2 or Phase 3 files (DB schema, API routes, admin
      panel) are included in this PR.
- [ ] PR description references this checklist.

---

## Helpful commands

```bash
# Start dev server
npm run dev

# Production build check
npm run build

# Preview the production build locally
# Start production build locally
npm run start

# Lint (if configured)
npm run lint
```

---

See [roadmap.md](roadmap.md) for the full three-phase plan and
[local-setup.md](local-setup.md) for environment setup.
