"use client";
import React, { useEffect, useRef } from "react";

/** Wraps children in a perspective container for drum/barrel roll effect */
export function DrumContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className} style={{ perspective: "1100px", perspectiveOrigin: "50% 50%" }}>
      {children}
    </div>
  );
}

/** Each DrumLine rotates in 3D as it scrolls through the viewport — barrel/cylinder effect */
export function DrumLine({
  children,
  className = "",
  intensity = 1,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const elCenter = rect.top + rect.height / 2;
      const ratio = (elCenter - viewH / 2) / (viewH * 0.5);
      const clamped = Math.max(-1.2, Math.min(1.2, ratio));
      const rotX = clamped * 32 * intensity;
      const scale = 1 - Math.abs(clamped) * 0.07 * intensity;
      const opacity = 1 - Math.abs(clamped) * 0.55 * intensity;
      el.style.transform = `rotateX(${rotX}deg) scale(${scale})`;
      el.style.opacity = `${Math.max(0.08, opacity)}`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformOrigin: "50% 50%", willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
}
