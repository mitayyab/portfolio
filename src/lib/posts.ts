import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import GithubSlugger from "github-slugger";
import type { MDXContent } from "mdx/types";
import { series, type PostMeta } from "@/content/blog";

const POSTS_DIR = join(process.cwd(), "src/content/posts");
const MDX_EXTENSION = ".mdx";
const WORDS_PER_MINUTE = 220;

export interface Heading {
  id: string;
  text: string;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  readingMinutes: number;
  /** The post's h2s, in order, with the ids rehype-slug gives them. */
  headings: readonly Heading[];
}

/** The serialisable subset the blog index (a client component) needs. */
export interface PostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  seriesId: PostMeta["series"];
  seriesTitle: string;
  readingMinutes: number;
  freeTierHeadline?: string;
}

/** Strips inline markdown so heading text matches what rehype-slug sees. */
const plainText = (markdown: string) =>
  markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .trim();

/** Prose outside fenced code blocks, so code samples can't add fake headings. */
const withoutCode = (source: string) => source.replace(/```[\s\S]*?```/g, "");

function extractHeadings(source: string): Heading[] {
  // Same slugger rehype-slug uses, so the ids line up with the rendered page.
  const slugger = new GithubSlugger();
  return [...withoutCode(source).matchAll(/^## (.+)$/gm)].map(([, raw]) => {
    const text = plainText(raw);
    return { id: slugger.slug(text), text };
  });
}

function readingMinutes(source: string): number {
  const prose = source.replace(/^export const metadata[\s\S]*?^};$/m, "");
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

const importPost = (slug: string) =>
  import(`@/content/posts/${slug}.mdx`) as Promise<{
    default: MDXContent;
    metadata: PostMeta;
  }>;

/** The rendered body of a post. */
export async function loadPostContent(slug: string): Promise<MDXContent> {
  return (await importPost(slug)).default;
}

export async function getPostSlugs(): Promise<string[]> {
  const files = await readdir(POSTS_DIR);
  return files
    .filter((file) => file.endsWith(MDX_EXTENSION))
    .map((file) => file.slice(0, -MDX_EXTENSION.length));
}

export async function getPost(slug: string): Promise<Post> {
  const [{ metadata }, source] = await Promise.all([
    importPost(slug),
    readFile(join(POSTS_DIR, `${slug}${MDX_EXTENSION}`), "utf8"),
  ]);

  return {
    slug,
    meta: metadata,
    readingMinutes: readingMinutes(source),
    headings: extractHeadings(source),
  };
}

/** The date a post was last touched: its update if it has one. */
export const postDate = ({ meta }: Post) => meta.updatedAt ?? meta.publishedAt;

/** Every post, newest first by publication date. */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all((await getPostSlugs()).map(getPost));
  return posts.sort((a, b) =>
    b.meta.publishedAt.localeCompare(a.meta.publishedAt),
  );
}

export function toSummary(post: Post): PostSummary {
  const { meta } = post;
  return {
    slug: post.slug,
    title: meta.title,
    description: meta.description,
    date: postDate(post),
    seriesId: meta.series,
    seriesTitle: series[meta.series].short,
    readingMinutes: post.readingMinutes,
    freeTierHeadline: meta.freeTier?.headline,
  };
}

export interface SeriesPosition {
  index: number;
  total: number;
  previous?: Post;
  next?: Post;
}

/** Where a post sits in its series, oldest first, with its neighbours. */
export function seriesPosition(
  post: Post,
  all: readonly Post[],
): SeriesPosition {
  const inSeries = all
    .filter((candidate) => candidate.meta.series === post.meta.series)
    .sort((a, b) => a.meta.publishedAt.localeCompare(b.meta.publishedAt));
  const index = inSeries.findIndex((candidate) => candidate.slug === post.slug);

  return {
    index,
    total: inSeries.length,
    previous: inSeries[index - 1],
    next: inSeries[index + 1],
  };
}
