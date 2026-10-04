import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";
import { isMailConfigured, sendContactEmail } from "@/lib/mailer";

export const runtime = "nodejs";

/**
 * Very small in-memory rate limit (5 requests / 10 min / IP).
 * It resets on restart and is per server instance, which is fine for a personal site.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 1000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (body && typeof body === "object" && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ error: "Please check the form.", errors: result.errors }, { status: 422 });
  }

  if (!isMailConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] SMTP not configured, message not sent:", result.data);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "The contact form isn't available right now. Please email me directly." },
      { status: 503 },
    );
  }

  try {
    await sendContactEmail(result.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again or email me directly." },
      { status: 502 },
    );
  }
}
