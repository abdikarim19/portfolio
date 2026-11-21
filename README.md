# Abdikarim Mohamed — Portfolio v3

A personal, editorial portfolio built with semantic HTML, CSS, and a tiny JavaScript enhancement. No application framework, build step, external fonts, or CDN dependencies.

Production remains at https://abdikarim19.netlify.app/. The remodel is on review branches; do not merge to the production branch until the local design is approved.

## Folder structure

- `index.html`
- `styles.css`
- `script.js`
- `assets/` (optimized portrait, original résumé, favicon, social preview; older assets retained)
- `docs/content-audit.md` — factual sources, discrepancies, and design rationale
- `docs/review/` — visual QA evidence and validation notes
- `scripts/check-browser.cjs` — optional browser checks, not required to run the website

## Run locally (recommended)

**Option A (VS Code):**

1. Install the VS Code extension **Live Server**
2. Right-click `index.html` → **Open with Live Server**

**Option B (no installs, Python):**

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open: http://127.0.0.1:8000/

> Don’t double-click `index.html` (file://). Serving the folder avoids path quirks and makes the site match 1:1.

## Optional browser validation

With the local server running, install test-only packages into the ignored review directory:

```bash
npm install --prefix .review/browser playwright @axe-core/playwright
node scripts/check-browser.cjs
```

The checker defaults to Google Chrome on macOS. Set `CHROME_PATH` to the installed Chrome executable on another system. It checks 320, 390, 768, and 1440 px widths, keyboard access, image/asset loading, reduced motion, 200% text sizing, no-JavaScript navigation, console errors, and axe WCAG A/AA rules. Screenshots and a JSON result are written to `docs/review/`. These tools are not website runtime dependencies.

## Review and rollback

1. `remodel/portfolio-v3`: factual baseline and unchanged résumé download.
2. `remodel/editorial-design`: layout, content, and site assets; based on the baseline.
3. `remodel/review-evidence`: screenshots, validation script, and review notes; based on the design.

Each pull request targets the preceding branch, with the first targeting `main`. Review the design locally before merging anything. Git history preserves the original website at `2df3dac`. Rejecting the design PR leaves the original site intact; a later rollback can revert the design commit without discarding the source audit.

## Content maintenance

Update claims from the résumé and actual project implementation, not from product plans. The résumé PDF is the supplied original and may differ from newer repository-backed project stacks. Keep project status explicit. See the [source audit](docs/content-audit.md) and [review notes](docs/review/README.md) for unresolved source gaps.
