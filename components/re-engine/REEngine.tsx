"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { REEngineScene } from "./REEngineScene";
import { REEngineUI } from "./REEngineUI";
import { EngineTelemetry } from "./REEngineTypes";
import { REPLAY_ENGINE_STATES } from "@/data/replayStates";

export function REEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [telemetry, setTelemetry] = useState<EngineTelemetry>({
    progress: 0,
    activeStateIndex: 0,
    velocity: 0,
    isScrolling: false,
  });
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollTopRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(Date.now());
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      // Calculate progress from 0.0 to 1.0 within container bounds
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      // Calculate active state index (0 to 7)
      const totalStates = REPLAY_ENGINE_STATES.length;
      const activeStateIndex = Math.min(
        Math.floor(progress * totalStates),
        totalStates - 1
      );

      // Track scroll velocity
      const now = Date.now();
      const dt = Math.max(now - lastTimestampRef.current, 16);
      const dy = currentScroll - lastScrollTopRef.current;
      const velocity = dy / dt;

      lastScrollTopRef.current = currentScroll;
      lastTimestampRef.current = now;

      setTelemetry({
        progress,
        activeStateIndex,
        velocity,
        isScrolling: true,
      });

      // Clear velocity on scroll pause
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setTelemetry((prev) => ({
          ...prev,
          velocity: 0,
          isScrolling: false,
        }));
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Jump to specific state offset smoothly
  const handleStateSelect = useCallback((index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalScrollable = containerRef.current.scrollHeight - window.innerHeight;
    const totalStates = REPLAY_ENGINE_STATES.length;
    const targetProgress = index / (totalStates - 1);
    const targetScrollY = containerTop + targetProgress * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="re-engine"
      ref={containerRef}
      className="relative w-full h-[800vh] bg-canvas border-t border-border"
    >
      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Background 3D Procedural Scene Layer */}
        <REEngineScene telemetry={telemetry} isMobile={isMobile} />

        {/* Foreground Interactive UI Layer */}
        <REEngineUI
          activeIndex={telemetry.activeStateIndex}
          progress={telemetry.progress}
          onStateSelect={handleStateSelect}
        />

      </div>
    </section>
  );
}
