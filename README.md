# Jintai Chen — Academic Homepage

Source code for Jintai Chen's academic homepage.

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
- `Code & Data` is used when the linked repository provides both implementation and dataset resources.

## Deployment

`main` is the production branch. The site is plain static HTML/CSS/JavaScript and is served from the repository root with GitHub Pages.

For ordinary content updates, edit the files under `data/`; page markup generally does not need to change.
