import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import {
  buttonClass,
  type ButtonSize,
  type ButtonVariant,
} from "./button-styles";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant: ButtonVariant;
  size: ButtonSize;
};

/** An anchor styled as one of the design's outlined buttons. */
export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(buttonClass({ variant, size }), className)} {...props} />
  );
}
