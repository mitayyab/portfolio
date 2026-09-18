import {
  useId,
  type ChangeEvent,
  type HTMLInputAutoCompleteAttribute,
} from "react";
import { cn } from "@/lib/cn";

type FormFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  /** Renders a three-row textarea instead of a single-line input. */
  multiline?: boolean;
  type?: "text" | "email";
  autoComplete?: HTMLInputAutoCompleteAttribute;
};

const controlClass =
  "w-full resize-none border-b bg-transparent py-2 font-body text-[0.875rem] text-ink-2 outline-none placeholder:text-ink-muted-2 focus-visible:border-sand focus-visible:shadow-[0_1px_0_0_var(--color-sand)]";

/** A labelled underline field that wires up its own error message for assistive tech. */
export function FormField({
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  multiline = false,
  type = "text",
  autoComplete,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;

  const shared = {
    id,
    name,
    value,
    placeholder,
    required: true,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: cn(controlClass, error ? "border-sand" : "border-band-border-2"),
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(event.target.value),
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-mono-xs tracking-[0.13em] text-sand-deep uppercase"
      >
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={3} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error && (
        <p
          id={errorId}
          className="font-mono text-mono-xs tracking-[0.1em] text-sand uppercase"
        >
          {error}
        </p>
      )}
    </div>
  );
}
