import { m } from "framer-motion";
import { Play } from "lucide-react";
import { useMemo } from "react";
import { fadeUp } from "@/lib/animations";
import type { OnlinePoojaDetail } from "@/services/onlinePooja";

function toEmbedUrl(videoUrl: string): string | null {
  try {
    const url = new URL(videoUrl);
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.split("/")[2];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      const id = url.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function EventPoojaVideo({ detail }: { detail: OnlinePoojaDetail }) {
  const videoUrl = detail.pooja.videoUrl?.trim();
  const embedUrl = useMemo(
    () => (videoUrl ? toEmbedUrl(videoUrl) : null),
    [videoUrl],
  );

  if (!embedUrl) return null;

  return (
    <section
      className="bg-white py-10 sm:py-12 lg:py-14"
      aria-labelledby="event-pooja-video-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <m.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h2
            id="event-pooja-video-heading"
            className="inline-flex items-center gap-2 font-home text-[1.4rem] font-bold text-[#8B2E28] sm:text-[1.65rem]"
          >
            <Play
              className="h-5 w-5 text-[#F27022]"
              strokeWidth={2.2}
              aria-hidden
            />
            Watch Pooja Glimpse
          </h2>
          <div
            className="mx-auto mt-2.5 h-[3px] w-14 rounded-full bg-[#F27022]"
            aria-hidden
          />
        </m.div>

        <m.div
          className="mx-auto mt-8 max-w-[760px] overflow-hidden rounded-[18px] border border-[#E8DFD2] bg-[#111] shadow-[0_16px_40px_rgba(31,41,55,0.12)]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="aspect-video w-full">
            <iframe
              src={embedUrl}
              title={`${detail.event.title} video`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
