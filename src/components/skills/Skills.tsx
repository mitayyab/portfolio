import { Copy } from "@/components/ui/Copy";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/Section";
import { sections } from "@/content/sections";
import { skillGroups, type SkillGroup } from "@/content/skills";
import { cn } from "@/lib/cn";

const HEADING_ID = "skills-heading";

const joinItems = (items: readonly string[]) => items.join(" · ");

function itemsText({ items, compactItems }: SkillGroup) {
  return compactItems
    ? { compact: joinItems(compactItems), full: joinItems(items) }
    : joinItems(items);
}

/** Section 05: skills grouped by purpose; core groups carry the gold rule. */
export function Skills() {
  const { id, number, title } = sections.skills;

  return (
    <Section
      id={id}
      labelledBy={HEADING_ID}
      containerClassName="py-7.5 lg:pt-0 lg:pb-14.5"
    >
      {/* Mobile: label and rule, then the heading below. From lg all three share one row. */}
      <div className="flex flex-wrap items-baseline gap-x-3 lg:mb-7.5 lg:flex-nowrap lg:gap-x-4.5">
        <p className={cn(eyebrowClass, "order-1 text-gold-deep")}>
          {`${number} — ${title}`}
        </p>
        <span
          aria-hidden="true"
          className="order-2 h-px flex-1 bg-rule lg:order-3"
        />
        <h2
          id={HEADING_ID}
          className="order-3 mt-2.5 mb-4 basis-full font-display text-[1.875rem] text-text lg:order-2 lg:m-0 lg:basis-auto lg:text-[2.5rem]"
        >
          Grouped by what it’s for
        </h2>
      </div>

      <dl className="grid grid-cols-2 gap-x-5 gap-y-4.5 lg:grid-cols-4 lg:gap-x-8.5 lg:gap-y-6.5">
        {skillGroups.map((group) => {
          const core = group.tier === "core";

          return (
            <div
              key={group.id}
              className={cn(
                "border-t pt-2.75 lg:pt-3.5",
                core ? "border-gold" : "border-rule",
              )}
            >
              <dt
                className={cn(
                  "font-mono text-mono-xs tracking-[0.14em] uppercase lg:text-mono-sm lg:tracking-[0.15em]",
                  core ? "text-gold-deep" : "text-muted",
                )}
              >
                <Copy text={group.label} />
              </dt>
              <dd
                className={cn(
                  "mt-1.5 font-display text-[1.0625rem] leading-[1.6] lg:mt-2 lg:text-[1.1875rem] lg:leading-[1.75]",
                  group.exploring ? "text-text lg:text-gold-deep" : "text-text",
                )}
              >
                <Copy text={itemsText(group)} />
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}
