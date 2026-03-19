"use client";

import React, { useEffect, useMemo, useRef } from "react";
import "./MagicBentoCard.css";

export type MagicBentoCardProps = {
  children: React.ReactNode;
  className?: string;
  glowColorRgb?: string; // "r, g, b"
  glowRadiusPx?: number;
  enableStars?: boolean;
  starCount?: number;
  disableAnimations?: boolean;
};

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export default function MagicBentoCard({
  children,
  className = "",
  glowColorRgb = "0, 153, 175",
  glowRadiusPx = 240,
  enableStars = false,
  starCount = 12,
  disableAnimations = false,
}: MagicBentoCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const particlesInitializedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const styleVars = useMemo(
    () =>
      ({
        ["--mb-glow-rgb" as any]: glowColorRgb,
        ["--mb-glow-radius" as any]: `${glowRadiusPx}px`,
      }) as React.CSSProperties,
    [glowColorRgb, glowRadiusPx]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (disableAnimations || reducedMotion) {
      el.style.setProperty("--glow-intensity", "0");
      return;
    }

    const onMouseEnter = () => {
      el.style.setProperty("--glow-intensity", "1");
      if (enableStars && !particlesInitializedRef.current) {
        particlesInitializedRef.current = true;

        const rect = el.getBoundingClientRect();
        const count = Math.max(0, Math.floor(starCount));
        for (let i = 0; i < count; i++) {
          const p = document.createElement("div");
          p.className = "mb-particle";
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const pdx = (Math.random() - 0.5) * 60;
          const pdy = (Math.random() - 0.5) * 60;
          const duration = 2 + Math.random() * 2;
          const delay = Math.random() * 1.5;
          p.style.left = `${x}%`;
          p.style.top = `${y}%`;
          p.style.setProperty("--mb-pdx", `${pdx.toFixed(2)}px`);
          p.style.setProperty("--mb-pdy", `${pdy.toFixed(2)}px`);
          p.style.animationDuration = `${duration.toFixed(2)}s`;
          p.style.animationDelay = `${delay.toFixed(2)}s`;
          // Ensure it's positioned inside the card.
          p.setAttribute("aria-hidden", "true");
          el.appendChild(p);
        }
      }
    };

    const onMouseLeave = () => {
      el.style.setProperty("--glow-intensity", "0");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = window.requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const intensity = 0.85 * clamp01((1 - Math.abs(x - 0.5) * 1.2) * (1 - Math.abs(y - 0.5) * 1.2));
        el.style.setProperty("--glow-intensity", `${intensity.toFixed(3)}`);
        el.style.setProperty("--glow-x", `${(x * 100).toFixed(2)}%`);
        el.style.setProperty("--glow-y", `${(y * 100).toFixed(2)}%`);
      });
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousemove", onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [disableAnimations, enableStars, starCount]);

  return (
    <div ref={ref} className={`magic-bento-card ${className}`.trim()} style={styleVars}>
      {children}
    </div>
  );
}

