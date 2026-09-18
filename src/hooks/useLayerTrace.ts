import { useCallback, useEffect, useReducer } from "react";

/** How long each layer stays highlighted while a trace runs (from the design). */
const TRACE_STEP_MS = 620;

type TraceState = {
  active: number;
  tracing: boolean;
  /** Bumped on every start so a restarted trace also restarts its timer. */
  run: number;
};

type TraceAction =
  | { type: "select"; index: number }
  | { type: "start" }
  | { type: "tick"; lastIndex: number };

function traceReducer(state: TraceState, action: TraceAction): TraceState {
  switch (action.type) {
    case "select":
      return { ...state, active: action.index, tracing: false };
    case "start":
      return { active: 0, tracing: true, run: state.run + 1 };
    case "tick":
      // As in the design, the tick after the last layer is what ends the trace.
      return state.active >= action.lastIndex
        ? { ...state, tracing: false }
        : { ...state, active: state.active + 1 };
  }
}

/**
 * State for the request-trace explorer: which layer is showing, and a timed
 * walk from the first layer to the last that any pick interrupts.
 */
export function useLayerTrace(layerCount: number) {
  const [state, dispatch] = useReducer(traceReducer, {
    active: 0,
    tracing: false,
    run: 0,
  });
  const { tracing, run } = state;
  const lastIndex = layerCount - 1;

  useEffect(() => {
    if (!tracing) return;
    const timer = setInterval(
      () => dispatch({ type: "tick", lastIndex }),
      TRACE_STEP_MS,
    );
    return () => clearInterval(timer);
  }, [tracing, run, lastIndex]);

  const select = useCallback(
    (index: number) => dispatch({ type: "select", index }),
    [],
  );
  const start = useCallback(() => dispatch({ type: "start" }), []);

  return { active: state.active, tracing, select, start };
}
