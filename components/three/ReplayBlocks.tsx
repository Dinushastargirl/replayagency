"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ReplayBlock } from "./ReplayBlock";
import { useReplay } from "@/context/ReplayContext";

interface BlockConfig {
  letter: "R" | "E" | "P" | "L" | "A" | "Y";
  targetPos: [number, number, number];
  startOffset: [number, number, number];
  startRotation: [number, number, number];
}

const BLOCKS_CONFIG: BlockConfig[] = [
  // Top Row: [R] [E] [P]
  {
    letter: "R",
    targetPos: [-1.1, 0.625, 0],
    startOffset: [-1.6, 1.9, 1.4],
    startRotation: [0.85, -1.3, 0.45],
  },
  {
    letter: "E",
    targetPos: [0.0, 0.625, 0],
    startOffset: [0.3, 2.3, -1.1],
    startRotation: [-1.15, 0.95, -0.65],
  },
  {
    letter: "P",
    targetPos: [1.1, 0.625, 0],
    startOffset: [1.7, 1.8, 1.6],
    startRotation: [0.95, 1.45, -0.55],
  },
  // Bottom Row: [L] [A] [Y]
  {
    letter: "L",
    targetPos: [-1.1, -0.625, 0],
    startOffset: [-1.9, -1.6, -1.2],
    startRotation: [-0.75, -1.15, 0.85],
  },
  {
    letter: "A",
    targetPos: [0.0, -0.625, 0],
    startOffset: [0.4, -2.1, 1.2],
    startRotation: [1.25, -0.65, -0.95],
  },
  {
    letter: "Y",
    targetPos: [1.1, -0.625, 0],
    startOffset: [1.8, -1.7, -0.9],
    startRotation: [-0.95, 1.35, 0.75],
  },
];

export function ReplayBlocks() {
  const groupRef = useRef<THREE.Group>(null);
  const { isMobile, phase } = useReplay();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    
    // Slight breathing idle float once settled
    if (phase === "hero") {
      const time = performance.now() * 0.001;
      groupRef.current.position.y = THREE.MathUtils.damp(
        groupRef.current.position.y,
        Math.sin(time * 0.8) * 0.03,
        2,
        delta
      );
    }
  });

  // Scale down slightly on mobile screens
  const scale = isMobile ? 0.75 : 1.0;

  return (
    <group ref={groupRef} scale={scale} position={[0, 0, 0]}>
      {BLOCKS_CONFIG.map((config, idx) => (
        <ReplayBlock
          key={config.letter + idx}
          index={idx}
          letter={config.letter}
          targetPos={config.targetPos}
          startOffset={config.startOffset}
          startRotation={config.startRotation}
        />
      ))}
    </group>
  );
}
