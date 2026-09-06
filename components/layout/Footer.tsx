"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#work",    label: "WORK"    },
  { href: "#system",  label: "SYSTEM"  },
  { href: "#about",   label: "ABOUT"   },
  { href: "#contact", label: "CONTACT" },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-[#0d1a0c] border-t border-[#D7D9CE]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[#D7D9CE]/8">

          {/* Brand */}
          <div className="sm:col-span-2 flex flex-col gap-3">
            <div className="font-display font-bold text-4xl text-[#D7D9CE] tracking-[-0.03em]">REPLAY</div>
            <div className="font-mono text-[10px] text-[#5A7055] tracking-[0.25em] uppercase">DIGITAL GROWTH STUDIO</div>
            <p className="text-sm text-[#D7D9CE]/35 leading-relaxed mt-1 max-w-xs">
              Rethink. Rebuild. Replay. An independent studio for businesses ready for the next version.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] text-[#5A7055] tracking-[0.3em] uppercase mb-2">NAVIGATE</div>
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={label} href={href} className="font-mono text-xs text-[#D7D9CE]/40 hover:text-[#D7D9CE] transition-colors duration-200 tracking-wide">
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] text-[#5A7055] tracking-[0.3em] uppercase mb-2">CONTACT</div>
            <a href="mailto:replayagency.info@gmail.com" className="font-mono text-xs text-[#D7D9CE]/40 hover:text-[#D7D9CE] transition-colors leading-relaxed">
              replayagency.info@gmail.com
            </a>
            <a href="tel:+94722346167" className="font-mono text-xs text-[#D7D9CE]/40 hover:text-[#D7D9CE] transition-colors mb-2">
              +94 72 234 6167
            </a>
            <div className="flex gap-4 mt-1">
              {["LinkedIn", "Instagram"].map((s) => (
                <a key={s} href="#" className="inline-flex items-center gap-1 font-mono text-xs text-[#D7D9CE]/30 hover:text-[#D7D9CE] transition-colors">
                  {s} <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#5A7055]/60 tracking-widest uppercase">
            REVISIT. REBUILD. REPLAY.
          </div>
          <div className="font-mono text-xs text-[#5A7055]/35">
            © 2026 Replay.agency · Colombo, Sri Lanka
          </div>
        </div>

      </div>
    </footer>
  );
}
