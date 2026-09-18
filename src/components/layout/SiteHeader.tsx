import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { ResumeLink } from "@/components/ui/ResumeLink";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg">
      <Container className="flex items-center gap-3 py-3.75 lg:gap-6.5 lg:py-5">
        <Link
          href="/"
          className="font-display text-[1rem] text-text lg:text-[1.0625rem] lg:tracking-[0.02em]"
        >
          <Copy text={{ compact: site.shortName, full: site.name }} />
        </Link>
        <span className="hidden font-mono text-mono-sm tracking-[0.13em] text-muted uppercase lg:inline">
          {`${site.role} · ${site.city}`}
        </span>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-5.5 lg:flex"
        >
          {/* Size is set on the list so each <li> line box matches the link. */}
          <ul
            role="list"
            className="flex items-center gap-5.5 text-[0.8125rem]"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="underline-grow text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeLink variant="gold" size="xs">
            Résumé ↓
          </ResumeLink>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
