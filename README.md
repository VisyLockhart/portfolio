# portfolio

Visy Lockhart's portfolio site (Traditional Chinese at `/`, English at `/en/`).
Built with [Astro](https://astro.build/), deployed to GitHub Pages at <https://portfolio.aequoreranos.com>.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Notes

- Copy lives in `src/i18n/content.ts` (zh-TW / en); pages are thin wrappers over `src/components/pages/`.
- SEO: per-page title/description, canonical, hreflang, Open Graph / Twitter card, JSON-LD, sitemap, robots.txt.
- Theme: light / dark toggle, follows the system setting until the visitor picks one.
- Deployment: GitHub Actions (`.github/workflows/deploy.yml`); set Pages source to "GitHub Actions". `public/CNAME` holds the custom domain.
- Unofficial fan tool disclaimer applies to the Eranaut / Eranarch descriptions.
