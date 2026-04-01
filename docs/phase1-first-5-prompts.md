# Phase 1 — First 5 Prompts (Copy-Paste)

Use these prompts one at a time in your **VS Code Copilot Chat** (or any local
AI agent). Complete each prompt, verify the result, commit, then move on.

> **Rule:** Never run the next prompt until the current one passes the
> [Phase 1 Checklist](phase1-checklist.md).

---

## Prompt 1 — Repo Analysis & Implementation Plan (no code)

```
Analyze this repository carefully and produce a detailed, step-by-step
implementation plan for Phase 1 only (Modern Redesign System).

Repository context:
- Stack: React + Vite + Tailwind CSS
- Goal: Create a professional, reusable design foundation
- Constraints:
  * Do NOT write any code yet
  * Do NOT change any existing files
  * Do NOT start Phase 2 or Phase 3

Deliver:
1. A summary of the current project structure (src/, components, pages, styles).
2. A list of every file you will touch in Phase 1, with a one-line reason for each.
3. An ordered task list (numbered steps) to:
   a. Add design tokens
   b. Create base UI components (Button, Card, SectionContainer)
   c. Migrate the Hero section to the new components
   d. Run a final QA/refactor pass
4. Any risks or blockers you foresee (e.g. duplicate component names,
   missing Tailwind config, existing style conflicts).

Output format: plain markdown, no code blocks yet.
```

---

## Prompt 2 — Design Tokens Setup

```
Task:
Add design tokens to this React + Vite + Tailwind CSS project.

What to do:
1. Extend `tailwind.config.js` with a `theme.extend` block that defines:
   - Colors: primary (brand blue/violet), secondary, accent, neutral (grays),
     surface (card backgrounds), and semantic colors (success, warning, error).
   - Typography: `fontFamily` with a sans-serif stack (Inter or system-ui),
     and a display font for headings.
   - Spacing: no changes needed to defaults unless a custom scale is required.
   - Border radius: sm / md / lg / full values that match a modern card style.
   - Box shadow: soft, md, lg levels for cards and modals.
2. If a `src/styles/tokens.css` file does not exist, create it with CSS custom
   properties matching the Tailwind token names (for any place that needs raw
   CSS variables).
3. Do NOT change any existing component files.
4. Do NOT remove any existing Tailwind classes or configuration.

Constraints:
- Keep existing behavior unchanged.
- Update only `tailwind.config.js` and `src/styles/tokens.css`.
- Provide a summary of every change made.

Definition of done:
- `npm run dev` starts without errors.
- `npm run build` completes without errors.
- New token names are visible in the Tailwind IntelliSense autocomplete.
```

---

## Prompt 3 — Base UI Components (Button, Card, SectionContainer)

```
Task:
Create three foundational, reusable UI components in `src/components/ui/`.

Components to create:
1. `Button.jsx`
   - Props: `variant` (primary | secondary | ghost | danger),
     `size` (sm | md | lg), `disabled`, `onClick`, `children`, `className`.
   - Use design tokens from `tailwind.config.js` for colors.
   - Include hover, focus-visible, and disabled states.
   - Export as default.

2. `Card.jsx`
   - Props: `children`, `className`, `padding` (sm | md | lg), `shadow`.
   - Renders a rounded, elevated container using design token colors.
   - Export as default.

3. `SectionContainer.jsx`
   - Props: `children`, `className`, `id`, `as` (default "section").
   - Centers content, applies max-width and horizontal padding.
   - Used as the layout wrapper for all page sections.
   - Export as default.

Constraints:
- Place files in `src/components/ui/Button.jsx`, `Card.jsx`,
  `SectionContainer.jsx`.
- Create `src/components/ui/index.js` that re-exports all three.
- Do NOT modify any existing component or page files.
- Use only Tailwind CSS classes (no inline styles, no new CSS files).
- Match the code style of the existing components in `src/Components/`.

Definition of done:
- All three files exist and export correctly.
- `npm run dev` starts without errors.
- `npm run build` completes without errors.
- No existing page is broken.
```

---

## Prompt 4 — Migrate Hero Section

```
Task:
Refactor the existing Hero section to use the new design-system components.

Steps:
1. Identify the current Hero component (likely in `src/Components/` or
   `src/Pages/`).
2. Rewrite it to:
   - Wrap its content in `<SectionContainer>` from `src/components/ui/`.
   - Replace any inline button markup with the `<Button>` component
     (variant="primary" for the main CTA, variant="ghost" for secondary).
   - Use design token class names (e.g. `text-primary`, `bg-surface`) instead
     of hardcoded hex values or ad-hoc Tailwind colors where possible.
3. Keep all existing text content, images, and animations exactly as they are.
4. Do NOT refactor any other section (Services, Portfolio, etc.).

Constraints:
- Only change the Hero component file (and any direct style file it imports).
- Do not remove Framer Motion animations.
- Do not change routing or page files.
- Keep dark-mode classes working.

Definition of done:
- Hero renders identically to before in both light and dark mode.
- `npm run dev` shows the page with no console errors.
- `npm run build` succeeds.
- Hero uses `<Button>` and `<SectionContainer>` from `src/components/ui/`.
```

---

## Prompt 5 — QA / Refactor Pass + Summary

```
Task:
Perform a final QA and light refactor pass on the Phase 1 changes, then
provide a written summary.

Steps:
1. Review every file added or changed during Phase 1:
   - `tailwind.config.js`
   - `src/styles/tokens.css`
   - `src/components/ui/Button.jsx`
   - `src/components/ui/Card.jsx`
   - `src/components/ui/SectionContainer.jsx`
   - `src/components/ui/index.js`
   - The migrated Hero component
2. Fix any of the following issues if found:
   - Unused imports or variables
   - Prop types not matching what the component uses
   - Hardcoded colors that should use a design token
   - Missing `key` props in any mapped lists
   - Accessibility issues: missing `aria-*` labels, non-semantic HTML
3. Do NOT refactor files outside Phase 1 scope.
4. After fixes, run a final check:
   - `npm run dev` — no console errors
   - `npm run build` — clean build
   - All existing pages load correctly

Deliverable:
Write a short summary (markdown) that includes:
- List of files changed and what was fixed in each.
- Confirmation that `npm run build` passed.
- Any outstanding issues deferred to Phase 2.
- Recommended git commit message for the Phase 1 branch.

Constraints:
- Do not change any files outside the Phase 1 scope listed above.
- Do not start Phase 2 work.
```

---

## What comes next

Once all five prompts are complete and committed on the `feature/design-system`
branch, open a pull request against `main` and use the
[Phase 1 Checklist](phase1-checklist.md) as your PR review checklist.

See [roadmap.md](roadmap.md) for the full three-phase plan.
