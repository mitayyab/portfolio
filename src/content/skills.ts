import type { ResponsiveText } from "./types";

export interface SkillGroup {
  /** Stable key for the group. */
  id: string;
  label: ResponsiveText;
  items: readonly string[];
  /** Shorter list the mobile design uses when it abbreviates item names. */
  compactItems?: readonly string[];
  /** Marks the aspirational group, which the desktop design sets in gold. */
  exploring?: boolean;
}

export const exploringTopics = [
  "DevOps",
  "Cloud",
  "System design",
  "AI",
] as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    compactItems: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "REST APIs"],
    compactItems: ["Node.js", "Express", "Nest.js", "REST"],
  },
  {
    id: "database",
    label: "Database",
    items: ["PostgreSQL", "MySQL", "Sequelize"],
  },
  {
    id: "auth-apis",
    label: "Auth & APIs",
    items: ["JWT", "RBAC", "Joi", "Postman"],
  },
  {
    id: "state-forms",
    label: "State & forms",
    items: ["Redux", "Context API", "React Hook Form"],
    compactItems: ["Redux", "Context", "React Hook Form"],
  },
  {
    id: "tools",
    label: { compact: "Tools", full: "Engineering tools" },
    items: ["Git", "GitHub", "Docker"],
  },
  {
    id: "integrations",
    label: "Integrations",
    items: ["Stripe", "Segment"],
  },
  {
    id: "exploring",
    label: { compact: "Exploring", full: "Currently exploring" },
    items: exploringTopics,
    exploring: true,
  },
];
