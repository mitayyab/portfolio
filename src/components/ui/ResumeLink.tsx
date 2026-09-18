import { site } from "@/content/site";
import { ButtonLink, type ButtonLinkProps } from "./ButtonLink";

type ResumeLinkProps = Omit<
  ButtonLinkProps,
  "href" | "download" | "aria-label"
>;

/**
 * Downloads the résumé PDF. Its accessible name spells out the action that the
 * visible arrow only hints at, and still contains the visible wording.
 */
export function ResumeLink(props: ResumeLinkProps) {
  return (
    <ButtonLink
      {...props}
      href={site.links.resume}
      download
      aria-label="Download résumé (PDF)"
    />
  );
}
