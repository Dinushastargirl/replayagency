"use client";

import React from "react";
import { ArrowUpRight, Compass, Layers, Zap } from "lucide-react";

const PILLARS = [
  {
    num: "01",
    tag: "SURFACE TRUTH",
    title: "RE—ASSESS",
    subtitle: "Signal Discovery & Diagnostic Audits",
    description:
      "We interrogate the current baseline — dissecting user behavior, telemetry leaks, and market drift to uncover what is actually blocking performance.",
    icon: Compass,
    accent: "#1F2B1E",
  },
  {
    num: "02",
    tag: "ENGINEER CLARITY",
    title: "RE—ARCHITECT",
    subtitle: "Systems, Brand & Digital Foundation",
    description:
      "We design cohesive operating frameworks that connect brand perception with digital infrastructure, creating a resilient platform for decisive scale.",
    icon: Layers,
    accent: "#E0533C",
  },
  {
    num: "03",
    tag: "DEPLOY VELOCITY",
    title: "RE—ACCELERATE",
    subtitle: "High-Frequency Iteration & Execution",
    description:
      "We ship focused, high-impact cycles that test, validate, and compound growth, ensuring your business stays ahead of changing customer expectations.",
    icon: Zap,
    accent: "#2D8B3A",
  },
];

export function Workflow() {
  return (
    <section className="relative w-full bg-[#FAFAF8] text-[#1F2B1E] overflow-hidden border-t border-[#1F2B1E]/10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Section Header ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#1F2B1E]/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2B1E]/5 text-[#1F2B1E] text-xs font-mono font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1F2B1E]" />
              THE RE— SYSTEM // ONE SYSTEM. MANY MOVES.
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.0] text-[#1F2B1E]">
              Everything starts with{" "}
              <span className="text-[#6B7A68]">RE.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3 text-base sm:text-lg text-[#6B7A68] font-light leading-relaxed">
            <p>
              Growth isn't always about tearing everything down and starting again.
            </p>
            <p className="font-normal text-[#1F2B1E]">
              It's about interrogating what already exists and asking: <span className="underline decoration-[#E0533C] underline-offset-4 font-semibold">What could this become?</span>
            </p>
          </div>
        </div>

        {/* ── 3 Pillar Bento Cards Grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="relative rounded-3xl bg-white border border-[#1F2B1E]/10 p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#1F2B1E]/25 transition-all duration-300 group"
              >
                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#1F2B1E]/8">
                    <span className="font-mono text-xs font-bold text-[#6B7A68] tracking-widest">
                      {pillar.num} //
                    </span>
                    <span
                      className="font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${pillar.accent}12`,
                        color: pillar.accent,
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-8 mb-4 flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.accent}15`,
                        color: pillar.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1F2B1E] tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B7A68] mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-[#6B7A68] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-8 mt-6 border-t border-[#1F2B1E]/8 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#1F2B1E] font-medium tracking-wider group-hover:underline">
                    EXPLORE STAGE
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#1F2B1E]/5 flex items-center justify-center text-[#1F2B1E] group-hover:bg-[#1F2B1E] group-hover:text-white transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Seamless Section Hand-off ─────────────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-[#1F2B1E]/10 flex items-center justify-between text-xs font-mono text-[#6B7A68]">
          <span className="uppercase tracking-widest">
            SCROLL TO EXPLORE THE 8 STAGES OF THE RE— ENGINE
          </span>
          <span className="hidden sm:inline-block tracking-widest">
            01 / 08 RETHINK → REPLAY ↓
          </span>
        </div>
      </div>
    </section>
  );
}
