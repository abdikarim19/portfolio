# Abdikarim Mohamed — Minimal Portfolio

This site is intentionally simple:
- Black & white palette (no gradients, no dark-mode default)
- No external dependencies (no CDNs, no frameworks)
- Assets are local so it looks the same everywhere

## Folder structure
- `index.html`
- `styles.css`
- `script.js`
- `assets/` (headshot + logos)

## Run locally (recommended)
**Option A (VS Code):**
1. Install the VS Code extension **Live Server**
2. Right-click `index.html` → **Open with Live Server**

**Option B (no installs, Python):**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

> Don’t double-click `index.html` (file://). Serving the folder avoids path quirks and makes the site match 1:1.

## Deploy
- **GitHub Pages**: push this folder to a repo and enable Pages (root).
- **Netlify/Vercel**: drag-and-drop the folder (or connect the repo).
