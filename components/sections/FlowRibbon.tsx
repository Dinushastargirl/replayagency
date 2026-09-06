"use client";
import React from "react";

export function FlowRibbon() {
  const words = ["RE—THINK", "RE—FRAME", "RE—CREATE", "RE—BUILD", "RE—ACH", "RE—ACT", "RE—PEAT", "RE—PLAY"];
  const repeated = [...words, ...words, ...words];

  return (
    <div className="w-full bg-[#1F2B1E] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {repeated.map((w, i) => (
          <span key={i} className="font-mono text-[11px] text-[#4a7a4a] tracking-[0.3em] uppercase flex-shrink-0">
            {w}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
