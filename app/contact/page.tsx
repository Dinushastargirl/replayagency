import React from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-canvas text-primary flex flex-col justify-between">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-40 pb-20 w-full">
        <div className="max-w-3xl space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted tracking-widest">04 // INITIATION</span>
            <span className="w-8 h-[1px] bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted font-mono">
              CONTACT
            </span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl tracking-tight text-primary">
            START A PROJECT.
          </h1>
          <p className="text-lg text-primary/80 leading-relaxed font-normal">
            Tell us about your brand, current bottlenecks, and growth targets. We evaluate every inquiry with rigorous intentionality.
          </p>
        </div>

        {/* Contact Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Block */}
          <div className="bg-surface/70 border border-border p-8 flex flex-col justify-between min-h-[200px]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>ELECTRONIC MAIL</span>
              </div>
              <p className="font-display text-2xl font-semibold text-primary pt-2">
                replayagency.info@gmail.com
              </p>
            </div>
            <a
              href="mailto:replayagency.info@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-muted transition-colors pt-4 border-t border-border/60"
            >
              <span>SEND INQUIRY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Phone Block */}
          <div className="bg-surface/70 border border-border p-8 flex flex-col justify-between min-h-[200px]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-muted uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>DIRECT LINE</span>
              </div>
              <p className="font-display text-2xl font-semibold text-primary pt-2 font-mono">
                +94 72 234 6167
              </p>
            </div>
            <a
              href="tel:+94722346167"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:text-muted transition-colors pt-4 border-t border-border/60"
            >
              <span>CALL STUDIO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <Button href="/" variant="secondary" icon="arrow-right">
          RETURN TO HOME
        </Button>
      </div>
      <Footer />
    </main>
  );
}
