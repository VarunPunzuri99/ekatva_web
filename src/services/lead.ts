import { getApiBaseUrl } from "@/lib/api";

export interface CreateLeadPayload {
  email: string;
}

export interface CreateLeadResponse {
  status?: string;
  message?: string;
  email?: string;
  [key: string]: unknown;
}

export class LeadApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "LeadApiError";
    this.status = status;
  }
}

/**
 * POST /api/leads — store an email lead from the Notify Me button.
 * No auth required.
 */
export async function createLead(
  payload: CreateLeadPayload,
): Promise<CreateLeadResponse> {
  const url = `${getApiBaseUrl()}/api/leads`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: payload.email }),
    });
  } catch {
    throw new LeadApiError(
      "Unable to reach the server. Please check your connection and try again.",
      0,
    );
  }

  let data: CreateLeadResponse = {};
  try {
    data = (await response.json()) as CreateLeadResponse;
  } catch {
    // Non-JSON body is fine for some success responses
  }

  if (!response.ok) {
    const message =
      (typeof data.message === "string" && data.message) ||
      (response.status === 409
        ? "This email is already on our list."
        : response.status === 400
          ? "Please enter a valid email address."
          : "Something went wrong. Please try again later.");

    throw new LeadApiError(message, response.status);
  }

  return data;
}
