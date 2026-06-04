# Cat Mail

A cute single-page web app that delivers random cat messages from a clickable box.

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── content
│   └── messages
│       ├── chaos-demands.md
│       ├── motivation.md
│       ├── roast.md
│       ├── wisdom.md
│       └── wishes.md
└── assets
    ├── audio
    │   └── background-music.mp3
    └── images
        ├── background.png
        ├── box.png
        ├── button.png
        ├── mail.png
        ├── paw.png
        ├── special-council.png
        ├── ui
        │   ├── category-button.png
        │   └── special-council-frame.png
        └── cats
            ├── cat-1.png
            ├── cat-2.png
            ├── cat-3.png
            ├── cat-4.png
            ├── cat-5.png
            ├── cat-6.png
            ├── cat-7.png
            └── cat-8.png
```

## Run Locally

Serve the folder with any static server, then open `index.html`.

The app fetches Markdown files from `content/messages`, so opening `index.html` directly as a `file://` URL may block message loading in some browsers.

For GitHub Pages, publish from the repository root so `index.html` can load the relative `./assets/...` paths.
