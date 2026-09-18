import type { ResponsiveText } from "@/content/types";

/**
 * Renders copy that the design words differently on small screens. The hidden
 * variant is `display: none`, so assistive technology only reads the visible one.
 */
export function Copy({ text }: { text: ResponsiveText }) {
  if (typeof text === "string") return <>{text}</>;

  return (
    <>
      <span className="lg:hidden">{text.compact}</span>
      <span className="hidden lg:inline">{text.full}</span>
    </>
  );
}
