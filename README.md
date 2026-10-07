# Devansh Gandotra Neog — Personal Portfolio & Workstation

A retro **System 7 / Mac OS Classic** personal website for **Devansh Gandotra Neog**, AI Student & Developer at The University of Western Australia.

Built with the exact template, stylesheets, window architecture, and interactive desktop mechanics of **[Neocities - altalenae](https://neocities.org/site/altalenae)** (`altalenae.neocities.org`).

---

## Template Architecture

- **Desktop Environment:**
  - Classic pixel dither desktop pattern (`images/8.png`)
  - Classic System 7 top menu bar (`header.header`) with mobile toggle and quick links
  - Authentic pinstriped title bars with functional close (`[X]`), resize, and separator bars
  - Chicago / Krungthep & Inconsolata monospace typography

- **Left Sidebar:**
  - **Hello! Window:** Personal introduction, background, and academic affiliation (UWA)
  - **Schema Window:** Computational graph & reverse-mode autograd DAG diagram
  - **Updates Log Window:** Scrollable devlog of recent updates and milestones

- **Main Content Deck:**
  - **3D Layered Index Card Deck (`home-card`):** Layered physical card deck (`rect1`, `rect2`, `rect3`)
  - **Interactive Desktop Icons Grid:** 18 clickable desktop icons (Projects, Autograd, AI Agent, Graph Search, Minimax, Tesla Coil, Education, Honors, Interests, Skills, Contact, 3 Books, Math, Piano, Systems, Resume)
  - **Pagination Controls:** Retro pixel arrow buttons (`prevPage`, `nextPage`, `1/2`) dynamically paging through the deck
  - **System 7 Popup Windows:** Clicking any icon opens an authentic System 7 window dialog displaying full project details, source code links, and academic records
  - **Retro 88x31 Badges:** Authentic Neocities 88x31 web badges

- **Right Sidebar:**
  - **Geometry Window:** Algorithmic topologies
  - **Physics Window:** Resonant LC tank geometry
  - **Stack & Specs Window:** Hardware, languages, OS, and focus specs

- **Footer:**
  - **Terminal Status Window:** Live system status ticker

---

## File Structure

```text
Website/
├── index.html       # Main System 7 workstation desktop
├── resume.html      # System 7 styled Curriculum Vitae / Resume
├── system7.css      # Core System 7 UI stylesheet (title bars, buttons, windows)
├── c_index.css      # Holy grail grid, desktop cards, responsive breakpoints
├── fonts/           # ChicagoFLF retro Macintosh font
├── images/          # Pixel icons, desktop patterns (8.png), retro 88x31 badges
└── README.md        # Documentation
```

---

## Running Locally

To view the website locally:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.
