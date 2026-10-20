"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { ease } from "@/lib/motion";
import type { WebsiteView } from "@/data/websites";
import type { Dictionary } from "@/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

type T = Dictionary["websites"];

// Stand-in preview for a platform that sits behind a login: a sketch of its
// schedule view rather than a screenshot of the sign-in page.
function PrivatePreview({ label }: { label: string }) {
  return (
    <div className="relative flex h-full flex-col gap-3 bg-[radial-gradient(120%_90%_at_0%_0%,rgba(79,70,229,0.28),transparent_60%)] p-5 sm:p-6">
      <div aria-hidden className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {["w-14", "w-16", "w-11"].map((w, i) => (
            <span
              key={w}
              className={`h-5 ${w} rounded-full ${i === 0 ? "bg-indigo/70" : "bg-foreground/10"}`}
            />
          ))}
        </div>
        <span className="font-code text-xs text-accent">14/18</span>
      </div>
      <div aria-hidden className="grid flex-1 grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            className={`rounded-md ${
              [2, 4, 9, 11, 16, 18, 23].includes(i)
                ? "bg-indigo/45"
                : [25].includes(i)
                  ? "bg-coral/40"
                  : "bg-foreground/[0.06]"
            }`}
          />
        ))}
      </div>
      <p className="flex items-center gap-1.5 text-xs text-muted">
        <Lock size={12} />
        {label}
      </p>
    </div>
  );
}

function WebsiteCard({ site, t, index }: { site: WebsiteView; t: T; index: number }) {
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-foreground/[0.03]">
        {site.image ? (
          <Image
            src={site.image}
            alt={site.name}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.03]"
          />
        ) : (
          <PrivatePreview label={t.private} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {site.name}
            </h3>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                site.kind === "client"
                  ? "bg-indigo/20 text-accent"
                  : "border border-border text-muted"
              }`}
            >
              {site.kind === "client" ? t.client : t.concept}
            </span>
          </div>
          {site.href && (
            <ArrowUpRight
              size={18}
              aria-hidden
              className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{site.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {site.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group flex flex-col overflow-hidden rounded-xl border border-border bg-background/80 backdrop-blur-sm transition-[border-color,box-shadow] duration-500";
  const reveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.8, delay: (index % 2) * 0.1, ease },
  };

  return site.href ? (
    <motion.a
      {...reveal}
      href={site.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${site.name} — ${t.visit}`}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 24 } }}
      className={`${className} hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(79,70,229,0.35)]`}
    >
      {body}
    </motion.a>
  ) : (
    <motion.article {...reveal} className={className}>
      {body}
    </motion.article>
  );
}

export default function Websites({ t, websites }: { t: T; websites: WebsiteView[] }) {
  return (
    <section id="work" className="relative py-28 px-6">
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

        <div className="grid gap-5 sm:grid-cols-2">
          {websites.map((site, i) => (
            <WebsiteCard key={site.name} site={site} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
