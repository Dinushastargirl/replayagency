"use client";

import React from "react";
import { REPLAY_ENGINE_STATES } from "@/data/replayStates";

interface REEngineProgressProps {
  activeIndex: number;
  progress: number;
  onStateSelect: (index: number) => void;
}

export function REEngineProgress({
  activeIndex,
  progress,
  onStateSelect,
}: REEngineProgressProps) {
  const currentNum = String(activeIndex + 1).padStart(2, "0");
  const totalNum = String(REPLAY_ENGINE_STATES.length).padStart(2, "0");

  return (
    <div className="flex flex-col space-y-6">
      {/* Top Telemetry */}
      <div className="flex items-center justify-between font-mono text-xs text-muted border-b border-border/60 pb-3">
        <span>ENGINE TELEMETRY</span>
        <span className="font-semibold text-primary">
          {currentNum} / {totalNum}
        </span>
      </div>

      {/* Thin Continuous Progress Bar */}
      <div className="w-full h-[2px] bg-border/40 relative overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      {/* Interactive State Jump List */}
      <div className="flex flex-wrap gap-2 pt-2">
        {REPLAY_ENGINE_STATES.map((state, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={state.id}
              onClick={() => onStateSelect(idx)}
              className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-all duration-300 border ${
                isActive
                  ? "bg-primary text-canvas border-primary font-semibold shadow-sm"
                  : "bg-surface/60 text-muted border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              <span>{state.number}</span> <span className="hidden sm:inline">{state.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
