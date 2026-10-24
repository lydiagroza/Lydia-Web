"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import type { Dictionary } from "@/i18n/dictionaries";

// The "How it works" steps. Each one lights up in turn as it scrolls into
// view: a bar draws across its top and its number brightens.
export default function ProcessSteps({
  steps,
}: {
  steps: Dictionary["services"]["steps"];
}) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <motion.li
          key={step.title}
          initial="dim"
          whileInView="lit"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delayChildren: 0.15 + i * 0.25 }}
          className="relative bg-background p-6"
        >
          <motion.span
            aria-hidden
            variants={{ dim: { scaleX: 0 }, lit: { scaleX: 1 } }}
            transition={{ duration: 0.6, ease }}
            className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-indigo to-accent"
          />
          <motion.span
            variants={{
              dim: { opacity: 0.35, textShadow: "0 0 0px rgba(139,143,248,0)" },
              lit: { opacity: 1, textShadow: "0 0 14px rgba(139,143,248,0.8)" },
            }}
            transition={{ duration: 0.5, ease }}
            className="block font-code text-xs text-accent"
          >
            {String(i + 1).padStart(2, "0")}
          </motion.span>
          <p className="mt-2 font-display font-semibold text-foreground">
            {step.title}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
        </motion.li>
      ))}
    </ol>
  );
}
