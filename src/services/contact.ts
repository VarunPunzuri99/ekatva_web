import { getApiBaseUrl } from "@/lib/api";

/** Matches POST /api/contact-us request body fields. */
export interface ContactPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  queryType: string;
  message: string;
}

export interface ContactResponse {
  status?: string;
  message?: string;
  [key: string]: unknown;
}

export class ContactApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ContactApiError";
    this.status = status;
  }
}

/**
 * POST /api/contact-us — submit a contact us form.
 * No auth required. Body is application/x-www-form-urlencoded.
 */
export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResponse> {
  const url = `${getApiBaseUrl()}/api/contact-us`;

  const body = new URLSearchParams({
    fullName: payload.fullName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    queryType: payload.queryType,
    message: payload.message,
  });

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: body.toString(),
    });
  } catch {
    throw new ContactApiError(
      "Unable to reach the server. Please check your connection and try again.",
      0,
    );
  }

  let data: ContactResponse = {};
  try {
    data = (await response.json()) as ContactResponse;
  } catch {
    // Non-JSON body is fine for some success responses
  }

  if (!response.ok) {
    const message =
      (typeof data.message === "string" && data.message) ||
      (response.status === 400
        ? "Please check your details and try again."
        : "Something went wrong. Please try again later.");

    throw new ContactApiError(message, response.status);
  }

  return data;
}
