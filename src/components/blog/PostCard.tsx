import Link from "next/link";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { formatDate } from "@/lib/dates";
import { cn } from "@/lib/cn";
import type { PostSummary } from "@/lib/posts";

const metaClass =
  "font-mono text-mono-sm tracking-[0.12em] uppercase lg:text-mono-md";

/** Date and reading time, in the design's mono label style. */
export function PostMetaLine({
  date,
  readingMinutes,
  className,
}: Pick<PostSummary, "date" | "readingMinutes"> & { className?: string }) {
  return (
    <p className={cn(metaClass, className)}>
      <time dateTime={date}>{formatDate(date)}</time>
      {` · ${readingMinutes} min read`}
    </p>
  );
}

/** The free-tier badge, e.g. "50 monitors free". */
export function FreeTierBadge({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "band";
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-chip border px-2 py-1 font-mono text-mono-sm tracking-[0.12em] uppercase",
        tone === "light"
          ? "border-gold text-gold-deep"
          : "border-sand-deep text-sand",
      )}
    >
      {label}
    </span>
  );
}

/** One post in the index grid. The whole card is the link's hit area. */
export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="group relative border-t border-gold pt-3 lg:pt-3.5">
      <div className="flex items-center justify-between gap-3">
        <p className={cn(eyebrowClass, "text-gold-deep")}>{post.seriesTitle}</p>
        {post.freeTierHeadline && (
          <FreeTierBadge label={post.freeTierHeadline} />
        )}
      </div>
      <h3 className="mt-2 font-display text-[1.375rem] leading-[1.2] text-text lg:text-[1.5rem]">
        <Link
          href={`/blog/${post.slug}`}
          className="underline-grow after:absolute after:inset-0"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-[0.84375rem] leading-[1.7] text-text-2">
        {post.description}
      </p>
      <PostMetaLine {...post} className="mt-3 text-muted" />
    </article>
  );
}
