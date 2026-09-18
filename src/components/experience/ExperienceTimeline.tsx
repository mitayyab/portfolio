import { Copy } from "@/components/ui/Copy";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/content/experience";
import { sections } from "@/content/sections";
import { cn } from "@/lib/cn";

export const EXPERIENCE_HEADING_ID = "experience-heading";

/** Section 03: roles on a gold rule, newest first. */
export function ExperienceTimeline() {
  const { number, title } = sections.experience;

  return (
    <div>
      <SectionLabel
        as="h2"
        id={EXPERIENCE_HEADING_ID}
        number={number}
        title={title}
        className="mb-4 lg:mb-6.5"
      />

      <ol
        role="list"
        className="flex flex-col gap-5.5 border-l border-gold pl-4.5 lg:gap-6.5 lg:pl-6.5"
      >
        {experience.map(({ period, role, company, current, summary }) => (
          <li key={`${company}-${period}`}>
            <div className="flex items-baseline gap-2.5 lg:gap-3">
              <p
                className={cn(
                  "font-mono text-mono-sm tracking-[0.13em] uppercase lg:text-mono-md",
                  current ? "text-gold-deep" : "text-muted",
                )}
              >
                {period}
              </p>
              {current && (
                <span
                  aria-hidden="true"
                  className="size-1.25 rounded-full bg-gold"
                />
              )}
            </div>
            <h3 className="mt-0.75 font-display text-[1.5rem] leading-[1.12] text-text lg:mt-1 lg:text-[1.875rem]">
              {`${role} — ${company}`}
            </h3>
            <p className="mt-1.25 text-[0.8125rem] leading-[1.7] text-text-2 lg:mt-1.5 lg:max-w-[64ch] lg:text-[0.84375rem] lg:leading-[1.75]">
              <Copy text={summary} />
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
