import { useEffect, useState } from "react";

export const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

function resolveActiveSection(): SectionId {
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY <= 2) return sectionIds[0];

  if (scrollY + viewportHeight >= document.documentElement.scrollHeight - 3) {
    return sectionIds[sectionIds.length - 1];
  }

  const probeLine = viewportHeight * 0.45;
  let fallback: SectionId = sectionIds[0];
  let fallbackScore = -Infinity;

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;

    const rect = el.getBoundingClientRect();
    if (rect.top <= probeLine && rect.bottom > probeLine) return id;

    const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    if (visible <= 0) continue;

    const sectionHeight = Math.max(rect.height, 1);
    const center = rect.top + rect.height / 2;
    const score = (visible / Math.min(sectionHeight, viewportHeight)) * 1000 - Math.abs(center - probeLine);
    if (score > fallbackScore) {
      fallbackScore = score;
      fallback = id;
    }
  }

  return fallback;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    let frame = 0;
    let lastActive: SectionId | null = null;

    const update = () => {
      frame = 0;
      const next = resolveActiveSection();
      if (next !== lastActive) {
        lastActive = next;
        setActiveSection(next);
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    const timers = [window.setTimeout(schedule, 80), window.setTimeout(schedule, 300)];
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);

  return activeSection;
}