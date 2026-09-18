import { Copy } from "@/components/ui/Copy";
import type { Layer } from "@/content/layers";
import { cn } from "@/lib/cn";

type LayerListProps = {
  layers: readonly Layer[];
  active: number;
  onSelect: (index: number) => void;
  className?: string;
};

/** The eight layers as buttons; layers already passed by the trace keep a marker. */
export function LayerList({
  layers,
  active,
  onSelect,
  className,
}: LayerListProps) {
  return (
    <ol
      role="list"
      aria-label="Layers of a request"
      className={cn("flex flex-col gap-1.75 lg:gap-2", className)}
    >
      {layers.map((layer, index) => {
        const isActive = index === active;
        const isPassed = index < active;

        return (
          <li key={layer.label}>
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-current={isActive ? "step" : undefined}
              className={cn(
                "grid w-full cursor-pointer grid-cols-[1.125rem_1fr_auto] items-center gap-2.75 rounded-card border px-3.25 py-2.75 text-left transition-[background-color,border-color] duration-250 hover:border-sand lg:grid-cols-[1.375rem_1fr_auto] lg:gap-3.5 lg:px-4 lg:py-3.25",
                isActive
                  ? "border-sand bg-band-hover"
                  : "border-band-border bg-band-inset",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-5.5 w-0.75 rounded-xs transition-colors duration-250 lg:h-6.5",
                  isActive && "bg-sand",
                  isPassed && "bg-sand-deep",
                  !isActive && !isPassed && "bg-band-bar",
                )}
              />
              <span>
                <span
                  className={cn(
                    "block font-display text-[1.125rem] lg:text-[1.3125rem]",
                    isActive ? "text-ink" : "text-ink-2",
                  )}
                >
                  {layer.label}
                </span>
                <span className="block text-[0.6875rem] leading-[1.4] text-ink-muted lg:text-[0.75rem] lg:leading-[normal]">
                  <Copy text={layer.subtitle} />
                </span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "font-mono text-mono-sm tracking-[0.1em] tabular-nums lg:text-mono-md",
                  isActive ? "text-sand" : "text-ink-muted-2",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
