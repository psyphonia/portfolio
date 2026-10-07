# Devansh Gandotra Neog — Personal Portfolio

This is my personal portfolio, built around a **System 7 / Mac OS Classic** desktop aesthetic. It is meant to feel more like an old Macintosh workstation than a conventional portfolio site.

The site is based on the template, stylesheets, window layout, and desktop interactions from **[Neocities - altalenae](https://neocities.org/site/altalenae)** (`altalenae.neocities.org`).

---

## What’s on the site

### Desktop
- System 7-style desktop with a pixel dither background (`images/8.png`)
- Top menu bar with mobile controls and quick links
- Pinstriped window title bars with close, resize, and separator elements
- Chicago / Krungthep and Inconsolata typography

### Left sidebar
- **Hello!** — A short introduction, background, and UWA affiliation
- **Schema** — A computational graph showing reverse-mode autograd
- **Updates Log** — A running list of recent changes and milestones

### Main area
- Layered 3D index-card layout using `home-card`, `rect1`, `rect2`, and `rect3`
- 18 clickable icons covering projects, education, interests, skills, and other parts of my work
- Two-page card navigation using `prevPage` and `nextPage`
- Popup windows with project details, source links, and academic information
- A set of retro 88x31 web badges

### Right sidebar
- **Geometry** — Algorithmic topologies
- **Physics** — Resonant LC tank geometry
- **Stack & Specs** — Hardware, languages, operating system, and current focus

### Footer
- **Terminal Status** — A live system status ticker

---

## File structure

```text
Website/
├── index.html       # Main System 7 workstation desktop
├── resume.html      # System 7 styled CV / resume
├── system7.css      # System 7 UI styles
├── c_index.css      # Grid, desktop cards, and responsive layout
├── fonts/           # ChicagoFLF retro Macintosh font
├── images/          # Pixel icons, desktop patterns, and badges
└── README.md        # Documentation
```

---

## Running locally

Start a local server from the project directory:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.
