"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const motion = {
  durationMs: 720,
  distance: 24,
  staggerMs: 90,
} as const;

type AnimatedContentProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  scale?: boolean;
  as?: "div" | "section" | "article" | "aside";
};

export function AnimatedContent({
  children,
  className = "",
  delay = 0,
  distance = motion.distance,
  scale = false,
  as = "div",
}: AnimatedContentProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current as HTMLDivElement | null;
    if (!target) return;
    const node = target;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.02 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const Component = as;
  const style = {
    "--motion-delay": `${delay}ms`,
    "--motion-distance": `${distance}px`,
  } as CSSProperties;

  return (
    <Component
      ref={ref as never}
      style={style}
      className={`motion-content ${scale ? "motion-content-scale" : ""} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}

type SplitTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
};

export function SplitText({ text, className = "", as = "h1" }: SplitTextProps) {
  const Component = as;
  const words = text.split(" ");
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref as never}
      className={`split-text ${isVisible ? "is-visible" : ""} ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="split-word"
          style={{ "--word-delay": `${120 + index * 70}ms` } as CSSProperties}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </Component>
  );
}

export function Magnet({
  children,
  strength = 4,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const node = target;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canHover.matches || reducedMotion.matches) return;

    function handleMove(event: MouseEvent) {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    function handleLeave() {
      node.style.transform = "translate3d(0, 0, 0)";
    }

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="magnet-shell">
      {children}
    </div>
  );
}

export function GlareHover({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`glare-hover ${className}`}>{children}</div>;
}

export function ScrollRevealText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <AnimatedContent
      as="div"
      distance={18}
      className={`scroll-reveal-text ${className}`}
    >
      {children}
    </AnimatedContent>
  );
}

export { motion };
