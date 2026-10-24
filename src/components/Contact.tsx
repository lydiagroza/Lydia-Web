"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeading from "./SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

const secondary =
  "flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent";

export default function Contact({
  t,
  quoteHref,
}: {
  t: Dictionary["contact"];
  quoteHref: string;
}) {
  return (
    <section id="contact" className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-2xl text-center"
      >
        <SectionHeading eyebrow={t.eyebrow} title={t.title} centered />
        <p className="mt-4 text-muted text-lg mb-10">{t.body}</p>

        <a
          href={quoteHref}
          className="inline-flex items-center gap-2 rounded-md bg-indigo px-7 py-3.5 font-medium text-white shadow-[0_8px_24px_-10px_rgba(79,70,229,0.8)] transition-[background-color,box-shadow,translate] hover:-translate-y-px hover:bg-indigo-bright hover:shadow-[0_10px_30px_-8px_rgba(79,70,229,0.9)]"
        >
          {t.cta}
          <ArrowRight size={17} />
        </a>

        <p className="mt-12 mb-5 font-mono text-sm text-muted">{t.direct}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:lydiagroza@gmail.com"
            className={secondary}
          >
            <Mail size={16} />
            {t.email}
          </a>
          <a
            href={`https://wa.me/40723040958?text=${encodeURIComponent(t.whatsappText)}`}
            target="_blank"
            rel="noreferrer"
            className={secondary}
          >
            <MessageCircle size={16} />
            {t.whatsapp}
          </a>
          <a
            href="https://github.com/lydiagroza"
            target="_blank"
            rel="noreferrer"
            className={secondary}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lydiagroza/"
            target="_blank"
            rel="noreferrer"
            className={secondary}
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 font-mono text-sm text-muted">
          <a
            href="mailto:lydiagroza@gmail.com"
            className="transition-colors hover:text-accent"
          >
            lydiagroza@gmail.com
          </a>
          <a
            href="tel:+40723040958"
            className="transition-colors hover:text-accent"
          >
            RO&nbsp;&nbsp;+40 723 040 958
          </a>
          <a
            href="tel:+19202051110"
            className="transition-colors hover:text-accent"
          >
            US&nbsp;&nbsp;+1 (920) 205-1110
          </a>
        </div>
      </motion.div>
    </section>
  );
}
