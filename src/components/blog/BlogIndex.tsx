"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { SeriesId } from "@/content/blog";
import { cn } from "@/lib/cn";
import type { PostSummary } from "@/lib/posts";
import { FeaturedPost } from "./FeaturedPost";
import { PostCard } from "./PostCard";

const chipClass =
  "cursor-pointer rounded-chip border px-3 py-2 font-mono text-mono-md tracking-[0.13em] whitespace-nowrap uppercase transition-colors";

const matches = (post: PostSummary, query: string) =>
  [post.title, post.description, post.seriesTitle]
    .join(" ")
    .toLowerCase()
    .includes(query);

/** Typing "/" anywhere but a field jumps to search, as on most docs sites. */
function useSlashToFocus(input: React.RefObject<HTMLInputElement | null>) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.key !== "/" || target.closest("input, textarea")) return;
      event.preventDefault();
      input.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [input]);
}

/** Search and series filters over the post list. Posts arrive newest first. */
export function BlogIndex({ posts }: { posts: readonly PostSummary[] }) {
  const searchId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeSeries, setActiveSeries] = useState<SeriesId | null>(null);
  useSlashToFocus(inputRef);

  const seriesOptions = useMemo(() => {
    const seen = new Map<SeriesId, string>();
    posts.forEach((post) => seen.set(post.seriesId, post.seriesTitle));
    return [...seen];
  }, [posts]);

  const normalised = query.trim().toLowerCase();
  const filtering = normalised !== "" || activeSeries !== null;
  const visible = posts.filter(
    (post) =>
      (activeSeries === null || post.seriesId === activeSeries) &&
      matches(post, normalised),
  );
  const [featured, ...rest] = filtering ? [] : visible;
  const grid = filtering ? visible : rest;

  const chips: [SeriesId | null, string][] = [[null, "All"], ...seriesOptions];

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter by series"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-wrap lg:px-0"
        >
          {chips.map(([id, label]) => (
            <button
              key={label}
              type="button"
              aria-pressed={activeSeries === id}
              onClick={() => setActiveSeries(id)}
              className={cn(
                chipClass,
                activeSeries === id
                  ? "border-gold bg-gold/10 text-gold-deep"
                  : "border-border text-muted hover:border-gold hover:text-gold-deep",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="relative lg:w-72">
          <label htmlFor={searchId} className="sr-only">
            Search posts
          </label>
          <input
            ref={inputRef}
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts"
            className="w-full rounded-sm border border-border bg-bg py-2.5 pr-10 pl-3.5 text-[0.875rem] text-text placeholder:text-muted focus-visible:border-gold-deep"
          />
          <kbd
            aria-hidden="true"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-chip border border-border px-1.5 font-mono text-mono-md text-muted"
          >
            /
          </kbd>
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {filtering && `${visible.length} posts found`}
      </p>

      {featured && (
        <div className="mt-6 lg:mt-8">
          <FeaturedPost post={featured} />
        </div>
      )}

      {grid.length > 0 && (
        <ul
          role="list"
          className="mt-8 grid gap-x-8.5 gap-y-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3"
        >
          {grid.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}

      {visible.length === 0 && (
        <p className="mt-8 text-[0.9375rem] leading-[1.75] text-text-2">
          No posts match that yet. Try another word, or pick “All”.
        </p>
      )}
    </div>
  );
}
