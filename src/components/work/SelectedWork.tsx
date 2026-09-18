import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/content/projects";
import { sections } from "@/content/sections";
import { ProjectBlock } from "./ProjectBlock";

const HEADING_ID = "work-heading";

/** Section 01: the three shipped products. */
export function SelectedWork() {
  const { id, number, title } = sections.work;

  return (
    <Section
      id={id}
      labelledBy={HEADING_ID}
      containerClassName="pt-7.5 lg:pt-14.5"
    >
      <SectionLabel
        number={number}
        title={title}
        className="mb-3.5 lg:mb-6.5"
      />

      <h2
        id={HEADING_ID}
        className="mb-1 font-display text-[2.125rem] leading-[1.05] text-text lg:-mt-2.5 lg:mb-1.5 lg:text-[3.125rem] lg:leading-[1.02]"
      >
        Real products,
        <br className="lg:hidden" /> real problems
      </h2>
      <p className="mb-5.5 text-[0.8125rem] text-muted lg:mb-10.5 lg:text-[0.875rem]">
        <Copy
          text={{
            compact: "Three products in production. The links are live.",
            full: "Three products in production. Visit any of them — the links are live.",
          }}
        />
      </p>

      <div>
        {projects.map((project, index) => (
          <ProjectBlock
            key={project.name}
            project={project}
            flip={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}
