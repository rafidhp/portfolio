import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation();
  const scrollNext = () => {
    const el = document.getElementById("about");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16"
    >
      <div className="container max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase text-muted-foreground mb-6"
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
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth border-0"
          >
            <a href="#projects">
              {t("hero.viewProjects")} <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass hover:bg-primary/10 hover:border-primary transition-smooth"
          >
            <a href="#contact">
              <Mail className="mr-1 h-4 w-4" /> {t("hero.contactMe")}
            </a>
          </Button>
        </motion.div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label={t("hero.scroll")}
          tabIndex={-1}
          className="hidden md:flex float-soft absolute bottom-10 left-1/2 flex-col items-center gap-2 text-muted-foreground/80 hover:text-foreground hover:drop-shadow-[0_0_12px_hsl(var(--primary-glow)/0.55)] select-none outline-none focus:outline-none focus-visible:outline-none focus:ring-0 active:scale-100 active:bg-transparent bg-transparent border-0 p-2 [-webkit-tap-highlight-color:transparent]"
          style={{ transition: "color 0.2s ease" }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">
            {t("hero.scroll")}
          </span>
          <span className="w-[1px] h-6 bg-gradient-to-b from-foreground/40 to-transparent" />
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}