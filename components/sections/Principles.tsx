"use client";
import React from "react";
import { DrumContainer, DrumLine } from "@/components/ui/DrumScroll";

const FIT_CARDS = [
  { title: "YOU HAVE A REAL BUSINESS.", body: "Something already exists. Now it needs to grow." },
  { title: "YOU HAVE SOMETHING TO IMPROVE.", body: "A brand. A website. A campaign. A funnel. A growth problem." },
  { title: "YOU CARE ABOUT QUALITY.", body: "Not just how the work looks. How it works." },
  { title: "YOU WANT A PARTNER.", body: "Not someone waiting for a brief. Someone willing to question it." },
];

const PROCESS_STEPS = [
  { num: "01", title: "START", sub: "BEGIN WITH THE PROBLEM.", body: "Tell us what's happening. What's working. What's not. Where you want to go." },
  { num: "02", title: "UNDERSTAND", sub: "LOOK BEFORE WE BUILD.", body: "We learn about the business, audience, market and existing system." },
  { num: "03", title: "BUILD", sub: "CREATE THE NEXT VERSION.", body: "Strategy becomes direction. Direction becomes execution." },
  { num: "04", title: "LEARN", sub: "LOOK AT WHAT HAPPENED.", body: "We measure the response and pay attention to what the work tells us." },
  { num: "05", title: "REPLAY", sub: "BUILD FROM WHAT WE LEARNED.", body: "The next version starts with everything the previous one taught us." },
];

export function Principles() {
  return (
    <>
      {/* WHO WE WORK WITH */}
      <section className="relative w-full bg-[#F7F6F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20">
          <DrumContainer className="mb-16">
            <DrumLine intensity={0.5} className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-4">
              WHO WE WORK WITH
            </DrumLine>
            <DrumLine intensity={0.45} className="font-display font-bold text-4xl sm:text-6xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.0] max-w-2xl">
              BUSINESSES READY FOR THE NEXT VERSION.
            </DrumLine>
            <DrumLine intensity={0.4} className="mt-6 max-w-sm">
              <p className="text-base text-[#6B7A68] leading-relaxed">
                You don't need to be a huge company. You need to have something worth improving.
              </p>
            </DrumLine>
          </DrumContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1F2B1E]/10">
            {FIT_CARDS.map(({ title, body }) => (
              <div key={title} className="bg-[#F7F6F2] hover:bg-[#ECEAE2] transition-colors duration-300 p-8 flex flex-col gap-5">
                <div className="w-2 h-2 rounded-full bg-[#1F2B1E]" />
                <div className="font-display font-bold text-base text-[#1F2B1E] tracking-[-0.01em] leading-tight">{title}</div>
                <p className="font-mono text-xs text-[#6B7A68] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Not a fit */}
          <div className="mt-14 bg-[#ECEAE2] border border-[#1F2B1E]/10 p-8 sm:p-10">
            <div className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-4">NOT A FIT?</div>
            <div className="font-display font-bold text-xl text-[#1F2B1E] mb-4">WE'D RATHER KNOW THAT EARLY.</div>
            <p className="text-sm text-[#6B7A68] leading-relaxed max-w-2xl mb-4">
              Replay probably isn't the right partner if you're looking for: the cheapest option, the fastest possible turnaround, a website simply because you need one, or someone to execute instructions without questioning them.
            </p>
            <p className="font-mono text-xs text-[#1F2B1E]/70 italic">
              We're interested in the problem behind the request.
            </p>
          </div>
        </div>
      </section>

      {/* HOW AN ENGAGEMENT WORKS */}
      <section className="relative w-full bg-[#1F2B1E] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-32">
          <DrumContainer className="mb-20">
            <DrumLine intensity={0.5} className="font-mono text-[11px] text-[#5A7055] tracking-[0.3em] uppercase mb-4">
              PROCESS — HOW AN ENGAGEMENT WORKS
            </DrumLine>
          </DrumContainer>

          <div className="space-y-px bg-[#D7D9CE]/10">
            {PROCESS_STEPS.map(({ num, title, sub, body }) => (
              <DrumContainer key={num}>
                <DrumLine
                  intensity={0.5}
                  className="bg-[#1F2B1E] hover:bg-[#253D22] transition-colors duration-300 px-8 py-10 flex flex-col sm:flex-row sm:items-start gap-8"
                >
                  <span className="font-mono text-sm text-[#5A7055] w-8 flex-shrink-0">{num}</span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="min-w-[140px]">
                      <div className="font-display font-bold text-lg text-[#D7D9CE] tracking-[-0.01em]">{title}</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-[#5A7055] tracking-widest uppercase mb-2">{sub}</div>
                      <p className="text-sm text-[#D7D9CE]/60 leading-relaxed max-w-md">{body}</p>
                    </div>
                  </div>
                </DrumLine>
              </DrumContainer>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
