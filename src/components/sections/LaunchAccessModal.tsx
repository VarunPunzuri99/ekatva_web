import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  FileText,
  X,
  type LucideIcon,
} from "lucide-react";
import { homeAssets } from "@/assets/home";
import { Logo } from "@/components/common/Logo";
import { CHIEF_GUEST } from "@/content/launchGuest";
import { easeOutExpo } from "@/lib/animations";
import { grantLaunchAccess, isValidLaunchCode } from "@/lib/launchAccess";
import { cn } from "@/lib/utils";

interface LaunchAccessModalProps {
  open: boolean;
  onClose: () => void;
}

type Step = "guest" | "code";

const HIGHLIGHT_ICONS: Record<
  (typeof CHIEF_GUEST.highlights)[number]["icon"],
  LucideIcon
> = {
  document: FileText,
  chart: BarChart3,
  building: Building2,
};

function GuestPortrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#5B7BA8] via-[#3D5A80] to-[#2C3E5A]"
        aria-hidden
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/35 bg-white/12 font-home-display text-2xl font-semibold text-white sm:h-24 sm:w-24 sm:text-3xl">
          JR
        </div>
      </div>
    );
  }

  return (
    <img
      src={CHIEF_GUEST.photo}
      alt={CHIEF_GUEST.photoAlt}
      className="h-full w-full object-cover object-[center_12%]"
      onError={() => setFailed(true)}
    />
  );
}

