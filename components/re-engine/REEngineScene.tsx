"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { REEngineCamera } from "./REEngineCamera";
import { ReplayEnvironment } from "@/components/three/ReplayEnvironment";
import { EngineTelemetry } from "./REEngineTypes";

interface REEngineSceneProps {
  telemetry: EngineTelemetry;
  isMobile?: boolean;
}

export function REEngineScene({ telemetry, isMobile = false }: REEngineSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-canvas">
        <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none overflow-hidden bg-canvas">
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
          <REEngineCamera telemetry={telemetry} isMobile={isMobile} />
          <ReplayEnvironment />
        </Suspense>
      </Canvas>
    </div>
  );
}
