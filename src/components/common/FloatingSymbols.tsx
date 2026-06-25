import { motion } from "framer-motion";
import { floatingMotion, floatingMotionSlow } from "@/lib/animations";
import { cn } from "@/lib/utils";

const symbols = [
  { id: "om", char: "ॐ", top: "12%", left: "8%", size: "text-3xl", delay: 0 },
  { id: "lotus", char: "✿", top: "22%", right: "10%", size: "text-2xl", delay: 1 },
  { id: "star", char: "✦", top: "55%", left: "5%", size: "text-xl", delay: 2 },
  { id: "mandala", char: "☸", top: "68%", right: "7%", size: "text-3xl", delay: 0.5 },
  { id: "dot", char: "◈", top: "40%", right: "18%", size: "text-lg", delay: 1.5 },
];

export function FloatingSymbols({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {symbols.map((symbol, i) => (
        <motion.span
          key={symbol.id}
          className={cn(
            "absolute font-heading text-primary/20 select-none",
            symbol.size,
          )}
          style={{
            top: symbol.top,
            left: symbol.left,
            right: symbol.right,
          }}
          animate={i % 2 === 0 ? floatingMotion : floatingMotionSlow}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: symbol.delay }}
        >
          {symbol.char}
        </motion.span>
      ))}
    </div>
  );
}
