"use client";
import React from "react";

const SERVICE_TAGS = ["Strategy", "Systems", "Brand", "Creative", "Digital", "Growth", "Analytics"];

export function Problem() {
  return (
    <section className="relative w-full bg-[#1A2918] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-36">

        {/* Service strip */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-20 pb-8 border-b border-[#D7D9CE]/10">
          {SERVICE_TAGS.map((tag, i) => (
            <div key={tag} className="flex items-center gap-2">
              <span className="text-[#5A7055]">
                {i === 0 ? "+" : i === 1 ? "+" : i === 2 ? "●" : i === 3 ? "≡" : i === 4 ? "×" : i === 5 ? "+" : "≡"}
              </span>
              <span className="font-mono text-[11px] text-[#5A7055] tracking-[0.2em] uppercase">{tag}</span>
            </div>
          ))}
        </div>

        {/* Big Headline */}
        <div className="mb-16">
          <div className="font-mono text-[11px] text-[#5A7055] tracking-[0.3em] uppercase mb-8">
            THE IDEA
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-[5rem] text-[#D7D9CE] tracking-[-0.03em] leading-[1.0] max-w-4xl">
            THE FIRST VERSION IS RARELY THE FINAL VERSION.
          </h2>
        </div>

        {/* Body lines */}
        <div className="space-y-6 max-w-2xl">
          {[
            "Good digital work doesn't happen once.",
            "Markets change. People change. Businesses change.",
            "What works today can become the thing holding you back tomorrow.",
          ].map((line, i) => (
            <p key={i} className="text-xl sm:text-2xl text-[#D7D9CE]/55 font-light leading-[1.4]">
              {line}
            </p>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-20 pt-8 border-t border-[#D7D9CE]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <p className="font-mono text-sm text-[#5A7055] max-w-md leading-relaxed">
            Replay exists to revisit the work, understand what changed,<br />
            and build the next version better.
          </p>
          <span className="font-mono text-[11px] text-[#5A7055]/50 tracking-widest uppercase">
            EST. 2024 · COLOMBO
          </span>
        </div>
      </div>
    </section>
  );
}
