# Implementation Prompt Templates

Copy and paste these prompts directly into your local AI coding agent (GitHub Copilot Chat, Cursor, Continue, etc.).

Each prompt follows the same structure:
- **Context** — project stack and current phase
- **Task** — what to build
- **Constraints** — what not to touch
- **Verification** — what done looks like

Replace `[PLACEHOLDER]` values with your actual content where indicated.

---

## Phase 1 — Modern Redesign System

### 1.1 Add Design Tokens

```
Context:
I am working on a React + Vite + Tailwind CSS v4 agency website.
File: src/index.css (already exists — this is where Tailwind is imported with @import "tailwindcss").

Task:
Add CSS custom properties (design tokens) for the project's design system directly
inside src/index.css, in a :root block. Include:
- Brand colors: --color-primary (blue), --color-primary-dark, --color-accent (orange/amber),
  --color-neutral-50 through --color-neutral-900
- Typography: --font-sans ("Inter", sans-serif), --font-heading ("Poppins", sans-serif)
- Spacing scale: --spacing-section (80px), --spacing-block (40px)
- Border radius: --radius-sm (4px), --radius-md (8px), --radius-lg (16px), --radius-full (9999px)
- Box shadow: --shadow-card, --shadow-modal

Constraints:
- Only edit src/index.css.
- Do not change any existing CSS rules.
- Add the :root block after the existing @import statement.
- Do not install any new package.

Verification:
- npm run lint passes.
- npm run dev starts without errors.
- Open http://localhost:5173, open DevTools → Elements → inspect <html> element → confirm the CSS custom properties appear in the :root block in the Styles panel.
- I can reference var(--color-primary) in a component and it resolves.
```

---

### 1.2 Create the `Button` UI Component

```
Context:
React + Vite + Tailwind CSS v4 agency website.
Design tokens are defined as CSS custom properties in src/index.css.

Task:
Create a new file: src/components/ui/Button.jsx
(Note: create the src/components/ui/ directory if it does not exist.)

The Button component should:
- Accept props: variant ("primary" | "secondary" | "ghost"), size ("sm" | "md" | "lg"),
  children, onClick, className, disabled, type ("button" | "submit" | "reset").
- Apply Tailwind classes for each variant and size combination.
- Forward the disabled prop to the native <button> element.
- Export as default.

Constraints:
- Only create src/components/ui/Button.jsx (new file only).
- Do not modify any existing file.
- Do not install any new package.
- Keep the file under 70 lines.

Verification:
- npm run lint passes.
- I can import it in App.jsx with: import Button from './components/ui/Button'
  and render <Button variant="primary">Test</Button> without errors.
```

---

### 1.3 Create the `Card` UI Component

```
Context:
React + Vite + Tailwind CSS v4 agency website.
Button component exists at src/components/ui/Button.jsx.

Task:
Create a new file: src/components/ui/Card.jsx

The Card component should:
- Accept props: children, className, variant ("default" | "elevated" | "outlined").
- Use Tailwind classes for background, border, shadow, and border-radius.
- Work correctly in both light and dark mode (use Tailwind dark: prefix classes).
- Export as default.

Constraints:
- Only create src/components/ui/Card.jsx (new file only).
- Do not modify any existing file.
- Keep the file under 50 lines.

Verification:
- npm run lint passes.
- Renders without error in a quick import test.
- Looks correct in dark mode (toggle ThemeContext).
```

---

### 1.4 Create the `SectionContainer` Layout Component

```
Context:
React + Vite + Tailwind CSS v4 agency website.

Task:
Create a new file: src/components/ui/SectionContainer.jsx

The SectionContainer component should:
- Accept props: children, className, id, as (HTML element tag, default "section").
- Apply consistent horizontal padding and max-width centering (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8).
- Accept an optional background prop ("white" | "gray" | "dark" | "transparent").
- Export as default.

Constraints:
- Only create src/components/ui/SectionContainer.jsx (new file only).
- Do not modify any existing file.
- Keep the file under 50 lines.

Verification:
- npm run lint passes.
- Can be used to wrap any existing section content.
```

---

### 1.5 Refactor `HeroSection` to Use New Components

```
Context:
React + Vite + Tailwind CSS v4 agency website.
New UI components exist:
- src/components/ui/Button.jsx
- src/components/ui/SectionContainer.jsx

Existing hero: src/Components/Home/HeroSection.jsx

Task:
Refactor src/Components/Home/HeroSection.jsx to:
- Replace any raw <button> or <a> styled as button with <Button> from src/components/ui/Button.jsx.
- Wrap the section content in <SectionContainer>.
- Keep all existing text, animations (Framer Motion), and logic unchanged.

Constraints:
- Only edit src/Components/Home/HeroSection.jsx.
- Do not change the visual output — the section must look the same or better.
- Do not remove any Framer Motion animations.
- Do not install any new package.

Verification:
- npm run lint passes.
- npm run dev — http://localhost:5173 hero section looks identical to before.
- Dark mode toggle still works correctly on the hero.
```

---

