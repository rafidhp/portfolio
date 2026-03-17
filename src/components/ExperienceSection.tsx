import { motion } from "framer-motion";

const experiences = [
  {
    role: "Lead Frontend Engineer",
    org: "Ocean Protocol Foundation",
    period: "2022 — Present",
    type: "Organization",
    details: [
      "Led a team of 6 engineers to deliver a decentralized data marketplace.",
      "Deployed 14 production features in 8 months.",
      "Reduced bundle size by 35% through code splitting and lazy loading.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "React Core Team",
    period: "2021 — 2022",
    type: "Volunteer",
    details: [
      "Contributed to React Server Components documentation.",
      "Reviewed 40+ pull requests and mentored new contributors.",
    ],
  },
  {
    role: "Technical Mentor",
    org: "Code for Change",
    period: "2020 — 2022",
    type: "Volunteer",
    details: [
      "Mentored 25+ students in web development fundamentals.",
      "Built internal tools that reduced onboarding time by 50%.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Maritime Tech Solutions",
    period: "2019 — 2022",
    type: "Organization",
    details: [
      "Architected microservices handling 10K requests/sec.",
      "Integrated real-time vessel tracking with AIS data feeds.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="relative px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Depth: 1000m — The Abyss</p>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground">
            Experience & Volunteering
          </h2>
        </motion.div>

        <div className="relative">
          {/* Anchor Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 anchor-line" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ type: "spring", duration: 0.8, bounce: 0.2, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
              >
                {/* Node on anchor line */}
                <div className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary/60 border-2 border-background" />

                <div className="glass-panel p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">{exp.role}</h3>
                      <p className="text-sm text-primary font-mono">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="tech-pill">{exp.type}</span>
                      <span className="text-xs text-muted-foreground font-mono tabular-nums">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {exp.details.map((d, j) => (
                      <li key={j} className="text-sm text-secondary-foreground font-mono leading-relaxed">
                        → {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
