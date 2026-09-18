import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/hero/Hero";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { Skills } from "@/components/skills/Skills";
import { HowIBuild } from "@/components/trace/HowIBuild";
import { SelectedWork } from "@/components/work/SelectedWork";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <HowIBuild />
        <ExperienceSection />
        <Skills />
      </main>
    </>
  );
}
