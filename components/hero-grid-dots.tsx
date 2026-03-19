"use client";

import { useMemo } from "react";

const GRID_SIZE = 48;
const FIXED_SEED = 1337;

function createSeededRng(seed: number) {
  // Simple LCG for deterministic "random" across SSR and client.
  // This avoids hydration mismatches caused by Math.random().
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

type Dot = {
  id: number;
  x: number;
  y: number;
  direction: "h" | "v";
  delay: number;
  duration: number;
};

function useGridDots(count: number): Dot[] {
  return useMemo(() => {
    const dots: Dot[] = [];
    const cols = 28;
    const rows = 20;
    const rand = createSeededRng(FIXED_SEED + count);
    let id = 0;
    for (let i = 0; i < count; i++) {
      const col = Math.floor(rand() * cols);
      const row = Math.floor(rand() * rows);
      dots.push({
        id: id++,
        x: col * GRID_SIZE,
        y: row * GRID_SIZE,
        direction: rand() > 0.5 ? "h" : "v",
        delay: rand() * 4,
        duration: 1.2 + rand() * 1.2,
      });
    }
    return dots;
  }, [count]);
}

export function HeroGridDots() {
  const dots = useGridDots(24);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute size-1.5"
          style={{
            left: dot.x,
            top: dot.y,
            transform: "translate(-50%, -50%)",
            animation: `hero-grid-dot-${dot.direction} ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
            backgroundColor: "rgba(0, 153, 175, 0.3)",
            boxShadow:
              "0 0 2px rgba(0, 153, 175, 0.3), 0 0 6px rgba(0, 153, 175, 0.3), 0 0 14px rgba(0, 153, 175, 0.25)",
          }}
        />
      ))}
    </div>
  );
}
