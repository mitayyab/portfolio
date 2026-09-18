/** First tab stop: lets keyboard users bypass the header and land on <main>. */
export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-band focus:px-4 focus:py-3 focus:font-mono focus:text-mono-lg focus:tracking-[0.13em] focus:text-sand focus:uppercase"
    >
      Skip to main content
    </a>
  );
}
