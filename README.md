# Personal research site

A simple Jekyll site for sharing demo videos, pipeline images, and short write-ups of drone research projects. Built for GitHub Pages — no build step required beyond pushing to GitHub.

## Structure

- `_projects/` — one Markdown file per project. Each becomes a card on the homepage and its own page.
- `assets/images/` — thumbnails and pipeline images, one subfolder per project.
- `assets/css/style.css` — the maroon/gold/black theme, including the light/dark toggle.
- `assets/js/theme-toggle.js` — light/dark switch logic (persists via `localStorage`, light is default).
- `_layouts/` — `home.html` (homepage grid), `project.html` (individual project page), `default.html` (shared header/footer).
- `index.md` — homepage intro text.

## Adding a new project

1. Copy one of the files in `_projects/` as a starting point.
2. Fill in the front matter:
   - `title`, `abstract` — `abstract` shows up on the homepage card, so keep it to a sentence or two.
   - `thumbnail` — the homepage card image.
   - `order` — controls homepage ordering (lower numbers come first).
   - `videos` — a list of `{ id, caption }`. `id` is the part of the YouTube URL after `watch?v=` (works for unlisted videos too).
   - `pipeline_images` — a list of `{ src, caption }`.
3. Write the full description as the Markdown body below the front matter — normal Markdown, including inline images.
4. Drop images in `assets/images/<project-name>/`.

Both `videos` and `pipeline_images` are optional — the drone-cube-box project skips `videos` entirely since there's no demo clip for it yet.

## Editing the look

- Colors live as CSS variables at the top of `assets/css/style.css` (`:root` for light, `:root[data-theme="dark"]` for dark).
- Site title/tagline: `_config.yml`.

## Running locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Publishing with GitHub Pages

1. Push this repo to GitHub.
2. In the repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. If the repo is **not** named `<yourusername>.github.io`, open `_config.yml` and set:
   ```yaml
   baseurl: "/your-repo-name"
   ```
   Leave it blank if the repo *is* named `<yourusername>.github.io`.
5. Wait a minute or two — the site will be live at `https://<yourusername>.github.io/<repo-name>/`.
