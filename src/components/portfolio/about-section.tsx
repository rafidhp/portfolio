import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionHeading from "@/components/portfolio/section-heading";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const { t } = useTranslation();
  const stats = [
    { value: "5+", label: t("about.stats.years") },
    { value: "20+", label: t("about.stats.projects") },
    { value: "35+", label: t("about.stats.stack") },
  ];
  
  return (
    <section id="about" className="relative flex items-center justify-center pt-64 pb-24 px-4 md:px-12">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-24 items-start"
        >
          <div className="md:col-span-3 space-y-4 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 md:grid-cols-1 gap-3">
            {stats.map((s) => (
              <Card
                key={s.label}
                className="p-5 glass hover:shadow-elegant transition-smooth hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {s.label}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}