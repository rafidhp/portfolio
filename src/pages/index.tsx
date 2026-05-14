import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Suspense, lazy } from "react";

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
      <main>
        <HeroSection />
      </main>
    </div>
  )
}