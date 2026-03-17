import CertificationsSection from "@/components/CertificationsSection";
import DepthGauge from "@/components/DepthGauge";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ui/ProjectShowcase";

export default function Index() {
    return (
        <div className="relative min-h-screen bg-background">
            <DepthGauge />
            <HeroSection />
            <ProjectShowcase />
            <ExperienceSection />
            <CertificationsSection />
            <footer className="px-6 py-16 text-center">
                <p className="text-xs text-muted-foreground font-mono">
                    © 2026 John Doe — Built from the deep.
                </p>
            </footer>
        </div>
    )
}