# Kingdom Leadership Academy

Simple 4-page professional website template for Kingdom Leadership Academy.

## Pages

- **Home** — brand hero, mission & vision, programme overview
- **About** — foundation, mission, vision and values
- **Programs** — leadership education, coaching and training
- **Contact** — enquiry form and contact details

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev -- --port 3847
```

Open [http://localhost:3847](http://localhost:3847).

## GitHub Pages (static export)

```bash
GITHUB_PAGES=true npm run build
```

This writes a static site to `out/` with `basePath` / `assetPrefix` set to `/kingdom-leadership-academy` for a project Pages site at:

`https://<github-username>.github.io/kingdom-leadership-academy/`

Deploy is handled by `.github/workflows/deploy-pages.yml` (Pages source: GitHub Actions).

## Brand notes

Colours and logo assets are taken from the client brand materials:

- Charcoal `#2D2930`
- Deep red `#A6192E`
- Gold accent `#C5A572`
- Logo and cover art in `public/brand/`

Contact details are placeholders and can be updated once the client confirms email and location.
