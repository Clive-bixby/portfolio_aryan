"use client";

import { Reveal } from "@/components/motion";
import { footerNote, links } from "@/lib/site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-obsidian text-ivory">
      <div className="section-shell flex flex-col gap-10 py-14 lg:py-20">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-lime-bright">
                {"// TERMINAL OUTPUT"} · {year}
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tightest sm:text-4xl">
                {footerNote.title}
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-dark-muted">
                {footerNote.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-violet px-5 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-violet-bright"
              >
                Resume [PDF]
              </a>
              <a
                href={links.mailto}
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-ivory-deep"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </Reveal>

        <div className="h-px w-full bg-white/10" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-8 text-[13px] sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <p className="eyebrow text-lime-bright">Index</p>
            <a href="#top" className="w-fit text-ivory/80 transition hover:text-white">
              Home
            </a>
            <a href="#work" className="w-fit text-ivory/80 transition hover:text-white">
              Work
            </a>
            <a href="#projects" className="w-fit text-ivory/80 transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="w-fit text-ivory/80 transition hover:text-white">
              Skills
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="eyebrow text-lime-bright">Elsewhere</p>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-ivory/80 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-ivory/80 transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={links.mailto}
              className="w-fit text-ivory/80 transition hover:text-white"
            >
              {links.emailAddress}
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="eyebrow text-lime-bright">Colophon</p>
            <p className="text-ivory/60">
              Aryan Yadav · B.Tech, IIT Roorkee. Built with Next.js, Tailwind
              CSS, and one vigilant cat.
            </p>
          </div>
        </div>

        <p className="font-mono text-[11px] text-dark-muted">
          © {year} Aryan Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
