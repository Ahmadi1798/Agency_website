# AI Agent Onboarding Guide

This guide helps you set up your **local VS Code AI coding agent** (GitHub Copilot, Cursor, Continue, etc.) to understand the project and safely implement planned phases.

---

## 1. Inspect the Current Project Structure

Before writing any prompt, give the agent a clear map of what already exists.

### Run these commands in the terminal

```bash
# See all source files (excludes node_modules / dist)
find src -type f | sort

# See the component tree
ls src/Components/
ls src/Pages/

# Check existing scripts
cat package.json | grep '"scripts"' -A 10

# Lint to confirm there are no pre-existing issues
npm run lint
```

### Files to open and read first

| File | Why |
|---|---|
| `src/App.jsx` | All routes and page wrappers |
| `src/context/ThemeContext.jsx` | Dark/light mode logic |
| `src/Components/Navbar.jsx` | Global navigation |
| `src/Components/Footer.jsx` | Global footer |
| `utils/Links.jsx` | Shared navigation links |
| `docs/roadmap.md` | Three-phase plan |

**Tip:** Open the repo root in VS Code, then open the **Explorer** panel to browse the full tree visually before giving the agent any instruction.

---

## 2. Define Milestones and Acceptance Criteria

Break each phase from the roadmap into small, verifiable milestones. Each milestone should answer:

- **What file(s) will change?**
- **What can I see in the browser when it's done?**
- **What does passing lint/test look like?**

### Example — Phase 1 milestone breakdown

| # | Milestone | Files affected | Acceptance |
|---|---|---|---|
| 1.1 | Add design tokens to Tailwind config | `tailwind.config.js` (or `src/index.css`) | `npm run dev` shows correct brand colors |
| 1.2 | Create `Button` UI component | `src/components/ui/Button.jsx` | Button renders in Storybook or inline test page |
| 1.3 | Create `Card` UI component | `src/components/ui/Card.jsx` | Card renders correctly with dark mode |
| 1.4 | Refactor `HeroSection` to use new components | `src/Components/Home/HeroSection.jsx` | Page looks the same or better; lint passes |
| 1.5 | Refactor `Navbar` to use `Button` | `src/Components/Navbar.jsx` | Nav works on mobile and desktop |

Keep each milestone to **one pull request or one agent session**. This makes review and rollback easy.

---

## 3. Create Implementation Prompts for the Local Agent

A good agent prompt has four parts:

1. **Context** — what the project is and where you are in it.
2. **Task** — exactly what to create or change.
3. **Constraints** — what NOT to touch / break.
4. **Verification** — what done looks like.

### Template

```
Context:
This is a React + Vite + Tailwind CSS agency website at [repo root].
The project uses React Router for routing and Framer Motion for animations.
Current phase: Phase 1 — Modern Redesign System.

Task:
Create a reusable `Button` component at `src/components/ui/Button.jsx`.
- Accept props: `variant` ("primary" | "secondary" | "ghost"), `size` ("sm" | "md" | "lg"), `children`, `onClick`, `className`, `disabled`.
- Use Tailwind classes for styling.
- Export as default.

Constraints:
- Do NOT modify any existing file.
- Do NOT install any new package.
- Keep the component under 60 lines.

Verification:
- `npm run lint` passes with no new errors.
- I can import and render `<Button variant="primary">Click me</Button>` in `src/App.jsx` temporarily to confirm it works.
```

See [`docs/implementation-prompts.md`](implementation-prompts.md) for ready-to-copy prompts for each phase.

---

## 4. Ask the Agent for Small, Reviewable Changes

### Golden rules

1. **One component or one file per prompt.** Never ask the agent to refactor the whole project at once.
2. **Name the file path explicitly.** "Create `src/components/ui/Card.jsx`" is better than "create a card component somewhere."
3. **Show the interface first, implementation second.** Ask the agent to define the props and export first, then fill in the implementation.
4. **Forbid touching unrelated files.** Add a `Constraints` block to every prompt.
5. **Iterate over three small changes rather than one large one.** Easier to review and revert.

### Prompt size guide

| Change size | Lines of code | Approach |
|---|---|---|
| Tiny | < 30 | Single prompt, single file |
| Small | 30–100 | Single prompt, up to 3 files |
| Medium | 100–300 | Split into 2–3 prompts |
| Large | > 300 | Break into a milestone sequence |

---

## 5. Validate Each Change

Run all four checks after every agent-generated change before committing.

### Step 1 — Dev server visual check

```bash
npm run dev
# Open http://localhost:5173 and visually confirm the page looks correct.
# Check both light mode and dark mode.
# Resize the window to test mobile responsiveness.
```

### Step 2 — Lint

```bash
npm run lint
# Must exit with no errors. Warnings are acceptable but review them.
```

### Step 3 — Type check (if TypeScript is added in a later phase)

```bash
npm run typecheck
# Must exit with no errors.
```

### Step 4 — Production build check

```bash
npm run build
# Must complete without errors. Open dist/ to confirm output files exist.
```

### Step 5 — Manual QA checklist

- [ ] Changed page/component renders without blank screen or console errors.
- [ ] Dark mode still works (click theme toggle).
- [ ] Mobile layout still works (DevTools → device toolbar).
- [ ] Navigation links still work (click all nav items).
- [ ] No new console warnings or errors in browser DevTools.

---

## Quick-Reference: VS Code Workflow

1. Open the project folder: `code /path/to/Agency_website`
2. Open the integrated terminal (`` Ctrl+` ``).
3. Run `npm run dev` to start the dev server.
4. Open the agent chat panel (Copilot: `Ctrl+Shift+I`, Cursor: `Ctrl+L`).
5. Paste your prompt from [`docs/implementation-prompts.md`](implementation-prompts.md).
6. Review the agent's diff carefully before accepting.
7. Run the validation steps above.
8. Commit: `git add -p && git commit -m "feat: add Button component"`.

---

## Related Documents

| Document | Purpose |
|---|---|
| [`docs/roadmap.md`](roadmap.md) | Full three-phase implementation plan |
| [`docs/implementation-prompts.md`](implementation-prompts.md) | Copy-paste prompt templates per phase |
| [`docs/local-setup.md`](local-setup.md) | Local dev environment setup |
| [`CONTRIBUTING.md`](../CONTRIBUTING.md) | Branch strategy, commit conventions |
