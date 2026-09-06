import React from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-canvas text-primary flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-40 pb-20 w-full">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted tracking-widest">01 // SECTION</span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted font-mono">
              WORK
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl tracking-tight text-primary">
            SELECTED WORK.
          </h1>
          <p className="text-lg text-primary/80 leading-relaxed font-normal">
            Case studies documenting our growth systems, digital infrastructure rebuilds, and performance outcomes are currently being prepared.
          </p>
          <div className="pt-6">
            <Button href="/" variant="secondary" icon="arrow-right">
              RETURN TO HOME
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
