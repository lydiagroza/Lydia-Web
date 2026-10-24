"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import DirectContact from "./DirectContact";
import { useIntro } from "./IntroProvider";
import type { Dictionary } from "@/i18n/dictionaries";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function Hero({
  t,
  quoteHref,
}: {
  t: Dictionary["hero"];
  quoteHref: string;
}) {
  const { ready } = useIntro();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="flex flex-col items-center"
      >
        <motion.div variants={item} className="relative mb-7">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full bg-indigo/30 blur-2xl"
          />
          <div className="relative h-24 w-24 sm:h-28 sm:w-28">
            <Image
              src="/avatar.jpg"
              alt="Lydia Groza"
              fill
              sizes="112px"
              className="rounded-full border border-foreground/20 object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-5 flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent"
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse"
          />
          {t.badge}
        </motion.p>

        <motion.p
          variants={item}
          className="font-mono text-sm text-muted"
        >
          {t.name}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 max-w-3xl text-balance font-display text-4xl sm:text-6xl font-semibold tracking-tight text-foreground"
        >
          {t.title}
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-balance text-lg text-muted"
        >
          {t.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={quoteHref}
            className="whitespace-nowrap rounded-md bg-indigo px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-10px_rgba(79,70,229,0.8)] transition-[background-color,box-shadow,translate] hover:-translate-y-px hover:bg-indigo-bright hover:shadow-[0_10px_30px_-8px_rgba(79,70,229,0.9)]"
          >
            {t.ctaContact}
          </a>
          <a
            href="#work"
            className="whitespace-nowrap rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            {t.ctaWork}
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8">
          <DirectContact t={t} />
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        aria-label={t.scroll}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        className="absolute bottom-8 text-muted/60 transition-colors hover:text-accent"
      >
        <ChevronDown size={22} className="motion-safe:animate-bounce" />
      </motion.a>
    </section>
  );
}
