import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation();
  const scrollNext = () => {
    const el = document.getElementById("about");
    if (!el) return;
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-16 px-4 md:px-12"
    >
      <div className="container max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full glass text-xs md:text-sm font-medium tracking-wider uppercase text-muted-foreground mb-6"
        >
          ✦ {t("hero.greeting")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-5 leading-[1.05]"
        >
          <span className="gradient-text">{t("hero.name")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-xl text-foreground/80 font-medium mb-3"
        >
          {t("hero.role")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {t("hero.tagline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-18"
        >
          <Button
            size="lg"
            className="px-6 py-6 gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow md:hover:-translate-y-0.5 transition-all duration-300 border-0 group hover:cursor-pointer"
          >
            <a href="#projects" className="flex items-center justify-center text-base gap-1.5">
              {t("hero.viewProjects")} <ArrowRight className="h-5 w-5 shrink-0 transition-all duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 py-6 glass text-white hover:bg-primary/10 hover:border-primary hover:cursor-pointer md:hover:-translate-y-0.5 transition-all duration-300 transition-smooth"
          >
            <a href="#contact" className="flex justify-center items-center text-base gap-1.5">
              <Mail className="mr-1 h-5 w-5 shrink-0" /> {t("hero.contactMe")}
            </a>
          </Button>
        </motion.div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label={t("hero.scroll")}
          tabIndex={-1}
          className="flex float-soft absolute bottom-10 left-1/2 flex-col items-center gap-2 text-muted-foreground/80 hover:text-foreground hover:drop-shadow-[0_0_12px_hsl(var(--primary-glow)/0.55)] select-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:scale-100 active:bg-transparent bg-transparent border-0 p-2 [-webkit-tap-highlight-color:transparent] hover:cursor-pointer"
          style={{ transition: "color 0.2s ease" }}
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
            {t("hero.scroll")}
          </span>
          <span className="w-[1px] h-6 bg-gradient-to-b from-foreground/40 to-transparent" />
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}