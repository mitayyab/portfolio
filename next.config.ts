import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import { UMAMI_CLOUD_ORIGIN, UMAMI_PROXY_PATH } from "./src/lib/umami";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Serve Umami's tracker and event endpoint from this origin, so blocklists
  // that match cloud.umami.is don't drop page views.
  async rewrites() {
    return [
      {
        source: `${UMAMI_PROXY_PATH}/:path*`,
        destination: `${UMAMI_CLOUD_ORIGIN}/:path*`,
      },
    ];
  },
};

// Plugins are named by string so Turbopack can load them. Code is highlighted
// at build time. The theme's inline colours are kept so untokenised text gets
// its default foreground; CodeBlock swaps the background for the site's own.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      [
        "rehype-pretty-code",
        { theme: "vitesse-dark", defaultLang: { block: "plaintext" } },
      ],
    ],
  },
});

export default withMDX(nextConfig);
