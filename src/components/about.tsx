"use client";

import { Reveal } from "@/components/motion";
import { aboutNarrative, education, links } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="w-full bg-ivory py-16 lg:py-28">
      <div className="section-shell grid items-stretch gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
        {/* education card */}
        <Reveal>
          <aside className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-ivory-deep p-7 shadow-card-xl lg:p-9">
            <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider">
              <span className="text-ink">ALUMNUS PROFILE</span>
              <span className="rounded bg-white px-2 py-1 text-cobalt">
                {education.duration.split("–")[1]?.trim() ?? "2024"}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cobalt font-display text-3xl font-extrabold text-white shadow-card">
                AY
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {education.school}
                </h3>
                <p className="mt-1 font-mono text-[13px] font-medium text-muted">
                  {education.degree} · {education.duration}
                </p>
                <p className="font-mono text-[13px] font-medium text-muted">
                  {education.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 rounded-xl bg-white p-5 font-mono text-[12px] text-ink shadow-card">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">INSTITUTION</span>
                <span className="text-right font-bold">
                  IIT Roorkee
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">DEGREE</span>
                <span className="text-right font-bold">B.Tech, {education.duration}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted">STATUS</span>
                <span className="text-right font-bold text-cobalt">
                  Graduated 2024
                </span>
              </div>
            </div>
          </aside>
        </Reveal>

        {/* narrative column */}
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-between gap-10">
            <div>
              <p className="eyebrow text-violet">
                {"// BACKGROUND & ENGINEERING PHILOSOPHY"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-5xl">
                {aboutNarrative.title}
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-8 text-muted sm:text-lg">
                {aboutNarrative.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-bold text-ivory shadow-card transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-cobalt"
              >
                Latest Resume (PDF)
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-lg border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                All repositories on GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
