import { getApiBaseUrl } from "@/lib/api";
import { COMPANY_CONTACT } from "@/content/contact";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
  attachmentName?: string;
}

export class ContactApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ContactApiError";
    this.status = status;
  }
}

function openMailtoFallback(payload: ContactPayload): void {
  const subject = encodeURIComponent(
    `Ekatva contact — ${payload.queryType} — ${payload.name}`,
  );
  const attachmentLine = payload.attachmentName
    ? `\nAttachment noted: ${payload.attachmentName}`
    : "";
  const body = encodeURIComponent(
    `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nQuery: ${payload.queryType}${attachmentLine}\n\n${payload.message}`,
  );
  window.location.href = `${COMPANY_CONTACT.emailHref}?subject=${subject}&body=${body}`;
}

/**
 * POST /api/contact — preferred path when the API is configured.
 * Falls back to mailto if the env/base URL is missing or the request fails hard.
 */
export async function submitContact(
  payload: ContactPayload,
): Promise<{ via: "api" | "mailto" }> {
  let base: string;
  try {
    base = getApiBaseUrl();
  } catch {
    openMailtoFallback(payload);
    return { via: "mailto" };
  }

  let response: Response;
  try {
    response = await fetch(`${base}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    openMailtoFallback(payload);
    return { via: "mailto" };
  }

  if (!response.ok) {
    let message = "Something went wrong. Please try again later.";
    try {
      const data = (await response.json()) as { message?: string };
      if (typeof data.message === "string" && data.message) {
        message = data.message;
      }
    } catch {
      // ignore non-JSON
    }
    throw new ContactApiError(message, response.status);
  }

  return { via: "api" };
}
