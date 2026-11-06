"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { projects } from "@/lib/site-data";

const accentStyles = {
  cobalt: {
    header: "bg-cobalt",
    label: "text-cobalt",
    link: "text-cobalt hover:text-cobalt-bright",
    chip: "border-cobalt/25"
  },
  violet: {
    header: "bg-violet",
    label: "text-violet",
    link: "text-violet hover:text-violet-bright",
    chip: "border-violet/25"
  },
  coral: {
    header: "bg-coral",
    label: "text-coral-deep",
    link: "text-coral-deep hover:text-coral",
    chip: "border-coral/25"
  }
} as const;

export function Projects() {
  return (
    <section id="projects" className="w-full bg-ivory py-16 lg:py-28">
      <div className="section-shell flex flex-col gap-10 lg:gap-14">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-violet">{"// SELECTED BUILDS"}</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest text-ink sm:text-5xl lg:text-[56px]">
              Featured Engineering Projects
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Systems built end to end — real authentication, real permissions,
              and real data pipelines. Each repository below is the source of
              truth for its stack.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {projects.map((project) => {
            const accent = accentStyles[project.accent];
            return (
              <StaggerItem key={project.name}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card-lg transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1">
                  {/* visual header — output-style readout */}
                  <div className={`relative flex h-44 items-stretch p-4 ${accent.header}`}>
                    <div className="my-auto flex w-full flex-col justify-between gap-2 rounded-lg bg-obsidian p-4 font-mono text-[11px] text-ivory">
                      <div className="flex items-center justify-between text-dark-muted">
                        <span>{project.kind}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-lime-bright" />
                      </div>
                      <p className="text-[12px] leading-5 text-ivory">
                        $ {project.stack.slice(0, 3).join(" · ")} — verified in
                        source
                      </p>
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex flex-1 flex-col gap-5 p-6 lg:p-7">
                    <div>
                      <p
                        className={`font-mono text-[11px] font-bold uppercase tracking-wider ${accent.label}`}
                      >
                        {project.kind}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-muted">
                        {project.summary}
                      </p>
                    </div>

                    <div className="space-y-3 border-l-2 border-hairline pl-4">
                      <p className="text-[13px] leading-6 text-muted">
                        <span className="font-semibold text-ink">
                          The gap:{" "}
                        </span>
                        {project.problem}
                      </p>
                      <p className="text-[13px] leading-6 text-muted">
                        <span className="font-semibold text-ink">
                          I built:{" "}
                        </span>
                        {project.contribution}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border bg-ivory px-2.5 py-1 font-mono text-[11px] font-medium text-muted ${accent.chip}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`focus-ring inline-flex items-center gap-1 font-mono text-[13px] font-bold ${accent.link}`}
                    >
                      View Repository
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
