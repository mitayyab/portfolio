/**
 * Anchor ids and the numbered eyebrow labels, kept in one place so navigation,
 * section markup and numbering cannot drift apart.
 *
 * Change `number` here to renumber.
 */
export const sections = {
  work: { id: "work", number: "01", title: "Selected work" },
  underTheHood: { id: "under-the-hood", number: "02", title: "Under the hood" },
  howIWork: { id: "how-i-work", number: "03", title: "How I work" },
  experience: { id: "experience", number: "04", title: "Experience" },
  skills: { id: "skills", number: "05", title: "Skills" },
  contact: { id: "contact", number: "06" },
} as const;
