import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

/** Closes the page inside the contact band: credits (desktop) and location. */
export function SiteFooter() {
  return (
    <Section as="footer" tone="band" containerClassName="pb-6 lg:pb-10">
      <div className="flex justify-between border-t border-band-border pt-3.5 font-mono text-mono-xs tracking-[0.12em] text-ink-muted-2 uppercase lg:pt-4 lg:text-mono-sm">
        <p className="hidden lg:block">Built with Next.js</p>
        <p>
          {`${site.locationLabel} · `}
          <a href={site.phone.href} className="underline-grow">
            {site.phone.label}
          </a>
        </p>
      </div>
    </Section>
  );
}
