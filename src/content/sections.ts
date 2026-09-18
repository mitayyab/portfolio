/**
 * Anchor ids and the numbered eyebrow labels, kept in one place so navigation,
 * section markup and numbering cannot drift apart.
 *
 * Note: the design numbers the sections 01, 02, 03, 05, 06 (there is no 04).
 * It is reproduced as designed; change `number` here to renumber.
 */
export const sections = {
  work: { id: "work", number: "01", title: "Selected work" },
  howIBuild: { id: "how-i-build", number: "02", title: "How I build" },
  experience: { id: "experience", number: "03", title: "Experience" },
  skills: { id: "skills", number: "05", title: "Skills" },
  contact: { id: "contact", number: "06" },
} as const;