### 1.6 Create an `index.js` Barrel Export for UI Components

```
Context:
React + Vite + Tailwind CSS v4 agency website.
UI components exist in src/components/ui/:
- Button.jsx, Card.jsx, SectionContainer.jsx

Task:
Create src/components/ui/index.js that re-exports all UI components:
  export { default as Button } from './Button';
  export { default as Card } from './Card';
  export { default as SectionContainer } from './SectionContainer';

Constraints:
- Only create src/components/ui/index.js (new file only).
- Keep it to named re-exports only, no logic.

Verification:
- npm run lint passes.
- I can import with: import { Button, Card } from './components/ui'
```

---

## Phase 2 — Customization Engine

> **Pre-requisite:** Complete Phase 1 before starting Phase 2.
> Phase 2 introduces a database. Do all Phase 2 work on the `feature/customization-engine` branch.

### 2.1 Define the Prisma Schema

```
Context:
This project is being migrated to Next.js for Phase 2.
We use PostgreSQL (hosted on Neon or Railway) and Prisma ORM.

Task:
Create prisma/schema.prisma with the following models:
- Tenant { id, slug, name, createdAt }
- SiteSettings { id, tenantId, logoUrl, primaryColor, accentColor, fontHeading, fontBody, contactEmail, contactPhone, address, updatedAt }
- Page { id, tenantId, slug, title, metaTitle, metaDescription, isPublished, createdAt }
- PageSection { id, pageId, sectionType, orderIndex, isVisible, contentJson (Json) }
- MediaAsset { id, tenantId, url, altText, fileType, createdAt }
- NavigationItem { id, tenantId, label, href, orderIndex, isExternal }
- FooterItem { id, tenantId, columnLabel, label, href, orderIndex }

All models should have appropriate relations. Use DATABASE_URL from environment.

Constraints:
- Only create prisma/schema.prisma (new file only).
- Do not run any migration commands — I will run `npx prisma migrate dev` manually.
- Do not modify any existing file.

Verification:
- npx prisma validate passes without errors.
```

---

### 2.2 Create Site Settings API Route

```
Context:
Next.js app with Prisma ORM. Schema is defined in prisma/schema.prisma.
We are building API routes in app/api/.

Task:
Create app/api/settings/route.js with:
- GET handler: fetch SiteSettings for tenantId from query params, return JSON.
- PATCH handler: update SiteSettings fields for the given tenantId, return updated record.
- Use Prisma client (import from @/lib/prisma).
- Return appropriate HTTP status codes (200, 400, 404, 500).
- Add basic validation: tenantId must be present.

Constraints:
- Only create app/api/settings/route.js (new file only).
- Also create lib/prisma.js if it does not exist (singleton Prisma client).
- Do not modify any other file.

Verification:
- npm run lint passes.
- curl http://localhost:3000/api/settings?tenantId=1 returns a valid JSON response.
```

---

### 2.3 Create the Content Renderer Hook

```
Context:
Next.js + React + Tailwind CSS. Phase 2 customization engine.
API route /api/settings returns site settings JSON.

Task:
Create src/hooks/useSiteSettings.js:
- Fetch /api/settings?tenantId=[TENANT_ID] on mount.
- Return { settings, loading, error }.
- Use React's built-in useState and useEffect (no extra libraries).

Also create src/hooks/usePageSections.js:
- Accept pageSlug as argument.
- Fetch /api/pages/[pageSlug]/sections on mount.
- Return { sections, loading, error }.

Constraints:
- Only create the two new hook files.
- Do not modify any existing component or page.
- Do not install any new package.

Verification:
- npm run lint passes.
- I can import and call useSiteSettings() in any component without errors.
```

---

### 2.4 Create a Section Content Seed Script

```
Context:
Next.js + Prisma. The database schema is set up with PageSection model.
Current content is hardcoded in React components.

Task:
Create scripts/seed.js that:
- Connects to the database via Prisma.
- Creates one Tenant (id: 1, slug: "default", name: "KarFamSoft Agency").
- Creates default SiteSettings for tenant 1 with placeholder colors and fonts.
- Creates pages: home, about, services, portfolio, blog, contact.
- For the home page, creates PageSection records for: hero, services-preview,
  projects-teaser, blog-teaser, why-choose-us, our-process, home-cta.
- Each section has a contentJson field with the current hardcoded text.

Constraints:
- Only create scripts/seed.js (new file only).
- Do not modify any existing file.
- Use async/await and handle errors with try/catch.
- Log each created record to the console.

Verification:
- node scripts/seed.js runs without errors.
- npx prisma studio shows the seeded records.
```

---

## Phase 3 — Admin / Editor Panel

> **Pre-requisite:** Complete Phase 2 before starting Phase 3.
> Do all Phase 3 work on the `feature/admin-panel` branch.

### 3.1 Create the Admin Layout

