import type { ReactNode } from "react";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

const tones = {
  tip: {
    label: "Tip",
    box: "border-gold bg-surface",
    text: "text-gold-deep",
  },
  gotcha: {
    label: "Gotcha",
    box: "border-text bg-surface",
    text: "text-text",
  },
  warning: {
    label: "Warning",
    box: "border-sand bg-band text-ink [&_code]:bg-band-hover [&_code]:text-ink [&_p]:text-ink-muted [&_strong]:text-ink",
    text: "text-sand",
  },
} as const;

type CalloutProps = {
  type?: keyof typeof tones;
  children: ReactNode;
};

/** An aside in a post: a tip, a gotcha to watch for, or a warning. */
export function Callout({ type = "tip", children }: CalloutProps) {
  const { label, box, text } = tones[type];

  return (
    <aside
      className={cn(
        "my-6 rounded-none border-l-2 px-4.5 py-3.5 [&>p:first-of-type]:mt-1.5 [&>p:last-child]:mb-0",
        box,
      )}
    >
      <p className={cn(eyebrowClass, text)}>{label}</p>
      {children}
    </aside>
  );
}
