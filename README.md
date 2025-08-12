# Realmate Production (Vite + React + Tailwind)

A bilingual (繁中 + English) single-page site for a production company, with SEO (react-helmet-async) and a Formspree contact form (no redirect).

## Quick start

```bash
npm install
npm run dev
# build
npm run build
npm run preview
```

### Formspree
Edit `src/config.jsx` and replace the placeholder endpoint:
```js
export const FORM_ENDPOINT = 'https://formspree.io/f/yourFormID'
```
Form submits via `fetch` without redirect and shows success/error states inline.

### Images & Links
- Replace director/BTS/work images and external links inside `src/App.jsx`.
- Public OG image: `/public/og.jpg`. Favicon: `/public/favicon.svg`.

### SEO
- Default meta in `index.html`.
- Runtime tags via `react-helmet-async` based on language in `src/seo.jsx`.

### Language
- Language is stored in `localStorage` and can be toggled (繁中/EN) in the header.
- Defaults to browser language (zh → 繁中; otherwise EN).

### Deploy (GitHub Pages)
If you plan to deploy on GitHub Pages, add this to `vite.config.js`:
```js
export default defineConfig({
  base: '/<your-repo-name>/',
  plugins: [react()],
})
```
Then push and enable Pages on the `dist/` folder.
