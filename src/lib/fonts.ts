import localFont from "next/font/local";

/**
 * Both families are self-hosted (SIL OFL, see src/assets/fonts) so builds never
 * depend on a third-party font CDN. Only the weights the design uses are shipped:
 * regular and italic at 400, latin subset.
 */
export const cormorantGaramond = localFont({
  src: [
    {
      path: "../assets/fonts/cormorant-garamond-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/cormorant-garamond-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const lora = localFont({
  src: [
    {
      path: "../assets/fonts/lora-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/lora-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-lora",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
