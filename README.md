# Volt & Ligne — static website

A bilingual (French/English) company showcase site built with plain HTML, CSS and JavaScript. It has no framework, package manager, server-side code or build step.

## Pages

- `index.html` — home page
- `about.html` — company, mission and values
- `services.html` — electrical, solar and security services
- `projects.html` — project portfolio
- `blog.html` — static journal preview
- `contact.html` — contact details and email form
- `styles.css` — shared layout, visual styles and responsive breakpoints
- `script.js` — mobile navigation, language switching, remembered language and contact form behavior

## Open the site

Open `index.html` in a browser. The other pages are linked through the shared navigation. You can also serve this folder with any static file server; no compilation or dependencies are needed.

The language button switches between French and English. The choice is stored in the browser's `localStorage` and shared across pages on the same site. Text elements use `data-fr` and `data-en` attributes; add both when adding new bilingual copy.

The contact form is static: JavaScript validates the required fields and opens the visitor's default email application with a prefilled message addressed to `bonjour@voltligne.cm`. It does not transmit or store form data. To accept messages directly on the site, connect a form service or add a backend.

## Customize before publishing

Replace the sample company details in the HTML, especially the phone number (`+237 6 00 00 00 00`), email (`bonjour@voltligne.cm`), location and business hours. The project and blog entries are illustrative content; replace them with approved company material. Update image URLs and alt text to match the final images. Fonts and photos currently load from Google Fonts and Unsplash, so those assets require an internet connection.

All pages share `styles.css` and `script.js`. Keep those filenames and relative paths, or update the references in each HTML page if you rename them.
