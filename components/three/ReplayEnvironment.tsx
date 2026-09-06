"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { ContactShadows } from "@react-three/drei";
import { useReplay } from "@/context/ReplayContext";

export function ReplayEnvironment() {
  const { isMobile } = useReplay();

  // Studio surface material for plinth & background floor
  const surfaceMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ECEAE2",
        roughness: 0.9,
        metalness: 0.05,
      }),
    []
  );

  return (
    <>
      {/* Warm Ambient Studio Light */}
      <ambientLight intensity={0.7} color="#F7F6F2" />

      {/* Main Architectural Key Light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.7}
        color="#FFFFFF"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0001}
      />

      {/* Soft Secondary Fill Light */}
      <directionalLight position={[-6, 3, -4]} intensity={0.45} color="#ECEAE2" />

      {/* Subtle Top Rim Light */}
      <directionalLight position={[0, 7, -5]} intensity={0.35} color="#F7F6F2" />

      {/* Architectural Plinth / Studio Pedestal under sculpture */}
      <group position={[0, -1.6, 0]}>
        <mesh position={[0, -0.15, 0]} receiveShadow material={surfaceMaterial}>
          <cylinderGeometry args={[2.5, 2.7, 0.3, 48]} />
        </mesh>
      </group>

      {/* Soft Contact Shadow beneath the sculpture and plinth */}
      <ContactShadows
        position={[0, -1.75, 0]}
        opacity={0.35}
        scale={12}
        blur={2.4}
        far={6}
        color="#1F2B1E"
      />

      {/* Infinite studio floor plane */}
      <mesh
        position={[0, -1.76, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        material={surfaceMaterial}
      >
        <planeGeometry args={[60, 60]} />
      </mesh>
    </>
  );
}
