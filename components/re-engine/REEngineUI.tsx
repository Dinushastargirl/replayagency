"use client";

import React from "react";
import { REPLAY_ENGINE_STATES } from "@/data/replayStates";
import { REEngineProgress } from "./REEngineProgress";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface REEngineUIProps {
  activeIndex: number;
  progress: number;
  onStateSelect: (index: number) => void;
}

export function REEngineUI({ activeIndex, progress, onStateSelect }: REEngineUIProps) {
  const currentState = REPLAY_ENGINE_STATES[activeIndex] || REPLAY_ENGINE_STATES[0];

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-16 pointer-events-none">
      
      {/* Top Bar: Section Label & Metaphor Hint */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto border-b border-border/60 pb-6 bg-canvas/40 backdrop-blur-sm sm:bg-transparent">
        <SectionLabel index="04" label="THE RE— ENGINE" />
        <div className="font-mono text-xs text-muted tracking-widest uppercase">
          SCROLL TO TRANSFORM // 01–08
        </div>
      </div>

      {/* Main Content: Left Typography Column (Desktop: ~42% max-width) */}
      <div className="my-auto py-8 max-w-xl pointer-events-auto space-y-8">
        
        {/* State Meta Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-2 py-0.5 bg-primary text-canvas font-bold">
            STAGE {currentState.number}
          </span>
          <span className="w-4 h-[1px] bg-border" />
          <span className="text-primary font-semibold tracking-widest uppercase">
            {currentState.category}
          </span>
        </div>

        {/* Masked Headline Reveal */}
        <div className="overflow-hidden py-1">
          <h2
            key={currentState.id}
            className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-primary tracking-[-0.04em] leading-[0.95] animate-reveal-up"
          >
            {currentState.label}
          </h2>
        </div>

        {/* Editorial Description & Meaning */}
        <div className="space-y-4 pt-2">
          <p
            key={`desc-${currentState.id}`}
            className="text-lg sm:text-xl text-primary/90 font-medium leading-relaxed max-w-md animate-fade-in"
          >
            {currentState.description}
          </p>

          <div
            key={`meaning-${currentState.id}`}
            className="inline-flex items-center gap-2 p-3 bg-surface/70 border border-border text-xs font-mono text-muted max-w-md animate-fade-in"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-medium text-primary">CORE ACTION:</span>
            <span>{currentState.meaning}</span>
          </div>
        </div>

      </div>

      {/* Bottom Progress & State Navigation Bar */}
      <div className="pointer-events-auto pt-6 border-t border-border/60 bg-canvas/40 backdrop-blur-sm sm:bg-transparent">
        <REEngineProgress
          activeIndex={activeIndex}
          progress={progress}
          onStateSelect={onStateSelect}
        />
      </div>

    </div>
  );
}
