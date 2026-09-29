# Govt. ITI Summerkot — Official Website

Modern static website for **Govt. Industrial Training Institute, Summerkot (H.P.)**, built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It is fully static,
accessibility-conscious and deploys free to GitHub Pages.

## Tech stack

| Concern        | Choice                                     |
| -------------- | ------------------------------------------ |
| Framework      | Astro (static output)                      |
| Styling        | Tailwind CSS v4 (via `@tailwindcss/vite`)  |
| Fonts          | Inter + Plus Jakarta Sans (self-hosted)    |
| Type checking  | `astro check` + TypeScript strict          |
| Hosting        | GitHub Pages (GitHub Actions)              |
| Domain         | `itisummerkot.edu.in` (DNS via ERNET)      |

## Requirements

- Node.js 22+ (see `.nvmrc`)
- npm

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Scripts

| Command           | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server                     |
| `npm run build`   | Build the static site to `dist/`         |
| `npm run preview` | Preview the production build locally     |
| `npm run check`   | Run Astro/TypeScript diagnostics         |

## Project structure

```
src/
  components/      Header, Footer, Icon, DataTable, PageHeader, EmptyState ...
  data/site.ts     Site config, navigation, trades, links  ← edit content here
  layouts/         BaseLayout.astro (SEO, fonts, accessibility shell)
  pages/           One .astro file per route (27 routes)
  styles/          global.css (theme tokens, components, accessibility modes)
public/
  CNAME            Custom domain for GitHub Pages
  images/          Logos and photographs
  downloads/       Prospectus and RTI documents (PDF)
.github/workflows/
  ci.yml           Typecheck + build on pushes and pull requests
  deploy.yml       Build + deploy to GitHub Pages on main
```

## Editing content

- Global details (address, phone, email, navigation, trades): `src/data/site.ts`
- Page content: the relevant file under `src/pages/`
- Colours / design tokens: the `@theme` block in `src/styles/global.css`

## Accessibility

- Skip-to-content link, semantic landmarks and focus-visible styling
- Screen-reader access page (`/screen-reader-access/`)
- Font-size controls (A− / A / A+) and a high-contrast mode in the top bar
- `prefers-reduced-motion` respected

## CI/CD

Two GitHub Actions workflows are included:

1. **CI** (`.github/workflows/ci.yml`) — runs on every push and pull request: installs
   dependencies, runs `astro check` and builds the site.
2. **Deploy** (`.github/workflows/deploy.yml`) — runs on pushes to `main` (and on manual
   dispatch): builds and publishes `dist/` to GitHub Pages via the official Pages actions.

### One-time GitHub setup

1. Push this repository to `git@github.com:itisummerkot/itisummerkot-website.git` (branch `main`).
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. The first push to `main` triggers a deploy. Once the custom domain is active the site is
   served at `https://itisummerkot.edu.in/`.

> The build uses root-relative asset paths (it is configured for the custom apex domain), so use
> `npm run preview` to check the production build locally while DNS is being set up. If you ever
> need to preview at the `github.io/itisummerkot-website/` project URL instead, set `base` in
> `astro.config.mjs` and remove `public/CNAME`.

### Custom domain (`itisummerkot.edu.in`)

`public/CNAME` already contains `itisummerkot.edu.in`. To point the ERNET-registered domain at
GitHub Pages, add the following records in the ERNET DNS control panel:

| Type  | Name | Value                                   |
| ----- | ---- | --------------------------------------- |
| A     | @    | `185.199.108.153`                       |
| A     | @    | `185.199.109.153`                       |
| A     | @    | `185.199.110.153`                       |
| A     | @    | `185.199.111.153`                       |
| CNAME | www  | `itisummerkot.github.io`                 |

Then in **Settings → Pages → Custom domain**, enter `itisummerkot.edu.in` and enable
**Enforce HTTPS** (a certificate is issued automatically after DNS propagates).

> ERNET manages `.edu.in` domains; add/adjust DNS records through their portal or by contacting
> ERNET support. Also consider adding GitHub's TXT verification record if prompted.

## License

Content and institutional information belong to Govt. ITI Summerkot. Site code is provided for
the institute's use.
