import { sections } from "./sections";

// Section links are rooted at "/" so they also work from the blog.
const toSection = (id: string) => `/#${id}`;

export const navItems = [
  { label: "Work", href: toSection(sections.work.id) },
  {
    label: sections.underTheHood.title,
    href: toSection(sections.underTheHood.id),
  },
  { label: sections.howIWork.title, href: toSection(sections.howIWork.id) },
  {
    label: sections.experience.title,
    href: toSection(sections.experience.id),
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: toSection(sections.contact.id) },
] as const;
