"use client";

import { useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { LIMITS, validateContact, type ContactErrors } from "@/lib/validation";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1.5 w-full rounded-md border border-line bg-surface px-3 py-2.5 text-base placeholder:text-muted/70 focus:border-accent aria-[invalid=true]:border-red-600";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    const check = validateContact(values);
    if (!check.ok) {
      setErrors(check.errors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...check.data, website: values.website }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus("success");
        setMessage("Thanks, your message was sent. I'll reply by email.");
      } else {
        if (json.errors) setErrors(json.errors);
        setStatus("error");
        setMessage(json.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection or email me directly.");
    }
  }

  const err = (k: keyof ContactErrors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1 text-sm text-red-700 dark:text-red-400">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={LIMITS.nameMax}
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={field}
        />
        {err("name")}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={LIMITS.emailMax}
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={field}
        />
        {err("email")}
      </div>

      <div>
        <label htmlFor="msg" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="msg"
          name="message"
          rows={6}
          maxLength={LIMITS.messageMax}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={field}
        />
        {err("message")}
      </div>

      {/* Honeypot: hidden from people and screen readers, bots tend to fill it in. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {status === "sending" ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="inline-flex items-center gap-1.5 text-green-800 dark:text-green-400">
              <CircleCheck className="h-4 w-4" aria-hidden="true" /> {message}
            </span>
          )}
          {status === "error" && (
            <span className="inline-flex items-center gap-1.5 text-red-700 dark:text-red-400">
              <CircleAlert className="h-4 w-4" aria-hidden="true" /> {message}
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
