"use client";

import React from "react";
import { EngineTelemetry } from "./REEngineTypes";

interface REEngineSceneProps {
  telemetry: EngineTelemetry;
  isMobile?: boolean;
}

// Canvas removed — blocks were removed and the bare 3D floor was showing
// as an ugly dark grey area. Section UI is handled entirely by REEngineUI.
export function REEngineScene({ telemetry, isMobile = false }: REEngineSceneProps) {
  return null;
}
