# Jintai Chen — Academic Homepage

Production source for Jintai Chen's academic homepage.

## Site structure

- `index.html` — homepage, research overview, news, recruiting, and links
- `publications.html` — selected publications with research/application filters
- `academic.html` — honors, teaching, talks, and professional service
- `data/research.js` — homepage research taxonomy
- `data/publications.js` — publication records
- `data/academic.js` — academic records
- `lang.js` — English / Chinese switching
- `styles.css` — shared visual system

## Publication conventions

- `†` = co-first author
- `*` = corresponding author
- `Homepage` is reserved for a dedicated project website, not an arXiv, publisher, conference, or institutional landing page.

## Visitor counter

The original homepage at `whatashot.github.io` used Busuanzi site PV statistics. Its verified legacy count at migration was **1,057,151**.

The new homepage preserves that history:
- on `whatashot.github.io`, the live Busuanzi site count is used without double-counting the legacy baseline;
- on a future new production domain, the legacy baseline can be carried forward.

## Deployment

`main` is the production branch. The site is plain static HTML/CSS/JavaScript and is intended to be served from the repository root with GitHub Pages.

For ordinary content updates, edit the files under `data/`; page markup generally does not need to change.
