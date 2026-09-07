# Napkin Runbook

## Curation Rules
- Re-prioritize on every read.
- Keep recurring, high-value notes only.
- Max 10 items per category.
- Each item includes date + "Do instead".

## Execution & Validation (Highest Priority)
1. **[2026-09-07] Compile TypeScript before testing or publishing**
   Do instead: run `npm run check` for strict type checking, Vite production build and React component tests; publish only `dist/`.

## Domain Behavior Guardrails
1. **[2026-09-07] Profile content belongs in one configuration object**
   Do instead: edit identity and social destinations in `src/config/profile.ts`; keep shared types in `src/types/profile.ts`.

## User Directives
1. **[2026-09-07] Use atomic English commits without agent attribution**
   Do instead: use English Conventional Commits, split work by logical purpose, and omit attribution footers.
2. **[2026-09-07] Follow the supplied photographic reference**
   Do instead: use `eu.JPG` as the full-bleed portrait and preserve the reference's lower glass panel composition.
