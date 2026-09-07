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
    <div className="flex flex-col space-y-5">
      {/* Top Telemetry Info */}
      <div className="flex items-center justify-between font-mono text-xs text-[#6B7A68] border-b border-[#1F2B1E]/10 pb-3">
        <span className="tracking-widest uppercase font-semibold">STAGE SELECTOR & PROGRESSION</span>
        <span className="font-bold text-[#1F2B1E]">
          {currentNum} / {totalNum}
        </span>
      </div>

      {/* Thin Continuous Gradient Progress Bar */}
      <div className="w-full h-[3px] bg-[#1F2B1E]/10 rounded-full relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#1F2B1E] via-[#2D8B3A] to-[#E0533C] transition-all duration-150 ease-out"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      {/* Interactive State Jump Tabs */}
      <div className="flex flex-wrap gap-2 pt-1">
        {REPLAY_ENGINE_STATES.map((state, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={state.id}
              onClick={() => onStateSelect(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border cursor-pointer ${
                isActive
                  ? "bg-[#1F2B1E] text-white border-[#1F2B1E] font-bold shadow-md scale-105"
                  : "bg-white text-[#6B7A68] border-[#1F2B1E]/10 hover:border-[#1F2B1E]/40 hover:text-[#1F2B1E]"
              }`}
            >
              <span className="font-bold">{state.number}</span>{" "}
              <span className="hidden sm:inline font-medium">{state.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
