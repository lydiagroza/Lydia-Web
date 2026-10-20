"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIntro } from "./IntroProvider";
import { LogoMark, LogoWordmark } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        ready && (scrolled || open)
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          aria-label="Lydia Groza — back to top"
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
            transition={{ delay: played ? 0.45 : 0.1, duration: 0.5, ease: "easeOut" }}
            className="hidden items-center gap-3 sm:flex"
          >
            <span aria-hidden className="h-6 w-px bg-border" />
            <LogoWordmark className="text-[15px] transition-opacity group-hover:opacity-80" />
          </motion.span>
        </a>

        <motion.ul
          initial={{ opacity: 0, y: -12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: played ? 0.35 : 0, duration: 0.6, ease: "easeOut" }}
          className="hidden sm:flex items-center gap-8 text-sm text-muted"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative hover:text-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.button
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ delay: played ? 0.35 : 0, duration: 0.6 }}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
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
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden flex flex-col gap-4 px-6 overflow-hidden text-sm text-muted"
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
