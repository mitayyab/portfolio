export interface Practice {
  /** Short mono label above the title. */
  label: string;
  title: string;
  body: string;
}

/** How AI fits into the work, in the order a change moves through it. */
export const practices: readonly Practice[] = [
  {
    label: "Draft",
    title: "AI gets me to a first version",
    body: "I use AI for boilerplate, tests and first drafts, so my time goes to the parts that need judgement rather than typing.",
  },
  {
    label: "Review",
    title: "I read every line",
    body: "Nothing it writes goes in unread. I go through the diff line by line and ask why it works, not only whether it runs.",
  },
  {
    label: "Decide",
    title: "The decisions stay with me",
    body: "The data model, the auth rules and what the system must guarantee are mine to decide. The tool proposes; I choose.",
  },
  {
    label: "Verify",
    title: "If I can’t explain it, it doesn’t ship",
    body: "Types, tests and database constraints catch what a reading can’t. I own what goes out, whoever wrote the first draft.",
  },
];
