"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";
import { incidentPresets, opspilot } from "@/lib/site-data";

/**
 * OpsPilot AI deep dive.
 * The incident sandbox is an interactive demo running on clearly-labelled
 * simulated data — it demonstrates the retrieval → grounded answer flow,
 * not a live deployment.
 */
export function OpsPilotDeepDive() {
  const [activeId, setActiveId] = useState(incidentPresets[0].id);
  const active = incidentPresets.find((p) => p.id === activeId) ?? incidentPresets[0];

  return (
    <section
      id="opspilot"
      className="w-full bg-obsidian py-16 text-ivory lg:py-28"
    >
      <div className="section-shell flex flex-col gap-10 lg:gap-14">
        {/* header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow flex items-center gap-2 text-lime-bright">
                <span className="inline-block h-2 w-2 rounded-full bg-lime-bright" />
                FLAGSHIP PROJECT // RAG ENGINE
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tightest sm:text-5xl lg:text-[56px]">
                OpsPilot AI
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-dark-muted sm:text-lg sm:leading-8">
                {opspilot.summary}
              </p>
            </div>
            <div className="flex max-w-md flex-wrap content-start gap-2">
              {opspilot.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-obsidian-panel px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-ivory"
                >
                  {tech}
                </span>
              ))}
              <a
                href={opspilot.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-full bg-cobalt px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cobalt-bright"
              >
                View Repository →
              </a>
            </div>
          </div>
        </Reveal>

        {/* architecture readout — mirrors the actual repo layout */}
        <Reveal>
          <div className="rounded-2xl border border-obsidian-panel bg-obsidian-card p-5 shadow-card-cobalt-lg lg:p-8">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-lime-bright">
                PIPELINE // HOW OPSPILOT GROUNDS AN ANSWER
              </p>
              <p className="hidden font-mono text-[11px] text-dark-muted sm:block">
                VERIFIED FROM SOURCE · Express modules: ai / auth / documents /
                logs / tickets
              </p>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
              {opspilot.architecture.map((step) => (
                <div
                  key={step.stage}
                  className="flex flex-col justify-between gap-3 rounded-xl bg-obsidian p-5 transition-transform hover:-translate-y-1"
                >
                  <p className="font-mono text-[11px] font-bold text-lime-bright">
                    {step.stage}
                  </p>
                  <h3 className="font-display text-base font-bold text-ivory sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-dark-muted">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[11px] text-dark-muted">
              {opspilot.modules.map((mod) => (
                <span key={mod}>· {mod}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* interactive incident sandbox */}
        <Reveal>
          <div className="rounded-2xl bg-obsidian-card p-5 shadow-card-cobalt-lg lg:p-8">
            <div className="flex flex-col items-start justify-between gap-3 pb-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-lg font-bold text-ivory">
                  Incident Retrieval Sandbox
                </p>
                <p className="font-mono text-[11px] text-dark-muted">
                  Pick a simulated incident to replay the retrieval → grounded
                  answer flow
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded bg-obsidian px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-lime-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-bright" />
                Simulated data — demo of the retrieval flow
              </span>
            </div>

            {/* presets */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {incidentPresets.map((preset) => {
                const isActive = preset.id === activeId;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setActiveId(preset.id)}
                    aria-pressed={isActive}
                    className={`focus-ring rounded-xl border p-5 text-left transition-all ${
                      isActive
                        ? "border-cobalt-bright bg-obsidian"
                        : "border-obsidian-panel bg-obsidian opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-lime-bright">
                        INCIDENT SAMPLE
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold ${preset.severityClass}`}
                      >
                        {preset.severity}
                      </span>
                    </div>
                    <p className="text-[15px] font-bold text-ivory">
                      {preset.label}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* output readout */}
            <div className="mt-6 rounded-xl bg-obsidian p-5">
              <div className="flex flex-col items-start justify-between gap-2 font-mono text-[11px] sm:flex-row sm:items-center">
                <p className="font-semibold uppercase tracking-wider text-ivory">
                  RETRIEVED CONTEXT · TOP-K MATCH
                </p>
                <p className="font-bold text-lime-bright">{active.score}</p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {/* retrieval snippet */}
                <div className="flex flex-col justify-between gap-3 rounded-lg bg-obsidian-card p-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-dark-muted">
                    <span>{active.source}</span>
                    <span className="font-bold text-[#CAD3FF]">VECTOR MATCH</span>
                  </div>
                  <p className="font-mono text-[13px] leading-6 text-dark-muted">
                    {active.retrieval}
                  </p>
                  <p className="font-mono text-[10px] text-lime-bright">
                    → chunked · embedded · stored in PostgreSQL via pgvector
                  </p>
                </div>

                {/* grounded answer */}
                <div className="flex flex-col justify-between gap-3 rounded-lg bg-obsidian-card p-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-dark-muted">
                    <span>GROUNDED ANSWER</span>
                    <span className="font-bold text-lime-bright">
                      ✓ CITATION BACKED
                    </span>
                  </div>
                  <p className="text-[15px] leading-7 text-ivory">
                    {active.answer}
                  </p>
                  <p className="font-mono text-[10px] text-dark-muted">
                    · source citations are attached to answers in the product —
                    this demo mirrors that grounded flow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
