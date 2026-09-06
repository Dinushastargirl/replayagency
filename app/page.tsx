import React from "react";
import { ReplayPreloader } from "@/components/preloader/ReplayPreloader";
import { PastureHero } from "@/components/hero/PastureHero";
import { FlowRibbon } from "@/components/sections/FlowRibbon";
import { Problem } from "@/components/sections/Problem";
import { Workflow } from "@/components/sections/Workflow";
import { REEngine } from "@/components/re-engine/REEngine";
import { CoreLoop } from "@/components/sections/CoreLoop";
import { StrategySection } from "@/components/sections/StrategySection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Founder } from "@/components/sections/Founder";
import { Principles } from "@/components/sections/Principles";
import { Philosophy } from "@/components/sections/Philosophy";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-[#1F2B1E]">
      {/* Preloader */}
      <ReplayPreloader />

      {/* 1. Hero — Green Pasture + Fan Cards */}
      <PastureHero />

      {/* 2. RE— Marquee */}
      <FlowRibbon />

      {/* 3. The Idea — drum scroll dark section */}
      <Problem />

      {/* 4. RE System intro */}
      <Workflow />

      {/* 5. The RE— Engine — 3D scroll (01–08 RETHINK → REPLAY) */}
      <REEngine />

      {/* 6. The Loop — MAKE. MEASURE. LEARN. REPEAT. drum scroll */}
      <CoreLoop />

      {/* 7. Services — STRATEGY / BRAND / CREATIVE / DIGITAL / GROWTH */}
      <StrategySection />

      {/* 8. Selected Work */}
      <SelectedWork />

      {/* 9. About — SMALL BY DESIGN + Founder + Positioning */}
      <Founder />

      {/* 10. Who We Work With + Process */}
      <Principles />

      {/* 11. FAQ */}
      <Philosophy />

      {/* 12. Contact */}
      <FinalCTA />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
