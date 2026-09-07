"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Palette,
  Film,
  Globe,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  ChevronDown,
} from "lucide-react";

interface Discipline {
  num: string;
  title: string;
  tagline: string;
  overview: string;
  metric: string;
  metricLabel: string;
  deliverables: string[];
  image: string;
  accent: string;
  icon: React.ElementType;
}

const DISCIPLINES: Discipline[] = [
  {
    num: "01",
    title: "STRATEGY",
    tagline: "Direction & Operating Models",
    overview:
      "We replace bloated consultancy slide decks with live, testable operating models. We interrogate unit economics, user telemetry, and market friction to chart the most decisive vector to market dominance.",
    metric: "3.4x",
    metricLabel: "Faster Decision Velocity",
    deliverables: [
      "Market Positioning & Moat Design",
      "Telemetry & Signal Ingestion Audits",
      "Unit Economics & Growth Architecture",
      "Executive Decision Frameworks",
    ],
    image: "/clarity-portrait.jpg",
    accent: "#2D8B3A",
    icon: Compass,
  },
  {
    num: "02",
    title: "BRAND",
    tagline: "Perception & Value Architecture",
    overview:
      "A brand is the operating system for customer belief. We engineer identity systems that command premium pricing, communicate unshakeable clarity, and create visceral, lasting cultural resonance.",
    metric: "0 Debt",
    metricLabel: "Eliminating Brand Dilution",
    deliverables: [
      "Visual Identity & Typographic Systems",
      "Brand Architecture & Hierarchy",
      "Tone of Voice & Messaging Matrix",
      "Design Tokens & Asset Libraries",
    ],
    image: "/hero-pasture.jpg",
    accent: "#E0533C",
    icon: Palette,
  },
  {
    num: "03",
    title: "CREATIVE",
    tagline: "Art Direction & High-Impact Assets",
    overview:
      "Attention is the rarest commodity. We craft art direction, cinematic motion, and narrative campaigns that break through digital monotony and stop customer feeds in their tracks.",
    metric: "+68%",
    metricLabel: "Attention Retention Lift",
    deliverables: [
      "Multi-Channel Campaign Creative",
      "3D Visuals & Motion Systems",
      "High-Velocity Ad Creative Engines",
      "Editorial Storytelling & Video",
    ],
    image: "/clarity-portrait.jpg",
    accent: "#4a9c52",
    icon: Film,
  },
  {
    num: "04",
    title: "DIGITAL",
    tagline: "Web Platforms & Conversion Engines",
    overview:
      "Modern web software built for decisive conversion. We engineer headless, lightning-fast digital storefronts and web applications that turn passive visitors into committed buyers.",
    metric: "<80ms",
    metricLabel: "Sub-Second Global TTFB",
    deliverables: [
      "Next.js & React Web Platforms",
      "Modular Component Design Systems",
      "Landing Page Testing Engines",
      "Conversion Rate Optimization (CRO)",
    ],
    image: "/hero-pasture.jpg",
    accent: "#1F2B1E",
    icon: Globe,
  },
  {
    num: "05",
    title: "GROWTH",
    tagline: "Distribution & Continuous Loops",
    overview:
      "Growth is not a one-off campaign; it is a compounding engine. We deploy empirical experimentation loops that systematically identify, scale, and protect your highest-converting acquisition channels.",
    metric: "4.8x",
    metricLabel: "Average LTV/CAC Compounding",
    deliverables: [
      "Performance Marketing Architecture",
      "Lifecycle & Retention Mechanics",
      "Custom Behavioral Telemetry",
      "Continuous Optimization Sprints",
    ],
    image: "/clarity-portrait.jpg",
    accent: "#E0533C",
    icon: TrendingUp,
  },
];

