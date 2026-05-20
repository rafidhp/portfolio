import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Briefcase, CircleSmall } from "lucide-react";
import SectionHeading from "@/components/portfolio/section-heading";
import { Card } from "@/components/ui/card";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "id";

  return (
    <section id="experience" className="relative flex items-center justify-center py-24 px-4 md:px-12">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow={t("experience.eyebrow")} title={t("experience.title")} />
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-6">
            {experiences.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 top-2 w-9 h-9 md:w-12 md:h-12 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant">
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <Card className="p-6 glass hover:shadow-elegant transition-smooth">
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-lg">
                      {lang === "id" ? e.roleId : e.roleEn}
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium">{e.period}</span>
                  </div>
                  <p className="text-sm text-primary mb-4">{e.org}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {(lang === "id" ? e.bulletsId : e.bulletsEn).map((b, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="text-primary mt-1.5 shrink-0">
                          <CircleSmall className="h-5 w-5 pb-1.5" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}