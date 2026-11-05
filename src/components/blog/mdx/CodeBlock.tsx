import type { ComponentPropsWithoutRef } from "react";
import { CopyButton } from "./CopyButton";

/**
 * A highlighted code block on the graphite band, with a copy button. Shiki's
 * colours come from rehype-pretty-code at build time, including the theme's
 * default foreground for untokenised text. Its background is set inline on
 * <pre> and <code>, so it's overridden here to sit on the site's palette.
 * Under a filename tab the block drops its top corners to join it.
 */
export function CodeBlock(props: ComponentPropsWithoutRef<"pre">) {
  return (
    <div className="group relative [figcaption+&_pre]:rounded-t-none">
      <pre
        {...props}
        className="overflow-x-auto rounded-md bg-band-inset! py-4 font-mono text-[0.8125rem] leading-[1.7] [&_[data-highlighted-line]]:bg-band-hover [&_[data-line]]:px-4 [&>code]:bg-transparent!"
      />
      <CopyButton />
    </div>
  );
}