export function StrategySection() {
  const [activeDiscipline, setActiveDiscipline] = useState<number>(0);

  return (
    <section id="system" className="relative w-full bg-[#FFFFFF] text-[#1F2B1E] overflow-hidden border-t border-[#1F2B1E]/10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2B1E]/5 text-[#1F2B1E] text-xs font-mono font-medium tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B3A]" />
            CORE CAPABILITIES // DEPLOYED IN SYNC
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.05]">
            Strategy is only useful when it changes how the business{" "}
            <span className="text-[#6B7A68]">moves.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#6B7A68] font-light max-w-2xl mx-auto leading-relaxed">
            We operate at the exact convergence of strategy, brand architecture, and software engineering — moving five disciplines as one synchronized unit.
          </p>
        </div>

        {/* ── Top Bento Metric Highlights ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-24">
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
              <span>DEPLOYMENT CADENCE</span>
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

          {/* Card 3 — "4 layers" Transformation Stack */}
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

          {/* Card 4 — "90 days" Horizon */}
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
              Every 90 days, we audit accumulated telemetry to systematically redeploy resources into your highest-yield growth vectors.
            </div>
          </div>
        </div>

        {/* ── MAJOR SELLING POINT: EDITORIAL FULL-WIDTH INTERACTIVE ROWS ── */}
        <div className="pt-8 border-t border-[#1F2B1E]/15">
          {/* Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-4 border-b border-[#1F2B1E]/10">
            <div>
              <span className="font-mono text-xs font-bold text-[#2D8B3A] tracking-widest uppercase block mb-1">
                EXECUTIVE CAPABILITIES MATRIX
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1F2B1E] tracking-tight">
                Five Disciplines. One Operating Engine.
              </h3>
            </div>
            <span className="font-mono text-xs text-[#6B7A68] tracking-widest uppercase">
              SELECT ANY DISCIPLINE TO REVEAL SPECIFICATIONS ↓
            </span>
          </div>

          {/* Interactive Full-Width Rows */}
          <div className="divide-y divide-[#1F2B1E]/12 border-b border-[#1F2B1E]/12">
            {DISCIPLINES.map((d, idx) => {
              const isActive = activeDiscipline === idx;
              const Icon = d.icon;

              return (
                <div
                  key={d.num}
                  className={`transition-all duration-300 ${
                    isActive ? "bg-[#FAF9F5]" : "hover:bg-[#FAFAF8]"
                  }`}
                >
                  {/* Clickable Row Header */}
                  <button
                    onClick={() => setActiveDiscipline(isActive ? -1 : idx)}
                    className="w-full py-8 sm:py-10 px-4 sm:px-8 flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      {/* Monospace Number */}
                      <span className="font-mono text-sm sm:text-base font-bold text-[#6B7A68] tracking-widest">
                        {d.num} //
                      </span>

                      {/* Discipline Title */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                        <span
                          className={`font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-[-0.035em] transition-colors duration-200 ${
                            isActive
                              ? "text-[#1F2B1E]"
                              : "text-[#1F2B1E]/80 group-hover:text-[#1F2B1E]"
                          }`}
                        >
                          {d.title}
                        </span>
                        <span className="font-mono text-xs sm:text-sm text-[#6B7A68] tracking-wide">
                          {d.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Expand Arrow */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#1F2B1E] text-white border-[#1F2B1E] rotate-180 shadow-md"
                          : "border-[#1F2B1E]/15 text-[#1F2B1E] group-hover:border-[#1F2B1E]/40 group-hover:bg-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                    </div>
                  </button>

                  {/* Expanded Detail Panel */}
                  {isActive && (
                    <div className="px-4 sm:px-8 pb-10 sm:pb-14 pt-2 animate-reveal-up">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch p-6 sm:p-10 rounded-3xl bg-white border border-[#1F2B1E]/10 shadow-lg">
                        
                        {/* Column 1: Philosophy & Impact Metric (5 cols) */}
                        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                          <div>
                            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#1F2B1E]/5 text-[#1F2B1E] mb-4">
                              <Icon className="w-3.5 h-3.5 text-[#2D8B3A]" />
                              DISCIPLINE MANDATE
                            </div>
                            <p className="text-base sm:text-lg text-[#1F2B1E]/85 font-light leading-relaxed">
                              {d.overview}
                            </p>
                          </div>

                          {/* Metric Box */}
                          <div className="p-5 rounded-2xl bg-[#FAFAF8] border border-[#1F2B1E]/8 flex items-baseline gap-4">
                            <span className="font-display font-bold text-4xl sm:text-5xl text-[#1F2B1E] tracking-tight">
                              {d.metric}
                            </span>
                            <div>
                              <span className="text-xs font-mono font-semibold text-[#6B7A68] uppercase tracking-wider block">
                                BENCHMARK IMPACT
                              </span>
                              <span className="text-sm font-medium text-[#1F2B1E]">
                                {d.metricLabel}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Column 2: Deliverables & Capabilities Matrix (4 cols) */}
                        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                          <div>
                            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#6B7A68] block mb-4">
                              CORE DELIVERABLES & SPECS
                            </span>
                            <div className="space-y-2.5">
                              {d.deliverables.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF8] border border-[#1F2B1E]/6 text-xs sm:text-sm font-medium text-[#1F2B1E]"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#2D8B3A] flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="text-[11px] font-mono text-[#6B7A68] pt-2">
                            Deployable standalone or in synchronized multi-discipline sprints.
                          </div>
                        </div>

                        {/* Column 3: Visual Preview & Sprint CTA (3 cols) */}
                        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-end p-6 group">
                          <div className="absolute inset-0">
                            <Image
                              src={d.image}
                              alt={d.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080E08]/90 via-[#080E08]/40 to-transparent" />
                          </div>

                          <div className="relative z-10 space-y-3">
                            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#4a9c52] block">
                              SPRINT READY
                            </span>
                            <div className="font-display font-bold text-xl text-white leading-tight">
                              Initiate {d.title} sprint.
                            </div>
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-2 bg-[#E0533C] hover:bg-[#c94530] text-white px-4 py-2 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-md hover:scale-105"
                            >
                              START PROJECT <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
