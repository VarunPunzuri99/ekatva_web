import { getApiBaseUrl } from "@/lib/api";
import {
  formatInr,
  splitIntoSentences,
  type OnlinePoojaDetail,
  type OnlinePoojaEvent,
  type PoojaDetails,
} from "@/services/onlinePooja";

export type { PoojaDetails };

interface PoojasListResponse {
  status: string;
  total?: number;
  count?: number;
  poojas: PoojaDetails[];
}

interface PoojaDetailsResponse {
  status: string;
  pooja: PoojaDetails;
}

export class PoojaApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "PoojaApiError";
    this.status = status;
  }
}

/** Card model for Book Pandit / ePuja grids. */
export interface PoojaListItem {
  poojaId: string;
  title: string;
  image: string;
  category: string;
  price: number | null;
  godName: string;
  shortDescription: string;
}

let cachedList: PoojaListItem[] | null = null;
let listInflight: Promise<PoojaListItem[]> | null = null;
const detailCache = new Map<string, PoojaDetails>();
const detailInflight = new Map<string, Promise<PoojaDetails>>();
const catalogDetailCache = new Map<string, OnlinePoojaDetail>();

export function getCachedPoojasList(): PoojaListItem[] | null {
  return cachedList;
}

export function getCachedPoojaDetails(poojaId: string): PoojaDetails | null {
  return detailCache.get(poojaId) ?? null;
}

export function getCachedCatalogPoojaDetail(
  poojaId: string,
): OnlinePoojaDetail | null {
  return catalogDetailCache.get(poojaId) ?? null;
}

function toListItem(pooja: PoojaDetails): PoojaListItem {
  const description = pooja.poojaDescription?.trim() || "";
  const shortDescription =
    description.split(/(?<=[.!?])\s+/)[0]?.trim() ||
    (pooja.godName?.trim()
      ? `Sacred ritual dedicated to ${pooja.godName.trim()}.`
      : pooja.category?.trim() || "Authentic Vedic pooja.");

  return {
    poojaId: pooja.poojaId,
    title: pooja.poojaName?.trim() || "Sacred Pooja",
    image: pooja.imageUrl?.trim() || "",
    category: pooja.category?.trim() || "Pooja",
    price: typeof pooja.price === "number" ? pooja.price : null,
    godName: pooja.godName?.trim() || "",
    shortDescription:
      shortDescription.length > 110
        ? `${shortDescription.slice(0, 107).trim()}…`
        : shortDescription,
  };
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
  return instructions
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const match = block.match(/^([^:]{3,40}):\s*([\s\S]+)$/);
      if (match) {
        return { title: match[1].trim(), body: match[2].trim() };
      }
      return { title: "Guidance", body: block };
    });
}

/** Build the shared detail view used by pooja detail UI sections. */
export function buildCatalogPoojaDetail(pooja: PoojaDetails): OnlinePoojaDetail {
  const title = pooja.poojaName?.trim() || "Sacred Pooja";
  const description = pooja.poojaDescription?.trim() || "";
  const benefitsText = pooja.benefits?.trim() || "";
  const whoText = pooja.whoShouldDo?.trim() || "";
  const receiveText = pooja.whatYouWillGet?.trim() || "";

  const event: OnlinePoojaEvent = {
    id: pooja.poojaId,
    onlinePoojaId: pooja.poojaId,
    poojaId: pooja.poojaId,
    title,
    category: pooja.category?.trim() || "Pooja",
    image: pooja.imageUrl?.trim() || "",
    location: "At Your Place / Temple",
    locationShort: "Home visit or temple",
    datetime: "",
    sortDate: "",
    dateLabel: pooja.duration?.trim() || "Flexible timing",
    timeLabel: "As per muhurtham",
    homeDateLabel: pooja.duration?.trim() || "Flexible timing",
    day: "",
    month: "",
    weekday: "",
    price: typeof pooja.price === "number" ? pooja.price : 0,
  };

  const detail: OnlinePoojaDetail = {
    event,
    pooja,
    subtitle:
      pooja.godName?.trim() ||
      pooja.category?.trim() ||
      "Authentic Vedic Ritual",
    intro:
      description.split(/(?<=[.!?])\s+/).slice(0, 2).join(" ") || description,
    benefits: benefitsText
      ? splitIntoSentences(benefitsText, 6)
      : ["Receive divine blessings through this sacred pooja."],
    idealFor: whoText
      ? splitIntoSentences(whoText, 5)
      : ["Devotees seeking divine blessings and spiritual well-being."],
    receive: receiveText
      ? splitIntoSentences(receiveText, 6)
      : [
          "Traditional pooja by experienced priests",
          "Spiritual guidance and prasadam blessings",
        ],
    vidhanamSteps: pooja.poojaVidhanam
      ? splitVidhanamSteps(pooja.poojaVidhanam)
      : [],
    instructionBlocks: pooja.instructions
      ? splitInstructionBlocks(pooja.instructions)
      : [],
  };

  catalogDetailCache.set(pooja.poojaId, detail);
  return detail;
}

