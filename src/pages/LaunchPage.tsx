import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { m } from "framer-motion";
import { Apple, CheckCircle2, Globe2, Smartphone } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { SacredOrnament } from "@/components/common/SacredOrnament";
import { AppMotionProvider } from "@/components/layout/AppMotionProvider";
import { LaunchAccessModal } from "@/components/sections/LaunchAccessModal";
import { toast } from "@/hooks/use-toast";
import { notifyWebLaunchStatusChanged } from "@/hooks/useWebLaunchStatus";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  fetchActiveLaunchCodes,
  hasLaunchCodeRecords,
  type LaunchDevice,
} from "@/services/launchCodes";

type DeviceAvailability = Record<LaunchDevice, boolean>;

const DEVICES: {
  id: LaunchDevice;
  label: string;
  blurb: string;
  icon: typeof Globe2;
  accent: string;
  glow: string;
}[] = [
  {
    id: "Web",
    label: "Web",
    blurb: "Launch the Ekatva website experience",
    icon: Globe2,
    accent: "from-[#F27022] via-[#EA580C] to-[#C2410C]",
    glow: "shadow-[0_18px_40px_rgba(234,88,12,0.28)]",
  },
  {
    id: "Android",
    label: "Android",
    blurb: "Launch the Ekatva Android app",
    icon: Smartphone,
    accent: "from-[#D97706] via-[#F27022] to-[#B45309]",
    glow: "shadow-[0_18px_40px_rgba(217,119,6,0.26)]",
  },
  {
    id: "iOS",
    label: "iOS",
    blurb: "Launch the Ekatva iOS app",
    icon: Apple,
    accent: "from-[#9A3412] via-[#C2410C] to-[#F27022]",
    glow: "shadow-[0_18px_40px_rgba(154,52,18,0.26)]",
  },
];

