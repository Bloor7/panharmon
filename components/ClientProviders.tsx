"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ClientProviders() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();

  // Stars canvas + custom cursor — persistent, runs once on mount
  useEffect(() => {
    // ── Stars canvas ──────────────────────────────────────────────
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Star {
      x: number;
      y: number;
      r: number;
      phase: number;
      speed: number;
    }

    const stars: Star[] = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.007 + 0.003,
    }));

    let starsAnimId: number;
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        star.phase += star.speed;
        const opacity = ((Math.sin(star.phase) + 1) / 2) * 0.45 + 0.08;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 228, 255, ${opacity})`;
        ctx.fill();
      }
      starsAnimId = requestAnimationFrame(drawStars);
    };
    drawStars();

    // ── Custom cursor ─────────────────────────────────────────────
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let cursorAnimId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ring) {
        ring.style.left = ringX + "px";
        ring.style.top = ringY + "px";
      }
      cursorAnimId = requestAnimationFrame(animateRing);
    };
    animateRing();

    return () => {
      cancelAnimationFrame(starsAnimId);
      cancelAnimationFrame(cursorAnimId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // ── Scroll reveal — re-runs on every route change ────────────────
  // IntersectionObserver must re-observe fresh DOM elements after each navigation.
  // ClientProviders lives in layout and does NOT remount between routes,
  // so without [pathname] dependency the observer would never see new page elements.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.08 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  // ── Cursor hover effect — re-attaches to new interactive elements ─
  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const onMouseEnter = () => {
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "rgba(212, 168, 83, 0.7)";
    };
    const onMouseLeave = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(212, 168, 83, 0.45)";
    };

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [pathname]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0"
      />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
