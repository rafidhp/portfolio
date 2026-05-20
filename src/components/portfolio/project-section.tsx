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
    <section id="projects" className="relative flex items-center justify-center py-24 px-4 md:px-12">
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
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {lang === "id" ? p.descriptionId : p.descriptionEn}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="font-semibold text-foreground">{t("projects.role")}:</span>{" "}
                    {lang === "id" ? p.roleId : p.roleEn}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-[11px] font-medium">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {p.github && (
                      <Button variant="outline" size="sm" className="flex-1 hover:cursor-pointer">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-1 justify-center items-center"
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
                        size="sm"
                        className="flex-1 gradient-primary text-primary-foreground border-0 hover:cursor-pointer"
                      >
                        <a 
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex gap-1 justify-center items-center"
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
    </section>
  )
}