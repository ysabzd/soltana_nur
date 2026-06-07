"use client";

import { useEffect, useRef, createContext, useContext, useState } from "react";
import Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  reducedMotion: boolean;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  reducedMotion: false,
});

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    if (mq.matches) {
      return () => mq.removeEventListener("change", handler);
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      mq.removeEventListener("change", handler);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef.current, reducedMotion }}>
      {children}
    </LenisContext.Provider>
  );
}
