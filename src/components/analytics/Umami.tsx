import Script from "next/script";
import { UMAMI_PROXY_PATH } from "@/lib/umami";

/**
 * Umami Cloud page-view and event tracking: cookie-free, so no consent banner.
 * Renders nothing unless NEXT_PUBLIC_UMAMI_WEBSITE_ID is set, so local and
 * preview builds stay out of the numbers when it is only set for Production.
 * The script loads through the site's own origin (see next.config.ts), which
 * keeps most ad blockers from dropping it.
 */
export function Umami() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID?.trim();
  if (!websiteId) return null;

  return (
    <Script
      src={`${UMAMI_PROXY_PATH}/script.js`}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
