"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useIntro } from "./IntroProvider";

// Inertial smooth scrolling (Lenis). Anchor links glide too, and scrolling is
// paused while the intro splash is up.
export default function SmoothScroll() {
  const { ready } = useIntro();
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({ autoRaf: true, anchors: true, lerp: 0.1 });
    lenis.current = instance;
    return () => {
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  useEffect(() => {
    if (ready) lenis.current?.start();
    else lenis.current?.stop();
  }, [ready]);

  return null;
}
