import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/cn";
import { CodeBlock } from "./CodeBlock";

const isExternal = (href = "") => /^https?:\/\//.test(href);

function Anchor({ href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="text-gold-deep underline decoration-gold/50 underline-offset-[0.2em] transition-colors hover:decoration-gold-deep"
      {...props}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

/** Inline code only; fenced blocks carry data-language and keep their highlighting. */
function Code({ className, ...props }: ComponentPropsWithoutRef<"code">) {
  if ("data-language" in props)
    return <code className={className} {...props} />;
  return (
    <code
      className="rounded-chip bg-surface px-1.25 py-0.5 font-mono text-[0.84em] text-text"
      {...props}
    />
  );
}

/** A code block's filename, rendered as a tab above the block. */
function Figcaption(props: ComponentPropsWithoutRef<"figcaption">) {
  return (
    <figcaption
      className="rounded-t-md border-b border-band-border bg-band px-4 py-2 font-mono text-mono-xl text-ink-muted"
      {...props}
    />
  );
}

/** Typography for post bodies, matched to the portfolio's type scale. */
export const postElements: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-12 mb-3 font-display text-[1.75rem] leading-[1.15] text-text lg:text-[2rem]",
        className,
      )}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-2 font-display text-[1.3125rem] leading-[1.25] text-text lg:text-[1.4375rem]"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-4 text-[0.9375rem] leading-[1.8] text-text-2 lg:text-[1.0625rem]"
      {...props}
    />
  ),
  a: Anchor,
  strong: (props) => <strong className="font-normal text-text" {...props} />,
  ul: (props) => (
    <ul
      className="my-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-[1.75] text-text-2 marker:text-gold lg:text-[1.0625rem]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-5 text-[0.9375rem] leading-[1.75] text-text-2 marker:font-mono marker:text-[0.8em] marker:text-gold-deep lg:text-[1.0625rem]"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-gold pl-4 font-display text-[1.25rem] leading-[1.45] text-text italic"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-rule" />,
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse text-left text-[0.875rem] leading-[1.6] text-text-2"
        {...props}
      />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border py-2 pr-4 font-mono text-mono-lg font-normal tracking-[0.12em] text-muted uppercase"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-rule py-2.5 pr-4 align-top" {...props} />
  ),
  code: Code,
  figure: (props) => <figure className="my-6" {...props} />,
  pre: CodeBlock,
  figcaption: Figcaption,
};
