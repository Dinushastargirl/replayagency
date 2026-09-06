import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function SystemPage() {
  const systemStages = [
    { num: "01", name: "RETHINK", desc: "Audit core assumptions and discover growth bottlenecks." },
    { num: "02", name: "REFRAME", desc: "Position the value proposition for high-intent conversion." },
    { num: "03", name: "RECREATE", desc: "Design calm, intentional, high-performance interfaces." },
    { num: "04", name: "REBUILD", desc: "Engineer resilient, scalable digital infrastructure." },
    { num: "05", name: "REACH", desc: "Deploy strategic acquisition and organic distribution." },
    { num: "06", name: "REACT", desc: "Measure real-world behavioral telemetry and feedback." },
    { num: "07", name: "REPEAT", desc: "Systematize repeatable growth loops and workflows." },
    { num: "08", name: "REPLAY", desc: "Continuously iterate and compound studio performance." },
  ];

  return (
    <main className="min-h-screen bg-canvas text-primary flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-40 pb-20 w-full">
        <div className="max-w-3xl space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted tracking-widest">02 // METHODOLOGY</span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted font-mono">
              THE RE— SYSTEM
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl tracking-tight text-primary">
            REPLAY IS A SYSTEM, NOT A SERVICE LIST.
          </h1>
          <p className="text-lg text-primary/80 leading-relaxed font-normal">
            The &quot;RE&quot; represents returning to something and making it better. An 8-stage cyclical methodology engineered to compound digital value.
          </p>
        </div>

        {/* 8 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {systemStages.map((stage) => (
            <div
              key={stage.name}
              className="bg-surface/70 border border-border p-6 flex flex-col justify-between min-h-[180px]"
            >
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <span className="font-mono text-xs text-muted">STAGE {stage.num}</span>
                <span className="w-2 h-2 bg-primary" />
              </div>
              <div className="my-3">
                <h2 className="font-display font-bold text-xl text-primary">{stage.name}</h2>
                <p className="text-xs text-muted mt-2 font-mono leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Button href="/" variant="secondary" icon="arrow-right">
          RETURN TO HOME
        </Button>
      </div>
      <Footer />
    </main>
  );
}
