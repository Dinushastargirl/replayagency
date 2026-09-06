import { ReplayEngineState } from "@/components/re-engine/REEngineTypes";

export const REPLAY_ENGINE_STATES: ReplayEngineState[] = [
  // 01 — RETHINK (STRATEGY)
  // Meaning: Question the existing structure.
  // 3D: R & E anchored; dynamic blocks (P, L, A, Y) separate & loosen; camera closer.
  {
    id: "rethink",
    number: "01",
    label: "RETHINK",
    category: "STRATEGY",
    description: "Question the assumptions before changing the execution.",
    meaning: "Question the existing structure.",
    camera: {
      position: [-1.1, 0.05, 5.0],
      lookAt: [0.0, 0.0, 0.0],
      fov: 40,
    },
    blocks: [
      // 0: R (Anchored)
      { position: [-1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 1: E (Anchored)
      { position: [0.0, 0.625, 0], rotation: [0, 0, 0] },
      // 2: P (Separating away)
      { position: [1.65, 0.95, -0.4], rotation: [0.12, -0.28, 0.1] },
      // 3: L (Loosened)
      { position: [-1.45, -0.95, 0.35], rotation: [-0.14, 0.22, -0.08] },
      // 4: A (Moving down/back)
      { position: [0.25, -1.15, -0.5], rotation: [0.18, -0.15, 0.12] },
      // 5: Y (Separating outward)
      { position: [1.75, -0.85, 0.45], rotation: [-0.12, 0.26, -0.14] },
    ],
  },

  // 02 — REFRAME (BRAND)
  // Meaning: Change the perspective.
  // 3D: Blocks rotate around vertical Y-axes; camera changes angle slightly.
  {
    id: "reframe",
    number: "02",
    label: "REFRAME",
    category: "BRAND",
    description: "Change how the business is understood, remembered and valued.",
    meaning: "Change the perspective.",
    camera: {
      position: [-0.9, 0.5, 5.2],
      lookAt: [0.1, 0.0, 0.0],
      fov: 40,
    },
    blocks: [
      // 0: R (Anchored with slight facet turn)
      { position: [-1.1, 0.625, 0], rotation: [0, -0.22, 0] },
      // 1: E (Anchored with slight facet turn)
      { position: [0.0, 0.625, 0], rotation: [0, -0.22, 0] },
      // 2: P (Rotated vertical facet)
      { position: [1.25, 0.625, 0.25], rotation: [0, 0.95, 0] },
      // 3: L (Rotated vertical facet)
      { position: [-1.15, -0.625, -0.25], rotation: [0, -0.85, 0] },
      // 4: A (Rotated vertical facet)
      { position: [0.05, -0.625, 0.15], rotation: [0, 0.75, 0] },
      // 5: Y (Rotated vertical facet)
      { position: [1.18, -0.625, -0.35], rotation: [0, -1.05, 0] },
    ],
  },

  // 03 — RECREATE (CREATIVE)
  // Meaning: Create a new expression.
  // 3D: Blocks separate into expressive composition; Z-depth displacement.
  {
    id: "recreate",
    number: "03",
    label: "RECREATE",
    category: "CREATIVE",
    description: "Turn the strategy into work people actually notice.",
    meaning: "Create a new expression.",
    camera: {
      position: [-0.95, -0.25, 5.4],
      lookAt: [0.1, 0.15, 0.0],
      fov: 42,
    },
    blocks: [
      // 0: R (Anchored)
      { position: [-1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 1: E (Subtle Z-offset)
      { position: [-0.05, 0.72, -0.25], rotation: [0.06, 0.12, 0] },
      // 2: P (Elevated forward)
      { position: [1.45, 1.25, 0.95], rotation: [-0.28, 0.38, 0.22] },
      // 3: L (Lower forward)
      { position: [-1.65, -0.85, 0.85], rotation: [0.32, -0.32, -0.16] },
      // 4: A (Pushed forward prominent)
      { position: [0.35, -0.35, 1.35], rotation: [-0.12, 0.22, 0.12] },
      // 5: Y (Receded deep back)
      { position: [1.55, -1.25, -0.95], rotation: [0.22, -0.48, 0.16] },
    ],
  },

  // 04 — REBUILD (DIGITAL)
  // Meaning: Build something stronger.
  // 3D: Blocks move into stronger architectural structure; clean stack & light catch.
  {
    id: "rebuild",
    number: "04",
    label: "REBUILD",
    category: "DIGITAL",
    description: "Create digital experiences designed around the action that matters.",
    meaning: "Build something stronger.",
    camera: {
      position: [-1.1, 0.7, 5.9],
      lookAt: [0.1, 0.6, 0.0],
      fov: 42,
    },
    blocks: [
      // 0: R (Foundation Base Left)
      { position: [-1.0, 0.0, 0], rotation: [0, 0, 0] },
      // 1: E (Foundation Base Mid)
      { position: [0.1, 0.0, 0], rotation: [0, 0, 0] },
      // 2: P (Foundation Base Right)
      { position: [1.2, 0.0, 0], rotation: [0, 0, 0] },
      // 3: L (Pillar Tier 2 Left)
      { position: [-0.45, 1.25, 0], rotation: [0, 0, 0] },
      // 4: A (Pillar Tier 2 Right)
      { position: [0.65, 1.25, 0], rotation: [0, 0, 0] },
      // 5: Y (Monolith Capstone)
      { position: [0.1, 2.5, 0], rotation: [0, 0, 0] },
    ],
  },

  // 05 — REACH (DISTRIBUTION)
  // Meaning: Move outward.
  // 3D: Controlled radial expansion outward.
  {
    id: "reach",
    number: "05",
    label: "REACH",
    category: "DISTRIBUTION",
    description: "Put the right message in front of the right audience.",
    meaning: "Move outward.",
    camera: {
      position: [-1.2, 0.0, 6.7],
      lookAt: [0.0, 0.0, 0.0],
      fov: 43,
    },
    blocks: [
      // 0: R (Anchored)
      { position: [-1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 1: E (Anchored)
      { position: [0.0, 0.625, 0], rotation: [0, 0, 0] },
      // 2: P (Spread Top-Right)
      { position: [2.5, 1.45, 0.45], rotation: [0.12, 0.28, 0.18] },
      // 3: L (Spread Bottom-Left)
      { position: [-2.45, -1.55, 0.35], rotation: [-0.18, -0.22, -0.12] },
      // 4: A (Spread Bottom-Center)
      { position: [0.25, -2.35, 0.55], rotation: [0.28, 0.12, -0.18] },
      // 5: Y (Spread Bottom-Right)
      { position: [2.65, -1.65, -0.45], rotation: [-0.12, -0.28, 0.18] },
    ],
  },

  // 06 — REACT (SIGNALS)
  // Meaning: The system responds to information.
  // 3D: Reactive dynamic state responsive to scroll telemetry & velocity.
  {
    id: "react",
    number: "06",
    label: "REACT",
    category: "SIGNALS",
    description: "Use behaviour and results to decide what happens next.",
    meaning: "The system responds to information.",
    camera: {
      position: [-1.1, 0.1, 5.5],
      lookAt: [0.0, 0.0, 0.0],
      fov: 41,
    },
    blocks: [
      // 0: R (Anchored)
      { position: [-1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 1: E (Anchored)
      { position: [0.0, 0.625, 0], rotation: [0, 0, 0] },
      // 2: P (Reactive oscillation stance)
      { position: [1.35, 0.82, -0.22], rotation: [0.22, 0.42, 0] },
      // 3: L (Reactive oscillation stance)
      { position: [-1.25, -0.82, 0.22], rotation: [-0.12, -0.32, 0] },
      // 4: A (Reactive oscillation stance)
      { position: [0.12, -0.72, -0.12], rotation: [0.28, 0.12, 0] },
      // 5: Y (Reactive oscillation stance)
      { position: [1.32, -0.72, 0.28], rotation: [-0.22, 0.22, 0] },
    ],
  },

  // 07 — REPEAT (ITERATION)
  // Meaning: Return with knowledge.
  // 3D: Modules return toward original structural relationships; camera calms.
  {
    id: "repeat",
    number: "07",
    label: "REPEAT",
    category: "ITERATION",
    description: "Take what works, remove what doesn't and run the system again.",
    meaning: "Return with knowledge.",
    camera: {
      position: [-1.18, 0.1, 5.7],
      lookAt: [0.0, 0.0, 0.0],
      fov: 41,
    },
    blocks: [
      // 0: R (Anchored)
      { position: [-1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 1: E (Anchored)
      { position: [0.0, 0.625, 0], rotation: [0, 0, 0] },
      // 2: P (Approaching grid)
      { position: [1.18, 0.68, 0.08], rotation: [0.04, 0.08, 0] },
      // 3: L (Approaching grid)
      { position: [-1.15, -0.68, -0.08], rotation: [-0.04, -0.06, 0] },
      // 4: A (Approaching grid)
      { position: [0.04, -0.65, 0.04], rotation: [0.03, 0.04, 0] },
      // 5: Y (Approaching grid)
      { position: [1.14, -0.66, -0.04], rotation: [-0.04, 0.06, 0] },
    ],
  },

  // 08 — REPLAY (THE SYSTEM)
  // Meaning: Complete locked physical sculpture.
  // 3D: Six modules return to [R][E][P] / [L][A][Y]; sculpture locks in place.
  {
    id: "replay",
    number: "08",
    label: "REPLAY",
    category: "THE SYSTEM",
    description: "Every version teaches us how to build the next one better.",
    meaning: "The system completes and compounds.",
    camera: {
      position: [-1.25, 0.1, 5.8],
      lookAt: [0.0, 0.0, 0.0],
      fov: 42,
    },
    blocks: [
      // 0: R
      { position: [-1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 1: E
      { position: [0.0, 0.625, 0], rotation: [0, 0, 0] },
      // 2: P
      { position: [1.1, 0.625, 0], rotation: [0, 0, 0] },
      // 3: L
      { position: [-1.1, -0.625, 0], rotation: [0, 0, 0] },
      // 4: A
      { position: [0.0, -0.625, 0], rotation: [0, 0, 0] },
      // 5: Y
      { position: [1.1, -0.625, 0], rotation: [0, 0, 0] },
    ],
  },
];
