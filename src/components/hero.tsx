"use client";

import { ArrowDown } from "lucide-react";
import { CatWindow } from "@/components/cat-window";
import { MotionA } from "@/components/motion";
import { links, profile } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-ivory pb-16 pt-28 lg:pb-24 lg:pt-36"
    >
      {/* ambient colour field — one soft wash per corner, per Stitch reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 -top-48 h-[640px] w-[640px] rounded-full bg-[#B8C8F5]/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] rounded-full bg-[#E0C8FA]/30 blur-[140px]"
      />

      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
        {/* narrative column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-card">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet" />
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
              {profile.availability}
            </span>
          </div>

          <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-widest text-violet">
            {"// ARYAN YADAV · "}{profile.credential}
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-display text-ink sm:text-6xl lg:text-[84px]">
            Building things
            for the web,{" "}
            <span className="font-light italic text-cobalt">&amp; beyond.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MotionA
              href="#work"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 0, y: 0 }}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-cobalt px-5 py-3 text-sm font-bold text-white shadow-card transition-colors hover:bg-cobalt-bright"
            >
              Work Experience
              <ArrowDown size={16} />
            </MotionA>
            <MotionA
              href="#opspilot"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 0, y: 0 }}
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-bold text-ivory shadow-card transition-colors hover:bg-cobalt"
            >
              OpsPilot Deep Dive
            </MotionA>
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ivory-deep px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              View Projects
            </a>
            <a
              href={links.mailto}
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Email Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] font-medium text-muted">
            <span>FastAPI · Node.js · pgvector · React</span>
            <span className="hidden text-hairline sm:inline" aria-hidden="true">|</span>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring transition-colors hover:text-cobalt"
            >
              github/{links.github.split("/").pop()}
            </a>
            <span className="hidden text-hairline sm:inline" aria-hidden="true">|</span>
            <a
              href={links.mailto}
              className="focus-ring transition-colors hover:text-cobalt"
            >
              {links.emailAddress}
            </a>
          </div>
        </div>

        {/* interactive cat window column */}
        <div className="w-full">
          <CatWindow />
        </div>
      </div>
    </section>
  );
}
