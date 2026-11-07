/**
 * Where Umami's tracker and its event endpoint are served on this site. Requests
 * under it are rewritten to Umami Cloud in next.config.ts; the tracker sends
 * events next to wherever its script was loaded from.
 */
export const UMAMI_PROXY_PATH = "/stats";

export const UMAMI_CLOUD_ORIGIN = "https://cloud.umami.is";

/** Custom event names, so the dashboard's event list stays consistent. */
export const umamiEvents = {
  downloadResume: "Download résumé",
  copyCode: "Copy code",
} as const;
