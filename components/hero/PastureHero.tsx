"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ─── Card data ────────────────────────────────────────────────────────────────
const CARDS = [
  { id: "card-1", img: "/clarity-portrait.jpg", label: "Brand Architecture", tag: "STRATEGY" },
  { id: "card-2", img: "/hero-pasture.jpg",      label: "Growth Systems",       tag: "DIGITAL"   },
  { id: "card-3", img: "/clarity-portrait.jpg", label: "Signal to Action",     tag: "ANALYTICS" },
  { id: "card-4", img: "/hero-pasture.jpg",      label: "Decision Velocity",    tag: "CREATIVE"  },
  { id: "card-5", img: "/clarity-portrait.jpg", label: "Operating Model",      tag: "SYSTEMS"   },
  { id: "card-6", img: "/hero-pasture.jpg",      label: "Cycles Deployed",      tag: "GROWTH"    },
  { id: "card-7", img: "/clarity-portrait.jpg", label: "Conversion Engine",    tag: "BRAND"     },
  { id: "card-8", img: "/hero-pasture.jpg",      label: "Market Clarity",       tag: "DIGITAL"   },
];

// 5 copies — enough to fill any viewport with seamless wrap
const ALL_CARDS = [...CARDS, ...CARDS, ...CARDS, ...CARDS, ...CARDS];

const CARD_WIDTH  = 200;
const CARD_HEIGHT = 280;
const GAP         = 18;
const CARD_STRIDE = CARD_WIDTH + GAP;
const TOTAL_WIDTH = CARDS.length * CARD_STRIDE;
const SPEED       = 0.55;
// How high the arc rises at centre (px) — bigger = stronger upward curve
const ARC_HEIGHT  = 90;
// Width of the arc spread (half‑width in px from beam centre)
const ARC_SPREAD  = 680;

