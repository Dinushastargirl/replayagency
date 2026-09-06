"use client";
import React, { useState } from "react";
import { DrumContainer, DrumLine } from "@/components/ui/DrumScroll";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "WHAT DOES REPLAY ACTUALLY DO?",
    a: "Replay helps businesses rethink strategy, build better digital experiences and continuously improve how they attract and convert customers.",
  },
  {
    q: "IS REPLAY A MARKETING AGENCY?",
    a: "Not in the traditional sense. Replay connects strategy, brand, creative, digital experiences and growth rather than treating them as completely separate services.",
  },
  {
    q: "DO YOU WORK WITH SMALL BUSINESSES?",
    a: "Yes. The right fit matters more than company size.",
  },
  {
    q: "DO YOU ONLY WORK ON LARGE PROJECTS?",
    a: "No. The scope depends on the problem. Sometimes the right engagement is a focused project. Sometimes it's an ongoing system.",
  },
  {
    q: "CAN YOU WORK WITH OUR EXISTING BRAND?",
    a: "Yes. Not everything needs to be rebuilt. Sometimes the strongest move is to understand what already works and improve from there.",
  },
  {
    q: "HOW DO WE START?",
    a: "Tell us what you're trying to solve. We'll figure out what happens next.",
  },
];

export function Philosophy() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#F7F6F2] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-32">
        <DrumContainer className="mb-16">
          <DrumLine intensity={0.5} className="font-mono text-[11px] text-[#6B7A68] tracking-[0.3em] uppercase mb-4">
            FAQ
          </DrumLine>
          <DrumLine intensity={0.45} className="font-display font-bold text-4xl sm:text-5xl text-[#1F2B1E] tracking-[-0.04em] leading-[1.0]">
            Common questions.
          </DrumLine>
        </DrumContainer>

        <div className="space-y-px bg-[#1F2B1E]/10">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="bg-[#F7F6F2]">
              <button
                id={`faq-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 px-6 py-7 text-left hover:bg-[#ECEAE2] transition-colors duration-200 group"
              >
                <span className="font-mono text-sm text-[#1F2B1E] tracking-wide leading-relaxed">{q}</span>
                <span className="flex-shrink-0 mt-0.5 text-[#6B7A68] group-hover:text-[#1F2B1E] transition-colors">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-7 text-base text-[#6B7A68] leading-relaxed border-t border-[#1F2B1E]/8 pt-5">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
