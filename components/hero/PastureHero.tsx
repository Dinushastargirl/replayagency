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

// 16 persistent slots (2 full sets of 8) guarantees unbroken, continuous stream with zero gaps
const M = 16;
const SLOTS = Array.from({ length: M }, (_, i) => ({
  slotIndex: i,
  card: CARDS[i % CARDS.length],
}));

const CARD_WIDTH = 200;
const CARD_HEIGHT = 280;
const CARD_STRIDE = 224;
const TOTAL_WIDTH = M * CARD_STRIDE; // 3584px
const X_MIN = -CARD_STRIDE * 2; // -448px (off-screen left buffer)
const SPEED = 0.75; // Continuous smooth speed
const BASE_Y = 24; // Baseline vertical position

// ─── Main Component ────────────────────────────────────────────────────────────
export function PastureHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef(0);
  const [beamX, setBeamX] = useState(720);

  // Resize handler for central beam
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setBeamX(containerRef.current.clientWidth / 2);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ─── Truly Infinite Continuous Scroll Loop ───────────────────────────────────
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Continuous offset (moves cards left -> right)
      offsetRef.current = (offsetRef.current + SPEED * (dt * 60)) % TOTAL_WIDTH;

      const W = containerRef.current?.clientWidth ?? 1440;
      const bX = W / 2;

      // Update all 16 slots directly on DOM (hardware accelerated translate3d, zero React re-render lag)
      cardRefs.current.forEach((el, k) => {
        if (!el) return;

        // Modulo wrap: maps each card into [X_MIN, X_MIN + TOTAL_WIDTH)
        let pos = (k * CARD_STRIDE + offsetRef.current - X_MIN) % TOTAL_WIDTH;
        if (pos < 0) pos += TOTAL_WIDTH;
        const left = pos + X_MIN;

        // Hide cards that are far off-screen to save GPU
        if (left < -CARD_WIDTH - 120 || left > W + 120) {
          el.style.display = "none";
          return;
        }

        el.style.display = "block";
        const cardCenter = left + CARD_WIDTH / 2;
        const dist = cardCenter - bX; // negative = left of beam, positive = right of beam

        // 3D Parabola Arc: peak at center, gentle dip down at sides
        const normDist = dist / 680;
        const arcY = 44 * normDist * normDist - 44;

        // 3D Tilt toward center beam
        const rotateY = Math.max(-18, Math.min(18, dist * 0.055));

        // Proximity scale
        const proximity = Math.max(0, 1 - Math.abs(dist) / 380);
        const scale = 0.86 + proximity * 0.18;

        // Center cards always overlap outer cards
        el.style.zIndex = `${Math.round(proximity * 25) + 1}`;

        // Hardware-accelerated 3D transform
        el.style.transform = `translate3d(${left}px, ${BASE_Y + arcY}px, 0) perspective(900px) rotateY(${rotateY}deg) scale(${scale})`;

        // Dynamic Color Reveal:
        // Left of beam (dist < -70) = Black & White + Halftone dot matrix
        // Transition zone (-70 to +70) = Crossfade
        // Right of beam (dist > +70) = Full Color
        const colourT = Math.min(1, Math.max(0, (dist + 70) / 140));
        const bwOverlay = el.querySelector(".bw-overlay") as HTMLElement | null;
        const halftoneOverlay = el.querySelector(".halftone-overlay") as HTMLElement | null;
        const beamGlow = el.querySelector(".beam-glow") as HTMLElement | null;

        if (bwOverlay) {
          bwOverlay.style.opacity = `${Math.max(0, 1 - colourT) * 0.98}`;
        }
        if (halftoneOverlay) {
          halftoneOverlay.style.opacity = `${Math.max(0, 1 - colourT) * 0.55}`;
        }
        if (beamGlow) {
          const glowAlpha = Math.abs(dist) < 140 ? 0.3 * (1 - Math.abs(dist) / 140) : 0;
          beamGlow.style.opacity = `${glowAlpha}`;
          beamGlow.style.background = `linear-gradient(${dist < 0 ? "270deg" : "90deg"}, transparent 60%, rgba(74,156,82,0.85) 100%)`;
        }
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden flex flex-col select-none"
      style={{ background: "#080E08", minHeight: "100vh" }}
    >
      {/* ── Ambient glow: green ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            top: "-8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "55vw",
            height: "55vh",
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
          <Link href="/" className="text-[11px] uppercase tracking-widest font-semibold text-white px-4 py-1.5 rounded-full bg-white/15">
            HOME
          </Link>
          <Link href="#system" className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">
            CAPABILITIES
          </Link>
          <Link href="#work" className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">
            APPROACH
          </Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E0533C] hover:bg-[#c94530] text-white px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-105"
        >
          OUTCOMES
        </Link>
      </div>

      {/* ── Hero text & CTAs ──────────────────────────────────────────────────── */}
      {/* pb-8 and mb-10/mb-16 create guaranteed negative space between buttons & slideshow */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-6 sm:pt-10 pb-6 mb-8 sm:mb-12 md:mb-14">
        <h1
          className="font-display font-bold text-5xl sm:text-7xl md:text-[82px] tracking-[-0.04em] leading-[1.0] text-white max-w-4xl"
          style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          Turn attention into
          <br />
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

        {/* CTA Buttons */}
        <div
          className="mt-7 flex items-center gap-4"
          style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        >
          <Link
            href="#work"
            className="text-[11px] font-semibold tracking-widest uppercase text-white/45 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-all"
          >
            HOW WE WORK
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E0533C] hover:bg-[#c94530] text-white px-6 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:scale-105"
          >
            START A CONVERSATION <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Negative Space & Card Gallery Container ─────────────────────────── */}
      <div
        className="relative z-10 w-full flex-1 flex flex-col justify-start overflow-hidden pb-8"
        style={{ perspective: "1100px", perspectiveOrigin: "50% 100%", minHeight: 350 }}
      >
        {/* Left & Right Edge Vignette Fades */}
        <div
          className="absolute top-0 left-0 bottom-0 w-44 z-20 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #080E08 0%, transparent 100%)" }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-44 z-20 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #080E08 0%, transparent 100%)" }}
        />

        {/* ── Central GREEN Beam ──────────────────────────────────────────────── */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{
            left: beamX,
            width: 2,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(74,156,82,0.8) 20%, rgba(100,200,110,1) 50%, rgba(74,156,82,0.8) 80%, transparent 100%)",
            boxShadow: "0 0 8px 4px rgba(74,156,82,0.55), 0 0 28px 10px rgba(31,80,31,0.3)",
          }}
        />
        {/* Horizontal lens flare at beam midpoint */}
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            left: beamX - 70,
            top: "45%",
            width: 140,
            height: 2,
            background: "linear-gradient(90deg, transparent, rgba(120,220,130,0.45), transparent)",
            filter: "blur(2px)",
          }}
        />

        {/* ── Continuous Never-Ending Card Track ──────────────────────────────── */}
        <div className="relative w-full h-[320px] overflow-hidden">
          {SLOTS.map(({ slotIndex, card }) => (
            <div
              key={`card-slot-${slotIndex}`}
              ref={(el) => {
                cardRefs.current[slotIndex] = el;
              }}
              className="absolute top-0 overflow-hidden rounded-2xl shadow-2xl"
              style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                willChange: "transform",
                left: 0,
                transform: "translate3d(-9999px, 0, 0)",
              }}
            >
              {/* Vibrant Photo */}
              <div className="absolute inset-0">
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  className="object-cover object-center"
                  sizes="200px"
                  priority={slotIndex < 8}
                />
              </div>

              {/* B&W Desaturation Overlay */}
              <div className="bw-overlay absolute inset-0 bg-black mix-blend-color pointer-events-none" />

              {/* Halftone Dot Matrix Texture */}
              <div
                className="halftone-overlay absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
                  backgroundSize: "7px 7px",
                }}
              />

              {/* Subtle Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15 pointer-events-none" />

              {/* Beam Glow Edge on Card Border */}
              <div className="beam-glow absolute inset-0 pointer-events-none transition-opacity duration-75" />

              {/* Card Tag & Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10">
                <div className="text-[9px] font-mono text-white/50 uppercase tracking-widest mb-0.5">
                  {card.tag}
                </div>
                <div className="text-[13px] font-semibold text-white leading-tight font-display">
                  {card.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll hint ──────────────────────────────────────────────────────── */}
      <div
        className="relative z-20 flex items-center justify-center pb-6 pt-2 gap-3"
        style={{ animation: "heroFade 1s cubic-bezier(0.16,1,0.3,1) 0.9s both" }}
      >
        <div className="w-px h-6 bg-gradient-to-b from-transparent to-white/15" />
        <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
          SCROLL TO EXPLORE
        </span>
        <div className="w-px h-6 bg-gradient-to-b from-transparent to-white/15" />
      </div>

      <style jsx>{`
        @keyframes heroFade {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
