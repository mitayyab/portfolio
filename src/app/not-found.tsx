import type { Metadata } from "next";
import Link from "next/link";
import { buttonClass } from "@/components/ui/button-styles";
import { Container } from "@/components/ui/Container";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center bg-band text-ink [--focus-ring:var(--color-sand)]">
      <Container className="py-16">
        <p className={cn(eyebrowClass, "text-sand")}>404 — Page not found</p>
        <h1 className="mt-4 font-display text-[3.25rem] leading-[0.95] tracking-[-0.02em] lg:text-[5.875rem] lg:leading-[0.94] lg:tracking-[-0.025em]">
          This page
          <br />
          doesn’t <em className="text-sand">exist</em>.
        </h1>
        <p className="mt-4 max-w-[46ch] text-[0.875rem] leading-[1.75] text-ink-muted lg:mt-6.5 lg:text-[0.96875rem] lg:leading-[1.8]">
          The link may be out of date, or the address mistyped.
        </p>
        <Link
          href="/"
          className={cn(
            buttonClass({ variant: "sand", size: "md" }),
            "mt-5.5 lg:mt-8",
          )}
        >
          Back to the portfolio
        </Link>
      </Container>
    </main>
  );
}
