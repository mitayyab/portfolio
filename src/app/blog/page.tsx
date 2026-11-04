import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { UpcomingPosts } from "@/components/blog/UpcomingPosts";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { eyebrowClass } from "@/components/ui/eyebrow";
import { blog } from "@/content/blog";
import { buildBlogStructuredData } from "@/lib/blog-structured-data";
import { cn } from "@/lib/cn";
import { getAllPosts, toSummary } from "@/lib/posts";

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": blog.feedPath },
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: blog.title,
    description: blog.description,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container className="pt-9 pb-16 lg:pt-16 lg:pb-24">
      <JsonLd data={buildBlogStructuredData(posts)} />

      <header className="max-w-[62ch]">
        <p className={cn(eyebrowClass, "text-gold-deep")}>
          Blog — free tools and clean code
        </p>
        <h1 className="mt-3 font-display text-[2.75rem] leading-[0.98] tracking-[-0.02em] text-text lg:mt-4 lg:text-[4.5rem] lg:leading-[0.95]">
          Notes from the <em className="text-gold-deep">stack</em>.
        </h1>
        <p className="mt-4 text-[0.9375rem] leading-[1.75] text-text-2 lg:mt-5 lg:text-[1.0625rem] lg:leading-[1.8]">
          {blog.intro}
        </p>
        <a
          href={blog.feedPath}
          className="mt-3 inline-block underline-grow font-mono text-mono-lg tracking-[0.11em] text-gold-deep uppercase lg:text-mono-xl"
        >
          RSS feed
        </a>
      </header>

      <div className="mt-10 lg:mt-14">
        <BlogIndex posts={posts.map(toSummary)} />
      </div>

      <UpcomingPosts />
    </Container>
  );
}
