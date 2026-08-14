import { getAstroApiBaseUrl } from "@/lib/api";

export interface PanchangRequest {
  date: string;
  lat: number;
  lon: number;
  tz: string;
}

interface NamedAnga {
  number: number;
  name: string;
  transitions?: {
    from_number: number;
    from_name: string;
    to_number: number;
    to_name: string;
    at: string;
  }[];
}

interface TimeWindow {
  start: string;
  end: string;
}

export interface PanchangResponse {
  date: string;
  location: {
    lat: number;
    lon: number;
    tz: string;
  };
  sunrise: string;
  sunset: string;
  pancha_anga: {
    tithi: NamedAnga;
    nakshatra: NamedAnga;
    yoga: NamedAnga;
    karana: NamedAnga;
  };
  kaalams: {
    rahu_kalam: TimeWindow;
    yamagandam: TimeWindow;
    gulika_kalam: TimeWindow;
  };
  muhurtas: {
    brahma_muhurta: TimeWindow;
    abhijit_muhurta: TimeWindow;
    durmuhurta: TimeWindow[];
  };
}

export interface PanchangTodayView {
  title: string;
  dateLabel: string;
  paksha: string;
  rows: { label: string; value: string; time: string }[];
  windows: { label: string; time: string }[];
  note: string;
}

export class PanchangApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "PanchangApiError";
    this.status = status;
  }
}

/** Default: Hyderabad (matches API sample / India product default). */
export const DEFAULT_PANCHANG_LOCATION = {
  lat: 17.385,
  lon: 78.4867,
  tz: "Asia/Kolkata",
} as const;

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const VARA_NAMES: Record<number, string> = {
  0: "Sunday (Bhanu)",
  1: "Monday (Soma)",
  2: "Tuesday (Mangala)",
  3: "Wednesday (Saumya)",
  4: "Thursday (Guru)",
  5: "Friday (Shukra)",
  6: "Saturday (Shani)",
};

function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

/** Local calendar date as YYYY-MM-DD */
export function formatLocalDateKey(date = new Date()): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

function formatDisplayDate(dateKey: string): string {
  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return `${d} ${MONTHS[date.getMonth()]} ${y}, ${WEEKDAYS[date.getDay()]}`;
}

/** "10:49" (24h) → "10:49 AM" */
export function formatClock12(time24: string): string {
  const [hRaw, mRaw] = time24.split(":");
  let hours = Number(hRaw);
  const minutes = Number(mRaw);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return time24;
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${pad2(minutes)} ${period}`;
}

function formatWindow(window: TimeWindow): string {
  return `${formatClock12(window.start)} – ${formatClock12(window.end)}`;
}

function tillLabel(anga: NamedAnga): string {
  const at = anga.transitions?.[0]?.at;
  return at ? `Till ${formatClock12(at)}` : "All Day";
}

function splitTithi(name: string): { paksha: string; tithi: string } {
  const trimmed = name.trim();
  if (/^shukla\s+/i.test(trimmed)) {
    return {
      paksha: "Shukla Paksha",
      tithi: trimmed.replace(/^shukla\s+/i, "").trim() || trimmed,
    };
  }
  if (/^krishna\s+/i.test(trimmed)) {
    return {
      paksha: "Krishna Paksha",
      tithi: trimmed.replace(/^krishna\s+/i, "").trim() || trimmed,
    };
  }
  return { paksha: "Panchangam", tithi: trimmed };
}

export function mapPanchangToTodayView(
  data: PanchangResponse,
): PanchangTodayView {
  const { paksha, tithi } = splitTithi(data.pancha_anga.tithi.name);
  const [y, m, d] = data.date.split("-").map(Number);
  const weekday = new Date(y, m - 1, d).getDay();

  return {
    title: "Today's Panchangam",
    dateLabel: formatDisplayDate(data.date),
    paksha,
    rows: [
      {
        label: "Tithi",
        value: tithi,
        time: tillLabel(data.pancha_anga.tithi),
      },
      {
        label: "Vara",
        value: VARA_NAMES[weekday] ?? WEEKDAYS[weekday],
        time: "All Day",
      },
      {
        label: "Nakshatra",
        value: data.pancha_anga.nakshatra.name,
        time: tillLabel(data.pancha_anga.nakshatra),
      },
      {
        label: "Yoga",
        value: data.pancha_anga.yoga.name,
        time: tillLabel(data.pancha_anga.yoga),
      },
      {
        label: "Karana",
        value: data.pancha_anga.karana.name,
        time: tillLabel(data.pancha_anga.karana),
      },
    ],
    windows: [
      {
        label: "Rahu Kalam",
        time: formatWindow(data.kaalams.rahu_kalam),
      },
      {
        label: "Yamagandam",
        time: formatWindow(data.kaalams.yamagandam),
      },
      {
        label: "Abhijit Muhurta",
        time: formatWindow(data.muhurtas.abhijit_muhurta),
      },
    ],
    note: "*All calculations shifted automatically based on your local coordinates.",
  };
}

let cachedKey: string | null = null;
let cachedView: PanchangTodayView | null = null;
let inflight: Promise<PanchangTodayView> | null = null;
let inflightKey: string | null = null;

export function getCachedPanchangToday(): PanchangTodayView | null {
  return cachedView;
}

export async function resolvePanchangLocation(): Promise<{
  lat: number;
  lon: number;
  tz: string;
}> {
  const tz =
    Intl.DateTimeFormat().resolvedOptions().timeZone ||
    DEFAULT_PANCHANG_LOCATION.tz;

  if (typeof navigator === "undefined" || !navigator.geolocation) {
    return { ...DEFAULT_PANCHANG_LOCATION, tz };
  }

  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: false,
        timeout: 6000,
        maximumAge: 30 * 60 * 1000,
      });
    });
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      tz,
    };
  } catch {
    return { ...DEFAULT_PANCHANG_LOCATION, tz };
  }
}

/**
 * POST {astroBase}/panchang — separate host from main API.
 */
export async function fetchTodayPanchang(
  options: { force?: boolean; date?: string } = {},
): Promise<PanchangTodayView> {
  const date = options.date ?? formatLocalDateKey();
  const cacheKey = date;

  if (!options.force && cachedView && cachedKey === cacheKey) {
    return cachedView;
  }
  if (!options.force && inflight && inflightKey === cacheKey) {
    return inflight;
  }

  const request = (async () => {
    const location = await resolvePanchangLocation();
    const payload: PanchangRequest = {
      date,
      lat: location.lat,
      lon: location.lon,
      tz: location.tz,
    };

    const url = `${getAstroApiBaseUrl()}/panchang`;
    let response: Response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      throw new PanchangApiError(
        "Unable to reach the Panchangam service. Please check your connection and try again.",
        0,
      );
    }

    if (!response.ok) {
      throw new PanchangApiError(
        "Unable to load today's Panchangam right now. Please try again later.",
        response.status,
      );
    }

    let data: PanchangResponse;
    try {
      data = (await response.json()) as PanchangResponse;
    } catch {
      throw new PanchangApiError(
        "Unexpected response from Panchangam service.",
        response.status,
      );
    }

    const view = mapPanchangToTodayView(data);
    cachedKey = cacheKey;
    cachedView = view;
    return view;
  })()
    .catch((err) => {
      if (cachedKey === cacheKey && !cachedView) {
        cachedKey = null;
      }
      throw err;
    })
    .finally(() => {
      if (inflight === request) {
        inflight = null;
        inflightKey = null;
      }
    });

  inflight = request;
  inflightKey = cacheKey;
  return request;
}
