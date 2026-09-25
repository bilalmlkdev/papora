# Contributing to Papora

Thanks for taking the time to contribute.

The following is a set of guidelines for contributing to Papora. By participating in this project you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of contents

- [Ways to contribute](#ways-to-contribute)
- [Local development setup](#local-development-setup)
- [Project structure](#project-structure)
- [Available scripts](#available-scripts)
- [Style guide](#style-guide)
- [Commit convention](#commit-convention)
- [Pull request process](#pull-request-process)
- [Reporting bugs](#reporting-bugs)
- [Suggesting features](#suggesting-features)
- [License](#license)

## Ways to contribute

- Report bugs and layout issues
- Suggest or build new features
- Improve documentation
- Fix issues labeled `good first issue`
- Review open pull requests

## Local development setup

### Prerequisites

- Node.js 20.19+ or 22+ (Vite requirement)
- npm 10+
- Git

Papora is fully client-side. There is no backend, no database, and no
environment file to configure.

### Steps

1. Fork the repository and clone your fork:

```bash
git clone https://github.com/<your-username>/papora.git
cd papora
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

The app now runs at `http://localhost:5173`. The landing page is at `/` and the
editor is at `/documents`.

## Project structure

```text
src/
  main.jsx             Entry point
  Root.jsx             App shell and routes
  Root.css             Global styles and font imports
  index.css            Tailwind entry
  pages/
    WorkspacePage.jsx  Mounts the invoice or receipt workspace
  components/
    landing/           Landing page, phone demo, device frame
    shell/             Top bar, side navigation, brand mark
    shared/            Dialogs, inputs, dropdowns, date and currency helpers
    invoice/           editor, pdf, utils, and default data for invoices
    receipt/           Same layout for receipts
  assets/              Images used by the landing page and editor
```

State lives in React context (`InvoiceProvider`, `ReceiptProvider`). Uploaded
logos and signatures are stored in the browser through IndexedDB, and the PDF
is rendered entirely on the client.

## Available scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the Vite dev server        |
| `npm run build`   | Production build to `dist/`      |
| `npm run preview` | Preview the production build     |
| `npm run lint`    | Run ESLint over the project      |

Lint and build must both pass before a pull request is merged.

## Style guide

- Follow the formatting and naming already used in the file you are editing
- ESLint config lives in `eslint.config.js`. Warnings are allowed, errors are not
- Keep new files in plain JavaScript to match the codebase
- Keep components focused. Shared UI belongs in `src/components/shared`
- No em dashes in code comments or copy. Use a simple hyphen
- UI changes should stay responsive (mobile breakpoint included)

## Commit convention

This repo uses [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat: add discount field to the invoice editor
fix: prevent due date from preceding issue date
docs: explain PDF export setup
refactor: extract currency picker into a shared component
chore: update dependencies
```

Breaking changes get a `!` marker: `feat!: drop the legacy theme names`.

## Pull request process

1. Create a branch from `main`:

```bash
git checkout -b feature/my-change
```

2. Make your change and add tests only if the repo gains a test setup later
3. Verify locally before pushing:

```bash
npm run lint
npm run build
```

4. Push your branch and open a PR against `main`
5. Fill in the PR template and attach screenshots or a short clip for UI changes
6. Keep PRs focused. One change per PR is easier to review and merge

CI runs lint and build on every pull request. Your PR cannot merge until the
checks are green.

## Reporting bugs

Use the **Bug report** issue template and include:

- What you expected vs what happened
- Steps to reproduce
- Browser and OS
- Screenshots or console errors

Search existing issues first to avoid duplicates.

## Suggesting features

Use the **Feature request** issue template. Describe the problem first, then the solution you have in mind. Feature requests with a clear use case are the fastest to get accepted.

## License

By contributing you agree that your contributions are licensed under the [MIT License](LICENSE), the same license that covers the project.

If you have questions, open an issue and mention `@bilalmlkdev`.
