# Razorbill Technologies — Local development

This repository now contains the Razorbill Technologies website source. For now we focus on local development (deployment configs are left unchanged).

## Project layout (unchanged)

```
ExecutiveAid/
├── executive-aid/          # Original React app (deprecated)
├── executive-aid-nextjs/   # Next.js + TypeScript app (ACTIVE)
├── vercel.json            # Vercel deployment configuration (left for later)
├── netlify.toml          # Netlify deployment configuration (left for later)
└── package.json          # Root scripts for local workflows
```

## � Local development quick start

1. From the repo root, install app dependencies and run the dev server:

```bash
# Install dependencies for the Next.js app
npm run install-deps

# Start development server
npm run dev
```

Notes:
- `npm run install-deps` will `cd` into `executive-aid-nextjs` and run `npm install`.
- `npm run dev` runs the Next.js dev server (via the root package scripts which cd into the app).

## What changed now

- Project metadata (package.json) was updated to reflect Razorbill Technologies for local identification.
- Deployment files (`vercel.json`, `netlify.toml`) were intentionally left untouched — we can update them later when you want to deploy.

## Next steps (optional)

- Replace branding assets in `executive-aid-nextjs/public/` (logos, images).
- Update `src/` (site titles, meta tags, and visible text) to show Razorbill branding.
- Rename folders and update CI/deployment configs if you want repository directory names to reflect the new brand.

If you want, I can now update branding assets and `src/` text next — tell me which you'd like first.