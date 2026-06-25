import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "@/components/common/SectionHeader";
import { toast } from "@/hooks/use-toast";
import { fadeUp } from "@/lib/animations";

async function mockSubscribe(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (!email.includes("@")) throw new Error("Invalid email");
}

export function SubscribeSection() {
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
    <section
      id="subscribe"
      aria-labelledby="subscribe-heading"
      className="relative overflow-hidden px-4 py-24 md:py-32"
    >
      <img
        src="/assets/footer-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-footer)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <SectionHeader
          label="Stay Connected"
          title="Be The First To Know"
          description="Receive launch updates, exclusive access and spiritual insights."
          light
        />

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-lg"
          noValidate
        >
          <label
            htmlFor="email-subscribe"
            className="mb-2 block text-left font-ui text-xs text-text-light/80"
          >
            Enter your Email Address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
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
              className="h-14 flex-1 rounded-xl border-0 bg-surface text-base"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="h-14 shrink-0 rounded-xl px-8"
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
        </motion.form>
      </div>
    </section>
  );
}
