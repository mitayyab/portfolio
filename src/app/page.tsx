import { Contact } from "@/components/contact/Contact";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/hero/Hero";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { Skills } from "@/components/skills/Skills";
import { HowIBuild } from "@/components/trace/HowIBuild";
import { SelectedWork } from "@/components/work/SelectedWork";
import { buildStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={buildStructuredData()} />
      <SkipLink />
      <SiteHeader />
      <main id="content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <HowIBuild />
        <ExperienceSection />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