// ─── Individual Card ───────────────────────────────────────────────────────────
function GalleryCard({
  card,
  cardLeft,
  beamX,
}: {
  card: (typeof CARDS)[0];
  cardLeft: number;
  beamX: number;
}) {
  const cardCenter = cardLeft + CARD_WIDTH / 2;
  const dist       = cardCenter - beamX; // negative = left, positive = right

  // ── Arc: parabola — centre cards highest, edges dip down
  const normDist  = dist / ARC_SPREAD;                          // −1…+1 at edges
  const arcY      = ARC_HEIGHT * normDist * normDist - ARC_HEIGHT; // 0 at centre, +ARC_HEIGHT at edges

  // ── Colour reveal (left = B&W, right = colour)
  const colourT = Math.min(1, Math.max(0, (dist + 120) / 240));

  // ── 3D tilt toward beam
  const rotateY = Math.max(-22, Math.min(22, dist * 0.065));

  // ── Proximity scale
  const proximity = Math.max(0, 1 - Math.abs(dist) / 340);
  const scale     = 0.82 + proximity * 0.22;

  // ── Z‑index: centre cards on top
  const zIndex = Math.round(proximity * 12);

  return (
    <div
      className="absolute top-0 overflow-hidden rounded-2xl shadow-2xl"
      style={{
        left:      cardLeft,
        width:     CARD_WIDTH,
        height:    CARD_HEIGHT,
        transform: `perspective(900px) rotateY(${rotateY}deg) translateY(${arcY}px) scale(${scale})`,
        transition:"transform 0.04s linear",
        zIndex,
      }}
    >
      {/* Photo */}
      <div className="absolute inset-0">
        <Image src={card.img} alt={card.label} fill className="object-cover object-center" sizes="200px" />
      </div>

      {/* Desaturation (B&W left of beam) */}
      <div
        className="absolute inset-0 bg-black mix-blend-color"
        style={{ opacity: Math.max(0, 1 - colourT) * 0.97 }}
      />

      {/* Halftone dot matrix */}
      <div
        className="absolute inset-0"
        style={{
          opacity: Math.max(0, 1 - colourT) * 0.5,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize:  "7px 7px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5">
        <div className="text-[9px] font-mono text-white/45 uppercase tracking-widest mb-0.5">{card.tag}</div>
        <div className="text-[13px] font-semibold text-white leading-tight font-display">{card.label}</div>
      </div>

      {/* Beam glow edge on the card nearest beam */}
      {Math.abs(dist) < 150 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(${dist < 0 ? "270deg" : "90deg"}, transparent 60%, rgba(45,100,50,${0.22 * (1 - Math.abs(dist) / 150)}) 100%)`,
          }}
        />
      )}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export function PastureHero() {
  const animRef      = useRef<number>(0);
  const offsetRef    = useRef(0);
  const [offset, setOffset] = useState(0);
  const [beamX, setBeamX]   = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Centre beam on resize
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setBeamX(containerRef.current.clientWidth / 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-scroll loop — left → right
  useEffect(() => {
    const loop = () => {
      offsetRef.current += SPEED;
      if (offsetRef.current >= TOTAL_WIDTH) offsetRef.current -= TOTAL_WIDTH;
      setOffset(offsetRef.current);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Compute visible card positions
  // Anchor startX two full-sets to the LEFT of the viewport.
  // As offset grows 0 → TOTAL_WIDTH the second set scrolls across the
  // viewport, then the wrap subtracts TOTAL_WIDTH and the cycle repeats
  // with zero visible jump because the surrounding copies fill the gap.
  const getCardPositions = () => {
    const W = containerRef.current?.clientWidth ?? 1440;
    const startX = -TOTAL_WIDTH * 2;
    return ALL_CARDS.flatMap((card, i) => {
      const left = startX + i * CARD_STRIDE + offset;
      // render cards slightly beyond both edges so there's never a bare strip
      return left > -CARD_WIDTH - 80 && left < W + 80 ? [{ card, left }] : [];
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex flex-col select-none"
      style={{ background: "#080E08" }}
    >
      {/* ── Ambient glow: green ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: "-8%", left: "50%", transform: "translateX(-50%)",
            width: "55vw", height: "55vh",
            background: "radial-gradient(ellipse, rgba(31,80,31,0.28) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-72"
          style={{
            background: "radial-gradient(ellipse at 50% 110%, rgba(31,43,30,0.55) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-7 flex items-center justify-between">
        <Link href="/">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <Image src="/logo.png" alt="Replay Logo" fill className="object-contain p-1.5" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2">
          <Link href="/"       className="text-[11px] uppercase tracking-widest font-semibold text-white px-4 py-1.5 rounded-full bg-white/15">HOME</Link>
          <Link href="#system" className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">CAPABILITIES</Link>
          <Link href="#work"   className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">APPROACH</Link>
        </nav>

        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E0533C] hover:bg-[#c94530] text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-105">
          OUTCOMES
        </Link>
      </div>

      {/* ── Hero text ─────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-8 pb-2">
        {/* Headline — original text */}
        <h1
          className="font-display font-bold text-5xl sm:text-7xl md:text-[82px] tracking-[-0.04em] leading-[1.0] text-white max-w-4xl"
          style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          Turn attention into<br />
          <span
            style={{
              background: "linear-gradient(90deg, #ffffff 0%, #4a9c52 60%, #2D8B3A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            decisive growth.
          </span>
        </h1>

        <p
          className="mt-5 text-base sm:text-lg text-white/45 max-w-xl leading-relaxed"
          style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
        >
          We combine strategy, brand architecture, and digital engineering to build
          operating systems that make better decisions — and keep improving.
        </p>

        <div
          className="mt-7 flex items-center gap-4"
          style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        >
          <Link href="#work" className="text-[11px] font-semibold tracking-widest uppercase text-white/45 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-all">
            HOW WE WORK
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E0533C] hover:bg-[#c94530] text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-105">
            START A CONVERSATION <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Card gallery ─────────────────────────────────────────────────────── */}
      {/*  flex-1 pushes this to consume remaining space → cards sit in middle  */}
      <div
        className="relative z-10 flex-1 flex items-center pt-12"
        style={{ perspective: "1100px", perspectiveOrigin: "50% 100%", minHeight: 340 }}
      >
        {/* Left fade */}
        <div className="absolute top-0 left-0 bottom-0 w-40 z-20 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #080E08 0%, transparent 100%)" }} />
        {/* Right fade */}
        <div className="absolute top-0 right-0 bottom-0 w-40 z-20 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #080E08 0%, transparent 100%)" }} />
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-12 z-20 pointer-events-none"
          style={{ background: "linear-gradient(180deg, #080E08 0%, transparent 100%)" }} />

        {/* ── GREEN beam ── */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{
            left:       beamX,
            width:      2,
            background: "linear-gradient(180deg, transparent 0%, rgba(74,156,82,0.8) 20%, rgba(100,200,110,1) 50%, rgba(74,156,82,0.8) 80%, transparent 100%)",
            boxShadow:  "0 0 8px 4px rgba(74,156,82,0.55), 0 0 28px 10px rgba(31,80,31,0.3)",
          }}
        />
        {/* Horizontal lens flare at beam midpoint */}
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            left:   beamX - 70,
            top:    "50%",
            width:  140,
            height: 2,
            background: "linear-gradient(90deg, transparent, rgba(120,220,130,0.45), transparent)",
            filter: "blur(2px)",
          }}
        />

        {/* Card track */}
        <div className="absolute inset-0 overflow-hidden">
          {getCardPositions().map(({ card, left }, idx) => (
            <GalleryCard key={`${card.id}-${idx}`} card={card} cardLeft={left} beamX={beamX} />
          ))}
        </div>
      </div>

      {/* ── Scroll hint ──────────────────────────────────────────────────────── */}
      <div
        className="relative z-20 flex items-center justify-center pb-7 pt-3 gap-3"
        style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
      >
        <div className="w-px h-7 bg-gradient-to-b from-transparent to-white/15" />
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-px h-7 bg-gradient-to-b from-transparent to-white/15" />
      </div>

      <style jsx>{`
        @keyframes heroFade {
          0%   { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
