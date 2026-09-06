"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Founder() {
  return (
    <section id="about" className="relative w-full bg-[#F7F6F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">

        {/* Label */}
        <div className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-12">
          ABOUT REPLAY
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

          {/* Left: Headline + body */}
          <div>
            <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.0] mb-10">
              SMALL BY DESIGN.
            </h2>
            <div className="space-y-5">
              {[
                "Replay is a founder-led digital growth studio built around a simple idea: good work gets better when you're willing to revisit it.",
                "We work across strategy, brand, creative and digital execution — connecting the pieces instead of treating them as separate deliverables.",
                "No unnecessary layers. No handoffs between departments. No distance between the idea and the execution.",
              ].map((para, i) => (
                <p key={i} className="text-lg text-[#6B7A68] leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Founder quote card */}
          <div className="bg-[#1F2B1E] rounded-2xl p-10 flex flex-col justify-between gap-8 min-h-[360px]">
            <div className="w-12 h-12 rounded-full bg-[#4a7a4a]/30 border border-[#D7D9CE]/20 flex items-center justify-center">
              <span className="font-display font-bold text-xl text-[#D7D9CE]">T</span>
            </div>
            <div>
              <blockquote className="text-lg text-[#D7D9CE]/80 font-light leading-relaxed italic mb-8">
                "I don't want Replay to be another agency that produces more content, more campaigns and more noise.
                I want it to be a place where businesses can step back, understand what isn't working, and build the next version properly."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-[#D7D9CE]/25" />
                <div>
                  <div className="font-display font-bold text-[#D7D9CE] tracking-wide">TINU</div>
                  <div className="font-mono text-[10px] text-[#5A7055] tracking-widest uppercase mt-0.5">
                    Founder · Digital Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-pillar cards */}
        <div className="pt-12 border-t border-[#1F2B1E]/10">
          <div className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-8">
            WHAT REPLAY IS — NOT ANOTHER CONTENT AGENCY.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "STRATEGY", desc: "UNDERSTAND THE PROBLEM.", body: "Find the opportunity before jumping into execution.", accent: false },
              { title: "CREATIVE", desc: "MAKE THE ANSWER WORTH NOTICING.", body: "Turn the strategy into something people can see, understand and remember.", accent: true },
              { title: "DIGITAL",  desc: "BUILD THE SYSTEM.", body: "Create the experience that turns attention into action.", accent: false },
            ].map(({ title, desc, body, accent }) => (
              <div
                key={title}
                className={`rounded-2xl p-8 flex flex-col gap-4 ${accent ? "bg-[#E0533C]" : "bg-white border border-[#1F2B1E]/8"}`}
              >
                <span className={`font-mono text-[10px] tracking-widest uppercase ${accent ? "text-white/60" : "text-[#6B7A68]"}`}>{title}</span>
                <div className={`font-display font-bold text-lg tracking-[-0.02em] leading-tight ${accent ? "text-white" : "text-[#1F2B1E]"}`}>{desc}</div>
                <p className={`font-mono text-xs leading-relaxed ${accent ? "text-white/70" : "text-[#6B7A68]"}`}>{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
