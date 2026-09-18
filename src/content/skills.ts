import type { ResponsiveText } from "./types";

export interface SkillGroup {
  label: ResponsiveText;
  items: readonly string[];
  /** Shorter list the mobile design uses when it abbreviates item names. */
  compactItems?: readonly string[];
  /** Core groups get the gold rule; supporting groups get the hairline. */
  tier: "core" | "supporting";
  /** Marks the aspirational group, rendered in gold. */
  exploring?: boolean;
}

export const exploringTopics = ["DevOps", "Cloud", "System design", "AI"] as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    compactItems: ["React", "Next.js", "TypeScript", "Tailwind"],
    tier: "core",
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "REST APIs"],
    compactItems: ["Node.js", "Express", "Nest.js", "REST"],
    tier: "core",
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "Sequelize"],
    tier: "core",
  },
  {
    label: "Auth & APIs",
    items: ["JWT", "RBAC", "Joi", "Postman"],
    tier: "core",
  },
  {
    label: "State & forms",
    items: ["Redux", "Context API", "React Hook Form"],
    compactItems: ["Redux", "Context", "React Hook Form"],
    tier: "supporting",
  },
  {
    label: { compact: "Tools", full: "Engineering tools" },
    items: ["Git", "GitHub", "Docker"],
    tier: "supporting",
  },
  {
    label: "Integrations",
    items: ["Stripe", "Segment"],
    tier: "supporting",
  },
  {
    label: { compact: "Exploring", full: "Currently exploring" },
    items: exploringTopics,
    tier: "supporting",
    exploring: true,
  },
];
