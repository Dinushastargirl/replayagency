"use client";
import React from "react";

const LOOP_WORDS = [
  { word: "MAKE.", sub: "Create something worth putting into the world." },
  { word: "MEASURE.", sub: "See what actually happened." },
  { word: "LEARN.", sub: "Understand what the signals are telling you." },
  { word: "REPEAT.", sub: "Take what you learned and build the next version." },
];

export function CoreLoop() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="flex items-center justify-between border-b border-[#1F2B1E]/10 py-6">
          <span className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase">THE LOOP</span>
          <span className="font-mono text-[11px] text-[#6B7A68]/50 tracking-widest uppercase">× 4 PHASES</span>
        </div>

        {/* Loop words */}
        <div className="py-4">
          {LOOP_WORDS.map(({ word, sub }, i) => (
            <div
              key={i}
              className="py-8 sm:py-12 border-b border-[#1F2B1E]/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group cursor-default hover:bg-[#F7F6F2] transition-colors duration-200 -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16"
            >
              <span className="font-display font-bold text-6xl sm:text-8xl lg:text-[7.5rem] text-[#1F2B1E] tracking-[-0.04em] leading-none group-hover:text-[#2D3D2B] transition-colors duration-200">
                {word}
              </span>
              <span className="font-mono text-sm text-[#6B7A68] max-w-xs leading-relaxed sm:text-right">
                {sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