export function LaunchAccessModal({ open, onClose }: LaunchAccessModalProps) {
  const titleId = useId();
  const codeId = useId();
  const codeRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<Step>("guest");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;

    setStep("guest");
    setCode("");
    setError(null);
    setSubmitting(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || step !== "code") return;
    const t = window.setTimeout(() => codeRef.current?.focus(), 280);
    return () => window.clearTimeout(t);
  }, [open, step]);

  if (!open) return null;

  function handleSubmitCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!isValidLaunchCode(code)) {
      setError("That access code is not valid. Please try again.");
      return;
    }

    setSubmitting(true);
    grantLaunchAccess(CHIEF_GUEST.name);
    onClose();
  }

  const isCodeStep = step === "code";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-5 md:p-8"
      role="presentation"
    >
      <motion.button
        type="button"
        aria-label="Close launch access dialog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-[#1A0C06]/60 backdrop-blur-[6px]"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.38, ease: easeOutExpo }}
        className={cn(
          "relative z-10 flex w-full flex-col overflow-hidden",
          "max-h-[min(96dvh,820px)]",
          "rounded-t-[24px] sm:rounded-[24px]",
          isCodeStep
            ? "max-w-none border border-black/5 bg-white sm:max-w-[40rem] md:max-w-[52rem] lg:max-w-[60rem] xl:max-w-[68rem] shadow-[0_28px_80px_rgba(90,50,10,0.28)]"
            : "max-w-none border border-white/50 bg-[#FFF9F3]/95 sm:max-w-[34rem] md:max-w-[46rem] lg:max-w-[56rem] xl:max-w-[60rem] shadow-[0_-8px_40px_rgba(26,12,6,0.18),0_28px_80px_rgba(26,12,6,0.32)] ring-1 ring-[#F27022]/15",
        )}
      >
        {!isCodeStep ? (
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <img
              src="/assets/about-temple.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 55% at 15% 0%, rgba(255,183,77,0.22) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(242,112,34,0.1) 0%, transparent 50%), linear-gradient(165deg, rgba(255,251,246,0.97) 0%, rgba(255,245,235,0.94) 48%, rgba(255,240,226,0.96) 100%)",
              }}
            />
          </div>
        ) : (
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden bg-white"
            aria-hidden
          >
            {/* Crop baked-in black vignette from bg_temple.png by zooming into the golden temple area */}
            <img
              src={homeAssets.bgTemple}
              alt=""
              className="absolute left-1/2 top-1/2 h-[165%] w-[165%] max-w-none -translate-x-1/2 -translate-y-[38%] object-cover"
            />
            {/* Soft white wash at top so the orange mist reads as white */}
            <div
              className="absolute inset-x-0 top-0 h-[48%]"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 28%, rgba(255,255,255,0.82) 55%, rgba(255,255,255,0.35) 78%, transparent 100%)",
              }}
            />
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className={cn(
            "absolute top-3.5 right-3.5 z-30 flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-[color,background-color,transform] hover:scale-105 sm:top-4 sm:right-4",
            isCodeStep
              ? "border border-black/10 bg-white/75 text-[#6B7280] hover:bg-white hover:text-[#F27022]"
              : "border border-black/6 bg-white/80 text-[#6B7280] hover:bg-white hover:text-[#F27022]",
          )}
          aria-label="Close"
        >
          <X className="h-4 w-4" strokeWidth={2.25} />
        </button>

        <div
          className={cn(
            "relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain",
            isCodeStep
              ? "min-h-[min(72dvh,640px)] px-4 py-10 sm:min-h-[min(78dvh,700px)] sm:px-8 sm:py-12 md:px-12 md:py-14"
              : "px-4 pt-5 pb-5 sm:px-7 sm:pt-7 sm:pb-7 md:px-9 md:pt-8 md:pb-8 lg:px-11 lg:pt-9 lg:pb-9",
          )}
        >
          {!isCodeStep ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="shrink-0"
            >
              <Logo
                className="mb-4 sm:mb-5 md:mb-6"
                imgClassName="!h-10 sm:!h-11 md:!h-12 lg:!h-[3.35rem]"
              />
            </motion.div>
          ) : null}

          <AnimatePresence mode="wait">
            {step === "guest" ? (
              <motion.div
                key="guest"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
                className="grid min-h-0 flex-1 items-center gap-5 sm:gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] md:gap-8 lg:gap-10 xl:gap-12"
              >
                <motion.div
                  className="relative mx-auto w-full max-w-[200px] sm:max-w-[230px] md:mx-0 md:max-w-none"
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.06, ease: easeOutExpo }}
                >
                  <div className="absolute -inset-2 rounded-[22px] bg-gradient-to-br from-[#F27022]/25 via-transparent to-[#FFB71C]/20 blur-md sm:-inset-2.5" />
                  <div className="relative overflow-hidden rounded-[18px] border border-white/70 shadow-[0_18px_44px_rgba(31,41,55,0.2)] ring-1 ring-[#F27022]/12 sm:rounded-[20px]">
                    <div className="aspect-[3/4] w-full bg-[#3D5A80]">
                      <GuestPortrait />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(26,12,6,0.35) 100%)",
                      }}
                    />
                  </div>
                </motion.div>

                <div className="flex min-w-0 flex-col text-center md:text-left">
                  <p
                    id={titleId}
                    className="font-home text-[12px] leading-snug text-[#D97706] sm:text-[13px] md:text-[14px]"
                  >
                    {CHIEF_GUEST.greeting}
                  </p>
                  <h2 className="mt-1.5 font-home-display text-[1.45rem] leading-[1.2] font-semibold tracking-tight text-[#9A3412] sm:mt-2 sm:text-[1.75rem] md:text-[1.95rem] lg:text-[2.15rem]">
                    {CHIEF_GUEST.name}
                  </h2>
                  <p className="mx-auto mt-2 max-w-[36rem] font-home text-[12px] leading-relaxed text-[#57534E] sm:text-[13px] md:mx-0 md:text-[14px]">
                    {CHIEF_GUEST.title}
                  </p>

                  <ul className="mt-4 space-y-2.5 text-left sm:mt-5 sm:space-y-3">
                    {CHIEF_GUEST.highlights.map((item, index) => {
                      const Icon = HIGHLIGHT_ICONS[item.icon];
                      return (
                        <motion.li
                          key={item.id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.32,
                            delay: 0.12 + index * 0.07,
                            ease: easeOutExpo,
                          }}
                          className="flex items-start gap-3 rounded-xl border border-[#F27022]/10 bg-white/55 px-3 py-2.5 shadow-[0_2px_10px_rgba(154,52,18,0.04)] backdrop-blur-[2px] sm:gap-3.5 sm:px-3.5 sm:py-3"
                        >
                          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFF3E6] to-[#FFE0C2] text-[#EA580C] shadow-inner sm:h-9 sm:w-9">
                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                          </span>
                          <span className="pt-0.5 font-home text-[12.5px] leading-snug font-medium text-[#9A3412] sm:text-[13.5px] md:text-[14px]">
                            {item.text}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <p className="mt-4 font-home text-[12.5px] leading-relaxed text-[#C2410C]/90 italic sm:mt-5 sm:text-[13.5px] md:text-[14px]">
                    {CHIEF_GUEST.closing}
                  </p>

                  <div className="mt-5 flex justify-center sm:mt-6 md:mt-7 md:justify-start lg:mt-8">
                    <button
                      type="button"
                      onClick={() => setStep("code")}
                      className="group inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F27022] via-[#EA580C] to-[#C2410C] px-8 font-home text-[14px] font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(234,88,12,0.38)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_36px_rgba(234,88,12,0.45)] active:translate-y-0 sm:h-[3.25rem] sm:w-auto sm:min-w-[10.5rem] sm:text-[15px] md:justify-start"
                    >
                      Open
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={2.4}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: easeOutExpo }}
                className="relative z-10 flex flex-1 flex-col items-center justify-center"
              >
                <div className="flex w-full max-w-[22rem] flex-col items-center sm:max-w-[24rem] md:max-w-[26rem]">
                  <Logo
                    className="mb-8 sm:mb-10"
                    imgClassName="!h-12 sm:!h-14 md:!h-16"
                  />

                  <h2
                    id={titleId}
                    className="text-center font-home text-[1.65rem] font-bold tracking-tight text-black sm:text-[1.85rem] md:text-[2rem]"
                  >
                    Enter Code
                  </h2>

                  <form
                    onSubmit={handleSubmitCode}
                    className="mt-7 w-full space-y-4 sm:mt-8 sm:space-y-5"
                    noValidate
                  >
                    <label htmlFor={codeId} className="sr-only">
                      Access code
                    </label>
                    <input
                      ref={codeRef}
                      id={codeId}
                      name="code"
                      type="text"
                      autoComplete="off"
                      spellCheck={false}
                      placeholder=""
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value);
                        if (error) setError(null);
                      }}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "launch-code-error" : undefined}
                      className={cn(
                        "h-12 w-full rounded-full border-[1.5px] bg-white px-6 text-center font-home text-[15px] text-[#1C1917] outline-none transition-[border-color,box-shadow] sm:h-14 sm:text-base",
                        error
                          ? "border-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.18)]"
                          : "border-[#F27022] focus:border-[#EA580C] focus:shadow-[0_0_0_4px_rgba(242,112,34,0.18)]",
                      )}
                    />

                    {error ? (
                      <p
                        id="launch-code-error"
                        role="alert"
                        className="text-center font-home text-[13px] font-medium text-[#7F1D1D] drop-shadow-sm"
                      >
                        {error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FFB71C] bg-gradient-to-r from-[#7F1D1D] via-[#C2410C] to-[#F27022] font-home text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(127,29,29,0.35)] transition-[transform,box-shadow,filter] duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_14px_34px_rgba(194,65,12,0.42)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:h-14 sm:text-base"
                    >
                      {submitting ? "Opening…" : "Submit"}
                      {!submitting && (
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                          strokeWidth={2.4}
                        />
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
