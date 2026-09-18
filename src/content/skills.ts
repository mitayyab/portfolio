import type { ResponsiveText } from "./types";

export interface SkillGroup {
  /** Stable key for the group. */
  id: string;
  label: ResponsiveText;
  items: readonly string[];
  /** Shorter list the mobile design uses when it abbreviates item names. */
  compactItems?: readonly string[];
  /** Core groups get the gold rule; supporting groups get the hairline. */
  tier: "core" | "supporting";
  /** Marks the aspirational group, rendered in gold. */
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
    tier: "core",
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "REST APIs"],
    compactItems: ["Node.js", "Express", "Nest.js", "REST"],
    tier: "core",
  },
  {
    id: "database",
    label: "Database",
    items: ["PostgreSQL", "MySQL", "Sequelize"],
    tier: "core",
  },
  {
    id: "auth-apis",
    label: "Auth & APIs",
    items: ["JWT", "RBAC", "Joi", "Postman"],
    tier: "core",
  },
  {
    id: "state-forms",
    label: "State & forms",
    items: ["Redux", "Context API", "React Hook Form"],
    compactItems: ["Redux", "Context", "React Hook Form"],
    tier: "supporting",
  },
  {
    id: "tools",
    label: { compact: "Tools", full: "Engineering tools" },
    items: ["Git", "GitHub", "Docker"],
    tier: "supporting",
  },
  {
    id: "integrations",
    label: "Integrations",
    items: ["Stripe", "Segment"],
    tier: "supporting",
  },
  {
    id: "exploring",
    label: { compact: "Exploring", full: "Currently exploring" },
    items: exploringTopics,
    tier: "supporting",
    exploring: true,
  },
];
