/**
 * Copy that the design words differently on small screens: `compact` renders
 * below the lg breakpoint and `full` from lg up. A plain string is used as-is.
 */
export type ResponsiveText = string | { compact: string; full: string };
