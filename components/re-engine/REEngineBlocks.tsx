"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { REPLAY_ENGINE_STATES } from "@/data/replayStates";
import { EngineTelemetry } from "./REEngineTypes";

interface REEngineBlocksProps {
  telemetry: EngineTelemetry;
  isMobile?: boolean;
}

// Custom letter relief geometry component matching established brand aesthetics
function LetterRelief({ letter }: { letter: string }) {
  const reliefMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#141E13",
        roughness: 0.85,
        metalness: 0.05,
      }),
    []
  );

  const zPos = 0.18;

  switch (letter) {
    case "R":
      return (
        <group position={[0, 0, zPos]}>
          <mesh position={[-0.26, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          <mesh position={[0.02, 0.26, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.44, 0.12, 0.04]} />
          </mesh>
          <mesh position={[-0.02, 0.02, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.36, 0.1, 0.04]} />
          </mesh>
          <mesh position={[0.2, 0.14, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.24, 0.04]} />
          </mesh>
          <mesh position={[0.12, -0.22, 0]} rotation={[0, 0, -0.6]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.42, 0.04]} />
          </mesh>
        </group>
      );
    case "E":
      return (
        <group position={[0, 0, zPos]}>
          <mesh position={[-0.26, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          <mesh position={[0.04, 0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.48, 0.12, 0.04]} />
          </mesh>
          <mesh position={[-0.02, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.36, 0.1, 0.04]} />
          </mesh>
          <mesh position={[0.04, -0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.48, 0.12, 0.04]} />
          </mesh>
        </group>
      );
    case "P":
      return (
        <group position={[0, 0, zPos]}>
          <mesh position={[-0.26, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          <mesh position={[0.02, 0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.44, 0.12, 0.04]} />
          </mesh>
          <mesh position={[0.02, 0.04, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.44, 0.1, 0.04]} />
          </mesh>
          <mesh position={[0.2, 0.17, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.26, 0.04]} />
          </mesh>
        </group>
      );
    case "L":
      return (
        <group position={[0, 0, zPos]}>
          <mesh position={[-0.24, 0, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.72, 0.04]} />
          </mesh>
          <mesh position={[0.04, -0.3, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.48, 0.12, 0.04]} />
          </mesh>
        </group>
      );
    case "A":
      return (
        <group position={[0, 0, zPos]}>
          <mesh position={[-0.14, 0, 0]} rotation={[0, 0, 0.24]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.74, 0.04]} />
          </mesh>
          <mesh position={[0.14, 0, 0]} rotation={[0, 0, -0.24]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.74, 0.04]} />
          </mesh>
          <mesh position={[0, -0.06, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.3, 0.09, 0.04]} />
          </mesh>
        </group>
      );
    case "Y":
      return (
        <group position={[0, 0, zPos]}>
          <mesh position={[-0.15, 0.18, 0]} rotation={[0, 0, 0.52]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.44, 0.04]} />
          </mesh>
          <mesh position={[0.15, 0.18, 0]} rotation={[0, 0, -0.52]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.44, 0.04]} />
          </mesh>
          <mesh position={[0, -0.18, 0]} material={reliefMaterial}>
            <boxGeometry args={[0.12, 0.38, 0.04]} />
          </mesh>
        </group>
      );
    default:
      return null;
  }
}

const LETTERS = ["R", "E", "P", "L", "A", "Y"] as const;

export function REEngineBlocks({ telemetry, isMobile = false }: REEngineBlocksProps) {
  const groupRef = useRef<THREE.Group>(null);
  const blockRefs = useRef<(THREE.Group | null)[]>([]);

  // Architectural matte olive material
  const blockMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1F2B1E",
        roughness: 0.64,
        metalness: 0.14,
      }),
    []
  );

  useFrame((state, delta) => {
    const totalStates = REPLAY_ENGINE_STATES.length; // 8
    const maxSegment = totalStates - 1; // 7

    // Convert normalized progress 0..1 to segment index & blend fraction
    const scaledProgress = THREE.MathUtils.clamp(telemetry.progress * maxSegment, 0, maxSegment);
    const indexA = Math.floor(scaledProgress);
    const indexB = Math.min(indexA + 1, maxSegment);
    const alpha = scaledProgress - indexA;

    // Smooth smoothstep easing for physical transitions
    const easedAlpha = THREE.MathUtils.smoothstep(alpha, 0, 1);

    const stateA = REPLAY_ENGINE_STATES[indexA];
    const stateB = REPLAY_ENGINE_STATES[indexB];

    // Scroll velocity modifier (clamped)
    const velocityFactor = THREE.MathUtils.clamp(telemetry.velocity * 0.003, -0.15, 0.15);
    const isReactState = indexA === 5 || indexB === 5; // State 06: REACT

    // Animate each of the 6 blocks
    for (let i = 0; i < 6; i++) {
      const blockMesh = blockRefs.current[i];
      if (!blockMesh) continue;

      const transformA = stateA.blocks[i];
      const transformB = stateB.blocks[i];

      // Interpolate target positions
      let targetX = THREE.MathUtils.lerp(transformA.position[0], transformB.position[0], easedAlpha);
      let targetY = THREE.MathUtils.lerp(transformA.position[1], transformB.position[1], easedAlpha);
      let targetZ = THREE.MathUtils.lerp(transformA.position[2], transformB.position[2], easedAlpha);

      // Interpolate target rotations
      let targetRotX = THREE.MathUtils.lerp(transformA.rotation[0], transformB.rotation[0], easedAlpha);
      let targetRotY = THREE.MathUtils.lerp(transformA.rotation[1], transformB.rotation[1], easedAlpha);
      let targetRotZ = THREE.MathUtils.lerp(transformA.rotation[2], transformB.rotation[2], easedAlpha);

      // In REACT state (06), dynamically add velocity response
      if (isReactState && i >= 2) {
        targetY += velocityFactor * (i % 2 === 0 ? 0.8 : -0.8);
        targetRotX += velocityFactor * 0.5;
        targetRotY += velocityFactor * 0.4;
      }

      // Smooth spring damping for realistic mass and inertia
      const dampingSpeed = 7.5;
      blockMesh.position.x = THREE.MathUtils.damp(blockMesh.position.x, targetX, dampingSpeed, delta);
      blockMesh.position.y = THREE.MathUtils.damp(blockMesh.position.y, targetY, dampingSpeed, delta);
      blockMesh.position.z = THREE.MathUtils.damp(blockMesh.position.z, targetZ, dampingSpeed, delta);

      blockMesh.rotation.x = THREE.MathUtils.damp(blockMesh.rotation.x, targetRotX, dampingSpeed, delta);
      blockMesh.rotation.y = THREE.MathUtils.damp(blockMesh.rotation.y, targetRotY, dampingSpeed, delta);
      blockMesh.rotation.z = THREE.MathUtils.damp(blockMesh.rotation.z, targetRotZ, dampingSpeed, delta);
    }
  });

  const scale = isMobile ? 0.72 : 1.0;

  return (
    <group ref={groupRef} scale={scale} position={[0, 0, 0]}>
      {LETTERS.map((letter, idx) => (
        <group
          key={letter + idx}
          ref={(el) => {
            blockRefs.current[idx] = el;
          }}
          castShadow
          receiveShadow
        >
          <RoundedBox
            args={[1.0, 1.15, 0.35]}
            radius={0.06}
            smoothness={4}
            castShadow
            receiveShadow
            material={blockMaterial}
          />
          <LetterRelief letter={letter} />
        </group>
      ))}
    </group>
  );
}
