# Contributing to KarFamSoft Agency Website

Thank you for contributing! This guide explains how to work on this project
locally, keep the codebase clean, and open pull requests that are easy to review.

---

## Table of Contents

1. [Recommended Workflow](#recommended-workflow)
2. [Branch Strategy](#branch-strategy)
3. [Commit Conventions](#commit-conventions)
4. [Local Development](#local-development)
5. [Testing Checklist Before Push](#testing-checklist-before-push)
6. [Pull Request Checklist](#pull-request-checklist)

---

## Recommended Workflow

1. **Clone the repo and install dependencies** – see [docs/local-setup.md](docs/local-setup.md).
2. **Create a feature branch** from `main` (see [Branch Strategy](#branch-strategy)).
3. **Develop locally in VS Code** using the dev server (`npm run dev`).
4. **Commit often** with descriptive messages (see [Commit Conventions](#commit-conventions)).
5. **Run the pre-push checklist** before opening a PR.
6. **Open a PR** against `main` and fill in the PR template.

> **Tip:** Keep each PR focused on one feature or fix. Smaller PRs are reviewed faster.

---

## Branch Strategy

| Branch prefix | Purpose | Example |
|---|---|---|
| `main` | Stable, production-ready code | – |
| `feature/` | New features or planned phases | `feature/design-system` |
| `feature/customization-engine` | Phase 2 customization work | – |
| `feature/admin-panel` | Phase 3 admin/editor panel | – |
| `fix/` | Bug fixes | `fix/navbar-mobile-menu` |
| `chore/` | Tooling, dependencies, docs | `chore/update-tailwind` |

**Rules:**
- Never commit directly to `main`.
- Always branch off the latest `main`: `git checkout -b feature/my-feature main`.
- Delete your branch after the PR is merged.

---

## Commit Conventions

Follow the [Conventional Commits](https://www.conventionalcommits.org/) style:

```
<type>(<scope>): <short description>

[optional body]
```

### Common types

| Type | When to use |
|---|---|
| `feat` | A new feature or visible change |
| `fix` | A bug fix |
| `chore` | Tooling, config, or dependency updates |
| `docs` | Documentation only |
| `style` | Formatting, whitespace (no logic change) |
| `refactor` | Code restructure without behavior change |
| `test` | Adding or updating tests |

### Examples

```
feat(hero): add animated headline with Framer Motion
fix(navbar): correct mobile menu z-index overflow
docs: add local setup guide
chore(deps): upgrade Tailwind to v4.1.3
```

---

## Local Development

See **[docs/local-setup.md](docs/local-setup.md)** for full instructions.

Quick reference:

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Lint the codebase
npm run lint

# Production build
npm run build

# Start production build locally
npm run start
```

---

## Testing Checklist Before Push

Before pushing your branch, verify the following manually:

- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` completes without errors
- [ ] All existing pages render correctly in the browser (`npm run dev`)
- [ ] Mobile layout is not broken (use browser DevTools responsive mode)
- [ ] Dark mode still works correctly
- [ ] No console errors or warnings in the browser
- [ ] Any new component you added is used/imported correctly
- [ ] Images are optimized (prefer WebP, avoid large raw files)

---

## Pull Request Checklist

When opening a PR, confirm the following:

- [ ] The branch is up-to-date with `main` (`git pull origin main`)
- [ ] PR title follows commit conventions (`feat:`, `fix:`, `docs:`, etc.)
- [ ] PR description explains **what** changed and **why**
- [ ] Screenshots or a short screen recording are attached for UI changes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] No unrelated files are included in the diff
- [ ] The PR is linked to the relevant issue (if applicable)

---

For questions or guidance on the phased roadmap, see [docs/roadmap.md](docs/roadmap.md).
