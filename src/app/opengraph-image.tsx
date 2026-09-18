import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { stackLayers } from "@/content/stack";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The design's graphite band palette (see the tokens in globals.css). The image
// renderer cannot read CSS variables, so the values are repeated here.
const colors = {
  band: "#101215",
  inset: "#0a0b0d",
  border: "#23272d",
  ink: "#faebd3",
  ink2: "#f2f4f6",
  muted: "#7e8794",
  sand: "#f0c987",
  sandDeep: "#c4a87c",
} as const;

const FONT = "Cormorant Garamond";
const FONT_DIR = join(process.cwd(), "src/assets/fonts/og");

const loadFont = (file: string) => readFile(join(FONT_DIR, file));

// "Infrastructure — expanding" is cut to its first part so it fits the row.
const shortLabel = (label: string) => label.split(" — ")[0];

export default async function OpengraphImage() {
  const [regular, italic] = await Promise.all([
    loadFont("cormorant-garamond-latin-400-normal.woff"),
    loadFont("cormorant-garamond-latin-400-italic.woff"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 64px",
        background: colors.band,
        color: colors.ink,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: colors.sand,
        }}
      >
        {`${site.role} · ${site.city}`}
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 64 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            fontSize: 148,
            lineHeight: 0.96,
            letterSpacing: "-0.02em",
          }}
        >
          <span>From UI</span>
          <span>
            to <i style={{ color: colors.sand, marginLeft: 28 }}>database</i>.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            width: 380,
          }}
        >
          {stackLayers.map((layer, index) => (
            <div
              key={layer.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "14px 18px",
                borderRadius: 8,
                border: `1px ${layer.expanding ? "dashed" : "solid"} ${colors.border}`,
                background: colors.inset,
              }}
            >
              <span style={{ fontSize: 30, color: colors.sandDeep }}>
                {`0${index + 1}`}
              </span>
              <span
                style={{
                  fontSize: 26,
                  color: layer.expanding ? colors.sand : colors.ink2,
                }}
              >
                {shortLabel(layer.label)}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: `1px solid ${colors.border}`,
          paddingTop: 22,
          fontSize: 36,
        }}
      >
        <span>{site.name}</span>
        <span
          style={{
            color: colors.muted,
            fontSize: 26,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {`Open to remote · ${site.timezone}`}
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: FONT, data: regular, style: "normal", weight: 400 },
        { name: FONT, data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
