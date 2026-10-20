"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Phase = "intro" | "outro" | "done";

const OUTRO_AT = 2000;
const OUTRO_DURATION = 350;

const IntroContext = createContext<{
  phase: Phase;
  // True when the splash actually played, so the nav mark should fly in from it.
  played: boolean;
  skip: () => void;
}>({ phase: "done", played: false, skip: () => {} });

export const useIntro = () => {
  const { phase, played, skip } = useContext(IntroContext);
  return { phase, played, skip, ready: phase === "done" };
};

// Runs before first paint: skips the splash for repeat visits in this session
// and for reduced-motion users, so the overlay never flashes.
export const introScript = `try{if(sessionStorage.getItem("lg-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="skip"}catch(e){}`;

export default function IntroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [played, setPlayed] = useState(false);

  const skip = useCallback(() => {
    setPhase((p) => (p === "intro" ? "outro" : p));
  }, []);

  useEffect(() => {
    const skipped = document.documentElement.dataset.intro === "skip";
    const timers = [
      setTimeout(() => {
        if (skipped) return setPhase("done");
        setPlayed(true);
        try {
          sessionStorage.setItem("lg-intro", "1");
        } catch {}
      }, 0),
    ];
    if (!skipped) timers.push(setTimeout(skip, OUTRO_AT));
    return () => timers.forEach(clearTimeout);
  }, [skip]);

  useEffect(() => {
    if (phase !== "outro") return;
    const t = setTimeout(() => setPhase("done"), OUTRO_DURATION);
    return () => clearTimeout(t);
  }, [phase]);

  // While the splash is up, any scroll or key press fast-forwards it instead
  // of moving the page underneath.
  useEffect(() => {
    if (phase === "done") return;
    const block = (e: Event) => {
      e.preventDefault();
      skip();
    };
    const opts = { passive: false } as const;
    window.addEventListener("wheel", block, opts);
    window.addEventListener("touchmove", block, opts);
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", skip);
    };
  }, [phase, skip]);

  return (
    <IntroContext.Provider value={{ phase, played, skip }}>
      {children}
    </IntroContext.Provider>
  );
}
