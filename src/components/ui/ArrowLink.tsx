import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  label: string;
  className?: string;
};

/** External mono link with the ↗ glyph and the growing underline. */
export function ArrowLink({ href, label, className }: ArrowLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-baseline gap-1.75 underline-grow font-mono text-mono-lg tracking-[0.11em] text-gold-deep uppercase lg:gap-2 lg:text-mono-xl",
        className,
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className="font-display text-[0.875rem] lg:text-[0.9375rem]"
      >
        ↗
      </span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
