import { blog } from "@/content/blog";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const rfc822 = (isoDate: string) => new Date(isoDate).toUTCString();

/** RSS 2.0 feed of every post, newest first. */
export async function GET() {
  const url = getSiteUrl();
  const posts = await getAllPosts();

  const items = posts
    .map(({ slug, meta }) => {
      const link = `${url}/blog/${slug}`;
      return `    <item>
      <title>${escapeXml(meta.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(meta.description)}</description>
      <pubDate>${rfc822(meta.publishedAt)}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${blog.title} — ${site.name}`)}</title>
    <link>${url}/blog</link>
    <description>${escapeXml(blog.description)}</description>
    <language>en</language>
    <atom:link href="${url}${blog.feedPath}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
