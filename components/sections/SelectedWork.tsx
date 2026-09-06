"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = Array.from({ length: 4 }, (_, i) => ({
  num: String(i + 1).padStart(2, "0"),
  id: `project-${i + 1}`,
  tag: ["Strategy + Brand", "Digital + Growth", "Brand + Creative", "Systems + Digital"][i],
}));

export function SelectedWork() {
  return (
    <section id="work" className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-5">
              WORK — SELECTED WORK
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.0] max-w-xl">
              Every project is another version.
            </h2>
          </div>
          <p className="text-base text-[#6B7A68] leading-relaxed font-light max-w-xs sm:text-right">
            A problem understood. A direction challenged.<br />A system rebuilt. A result improved.
          </p>
        </div>

        {/* Project list */}
        <div className="divide-y divide-[#1F2B1E]/8">
          {PROJECTS.map(({ num, id, tag }) => (
            <div
              key={id}
              id={id}
              className="group py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-default hover:bg-[#F7F6F2] transition-colors duration-200 -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-sm text-[#6B7A68]/40 w-6">{num}</span>
                <div>
                  <div className="font-display font-bold text-xl text-[#1F2B1E] tracking-[-0.02em]">
                    PROJECT IN PREPARATION
                  </div>
                  <div className="font-mono text-xs text-[#6B7A68] mt-1 tracking-wide">{tag}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#6B7A68] group-hover:text-[#1F2B1E] transition-colors duration-200 uppercase tracking-widest ml-14 sm:ml-0">
                Case study coming soon
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-[#1F2B1E]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1F2B1E] tracking-[-0.02em]">
            LOOKING FOR THE NEXT VERSION?
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E0533C] hover:bg-[#c94530] text-white px-7 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-sm flex-shrink-0"
          >
            START A PROJECT <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
