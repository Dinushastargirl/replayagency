"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  year: string;
}

const PROJECTS: ProjectCardProps[] = [
  {
    id: "01",
    title: "PROJECT 01",
    category: "DIGITAL INFRASTRUCTURE & REBUILD",
    year: "2026",
  },
  {
    id: "02",
    title: "PROJECT 02",
    category: "BRAND SYSTEM & COMMERCE PLATFORM",
    year: "2026",
  },
  {
    id: "03",
    title: "PROJECT 03",
    category: "GROWTH ARCHITECTURE & ACQUISITION",
    year: "2026",
  },
];

export function WorkPlaceholder() {
  const reSystemStages = [
    "RETHINK",
    "REFRAME",
    "RECREATE",
    "REBUILD",
    "REACH",
    "REACT",
    "REPEAT",
    "REPLAY",
  ];

  return (
    <section
      id="selected-work"
      className="relative z-10 bg-canvas border-t border-border py-28 sm:py-36 px-6 sm:px-10 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8 mb-16 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted tracking-widest">01 // INDEX</span>
              <span className="w-8 h-[1px] bg-border" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted font-mono">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary tracking-tight">
              PROVEN RESULTS.
            </h2>
          </div>
          <p className="text-sm font-mono text-muted max-w-xs md:text-right">
            Case studies are being prepared for public release.
          </p>
        </div>

        {/* 3 Architectural Project Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-surface/60 border border-border p-8 sm:p-10 flex flex-col justify-between min-h-[380px] hover:border-primary/40 hover:bg-surface transition-all duration-500"
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <span className="font-mono text-xs text-muted tracking-wider">
                  № {project.id}
                </span>
                <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-primary/5 text-primary border border-border">
                  COMING SOON
                </span>
              </div>

              {/* Center Aesthetic Composition */}
              <div className="my-10 flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div className="w-12 h-12 rounded-none border border-border flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-500 bg-canvas">
                  <span className="font-mono text-xs font-semibold">{project.id}</span>
                </div>
                <h3 className="font-display font-semibold text-xl tracking-tight text-primary">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-muted max-w-[200px] tracking-wide uppercase">
                  {project.category}
                </p>
              </div>

              {/* Bottom State */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs font-mono text-muted">
                <span>STAGE // RESERVED</span>
                <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RE— System Foundation Band */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-1">
                THE REPLAY METHODOLOGY
              </p>
              <p className="font-display font-medium text-lg text-primary">
                A continuous 8-stage growth engine.
              </p>
            </div>

            {/* Stages Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {reSystemStages.map((stage, idx) => (
                <div
                  key={stage}
                  className="flex items-center gap-2 px-3 py-1.5 bg-surface text-primary border border-border text-xs font-mono tracking-wider"
                >
                  <span className="text-[10px] text-muted">0{idx + 1}</span>
                  <span className="font-semibold">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
