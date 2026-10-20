"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Coffee, LayoutTemplate } from "lucide-react";
import { ease } from "@/lib/motion";
import type { Dictionary } from "@/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

const icons = [LayoutTemplate, Coffee, CalendarCheck];

export default function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                className="flex flex-col rounded-xl border border-border bg-background/80 p-6 backdrop-blur-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo/15 text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                <p className="mt-auto pt-5 font-mono text-xs text-accent/80">
                  {item.example}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-16"
        >
          <h3 className="mb-6 font-mono text-sm text-muted">{t.processTitle}</h3>
          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <li key={step.title} className="bg-background p-6">
                <span className="font-code text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
