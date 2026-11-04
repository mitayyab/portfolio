import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";

/** The portfolio's header and footer around the blog index and every post. */
export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter className="pt-10 lg:pt-14" />
    </>
  );
}
