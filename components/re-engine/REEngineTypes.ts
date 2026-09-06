export interface BlockTransform {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
}

export interface CameraTransform {
  position: [number, number, number];
  lookAt: [number, number, number];
  fov?: number;
}

export interface ReplayEngineState {
  id: string;
  number: string;
  label: string;
  category: string;
  description: string;
  meaning: string;
  camera: CameraTransform;
  // Transforms for 6 blocks: 0: R, 1: E, 2: P, 3: L, 4: A, 5: Y
  blocks: [
    BlockTransform,
    BlockTransform,
    BlockTransform,
    BlockTransform,
    BlockTransform,
    BlockTransform
  ];
}

export interface EngineTelemetry {
  progress: number; // 0.0 to 1.0
  activeStateIndex: number; // 0 to 7
  velocity: number; // scroll velocity (pixels/ms or delta)
  isScrolling: boolean;
}
