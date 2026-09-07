"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Palette, Film, Globe, TrendingUp, Check } from "lucide-react";

const CAPABILITIES = [
  {
    num: "01",
    title: "STRATEGY",
    subtitle: "Direction & Operating Models",
    icon: Compass,
    accent: "#1F2B1E",
    items: ["Positioning Strategy", "Market Research", "Digital Audits", "Growth Architecture"],
  },
  {
    num: "02",
    title: "BRAND",
    subtitle: "Identity & Value Architecture",
    icon: Palette,
    accent: "#E0533C",
    items: ["Visual Identity", "Brand Strategy", "Design Systems", "Tone & Narrative"],
  },
  {
    num: "03",
    title: "CREATIVE",
    subtitle: "Art Direction & Campaign Assets",
    icon: Film,
    accent: "#2D8B3A",
    items: ["Campaign Creative", "Content Systems", "Motion & 3D", "Art Direction"],
  },
  {
    num: "04",
    title: "DIGITAL",
    subtitle: "Web Platforms & High Conversion",
    icon: Globe,
    accent: "#1F2B1E",
    items: ["Web Design & Dev", "Next.js Architecture", "Landing Page Engines", "Conversion Rate (CRO)"],
  },
  {
    num: "05",
    title: "GROWTH",
    subtitle: "Distribution & Iteration Loops",
    icon: TrendingUp,
    accent: "#E0533C",
    items: ["Paid Acquisition", "Content Distribution", "Deep Telemetry", "Continuous Optimization"],
  },
];

export function StrategySection() {
  return (
    <section id="system" className="relative w-full bg-[#FFFFFF] text-[#1F2B1E] overflow-hidden border-t border-[#1F2B1E]/10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ── Eyebrow & Title ───────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2B1E]/5 text-[#1F2B1E] text-xs font-mono font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F2B1E]" />
            CAPABILITIES & OPERATING MODEL
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.05]">
            Strategy is only useful when it changes how the business{" "}
            <span className="text-[#6B7A68]">moves.</span>
          </h2>
        </div>

        {/* ── Bento Grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20">

          {/* Card 1 — Photo + Tagline (tall, left) */}
          <div className="lg:row-span-2 relative rounded-3xl overflow-hidden bg-[#ECEAE2] min-h-[440px] flex flex-col justify-end p-8 sm:p-10 shadow-sm group">
            <div className="absolute inset-0">
              <Image
                src="/clarity-portrait.jpg"
                alt="Clarity"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E08]/90 via-[#080E08]/35 to-transparent" />
            </div>
            <div className="relative z-10 text-white">
              <div className="font-mono text-[10px] text-[#4a9c52] tracking-widest uppercase mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4a9c52]" />
                REPLAY STUDIO ARCHITECTURE
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-[-0.03em] leading-tight mb-3">
                Clarity,<br />engineered.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light max-w-sm">
                We map the friction points, connect the telemetry, and design high-velocity operating systems around real market demand.
              </p>
            </div>
          </div>

          {/* Card 2 — "6–12 weeks" Sprint Cadence */}
          <div className="rounded-3xl bg-[#FAFAF8] border border-[#1F2B1E]/10 p-8 sm:p-9 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-shadow">
            <div className="font-mono text-xs text-[#6B7A68] tracking-widest uppercase flex items-center justify-between">
              <span>DEPLOYMENT VELOCITY</span>
              <span className="text-[#1F2B1E] font-bold">SPRINT 01</span>
            </div>
            <div className="my-3">
              <div className="font-display font-bold text-5xl sm:text-6xl text-[#1F2B1E] tracking-[-0.04em] mb-3">
                6–12 weeks
              </div>
              {/* Phase dots */}
              <div className="flex gap-2 mb-4">
                {[
                  { num: "01", bg: "#1F2B1E" },
                  { num: "02", bg: "#E0533C" },
                  { num: "03", bg: "#2D8B3A" },
                  { num: "04", bg: "#6B7A68" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-mono font-bold shadow-sm"
                    style={{ background: item.bg }}
                  >
                    {item.num}
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#6B7A68] leading-relaxed max-w-sm">
                Strategy, brand systems, and production engineering ship together — landing in the real business, not trapped in presentation decks.
              </p>
            </div>
          </div>

          {/* Card 3 — "4 layers" Transformation Stack (Coral Accent) */}
          <div className="rounded-3xl bg-[#E0533C] text-white p-8 sm:p-9 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-md transition-shadow">
            <div className="font-mono text-xs text-white/70 tracking-widest uppercase">
              TRANSFORMATION STACK
            </div>
            <div>
              <div className="font-display font-bold text-5xl sm:text-6xl text-white tracking-[-0.04em] mb-3">
                4 layers
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                Strategy, digital platforms, behavioral telemetry, and organizational adoption unified into a single operating model.
              </p>
            </div>
          </div>

          {/* Card 4 — "90 days" Horizon (Deep Dark Emerald) */}
          <div className="lg:col-span-2 rounded-3xl bg-[#080E08] text-white p-8 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md border border-white/10">
            <div>
              <div className="font-mono text-xs text-[#4a9c52] tracking-widest uppercase mb-1">
                COMPUTE HORIZON // CONTINUOUS REINVESTMENT
              </div>
              <div className="font-display font-bold text-4xl sm:text-5xl text-white tracking-[-0.03em]">
                90-day iteration windows
              </div>
            </div>
            <div className="sm:text-right max-w-xs text-xs text-white/60 font-light leading-relaxed">
              Every 90 days, we audit the accumulated performance telemetry to systematically fund high-yield growth initiatives.
            </div>
          </div>

        </div>

        {/* ── Capabilities Strip (The 5 Service Pillars) ────────────────── */}
        <div className="pt-10 border-t border-[#1F2B1E]/10">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-xs font-bold text-[#1F2B1E] tracking-widest uppercase">
              FIVE CORE DISCIPLINES // DEPLOYED IN SYNC
            </span>
            <span className="font-mono text-xs text-[#6B7A68] tracking-widest uppercase">
              END-TO-END CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CAPABILITIES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="rounded-2xl bg-[#FAFAF8] border border-[#1F2B1E]/8 p-6 flex flex-col justify-between hover:bg-white hover:border-[#1F2B1E]/25 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div>
                    {/* Header: Num + Icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#1F2B1E]/8">
                      <span className="font-mono text-xs font-bold text-[#6B7A68] tracking-widest">
                        {svc.num} //
                      </span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${svc.accent}12`,
                          color: svc.accent,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="mt-5 mb-4">
                      <h3 className="font-display font-bold text-xl text-[#1F2B1E] tracking-tight group-hover:text-[#2D8B3A] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#6B7A68] mt-1 leading-snug">
                        {svc.subtitle}
                      </p>
                    </div>

                    {/* Deliverable Items */}
                    <div className="space-y-1.5 pt-2">
                      {svc.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs text-[#1F2B1E]/80 font-medium py-1 px-2 rounded-lg bg-white/60 border border-[#1F2B1E]/5 group-hover:bg-[#FAFAF8]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B3A] flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card bottom arrow link */}
                  <div className="pt-5 mt-5 border-t border-[#1F2B1E]/8 flex items-center justify-between text-[10px] font-mono text-[#6B7A68] group-hover:text-[#1F2B1E]">
                    <span className="tracking-wider uppercase">VIEW DELIVERABLES</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
