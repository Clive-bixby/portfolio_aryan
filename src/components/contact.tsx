"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import { links, socialLinks } from "@/lib/site-data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.emailAddress);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-coral-deep py-16 text-white lg:py-28"
    >
      <div className="section-shell relative z-10 flex flex-col gap-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-ivory">
              {"// OPEN TO OPPORTUNITIES"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl lg:text-[64px]">
              Have an interesting engineering problem?
              <br />
              <span className="font-light italic text-[#FFC9B6]">
                Let&rsquo;s build something remarkable.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ivory sm:text-lg sm:leading-8">
              Currently open to full-time software engineering roles —
              full-stack, backend, and AI-integrated product work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col items-stretch justify-between gap-6 rounded-2xl bg-ink p-6 shadow-card-xl lg:flex-row lg:items-center lg:p-8">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={copyEmail}
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 font-mono text-sm font-bold text-ink shadow-card transition hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                {copied ? "Copied! ✓" : links.emailAddress}
              </button>
              <a
                href={links.phoneHref}
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-obsidian px-4 py-3 font-mono text-[13px] text-ivory transition-colors hover:text-lime-bright"
              >
                {links.phone}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[13px]">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-lg bg-obsidian px-4 py-2 text-ivory transition-colors hover:text-lime-bright"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-violet px-4 py-2 font-bold text-white transition-colors hover:bg-violet-bright"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
