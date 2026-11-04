import { blog } from "@/content/blog";
import { site } from "@/content/site";
import { postDate, type Post } from "./posts";
import { getSiteUrl } from "./site-url";

type JsonLd = Record<string, unknown>;

const author = () => ({
  "@type": "Person",
  "@id": `${getSiteUrl()}/#person`,
  name: site.name,
  url: getSiteUrl(),
});

function blogPosting(post: Post): JsonLd {
  const url = `${getSiteUrl()}/blog/${post.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    url,
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.publishedAt,
    dateModified: postDate(post),
    inLanguage: "en",
    author: author(),
    image: `${url}/opengraph-image`,
    mainEntityOfPage: url,
  };
}

/** schema.org Blog for the index, listing every post. */
export function buildBlogStructuredData(posts: readonly Post[]): JsonLd {
  const url = `${getSiteUrl()}/blog`;
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name: `${blog.title} — ${site.name}`,
    description: blog.description,
    inLanguage: "en",
    author: author(),
    blogPost: posts.map(blogPosting),
  };
}

/** schema.org BlogPosting for a single post page. */
export function buildPostStructuredData(post: Post): JsonLd {
  return { "@context": "https://schema.org", ...blogPosting(post) };
}