export function LaunchPage() {
  const navigate = useNavigate();
  const [modalDevice, setModalDevice] = useState<LaunchDevice | null>(null);
  const [available, setAvailable] = useState<DeviceAvailability>({
    Web: true,
    Android: true,
    iOS: true,
  });
  const [loadingStatus, setLoadingStatus] = useState(true);

  const loadAvailability = useCallback(async () => {
    setLoadingStatus(true);
    try {
      const results = await Promise.allSettled([
        fetchActiveLaunchCodes("Web"),
        fetchActiveLaunchCodes("Android"),
        fetchActiveLaunchCodes("iOS"),
      ]);

      const web =
        results[0]?.status === "fulfilled" ? results[0].value : null;
      const android =
        results[1]?.status === "fulfilled" ? results[1].value : null;
      const ios =
        results[2]?.status === "fulfilled" ? results[2].value : null;

      setAvailable((prev) => ({
        Web: web != null ? hasLaunchCodeRecords(web) : prev.Web,
        Android:
          android != null ? hasLaunchCodeRecords(android) : prev.Android,
        iOS: ios != null ? hasLaunchCodeRecords(ios) : prev.iOS,
      }));
    } catch {
      // Keep previous availability; buttons still attempt launch if clicked.
    } finally {
      setLoadingStatus(false);
    }
  }, []);

  useEffect(() => {
    void loadAvailability();
  }, [loadAvailability]);

  const handleSuccess = (device: LaunchDevice) => {
    if (device === "Web") {
      notifyWebLaunchStatusChanged();
      toast({
        variant: "success",
        title: "Web launched successfully",
        description: "Welcome to Ekatva.",
      });
      navigate("/", { replace: true });
      return;
    }

    toast({
      variant: "success",
      title:
        device === "Android"
          ? "Android app launched successfully"
          : "iOS app launched successfully",
      description: "The platform status has been updated.",
    });
    void loadAvailability();
  };

  return (
    <AppMotionProvider>
      <Helmet>
        <title>Launch | Ekatva</title>
        <meta
          name="description"
          content="Launch Ekatva on Web, Android, and iOS with our chief guests."
        />
      </Helmet>

      <div className="relative isolate min-h-dvh overflow-hidden bg-[#FFF8F0]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <img
            src="/assets/landing_bg.jpeg"
            alt=""
            className="h-full w-full object-cover opacity-55"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,183,77,0.28) 0%, transparent 55%), linear-gradient(180deg, rgba(255,248,240,0.88) 0%, rgba(255,243,230,0.92) 45%, rgba(255,236,214,0.96) 100%)",
            }}
          />
        </div>

        <m.main
          className="relative z-10 mx-auto flex min-h-dvh w-full max-w-5xl flex-col items-center px-4 py-10 sm:px-6 sm:py-14 lg:py-16"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={fadeUp}>
            <Logo imgClassName="!h-14 sm:!h-16 md:!h-[4.25rem]" />
          </m.div>

          <m.div variants={fadeUp} className="mt-5 text-center sm:mt-7">
            <p className="font-heading text-sm font-medium tracking-[0.28em] text-[#9A3412] uppercase sm:text-base">
              Sacred Launch
            </p>
            <SacredOrnament className="my-4 sm:my-5" />
            <h1 className="font-home-display text-[1.75rem] font-semibold tracking-tight text-[#1A1A1A] sm:text-[2.15rem] md:text-[2.45rem]">
              Choose a platform to launch
            </h1>
            <p className="mx-auto mt-3 max-w-xl font-body text-[14px] leading-relaxed text-[#57534E] sm:mt-4 sm:text-base">
              A sacred journey towards peace, prosperity and spiritual harmony.
              Each chief guest unlocks one platform — Web, Android, or iOS.
            </p>
          </m.div>

          <m.div
            variants={fadeUp}
            className="mt-10 grid w-full max-w-4xl gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5"
          >
            {DEVICES.map((device, index) => {
              const Icon = device.icon;
              const isAvailable = Boolean(available?.[device.id]);
              const disabled = Boolean(loadingStatus) || !isAvailable;

              return (
                <m.button
                  key={device.id}
                  type="button"
                  disabled={disabled}
                  onClick={() => setModalDevice(device.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.12 + index * 0.08,
                    ease: easeOutExpo,
                  }}
                  whileHover={
                    disabled
                      ? undefined
                      : { y: -6, transition: { duration: 0.25 } }
                  }
                  whileTap={disabled ? undefined : { scale: 0.98 }}
                  className={cn(
                    "group relative flex flex-col items-center overflow-hidden rounded-[22px] border px-5 py-8 text-center transition-[box-shadow,opacity,filter] sm:py-9",
                    isAvailable
                      ? cn(
                          "border-[#F27022]/20 bg-white/80 backdrop-blur-sm",
                          device.glow,
                          "hover:border-[#F27022]/45",
                        )
                      : "cursor-not-allowed border-[#E7E5E4] bg-white/55 opacity-70 shadow-none",
                  )}
                >
                  <span
                    className={cn(
                      "mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-inner sm:h-[4.5rem] sm:w-[4.5rem]",
                      device.accent,
                      !isAvailable && "grayscale",
                    )}
                  >
                    {isAvailable ? (
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
                    ) : (
                      <CheckCircle2
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        strokeWidth={1.75}
                      />
                    )}
                  </span>

                  <span className="font-home text-[1.15rem] font-bold tracking-tight text-[#1A1A1A] sm:text-[1.25rem]">
                    {device.label}
                  </span>
                  <span className="mt-2 font-home text-[13px] leading-snug text-[#78716C] sm:text-[14px]">
                    {isAvailable
                      ? device.blurb
                      : `${device.label} already launched`}
                  </span>

                  <span
                    className={cn(
                      "mt-6 inline-flex h-11 items-center justify-center rounded-full px-6 font-home text-[13px] font-semibold tracking-wide uppercase transition-[transform,filter] sm:h-12 sm:text-[14px]",
                      isAvailable
                        ? cn(
                            "bg-gradient-to-r text-white group-hover:brightness-105",
                            device.accent,
                          )
                        : "bg-[#E7E5E4] text-[#78716C]",
                    )}
                  >
                    {loadingStatus
                      ? "Checking…"
                      : isAvailable
                        ? "Launch"
                        : "Launched"}
                  </span>
                </m.button>
              );
            })}
          </m.div>

          <m.div variants={fadeUp} className="mt-10 sm:mt-12">
            <Link
              to="/"
              className="font-ui text-sm font-medium tracking-wide text-[#9A3412] underline-offset-4 transition-colors hover:text-[#F27022] hover:underline"
            >
              Back to home
            </Link>
          </m.div>
        </m.main>
      </div>

      {modalDevice ? (
        <LaunchAccessModal
          open
          device={modalDevice}
          onClose={() => setModalDevice(null)}
          onSuccess={handleSuccess}
        />
      ) : null}
    </AppMotionProvider>
  );
}
