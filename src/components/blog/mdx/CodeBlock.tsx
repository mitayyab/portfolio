import type { ComponentPropsWithoutRef } from "react";
import { CopyButton } from "./CopyButton";

/**
 * A highlighted code block on the graphite band, with a copy button. Shiki's
 * token colours come from rehype-pretty-code at build time; only the frame is
 * styled here. keepBackground: false drops the theme's foreground along with
 * its background, so the block sets its own for untokenised text (plaintext).
 * Under a filename tab the block drops its top corners to join it.
 */
export function CodeBlock(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <div className="group relative [figcaption+&_pre]:rounded-t-none">
      <pre
        {...props}
        className="overflow-x-auto rounded-md bg-band-inset py-4 font-mono text-[0.8125rem] leading-[1.7] text-ink [&_[data-highlighted-line]]:bg-band-hover [&_[data-line]]:px-4"
      />
      <CopyButton />
    </div>
  );
}
