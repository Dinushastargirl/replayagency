"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { REPLAY_ENGINE_STATES } from "@/data/replayStates";
import { EngineTelemetry } from "./REEngineTypes";

interface REEngineCameraProps {
  telemetry: EngineTelemetry;
  isMobile?: boolean;
}

export function REEngineCamera({ telemetry, isMobile = false }: REEngineCameraProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const lookAtRef = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    if (!cameraRef.current) return;

    const totalStates = REPLAY_ENGINE_STATES.length;
    const maxSegment = totalStates - 1;

    const scaledProgress = THREE.MathUtils.clamp(telemetry.progress * maxSegment, 0, maxSegment);
    const indexA = Math.floor(scaledProgress);
    const indexB = Math.min(indexA + 1, maxSegment);
    const alpha = scaledProgress - indexA;
    const easedAlpha = THREE.MathUtils.smoothstep(alpha, 0, 1);

    const stateA = REPLAY_ENGINE_STATES[indexA];
    const stateB = REPLAY_ENGINE_STATES[indexB];

    // Target positions
    let targetX = THREE.MathUtils.lerp(stateA.camera.position[0], stateB.camera.position[0], easedAlpha);
    let targetY = THREE.MathUtils.lerp(stateA.camera.position[1], stateB.camera.position[1], easedAlpha);
    let targetZ = THREE.MathUtils.lerp(stateA.camera.position[2], stateB.camera.position[2], easedAlpha);

    // Target lookAt coordinates
    const targetLookAtX = THREE.MathUtils.lerp(stateA.camera.lookAt[0], stateB.camera.lookAt[0], easedAlpha);
    const targetLookAtY = THREE.MathUtils.lerp(stateA.camera.lookAt[1], stateB.camera.lookAt[1], easedAlpha);
    const targetLookAtZ = THREE.MathUtils.lerp(stateA.camera.lookAt[2], stateB.camera.lookAt[2], easedAlpha);

    // On mobile, center framing and pull back slightly
    if (isMobile) {
      targetX = 0;
      targetY = -0.2;
      targetZ += 1.6;
    }

    // Smooth damping
    const speed = 6.0;
    cameraRef.current.position.x = THREE.MathUtils.damp(cameraRef.current.position.x, targetX, speed, delta);
    cameraRef.current.position.y = THREE.MathUtils.damp(cameraRef.current.position.y, targetY, speed, delta);
    cameraRef.current.position.z = THREE.MathUtils.damp(cameraRef.current.position.z, targetZ, speed, delta);

    lookAtRef.current.x = THREE.MathUtils.damp(lookAtRef.current.x, targetLookAtX, speed, delta);
    lookAtRef.current.y = THREE.MathUtils.damp(lookAtRef.current.y, targetLookAtY, speed, delta);
    lookAtRef.current.z = THREE.MathUtils.damp(lookAtRef.current.z, targetLookAtZ, speed, delta);

    cameraRef.current.lookAt(lookAtRef.current);
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[-1.1, 0.05, 5.0]}
      fov={40}
      near={0.1}
      far={100}
    />
  );
}