```
Context:
Next.js App Router. Phase 3 admin panel.
Admin routes will live under app/admin/.

Task:
Create app/admin/layout.jsx:
- Renders a sidebar with navigation links: Dashboard, Pages, Theme, Media, Settings.
- Sidebar uses Tailwind CSS for styling (dark sidebar, white text).
- Uses Next.js <Link> for navigation.
- Wraps children in a main content area with padding.
- Does NOT implement auth yet (that is a separate task).

Constraints:
- Only create app/admin/layout.jsx (new file only).
- Do not modify any other file.
- Do not install any new package.

Verification:
- npm run lint passes.
- Visiting /admin in the browser shows the sidebar layout.
```

---

### 3.2 Create the Admin Dashboard Page

```
Context:
Next.js App Router. Admin layout exists at app/admin/layout.jsx.

Task:
Create app/admin/page.jsx (the /admin dashboard):
- Show a heading "Dashboard".
- Show three stat cards: Total Pages, Published Sections, Media Assets.
- Stat cards use placeholder numbers (hardcoded for now).
- Use the Card component from src/components/ui/Card.jsx if available.

Constraints:
- Only create app/admin/page.jsx (new file only).
- Do not modify any existing file.

Verification:
- npm run lint passes.
- /admin renders the dashboard with three stat cards.
```

---

### 3.3 Create the Theme Editor Page

```
Context:
Next.js App Router + Prisma. Admin panel is set up.
API route PATCH /api/settings updates SiteSettings in the database.

Task:
Create app/admin/theme/page.jsx:
- Show a form with color pickers for primaryColor and accentColor.
- Show font family text inputs for fontHeading and fontBody.
- On submit, call PATCH /api/settings with the updated values.
- Show a success or error toast/message after saving.
- Fetch current settings on mount with GET /api/settings?tenantId=1.

Constraints:
- Only create app/admin/theme/page.jsx (new file only).
- Use native HTML <input type="color"> and <input type="text">.
- Do not install any form library.
- Do not modify any existing file.

Verification:
- npm run lint passes.
- /admin/theme renders the form with fields pre-populated from the API.
- Saving updates the database (verify in npx prisma studio).
```

---

### 3.4 Add Authentication Middleware

```
Context:
Next.js App Router. Admin panel exists at app/admin/.
We want to protect all /admin routes.

Task:
Create middleware.js at the project root:
- Protect all routes matching /admin/*.
- Check for a session cookie named "admin_session".
- If cookie is missing or invalid, redirect to /admin/login.
- If cookie is valid, allow the request.

Also create app/admin/login/page.jsx:
- Simple login form with email and password fields.
- On submit, POST to /api/auth/login.
- On success, redirect to /admin.

Also create app/api/auth/login/route.js:
- Accept POST with { email, password }.
- Check against environment variables ADMIN_EMAIL and ADMIN_PASSWORD.
- On match, set a signed session cookie and return 200.
- On mismatch, return 401.

Constraints:
- Do not install any auth library yet (NextAuth comes in a later iteration).
- Keep the cookie check simple (compare a known env var ADMIN_SESSION_SECRET).
- Do not modify any existing page or component.

Verification:
- npm run lint passes.
- Visiting /admin without a cookie redirects to /admin/login.
- Logging in with correct credentials redirects to /admin.
```

---

## General Utility Prompts

### Add a New Page Route

```
Context:
React + Vite + React Router agency website.
Routes are defined in src/App.jsx.
Pages live in src/Pages/.

Task:
Add a new page route for "[PAGE_NAME]":
1. Create src/Pages/[PAGE_NAME]Page.jsx with a placeholder heading.
2. Add the route in src/App.jsx: <Route path="/[page-slug]" element={<[PAGE_NAME]Page />} />
3. Add a nav link in utils/Links.jsx.

Constraints:
- Only edit src/App.jsx and utils/Links.jsx, and create the new page file.
- Keep the placeholder page minimal (heading + paragraph).
- Do not break existing routes.

Verification:
- npm run lint passes.
- Navigating to /[page-slug] renders the new page.
- All existing nav links still work.
```

---

### Fix a Lint Error

```
Context:
React + Vite + ESLint agency website.
Running npm run lint shows this error: [PASTE ERROR HERE]

Task:
Fix the lint error in [FILE PATH] without changing any other behavior.
Explain what the error means and why your fix resolves it.

Constraints:
- Only edit the file containing the error.
- Do not disable the lint rule with eslint-disable comments.
- Do not change the component's visual output.

Verification:
- npm run lint passes with 0 errors.
```

---

### Write a Component Test

```
Context:
React + Vite agency website.
No test framework is installed yet. We are adding Vitest + React Testing Library.

Task:
1. Install vitest and @testing-library/react and @testing-library/jest-dom as dev dependencies.
2. Replace the existing placeholder "test" script in package.json with: "vitest run".
3. Create src/components/ui/Button.test.jsx that:
   - Renders Button and checks it is visible in the DOM.
   - Checks that onClick fires when clicked.
   - Checks that the disabled prop prevents click.

Constraints:
- Only add new files and edit package.json scripts and vite.config.js for the test environment.
- Do not change any existing component.

Verification:
- npm run test passes with all tests green.
```
