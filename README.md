# HyperWumpus portfolio

Source for [hyperwumpus.github.io](https://hyperwumpus.github.io/).

## Quick updates

- Edit social, contact, support, and project links in `js/config.js`.
- Edit page wording and section order in `index.html`.
- Edit colors and layout in `css/styles.css`.
- Edit interactions and project case studies in `js/site.js`.
- Put new project images in `assets/projects/`.
- Put updated résumé PDFs in `assets/resume/` using the existing filenames.

## Add a project

1. Upload a compressed JPG or WebP image to `assets/projects/`.
2. Copy an existing `<article class="card">` inside the projects grid in `index.html`.
3. Change its title, description, category, image path, and link.
4. Commit with a short message such as `Add Example Project`.
5. GitHub Pages publishes changes from `main` automatically after the pull request is merged.

## Project status language

Use precise labels such as **concept**, **prototype**, **CI passing**, **hardware testing pending**, or **live project**. Do not describe an experiment as a finished client product.

## Local preview

From the repository folder, run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
