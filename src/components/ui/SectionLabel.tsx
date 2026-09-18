import { cn } from "@/lib/cn";
import { eyebrowClass } from "./eyebrow";

const tones = {
  light: { text: "text-gold-deep", rule: "bg-rule" },
  band: { text: "text-sand-deep", rule: "bg-band-border" },
} as const;

type SectionLabelProps = {
  number: string;
  title: string;
  tone?: keyof typeof tones;
  /** Use "h2" when the label is the section's only heading. */
  as?: "p" | "h2";
  /** Id for the label, so a section can name itself with aria-labelledby. */
  id?: string;
  className?: string;
};

/** The numbered mono eyebrow followed by a hairline that fills the row. */
export function SectionLabel({
  number,
  title,
  tone = "light",
  as: Tag = "p",
  id,
  className,
}: SectionLabelProps) {
  const { text, rule } = tones[tone];

  return (
    <div className={cn("flex items-baseline gap-3 lg:gap-4.5", className)}>
      <Tag id={id} className={cn(eyebrowClass, text)}>
        {`${number} — ${title}`}
      </Tag>
      <span aria-hidden="true" className={cn("h-px flex-1", rule)} />
    </div>
  );
}
