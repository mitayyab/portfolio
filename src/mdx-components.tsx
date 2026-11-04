import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/blog/mdx/Callout";
import { postElements } from "@/components/blog/mdx/elements";

/** Required by @next/mdx: the elements and components every post can use. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...postElements, Callout, ...components };
}
