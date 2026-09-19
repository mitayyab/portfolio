import { eyebrowClass } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { practices } from "@/content/practices";
import { sections } from "@/content/sections";
import { cn } from "@/lib/cn";

const HEADING_ID = "how-i-work-heading";

/** Section 03: how AI fits into the work, and who stays responsible for it. */
export function HowIWork() {
  const { id, number, title } = sections.howIWork;

  return (
    <Section
      id={id}
      labelledBy={HEADING_ID}
      containerClassName="pt-7.5 lg:pt-14.5"
    >
      <SectionLabel
        number={number}
        title={title}
        className="mb-3.5 lg:mb-5.5"
      />
      <h2
        id={HEADING_ID}
        className="font-display text-[1.875rem] leading-[1.1] text-text lg:text-[2.5rem]"
      >
        AI helps me move. I own what ships.
      </h2>
      <p className="mt-3 max-w-[62ch] text-[0.875rem] leading-[1.75] text-text-2 lg:mt-4 lg:text-[0.96875rem] lg:leading-[1.8]">
        I use AI throughout my work, and I treat what it writes the way I’d
        treat a colleague’s pull request: read closely, questioned, and not
        merged until I understand it.
      </p>

      <ul
        role="list"
        className="mt-5.5 grid gap-x-8.5 gap-y-5 sm:grid-cols-2 lg:mt-7.5 lg:grid-cols-4 lg:gap-y-6.5"
      >
        {practices.map(({ label, title: heading, body }) => (
          <li key={label} className="border-t border-gold pt-2.75 lg:pt-3.5">
            <p className={cn(eyebrowClass, "text-gold-deep")}>{label}</p>
            <h3 className="mt-1.5 font-display text-[1.25rem] leading-[1.2] text-text lg:mt-2 lg:text-[1.375rem]">
              {heading}
            </h3>
            <p className="mt-1.5 text-[0.8125rem] leading-[1.7] text-text-2 lg:mt-2 lg:text-[0.84375rem] lg:leading-[1.75]">
              {body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
