# Usha Kolpe Portfolio

Premium Next.js portfolio for artist, physician, and environmental advocate Usha Kolpe.

## Installation

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000` by default.

## Build

```bash
npm run build
```

This project now builds as a static export for simple hosting environments. After the build finishes, upload the contents of the `out` folder to your hosting account.

## Updating Artwork Data

Artwork records live in `data/artworks.json`. Each item includes:

```json
{
  "id": "ak-001",
  "title": "Blue Universe",
  "slug": "blue-universe",
  "year": "2024",
  "medium": "Acrylic on canvas",
  "dimensions": "36 x 48 in",
  "collection": "Expressions in Focus",
  "description": "Artist reflection text.",
  "availability": "Available",
  "image": "/images/artworks/artwork-1.jpg"
}
```

Keep slugs unique. Gallery detail URLs are generated from the slug, for example `/gallery/blue-universe`.

## Replacing Images

Images are organized under `public/images`:

- `public/images/artworks`
- `public/images/artist`
- `public/images/exhibitions`
- `public/images/awards`

Replace placeholder files with final images using the same path, or update the `image` value in `data/artworks.json`.

## cPanel Hosting

This project is prepared for cPanel hosting even when `Setup Node.js App` is not available.

1. Fill `NEXT_PUBLIC_SITE_URL` in `.env.local` with your real domain, for example `https://ushakolpe.com`.
2. Run `npm run build`.
3. Open the generated `out` folder.
4. Upload everything inside `out` to `public_html`.
5. If your site is in a subfolder instead of the root domain, tell me before uploading because `basePath` may need to be added.

Important:

- Sanity content is pulled during the build, so new edits in Sanity will appear on the live site only after you build again and upload a fresh `out` folder.
- Because cPanel is serving static files only, do not use `npm run start` on that server.
- If you want Sanity edits to appear instantly without rebuilding, the site needs hosting that supports Next.js server runtime, such as Vercel, Netlify, Cloudflare Pages with the right adapter, or a VPS.

## Sanity CMS

This project now supports a fuller Sanity content model for:

- site settings
- homepage
- about page
- gallery page
- gallery categories
- artworks
- awards page and award items
- exhibitions page and exhibition items
- advocacy page
- contact page

Sanity content still feeds the site at build time because this project remains a static export.

## Automated cPanel deploy

If you want publishing to be mostly hands-off for the site owner, use:

- Sanity webhook
- GitHub Actions
- SSH/SFTP deploy to cPanel

Setup notes are in [docs/sanity-cpanel-deploy.md](./docs/sanity-cpanel-deploy.md).
