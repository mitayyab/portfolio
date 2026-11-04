import Link from "next/link";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { series } from "@/content/blog";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/dates";
import type { Post, SeriesPosition } from "@/lib/posts";

const metaClass =
  "font-mono text-mono-sm tracking-[0.12em] text-muted uppercase lg:text-mono-md";

type PostHeaderProps = {
  post: Post;
  position: SeriesPosition;
};

/** Breadcrumb, title, lede and the post's dates, length and series place. */
export function PostHeader({ post, position }: PostHeaderProps) {
  const { meta, readingMinutes } = post;
  const seriesTitle = series[meta.series].title;
  const updated = meta.updatedAt && meta.updatedAt !== meta.publishedAt;

  return (
    <header className="max-w-[68ch]">
      <nav aria-label="Breadcrumb">
        <ol role="list" className={cn(eyebrowClass, "flex gap-2 text-muted")}>
          <li>
            <Link href="/blog" className="underline-grow text-gold-deep">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{series[meta.series].short}</li>
        </ol>
      </nav>

      <h1 className="mt-4 font-display text-[2.375rem] leading-[1.02] tracking-[-0.015em] text-text lg:mt-5 lg:text-[3.5rem] lg:leading-[1]">
        {meta.title}
      </h1>
      <p className="mt-4 font-display text-[1.1875rem] leading-[1.45] text-gold-deep lg:text-[1.4375rem]">
        {meta.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-rule pt-3.5">
        <p className={metaClass}>
          {updated ? "Updated " : "Published "}
          <time dateTime={meta.updatedAt ?? meta.publishedAt}>
            {formatDate(meta.updatedAt ?? meta.publishedAt)}
          </time>
        </p>
        <p className={metaClass}>{`${readingMinutes} min read`}</p>
        <p className={metaClass}>
          {position.total > 1
            ? `Part ${position.index + 1} of ${position.total} · ${seriesTitle}`
            : seriesTitle}
        </p>
        <p className={metaClass}>{meta.tools.join(" + ")}</p>
      </div>
    </header>
  );
}
