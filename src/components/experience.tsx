"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { experience } from "@/lib/site-data";

export function Experience() {
  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-cobalt py-16 text-white lg:py-28"
    >
      {/* oversized watermark glyph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-10 select-none font-display text-[220px] font-extrabold leading-none tracking-display text-white/5"
      >
        CUR8R
      </div>

      <div className="section-shell relative z-10 flex flex-col gap-10 lg:gap-14">
        {/* masthead */}
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow flex items-center gap-2 text-[#CAD3FF]">
                <span className="inline-block h-2 w-2 rounded-full bg-white" />
                ENGINEERING LOG // {experience.period}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl lg:text-[56px]">
                {experience.company} —<br />
                {experience.role}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#CAD3FF] sm:text-lg sm:leading-8">
                {experience.domain} {experience.mode} role.{" "}
                Stack in production: {experience.stack.join(" · ")}.
              </p>
            </div>
            <div className="rounded-xl bg-obsidian p-5 font-mono text-[11px] font-medium text-[#CAD3FF] shadow-card-violet">
              <p className="uppercase tracking-widest text-dark-muted">FOCUS AREAS</p>
              <ul className="mt-3 space-y-1.5">
                <li>· full-stack feature delivery</li>
                <li>· document &amp; embedding pipelines</li>
                <li>· web scraping &amp; LLM workflows</li>
                <li>· production migrations &amp; APIs</li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* verified workstream cards */}
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {experience.highlights.map((item, index) => (
            <StaggerItem key={item.title}>
              <article className="flex h-full flex-col justify-between gap-4 rounded-2xl bg-ivory p-6 text-ink shadow-card-lg lg:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-cobalt">
                      FOCUS {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded bg-ivory-deep px-2 py-0.5 font-mono text-[11px] font-semibold uppercase text-muted">
                      {item.tags[0]}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-ivory-deep px-2.5 py-1 font-mono text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
