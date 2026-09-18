import type { Layer } from "@/content/layers";
import { cn } from "@/lib/cn";

type LayerDetailProps = {
  layer: Layer;
  className?: string;
};

/** What happens at the selected layer, with the pseudo-code "shape of it". */
export function LayerDetail({ layer, className }: LayerDetailProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-band-border bg-band-inset p-4.5 lg:px-6 lg:py-5.5",
        className,
      )}
    >
      <p className="font-mono text-mono-xs tracking-[0.15em] text-sand-deep uppercase lg:text-mono-sm">
        {layer.stage}
      </p>
      <h3 className="mt-1.5 font-display text-[1.5rem] leading-[1.12] text-ink lg:mt-2 lg:text-[1.75rem]">
        {layer.title}
      </h3>
      <p className="mt-2 text-[0.84375rem] leading-[1.75] text-ink-muted lg:mt-2.5 lg:text-[0.875rem] lg:leading-[1.8]">
        {layer.body}
      </p>

      <p className="mt-4.5 hidden border-t border-band-border pt-3.5 font-mono text-mono-sm tracking-[0.15em] text-ink-muted-2 uppercase lg:block">
        Shape of it
      </p>
      <pre className="mt-3.5 border-t border-band-border pt-3 font-mono text-[0.6875rem] leading-[1.8] whitespace-pre-wrap text-sand lg:mt-2 lg:border-t-0 lg:pt-0 lg:text-[0.75rem] lg:leading-[1.85]">
        <code>{layer.code}</code>
      </pre>
    </div>
  );
}
