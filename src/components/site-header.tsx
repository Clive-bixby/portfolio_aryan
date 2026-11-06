"use client";

import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
import { links, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-ivory/85 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="focus-ring inline-flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-ink font-display text-sm font-bold text-ivory">
            AY
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink">
            Aryan Yadav
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted transition hover:text-cobalt"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded bg-ink px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory shadow-card transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-cobalt"
          >
            Resume
            <ExternalLink size={13} />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded border border-ink/15 bg-ivory text-ink md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-ink/10 bg-ivory px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded bg-ink px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ivory"
            >
              Resume
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
