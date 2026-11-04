import Link from "next/link";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { sections } from "@/content/sections";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import type { Post, SeriesPosition } from "@/lib/posts";

function SeriesLink({
  post,
  direction,
}: {
  post: Post;
  direction: "previous" | "next";
}) {
  const next = direction === "next";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group block rounded-card border border-rule px-4 py-3.5 transition-colors hover:border-gold",
        next && "sm:col-start-2 sm:text-right",
      )}
    >
      <span className={cn(eyebrowClass, "text-muted")}>
        {next ? "Next in the series →" : "← Previous in the series"}
      </span>
      <span className="mt-1.5 block font-display text-[1.1875rem] leading-[1.3] text-text group-hover:text-gold-deep">
        {post.meta.title}
      </span>
    </Link>
  );
}

/** Series navigation and a short note about the author. */
export function PostFooter({ position }: { position: SeriesPosition }) {
  const { previous, next } = position;

  return (
    <footer className="mt-14 border-t border-rule pt-8">
      {(previous || next) && (
        <nav aria-label="Series" className="mb-8 grid gap-3 sm:grid-cols-2">
          {previous && <SeriesLink post={previous} direction="previous" />}
          {next && <SeriesLink post={next} direction="next" />}
        </nav>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <p className="text-[0.875rem] leading-[1.7] text-text-2">
          Written by{" "}
          <Link href="/" className="underline-grow text-text">
            {site.name}
          </Link>
          , a {site.role.toLowerCase()} in {site.city}. Questions or a
          correction?{" "}
          <Link
            href={`/#${sections.contact.id}`}
            className="text-gold-deep underline decoration-gold/50 underline-offset-[0.2em]"
          >
            Get in touch
          </Link>
          .
        </p>
        <Link
          href="/blog"
          className="shrink-0 underline-grow font-mono text-mono-lg tracking-[0.11em] text-gold-deep uppercase"
        >
          ← All posts
        </Link>
      </div>
    </footer>
  );
}
