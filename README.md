# Papora

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF.svg?style=for-the-badge)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC.svg?style=for-the-badge)](https://tailwindcss.com)

Free invoice and receipt maker that runs entirely in your browser. Fill in your
details, watch the document build itself, and download a print-ready PDF.

**Live:** [papora.vercel.app](https://papora.vercel.app)
**Repository:** [github.com/bilalmlkdev/papora](https://github.com/bilalmlkdev/papora)
**Bugs:** [Open an issue](https://github.com/bilalmlkdev/papora/issues) or email **bilalmlkdev@gmail.com**

## Table of contents

- [About](#about)
- [Features](#features)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Routes](#routes)
- [Project structure](#project-structure)
- [Tech stack](#tech-stack)
- [How the editor works](#how-the-editor-works)
- [PDF themes and currencies](#pdf-themes-and-currencies)
- [Privacy](#privacy)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

## About

Invoicing should not need a tutorial. You type your details, glance at the
page, and download the PDF. Papora keeps that flow in one browser tab: a form
on the left, the real document on the right, and a download button when
everything looks right.

Most invoicing tools ask for an account before you can see what they produce.
Papora opens straight into the editor instead. Every byte stays on your
device, and there is no backend to run, no database to migrate, and no API
keys to hide.

## Features

### Invoices

- Company and client blocks with editable addresses and contact details
- Line items with quantity, price, and automatic totals
- Tax support with configurable rates
- Payment details for bank accounts, wallets, and transaction ids
- Terms, thank-you note, and custom fields for references or tax ids
- Company logo and signature upload with instant preview

### Receipts

- The same editor flow, shaped for payment receipts
- Receipt number, date, payment method, and transaction id fields
- Independent themes and currency selection from invoices

### Live preview and PDF export

- The document beside the form updates as you type, no preview button
- What you see in the browser is what lands in the PDF
- Client-side rendering with `@react-pdf/renderer`, nothing is uploaded
- A4 layout that matches the preview, downloaded in one click

### Currencies, themes, and price

- Country currency picker with flags, symbols, and correct formatting
- Three page themes: Light, Paper, and Dark, stored per document
- Free forever with no subscription, no trial, and no usage limits
- No account, no cookies, no analytics, no server

## Getting started

### Prerequisites

- Node.js 20.19+ or 22+ (required by Vite)
- npm 10+
- Git

There is no environment file to create. The app is fully client-side.

```bash
git clone https://github.com/bilalmlkdev/papora.git
cd papora
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`. The landing page is at `/`
and the editor is at `/documents`.

## Available scripts

- `npm run dev` - start the Vite dev server with hot reload
- `npm run build` - production build into `dist/`
- `npm run preview` - serve the production build locally
- `npm run lint` - run ESLint over the whole project

Lint and build must both pass before a pull request is merged.

## Routes

- `/` - landing page with the product tour and phone demo
- `/documents` - invoice and receipt editor with live PDF preview

## Project structure

```text
src/
  main.jsx                 Entry point, mounts the app
  Root.jsx                 App shell, routes, lazy loading
  Root.css                 Global styles, fonts, animations
  index.css                Tailwind entry
  pages/
    WorkspacePage.jsx      Switches invoice and receipt workspaces
  components/
    landing/               LandingPage, PhoneWalkthrough, DeviceFrame
    shell/                 TopBar, SideNav, BrandMark
    shared/                SectionFold, dialogs, inputs, currency helpers
    invoice/
      InvoiceWorkspace.jsx Invoice layout: sidebar, editor, preview
      editor/              InvoiceForm and its eight editing panels
      pdf/                 PDF page components and theme context
      utils/               Export helpers, sheet template, styles
      data/                Default invoice, themes, currency list
    receipt/
      ReceiptWorkspace.jsx Receipt layout and editor panels
      editor/              ReceiptForm, provider, receipt defaults
      utils/               Receipt sheet template and export helpers
  assets/                  Images used by the landing page and editor
```

State lives in the `InvoiceProvider` and `ReceiptProvider` contexts. Uploaded
images are cached in IndexedDB through `imageVault.js`, so they survive a page
reload without touching a network.

## Tech stack

- **React 19** - component model with hooks throughout
- **Vite 7** - dev server and production bundler
- **React Router 7** - two routes, landing and workspace
- **Tailwind CSS 4** - utility styling with the Tailwind Vite plugin
- **@react-pdf/renderer** - PDF generation in the browser
- **lucide-react** - icon set
- **ESLint** - lint rules in `eslint.config.js`

## How the editor works

The workspace renders three regions: the side navigation, the form column, and
the document preview. The form column is a stack of collapsible sections, one
per document part: basics, your business, the client, branding, line items,
payment, terms, and the thank-you note.

Each field writes straight into the matching context, and the preview reads
the same context, so the page you see is assembled from the same data the PDF
will use. There is no duplicated model and no synchronization step.

Validation runs before export: invoice number, company name, client name,
issue date, due date, and at least one line item must be present, and the due
date cannot precede the issue date. Receipts get the same checks plus a rule
that the receipt date cannot be in the future. On download, the template
receives the document data, theme, and cached images, and the file is saved
under the document number.

## PDF themes and currencies

Themes live in `themePresets.js` as page classes with matching print colors:
Light, Paper (warm off-white), and Dark. The preview and the exported file
read the same theme object, so they cannot drift apart.

Currencies come from one list in `defaults.js`, and every price field formats
through the same helper, which keeps totals consistent across mixed inputs.

## Privacy

Papora has no backend. Documents exist in memory, images live in IndexedDB,
and the PDF is built on your machine. Nothing you type is transmitted or
logged, because there is no server. Download the PDF if you need a record.

## Deployment

The production build is a static bundle, so any static host works. On Vercel,
import the repository, use `npm run build` as the build command, and set
`dist` as the output directory. No environment variables are required.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for local
setup, the style guide, commit format, and the pull request process, and
follow the [Code of Conduct](CODE_OF_CONDUCT.md).

- Bugs: [bug report template](https://github.com/bilalmlkdev/papora/issues/new?template=bug_report.yml)
- Ideas: [feature request template](https://github.com/bilalmlkdev/papora/issues/new?template=feature_request.yml)
- Security: [security policy](SECURITY.md), never a public issue
- Changelog: [CHANGELOG.md](CHANGELOG.md)

## Author

**Bilal Malik** - solo builder behind Papora and other free tools, based in
Pakistan.

- Portfolio: [bilalmlkdev.vercel.app](https://bilalmlkdev.vercel.app)
- GitHub: [github.com/bilalmlkdev](https://github.com/bilalmlkdev)
- X: [x.com/bilalmlkdev](https://x.com/bilalmlkdev)
- Support the work: [ko-fi.com/bilalmlkdev](https://ko-fi.com/bilalmlkdev)
- Email: **bilalmlkdev@gmail.com**

More free tools: [Readmade](https://github.com/bilalmlkdev/readmade) for your
reading list, [Pickfrompic](https://github.com/bilalmlkdev/pickfrompic) for
color palettes out of any image.

## License

Papora is open source under the [MIT License](LICENSE).

Copyright (c) 2026 Bilal Malik

Free to use, copy, modify, merge, publish, distribute, sublicense, and sell
copies, as long as the copyright notice and permission notice stay intact.
