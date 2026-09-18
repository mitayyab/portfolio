"use client";

import { useState, type FormEvent } from "react";
import { buttonClass } from "@/components/ui/button-styles";
import { site } from "@/content/site";
import {
  buildMailtoHref,
  CONTACT_FIELD_ORDER,
  EMPTY_CONTACT,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactFields,
} from "@/lib/contact";
import { cn } from "@/lib/cn";
import { FormField } from "./FormField";

const HINT_ID = "contact-form-hint";

/**
 * The "Send a message" card. There is no backend: a valid form opens the
 * visitor's mail app with the message ready to send.
 */
export function ContactForm({ className }: { className?: string }) {
  const [fields, setFields] = useState<ContactFields>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [opened, setOpened] = useState(false);

  const setField = (field: ContactField) => (value: string) => {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setOpened(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateContact(fields);
    setErrors(found);

    const firstInvalid = CONTACT_FIELD_ORDER.find((field) => found[field]);
    if (firstInvalid) {
      const control = event.currentTarget.elements.namedItem(firstInvalid);
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    window.location.href = buildMailtoHref(site.email, fields);
    setOpened(true);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      className={cn(
        "rounded-md border border-band-border bg-band-inset px-6.5 py-6",
        className,
      )}
    >
      <h3
        id="contact-form-title"
        className="border-b border-band-border pb-4 font-mono text-mono-sm tracking-[0.15em] text-ink-muted-2 uppercase"
      >
        Send a message
      </h3>

      <div className="mt-4.5 flex flex-col gap-3.5">
        <FormField
          name="name"
          label="Name"
          placeholder="Your name"
          autoComplete="name"
          value={fields.name}
          error={errors.name}
          onChange={setField("name")}
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          value={fields.email}
          error={errors.email}
          onChange={setField("email")}
        />
        <FormField
          multiline
          name="message"
          label="What are you building?"
          placeholder="A sentence is enough."
          value={fields.message}
          error={errors.message}
          onChange={setField("message")}
        />

        <button
          type="submit"
          aria-describedby={HINT_ID}
          className={cn(buttonClass({ variant: "sand", size: "form" }), "mt-1")}
        >
          Send
        </button>
        <p id={HINT_ID} className="sr-only">
          Opens your email app with the message ready to send.
        </p>
      </div>

      <div role="status">
        {opened && (
          <p className="mt-3.5 text-[0.8125rem] leading-[1.6] text-ink-muted">
            Your email app should open with the message ready. If it does not,
            write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline-grow text-sand"
            >
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
