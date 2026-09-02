import { getApiBaseUrl } from "@/lib/api";

export interface OnlinePoojaLocation {
  latitude: number;
  longitude: number;
  name: string;
}

export interface OnlinePoojaItem {
  onlinePoojaId: string;
  poojaId: string;
  datetime: string;
  location: OnlinePoojaLocation;
  status: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  price: number;
}

interface OnlinePoojaListResponse {
  status: string;
  count: number;
  data: OnlinePoojaItem[];
}

/** Full pooja catalog payload from GET /api/poojas/:id */
export interface PoojaDetails {
  poojaId: string;
  godId?: string;
  poojaName: string;
  poojaDescription?: string;
  category: string;
  poojaVidhanam?: string;
  poojaSamagri?: string[];
  whatYouWillGet?: string;
  benefits?: string;
  bestTime?: string;
  whoShouldDo?: string;
  instructions?: string;
  shortStory?: string;
  imageUrl: string;
  videoUrl?: string;
  price?: number;
  status?: string;
  duration?: string;
  language?: string;
  godName?: string;
}

interface PoojaDetailsResponse {
  status: string;
  pooja: PoojaDetails;
}

/** Normalized event card model for home + events pages. */
export interface OnlinePoojaEvent {
  id: string;
  onlinePoojaId: string;
  poojaId: string;
  title: string;
  category: string;
  image: string;
  location: string;
  locationShort: string;
  datetime: string;
  sortDate: string;
  dateLabel: string;
  timeLabel: string;
  homeDateLabel: string;
  day: string;
  month: string;
  weekday: string;
  price: number;
}

/** Full detail view model for /events/:onlinePoojaId */
export interface OnlinePoojaDetail {
  event: OnlinePoojaEvent;
  pooja: PoojaDetails;
  subtitle: string;
  intro: string;
  benefits: string[];
  idealFor: string[];
  receive: string[];
  vidhanamSteps: string[];
  instructionBlocks: { title: string; body: string }[];
}

export class OnlinePoojaApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "OnlinePoojaApiError";
    this.status = status;
  }
}

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const MONTHS_LONG = [
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

const WEEKDAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

function parseEventDate(datetime: string): Date {
  const normalized = /T\d{2}:\d{2}$/.test(datetime)
    ? `${datetime}:00`
    : datetime;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) {
    return new Date(datetime);
  }
  return date;
}

function formatTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const mins = minutes.toString().padStart(2, "0");
  return `${hours}:${mins} ${period}`;
}

function cityFromLocation(name: string): string {
  return name.split(",")[0]?.trim() || name;
}

function toEventCard(
  item: OnlinePoojaItem,
  pooja: PoojaDetails | null,
): OnlinePoojaEvent {
  const date = parseEventDate(item.datetime);
  const title =
    pooja?.poojaName?.trim() ||
    item.message?.trim() ||
    "Upcoming Pooja";
  const locationName = item.location?.name?.trim() || "Online";
  const city = cityFromLocation(locationName);

  return {
    id: item.onlinePoojaId,
    onlinePoojaId: item.onlinePoojaId,
    poojaId: item.poojaId,
    title,
    category: pooja?.category?.trim() || "Puja",
    image: pooja?.imageUrl?.trim() || "",
    location: locationName,
    locationShort: `Live from ${city}`,
    datetime: item.datetime,
    sortDate: item.datetime,
    dateLabel: `${date.getDate()} ${MONTHS_SHORT[date.getMonth()]} ${date.getFullYear()} (${WEEKDAYS_SHORT[date.getDay()]})`,
    timeLabel: formatTime(date),
    homeDateLabel: `${MONTHS_LONG[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} | ${formatTime(date)}`,
    day: date.getDate().toString().padStart(2, "0"),
    month: MONTHS_SHORT[date.getMonth()],
    weekday: WEEKDAYS_SHORT[date.getDay()],
    price: item.price,
  };
}

/** Split prose into short readable bullets for UI cards. */
export function splitIntoSentences(text: string, max = 8): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 12)
    .slice(0, max);
}

function splitVidhanamSteps(vidhanam: string): string[] {
  const byNumber = vidhanam
    .split(/\n\s*\n|\n(?=\d+\.)/)
    .map((step) => step.trim())
    .filter(Boolean);

  if (byNumber.length > 1) return byNumber;

  return vidhanam
    .split(/\n/)
    .map((step) => step.trim())
    .filter(Boolean);
}

function splitInstructionBlocks(
  instructions: string,
): { title: string; body: string }[] {
  const blocks = instructions
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block) => {
    const match = block.match(/^([^:]{3,40}):\s*([\s\S]+)$/);
    if (match) {
      return { title: match[1].trim(), body: match[2].trim() };
    }
    return { title: "Guidance", body: block };
  });
}

function buildDetail(
  item: OnlinePoojaItem,
  pooja: PoojaDetails,
): OnlinePoojaDetail {
  const event = toEventCard(item, pooja);
  const description = pooja.poojaDescription?.trim() || "";
  const benefitsText = pooja.benefits?.trim() || "";
  const whoText = pooja.whoShouldDo?.trim() || "";
  const receiveText = pooja.whatYouWillGet?.trim() || "";

  return {
    event,
    pooja,
    subtitle:
      pooja.godName?.trim() ||
      item.message?.trim() ||
      pooja.category?.trim() ||
      "Sacred Online Pooja",
    intro:
      description.split(/(?<=[.!?])\s+/).slice(0, 2).join(" ") ||
      item.message?.trim() ||
      description,
    benefits: benefitsText
      ? splitIntoSentences(benefitsText, 6)
      : ["Receive divine blessings through this sacred pooja."],
    idealFor: whoText
      ? splitIntoSentences(whoText, 5)
      : ["Devotees seeking divine blessings and spiritual well-being."],
    receive: receiveText
      ? splitIntoSentences(receiveText, 6)
      : [
          "Traditional pooja performed by experienced priests",
          "Spiritual guidance and prasadam blessings",
        ],
    vidhanamSteps: pooja.poojaVidhanam
      ? splitVidhanamSteps(pooja.poojaVidhanam)
      : [],
    instructionBlocks: pooja.instructions
      ? splitInstructionBlocks(pooja.instructions)
      : [],
  };
}

