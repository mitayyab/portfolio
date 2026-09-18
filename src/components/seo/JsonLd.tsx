type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Emits a JSON-LD block. "<" is escaped so no value can close the script tag. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
