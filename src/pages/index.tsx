import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import ScrollNav from "@/components/scroll-nav";
import { Suspense, lazy } from "react";
import Reveal from "@/components/reveal";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ProjectSection from "@/components/portfolio/project-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import AchievementsSection from "@/components/portfolio/achievements-section";
import ContactSection from "@/components/portfolio/contact-section";

const SceneBackground = lazy(() =>
  import("@/components/three/scene-background").then((m) => ({
    default: m.SceneBackground,
  }))
);

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <Suspense fallback={null}>
        <SceneBackground />
      </Suspense>
      <Navbar />
      <ScrollNav />
      <main>
        <HeroSection />
        <Reveal><AboutSection /></Reveal>
        <Reveal><SkillsSection /></Reveal>
        <Reveal><ProjectSection /></Reveal>
        <Reveal><ExperienceSection /></Reveal>
        <Reveal><AchievementsSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
      </main>
    </div>
  )
}