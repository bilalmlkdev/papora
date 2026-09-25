<div align="center">

  <a href="https://papora.vercel.app/">
    <img src="https://raw.githubusercontent.com/bilalmlkdev/papora/main/public/android-chrome-512x512.png" alt="Papora logo" width="120" height="120">
  </a>

  # Papora

  Free, open-source invoice and receipt maker. Fill in your details, watch the document build live, <br> and download a print-ready PDF - no account, no server, no fees. Everything runs in your browser.

  [![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-black?style=for-the-badge)](https://papora.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/bilalmlkdev/papora?style=for-the-badge&logo=github&color=yellow)](https://github.com/bilalmlkdev/papora)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

  [![papora Dashboard](https://raw.githubusercontent.com/bilalmlkdev/papora/main/src/assets/preview.png)](https://papora.vercel.app/)
</div>

# The Problem This Solves

Most invoicing tools want an account before you have made a single invoice, and the ones that do let you try push your document through someone else's server to produce the PDF. For a freelancer who needs one clean invoice tonight, that is a lot of ceremony for a page with a name, a client, three line items, and a total.

Papora flips it around. The landing page opens straight into the editor, the document renders beside the form as you type, and the PDF is assembled on your own machine. There is no sign-up, no upload, and no subscription tier hiding the export button - just the document you were going to make anyway.

# What You Actually Get

- **You see the invoice while you type it.** The document on the right updates with every field you touch - no preview button, no refresh, no guessing what the PDF will look like.
- **The PDF is built from the same data you previewed.** Export runs through `@react-pdf/renderer` against the exact context the preview read, so what you approved on screen is what your client opens.
- **Nothing you type ever leaves the device.** No account, no server, no analytics. Uploaded logos and signatures are cached in IndexedDB and stay there.
- **Invoices and receipts share one editor.** Switch between them from the sidebar - same flow, same themes, same currencies, independent documents.
- **Money is formatted properly.** A country picker with flags, codes, and symbols drives every price field, so totals stay consistent across the document.
- **Three page themes, per document.** Light, Paper, and Dark, chosen per invoice or receipt instead of a global setting you forget to change.
- **Custom fields cover the rest.** Invoice numbers, references, tax ids, payment handles - add as many label and value pairs as the document needs.
- **It is free, and the source is right there.** MIT licensed. Fork it, run it for your own business, or change the defaults to your brand.

# How It Works Under the Hood

**The form and the document share one context.** Each editor panel writes into `InvoiceProvider` or `ReceiptProvider`, and the preview component reads the same object. There is no second document model, no diffing, and no synchronization step that can drift - the preview cannot disagree with the export because they are the same data.

**PDF generation never touches a server.** Pressing download hands the document data, theme, and cached images to `@react-pdf/renderer`, which assembles the file in the browser and saves it as a blob named after the document number. The whole reason this app needs no backend is that the hardest part of invoicing - producing the file - was made to run client-side.

**Uploads go to IndexedDB, not to a CDN.** `imageVault.js` is a thin wrapper around the browser's IndexedDB so your logo and signature survive a reload without ever making a network request. It is privacy by construction: there is no endpoint that could receive them.

**Validation runs before export, never after.** The editor checks the invoice number, company name, client name, issue date, due date, and at least one line item, and refuses a due date that precedes the issue date. Receipts get the same treatment plus a rule that the receipt date cannot be in the future. The PDF button is gated on those checks, so a broken document never downloads.

**The editor is a lazy chunk.** The landing page is the default route, and `/documents` loads through `React.lazy`, so the first paint of the marketing page does not pay for the PDF engine.

# The Editor Experience

Three regions: the side navigation, the form column, and the live document.

The form column is a stack of collapsible sections - `SectionFold` - one per document part: invoice basics, your business, the client, branding, line items, payment details, terms, and the thank-you note. Collapsed sections keep the column scannable; the open one owns your focus.

Line items get their own dialog for adds and edits, with quantity, price, and automatic row totals rolling into the calculation section, where a single tax amount is added to the subtotal. Logo and signature uploads preview instantly in the branding section and are stored locally for next time.

The preview is a true A4 page rendered from the same context, so scrolling it is a dress rehearsal for the PDF. Theme changes re-skin both the preview and the export path together - they read the same theme object from `themePresets.js`, which is why they cannot drift.

# Tech Stack

- **Vite 7** + **React 19** - dev server and component model, plain JavaScript throughout
- **React Router 7** - two routes: `/` and `/documents`
- **Tailwind CSS 4** - utility styling through the Tailwind Vite plugin
- **@react-pdf/renderer** - client-side PDF assembly, the only heavy dependency
- **lucide-react** - icon set
- No UI component library, no state library, no backend SDK - React context and hand-built components carry the whole app

# Project Structure

```
src/
├── main.jsx                    entry point, mounts the app
├── Root.jsx                    app shell, routes, lazy loading
├── Root.css                    global styles, fonts, animations
├── index.css                   Tailwind entry
├── pages/
│   └── WorkspacePage.jsx       switches invoice and receipt workspaces
├── components/
│   ├── landing/
│   │   ├── LandingPage.jsx     full landing page: hero, tour, footer
│   │   ├── PhoneWalkthrough.jsx  animated four-step demo
│   │   └── DeviceFrame.jsx     phone frame around the demo
│   ├── shell/
│   │   ├── TopBar.jsx          fixed top navigation, mobile menu
│   │   ├── SideNav.jsx         editor sidebar, document switcher
│   │   └── BrandMark.jsx       Papora logo component
│   ├── shared/
│   │   ├── SectionFold.jsx     collapsible section for editor panels
│   │   ├── FieldDialog.jsx     add a custom field
│   │   ├── ItemDialog.jsx      add or edit a line item
│   │   ├── OptionMenu.jsx      styled select dropdown
│   │   ├── DateInput.jsx       date picker input
│   │   ├── AmountField.jsx     numeric input for prices and quantities
│   │   ├── FlagBadge.jsx       currency flag renderer
│   │   ├── currencyMeta.jsx    currency label and symbol helpers
│   │   ├── flagRegistry.js     currency code to flag mapping
│   │   └── calendarHelpers.js  date formatting and validation
│   ├── invoice/
│   │   ├── InvoiceWorkspace.jsx  layout: sidebar, editor, preview
│   │   ├── editor/             InvoiceForm and its eight panels
│   │   ├── pdf/                PDF page components and theme context
│   │   ├── utils/              export helpers, sheet template, styles
│   │   └── data/               default invoice, themes, currency list
│   └── receipt/
│       ├── ReceiptWorkspace.jsx  receipt layout and editor panels
│       ├── editor/             ReceiptForm, provider, defaults
│       └── utils/              receipt sheet template and export
└── assets/                     images used by landing and editor
```

# Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The landing page is at `/`, the editor at `/documents`.

## Build for Production

```bash
npm run build
npm run preview
```

Deploys cleanly to Vercel with zero configuration - a static Vite build, no server functions, no environment variables required. Lint and build are the two gates: `npm run lint` and `npm run build` both pass on the current tree.

# Known Gaps

Worth knowing about before you rely on this for something critical:

- **Documents do not persist.** Closing the tab discards the invoice unless your browser restores it - by design, since nothing is stored server-side. The PDF is your record; there is no draft system yet.
- **Export typography is Helvetica, screen typography is Inter.** `@react-pdf/renderer` ships the standard PDF fonts, and the export uses Helvetica, so weights and letterforms in the file are close to but not identical to the preview. Invoice and receipt previews deliberately keep Inter for this reason.
- **Tax is one manual amount per document.** The calculation section takes a single tax value that is added to the subtotal - no percentage math, no per-line tax, no multiple tax classes.
- **No test suite yet.** ESLint and a production build are the only automated checks; CI runs exactly those two.
- **Single language, single currency per document.** The interface is English only, there is no currency conversion, and mixing currencies inside one invoice is not supported.

# Contributing

1. Do not add a database, auth, or any server component - this stays fully client-side on purpose.
2. The invoice and receipt sides are mirrors. A fix to one editor panel almost always belongs in the other too.
3. Shared UI goes in `src/components/shared`. If two panels need it, it does not belong inside either panel.
4. No em dashes in copy, comments, or docs - use a plain hyphen.
5. No new npm dependencies without a real reason. The PDF engine earns its weight; almost nothing else will.
6. Keep the preview and the export reading the same context - never introduce a second document model.
7. Follow [Conventional Commits](https://www.conventionalcommits.org/) and run `npm run lint` plus `npm run build` before opening a PR.

Full setup, style guide, and PR process live in [CONTRIBUTING.md](CONTRIBUTING.md). Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

# License (MIT)

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2026 Bilal Malik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
