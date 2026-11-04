const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-11-04" → "4 Nov 2026". Dates are calendar days, so they are read as UTC. */
export function formatDate(isoDate: string): string {
  return formatter.format(new Date(isoDate));
}
