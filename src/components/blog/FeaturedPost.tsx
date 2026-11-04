import Link from "next/link";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { cn } from "@/lib/cn";
import type { PostSummary } from "@/lib/posts";
import { FreeTierBadge, PostMetaLine } from "./PostCard";

/** The newest post, on a graphite plate above the grid. */
export function FeaturedPost({ post }: { post: PostSummary }) {
  return (
    <article className="group relative rounded-card bg-band px-5 py-6 text-ink [--focus-ring:var(--color-sand)] lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12 lg:px-10 lg:py-9">
      <div>
        <p className={cn(eyebrowClass, "text-sand-deep")}>
          {`Latest · ${post.seriesTitle}`}
        </p>
        <h2 className="mt-3 font-display text-[2rem] leading-[1.05] lg:max-w-[22ch] lg:text-[2.75rem]">
          <Link
            href={`/blog/${post.slug}`}
            className="underline-grow after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-[60ch] text-[0.875rem] leading-[1.75] text-ink-muted lg:text-[0.9375rem]">
          {post.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-0 lg:flex-col lg:items-end">
        {post.freeTierHeadline && (
          <FreeTierBadge label={post.freeTierHeadline} tone="band" />
        )}
        <PostMetaLine {...post} className="text-ink-muted-2" />
        <span
          aria-hidden="true"
          className="hidden font-display text-[1.75rem] text-sand transition-transform group-hover:translate-x-1 lg:block"
        >
          →
        </span>
      </div>
    </article>
  );
}
