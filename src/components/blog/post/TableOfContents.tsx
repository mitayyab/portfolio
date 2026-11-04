"use client";

import { useEffect, useState } from "react";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import type { Heading } from "@/lib/posts";

// A heading counts as current once it passes the top quarter of the viewport.
const ACTIVE_LINE = 0.25;

/** The id of the last heading scrolled past, for highlighting the contents. */
function useActiveHeading(headings: readonly Heading[]) {
  const [activeId, setActiveId] = useState<string>();

  useEffect(() => {
    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * ACTIVE_LINE;
      const passed = elements.filter(
        (element) => element.getBoundingClientRect().top <= line,
      );
      setActiveId(passed.at(-1)?.id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [headings]);

  return activeId;
}

type TableOfContentsProps = {
  headings: readonly Heading[];
  /** Folds the list into a disclosure, for small screens. */
  collapsible?: boolean;
  className?: string;
};

/** "On this page": links to each h2, with the current one marked. */
export function TableOfContents({
  headings,
  collapsible = false,
  className,
}: TableOfContentsProps) {
  const activeId = useActiveHeading(headings);
  if (headings.length === 0) return null;

  const list = (
    <ol role="list" className="mt-3 space-y-0.5 border-l border-rule">
      {headings.map(({ id, text }) => {
        const active = id === activeId;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active ? "location" : undefined}
              className={cn(
                "-ml-px block border-l py-1.5 pl-3.5 text-[0.8125rem] leading-[1.45] transition-colors",
                active
                  ? "border-gold-deep text-text"
                  : "border-transparent text-muted hover:text-text",
              )}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  const label = "On this page";

  if (collapsible) {
    return (
      <details
        className={cn(
          "group rounded-card border border-rule px-4 py-3",
          className,
        )}
      >
        <summary
          className={cn(
            eyebrowClass,
            "flex cursor-pointer list-none items-center justify-between text-gold-deep",
          )}
        >
          {label}
          <span
            aria-hidden="true"
            className="transition-transform group-open:rotate-90"
          >
            →
          </span>
        </summary>
        {list}
      </details>
    );
  }

  return (
    <nav aria-label={label} className={className}>
      <p className={cn(eyebrowClass, "text-gold-deep")}>{label}</p>
      {list}
    </nav>
  );
}
