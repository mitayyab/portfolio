import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Social image size shared by every generated Open Graph image. */
export const ogSize = { width: 1200, height: 630 };

// The design's graphite band palette (see the tokens in globals.css). The image
// renderer cannot read CSS variables, so the values are repeated here.
export const ogColors = {
  band: "#101215",
  inset: "#0a0b0d",
  border: "#23272d",
  ink: "#faebd3",
  ink2: "#f2f4f6",
  muted: "#7e8794",
  sand: "#f0c987",
  sandDeep: "#c4a87c",
} as const;

export const OG_FONT = "Cormorant Garamond";
const FONT_DIR = join(process.cwd(), "src/assets/fonts/og");

const loadFont = (file: string) => readFile(join(FONT_DIR, file));

/** Cormorant Garamond regular and italic, in the shape ImageResponse expects. */
export async function loadOgFonts() {
  const [regular, italic] = await Promise.all([
    loadFont("cormorant-garamond-latin-400-normal.woff"),
    loadFont("cormorant-garamond-latin-400-italic.woff"),
  ]);
  return [
    { name: OG_FONT, data: regular, style: "normal", weight: 400 },
    { name: OG_FONT, data: italic, style: "italic", weight: 400 },
  ] as const;
}
