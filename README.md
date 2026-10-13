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

## Flexible layouts: rows and columns

The `videos` and `pipeline_images` front matter give you a simple default (everything stacked, full width, one per row). When you want more control — two videos side by side, text next to a video instead of below it, a few images across — write it directly in the Markdown body using these grid classes:

- `row row-2` — two equal columns
- `row row-3` — three equal columns
- `row row-3` with `span-2` on one child — a two-thirds / one-third split (e.g. a wide video with a narrow text column beside it)

Every column needs `markdown="1"` so Kramdown processes Markdown/Liquid inside it, and a `{% include video-embed.html id="..." caption="..." %}` to embed a video anywhere outside the automatic `videos` list. See [`_projects/project-one.md`](_projects/project-one.md) for a working example of each pattern. Basic shape:

```html
<div class="row row-2">
  <div markdown="1">
  {% include video-embed.html id="YOUTUBE_VIDEO_ID" caption="Angle one" %}
  </div>
  <div markdown="1">
  {% include video-embed.html id="YOUTUBE_VIDEO_ID" caption="Angle two" %}
  </div>
</div>
```

Rows collapse back to a single column automatically on narrow (mobile) screens. Rows can hold anything — videos via the include, inline Markdown images (`![alt](path)`), or plain text — mixed in any combination. One formatting rule to keep in mind: inside each `markdown="1"` column, put the opening `<div>`, the content, and the closing `</div>` on **separate lines**. Kramdown won't reliably parse Markdown (like `![alt](path)`) written all on one line with the tags, e.g. this will NOT work:

```html
<!-- wrong — breaks -->
<div markdown="1">![alt](path)</div>
```

```html
<!-- right -->
<div markdown="1">
![alt](path)
</div>
```

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
