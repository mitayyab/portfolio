import { cn } from "@/lib/cn";

const variants = {
  /** Gold outline on the light ground. */
  gold: "border-gold text-gold-deep hover:bg-gold/10",
  /** Sand outline on a band; the primary action. */
  sand: "border-sand text-sand hover:bg-sand/10 hover:text-ink",
  /** Quiet outline on a band; the secondary action. */
  quiet: "border-band-border-2 text-ink-2 hover:border-sand hover:text-ink",
} as const;

// The design's button sizes. Touch layouts use them as designed: buttons are full
// width or half-width grid cells and at least 35px tall, above the 24px target
// minimum in WCAG 2.2. The menu's Close button adds min-h-11 itself.
const sizes = {
  xs: "px-3.5 py-2.25 text-mono-md tracking-[0.13em]",
  sm: "px-3.5 py-2.75 text-mono-sm tracking-[0.13em] lg:px-4.5 lg:py-2.5 lg:text-mono-md",
  md: "px-4.5 py-3.5 text-mono-lg tracking-[0.13em] lg:px-5.5 lg:py-3.25 lg:text-mono-xl",
  trace:
    "px-4.5 py-3.25 text-mono-lg tracking-[0.14em] lg:px-5.5 lg:text-mono-xl",
  form: "px-4.5 py-3 text-mono-lg tracking-[0.14em]",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type ButtonStyleOptions = { variant: ButtonVariant; size: ButtonSize };

/** The design's outlined mono button, shared by links and real <button>s. */
export function buttonClass({ variant, size }: ButtonStyleOptions): string {
  return cn(
    "inline-flex cursor-pointer items-center justify-center rounded-sm border text-center font-mono uppercase transition-colors duration-250",
    variants[variant],
    sizes[size],
  );
}
