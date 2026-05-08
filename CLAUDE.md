# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

Two independent Node packages, no root `package.json`. Run commands from the relevant subdirectory.

- `backend/` — Express 5 API on Node, TypeScript ESM, Prisma 7 + PostGIS-enabled Postgres.
- `frontend/` — Expo / React Native app, TypeScript, NativeWind (Tailwind).
- `test-import.js` / `test-require.js` at the repo root are ad-hoc scratch files, not a test suite.

## Common commands

### Backend (`cd backend`)
- `docker-compose up -d` — start the PostGIS Postgres container (port 5432, db `runnertown`).
- `npm install`
- `npx prisma generate` — regenerate the Prisma client into `prisma/generated-client` (required after schema changes; the import path in `src/utils/prisma.ts` points there, not `@prisma/client`).
- `npx prisma migrate dev --name <change>` — create + apply a migration.
- `npm run dev` — `tsx watch src/index.ts` (default port 3000).
- `npm run build` — `tsc` to JS; `npm start` runs `dist/index.js`.
- No test runner is configured.

### Frontend (`cd frontend`)
- `npm install`
- `npm start` — `expo start`. Use Expo Go on a physical device for GPS/location testing; web/simulator paths exist (`npm run android|ios|web`) but the core flow needs real GPS.
- No test or lint script is configured.

## Architecture

### Backend request flow
`src/index.ts` mounts two routers:
- `/api/auth` → `routes/authRoutes.ts` → `controllers/authController.ts` (signup/login/me). Validation with Zod, password hashing via `bcryptjs`, JWT issued by `utils/auth.ts` (7-day expiry, falls back to literal `'secret'` if `JWT_SECRET` is unset — set the env var for any real use).
- `/api/territories` → `routes/territoryRoutes.ts` → `controllers/territoryController.ts`. Both endpoints sit behind `middleware/authMiddleware.ts` (`authenticateJWT`), which decodes `Authorization: Bearer <token>` and attaches `req.user.userId` via the `AuthRequest` type.

### Prisma + PostGIS
`utils/prisma.ts` wires Prisma 7 to a `pg` Pool through `@prisma/adapter-pg` rather than the default engine. The generated client is emitted to `prisma/generated-client/` (configured in `schema.prisma`) and imported from there — do **not** import from `@prisma/client`. The DB image is `postgis/postgis:15-3.3`, but `Territory.geometry` is currently stored as a `String` containing `JSON.stringify([{lat, lng}, ...])`; PostGIS geometry types are intentionally deferred (see comment in `schema.prisma`). `getMyTerritories` parses the JSON back out before responding.

### TypeScript ESM conventions (backend)
`backend/tsconfig.json` uses `module: ESNext`, `moduleResolution: NodeNext`, `verbatimModuleSyntax: true`, and `package.json` sets `"type": "module"`. Practical consequences when editing:
- Relative imports must include the `.js` suffix even from `.ts` files (e.g. `import ... from './utils/auth.js'`).
- Type-only imports must use `import type`.
- `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` are on — array/object index access yields `T | undefined`.

Compiled `.js`/`.d.ts` artifacts are checked in next to the `.ts` sources under `src/`. Edit only the `.ts` files; the build will regenerate the rest.

### Frontend app shell
`App.tsx` wraps the tree in `AuthProvider` → `NavigationContainer` → `AppNavigator`. `AppNavigator.tsx` is the auth gate: when `useAuth().isAuthenticated` is true it renders `MainTabs` (Dashboard / Run / Map / Ranks / Profile), otherwise the Login/Signup stack. `context/AuthContext.tsx` persists the JWT in `expo-secure-store` under the key `userToken` and rehydrates on mount.

All HTTP goes through `src/services/api.ts`, a single Axios instance with a hardcoded `baseURL`. When testing on a physical device this **must** be changed from `http://localhost:3000/api` to the dev machine's LAN IP — the value is checked in as `localhost`. Auth tokens are not yet attached via an interceptor; screens that call protected endpoints currently need to set the header themselves.

Styling uses NativeWind v4: `babel.config.js` sets `jsxImportSource: "nativewind"` and `metro.config.js` wraps the config with `withNativeWind` pointing at `src/global.css`. Tailwind classes work directly on RN components via `className`.

## Gotchas

- Backend `.env` must define `DATABASE_URL` (Prisma adapter throws on boot otherwise) and should define `JWT_SECRET`.
- After changing `prisma/schema.prisma`, run `npx prisma generate` so `prisma/generated-client` is updated — code imports from that path, so a stale client is a silent type drift.
- `src/services/api.ts` baseURL must be updated for device testing; do not commit a personal LAN IP back to that file.
- Frontend `src/components`, `src/hooks`, `src/utils` directories exist but are empty — new shared code should land there rather than inside screens.
