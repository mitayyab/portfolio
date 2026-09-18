import { eyebrowClass } from "@/components/ui/eyebrow";
import { education } from "@/content/education";
import { exploringTopics } from "@/content/skills";
import { cn } from "@/lib/cn";

/** Qualifications, plus (from lg) the topics currently being explored. */
export function EducationList() {
  return (
    <div>
      <h3 className={cn(eyebrowClass, "mt-6.5 text-muted lg:mt-0")}>
        Education
      </h3>
      <ul
        role="list"
        className="mt-2.5 flex flex-col gap-2.25 lg:mt-3.5 lg:gap-2.5"
      >
        {education.map(({ qualification, institution, years, highlight }) => (
          <li
            key={qualification}
            className={cn(
              "flex items-baseline justify-between gap-3 border-t pt-2.5 lg:gap-3.5 lg:pt-2.75",
              highlight ? "border-gold" : "border-rule",
            )}
          >
            <div>
              <p className="font-display text-[1.1875rem] leading-[1.2] text-text lg:text-[1.25rem]">
                {qualification}
              </p>
              <p className="mt-0.5 text-[0.75rem] text-muted lg:text-[0.78125rem]">
                {institution}
              </p>
            </div>
            <p
              className={cn(
                "font-mono text-mono-sm tracking-[0.12em] tabular-nums lg:text-mono-md",
                highlight ? "text-gold-deep" : "text-muted",
              )}
            >
              {years}
            </p>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <h3 className={cn(eyebrowClass, "mt-6.5 mb-3.5 text-muted")}>
          Currently exploring
        </h3>
        <ul role="list" className="flex flex-wrap gap-2">
          {exploringTopics.map((topic) => (
            <li
              key={topic}
              className="rounded-chip border border-dashed border-border px-2.75 py-1.5 font-mono text-mono-sm tracking-[0.1em] text-gold-deep uppercase"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
