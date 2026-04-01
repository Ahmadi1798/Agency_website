# Local Development Setup

This guide walks you through setting up the Agency Website project on your own
machine so you can develop in **VS Code** and contribute changes via GitHub.

---

## Prerequisites

| Tool | Minimum version | Install link |
|---|---|---|
| Node.js | 18 LTS or later | https://nodejs.org/ |
| npm | 9+ (bundled with Node) | – |
| Git | any recent version | https://git-scm.com/ |
| VS Code | any recent version | https://code.visualstudio.com/ |

> **Phase 2+ only:** PostgreSQL and a Prisma setup are needed when the
> customization engine is added. See [Phase 2 prerequisites](#phase-2-prerequisites-database) below.

---

## Step 1 — Clone the Repository

```bash
git clone https://github.com/Ahmadi1798/Agency_website.git
cd Agency_website
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion, and all other
dependencies listed in `package.json`.

---

## Step 3 — Start the Dev Server

```bash
npm run dev
```

Open your browser at **http://localhost:5173**. The page hot-reloads on every file save.

---

## Step 4 — Useful Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on all source files |

---

## Recommended VS Code Extensions

The repo already includes an `.vscode/extensions.json` file. VS Code will
prompt you to install the recommended extensions when you open the project.

Useful extensions to add manually if not already present:

- **ESLint** (`dbaeumer.vscode-eslint`) — inline lint errors
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) — class autocomplete
- **Prettier** (`esbenp.prettier-vscode`) — consistent code formatting
- **GitLens** (`eamodio.gitlens`) — enhanced Git history in the editor
- **vscode-icons** (`vscode-icons-team.vscode-icons`) — file icons

---

## Environment Variables

The current project (Phase 1) has **no required environment variables**.

When Phase 2 (database/customization) is added, a `.env` file will be needed.
A `.env.example` file will be committed to the repo as a template. Copy it and
fill in your values:

```bash
cp .env.example .env
```

### Expected variables for Phase 2+

```env
# PostgreSQL connection string
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# NextAuth secret (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# S3-compatible storage (Cloudflare R2 / AWS S3 / Supabase)
STORAGE_ENDPOINT="https://your-endpoint"
STORAGE_ACCESS_KEY="your-access-key"
STORAGE_SECRET_KEY="your-secret-key"
STORAGE_BUCKET="your-bucket-name"
```

> **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## Phase 2 Prerequisites — Database

> Skip this section until Phase 2 work begins.

### Option A — Neon (managed Postgres, generous free tier)

1. Create a free account at https://neon.tech/.
2. Create a new project and copy the connection string.
3. Paste it into `DATABASE_URL` in your `.env`.

### Option B — Local PostgreSQL

1. Install PostgreSQL: https://www.postgresql.org/download/
2. Create a database:

   ```sql
   CREATE DATABASE agency_website;
   ```

3. Set `DATABASE_URL` accordingly:

   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/agency_website"
   ```

### Running Prisma Migrations

Once the Prisma schema is added to the project (Phase 2):

```bash
# Apply migrations to your database
npx prisma migrate dev

# Seed initial content
npx prisma db seed

# Open the Prisma visual explorer
npx prisma studio
```

---

## Folder Structure Overview

```
Agency_website/
├── public/              # Static assets (images, favicon)
│   ├── images/
│   └── blogs/
├── src/
│   ├── App.jsx          # Root component + routing
│   ├── main.jsx         # React entry point
│   ├── index.css        # Global styles / Tailwind imports
│   ├── Components/      # Reusable UI components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Portfolio/
│   │   ├── Blogs/
│   │   ├── Contact/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── Pages/           # Page-level components (one per route)
│   ├── context/         # React context (e.g. ThemeContext)
│   └── assets/          # Images and videos imported by components
├── utils/               # Shared helpers (e.g. navigation links)
├── docs/                # Project documentation
│   ├── local-setup.md   ← you are here
│   └── roadmap.md
├── CONTRIBUTING.md
├── vite.config.js
├── tailwind.config.js   # (auto-generated / configured)
└── package.json
```

---

## Git Workflow Quick Reference

```bash
# Always start from an up-to-date main
git checkout main
git pull origin main

# Create your feature branch
git checkout -b feature/my-feature

# After making changes, stage and commit
git add .
git commit -m "feat(hero): add animated headline"

# Push and open a PR on GitHub
git push origin feature/my-feature
```

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the full branch strategy, commit
conventions, and PR checklist.

---

## Need Help?

- Open an issue on GitHub: https://github.com/Ahmadi1798/Agency_website/issues
- Review the roadmap: [docs/roadmap.md](roadmap.md)
