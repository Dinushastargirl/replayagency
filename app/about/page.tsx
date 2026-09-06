import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas text-primary flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-40 pb-20 w-full">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted tracking-widest">03 // STUDIO</span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted font-mono">
              ABOUT REPLAY
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl tracking-tight text-primary">
            ARCHITECTURAL RIGOR. COMPOUNDING GROWTH.
          </h1>
          <p className="text-lg text-primary/80 leading-relaxed font-normal">
            Replay is an independent digital growth studio. We operate at the intersection of business strategy, physical-grade digital design, and resilient engineering.
          </p>
          <div className="pt-6">
            <Button href="/contact" variant="primary" icon="arrow-right">
              START A CONVERSATION
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
