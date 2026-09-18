import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { sections } from "@/content/sections";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { ContactLinks } from "./ContactLinks";

const HEADING_ID = "contact-heading";

/** Section 06: how to get in touch. The form is part of the desktop layout only. */
export function Contact() {
  const { id, number } = sections.contact;
  const openTo = `${number} — Open to remote`;

  return (
    <Section
      id={id}
      labelledBy={HEADING_ID}
      tone="band"
      containerClassName="pt-8 pb-5 lg:pt-14 lg:pb-9"
    >
      <div className="lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
        <div>
          <p className="font-mono text-mono-xs tracking-[0.14em] text-sand uppercase lg:text-mono-md lg:tracking-[0.15em]">
            <Copy
              text={{
                compact: `${openTo} · ${site.timezone}`,
                full: `${openTo} opportunities · ${site.timezone}`,
              }}
            />
          </p>
          <h2
            id={HEADING_ID}
            className="mt-3 font-display text-[2.375rem] leading-none text-ink lg:mt-3.5 lg:text-[3.625rem]"
          >
            Let’s build
            <br />
            something useful.
          </h2>
          <ContactLinks />
        </div>

        <ContactForm className="hidden lg:block" />
      </div>
    </Section>
  );
}
