import { ButtonLink } from "@/components/ui/ButtonLink";
import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { sections } from "@/content/sections";
import { StackLadder } from "./StackLadder";

export function Hero() {
  return (
    <Section
      tone="band"
      className="overflow-hidden"
      containerClassName="relative pt-6.5 pb-8 lg:pb-15.5"
    >
      <div className="relative lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-mono-xs tracking-[0.15em] text-sand uppercase lg:mb-6 lg:gap-2.25 lg:text-mono-md lg:tracking-[0.16em]">
            <span
              aria-hidden="true"
              className="size-1.25 rounded-full bg-sand lg:size-1.5"
            />
            <Copy
              text={{
                compact: "Three years · open to remote",
                full: "Three years shipping · open to remote",
              }}
            />
          </p>

          <h1 className="font-display text-[3.25rem] leading-[0.95] tracking-[-0.02em] text-ink lg:text-[5.875rem] lg:leading-[0.94] lg:tracking-[-0.025em]">
            From UI
            <br />
            to <em className="text-sand">database</em>.
          </h1>

          <p className="mt-4 max-w-[62ch] text-[0.875rem] leading-[1.75] text-ink-muted lg:mt-6.5 lg:max-w-[58ch] lg:text-[0.96875rem] lg:leading-[1.8]">
            <span className="lg:hidden">
              I build web applications across every layer — React and Next.js
              interfaces, Node and Nest.js APIs, and the PostgreSQL schemas and
              business logic underneath.
            </span>
            <span className="hidden lg:inline">
              I build web applications across every layer — React and Next.js
              interfaces, Node, Express and Nest.js APIs, and the PostgreSQL
              schemas and business logic underneath. Examination systems,
              research networks and marketplaces: software where the data model{" "}
              <em>is</em> the product.
            </span>
          </p>

          <div className="mt-5.5 flex flex-col gap-2.25 sm:flex-row sm:gap-3 lg:mt-8">
            <ButtonLink variant="sand" size="md" href={`#${sections.work.id}`}>
              View my projects
            </ButtonLink>
            <ButtonLink
              variant="quiet"
              size="md"
              href={`#${sections.contact.id}`}
            >
              Get in touch
            </ButtonLink>
          </div>
        </div>

        <StackLadder />
      </div>
    </Section>
  );
}
