const LOCAL_ORIGIN = "http://localhost:3000";

const withScheme = (value: string) =>
  /^https?:\/\//i.test(value) ? value : `https://${value}`;

/**
 * The site's canonical origin, without a trailing slash. Resolution order:
 * NEXT_PUBLIC_SITE_URL, the production domain Vercel exposes, then localhost.
 */
export function getSiteUrl(): string {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    LOCAL_ORIGIN;

  return withScheme(candidate).replace(/\/+$/, "");
}
