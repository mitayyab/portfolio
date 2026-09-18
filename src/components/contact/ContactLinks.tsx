import { ButtonLink } from "@/components/ui/ButtonLink";
import { Copy } from "@/components/ui/Copy";
import { ResumeLink } from "@/components/ui/ResumeLink";
import { site } from "@/content/site";

const EXTERNAL_LINKS = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
] as const;

/** Email address, profile links and résumé download. */
export function ContactLinks() {
  return (
    <div className="lg:mt-6.5 lg:flex lg:flex-col lg:items-start lg:gap-2.5">
      <a
        href={`mailto:${site.email}`}
        className="underline-grow mt-4.5 inline-block font-display text-[1.25rem] text-sand lg:mt-0 lg:text-[1.5rem]"
      >
        {site.email}
      </a>

      <div className="mt-4 grid grid-cols-2 gap-2.25 lg:mt-1.5 lg:flex lg:gap-2.5">
        {EXTERNAL_LINKS.map(({ label, href }) => (
          <ButtonLink
            key={label}
            variant="quiet"
            size="sm"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
            <span className="sr-only">(opens in a new tab)</span>
          </ButtonLink>
        ))}
        <ResumeLink variant="sand" size="sm" className="col-span-2 lg:col-auto">
          <Copy text={{ compact: "Download résumé ↓", full: "Résumé ↓" }} />
        </ResumeLink>
      </div>
    </div>
  );
}
