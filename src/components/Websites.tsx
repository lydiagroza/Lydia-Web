"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { ease } from "@/lib/motion";
import type { WebsiteView } from "@/data/websites";
import type { Dictionary } from "@/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

type T = Dictionary["websites"];

// Width the full-page previews were captured at.
const PREVIEW_WIDTH = 900;

// Fake browser bar so the screenshots read as real, live sites.
function BrowserBar({ href }: { href?: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-foreground/[0.04] px-3.5 py-2">
      <span aria-hidden className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
        <span className="h-2 w-2 rounded-full bg-foreground/15" />
      </span>
      {href && (
        <span className="truncate font-code text-[11px] text-muted">
          {new URL(href).hostname}
        </span>
      )}
    </div>
  );
}

// Scrolls the whole page past on hover (or, on touch screens, once the card
// is in view), so visitors see the full site instead of just its hero.
function ScrollingPreview({
  src,
  height,
  alt,
}: {
  src: string;
  height: number;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.7 });
  // Roughly 1.4s per screen of page, so long and short sites scroll at the
  // same speed.
  const seconds = Math.max(3, (height / PREVIEW_WIDTH - 0.625) * 1.4);

  return (
    <div ref={ref} className="absolute inset-0 [container-type:size]">
      <Image
        src={src}
        alt={alt}
        width={PREVIEW_WIDTH}
        height={height}
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
        data-active={inView}
        style={{ "--scroll-duration": `${seconds}s` } as React.CSSProperties}
        className="absolute inset-x-0 top-0 h-auto w-full transition-transform duration-700 ease-in-out motion-safe:group-hover:translate-y-[calc(-100%+100cqh)] motion-safe:group-hover:duration-(--scroll-duration) motion-safe:pointer-coarse:data-[active=true]:translate-y-[calc(-100%+100cqh)] motion-safe:pointer-coarse:data-[active=true]:duration-(--scroll-duration)"
      />
    </div>
  );
}

function WebsiteCard({ site, t, index }: { site: WebsiteView; t: T; index: number }) {
  const body = (
    <>
      <BrowserBar href={site.href} />
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-foreground/[0.03]">
        {site.preview ? (
          <ScrollingPreview
            src={site.preview.src}
            height={site.preview.height}
            alt={site.name}
          />
        ) : (
          <Image
            src={site.image}
            alt={site.name}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.03]"
          />
        )}
        {!site.href && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-border bg-background/85 px-2.5 py-1 text-xs text-muted backdrop-blur-sm">
            <Lock size={12} />
            {t.private}
          </span>
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
