"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { ReplayBlocks } from "@/components/three/ReplayBlocks";
import { ReplayEnvironment } from "@/components/three/ReplayEnvironment";
import { ReplayCamera } from "@/components/three/ReplayCamera";

function Fallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-canvas">
      <div className="w-12 h-12 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Fallback />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-canvas">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ReplayCamera />
          <ReplayEnvironment />
          <ReplayBlocks />
        </Suspense>
      </Canvas>
    </div>
  );
}
