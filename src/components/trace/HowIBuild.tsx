import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { layers } from "@/content/layers";
import { sections } from "@/content/sections";
import { TraceExplorer } from "./TraceExplorer";

const HEADING_ID = "how-i-build-heading";

/** Section 02: what happens between a click and the database, layer by layer. */
export function HowIBuild() {
  const { id, number, title } = sections.howIBuild;

  return (
    <Section
      id={id}
      labelledBy={HEADING_ID}
      tone="band"
      className="mt-5 lg:mt-2.5"
      containerClassName="py-7.5 lg:py-14.5"
    >
      <TraceExplorer layers={layers}>
        <SectionLabel
          number={number}
          title={title}
          tone="band"
          className="mb-3.5 lg:mb-5.5"
        />
        <h2
          id={HEADING_ID}
          className="font-display text-[2.125rem] leading-[1.05] text-ink lg:text-[3rem] lg:leading-[1.02]"
        >
          What happens
          <br />
          when you click?
        </h2>
        <p className="mt-3 text-[0.84375rem] leading-[1.75] text-ink-muted lg:mt-4 lg:max-w-[44ch] lg:text-[0.90625rem] lg:leading-[1.8]">
          <Copy
            text={{
              compact:
                "Any feature, any product: a button is the visible end of a chain that runs through eight layers. Tap trace to watch it travel, or tap a layer to read it.",
              full: "Any feature, any product: a button is the visible end of a chain that runs through eight layers. Press the button to watch the request travel — or click a layer to read what I actually do there.",
            }}
          />
        </p>
      </TraceExplorer>
    </Section>
  );
}
