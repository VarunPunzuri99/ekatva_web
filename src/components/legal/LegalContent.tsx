import type { LegalBlock, LegalDocument, LegalSection } from "@/content/legalTypes";

function renderBlocks(blocks: LegalBlock[], keyPrefix: string) {
  return blocks.map((block, index) => {
    const key = `${keyPrefix}-${index}`;

    if (block.type === "paragraph") {
      return (
        <p
          key={key}
          className="font-home text-[14px] leading-relaxed text-[#555555] sm:text-[15px]"
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={key} className="space-y-2.5 pl-0.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 font-home text-[14px] leading-relaxed text-[#333333] sm:text-[15px]"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F27022]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div
        key={key}
        className="rounded-xl border border-[#F27022]/15 bg-[#FFF8EE] px-4 py-4 sm:px-5 sm:py-5 md:px-6"
      >
        <h3 className="font-home text-[12px] font-bold tracking-[0.06em] text-[#F27022] uppercase sm:text-[13px]">
          {block.title}
        </h3>
        <div className="mt-3 space-y-3">{renderBlocks(block.blocks, key)}</div>
      </div>
    );
  });
}

function Section({ section }: { section: LegalSection }) {
  return (
    <section
      id={`section-${section.number}`}
      className="scroll-mt-28 rounded-xl border border-black/[0.04] bg-[#FFFCFA] p-4 sm:p-5 md:p-6"
      aria-labelledby={`heading-${section.number}`}
    >
      <div className="flex items-start gap-3 border-b border-[#F27022]/15 pb-3 sm:items-baseline sm:gap-4">
        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-[#FFF3E6] px-2 font-home text-[12px] font-bold tabular-nums text-[#F27022] sm:text-[13px]">
          {String(section.number).padStart(2, "0")}
        </span>
        <h2
          id={`heading-${section.number}`}
          className="font-home text-[16px] font-bold tracking-tight text-[#1A1A1A] sm:text-[17px] md:text-[18px]"
        >
          {section.title}
        </h2>
      </div>
      <div className="mt-4 space-y-4 md:mt-5 md:space-y-5">
        {renderBlocks(section.blocks, `s${section.number}`)}
      </div>
    </section>
  );
}

interface LegalContentProps {
  document: LegalDocument;
}

export function LegalContent({ document }: LegalContentProps) {
  return (
    <article className="w-full">
      <div className="space-y-4 border-b border-black/5 pb-8 md:space-y-5 md:pb-10">
        {document.intro.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="font-home text-[14px] leading-relaxed text-[#444444] sm:text-[15px] md:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-8 space-y-5 md:mt-10 md:space-y-6">
        {document.sections.map((section) => (
          <Section key={section.number} section={section} />
        ))}
      </div>

      {document.closing && (
        <p className="mt-8 rounded-2xl border border-[#F27022]/20 bg-gradient-to-br from-[#FFF8EE] to-[#FFF3E6] px-5 py-5 font-home text-[14px] leading-relaxed text-[#1A1A1A] sm:text-[15px] md:mt-10 md:px-6 md:py-6">
          {document.closing}
        </p>
      )}
    </article>
  );
}
