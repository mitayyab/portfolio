import type { ResponsiveText } from "./types";

export interface Layer {
  /** Row title in the layer list. */
  label: string;
  /** Row subtitle in the layer list. */
  subtitle: ResponsiveText;
  /** Eyebrow of the detail panel. */
  stage: string;
  title: string;
  body: string;
  /** Pseudo-code shown under "Shape of it". */
  code: string;
}

const lines = (...rows: string[]) => rows.join("\n");

/** The eight layers a request travels through, top to bottom. */
export const layers: readonly Layer[] = [
  {
    label: "User action",
    subtitle: {
      compact: "A person presses a button",
      full: "A person presses a button in the interface",
    },
    stage: "01 — User action",
    title: "Someone presses a button",
    body: "Every feature starts as an intent: save this, approve that, submit the form. My job starts by asking what must be true once it lands — the invariant — before a single component gets written.",
    code: lines(
      'intent:  "save this record"',
      "invariant:",
      "  the write is complete or absent",
      "  the user always knows which",
    ),
  },
  {
    label: "Frontend",
    subtitle: {
      compact: "Validate, set optimistic state",
      full: "React / Next.js — validate, set optimistic state",
    },
    stage: "02 — Frontend",
    title: "Validated before it travels",
    body: "React or Next.js: the form is typed, validated client-side and disabled until it is coherent. Optimistic state makes the interface feel instant, with a defined path back if the server disagrees.",
    code: lines(
      "useForm({ resolver })",
      "  fields → derived summary",
      "  submit disabled until valid",
      "  → POST /resource",
    ),
  },
  {
    label: "API request",
    subtitle: {
      compact: "HTTP call with the token attached",
      full: "HTTP call with the auth token attached",
    },
    stage: "03 — API request",
    title: "A contract, not a guess",
    body: "One request with the auth token attached, a payload shaped by an agreed schema, and an endpoint that means exactly one thing. Contracts written down early are what let frontend and backend move in parallel.",
    code: lines(
      "POST /api/resource",
      "  Authorization: Bearer <jwt>",
      "  Content-Type: application/json",
      "  body: CreateResourceDto",
    ),
  },
  {
    label: "Server & auth",
    subtitle: {
      compact: "Authenticate, authorise, validate",
      full: "Node / Express — authenticate, authorise, validate",
    },
    stage: "04 — Server & auth",
    title: "The gate before the work",
    body: "Node/Express or Nest.js: authenticate the token, authorise the role against the resource, validate the payload. Anything malformed or unpermitted is rejected here — it never reaches the service layer or the database.",
    code: lines(
      "authenticate(jwt)",
      "authorize(role, resource)",
      "validate(schema)",
      "→ service.create(dto)",
    ),
  },
  {
    label: "Business logic",
    subtitle: {
      compact: "The rules that make it correct",
      full: "The rules that make the change correct",
    },
    stage: "05 — Business logic",
    title: "Where correctness lives",
    body: "The service layer owns the rules — not the controller, not the component. It composes the change, checks the things that must hold, and stays testable without a request object in sight.",
    code: lines(
      "service.create(dto):",
      "  derive related records",
      "  assert rules hold",
      "  wrap in a transaction",
    ),
  },
  {
    label: "Database",
    subtitle: {
      compact: "One transaction, all or nothing",
      full: "PostgreSQL — one transaction, all or nothing",
    },
    stage: "06 — Database",
    title: "Constraints do the remembering",
    body: "PostgreSQL holds the truth: foreign keys, checks, indexes, and one transaction boundary around the whole write. Application code can have bugs; constraints keep those bugs from becoming bad data.",
    code: lines(
      "BEGIN;",
      "  INSERT resource …",
      "  INSERT related …",
      "COMMIT;",
      "-- CHECK / FK / UNIQUE enforce it",
    ),
  },
  {
    label: "Response",
    subtitle: {
      compact: "A payload the client can trust",
      full: "A predictable payload the client can trust",
    },
    stage: "07 — Response",
    title: "Something the client can trust",
    body: "A predictable status and shape, ids included, errors typed rather than stringly-guessed. The client should never have to parse prose to know what happened.",
    code: lines(
      "201 Created",
      "  { id, …, relatedIds }",
      "or",
      '  422 { field: "reason" }',
    ),
  },
  {
    label: "UI update",
    subtitle: {
      compact: "The screen tells the truth",
      full: "Cache revalidated, the screen tells the truth",
    },
    stage: "08 — UI update",
    title: "The screen tells the truth",
    body: "Cache revalidated, dependent views updated together, optimistic state reconciled or rolled back. The loop closes where it started — with the person who pressed the button.",
    code: lines(
      "revalidate(['resource','summary'])",
      "reconcile(optimistic, server)",
      "→ confirmation + new state",
    ),
  },
];
