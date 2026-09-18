import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { cormorantGaramond, lora } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.description,
};

export const viewport: Viewport = {
  // The design's page background, so mobile browser chrome blends in.
  themeColor: "#f3f2f2",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${lora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
