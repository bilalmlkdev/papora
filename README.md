# Papora

Free invoice and receipt maker by **Bilal Malik** ([bilalmlkdev](https://github.com/bilalmlkdev)).

Fill in your details, watch the document build live, and download a print-ready PDF. No account, no server, no fees.

**Live:** papora.vercel.app (deploy on Vercel)
**Repo:** [github.com/bilalmlkdev/papora](https://github.com/bilalmlkdev/papora)

## What it does

- **Invoices** - company/client details, line items, tax, payment info, terms, thank-you note, custom fields
- **Receipts** - same flow for payment receipts
- **Live preview** - the PDF updates as you type
- **PDF export** - client-side rendering with `@react-pdf/renderer`, multiple document themes
- **Currencies** - country picker with flags and symbols
- **Free forever** - no signup, no limits, fully client-side

## Stack

| Layer | Tech |
| --- | --- |
| Framework | Vite + React 19 + React Router 7 |
| Styling | Tailwind CSS v4 |
| PDF | `@react-pdf/renderer` |
| Icons | lucide-react |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Serve production build |
| `npm run lint` | ESLint |

## Routes

| Route | Description |
| --- | --- |
| `/` | Landing page |
| `/documents` | Invoice + receipt editor |

## License

Private - All rights reserved.
