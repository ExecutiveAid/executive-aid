# Razorbill Technologies — Local development

This repository contains the Razorbill Technologies website source.

## Project layout

```
razorbill/
├── razorbill-nextjs/      # Next.js + TypeScript app (ACTIVE)
├── vercel.json            # Vercel deployment configuration
├── netlify.toml          # Netlify deployment configuration
└── package.json          # Root scripts for local workflows
```

## 🚀 Local development quick start

1. From the repo root, install app dependencies and run the dev server:

```bash
# Install dependencies for the Next.js app
npm run install-deps

# Start development server
npm run dev
```

Notes:
- `npm run install-deps` will `cd` into `razorbill-nextjs` and run `npm install`.
- `npm run dev` runs the Next.js dev server (via the root package scripts which cd into the app).

## What changed

- Project metadata (package.json) updated to reflect Razorbill Technologies
- Deployment files (`vercel.json`, `netlify.toml`) updated to use `razorbill-nextjs` directory
- All branding updated to Razorbill Technologies
