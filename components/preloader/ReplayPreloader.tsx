"use client";

import React, { useState, useEffect } from "react";
import { useReplay } from "@/context/ReplayContext";

const RE_WORDS = [
  { prefix: "RE", suffix: "THINK" },
  { prefix: "RE", suffix: "FRAME" },
  { prefix: "RE", suffix: "CREATE" },
  { prefix: "RE", suffix: "BUILD" },
  { prefix: "RE", suffix: "ACH" },
  { prefix: "RE", suffix: "ACT" },
  { prefix: "RE", suffix: "PEAT" },
  { prefix: "RE", suffix: "PLAY" },
];

export function ReplayPreloader() {
  const { reducedMotion } = useReplay();
  const [wordIndex, setWordIndex] = useState(0);
  const [stage, setStage] = useState<"wave" | "cycling" | "done">("wave");
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setIsDismissed(true);
      return;
    }

    // Stage 1: Wave eating animation (0ms to 2400ms)
    const t1 = setTimeout(() => {
      setStage("cycling");
    }, 2400);

    // Stage 2: Cycling words (2400ms to 4600ms)
    let cycleInterval: NodeJS.Timeout;
    const tCycleStart = setTimeout(() => {
      let idx = 0;
      cycleInterval = setInterval(() => {
        idx++;
        if (idx < RE_WORDS.length) {
          setWordIndex(idx);
        } else {
          clearInterval(cycleInterval);
          // When REPLAY is reached, hold briefly then curtain reveal
          setTimeout(() => {
            setStage("done");
          }, 600);
        }
      }, 240);
    }, 2400);

    // Complete removal from DOM after transition
    const tDismiss = setTimeout(() => {
      setIsDismissed(true);
    }, 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(tCycleStart);
      clearTimeout(tDismiss);
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, [reducedMotion]);

  if (isDismissed) return null;

  const currentWord = RE_WORDS[wordIndex] || RE_WORDS[RE_WORDS.length - 1];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#23331F] text-[#D7D9CE] transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] select-none ${
        stage === "done" ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Center Dynamic Stage */}
      <div className="w-full max-w-2xl px-6 flex flex-col items-center justify-center relative min-h-[200px]">
        
        {/* Stage 1: Wave / Eating Line Animation (Line disappears as it gets eaten) */}
        {stage === "wave" && (
          <div className="w-full flex items-center justify-center py-8">
            <svg
              viewBox="0 0 700 80"
              className="w-full max-w-xl overflow-hidden"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Mask that clips the wavy line so only the uneaten portion in front of the mouth is visible */}
                <mask id="eatenLineMask">
                  <rect x="0" y="0" width="700" height="80" fill="black" />
                  <rect
                    x="0"
                    y="0"
                    width="700"
                    height="80"
                    fill="white"
                    className="animate-revealUneatenLine"
                  />
                </mask>
              </defs>

              {/* The Wavy Line being eaten */}
              <path
                d="M 0 40 Q 25 15, 50 40 T 100 40 T 150 40 T 200 40 T 250 40 T 300 40 T 350 40 T 400 40 T 450 40 T 500 40 T 550 40 T 600 40 T 650 40 T 700 40"
                stroke="#D7D9CE"
                strokeWidth="2.5"
                strokeLinecap="round"
                mask="url(#eatenLineMask)"
              />

              {/* The Chomp / Eating Character Head traversing all the way to the end */}
              <g className="animate-chompTraverse">
                {/* Outer Head */}
                <circle cx="0" cy="40" r="15" fill="#D7D9CE" />
                {/* Chomping Mouth Cutout */}
                <path
                  d="M 0 40 L 16 28 A 15 15 0 0 1 16 52 Z"
                  fill="#23331F"
                  className="animate-chompingMouth origin-[0px_40px]"
                />
              </g>
            </svg>
          </div>
        )}

        {/* Stage 2: Rhythmic RE— Word Cycling (Clean typography only) */}
        {stage === "cycling" && (
          <div className="flex items-baseline font-display font-bold tracking-tight text-5xl sm:text-7xl md:text-8xl text-[#D7D9CE]">
            <span className="text-[#D7D9CE] tracking-normal mr-2 font-black">
              {currentWord.prefix}
            </span>
            <span className="text-[#D7D9CE]/90 tracking-tight transition-all duration-150">
              {currentWord.suffix}
            </span>
          </div>
        )}

      </div>

      {/* Custom Keyframe Animations */}
      <style jsx>{`
        /* Chomper travels from left edge (-20px) all the way past right edge (730px) over 2.3s */
        .animate-chompTraverse {
          animation: chompTraverse 2.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes chompTraverse {
          0% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(730px);
          }
        }

        /* Mask slides so that line behind the chomper is hidden (eaten) */
        .animate-revealUneatenLine {
          animation: revealUneatenLine 2.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes revealUneatenLine {
          0% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(730px);
          }
        }

        /* Rhythmic chomping mouth open and close */
        .animate-chompingMouth {
          animation: chompingMouth 0.22s ease-in-out infinite alternate;
        }
        @keyframes chompingMouth {
          0% {
            transform: scaleY(0.2);
          }
          100% {
            transform: scaleY(1.15);
          }
        }
      `}</style>
    </div>
  );
}
