import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./section-heading";
import { Card } from "@/components/ui/card";
import { achievements } from "@/data/portfolio";

export default function AchievementsSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "id";

  return (
    <section id="achievements" className="relative flex items-center justify-center py-24 px-4 md:px-12">
      <div className="container max-w-6xl">
        <SectionHeading
          eyebrow={t("achievements.eyebrow")}
          title={t("achievements.title")}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Card className="p-5 glass flex items-start gap-4 hover:shadow-elegant hover:-translate-y-1 transition-smooth h-full">
                <div className="w-11 h-11 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg leading-snug">
                    {lang === "id" ? a.titleId : a.titleEn}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {a.issuer} · {a.year}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}