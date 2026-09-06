"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from "react";

export type AnimationPhase = "assembling" | "locked" | "transitioning" | "hero";

interface ReplayContextType {
  phase: AnimationPhase;
  isHeroReady: boolean;
  reducedMotion: boolean;
  cursor: { x: number; y: number };
  isMobile: boolean;
  timeElapsed: number;
}

const ReplayContext = createContext<ReplayContextType>({
  phase: "assembling",
  isHeroReady: false,
  reducedMotion: false,
  cursor: { x: 0, y: 0 },
  isMobile: false,
  timeElapsed: 0,
});

export function ReplayProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<AnimationPhase>("assembling");
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      setPhase("hero");
      setIsHeroReady(true);
      return;
    }

    // Check mobile breakpoint
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse movement listener for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setCursor({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Timeline Choreography
    // 0.0s - 2.0s: Assembling
    // 2.0s - 2.8s: Locked
    // 2.8s - 4.2s: Transitioning (camera pull back & UI reveal)
    // 4.2s+: Hero active
    const tLock = setTimeout(() => {
      setPhase("locked");
    }, 3600);

    const tTransition = setTimeout(() => {
      setPhase("transitioning");
    }, 4800);

    const tHero = setTimeout(() => {
      setPhase("hero");
      setIsHeroReady(true);
    }, 5600);

    // Ticker for smooth time progress
    const interval = setInterval(() => {
      setTimeElapsed((Date.now() - startTimeRef.current) / 1000);
    }, 50);

    return () => {
      clearTimeout(tLock);
      clearTimeout(tTransition);
      clearTimeout(tHero);
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ReplayContext.Provider
      value={{
        phase,
        isHeroReady,
        reducedMotion,
        cursor,
        isMobile,
        timeElapsed,
      }}
    >
      {children}
    </ReplayContext.Provider>
  );
}

export function useReplay() {
  return useContext(ReplayContext);
}
