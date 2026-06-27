# GitHub 101 — Pre-Sales Demo Guide

A browser-based slide presentation teaching pre-sales engineers how to use GitHub for storing, reusing, improving, and sharing demo assets.

**Live:** https://DennisZimmermannSFCC.github.io/github-101/

## What this is

An interactive presentation covering:
- Why GitHub matters for pre-sales demos
- Core concepts (repos, commits, branches, PRs)
- Hands-on walkthrough: building a demo repository from scratch
- Collaboration workflows and good habits

Built with React, Tailwind CSS, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/github-101/ in your browser.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Deployment is automatic via GitHub Actions. Push to `main` and the site deploys to GitHub Pages.

To set up Pages for the first time:
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions"

## Navigation

- **Arrow keys**: Left/Right to navigate slides
- **Space**: Next slide
- **Buttons**: Previous / Next buttons at the bottom
