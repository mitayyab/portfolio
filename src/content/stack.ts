export interface StackLayer {
  label: string;
  value: string;
  /** Aspirational layer: dashed border and sand text. */
  expanding?: boolean;
}

/** The hero's "stack, top to bottom" ladder. */
export const stackLayers: readonly StackLayer[] = [
  { label: "Frontend", value: "React · Next.js · TypeScript" },
  { label: "API layer", value: "Node · Express · Nest.js" },
  { label: "Database", value: "PostgreSQL · MySQL · Sequelize" },
  {
    label: "Infrastructure — expanding",
    value: "Docker · Cloud · CI/CD",
    expanding: true,
  },
];
