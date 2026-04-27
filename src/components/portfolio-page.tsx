"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Copy,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  ServerCog,
  Sparkles,
  Terminal,
  X
} from "lucide-react";
import { useState } from "react";
import {
  navItems,
  profile,
  links,
  projects,
  skillGroups,
  socialLinks,
  valueProps
} from "@/lib/site-data";
import { MotionA, MotionDiv, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ThemeToggle } from "@/components/theme-toggle";

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.emailAddress);
      setToastMessage("Email copied to clipboard");
    } catch {
      setToastMessage(links.emailAddress);
    }

    window.setTimeout(() => setToastMessage(""), 2400);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {toastMessage ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 border border-tertiary/45 bg-surface-raised px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground shadow-panel"
        >
          {toastMessage}
        </div>
      ) : null}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border-soft bg-background/82 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a
            href="#top"
            className="focus-ring font-display text-sm font-semibold uppercase tracking-[0.24em] text-foreground"
          >
            Aryan Yadav
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring font-mono text-xs uppercase tracking-[0.18em] text-muted transition hover:text-tertiary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 border border-border-soft bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition hover:border-tertiary/60 hover:bg-surface-high"
            >
              View Resume
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-surface text-foreground transition hover:border-tertiary/60 hover:bg-surface-high"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className="border-t border-border-soft bg-background/96 px-5 py-5 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition hover:text-tertiary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-fit items-center gap-2 border border-border-soft bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition hover:border-tertiary/60 hover:bg-surface-high"
              >
                View Resume
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section id="top" className="section-shell flex min-h-screen items-center pb-20 pt-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow">Hello, World.</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="block pt-3 text-3xl font-light leading-tight text-muted sm:text-4xl lg:text-5xl">
                {profile.role}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted">
              {profile.subheadline}
            </p>
            <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row">
              <MotionA
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="focus-ring inline-flex items-center justify-center gap-2 bg-foreground px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-background transition hover:bg-primary"
              >
                View Projects
                <ArrowRight size={16} />
              </MotionA>
              <MotionA
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="focus-ring inline-flex items-center justify-center gap-2 border border-border-soft bg-surface/80 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition hover:border-tertiary/60 hover:bg-surface-high"
              >
                View Resume
                <ExternalLink size={16} />
              </MotionA>
              <MotionA
                href={links.email}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="focus-ring inline-flex items-center justify-center gap-2 border border-border-soft px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition hover:border-tertiary/60 hover:bg-surface"
              >
                <Mail size={16} />
                Email Me
              </MotionA>
              <button
                type="button"
                onClick={copyEmail}
                className="focus-ring inline-flex items-center justify-center gap-2 border border-border-soft bg-surface/70 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition hover:border-tertiary/60 hover:bg-surface-high"
              >
                <Copy size={15} />
                Copy Email
              </button>
            </div>
            <p className="mt-4 font-mono text-xs text-muted">
              Prefer your mail app?{" "}
              <a
                href={links.mailto}
                className="focus-ring text-tertiary transition hover:text-primary"
              >
                Use default email client
              </a>
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <MotionDiv
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-xl border border-border-soft bg-surface-raised/78 p-5 shadow-panel backdrop-blur"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-tertiary via-primary to-violet opacity-80" />
              <div className="mb-6 flex items-center justify-between border-b border-border-soft pb-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-tertiary/70" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                  <Terminal size={14} className="text-tertiary" />
                  system.ts
                </div>
              </div>

              <div className="min-w-0 break-words font-mono text-sm leading-7 text-muted">
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">developer</span> = {"{"}
                </p>
                <p className="pl-5">
                  name: <span className="text-tertiary">{"'Aryan Yadav'"}</span>,
                </p>
                <p className="pl-5">
                  focus:{" "}
                  <span className="text-tertiary">
                    {"['Full-Stack', 'System Design', 'Scalability']"}
                  </span>
                  ,
                </p>
                <p className="pl-5">
                  location: <span className="text-tertiary">{"'India'"}</span>,
                </p>
                <p className="pl-5">
                  readyForChallenges: <span className="text-primary">true</span>
                </p>
                <p>{"};"}</p>
                <p className="mt-5 text-border">{"/* Initialize product systems */"}</p>
                <p>
                  developer.<span className="text-primary">build</span>();
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["Backend", "Secure APIs"],
                  ["Cloud", "Deploy-ready"],
                  ["AI", "Product-aware"]
                ].map(([label, value]) => (
                  <div key={label} className="border border-border-soft bg-background/45 p-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs text-tertiary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                &gt; system.status: online
              </div>
            </MotionDiv>
          </Reveal>
        </div>
      </section>

      <section id="about" className="section-shell py-20">
        <div className="grid gap-8 border-y border-border-soft py-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Secure, scalable products from frontend to backend.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg font-light leading-8 text-muted">{profile.intro}</p>
            <div className="mt-8 border border-border-soft bg-surface/70 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border-soft bg-surface-high text-tertiary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    {profile.education.school}
                  </p>
                  <p className="mt-1 text-muted">{profile.education.degree}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-tertiary">
                    {profile.education.location} / {profile.education.duration}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section-shell py-20">
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Core technologies for production-grade systems."
          description="Grouped skills across frontend, backend, databases, cloud deployment, and engineering fundamentals."
          icon={<ServerCog size={22} />}
        />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={group.title}>
                <MotionDiv
                  whileHover={{ y: -6 }}
                  className="h-full border border-border-soft bg-surface/72 p-6 shadow-glow transition-colors hover:border-tertiary/45"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-border-soft bg-surface-high text-tertiary">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-border-soft bg-background/55 px-3 py-1.5 font-mono text-xs text-muted transition hover:border-tertiary/45 hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </MotionDiv>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section id="projects" className="section-shell py-20">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Architectural projects with recruiter-readable impact."
          description="Full-stack and AI systems showing authentication, data workflows, scalable backend design, cloud readiness, and product-focused engineering."
          icon={<BriefcaseBusiness size={22} />}
        />
        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.name}>
                <MotionDiv
                  whileHover={{ y: -7 }}
                  className="flex h-full flex-col border border-border-soft bg-surface/78 p-7 shadow-glow transition-colors hover:border-tertiary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center border border-border-soft bg-surface-high text-tertiary">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">{project.summary}</p>
                  <div className="mt-5 border-l border-tertiary/45 pl-4 text-sm leading-6 text-foreground">
                    {project.impact}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-border-soft bg-background/55 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.githubUrl ? (
                    <div className="mt-7">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex w-full items-center justify-center gap-2 border border-border-soft px-3 py-2.5 font-mono text-xs uppercase tracking-[0.13em] text-foreground transition hover:border-tertiary/55 hover:bg-surface-high"
                      >
                        GitHub
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  ) : (
                    <div className="mt-7 h-[42px]" aria-hidden="true" />
                  )}
                </MotionDiv>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="Why Hire Me"
          title="Startup-ready engineering with strong fundamentals."
          description="A focused blend of ownership, clean code, system design, fast learning, and product thinking."
          icon={<Sparkles size={22} />}
        />
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full border border-border-soft bg-surface/68 p-5 transition hover:border-tertiary/45 hover:bg-surface-raised">
                  <Icon size={22} className="text-tertiary" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section id="contact" className="section-shell py-20">
        <Reveal>
          <div className="border border-border-soft bg-surface-raised/78 p-7 shadow-panel sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-foreground sm:text-5xl">
                  Currently open to software engineering opportunities.
                </h2>
                <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-muted">
                  Reach out for full-stack, backend, cloud, or AI-integrated product roles.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  if (link.label === "Email Me") {
                    return (
                      <div key={link.label}>
                        <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring group flex items-center justify-between border border-border-soft bg-background/45 px-4 py-4 text-foreground transition hover:border-tertiary/50 hover:bg-surface-high"
                          >
                            <span className="flex items-center gap-3">
                              <Icon size={18} className="text-tertiary" />
                              <span className="font-mono text-xs uppercase tracking-[0.16em]">
                                {link.label}
                              </span>
                            </span>
                            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                          </a>
                          <button
                            type="button"
                            onClick={copyEmail}
                            className="focus-ring inline-flex items-center justify-center gap-2 border border-border-soft bg-background/45 px-4 py-4 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition hover:border-tertiary/50 hover:bg-surface-high"
                          >
                            <Copy size={15} className="text-tertiary" />
                            Copy Email
                          </button>
                        </div>
                        <a
                          href={links.mailto}
                          className="focus-ring mt-3 inline-flex font-mono text-xs text-muted transition hover:text-tertiary"
                        >
                          Prefer your mail app? Use default email client
                        </a>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="focus-ring group flex items-center justify-between border border-border-soft bg-background/45 px-4 py-4 text-foreground transition hover:border-tertiary/50 hover:bg-surface-high"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} className="text-tertiary" />
                        <span className="font-mono text-xs uppercase tracking-[0.16em]">
                          {link.label}
                        </span>
                      </span>
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border-soft py-10">
        <div className="section-shell flex flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p className="font-display font-semibold uppercase tracking-[0.22em] text-foreground">
            Aryan Yadav
          </p>
          <p className="font-mono text-xs">Built with architectural precision. (c) 2026</p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="focus-ring transition hover:text-tertiary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  icon
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <p className="eyebrow inline-flex items-center gap-2">
          <span className="text-tertiary">{icon}</span>
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      </div>
    </Reveal>
  );
}
