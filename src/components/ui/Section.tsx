import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

const toneClasses = {
  light: "",
  // Bands switch the keyboard focus ring to sand (see --focus-ring in globals.css).
  band: "bg-band text-ink [--focus-ring:var(--color-sand)]",
} as const;

type SectionProps = {
  as?: "section" | "footer";
  id?: string;
  tone?: keyof typeof toneClasses;
  /** Classes for the full-bleed outer element. */
  className?: string;
  /** Classes for the inner container, e.g. vertical padding. */
  containerClassName?: string;
  children: ReactNode;
};

/** A full-bleed page region whose content is held by the shared Container. */
export function Section({
  as: Tag = "section",
  id,
  tone = "light",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
