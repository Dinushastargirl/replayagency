"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useReplay } from "@/context/ReplayContext";

export function ReplayCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { phase, isMobile, cursor, reducedMotion, timeElapsed } = useReplay();
  const { size } = useThree();

  useFrame((_, delta) => {
    if (!cameraRef.current) return;

    if (reducedMotion) {
      if (isMobile) {
        cameraRef.current.position.set(0, -0.4, 7.4);
      } else {
        cameraRef.current.position.set(-1.25, 0.1, 5.8);
      }
      cameraRef.current.lookAt(0, 0, 0);
      return;
    }

    // Determine target camera coordinates based on timeline phase
    // Preloader mode: [0, 0, 4.6]
    // Hero mode (pull back):
    // Desktop: [-1.25, 0.1, 5.8] (positions sculpture on right side of viewport)
    // Mobile: [0, -0.3, 7.2]
    
    let targetX = 0;
    let targetY = 0;
    let targetZ = 4.6;

    if (phase === "transitioning" || phase === "hero") {
      if (isMobile) {
        targetX = 0;
        targetY = -0.3;
        targetZ = 7.2;
      } else {
        // Offset camera to the left so the sculpture sits on the right half of the hero
        targetX = -1.25;
        targetY = 0.1;
        targetZ = 5.8;
      }
    }

    // Subtle pointer parallax during hero phase
    if (phase === "hero" && !isMobile) {
      targetX += cursor.x * 0.18;
      targetY += cursor.y * 0.12;
    }

    // Smooth cinematic damping
    const speed = phase === "transitioning" ? 2.5 : 4.0;
    cameraRef.current.position.x = THREE.MathUtils.damp(
      cameraRef.current.position.x,
      targetX,
      speed,
      delta
    );
    cameraRef.current.position.y = THREE.MathUtils.damp(
      cameraRef.current.position.y,
      targetY,
      speed,
      delta
    );
    cameraRef.current.position.z = THREE.MathUtils.damp(
      cameraRef.current.position.z,
      targetZ,
      speed,
      delta
    );

    cameraRef.current.lookAt(0, 0, 0);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 4.6]}
      fov={42}
      near={0.1}
      far={100}
    />
  );
}
