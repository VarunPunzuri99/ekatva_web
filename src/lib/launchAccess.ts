import { LAUNCH_ACCESS_CODE } from "@/lib/constants";

const STORAGE_KEY = "ekatva_launch_access";

/** Fired when launch access is granted or cleared so `/` can swap views. */
export const LAUNCH_ACCESS_EVENT = "ekatva-launch-access";

export interface LaunchAccessRecord {
  name: string;
  grantedAt: number;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function notifyLaunchAccessChanged(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(LAUNCH_ACCESS_EVENT));
}

export function isValidLaunchCode(code: string): boolean {
  return code.trim().toLowerCase() === LAUNCH_ACCESS_CODE;
}

export function grantLaunchAccess(name: string): void {
  if (!canUseStorage()) return;
  const record: LaunchAccessRecord = {
    name: name.trim(),
    grantedAt: Date.now(),
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  notifyLaunchAccessChanged();
}

export function clearLaunchAccess(): void {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(STORAGE_KEY);
  notifyLaunchAccessChanged();
}

export function getLaunchAccess(): LaunchAccessRecord | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LaunchAccessRecord>;
    if (typeof parsed.name !== "string" || parsed.name.trim().length === 0) {
      return null;
    }
    return {
      name: parsed.name.trim(),
      grantedAt:
        typeof parsed.grantedAt === "number" ? parsed.grantedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

export function hasLaunchAccess(): boolean {
  return getLaunchAccess() !== null;
}
