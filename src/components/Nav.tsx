"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { useIntro } from "./IntroProvider";
import { LogoMark, LogoWordmark } from "./Logo";
import {
  localePath,
  locales,
  quotePath,
  type Dictionary,
  type Locale,
} from "@/i18n/dictionaries";

const sections = ["services", "work", "projects", "about", "contact"] as const;

// EN · RO toggle. Each language is its own page, so these are plain links.
function LanguageSwitch({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-border p-0.5 font-code text-[11px]"
    >
      {locales.map((l) => (
        <a
          key={l}
          href={localePath[l]}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            l === locale
              ? "bg-foreground/10 text-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </a>
      ))}
    </div>
  );
}

export default function Nav({
  locale,
  t,
}: {
  locale: Locale;
  t: Dictionary["nav"];
}) {
  const links = sections.map((id) => ({ href: `#${id}`, label: t.links[id] }));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { ready, played } = useIntro();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        ready && (scrolled || open)
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          aria-label={t.home}
          className="group flex items-center gap-3"
        >
          {ready ? (
            <motion.span
              layoutId={played ? "brand-mark" : undefined}
              initial={played ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 110, damping: 19 }}
              className="flex text-[22px] text-foreground"
            >
              <LogoMark />
            </motion.span>
          ) : (
            <LogoMark className="invisible text-[22px]" />
          )}
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={ready ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: played ? 0.45 : 0.1, duration: 0.6, ease }}
            className="hidden items-center gap-3 sm:flex"
          >
            <span aria-hidden className="h-6 w-px bg-border" />
            <LogoWordmark className="text-[15px] transition-opacity group-hover:opacity-80" />
          </motion.span>
        </a>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: played ? 0.35 : 0, duration: 0.7, ease }}
          className="flex items-center gap-4 md:gap-7"
        >
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <LanguageSwitch locale={locale} label={t.language} />

        <a
          href={quotePath[locale]}
          className="whitespace-nowrap rounded-md bg-indigo px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-indigo-bright sm:text-sm"
        >
          {t.cta}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 flex flex-col gap-1.5 p-2"
          aria-label={t.menu}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col gap-4 px-6 overflow-hidden text-sm text-muted"
          >
            {links.map((link) => (
              <li key={link.href} className="last:pb-6">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
