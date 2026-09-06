"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useReplay } from "@/context/ReplayContext";

interface BlockProps {
  letter: "R" | "E" | "P" | "L" | "A" | "Y";
  index: number;
  targetPos: [number, number, number];
  startOffset: [number, number, number];
  startRotation: [number, number, number];
}

// Custom letter relief geometry component
function LetterRelief({ letter }: { letter: string }) {
  // Inset geometric relief shapes in deep matte tone to simulate carved architectural letters
  const reliefMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#162015",
        roughness: 0.85,
        metalness: 0.05,
      }),
    []
  );

  const zPos = 0.18; // slightly protruding / embossed on front face

  switch (letter) {
    case "R":
      return (
        <group position={[0, 0, zPos]}>
          {/* Vertical spine */}
          <mesh position={[-0.26, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          {/* Top curve bar */}
          <mesh position={[0.02, 0.26, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.44, 0.12, 0.04]} />
          </mesh>
          {/* Mid crossbar */}
          <mesh position={[-0.02, 0.02, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.36, 0.1, 0.04]} />
          </mesh>
          {/* Right loop edge */}
          <mesh position={[0.2, 0.14, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.24, 0.04]} />
          </mesh>
          {/* Diagonal leg */}
          <mesh position={[0.12, -0.22, 0]} rotation={[0, 0, -0.6]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.42, 0.04]} />
          </mesh>
        </group>
      );
    case "E":
      return (
        <group position={[0, 0, zPos]}>
          {/* Vertical spine */}
          <mesh position={[-0.26, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          {/* Top bar */}
          <mesh position={[0.04, 0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.48, 0.12, 0.04]} />
          </mesh>
          {/* Middle bar */}
          <mesh position={[-0.02, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.36, 0.1, 0.04]} />
          </mesh>
          {/* Bottom bar */}
          <mesh position={[0.04, -0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.48, 0.12, 0.04]} />
          </mesh>
        </group>
      );
    case "P":
      return (
        <group position={[0, 0, zPos]}>
          {/* Vertical spine */}
          <mesh position={[-0.26, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          {/* Top bar */}
          <mesh position={[0.02, 0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.44, 0.12, 0.04]} />
          </mesh>
          {/* Middle bar */}
          <mesh position={[0.02, 0.04, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.44, 0.1, 0.04]} />
          </mesh>
          {/* Loop right */}
          <mesh position={[0.2, 0.17, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.26, 0.04]} />
          </mesh>
        </group>
      );
    case "L":
      return (
        <group position={[0, 0, zPos]}>
          {/* Vertical spine */}
          <mesh position={[-0.24, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          {/* Bottom shelf */}
          <mesh position={[0.04, -0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.48, 0.12, 0.04]} />
          </mesh>
        </group>
      );
    case "A":
      return (
        <group position={[0, 0, zPos]}>
          {/* Left slant leg */}
          <mesh position={[-0.14, 0, 0]} rotation={[0, 0, 0.24]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.74, 0.04]} />
          </mesh>
          {/* Right slant leg */}
          <mesh position={[0.14, 0, 0]} rotation={[0, 0, -0.24]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.74, 0.04]} />
          </mesh>
          {/* Crossbar */}
          <mesh position={[0, -0.06, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.3, 0.09, 0.04]} />
          </mesh>
        </group>
      );
    case "Y":
      return (
        <group position={[0, 0, zPos]}>
          {/* Left branch */}
          <mesh position={[-0.15, 0.18, 0]} rotation={[0, 0, 0.52]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.44, 0.04]} />
          </mesh>
          {/* Right branch */}
          <mesh position={[0.15, 0.18, 0]} rotation={[0, 0, -0.52]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.44, 0.04]} />
          </mesh>
          {/* Stem */}
          <mesh position={[0, -0.18, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.38, 0.04]} />
          </mesh>
        </group>
      );
    default:
      return null;
  }
}

export function ReplayBlock({
  letter,
  index,
  targetPos,
  startOffset,
  startRotation,
}: BlockProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { phase, reducedMotion, cursor, timeElapsed } = useReplay();

  // Primary ceramic / architectural matte olive material
  const blockMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1F2B1E",
        roughness: 0.64,
        metalness: 0.14,
        flatShading: false,
      }),
    []
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      // Settle instantly at target
      groupRef.current.position.set(targetPos[0], targetPos[1], targetPos[2]);
      groupRef.current.rotation.set(0, 0, 0);
      return;
    }

    // Animation progress calculation with staggered start per block
    const delay = index * 0.15;
    const progress = THREE.MathUtils.clamp((timeElapsed - delay) / 1.8, 0, 1);
    
    // Smooth custom cubic ease out
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);

    // Current positions interpolated
    const currentX = THREE.MathUtils.lerp(
      targetPos[0] + startOffset[0],
      targetPos[0],
      easeOutCubic
    );
    const currentY = THREE.MathUtils.lerp(
      targetPos[1] + startOffset[1],
      targetPos[1],
      easeOutCubic
    );
    const currentZ = THREE.MathUtils.lerp(
      targetPos[2] + startOffset[2],
      targetPos[2],
      easeOutCubic
    );

    // Current rotations interpolated
    const currentRotX = THREE.MathUtils.lerp(
      startRotation[0],
      0,
      easeOutCubic
    );
    const currentRotY = THREE.MathUtils.lerp(
      startRotation[1],
      0,
      easeOutCubic
    );
    const currentRotZ = THREE.MathUtils.lerp(
      startRotation[2],
      0,
      easeOutCubic
    );

    // Hero phase micro-interaction: very subtle responsive tilt based on pointer
    let microParallaxX = 0;
    let microParallaxY = 0;
    if (phase === "hero") {
      microParallaxX = -cursor.y * 0.04;
      microParallaxY = cursor.x * 0.04;
    }

    // Apply with gentle damping
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      currentX,
      10,
      delta
    );
    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      currentY,
      10,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      currentZ,
      10,
      delta
    );

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      currentRotX + microParallaxX,
      8,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      currentRotY + microParallaxY,
      8,
      delta
    );
    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      currentRotZ,
      8,
      delta
    );
  });

  return (
    <group ref={groupRef} castShadow receiveShadow>
      {/* Main beveled architectural block: 1.0w x 1.15h x 0.35d */}
      <RoundedBox
        args={[1.0, 1.15, 0.35]}
        radius={0.06}
        smoothness={4}
        castShadow
        receiveShadow
        material={blockMaterial}
      />
      {/* Sculpted Letterform Relief */}
      <LetterRelief letter={letter} />
    </group>
  );
}
