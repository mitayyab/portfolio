export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactField = keyof ContactFields;

export type ContactErrors = Partial<Record<ContactField, string>>;

/** Field order as shown in the form, so the first invalid one can take focus. */
export const CONTACT_FIELD_ORDER: readonly ContactField[] = [
  "name",
  "email",
  "message",
];

export const EMPTY_CONTACT: ContactFields = {
  name: "",
  email: "",
  message: "",
};

// Deliberately loose: one "@" and a dot in the domain. The mail app has the final say.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns an error message for every invalid field; empty when all are valid. */
export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const email = fields.email.trim();

  if (!fields.name.trim()) errors.name = "Please enter your name.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(email))
    errors.email = "Please enter a valid email address.";

  if (!fields.message.trim())
    errors.message = "Please say a little about what you are building.";

  return errors;
}

/**
 * A mailto: link that opens the visitor's mail app with the message filled in.
 * Every value is percent-encoded, so nothing typed into the form can add headers.
 */
export function buildMailtoHref(
  recipient: string,
  { name, email, message }: ContactFields,
): string {
  const subject = `Portfolio enquiry from ${name.trim()}`;
  // RFC 6068 asks for CRLF line breaks in a mailto body.
  const text = message.trim().replace(/\r?\n/g, "\r\n");
  const body = `${text}\r\n\r\n${name.trim()} <${email.trim()}>`;

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
