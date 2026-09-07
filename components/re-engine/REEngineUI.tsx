"use client";

import React from "react";
import { REPLAY_ENGINE_STATES } from "@/data/replayStates";
import { REEngineProgress } from "./REEngineProgress";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Activity, ArrowRight, Cpu, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface REEngineUIProps {
  activeIndex: number;
  progress: number;
  onStateSelect: (index: number) => void;
}

export function REEngineUI({ activeIndex, progress, onStateSelect }: REEngineUIProps) {
  const currentState = REPLAY_ENGINE_STATES[activeIndex] || REPLAY_ENGINE_STATES[0];

  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-16 pointer-events-none">
      
      {/* ── Top Bar: Section Label & Metaphor Hint ─────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pointer-events-auto border-b border-[#1F2B1E]/10 pb-6 bg-[#FAF9F5]/80 backdrop-blur-md sm:bg-transparent">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#1F2B1E]" />
          <span className="font-mono text-xs font-bold text-[#1F2B1E] tracking-widest uppercase">
            04 // THE RE— ENGINE
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-[#6B7A68] tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B3A] animate-pulse" />
          SCROLL TO TRANSFORM // 01–08 STAGES
        </div>
      </div>

      {/* ── Main Two-Column Layout ─────────────────────────────────────── */}
      <div className="my-auto py-8 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center pointer-events-auto">
        
        {/* Left Column: Stage Typography & Core Narrative (6 cols) */}
        <div className="lg:col-span-6 space-y-7">
          {/* Stage Meta Indicator */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-[#1F2B1E] text-white font-bold rounded-full">
              STAGE {currentState.number}
            </span>
            <span className="w-5 h-[1px] bg-[#1F2B1E]/20" />
            <span className="text-[#E0533C] font-semibold tracking-widest uppercase text-xs">
              {currentState.category}
            </span>
          </div>

          {/* Masked Headline Reveal */}
          <div className="overflow-hidden py-1">
            <h2
              key={currentState.id}
              className="font-display font-bold text-5xl sm:text-7xl lg:text-[84px] text-[#1F2B1E] tracking-[-0.04em] leading-[0.95] animate-reveal-up"
            >
              {currentState.label}
            </h2>
          </div>

          {/* Editorial Description */}
          <p
            key={`desc-${currentState.id}`}
            className="text-lg sm:text-2xl text-[#1F2B1E]/85 font-light leading-relaxed max-w-xl animate-fade-in"
          >
            {currentState.description}
          </p>

          {/* Core Action Card */}
          <div
            key={`meaning-${currentState.id}`}
            className="p-5 rounded-2xl bg-white border border-[#1F2B1E]/10 shadow-sm flex items-start gap-4 max-w-xl animate-fade-in"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1F2B1E]/5 flex items-center justify-center text-[#1F2B1E] flex-shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#2D8B3A]" />
            </div>
            <div>
              <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#6B7A68]">
                CORE ACTION & DELIVERABLE
              </div>
              <div className="font-display font-semibold text-base text-[#1F2B1E] mt-0.5">
                {currentState.meaning}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek System Architecture & Live Telemetry HUD (6 cols) */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl bg-white border border-[#1F2B1E]/10 p-7 sm:p-9 shadow-xl overflow-hidden group">
            {/* Subtle decorative grid background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#1F2B1E 1px, transparent 1px), linear-gradient(90deg, #1F2B1E 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* HUD Top Bar */}
            <div className="flex items-center justify-between pb-5 border-b border-[#1F2B1E]/10 mb-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#1F2B1E]" />
                <span className="font-mono text-xs font-bold tracking-wider text-[#1F2B1E]">
                  ENGINE TELEMETRY // STAGE {currentState.number}
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#2D8B3A]/10 text-[#2D8B3A] font-bold border border-[#2D8B3A]/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B3A] animate-ping" />
                ONLINE
              </span>
            </div>

            {/* Telemetry Data Grid */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#1F2B1E]/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#6B7A68] uppercase tracking-wider block">
                    TRANSFORMATION VECTOR
                  </span>
                  <span className="font-display font-bold text-lg text-[#1F2B1E]">
                    {currentState.category} → EXECUTION
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-[#E0533C] px-2.5 py-1 bg-[#E0533C]/10 rounded-lg">
                  PHASE {currentState.number}/08
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#1F2B1E]/5">
                  <span className="text-[10px] font-mono text-[#6B7A68] uppercase tracking-wider block">
                    ITERATION CYCLE
                  </span>
                  <span className="font-display font-semibold text-base text-[#1F2B1E] mt-0.5 block">
                    Continuous Sync
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFAF8] border border-[#1F2B1E]/5">
                  <span className="text-[10px] font-mono text-[#6B7A68] uppercase tracking-wider block">
                    GOVERNANCE
                  </span>
                  <span className="font-display font-semibold text-base text-[#1F2B1E] mt-0.5 block">
                    Operating System
                  </span>
                </div>
              </div>

              {/* Progress Bar in HUD */}
              <div className="pt-2">
                <div className="flex justify-between text-[10px] font-mono text-[#6B7A68] mb-1.5">
                  <span>SYSTEM TRAJECTORY</span>
                  <span>{Math.round(progress * 100)}% COMPLETE</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1F2B1E]/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1F2B1E] via-[#2D8B3A] to-[#E0533C] transition-all duration-200"
                    style={{ width: `${Math.max(12, Math.round(progress * 100))}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Status metadata */}
            <div className="mt-6 pt-4 border-t border-[#1F2B1E]/10 flex items-center justify-between text-[11px] font-mono text-[#6B7A68]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D8B3A]" />
                Zero Stagnation Architecture
              </span>
              <span className="text-[#1F2B1E] font-medium">REPLAY STUDIO OS</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom Progress & State Navigation Bar ──────────────────────── */}
      <div className="pointer-events-auto pt-6 border-t border-[#1F2B1E]/10 bg-[#FAF9F5]/80 backdrop-blur-md sm:bg-transparent">
        <REEngineProgress
          activeIndex={activeIndex}
          progress={progress}
          onStateSelect={onStateSelect}
        />
      </div>

    </div>
  );
}
