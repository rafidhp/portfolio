import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card } from "@/components/ui/card";
import { Code2, Layers, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  const { t } = useTranslation();
  const groups = [
    { key: "languages", icon: Code2, items: skills.languages },
    { key: "frameworks", icon: Layers, items: skills.frameworks },
    { key: "tools", icon: Wrench, items: skills.tools },
  ] as const;

  return (
    <section id="skills" className="relative flex items-center justify-center py-24 px-4 md:px-12">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow={t("skills.eyebrow")} title={t("skills.title")} />
        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <Card className="p-6 h-full glass hover:shadow-elegant transition-smooth">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">{t(`skills.${group.key}`)}</h3>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="font-medium">{s.name}</span>
                          <span className="text-muted-foreground text-xs">{s.level}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full gradient-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}