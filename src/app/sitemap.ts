import type { MetadataRoute } from "next";
import { getAllPosts, postDate } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = getSiteUrl();
  const posts = await getAllPosts();

  return [
    { url, changeFrequency: "monthly", priority: 1 },
    {
      url: `${url}/blog`,
      lastModified: posts[0] && postDate(posts[0]),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${url}/blog/${post.slug}`,
      lastModified: postDate(post),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
