import React from "react";
import { ArrowUpRight, Eye, FileDown, Gift, MapPin, Shield } from "lucide-react";
import PhoneWalkthrough from "./PhoneWalkthrough.jsx";
import DeviceFrame from "./DeviceFrame.jsx";
import BrandMark from "../shell/BrandMark.jsx";
import editorInv from "../../assets/editor-inv.png";
import pdfInv from "../../assets/pdf-inv.png";
import wallpaper3 from "../../assets/home.webp";

const btnBlack =
  "inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-neutral-800 cursor-pointer";

const LINKS = {
  github: "https://github.com/bilalmlkdev",
  portfolio: "https://bilalmlkdev.vercel.app",
  twitter: "https://x.com/bilalmlkdev",
  coffee: "https://ko-fi.com/bilalmlkdev",
  bugReport:
    "mailto:bilalmlkdev@gmail.com?subject=Papora%20Bug%20Report&body=Please%20describe%20the%20bug%20and%20how%20to%20reproduce%20it.",
};

const FOOTER_TOOLS = [
  { name: "Readmade", desc: "Your reading list, organized", url: "https://github.com/bilalmlkdev/readmade" },
  { name: "Pickfrompic", desc: "Pull colors from any image", url: "https://github.com/bilalmlkdev/pickfrompic" },
];

const FOOTER_LINKS = [
  { label: "GitHub", url: LINKS.github },
  { label: "Twitter", url: LINKS.twitter },
  { label: "Buy me a coffee", url: LINKS.coffee },
  { label: "Report a bug", url: LINKS.bugReport },
];

const footLinkClass =
  "group inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900";

const HOW_IT_WORKS = [
  "Open the editor and put down the basics - your business, who you are billing, and what you charge. The form asks for only what belongs on the document.",
  "Every line you type lands on the page beside you. No preview button, no guesswork - what you see is exactly what downloads.",
  "Totals, dates, notes, payment details - adjust any of it until it reads right, and the document keeps up as you go.",
  "Hit download and a print-ready PDF is yours. Blank page to finished invoice, all inside one tab.",
];

