import { AnimatePresence, m } from "framer-motion";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  Check,
  ChevronDown,
  CircleHelp,
  Mail,
  MessageSquareText,
  // Paperclip,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import {
  CONTACT_PAGE,
  CONTACT_QUERY_TYPES,
} from "@/content/contact";
import { toast } from "@/hooks/use-toast";
import {
  easeOutExpo,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ContactApiError, submitContact } from "@/services/contact";

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "queryType" | "message", string>
>;

const fieldShell =
  "flex w-full items-center gap-2.5 rounded-xl border border-[#E5E7EB] bg-white px-3.5 py-3 transition-[border-color,box-shadow] focus-within:border-[#F27022]/55 focus-within:shadow-[0_0_0_3px_rgba(242,112,34,0.12)]";

const inputClass =
  "w-full min-w-0 border-0 bg-transparent font-home text-[14px] text-[#1A1A1A] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60";

function normalizePhone(value: string): string {
  return value.replace(/[^\d+]/g, "");
}

function validate(values: {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name";
  if (!values.email.trim()) {
    errors.email = "Please enter your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (!digits) {
    errors.phone = "Please enter your phone number";
  } else if (digits.length < 10) {
    errors.phone = "Enter a valid phone number (at least 10 digits)";
  }
  if (!values.queryType) errors.queryType = "Please select a query type";
  if (!values.message.trim()) {
    errors.message = "Please write a short message";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters";
  }
  return errors;
}

interface QueryTypeSelectProps {
  value: string;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
  onChange: (value: string) => void;
}

function QueryTypeSelect({
  value,
  disabled,
  invalid,
  describedBy,
  onChange,
}: QueryTypeSelectProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const selected = CONTACT_QUERY_TYPES.findIndex((type) => type === value);
    setActiveIndex(selected >= 0 ? selected : 0);
  }, [open, value]);

  const selectOption = (next: string) => {
    onChange(next);
    setOpen(false);
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (
      !open &&
      (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      setOpen(true);
      return;
    }

    if (!open) return;

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        index <= 0 ? CONTACT_QUERY_TYPES.length - 1 : index - 1,
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) =>
        index >= CONTACT_QUERY_TYPES.length - 1 ? 0 : index + 1,
      );
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const next = CONTACT_QUERY_TYPES[activeIndex];
      if (next) selectOption(next);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id="contact-query"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label="Select Query Type"
        aria-required="true"
        aria-invalid={invalid}
        aria-describedby={describedBy}
        onClick={() => {
          if (!disabled) setOpen((prev) => !prev);
        }}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          fieldShell,
          "w-full cursor-pointer text-left outline-none",
          open &&
            "border-[#F27022]/55 shadow-[0_0_0_3px_rgba(242,112,34,0.12)]",
          invalid && "border-red-400/70",
          disabled && "cursor-not-allowed opacity-60",
        )}
      >
        <CircleHelp
          className={cn(
            "h-4 w-4 shrink-0 transition-colors",
            open || value ? "text-[#F27022]" : "text-[#9CA3AF]",
          )}
          strokeWidth={1.75}
          aria-hidden
        />
        <span
          className={cn(
            "min-w-0 flex-1 truncate font-home text-[14px]",
            value ? "font-medium text-[#1A1A1A]" : "text-[#9CA3AF]",
          )}
        >
          {value || "Select Query Type *"}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#9CA3AF] transition-transform duration-200",
            open && "rotate-180 text-[#F27022]",
          )}
          strokeWidth={2}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.ul
            id={listId}
            role="listbox"
            aria-label="Query types"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: easeOutExpo }}
            className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white p-1.5 shadow-[0_16px_40px_rgba(31,41,55,0.14)]"
          >
            {CONTACT_QUERY_TYPES.map((type, index) => {
              const selected = value === type;
              const active = activeIndex === index;
              return (
                <li key={type} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => selectOption(type)}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left font-home text-[13px] transition-colors sm:text-[14px]",
                      selected
                        ? "bg-[#FFF1E6] font-semibold text-[#C2410C]"
                        : active
                          ? "bg-[#F9FAFB] text-[#1A1A1A]"
                          : "text-[#374151] hover:bg-[#F9FAFB]",
                    )}
                  >
                    <span>{type}</span>
                    {selected && (
                      <Check
                        className="h-4 w-4 shrink-0 text-[#F27022]"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  // Attach file upload — disabled for now
  // const fileInputId = useId();
  // const fileRef = useRef<HTMLInputElement>(null);
  // const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  const clearError = (key: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  // const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const next = e.target.files?.[0] ?? null;
  //   if (next && next.size > CONTACT_PAGE.maxAttachmentBytes) {
  //     setFile(null);
  //     e.target.value = "";
  //     setErrors((prev) => ({
  //       ...prev,
  //       file: "File must be 5MB or smaller",
  //     }));
  //     return;
  //   }
  //   setFile(next);
  //   clearError("file");
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate({ name, email, phone, queryType, message });
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setLoading(true);
    try {
      const result = await submitContact({
        name: name.trim(),
        email: email.trim(),
        phone: normalizePhone(phone.trim()),
        queryType,
        message: message.trim(),
        // attachmentName: file?.name,
      });
      toast({
        variant: "success",
        title: CONTACT_PAGE.successTitle,
        description:
          result.via === "mailto"
            ? "Your email app should open with the message ready to send."
            : CONTACT_PAGE.successDescription,
      });
      setName("");
      setEmail("");
      setPhone("");
      setQueryType("");
      setMessage("");
      // setFile(null);
      // if (fileRef.current) fileRef.current.value = "";
      setErrors({});
    } catch (err) {
      const description =
        err instanceof ContactApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong. Please try again later.";
      toast({
        variant: "error",
        title: "Could not send message",
        description,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <m.form
      onSubmit={handleSubmit}
      noValidate
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_28px_rgba(31,41,55,0.05)] sm:p-7 lg:p-8"
    >
      <m.div variants={fadeUp}>
        <h2 className="font-home text-xl font-bold tracking-tight text-[#1A1A1A] sm:text-[1.35rem]">
          {CONTACT_PAGE.formTitle}
        </h2>
        <p className="mt-1.5 font-home text-[13px] text-[#6B7280] sm:text-sm">
          {CONTACT_PAGE.formHint}
        </p>
      </m.div>

      <m.div
        variants={fadeUp}
        className="mt-6 space-y-4 rounded-2xl bg-[#F7F7F8] p-4 sm:mt-7 sm:space-y-5 sm:p-5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className={cn(fieldShell, errors.name && "border-red-400/70")}>
              <UserRound
                className="h-4 w-4 shrink-0 text-[#9CA3AF]"
                strokeWidth={1.75}
                aria-hidden
              />
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                value={name}
                disabled={loading}
                onChange={(e) => {
                  setName(e.target.value);
                  clearError("name");
                }}
                placeholder="Full Name *"
                aria-label="Full Name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                className={inputClass}
              />
            </div>
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="mt-1.5 font-home text-[12px] text-red-600"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <div className={cn(fieldShell, errors.email && "border-red-400/70")}>
              <Mail
                className="h-4 w-4 shrink-0 text-[#9CA3AF]"
                strokeWidth={1.75}
                aria-hidden
              />
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                disabled={loading}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError("email");
                }}
                placeholder="Email Address *"
                aria-label="Email Address"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={inputClass}
              />
            </div>
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="mt-1.5 font-home text-[12px] text-red-600"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className={cn(fieldShell, errors.phone && "border-red-400/70")}>
              <Phone
                className="h-4 w-4 shrink-0 text-[#9CA3AF]"
                strokeWidth={1.75}
                aria-hidden
              />
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={phone}
                disabled={loading}
                onChange={(e) => {
                  setPhone(e.target.value);
                  clearError("phone");
                }}
                placeholder="Phone Number *"
                aria-label="Phone Number"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={
                  errors.phone ? "contact-phone-error" : undefined
                }
                className={inputClass}
              />
            </div>
            {errors.phone && (
              <p
                id="contact-phone-error"
                role="alert"
                className="mt-1.5 font-home text-[12px] text-red-600"
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <QueryTypeSelect
              value={queryType}
              disabled={loading}
              invalid={!!errors.queryType}
              describedBy={
                errors.queryType ? "contact-query-error" : undefined
              }
              onChange={(next) => {
                setQueryType(next);
                clearError("queryType");
              }}
            />
            {errors.queryType && (
              <p
                id="contact-query-error"
                role="alert"
                className="mt-1.5 font-home text-[12px] text-red-600"
              >
                {errors.queryType}
              </p>
            )}
          </div>
        </div>

        <div>
          <div
            className={cn(
              fieldShell,
              "items-start",
              errors.message && "border-red-400/70",
            )}
          >
            <MessageSquareText
              className="mt-0.5 h-4 w-4 shrink-0 text-[#9CA3AF]"
              strokeWidth={1.75}
              aria-hidden
            />
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={message}
              disabled={loading}
              onChange={(e) => {
                setMessage(e.target.value);
                clearError("message");
              }}
              placeholder="Write your message... *"
              aria-label="Message"
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              className={cn(inputClass, "min-h-[120px] resize-y leading-relaxed")}
            />
          </div>
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="mt-1.5 font-home text-[12px] text-red-600"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Attach file upload — disabled for now
        <div>
          <div
            className={cn(
              fieldShell,
              "justify-between gap-3",
              errors.file && "border-red-400/70",
            )}
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <Paperclip
                className="h-4 w-4 shrink-0 text-[#9CA3AF]"
                strokeWidth={1.75}
                aria-hidden
              />
              <div className="min-w-0">
                <p className="truncate font-home text-[14px] text-[#6B7280]">
                  {file ? file.name : "Attach File (optional)"}
                </p>
                <p className="font-home text-[11px] text-[#C2410C]">
                  {CONTACT_PAGE.attachHint}
                </p>
              </div>
            </div>
            <label
              htmlFor={fileInputId}
              className="shrink-0 cursor-pointer rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 font-home text-[12px] font-semibold text-[#374151] transition-colors hover:border-[#F27022]/40 hover:text-[#F27022]"
            >
              Choose File
            </label>
            <input
              ref={fileRef}
              id={fileInputId}
              type="file"
              className="sr-only"
              disabled={loading}
              accept="image/*,.pdf,.doc,.docx,.txt"
              onChange={onFileChange}
            />
          </div>
          {errors.file && (
            <p role="alert" className="mt-1.5 font-home text-[12px] text-red-600">
              {errors.file}
            </p>
          )}
        </div>
        */}
      </m.div>

      <m.div variants={fadeUp} className="mt-6 sm:mt-7">
        <m.button
          type="submit"
          disabled={loading}
          whileHover={loading ? undefined : { scale: 1.01 }}
          whileTap={loading ? undefined : { scale: 0.985 }}
          transition={{ duration: 0.2, ease: easeOutExpo }}
          className="btn-shine group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#F27022] font-home text-[14px] font-semibold tracking-wide text-white shadow-[0_10px_28px_rgba(242,112,34,0.32)] transition-[filter] hover:brightness-105 disabled:pointer-events-none disabled:opacity-60 sm:h-[52px] sm:text-[15px]"
        >
          <Send className="h-4 w-4" strokeWidth={2} aria-hidden />
          {loading ? "Sending…" : "Send Message"}
        </m.button>
      </m.div>
    </m.form>
  );
}
