"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useReplay } from "@/context/ReplayContext";

export function Hero() {
  const { phase, reducedMotion } = useReplay();

  // Reveal triggers
  const isTransitioning = reducedMotion || phase === "transitioning" || phase === "hero";
  const isHeroPhase = reducedMotion || phase === "hero";

  const handleScrollToWork = () => {
    const el = document.getElementById("selected-work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start z-10 pointer-events-none">
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-12 pt-32 pb-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Column (Desktop: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-8 pointer-events-auto">
            
            {/* 1. Small Eyebrow (Reveals ~4.2s) */}
            <div className="overflow-hidden">
              <div
                className={`flex items-center gap-3 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isTransitioning ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <span className="text-xs uppercase tracking-[0.25em] font-medium text-muted font-mono">
                  DIGITAL GROWTH STUDIO
                </span>
              </div>
            </div>

            {/* 2. Main H1 Headline with Masked Line Wipe (Reveals ~4.5s) */}
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.04] tracking-[-0.03em] text-primary space-y-1">
              <span className="block overflow-hidden pb-1">
                <span
                  className={`block transition-transform duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isTransitioning ? "translate-y-0" : "translate-y-[115%]"
                  }`}
                >
                  TURN ATTENTION
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span
                  className={`block transition-transform duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isTransitioning ? "translate-y-0" : "translate-y-[115%]"
                  }`}
                >
                  INTO GROWTH.
                </span>
              </span>
            </h1>

            {/* 3. Supporting Text (Reveals ~5.0s) */}
            <div className="overflow-hidden max-w-xl">
              <p
                className={`text-base sm:text-lg text-primary/80 leading-relaxed font-normal transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isHeroPhase ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                We rethink, rebuild and improve the digital systems businesses use to attract, convert and grow.
              </p>
            </div>

            {/* 4. Action CTAs (Reveals ~5.5s) */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isHeroPhase ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Button href="/contact" variant="primary" icon="arrow-right">
                START A PROJECT
              </Button>
              <Button
                onClick={handleScrollToWork}
                variant="secondary"
                icon="arrow-down"
              >
                EXPLORE THE SYSTEM
              </Button>
            </div>

            {/* 5. Minimal Stage Indicator Tag */}
            <div
              className={`pt-6 border-t border-border/40 w-full max-w-md flex items-center justify-between text-xs text-muted font-mono tracking-wider transition-opacity duration-1000 delay-700 ${
                isHeroPhase ? "opacity-100" : "opacity-0"
              }`}
            >
              <span>SYS // RE—01</span>
              <span>PHASE // FOUNDATION</span>
            </div>

          </div>

          {/* Right Column: Spanning area for 3D procedural object */}
          <div className="hidden lg:block lg:col-span-5 h-full min-h-[420px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
