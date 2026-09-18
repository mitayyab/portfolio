import type { ResponsiveText } from "./types";

interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  current?: boolean;
  summary: ResponsiveText;
}

export const experience: readonly ExperienceEntry[] = [
  {
    period: "Jan 2025 — present",
    role: "Software Engineer",
    company: "Qbatch",
    current: true,
    summary: {
      compact:
        "Build and ship full-stack features for client SaaS products end to end — PostgreSQL schema design, REST APIs in Node, Express and Nest.js, and the React and Next.js interfaces on top. Work directly with clients to scope requirements and review teammates’ pull requests.",
      full: "Build and ship full-stack features for client SaaS products end to end — relational schema design in PostgreSQL, REST APIs in Node, Express and Nest.js, and the React and Next.js interfaces on top. Work directly with clients to turn requirements into scoped, shippable work, review teammates’ pull requests, and keep performance and data consistency steady as the products grow.",
    },
  },
  {
    period: "Jan 2024 — Dec 2024",
    role: "Associate Software Engineer",
    company: "Cheetah Agency",
    summary: {
      compact:
        "Developed RESTful backend services and client-facing features across agency projects. Built reusable validation and error-handling middleware, modelled the data behind each feature, and wrote the workflow docs new developers onboarded from.",
      full: "Developed RESTful backend services and client-facing features across several agency projects. Built reusable validation and error-handling middleware that cut repeated code across endpoints, modelled the data behind each feature, and wrote the technical workflow documentation new developers onboarded from.",
    },
  },
  {
    period: "Jul 2023 — Dec 2023",
    role: "Software Engineering Trainee",
    company: "MTechSoft",
    summary: {
      compact:
        "Maintained and debugged existing production systems, tracing defects through unfamiliar code. Built the working fundamentals of React, Node.js and PostgreSQL on real client projects.",
      full: "Maintained and debugged existing production systems, tracing defects through unfamiliar code and shipping fixes. Built the working fundamentals of React, Node.js and PostgreSQL on real client projects rather than exercises.",
    },
  },
];
