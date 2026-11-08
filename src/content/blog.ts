/**
 * Blog series and the shape of a post's metadata. Each post is an MDX file in
 * src/content/posts that exports `metadata` matching `PostMeta`; its file name
 * is the URL slug.
 */
export const blog = {
  title: "Blog",
  description:
    "Beginner-friendly guides to free tools that power real web apps — hosting, storage, email, monitoring — and the clean-code habits that keep them maintainable.",
  intro:
    "Practical guides for developers starting out: one free tool per post, what its free tier really gives you, and how to wire it into a real app. Plus the clean-code habits I wish I’d learned sooner.",
  feedPath: "/blog/feed.xml",
} as const;

export const series = {
  hosting: { title: "Hosting and deployment", short: "Hosting" },
  storage: { title: "Databases and storage", short: "Storage" },
  auth: { title: "Auth and security", short: "Security" },
  monitoring: { title: "Monitoring and debugging", short: "Monitoring" },
  email: { title: "Email and forms", short: "Email and forms" },
  seo: { title: "Performance and SEO", short: "SEO" },
  workflow: { title: "Developer workflow", short: "Workflow" },
  cleanCode: { title: "Clean code and best practices", short: "Clean code" },
} as const;

export type SeriesId = keyof typeof series;

export interface FreeTierFact {
  label: string;
  value: string;
}

/** What the post's tool gives away for free, shown at the top of the post. */
export interface FreeTier {
  /** Short badge for post cards, e.g. "50 monitors free". */
  headline: string;
  facts: readonly FreeTierFact[];
  /** ISO date the limits were last checked against the provider's pricing. */
  verifiedAt: string;
  pricingUrl: string;
}

export interface PostMeta {
  title: string;
  description: string;
  /** ISO dates (YYYY-MM-DD). */
  publishedAt: string;
  updatedAt?: string;
  series: SeriesId;
  /**
   * Place in the series' reading order, lowest first, for a post written after
   * one it should come before. Posts without it follow, oldest first.
   */
  order?: number;
  /** The free tool (or tools) the post is built around. */
  tools: readonly string[];
  level: "Beginner" | "Intermediate";
  freeTier?: FreeTier;
}

/** Titles on the writing desk, listed on the blog index until they ship. */
export const upcomingPosts: readonly { title: string; series: SeriesId }[] = [
  { title: "Send transactional email for free with Resend", series: "email" },
  {
    title: "How to structure a Next.js project that scales",
    series: "cleanCode",
  },
];
