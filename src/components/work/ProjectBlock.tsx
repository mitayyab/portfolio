import { ArrowLink } from "@/components/ui/ArrowLink";
import { Copy } from "@/components/ui/Copy";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { ProjectPlate } from "./ProjectPlate";

type ProjectBlockProps = {
  project: Project;
  /** Puts the plate on the right from lg up (the design alternates sides). */
  flip?: boolean;
};

/** One project: the plate above the write-up on mobile, side by side from lg. */
export function ProjectBlock({ project, flip = false }: ProjectBlockProps) {
  const { numeral, name, kicker, domain, url, lede, body, image } = project;

  return (
    <article className="border-t border-rule py-6.5 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-12">
      <ProjectPlate
        name={name}
        image={image}
        className={cn(flip && "lg:order-2")}
      />

      <div className="mt-3.5 lg:mt-0">
        <p className="flex items-baseline gap-2.5 lg:gap-3">
          <span className="font-display text-[1.625rem] text-gold-deep tabular-nums lg:text-[2rem]">
            {numeral}
          </span>
          <span className="font-mono text-mono-xs tracking-[0.13em] text-muted uppercase lg:text-mono-md lg:tracking-[0.14em]">
            {`${kicker} · ${domain}`}
          </span>
        </p>

        <h3 className="mt-1.5 font-display text-[2rem] leading-[1.05] text-text lg:mt-2 lg:text-[2.625rem] lg:leading-[1.02]">
          {name}
        </h3>
        <p className="mt-1.5 font-display text-[1.125rem] leading-[1.4] text-gold-deep lg:mt-2.5 lg:max-w-[34ch] lg:text-[1.3125rem] lg:leading-[1.45]">
          {lede}
        </p>
        <p className="mt-2.5 max-w-[62ch] text-[0.875rem] leading-[1.75] text-text-2 lg:mt-3 lg:max-w-[50ch] lg:text-[0.90625rem] lg:leading-[1.8] lg:hyphens-auto lg:text-justify">
          <Copy text={body} />
        </p>

        <ArrowLink href={url} label={domain} className="mt-3.5 lg:mt-4.5" />
      </div>
    </article>
  );
}