const WALLPAPER_MASK = {
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 0%, #000 35%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.35) 72%, transparent 90%)",
  maskImage:
    "linear-gradient(to bottom, #000 0%, #000 35%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.35) 72%, transparent 90%)",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

const SHOWCASE = [
  {
    label: "Editor",
    title: "Built as you type",
    desc: "Each field you touch updates the document in real time.",
    image: editorInv,
    alt: "Papora invoice editor",
    extraPad: true,
  },
  {
    label: "PDF",
    title: "One click to a finished file",
    desc: "Take away a crisp, print-ready PDF the moment it looks right.",
    image: pdfInv,
    alt: "Papora invoice PDF preview",
  },
];

const FEATURES = [
  { icon: Eye, label: "Updates live" },
  { icon: FileDown, label: "Clean PDF export" },
  { icon: Shield, label: "Private by design" },
  { icon: Gift, label: "Free forever" },
];

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white text-neutral-600">
      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 w-full max-md:h-dvh bg-white">
          <div className="relative overflow-hidden bg-white max-md:h-full">
            <img
              src={wallpaper3}
              alt=""
              className="block w-full scale-[1.03] max-md:h-full max-md:object-cover max-md:object-top md:h-auto"
              style={WALLPAPER_MASK}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[50%]"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.55) 32%, #ffffff 52%, #ffffff 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-white" aria-hidden="true" />
          </div>
        </div>

        <header className="relative z-10">
          <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-5 md:px-10 md:py-7">
            <BrandMark/>
          </div>
        </header>

        <div className="relative z-10 flex min-h-[52dvh] flex-col items-center justify-center px-6 pt-8 text-center md:min-h-[48dvh] md:pt-12">
          <p className="text-xs text-neutral-600 bg-white/30 bg-transparent py-1 px-3 rounded-full">Free - no sign-up, no account</p>
          <h1 className="mt-4 max-w-2xl text-6xl leading-[1] text-black">
            Invoices that look sharp, <br /> made in minutes
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-normal text-neutral-800 md:max-w-lg">
            Type your details, watch the page build itself, and download a clean
            PDF the moment it looks right.
          </p>
          <div className="mt-8">
            <button type="button" onClick={() => onNavigate("app")} className={btnBlack}>
              Start an invoice
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center pb-14 pt-4 md:pb-20 md:pt-6">
          <DeviceFrame>
            <PhoneWalkthrough />
          </DeviceFrame>
        </div>
      </section>

      <div className="relative z-10 bg-white">
        <section className="">
          <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">

            <div className="space-y-10">
              {HOW_IT_WORKS.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-2xl leading-snug text-neutral-800  md:leading-snug"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-100 bg-white">
          <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
            <h2 className="text-2xl text-neutral-900 md:text-3xl">
              Everything an invoice needs. Nothing it doesn&apos;t.
            </h2>
            <p className="mt-3 text-xs text-neutral-500">Free - no account, no subscription</p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-600">
              Write the invoice, watch it update live, and walk away with a
              polished PDF - one flow, no steps to skip.
            </p>

            <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-8">
              {SHOWCASE.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-lg text-neutral-900 md:text-xl">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{item.desc}</p>
                  </div>

                  <div className="mt-6 flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white md:min-h-[340px]">
                    <div className="flex flex-1 flex-col justify-end px-4 pt-5">
                      <img src={item.image} alt={item.alt} className="block w-full" />
                      {item.extraPad && (
                        <div
                          className="min-h-[72px] shrink-0 bg-white md:min-h-[88px]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 border-t border-neutral-200 pt-12 md:mt-20 md:grid-cols-4 md:gap-y-0">
              {FEATURES.map((feature) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={feature.label} className="flex flex-col items-center text-center">
                    <FeatureIcon className="h-8 w-8 text-neutral-800" strokeWidth={1.25} />
                    <p className="mt-3 text-sm text-neutral-600">{feature.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
          <h2 className="text-2xl text-neutral-900 md:text-3xl">
            Your first invoice is minutes away
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
            No sign-up wall, no setup - just open the editor and start.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("app")}
            className={`${btnBlack} mt-8`}
          >
            Open the editor
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </section>

        <section>
          <div className="mx-auto max-w-2xl px-6 pb-20 md:pb-28">
            <div className="space-y-10">
              <p className="text-2xl leading-snug text-neutral-800">
                Papora is open source and free for personal use and client work
                alike - no sign-up, no subscription, no fine print.
              </p>
              <p className="text-2xl leading-snug text-neutral-800">
                It exists because invoicing should not need a tutorial: type your
                details, glance at the page, download the PDF. Anyone can run it,
                fork it, or host their own copy.
              </p>
              <p className="text-2xl leading-snug text-neutral-800">
                If it saves you time, a star on GitHub takes a second. If you want
                to back what comes next, the coffee link is right below.
              </p>
              <p className="text-2xl leading-snug text-neutral-800">
                More free open source tools from the same builder -{" "}
                <a
                  href={FOOTER_TOOLS[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                >
                  Readmade
                </a>
                , a reading list that keeps up with you, and{" "}
                <a
                  href={FOOTER_TOOLS[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                >
                  Pickfrompic
                </a>
                , which pulls color palettes out of any image.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-100 bg-white">
          <div className="mx-auto max-w-2xl px-6 py-12 md:py-16">
            <BrandMark className="h-12 w-auto" />

            <div className="mt-8">
              <p className="text-xs text-neutral-400">Made by</p>
              <a
                href={LINKS.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-1.5 text-sm text-neutral-900 transition-colors hover:text-neutral-600"
              >
                Bilal Malik
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
                <MapPin className="h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                Pakistan
              </p>
            </div>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  More free tools
                </p>
                <ul className="mt-4 space-y-4">
                  {FOOTER_TOOLS.map((tool) => (
                    <li key={tool.url}>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footLinkClass}
                      >
                        {tool.name}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-opacity group-hover:opacity-100" />
                      </a>
                      <p className="mt-0.5 text-xs text-neutral-400">{tool.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Connect
                </p>
                <ul className="mt-4 space-y-3">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                        rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className={footLinkClass}
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-opacity group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-neutral-100 pt-8">
              <p className="text-xs leading-relaxed text-neutral-400">
                © {new Date().getFullYear()} Papora - open source and free to use
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
