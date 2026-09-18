import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Centres page content. Below lg it is capped at 720px so lines never over-run;
 * from lg it widens to the design's 1280px frame with 56px gutters. Backgrounds
 * stay full-bleed on the parent, so large screens keep the design's proportions.
 */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-180 px-5 lg:max-w-7xl lg:px-14",
        className,
      )}
      {...props}
    />
  );
}