/**
 * GET /api/poojas?language=en&sort_order=asc
 * Returns Active poojas for the Book Pandit grid.
 */
export async function fetchPoojasList(
  options: { force?: boolean } = {},
): Promise<PoojaListItem[]> {
  if (!options.force && cachedList) return cachedList;
  if (!options.force && listInflight) return listInflight;

  const request = (async () => {
    const url = `${getApiBaseUrl()}/api/poojas?language=en&sort_order=asc`;
    let response: Response;
    try {
      response = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
    } catch {
      throw new PoojaApiError(
        "Unable to reach the server. Please check your connection and try again.",
        0,
      );
    }

    if (!response.ok) {
      throw new PoojaApiError(
        "Unable to load poojas right now. Please try again later.",
        response.status,
      );
    }

    let payload: PoojasListResponse;
    try {
      payload = (await response.json()) as PoojasListResponse;
    } catch {
      throw new PoojaApiError("Unexpected response from poojas API.", response.status);
    }

    const items = (payload.poojas ?? [])
      .filter((pooja) => (pooja.status ?? "Active").toLowerCase() === "active")
      .map((pooja) => {
        detailCache.set(pooja.poojaId, pooja);
        return toListItem(pooja);
      });

    cachedList = items;
    return items;
  })().finally(() => {
    if (listInflight === request) listInflight = null;
  });

  listInflight = request;
  return request;
}

/**
 * GET /api/poojas/:poojaId?language=en
 */
export async function fetchPoojaById(
  poojaId: string,
  options: { force?: boolean } = {},
): Promise<PoojaDetails> {
  if (!options.force) {
    const cached = detailCache.get(poojaId);
    if (cached) return cached;
    const pending = detailInflight.get(poojaId);
    if (pending) return pending;
  }

  const request = (async () => {
    const url = `${getApiBaseUrl()}/api/poojas/${encodeURIComponent(poojaId)}?language=en`;
    let response: Response;
    try {
      response = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
    } catch {
      throw new PoojaApiError(
        "Unable to reach the server. Please check your connection and try again.",
        0,
      );
    }

    if (!response.ok) {
      throw new PoojaApiError(
        response.status === 404
          ? "This pooja could not be found."
          : "Unable to load pooja details right now. Please try again later.",
        response.status,
      );
    }

    let payload: PoojaDetailsResponse;
    try {
      payload = (await response.json()) as PoojaDetailsResponse;
    } catch {
      throw new PoojaApiError("Unexpected response from pooja API.", response.status);
    }

    if (!payload.pooja) {
      throw new PoojaApiError("Pooja details were empty.", 502);
    }

    detailCache.set(poojaId, payload.pooja);
    return payload.pooja;
  })().finally(() => {
    detailInflight.delete(poojaId);
  });

  detailInflight.set(poojaId, request);
  return request;
}

export async function fetchCatalogPoojaDetail(
  poojaId: string,
  options: { force?: boolean } = {},
): Promise<OnlinePoojaDetail> {
  if (!options.force) {
    const cached = catalogDetailCache.get(poojaId);
    if (cached) return cached;
  }
  const pooja = await fetchPoojaById(poojaId, options);
  return buildCatalogPoojaDetail(pooja);
}

export { formatInr };
