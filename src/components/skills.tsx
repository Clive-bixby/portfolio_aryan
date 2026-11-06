"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { profile, skillGroups } from "@/lib/site-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-violet py-16 text-white lg:py-28"
    >
      <div className="section-shell relative z-10 flex flex-col gap-10 lg:gap-14">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-ivory">
                {"// PROFICIENCY INVENTORY"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl lg:text-[56px]">
                Technical Skills
              </h2>
              <p className="mt-4 text-base leading-7 text-ivory sm:text-lg sm:leading-8">
                Drawn directly from my resume — grouped by where each layer
                lives in the systems I build.
              </p>
            </div>
            <div>
              <span className="inline-flex rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-lime-bright shadow-card">
                {profile.headline}
              </span>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.title}>
                <article className="flex h-full flex-col justify-between gap-5 rounded-2xl bg-ivory p-6 text-ink shadow-card-lg lg:p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <Icon
                        size={26}
                        strokeWidth={2.2}
                        className={group.iconClass}
                        aria-hidden="true"
                      />
                      <span
                        className={`font-mono text-[11px] font-bold uppercase tracking-wider ${group.iconClass}`}
                      >
                        {group.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight sm:text-xl">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-muted">
                      {group.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-hairline bg-ivory-deep px-2.5 py-1 font-mono text-[11px] font-medium text-ink"
                      >
                        {skill}
                      </span>
                    ))}
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
