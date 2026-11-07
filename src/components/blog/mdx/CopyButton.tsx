"use client";

import { useRef, useState } from "react";
import { umamiEvents } from "@/lib/umami";

const RESET_AFTER_MS = 2000;

/** Copies the text of the <pre> next to it. Shown on hover, focus and touch. */
export function CopyButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const code = buttonRef.current?.parentElement?.querySelector("pre");
    if (!code) return;
    await navigator.clipboard.writeText(code.innerText);
    setCopied(true);
    setTimeout(() => setCopied(false), RESET_AFTER_MS);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={copy}
      data-umami-event={umamiEvents.copyCode}
      className="absolute top-2 right-2 cursor-pointer rounded-sm border border-band-border-2 bg-band px-2.5 py-1.5 font-mono text-mono-md tracking-[0.13em] text-ink-muted uppercase transition-[opacity,color] [--focus-ring:var(--color-sand)] group-hover:opacity-100 hover:text-ink focus-visible:opacity-100 pointer-fine:opacity-0"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
