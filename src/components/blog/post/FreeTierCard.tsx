import { ArrowLink } from "@/components/ui/ArrowLink";
import { eyebrowClass } from "@/components/ui/eyebrow";
import type { FreeTier } from "@/content/blog";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/dates";

/**
 * "Free tier at a glance": the limits the post relies on, and when they were
 * last checked. Free tiers change, so the date is part of the card.
 */
export function FreeTierCard({ freeTier }: { freeTier: FreeTier }) {
  const { facts, verifiedAt, pricingUrl } = freeTier;

  return (
    <aside
      aria-label="Free tier at a glance"
      className="rounded-card border border-border bg-surface px-4.5 py-4 lg:px-6 lg:py-5"
    >
      <p className={cn(eyebrowClass, "text-gold-deep")}>
        Free tier at a glance
      </p>

      <dl className="mt-3.5 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4">
        {facts.map(({ label, value }) => (
          <div key={label} className="border-t border-rule pt-2">
            <dt className="font-mono text-mono-sm tracking-[0.12em] text-muted uppercase">
              {label}
            </dt>
            <dd className="mt-1 font-display text-[1.375rem] leading-[1.15] text-text">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="text-[0.8125rem] leading-[1.6] text-muted">
          Checked on <time dateTime={verifiedAt}>{formatDate(verifiedAt)}</time>
          . Limits change, so confirm before you rely on them.
        </p>
        <ArrowLink href={pricingUrl} label="Current pricing" />
      </div>
    </aside>
  );
}
