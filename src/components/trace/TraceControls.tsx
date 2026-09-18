import { buttonClass } from "@/components/ui/button-styles";
import { cn } from "@/lib/cn";

type TraceControlsProps = {
  tracing: boolean;
  /** True once the last layer is showing, when the button offers a rerun. */
  atEnd: boolean;
  onStart: () => void;
  className?: string;
};

function buttonLabel(tracing: boolean, atEnd: boolean): string {
  if (tracing) return "Tracing…";
  return atEnd ? "Trace again" : "Trace the request";
}

/** The trace button and, from lg, the hint under it. */
export function TraceControls({
  tracing,
  atEnd,
  onStart,
  className,
}: TraceControlsProps) {
  return (
    <div className={className}>
      <button
        type="button"
        onClick={onStart}
        className={cn(
          buttonClass({ variant: "sand", size: "trace" }),
          "mt-4.5 w-full sm:w-auto lg:mt-6.5",
        )}
      >
        {buttonLabel(tracing, atEnd)}
      </button>
      <p className="mt-3.5 hidden font-mono text-mono-sm tracking-[0.13em] text-ink-muted-2 uppercase lg:block">
        {tracing
          ? "Following the request through the stack…"
          : "Or click any layer to read it"}
      </p>
    </div>
  );
}
