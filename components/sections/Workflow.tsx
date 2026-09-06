"use client";
import React from "react";

export function Workflow() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        <div className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-8">
          THE RE— SYSTEM — ONE SYSTEM. MANY MOVES.
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.0] max-w-3xl mb-10">
          Everything starts with RE.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="space-y-5">
            {[
              "Because growth isn't always about starting again.",
              "Sometimes it's about looking at what already exists and asking: What could this become?",
            ].map((line, i) => (
              <p key={i} className="text-xl text-[#6B7A68] font-light leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <div className="border-t border-[#1F2B1E]/10 pt-6">
            <p className="font-mono text-xs text-[#6B7A68] tracking-widest uppercase">
              SCROLL TO EXPLORE THE SYSTEM ↓
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
