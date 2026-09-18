import Image from "next/image";
import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/cn";

type ProjectPlateProps = {
  name: string;
  image?: ProjectImage;
  className?: string;
};

const SIZES = "(min-width: 1280px) 540px, (min-width: 1024px) 42vw, 100vw";

/**
 * The framed screenshot beside each project. Without a screenshot it shows the
 * design's striped placeholder, which carries no information and is hidden from
 * assistive technology.
 */
export function ProjectPlate({ name, image, className }: ProjectPlateProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface p-1.75 transition-[translate,box-shadow] duration-350 ease-plate hover:-translate-y-1.5 hover:shadow-plate motion-reduce:hover:translate-y-0 lg:p-2.25",
        className,
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-chip lg:aspect-16/11">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={SIZES}
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="plate-stripes absolute inset-0 grid place-items-center"
          >
            <span className="bg-bg px-2.25 py-1.25 text-center font-mono text-mono-md tracking-[0.1em] text-muted uppercase">
              {`Screenshot: ${name}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
