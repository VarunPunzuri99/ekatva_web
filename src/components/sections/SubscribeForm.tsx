import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { LeadApiError, createLead } from "@/services/lead";
import { cn } from "@/lib/utils";

interface SubscribeFormProps {
  className?: string;
  /** White label text for dark / busy backgrounds */
  light?: boolean;
}

export function SubscribeForm({ className, light = false }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = (value: string): boolean => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate(email)) return;

    setLoading(true);
    try {
      const result = await createLead({ email: email.trim() });
      toast({
        variant: "success",
        title: "You're on the list",
        description:
          result.message ??
          "Thank you! We'll notify you when we launch.",
      });
      setEmail("");
      setError("");
    } catch (err) {
      const message =
        err instanceof LeadApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong. Please try again later.";

      // Already subscribed — treat as friendly success-style notice
      if (err instanceof LeadApiError && err.status === 409) {
        toast({
          variant: "success",
          title: "You're already with us",
          description: message,
        });
        setEmail("");
        return;
      }

      toast({
        variant: "error",
        title: "Could not save your email",
        description: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("mx-auto w-full max-w-xl", className)}
      noValidate
    >
      <label
        htmlFor="email-subscribe"
        className={cn(
          "mb-3 block text-center font-ui text-xs md:text-sm",
          light
            ? "text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]"
            : "text-text-muted",
        )}
      >
        Enter your Email Address
      </label>
      <div className="flex items-stretch gap-2.5">
        <Input
          id="email-subscribe"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) validate(e.target.value);
          }}
          disabled={loading}
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
          className="h-12 flex-1 rounded-md border-0 bg-surface px-4 text-base text-dark"
        />
        <Button
          type="submit"
          disabled={loading}
          className="h-12 shrink-0 rounded-md bg-primary-light px-6 font-ui text-sm font-bold tracking-wider text-dark uppercase hover:brightness-105"
        >
          {loading ? "Sending..." : "Notify Me"}
        </Button>
      </div>
      {error && (
        <p
          id="email-error"
          role="alert"
          className={cn(
            "mt-2 text-left font-ui text-sm font-medium",
            light
              ? "rounded-md bg-dark/55 px-3 py-1.5 text-[#FFB4B4] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
              : "text-error",
          )}
        >
          {error}
        </p>
      )}
    </form>
  );
}
