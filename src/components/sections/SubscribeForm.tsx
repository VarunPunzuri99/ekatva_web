import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

async function mockSubscribe(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (!email.includes("@")) throw new Error("Invalid email");
}

interface SubscribeFormProps {
  className?: string;
}

export function SubscribeForm({ className }: SubscribeFormProps) {
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
      await mockSubscribe(email.trim());
      toast({
        variant: "success",
        title: "You're on the list!",
        description: "We'll notify you when Ekatva launches.",
      });
      setEmail("");
    } catch {
      toast({
        variant: "error",
        title: "Something went wrong",
        description: "Please try again later.",
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
        className="mb-3 block text-center font-ui text-xs text-text-light md:text-sm"
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
          className="mt-2 text-left font-ui text-sm text-error"
        >
          {error}
        </p>
      )}
    </form>
  );
}
