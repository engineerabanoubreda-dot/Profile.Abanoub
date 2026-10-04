export type ContactInput = { name: string; email: string; message: string };
export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const LIMITS = { nameMax: 100, emailMax: 254, messageMin: 10, messageMax: 2000 } as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the form (client) and the API route (server). */
export function validateContact(
  input: unknown,
): { ok: true; data: ContactInput } | { ok: false; errors: ContactErrors } {
  const raw = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const data: ContactInput = { name: str(raw.name), email: str(raw.email), message: str(raw.message) };
  const errors: ContactErrors = {};

  if (data.name.length < 2) errors.name = "Please enter your name.";
  else if (data.name.length > LIMITS.nameMax) errors.name = `Name must be under ${LIMITS.nameMax} characters.`;

  if (!EMAIL_RE.test(data.email) || data.email.length > LIMITS.emailMax)
    errors.email = "Please enter a valid email address.";

  if (data.message.length < LIMITS.messageMin)
    errors.message = `Message should be at least ${LIMITS.messageMin} characters.`;
  else if (data.message.length > LIMITS.messageMax)
    errors.message = `Message must be under ${LIMITS.messageMax} characters.`;

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}
