import type { Layer } from "@/content/layers";
import { cn } from "@/lib/cn";

type LayerDetailProps = {
  layer: Layer;
  layers: readonly Layer[];
  className?: string;
};

function LayerDetailBody({
  layer,
  className,
}: {
  layer: Layer;
  className?: string;
}) {
  return (
    <div className={className}>
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

/**
 * What happens at the selected layer, with the pseudo-code "shape of it".
 * From lg, invisible copies of every layer share the visible one's grid cell, so
 * the card is always as tall as the tallest layer and the list beside it, which
 * is stretched to match, does not resize as the selection changes.
 */
export function LayerDetail({ layer, layers, className }: LayerDetailProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-band-border bg-band-inset p-4.5 lg:grid lg:grid-cols-1 lg:px-6 lg:py-5.5",
        className,
      )}
    >
      <LayerDetailBody
        layer={layer}
        className="lg:col-start-1 lg:row-start-1"
      />
      {layers.map((other) => (
        <LayerDetailBody
          key={other.label}
          layer={other}
          className="invisible hidden lg:col-start-1 lg:row-start-1 lg:block"
        />
      ))}
    </div>
  );
}
