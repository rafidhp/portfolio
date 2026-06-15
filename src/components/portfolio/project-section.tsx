import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";
import GithubDark from "@/assets/github-dark.png";
import GithubWhite from "@/assets/github-white.png";

export default function ProjectSection() {
  const { t, i18n } = useTranslation();
  const { resolvedTheme } = useTheme();
  const lang = i18n.language as "en" | "id";

  return (
    <section id="projects" className="relative flex flex-col items-center justify-center py-24 px-4 md:px-12">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow={t("projects.eyebrow")} title={t("projects.title")} />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <Card className="overflow-hidden glass h-full flex flex-col group hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 flex-1">
                    {lang === "id" ? p.descriptionId : p.descriptionEn}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="font-semibold text-foreground">{t("projects.role")}:</span>{" "}
                    {lang === "id" ? p.roleId : p.roleEn}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs md:text-sm font-medium">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {p.github && (
                      <Button variant="outline" size="lg" className="flex-1 hover:cursor-pointer">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-1 justify-center items-center w-full"
                        >
                          <img
                            src={resolvedTheme === "dark" ? GithubWhite : GithubDark}
                            alt="github"
                            className="mr-1.5 h-5 w-5"
                          />
                          {t("projects.code")}
                        </a>
                      </Button>
                    )}
                    {p.demo && (
                      <Button
                        size="lg"
                        className="flex-1 gradient-primary text-primary-foreground border-0 hover:cursor-pointer"
                      >
                        <a 
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-1 justify-center items-center w-full"
                        >
                          <ExternalLink className="mr-1.5 h-5 w-5" />
                          {t("projects.live")}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center justify-center mt-12 text-center"
      >
        <p className="text-muted-foreground mb-4 max-w-lg">
          {lang === "id"
            ? "Masih banyak proyek, eksperimen, dan kontribusi lainnya yang saya kerjakan. Jelajahi GitHub saya untuk melihat lebih banyak hasil karya dan perjalanan pengembangan saya."
            : "There are many more projects, experiments, and contributions beyond those showcased here. Explore my GitHub to see more of my work and development journey."}
        </p>

        <motion.a
          href="https://github.com/rafidhp"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-3 px-6 py-3 rounded-full border bg-background hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          <img
            src={resolvedTheme === "dark" ? GithubWhite : GithubDark}
            alt="github"
            className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300"
          />

          <span className="font-medium">
            {lang === "id"
              ? "Lihat Lebih Banyak Proyek di GitHub"
              : "View More Projects on GitHub"}
          </span>

          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
      </motion.div>
    </section>
  )
}