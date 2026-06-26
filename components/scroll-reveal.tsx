"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("motion-ready");

    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      },
    );

    document.querySelectorAll<HTMLElement>(".reveal-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
