"use client";

import type { ReactNode } from "react";
import type { Layer } from "@/content/layers";
import { useLayerTrace } from "@/hooks/useLayerTrace";
import { LayerDetail } from "./LayerDetail";
import { LayerList } from "./LayerList";
import { TraceControls } from "./TraceControls";

type TraceExplorerProps = {
  layers: readonly Layer[];
  /** The section intro, rendered on the server and placed above the controls. */
  children: ReactNode;
};

/**
 * The interactive part of "Under the hood". Everything sits in one grid so the
 * layer list can stack under the controls on mobile and move to its own column
 * from lg, without duplicating markup.
 */
export function TraceExplorer({ layers, children }: TraceExplorerProps) {
  const { active, tracing, select, start } = useLayerTrace(layers.length);
  const layer = layers[active];
  const lastIndex = layers.length - 1;

  // Announced when a trace starts and when a layer settles, not on every step.
  const status = tracing
    ? "Tracing the request through the layers"
    : `Layer ${active + 1} of ${layers.length}: ${layer.label}`;

  return (
    <div className="lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-x-13">
      <div className="lg:col-start-1 lg:row-start-1">{children}</div>

      <TraceControls
        tracing={tracing}
        atEnd={active === lastIndex}
        onStart={start}
        className="lg:col-start-1 lg:row-start-2"
      />

      <LayerList
        layers={layers}
        active={active}
        onSelect={select}
        className="mt-4 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:mt-0"
      />

      <LayerDetail
        layer={layer}
        className="mt-4 lg:col-start-1 lg:row-start-3 lg:mt-7.5"
      />

      <p role="status" className="sr-only">
        {status}
      </p>
    </div>
  );
}
