"use client";

import React, { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface ReStage {
  id: string;
  name: string;
  copy: string;
  focus: string[];
}

const RE_STAGES: ReStage[] = [
  {
    id: "01",
    name: "RETHINK",
    copy: "Question the assumptions before changing the execution.",
    focus: ["Strategy", "Positioning", "Audience", "Market", "Funnel"],
  },
  {
    id: "02",
    name: "REFRAME",
    copy: "Change how the business is understood, remembered and valued.",
    focus: ["Brand", "Identity", "Messaging", "Positioning", "Creative Direction"],
  },
  {
    id: "03",
    name: "RECREATE",
    copy: "Turn the strategy into work people actually notice.",
    focus: ["Content", "Campaigns", "Creative", "Motion", "Visual Systems"],
  },
  {
    id: "04",
    name: "REBUILD",
    copy: "Create digital experiences designed around the action that matters.",
    focus: ["Websites", "Landing Pages", "UX", "Conversion", "Digital Experiences"],
  },
  {
    id: "05",
    name: "REACH",
    copy: "Put the right message in front of the right audience.",
    focus: ["Paid Media", "Search", "Social", "Distribution", "Retargeting"],
  },
  {
    id: "06",
    name: "REACT",
    copy: "Use behaviour and results to decide what happens next.",
    focus: ["Analytics", "Tracking", "Attribution", "Performance", "Insights"],
  },
  {
    id: "07",
    name: "REPEAT",
    copy: "Take what works, remove what doesn't and run the system again.",
    focus: ["Testing", "Optimisation", "Iteration", "Compounding"],
  },
];

export function ReSystem() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="system"
      className="relative z-10 bg-surface border-t border-border py-28 sm:py-36 md:py-44 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-border/80 pb-12">
          <div className="lg:col-span-7 space-y-4">
            <SectionLabel index="04" label="THE RE— SYSTEM" />
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-primary leading-[1.04] tracking-[-0.03em]">
              GO BACK.
              <br />
              SEE BETTER.
              <br />
              BUILD AGAIN.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-base sm:text-lg text-primary/80 font-normal leading-relaxed">
              Replay is built around a simple principle: improvement starts by returning to the problem.
            </p>
            <span className="inline-block font-mono text-xs text-muted tracking-wider uppercase">
              7 CONNECTED STAGES // NOT ISOLATED SERVICES
            </span>
          </div>
        </div>

        {/* 7 Connected Stages Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {RE_STAGES.map((stage, idx) => {
            const isHovered = hoveredIndex === idx;
            const isAnyHovered = hoveredIndex !== null;
            const isReceding = isAnyHovered && !isHovered;

            return (
              <div
                key={stage.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`relative bg-canvas border p-8 flex flex-col justify-between min-h-[340px] transition-all duration-500 cursor-default select-none ${
                  isHovered
                    ? "border-primary shadow-md bg-canvas scale-[1.02] z-10"
                    : isReceding
                    ? "border-border/50 opacity-60 scale-[0.99]"
                    : "border-border opacity-100 hover:border-primary/40"
                }`}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <span className="font-mono text-xs text-muted tracking-widest">
                    STAGE // {stage.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isHovered ? "bg-primary scale-125" : "bg-primary/20"
                      }`}
                    />
                  </div>
                </div>

                {/* Stage Name & Copy */}
                <div className="my-6 space-y-3">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-primary">
                    {stage.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/80 leading-relaxed">
                    {stage.copy}
                  </p>
                </div>

                {/* Focus Badges */}
                <div className="pt-4 border-t border-border/50 space-y-2">
                  <span className="font-mono text-[10px] text-muted tracking-widest uppercase block">
                    CORE FOCUS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.focus.map((item) => (
                      <span
                        key={item}
                        className={`text-[11px] font-mono px-2 py-0.5 border transition-colors ${
                          isHovered
                            ? "bg-surface border-primary/40 text-primary font-medium"
                            : "bg-surface/50 border-border text-muted"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

          {/* 8th Balancing Architectural Tile */}
          <div className="bg-surface/40 border border-dashed border-border p-8 flex flex-col justify-between min-h-[340px] text-muted">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <span className="font-mono text-xs tracking-widest uppercase">
                THE OUTCOME
              </span>
              <span className="font-mono text-xs">CYCLE COMPLETE</span>
            </div>
            <div className="space-y-2 my-auto">
              <span className="font-mono text-xs text-primary font-semibold block tracking-wider uppercase">
                COMPOUNDING VALUE
              </span>
              <p className="text-xs font-mono text-muted leading-relaxed">
                Returning to the system at stage 01 to build on measured performance rather than starting from scratch.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 text-xs font-mono">
              <span>SYSTEM ARCHITECTURE // REPLAY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
