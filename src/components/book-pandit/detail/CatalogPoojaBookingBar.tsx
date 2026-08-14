import { m } from "framer-motion";
import { Download } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { OnlinePoojaDetail } from "@/services/onlinePooja";
import { formatInr } from "@/services/poojas";

export function CatalogPoojaBookingBar({
  detail,
}: {
  detail: OnlinePoojaDetail;
}) {
  const price =
    typeof detail.pooja.price === "number" ? detail.pooja.price : null;

  return (
    <m.div
      className="sticky bottom-0 z-30 border-t border-[#E8DFD2] bg-white/95 backdrop-blur-md"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8 xl:max-w-[1320px] xl:px-16 2xl:max-w-[1440px] 2xl:px-24">
        <div>
          <p className="font-home text-[12px] font-medium text-[#6B7280] sm:text-[13px]">
            Book with verified pandit
            {detail.pooja.duration?.trim()
              ? ` · ${detail.pooja.duration}`
              : ""}
          </p>
          {price != null && price > 0 ? (
            <p className="mt-0.5 font-home text-[1.15rem] font-bold text-[#1A1A1A] sm:text-[1.25rem]">
              {formatInr(price)}
            </p>
          ) : (
            <p className="mt-0.5 font-home text-[1.05rem] font-bold text-[#1A1A1A] sm:text-[1.15rem]">
              Price on request
            </p>
          )}
        </div>

        <a
          href="/#download"
          className="btn-shine inline-flex items-center gap-2 rounded-lg bg-[#F27022] px-5 py-3 font-home text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(242,112,34,0.28)] transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E06518] hover:shadow-[0_12px_28px_rgba(242,112,34,0.34)] sm:px-6 sm:text-[15px]"
        >
          Book via App
          <Download className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </a>
      </div>
    </m.div>
  );
}
