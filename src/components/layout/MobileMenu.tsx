"use client";

import { useEffect, useRef } from "react";
import { buttonClass } from "@/components/ui/button-styles";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

// Matches Tailwind's lg breakpoint, where the desktop navigation takes over.
const DESKTOP_QUERY = "(min-width: 64rem)";

/**
 * Hamburger trigger plus a full-screen menu. The menu is a native modal
 * <dialog>, so the browser handles focus trapping, Escape and inert background.
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // A modal dialog hidden by CSS at lg would still block the page, so close it
  // when the viewport widens (rotation, window resize).
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) dialogRef.current?.close();
    };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <div className="ml-auto lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label="Open menu"
        className="-mx-3 -my-2.5 flex h-11 w-11 items-center justify-center"
      >
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span className="block h-px w-5 bg-text" />
          <span className="block h-px w-5 bg-text" />
          <span className="block h-px w-3.25 bg-gold" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        className="m-0 h-dvh max-h-none w-full max-w-none flex-col overflow-y-auto overscroll-contain border-0 bg-band p-0 text-ink [--focus-ring:var(--color-sand)] open:flex"
      >
        <div className="flex items-center gap-3 border-b border-band-border px-5 py-3.75">
          <span className="font-display text-base">{site.shortName}</span>
          <button
            type="button"
            onClick={close}
            className={cn(
              buttonClass({ variant: "quiet", size: "xs" }),
              "ml-auto min-h-11",
            )}
          >
            Close
          </button>
        </div>

        <nav aria-label="Menu" className="flex-1 px-5 pt-3">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-band-border">
                <a
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline justify-between py-5 font-display text-[2rem] leading-none text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="font-mono text-mono-xl text-sand"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-5 pt-6 pb-8">
          <a
            href={site.links.resume}
            download
            className={cn(
              buttonClass({ variant: "sand", size: "md" }),
              "w-full",
            )}
          >
            Download résumé ↓
          </a>
        </div>
      </dialog>
    </div>
  );
}
