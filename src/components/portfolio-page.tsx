"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { OpsPilotDeepDive } from "@/components/opspilot";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export function PortfolioPage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Experience />
      <OpsPilotDeepDive />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
