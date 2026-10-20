"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { useIntro } from "./IntroProvider";
import { chevronPaths, chevronSvgProps } from "./Logo";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}#*_";

// Decodes `text` left to right out of random glyphs, like a terminal.
function useScramble(text: string, delay: number, duration: number) {
  const [out, setOut] = useState(text.replace(/\S/g, " "));

  useEffect(() => {
    let raf = 0;
    const timer = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const revealed = Math.floor(p * text.length);
        setOut(
          [...text]
            .map((c, i) =>
              c === " " || i < revealed
                ? c
                : glyphs[Math.floor(Math.random() * glyphs.length)],
            )
            .join(""),
        );
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, delay, duration]);

  return out;
}

export default function IntroSplash() {
  const { phase, skip } = useIntro();
  const descriptor = useScramble("WEB DEVELOPMENT", 1050, 650);

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="intro-bg"
            onClick={skip}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="intro-overlay fixed inset-0 z-40 overflow-hidden bg-background"
          >
            <motion.div
              aria-hidden
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 1.4, ease }}
              className="absolute left-1/2 top-1/2 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.32),rgba(79,70,229,0.08)_45%,transparent_70%)] blur-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {phase !== "done" && (
        <div
          aria-hidden
          className="intro-overlay pointer-events-none fixed inset-0 z-40 flex items-center justify-center"
        >
          <div className="relative">
            <motion.span
              layoutId="brand-mark"
              className="flex text-[72px] sm:text-[112px]"
            >
              <span className="inline-flex items-center font-display font-bold leading-none tracking-[-0.04em]">
                <motion.svg
                  {...chevronSvgProps}
                  initial={{ x: "0.62em" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 160, damping: 15 }}
                  className={`${chevronSvgProps.className} drop-shadow-[0_0_18px_rgba(79,70,229,0.7)]`}
                >
                  <motion.path
                    d={chevronPaths.left}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  />
                </motion.svg>
                <span className="flex overflow-hidden px-[0.06em] py-[0.1em]">
                  {["L", "G"].map((c, i) => (
                    <motion.span
                      key={c}
                      initial={{ y: "115%", filter: "blur(6px)" }}
                      animate={{ y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.6 + i * 0.09, duration: 0.65, ease }}
                    >
                      {c}
                    </motion.span>
                  ))}
                </span>
                <motion.svg
                  {...chevronSvgProps}
                  initial={{ x: "-0.62em" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 160, damping: 15 }}
                  className={`${chevronSvgProps.className} drop-shadow-[0_0_18px_rgba(79,70,229,0.7)]`}
                >
                  <motion.path
                    d={chevronPaths.right}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  />
                </motion.svg>
              </span>
            </motion.span>

            <AnimatePresence>
              {phase === "intro" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
                  transition={{ delay: 0.9, duration: 0.6, ease }}
                  style={{ x: "-50%" }}
                  className="absolute left-1/2 top-full mt-5 flex w-max flex-col items-center sm:mt-7"
                >
                  <span className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                    Lydia Groza
                  </span>
                  <span className="mt-2.5 whitespace-pre font-code text-[11px] tracking-[0.3em] text-muted sm:text-xs">
                    {descriptor}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
}
