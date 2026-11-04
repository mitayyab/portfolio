import { SectionLabel } from "@/components/ui/SectionLabel";
import { series, upcomingPosts } from "@/content/blog";

const HEADING_ID = "upcoming-heading";

/** What's being written next, so a young blog still shows where it's going. */
export function UpcomingPosts() {
  if (upcomingPosts.length === 0) return null;

  return (
    <section aria-labelledby={HEADING_ID} className="mt-14 lg:mt-20">
      <SectionLabel
        as="h2"
        id={HEADING_ID}
        number="Next"
        title="On the writing desk"
        className="mb-2 lg:mb-3"
      />
      <ul role="list">
        {upcomingPosts.map((post) => (
          <li
            key={post.title}
            className="flex flex-col gap-1 border-b border-rule py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="font-display text-[1.1875rem] leading-[1.3] text-text-2 lg:text-[1.3125rem]">
              {post.title}
            </span>
            <span className="font-mono text-mono-sm tracking-[0.12em] text-muted uppercase lg:text-mono-md">
              {series[post.series].short}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
