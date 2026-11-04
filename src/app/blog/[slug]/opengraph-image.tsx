import { ImageResponse } from "next/og";
import { series } from "@/content/blog";
import { site } from "@/content/site";
import { OG_FONT, loadOgFonts, ogColors as colors, ogSize } from "@/lib/og";
import { getPost, getPostSlugs } from "@/lib/posts";

export const alt = "Blog post";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

/** The post's social card: series, title and free-tier badge on the band. */
export default async function PostOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = await getPost(slug);

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
        fontFamily: OG_FONT,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 26,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: colors.sand,
        }}
      >
        <span>{`Blog · ${series[meta.series].short}`}</span>
        {meta.freeTier && (
          <span
            style={{
              border: `1px solid ${colors.sandDeep}`,
              borderRadius: 6,
              padding: "6px 14px",
              fontSize: 22,
            }}
          >
            {meta.freeTier.headline}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: meta.title.length > 60 ? 76 : 92,
          lineHeight: 1.02,
          letterSpacing: "-0.015em",
          maxWidth: 1000,
        }}
      >
        {meta.title}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: `1px solid ${colors.border}`,
          paddingTop: 22,
          fontSize: 34,
        }}
      >
        <span>{site.name}</span>
        <span
          style={{
            color: colors.muted,
            fontSize: 24,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {meta.tools.join(" + ")}
        </span>
      </div>
    </div>,
    { ...size, fonts: [...(await loadOgFonts())] },
  );
}