async function fetchPoojaDetails(poojaId: string): Promise<PoojaDetails | null> {
  const url = `${getApiBaseUrl()}/api/poojas/${encodeURIComponent(poojaId)}?language=en`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  } catch {
    return null;
  }

  if (!response.ok) return null;

  try {
    const data = (await response.json()) as PoojaDetailsResponse;
    return data.pooja ?? null;
  } catch {
    return null;
  }
}

let cachedEvents: OnlinePoojaEvent[] | null = null;
let inflight: Promise<OnlinePoojaEvent[]> | null = null;
let cachedOnlineItems: OnlinePoojaItem[] | null = null;
const detailCache = new Map<string, OnlinePoojaDetail>();
const detailInflight = new Map<string, Promise<OnlinePoojaDetail>>();

/** Sync peek for instant UI hydration (no network). */
export function getCachedOnlinePoojaEvents(): OnlinePoojaEvent[] | null {
  return cachedEvents;
}

export function getCachedOnlinePoojaDetail(
  onlinePoojaId: string,
): OnlinePoojaDetail | null {
  return detailCache.get(onlinePoojaId) ?? null;
}

async function fetchOnlinePoojaListItems(): Promise<OnlinePoojaItem[]> {
  if (cachedOnlineItems) return cachedOnlineItems;

  const listUrl = `${getApiBaseUrl()}/online-pooja`;
  let response: Response;
  try {
    response = await fetch(listUrl, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new OnlinePoojaApiError(
      "Unable to reach the server. Please check your connection and try again.",
      0,
    );
  }

  if (!response.ok) {
    throw new OnlinePoojaApiError(
      "Unable to load upcoming events right now. Please try again later.",
      response.status,
    );
  }

  let payload: OnlinePoojaListResponse;
  try {
    payload = (await response.json()) as OnlinePoojaListResponse;
  } catch {
    throw new OnlinePoojaApiError(
      "Unexpected response from events API.",
      response.status,
    );
  }

  cachedOnlineItems = payload.data ?? [];
  return cachedOnlineItems;
}

async function loadOnlinePoojaEvents(): Promise<OnlinePoojaEvent[]> {
  const items = await fetchOnlinePoojaListItems();
  const uniquePoojaIds = [...new Set(items.map((item) => item.poojaId))];
  const poojaEntries = await Promise.all(
    uniquePoojaIds.map(async (poojaId) => {
      const details = await fetchPoojaDetails(poojaId);
      return [poojaId, details] as const;
    }),
  );
  const poojaById = new Map(poojaEntries);

  return items
    .map((item) => toEventCard(item, poojaById.get(item.poojaId) ?? null))
    .sort((a, b) => a.sortDate.localeCompare(b.sortDate));
}

/**
 * GET /online-pooja, then enrich each item via GET /api/poojas/:poojaId?language=en.
 * Dedupes in-flight requests and caches the result for the session.
 */
export async function fetchOnlinePoojaEvents(
  options: { force?: boolean } = {},
): Promise<OnlinePoojaEvent[]> {
  if (options.force) {
    cachedOnlineItems = null;
    cachedEvents = null;
  }

  if (!options.force && cachedEvents) {
    return cachedEvents;
  }

  if (!options.force && inflight) {
    return inflight;
  }

  const request = loadOnlinePoojaEvents()
    .then((events) => {
      cachedEvents = events;
      return events;
    })
    .finally(() => {
      if (inflight === request) {
        inflight = null;
      }
    });

  inflight = request;
  return request;
}

/**
 * Resolve one online pooja slot + full pooja catalog details for the detail page.
 */
export async function fetchOnlinePoojaDetail(
  onlinePoojaId: string,
  options: { force?: boolean } = {},
): Promise<OnlinePoojaDetail> {
  if (!options.force) {
    const cached = detailCache.get(onlinePoojaId);
    if (cached) return cached;

    const pending = detailInflight.get(onlinePoojaId);
    if (pending) return pending;
  }

  const request = (async () => {
    if (options.force) {
      cachedOnlineItems = null;
    }

    const items = await fetchOnlinePoojaListItems();
    const item = items.find((entry) => entry.onlinePoojaId === onlinePoojaId);

    if (!item) {
      throw new OnlinePoojaApiError(
        "This online pooja could not be found. It may no longer be available.",
        404,
      );
    }

    const pooja = await fetchPoojaDetails(item.poojaId);
    if (!pooja) {
      throw new OnlinePoojaApiError(
        "Unable to load pooja details right now. Please try again later.",
        502,
      );
    }

    const detail = buildDetail(item, pooja);
    detailCache.set(onlinePoojaId, detail);
    return detail;
  })().finally(() => {
    detailInflight.delete(onlinePoojaId);
  });

  detailInflight.set(onlinePoojaId, request);
  return request;
}

export function isUpcomingEvent(
  event: OnlinePoojaEvent,
  now = new Date(),
): boolean {
  return parseEventDate(event.datetime).getTime() >= now.getTime();
}

export function isPastEvent(
  event: OnlinePoojaEvent,
  now = new Date(),
): boolean {
  return parseEventDate(event.datetime).getTime() < now.getTime();
}

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
