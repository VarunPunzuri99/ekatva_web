import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { SacredOrnament } from "@/components/common/SacredOrnament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { grantLaunchAccess, isValidLaunchCode } from "@/lib/launchAccess";
import { cn } from "@/lib/utils";

interface LaunchAccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function LaunchAccessModal({ open, onClose }: LaunchAccessModalProps) {
  const titleId = useId();
  const nameId = useId();
  const codeId = useId();
  const nameRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;

    setName("");
    setCode("");
    setError(null);
    setSubmitting(false);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => nameRef.current?.focus(), 40);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!isValidLaunchCode(code)) {
      setError("That access code is not valid. Please try again.");
      return;
    }

    setSubmitting(true);
    grantLaunchAccess(trimmedName);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close launch access dialog"
        className="absolute inset-0 bg-dark-deep/55 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 w-full overflow-y-auto overflow-x-hidden",
          "max-h-[min(92vh,720px)]",
          "max-w-[24rem] sm:max-w-md md:max-w-lg lg:max-w-xl",
          "rounded-2xl border border-primary/25 bg-background",
          "shadow-[0_24px_80px_rgba(64,8,10,0.35)]",
        )}
        style={{
          animation: "ekatva-modal-in 220ms ease-out",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-24"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--theme-primary-light) 28%, transparent) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-primary/10 hover:text-dark md:top-4 md:right-4"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative px-5 pt-7 pb-6 sm:px-8 sm:pt-8 sm:pb-7 md:px-10 md:pt-9 md:pb-8 lg:px-12">
          <Logo
            className="mb-2 md:mb-3"
            imgClassName="!h-12 sm:!h-14 md:!h-16 lg:!h-[4.25rem]"
          />
          <SacredOrnament className="mb-3 md:mb-4 [&_img]:w-36 md:[&_img]:w-48" />

          <h2
            id={titleId}
            className="text-center font-heading text-lg font-semibold tracking-[0.14em] text-dark uppercase sm:text-xl md:text-2xl"
          >
            Enter Ekatva
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center font-body text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">
            Share your name and the launch code to open the sacred home.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-5 max-w-md space-y-3.5 sm:mt-6 sm:space-y-4 md:mt-7"
            noValidate
          >
            <div className="space-y-1.5 text-left">
              <label
                htmlFor={nameId}
                className="font-ui text-xs font-semibold tracking-[0.12em] text-dark uppercase"
              >
                Your name
              </label>
              <Input
                ref={nameRef}
                id={nameId}
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError(null);
                }}
                aria-invalid={Boolean(error && name.trim().length < 2)}
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label
                htmlFor={codeId}
                className="font-ui text-xs font-semibold tracking-[0.12em] text-dark uppercase"
              >
                Access code
              </label>
              <Input
                id={codeId}
                name="code"
                autoComplete="off"
                placeholder="Enter access code"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (error) setError(null);
                }}
                aria-invalid={Boolean(error && !isValidLaunchCode(code))}
                spellCheck={false}
              />
            </div>

            {error ? (
              <p role="alert" className="font-ui text-sm text-error">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              className="mt-1 w-full md:mt-2"
              size="lg"
              disabled={submitting}
            >
              {submitting ? "Opening…" : "Enter home"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
