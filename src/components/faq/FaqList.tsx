import { m } from "framer-motion";
import faqArt from "@/assets/images/faq.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/content/faq";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export function FaqList() {
  return (
    <section
      className="bg-white pb-14 pt-2 sm:pb-16 lg:pb-20"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8">
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <filter id="faq-knockout-black" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0.9 0.9 0.9 0 -0.05"
              />
            </filter>
          </defs>
        </svg>

        <m.div
          className="mb-8 flex justify-center sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <img
            src={faqArt}
            alt=""
            aria-hidden
            className="h-20 w-auto object-contain sm:h-24"
            style={{ filter: "url(#faq-knockout-black)" }}
          />
        </m.div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue={FAQ_ITEMS[0].id}
            className="space-y-3 sm:space-y-3.5"
          >
            {FAQ_ITEMS.map((item, index) => (
              <m.div key={item.id} variants={fadeUp}>
                <AccordionItem
                  value={item.id}
                  className="overflow-hidden rounded-xl border-0 border border-solid border-[#EDE6DC] bg-white px-4 shadow-[0_4px_16px_rgba(31,41,55,0.04)] transition-[border-color,box-shadow] duration-200 data-[state=open]:border-[#F27022]/35 data-[state=open]:shadow-[0_8px_24px_rgba(242,112,34,0.1)] sm:px-5"
                >
                  <AccordionTrigger
                    className="gap-3 py-4 font-home text-[14px] font-bold text-[#1A1A1A] hover:no-underline hover:text-[#F27022] sm:py-5 sm:text-[15px] [&[data-state=open]>svg]:text-[#F27022]"
                  >
                    <span className="flex min-w-0 flex-1 items-center gap-3 text-left">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F27022] font-home text-[13px] font-bold text-white sm:h-8 sm:w-8 sm:text-[14px]">
                        ?
                      </span>
                      <span>
                        {index + 1}. {item.question}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-0 font-home text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                    <m.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: easeOutExpo }}
                      className="pl-10 sm:pl-11"
                    >
                      {item.answer}
                    </m.div>
                  </AccordionContent>
                </AccordionItem>
              </m.div>
            ))}
          </Accordion>
        </m.div>
      </div>
    </section>
  );
}
