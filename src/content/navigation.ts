import { sections } from "./sections";

export const navItems = [
  { label: "Work", href: `#${sections.work.id}` },
  { label: sections.underTheHood.title, href: `#${sections.underTheHood.id}` },
  { label: sections.howIWork.title, href: `#${sections.howIWork.id}` },
  { label: sections.experience.title, href: `#${sections.experience.id}` },
  { label: "Contact", href: `#${sections.contact.id}` },
] as const;
