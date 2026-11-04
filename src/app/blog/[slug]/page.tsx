import type { Metadata } from "next";
import { FreeTierCard } from "@/components/blog/post/FreeTierCard";
import { PostFooter } from "@/components/blog/post/PostFooter";
import { PostHeader } from "@/components/blog/post/PostHeader";
import { ReadingProgress } from "@/components/blog/post/ReadingProgress";
import { TableOfContents } from "@/components/blog/post/TableOfContents";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { buildPostStructuredData } from "@/lib/blog-structured-data";
import {
  getAllPosts,
  getPost,
  getPostSlugs,
  loadPostContent,
  postDate,
  seriesPosition,
} from "@/lib/posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  const { title, description, publishedAt } = post.meta;
  const url = `/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: publishedAt,
      modifiedTime: postDate(post),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const [post, all, Content] = await Promise.all([
    getPost(slug),
    getAllPosts(),
    loadPostContent(slug),
  ]);
  const position = seriesPosition(post, all);
  const { freeTier } = post.meta;

  return (
    <>
      <JsonLd data={buildPostStructuredData(post)} />
      <ReadingProgress />

      <Container className="pt-9 pb-16 lg:pt-16 lg:pb-24">
        <PostHeader post={post} position={position} />

        <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-[minmax(0,68ch)_13.5rem] lg:justify-between lg:gap-16">
          <article className="min-w-0">
            {freeTier && <FreeTierCard freeTier={freeTier} />}
            <TableOfContents
              headings={post.headings}
              collapsible
              className="mt-6 lg:hidden"
            />
            <div className="mt-6 lg:mt-8">
              <Content />
            </div>
            <PostFooter position={position} />
          </article>

          <aside className="hidden lg:block">
            <TableOfContents
              headings={post.headings}
              className="sticky top-28"
            />
          </aside>
        </div>
      </Container>
    </>
  );
}
