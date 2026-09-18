import { sections } from "./sections";

export const navItems = [
  { label: "Work", href: `#${sections.work.id}` },
  { label: sections.howIBuild.title, href: `#${sections.howIBuild.id}` },
  { label: sections.experience.title, href: `#${sections.experience.id}` },
  { label: "Contact", href: `#${sections.contact.id}` },
] as const;
