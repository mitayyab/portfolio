type ClassValue = string | false | null | undefined;

/** Joins class names, skipping falsy values. Callers must not pass conflicting utilities. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
