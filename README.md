# Aakash Babu Naventran — Portfolio (v2, glassmorphism)

A multi-page portfolio with a sleek dark-tech / glassmorphism look:
animated gradient mesh background, frosted-glass cards, and clear
top navigation across separate pages. Plain HTML/CSS/JS — no build
step, no dependencies to install.

## Folder structure
```
aakash-portfolio-glass/
├── index.html        → Home (hero + quick stats + overview)
├── skills.html        → Filterable skills grid
├── experience.html    → Internship timeline + talks/workshops
├── projects.html       → Project cards (click through to detail pages)
├── project-1.html      → Diabetic Retinopathy Classifier detail
├── project-2.html      → IoT Assistant for Elderly Care detail
├── protosem.html       → Protosem week 0–20 tracker (click a week for detail)
├── week-0.html … week-20.html → one page per week
├── education.html     → Degrees, awards, coursework
├── contact.html       → Contact form + direct links
├── css/style.css       → all styling (colors, layout, animation)
├── js/script.js        → nav, cursor glow, reveal, filters, form
├── assets/             → put your photo, resume PDF, etc. here
└── README.md
```

## Run it locally
Double-click `index.html`, or serve it locally:
```
cd aakash-portfolio-glass
python3 -m http.server 8000
```
Then open http://localhost:8000

## Easy things to customize
- **Colors / fonts** — `css/style.css`, under `:root` at the top
  (`--cyan`, `--violet`, `--pink` are the three accent colors).
- **Nav / pages** — each page repeats the same `<header class="nav">`
  block; add or remove links there to add/remove pages.
- **Skills & filters** — edit the cards in `skills.html`; each has a
  `data-cat="..."` attribute that the filter buttons match against.
- **Contact form** — currently front-end only (shows a note on submit).
  Wire it to a real service like Formspree or EmailJS, or use the
  `mailto:` / LinkedIn links already in `contact.html`.
- **Protosem weeks** — each week has its own file: `week-0.html`
  through `week-20.html`. Weeks 0–1 use a "completed" layout with
  three editable sections (What I worked on / Key takeaways /
  Deliverables) — just replace the placeholder text inside the
  `.content-block` divs. Weeks 2–20 currently show an "upcoming"
  message; once a week is done, open its file and swap that
  `.upcoming-state` block for the same three-section layout used in
  `week-0.html` (copy/paste it over), then flip that week's card in
  `protosem.html` from `class="week-card upcoming ..."` to
  `class="week-card completed ..."` (see the notes from earlier).
- **Projects** — `projects.html` cards link to `project-1.html` and
  `project-2.html`. Each has Overview / Approach / Tech Stack /
  Results sections you can expand with more detail — the placeholder
  text is marked with an `<!-- EDIT BELOW -->` comment.
- **Resume PDF** — drop it into `assets/resume.pdf` — the "Download
  Resume" link on the Contact page already points there.
- **Email / LinkedIn** — update the placeholder links in `contact.html`
  (`mailto:your.email@example.com` and the LinkedIn URL) with your own.

## Deploy for free
Any static host works — no build step needed:
- **GitHub Pages** — push this folder to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel** — drag-and-drop the folder in their dashboard.

## Notes
- Home address and date of birth from your CV were left off the
  public pages on purpose — only city/state, education and
  experience are shown.
- Update the placeholder email/LinkedIn links in `contact.html`
  before publishing.
