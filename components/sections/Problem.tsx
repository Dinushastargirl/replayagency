"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, RefreshCw } from "lucide-react";

const SERVICE_TAGS = [
  "Strategy",
  "Systems",
  "Brand",
  "Creative",
  "Digital",
  "Growth",
  "Analytics",
];

export function Problem() {
  return (
    <section className="relative w-full bg-[#080E08] text-white overflow-hidden border-t border-white/10">
      {/* ── Ambient Radial Glows (matching hero aesthetic) ────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[500px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, rgba(45,139,58,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2"
          style={{
            background: "radial-gradient(circle, rgba(31,80,31,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
        {/* ── Top Glassmorphic Capability Pill Strip ───────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16 pb-8 border-b border-white/10">
          <span className="text-[11px] font-mono text-[#4a9c52] tracking-widest uppercase mr-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a9c52] animate-pulse" />
            CORE CAPABILITIES:
          </span>
          {SERVICE_TAGS.map((tag) => (
            <div
              key={tag}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/75 hover:text-white hover:border-[#4a9c52]/60 hover:bg-white/[0.06] transition-all duration-200 text-[11px] font-mono tracking-wider uppercase"
            >
              <span className="text-[#4a9c52] text-xs">+</span>
              {tag}
            </div>
          ))}
        </div>

        {/* ── Main Two-Column Editorial Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Headline & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#4a9c52] tracking-[0.3em] uppercase mb-5">
                <span className="w-2 h-[1px] bg-[#4a9c52]" />
                THE IDEA
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-[68px] text-white tracking-[-0.035em] leading-[1.02]">
                THE FIRST VERSION IS RARELY THE{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #ffffff 0%, #5cb865 50%, #2D8B3A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FINAL VERSION.
                </span>
              </h2>
            </div>

            <div className="space-y-5 pt-2 border-l-2 border-white/15 pl-6">
              <p className="text-xl sm:text-2xl text-white/90 font-light leading-snug">
                Good digital work doesn't happen once.
              </p>
              <p className="text-lg sm:text-xl text-white/60 font-light leading-relaxed">
                Markets change. People change. Businesses change. What works today can become the exact thing holding you back tomorrow.
              </p>
              <p className="text-base text-white/50 leading-relaxed font-light">
                Replay exists to revisit the work, understand what changed, and deploy the next version with surgical precision.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E0533C]" />
                <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
                  Continuous Evolution
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4a9c52]" />
                <span className="font-mono text-xs text-white/70 tracking-widest uppercase">
                  Measurable Velocity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Glassmorphic Manifesto Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-300">
              {/* Subtle top-right glow */}
              <div
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(74,156,82,0.22) 0%, transparent 70%)",
                }}
              />

              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                  OPERATING PARADIGM
                </span>
                <span className="font-mono text-[10px] text-[#4a9c52] tracking-widest uppercase bg-[#4a9c52]/10 px-2.5 py-1 rounded-full border border-[#4a9c52]/20">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Metrics & Insight Points */}
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4a9c52]/15 border border-[#4a9c52]/30 flex items-center justify-center flex-shrink-0 text-[#4a9c52]">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-white tracking-tight">
                      Zero Static Deadlocks
                    </div>
                    <p className="text-xs text-white/55 mt-1 leading-relaxed">
                      We replace stagnant multi-year redesign projects with continuous, high-impact release cycles.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E0533C]/15 border border-[#E0533C]/30 flex items-center justify-center flex-shrink-0 text-[#E0533C]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-white tracking-tight">
                      Compounding Return
                    </div>
                    <p className="text-xs text-white/55 mt-1 leading-relaxed">
                      Every deployed change generates fresh signal data to guide the next strategic move.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                    EST. 2024 · DIGITAL GROWTH STUDIO
                  </span>
                  <span className="font-mono text-[10px] text-white/60 tracking-widest uppercase">
                    COLOMBO, LK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
