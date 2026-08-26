import { getApiBaseUrl } from "@/lib/api";

export type LaunchDevice = "Web" | "Android" | "iOS";

export const LAUNCH_DEVICES: readonly LaunchDevice[] = [
  "Web",
  "Android",
  "iOS",
] as const;

export interface LaunchCodeRecord {
  _id?: string;
  code?: string | null;
  status?: string | null;
  type?: boolean | null;
  device?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface LaunchCodesListResponse {
  status?: string | null;
  total?: number | null;
  count?: number | null;
  launchCodes?: (LaunchCodeRecord | null)[] | null;
  detail?: string | null;
  message?: string | null;
}

export interface CheckLaunchCodePayload {
  code: string;
  device: LaunchDevice;
}

export class LaunchCodeApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "LaunchCodeApiError";
    this.status = status;
  }
}

function isLaunchDevice(value: unknown): value is LaunchDevice {
  return value === "Web" || value === "Android" || value === "iOS";
}

/** Always returns a real array — never null/undefined. */
export function normalizeLaunchCodes(
  value: unknown,
): LaunchCodeRecord[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is LaunchCodeRecord =>
      item != null && typeof item === "object",
  );
}

/** True when the list has at least one usable launch-code record. */
export function hasLaunchCodeRecords(
  codes: LaunchCodeRecord[] | null | undefined,
): boolean {
  return normalizeLaunchCodes(codes).length > 0;
}

function readErrorMessage(
  data: { detail?: unknown; message?: unknown } | null | undefined,
  fallback: string,
): string {
  if (data && typeof data.detail === "string" && data.detail.trim()) {
    return data.detail.trim();
  }
  if (data && typeof data.message === "string" && data.message.trim()) {
    return data.message.trim();
  }
  return fallback;
}

async function readJsonSafe(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function resolveApiBase(): string {
  try {
    return getApiBaseUrl();
  } catch {
    throw new LaunchCodeApiError(
      "Launch API is not configured. Please check your environment settings.",
      0,
    );
  }
}

/**
 * GET /api/launch-codes?status=Active&device=…
 * Active codes for a device mean that platform is not launched yet.
 * Always resolves to an array (empty if missing/null/malformed).
 */
export async function fetchActiveLaunchCodes(
  device: LaunchDevice,
): Promise<LaunchCodeRecord[]> {
  if (!isLaunchDevice(device)) {
    throw new LaunchCodeApiError("Invalid launch device.", 400);
  }

  const base = resolveApiBase();
  const url = `${base}/api/launch-codes?status=Active&device=${encodeURIComponent(device)}`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new LaunchCodeApiError(
      "Unable to reach the launch service. Please check your connection and try again.",
      0,
    );
  }

  const raw = await readJsonSafe(response);
  const data =
    raw != null && typeof raw === "object"
      ? (raw as LaunchCodesListResponse)
      : ({} as LaunchCodesListResponse);

  if (!response.ok) {
    throw new LaunchCodeApiError(
      readErrorMessage(data, "Unable to load launch status. Please try again."),
      response.status,
    );
  }

  return normalizeLaunchCodes(data?.launchCodes);
}

/** True when there is at least one Active code for Web (site still on Coming Soon). */
export async function hasActiveWebLaunchCode(): Promise<boolean> {
  const codes = await fetchActiveLaunchCodes("Web");
  return hasLaunchCodeRecords(codes);
}

/**
 * POST /api/launch-codes/check
 * Validates the chief guest code and marks that device launch Done on success.
 */
export async function checkLaunchCode(
  payload: CheckLaunchCodePayload,
): Promise<void> {
  const code =
    typeof payload?.code === "string" ? payload.code.trim() : "";
  const device = payload?.device;

  if (!code) {
    throw new LaunchCodeApiError("Please enter the access code.", 400);
  }
  if (!isLaunchDevice(device)) {
    throw new LaunchCodeApiError("Invalid launch device.", 400);
  }

  const base = resolveApiBase();
  const url = `${base}/api/launch-codes/check`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ code, device }),
    });
  } catch {
    throw new LaunchCodeApiError(
      "Unable to reach the launch service. Please check your connection and try again.",
      0,
    );
  }

  const raw = await readJsonSafe(response);
  const data =
    raw != null && typeof raw === "object"
      ? (raw as { detail?: string; message?: string; status?: string })
      : {};

  if (!response.ok) {
    throw new LaunchCodeApiError(
      readErrorMessage(
        data,
        "That access code is not valid. Please try again.",
      ),
      response.status,
    );
  }
}
