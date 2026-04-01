# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, auto-seeds CMS tables if empty on startup, then starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing (100kb limit), routes at `/api`, centralized error handler
- Middleware: `src/middleware/admin-auth.ts` — `requireAdmin` checks `x-admin-key` header against `ADMIN_API_KEY` env var; skips auth when env var is unset (dev mode)
- Routes: `src/routes/index.ts` mounts sub-routers:
  - `health.ts` — `GET /api/healthz`
  - `content.ts` — `GET /api/content` (public), `PUT /api/content` (admin-only, body: `{entries: [{key, value}]}`)
  - `constants.ts` — `GET /api/constants` (public), `PUT /api/constants` (admin-only, body: `{entries: [{key, value}]}`)
  - `submissions.ts` — `POST /api/submissions` (public, body: `{name, email, company}`), `GET /api/submissions` (admin-only)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — table definitions:
  - `cms_content` — key-value CMS content (key unique text, value text)
  - `calculator_constants` — calculator pricing/ratios (key unique text, value jsonb)
  - `contact_submissions` — lead form submissions (name, email, company, created_at)
- `src/seed-data.ts` — exported arrays of CMS content (58 entries incl. pillar icons) and calculator constants (3 entries)
- `src/seed.ts` — CLI script that imports seed-data and upserts all entries; run via `pnpm --filter @workspace/db seed`
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only), `./seed-data` (seed arrays only, no DB import)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `artifacts/bca-roi-landing` (`@workspace/bca-roi-landing`)

React + Vite landing page for BCA Solutions' Managed Intelligent Automation service. Single-page app with CMS integration.

- Design: Dosis font, UPPERCASE headings, primary #731517, warm neutral palette
- Pages: `/` (landing page), `/admin` (admin panel)
- CMS: All text content loaded from database via `CmsProvider` context (`src/lib/cms-context.tsx`)
- Calculator: Uses admin-editable constants from DB (pricing, automationRatio, workingHoursPerMonth)
- Contact form: Submits to `POST /api/submissions`, shows success state
- Admin panel (`/admin`): 3 tabs — Content (grouped by section, textareas for long text, icon dropdowns for pillar icons), Calculator Constants (structured numeric inputs for pricing tiers S/M/L, automation ratio %, working hours/month), Submissions (table view)
- Admin auth: Pass `?key=<ADMIN_API_KEY>` query param to authenticate admin API calls
- Vite proxy: `/api` proxied to `http://localhost:8080` in dev
- Section components in `src/components/sections/` all use `useContent()` hook for CMS text

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
