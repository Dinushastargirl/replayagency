"use client";

import React from "react";
import { ArrowRight, RotateCw, Sparkles, BarChart3, Lightbulb, Repeat } from "lucide-react";

const LOOP_PHASES = [
  {
    num: "01",
    word: "MAKE.",
    title: "Production & Deployment",
    sub: "Create something worth putting into the world.",
    description:
      "We build and ship high-standard digital experiences, systems, and campaigns with speed and uncompromising polish.",
    tag: "HIGH-VELOCITY SHIP",
    icon: Sparkles,
    accent: "#1F2B1E",
  },
  {
    num: "02",
    word: "MEASURE.",
    title: "Telemetry & Signals",
    sub: "See what actually happened.",
    description:
      "We instrument deep telemetry across every touchpoint to capture real behavioral friction, conversion leaks, and user truth.",
    tag: "EMPIRICAL DATA",
    icon: BarChart3,
    accent: "#E0533C",
  },
  {
    num: "03",
    word: "LEARN.",
    title: "Insight Extraction",
    sub: "Understand what the signals are telling you.",
    description:
      "We synthesize raw telemetry into actionable strategic clarity, separating signal from noise to guide the next iteration.",
    tag: "DECISIVE CLARITY",
    icon: Lightbulb,
    accent: "#2D8B3A",
  },
  {
    num: "04",
    word: "REPEAT.",
    title: "Compounding Iteration",
    sub: "Take what you learned and build the next version.",
    description:
      "We redeploy with precision. Each completed cycle strengthens the operating foundation and widens your competitive moat.",
    tag: "COMPOUNDING GROWTH",
    icon: Repeat,
    accent: "#1F2B1E",
  },
];

export function CoreLoop() {
  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#1F2B1E] overflow-hidden border-t border-[#1F2B1E]/10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#1F2B1E]/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2B1E]/5 text-[#1F2B1E] text-xs font-mono font-medium tracking-widest uppercase mb-6">
              <RotateCw className="w-3.5 h-3.5 text-[#2D8B3A] animate-spin" style={{ animationDuration: "8s" }} />
              THE CONTINUOUS OPERATING LOOP // 4 PHASES
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.0] text-[#1F2B1E]">
              How decisive growth actually{" "}
              <span className="text-[#6B7A68]">compounds.</span>
            </h2>
          </div>

          <div className="max-w-md text-base sm:text-lg text-[#6B7A68] font-light leading-relaxed">
            <p>
              Linear projects stop at launch. <span className="font-medium text-[#1F2B1E]">Replay loops never do.</span>
            </p>
            <p className="text-sm text-[#6B7A68] mt-2">
              Every deployed version generates fresh telemetry to make the next version exponentially more effective.
            </p>
          </div>
        </div>

        {/* ── 4 Interconnected Loop Cards ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {LOOP_PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.num}
                className="relative rounded-3xl bg-[#FAFAF8] border border-[#1F2B1E]/10 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-white hover:border-[#1F2B1E]/25 transition-all duration-300 group"
              >
                <div>
                  {/* Top Phase Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#1F2B1E]/8">
                    <span className="font-mono text-xs font-bold text-[#6B7A68] tracking-widest">
                      PHASE {phase.num}
                    </span>
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${phase.accent}12`,
                        color: phase.accent,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Big Core Word */}
                  <div className="mt-8 mb-2">
                    <h3 className="font-display font-bold text-4xl sm:text-5xl text-[#1F2B1E] tracking-tight group-hover:text-[#2D8B3A] transition-colors duration-200">
                      {phase.word}
                    </h3>
                  </div>

                  {/* Meaning Subtitle */}
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B7A68] mb-4">
                    {phase.title}
                  </div>

                  <p className="text-sm font-medium text-[#1F2B1E] leading-snug mb-3">
                    {phase.sub}
                  </p>

                  <p className="text-xs text-[#6B7A68] leading-relaxed font-light">
                    {phase.description}
                  </p>
                </div>

                {/* Bottom Tag & Next Step Indicator */}
                <div className="pt-6 mt-8 border-t border-[#1F2B1E]/8 flex items-center justify-between">
                  <span
                    className="font-mono text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${phase.accent}10`,
                      color: phase.accent,
                    }}
                  >
                    {phase.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#6B7A68] group-hover:text-[#1F2B1E]">
                    <span>{idx < 3 ? `0${idx + 2}` : "01"}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Visual Loop Guarantee Strip ───────────────────────────────── */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAFAF8] border border-[#1F2B1E]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3 text-[#1F2B1E] font-medium">
            <span className="w-2 h-2 rounded-full bg-[#2D8B3A] animate-ping" />
            <span>CONTINUOUS CYCLE: MAKE → MEASURE → LEARN → REPEAT → REPLAY</span>
          </div>
          <span className="text-[#6B7A68] tracking-widest uppercase">
            BI-WEEKLY ITERATION VELOCITY
          </span>
        </div>
      </div>
    </section>
  );
}
