"use client";

import { useEffect, useRef } from "react";

interface SnowOverlayProps {
  density?: number; // number of flakes
  speed?: number; // base speed multiplier
  enabled?: boolean;
}

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  driftX: number;
}

export function SnowOverlay({ density = 120, speed = 1, enabled = true }: SnowOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const flakesRef = useRef<Snowflake[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mqReduced.matches || !enabled) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let width = (canvas.width = window.innerWidth * window.devicePixelRatio);
    let height = (canvas.height = window.innerHeight * window.devicePixelRatio);

    const initFlakes = () => {
      flakesRef.current = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1 + Math.random() * 2,
        speedY: (0.3 + Math.random() * 0.7) * speed,
        driftX: (Math.random() - 0.5) * 0.4,
      }));
    };

    initFlakes();

    const handleResize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      initFlakes();
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255,255,255,0.9)";

      for (const flake of flakesRef.current) {
        flake.y += flake.speedY;
        flake.x += flake.driftX;

        if (flake.y > height) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }
        if (flake.x < 0) flake.x = width;
        if (flake.x > width) flake.x = 0;

        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current != null) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed, enabled]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 opacity-80 mix-blend-screen"
    />
  );
}
