import { stackLayers } from "@/content/stack";
import { cn } from "@/lib/cn";

const LABEL_ID = "stack-ladder-label";

// From lg the rows are joined by a 1px gold-to-graphite connector, aligned under the numerals.
const connector =
  "lg:not-last:after:ml-8.25 lg:not-last:after:block lg:not-last:after:h-4.5 lg:not-last:after:w-px lg:not-last:after:bg-linear-to-b lg:not-last:after:from-band-border-2 lg:not-last:after:to-sand";

/** The hero's "stack, top to bottom" ladder. */
export function StackLadder() {
  return (
    <div className="mt-7 border-t border-band-border pt-4.5 lg:mt-0 lg:border-t-0 lg:pt-0">
      <p
        id={LABEL_ID}
        className="mb-3 font-mono text-mono-xs tracking-[0.15em] text-ink-muted-2 uppercase lg:mb-0 lg:border-b lg:border-band-border lg:pb-3 lg:text-mono-sm"
      >
        The stack, top to bottom
      </p>

      <ol
        role="list"
        aria-labelledby={LABEL_ID}
        className="flex flex-col gap-1.75 lg:mt-4.5 lg:gap-0"
      >
        {stackLayers.map((layer, index) => (
          <li key={layer.label} className={connector}>
            <div
              className={cn(
                "grid grid-cols-[1.75rem_1fr] items-center gap-2.75 rounded-card border bg-band-inset px-3.25 py-2.75 transition-all duration-300 hover:translate-x-1.5 hover:border-sand hover:bg-band-hover motion-reduce:hover:translate-x-0 lg:grid-cols-[2.125rem_1fr] lg:gap-3.5 lg:px-4 lg:py-3.5",
                layer.expanding
                  ? "border-dashed border-band-border-2"
                  : "border-band-border",
              )}
            >
              <span className="font-display text-[1.1875rem] text-sand-deep tabular-nums lg:text-[1.375rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-mono text-mono-2xs tracking-[0.14em] text-ink-muted-2 uppercase lg:text-mono-xs lg:tracking-[0.15em]">
                  {layer.label}
                </div>
                <div
                  className={cn(
                    "font-display text-[1.0625rem] lg:text-[1.1875rem]",
                    layer.expanding ? "text-sand" : "text-ink-2",
                  )}
                >
                  {layer.value}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
