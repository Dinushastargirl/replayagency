"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function StrategySection() {
  return (
    <section id="system" className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="w-1 h-1 rounded-full bg-[#1F2B1E]" />
          <span className="font-mono text-[11px] text-[#1F2B1E] tracking-[0.25em] uppercase">HOW WE WORK</span>
        </div>

        {/* Big centred headline */}
        <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.05] text-center max-w-4xl mx-auto mb-16">
          Strategy is only useful when it changes how the business{" "}
          <span className="text-[#6B7A68]">moves.</span>
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Card 1 — Photo + tagline (tall, left) */}
          <div className="lg:row-span-2 relative rounded-2xl overflow-hidden bg-[#ECEAE2] min-h-[420px] flex flex-col justify-end p-8">
            <div className="absolute inset-0">
              <Image src="/clarity-portrait.jpg" alt="Clarity" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2B1E]/80 via-[#1F2B1E]/20 to-transparent" />
            </div>
            <div className="relative z-10">
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-2">YEKRA · PARTNER</div>
              <h3 className="font-display font-bold text-3xl text-white tracking-[-0.03em] leading-tight mb-3">
                Clarity,<br />engineered.
              </h3>
              <p className="text-sm text-white/65 leading-relaxed font-light max-w-xs">
                We map what matters, connect the signals, and design the system around them.
              </p>
            </div>
          </div>

          {/* Card 2 — "6–12 weeks" stat */}
          <div className="rounded-2xl bg-[#F7F6F2] border border-[#1F2B1E]/8 p-8 flex flex-col justify-between min-h-[200px]">
            <div className="font-mono text-[11px] text-[#6B7A68] tracking-widest uppercase">From diagnosis to deployment</div>
            <div>
              <div className="font-display font-bold text-5xl sm:text-6xl text-[#1F2B1E] tracking-[-0.04em] mb-4">
                6–12 weeks
              </div>
              {/* Phase dots */}
              <div className="flex gap-2 mb-4">
                {["#1F2B1E", "#E0533C", "#6B7A68", "#4a7a4a"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-mono font-bold"
                    style={{ background: c }}>
                    0{i + 1}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B7A68] leading-relaxed max-w-xs">
                Strategy, systems, and adoption move together — so change lands in the business, not just the deck.
              </p>
            </div>
          </div>

          {/* Card 3 — "4 layers" coral accent */}
          <div className="rounded-2xl bg-[#E0533C] p-8 flex flex-col justify-between min-h-[200px]">
            <div className="font-mono text-[11px] text-white/70 tracking-widest uppercase">Transformation stack</div>
            <div>
              <div className="font-display font-bold text-6xl text-white tracking-[-0.04em] mb-3">4 layers</div>
              <p className="text-sm text-white/75 leading-relaxed">
                Strategy, systems, data, and adoption designed as one operating model.
              </p>
            </div>
          </div>

          {/* Card 4 — "90 days" dark */}
          <div className="lg:col-span-1 rounded-2xl bg-[#1F2B1E] p-8 flex items-center justify-between min-h-[100px]">
            <div className="font-mono text-[11px] text-[#5A7055] tracking-widest uppercase">Horizon</div>
            <div className="font-display font-bold text-5xl text-white tracking-[-0.04em]">90 days</div>
          </div>

        </div>

        {/* Services strip */}
        <div className="mt-16 pt-10 border-t border-[#1F2B1E]/10">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-[#1F2B1E]/8 rounded-xl overflow-hidden">
            {[
              { num: "01", title: "STRATEGY", items: ["Positioning", "Market Research", "Digital Audits", "Growth Strategy"] },
              { num: "02", title: "BRAND",    items: ["Brand Strategy", "Visual Identity", "Positioning", "Brand Systems"] },
              { num: "03", title: "CREATIVE", items: ["Campaign Creative", "Content Systems", "Art Direction", "Motion"] },
              { num: "04", title: "DIGITAL",  items: ["Web Design", "Web Development", "Landing Pages", "Conversion"] },
              { num: "05", title: "GROWTH",   items: ["Paid Campaigns", "Distribution", "Analytics", "Optimization"] },
            ].map((svc) => (
              <div key={svc.title} className="bg-white p-6 flex flex-col gap-4 hover:bg-[#F7F6F2] transition-colors duration-200 group">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] text-[#6B7A68] tracking-widest">{svc.num}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#1F2B1E]/20 group-hover:text-[#1F2B1E]/60 transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#1F2B1E] tracking-[-0.02em]">{svc.title}</h3>
                <ul className="space-y-1.5 flex-1">
                  {svc.items.map((item) => (
                    <li key={item} className="font-mono text-[10px] text-[#6B7A68] leading-relaxed flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#6B7A68]/40 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
