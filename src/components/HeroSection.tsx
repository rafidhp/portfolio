import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const skills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "GraphQL", "Rust", "Tailwind CSS"
];

const transition = { type: "spring" as const, duration: 0.8, bounce: 0.2 };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="section-label mb-6"
        >
          Current Depth: 0m — Sunlight Zone
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-foreground font-bold tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          John Doe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          className="text-xl text-secondary-foreground max-w-2xl mx-auto mb-12 font-light"
        >
          Full-stack engineer building resilient systems for the open web.
          Navigating the depths of distributed systems & modern interfaces.
        </motion.p>

        {/* Skill Sonar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.6 }}
          className="glass-panel p-8 inline-block"
        >
          <p className="section-label mb-4">Skill Sonar</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...transition, delay: 0.7 + i * 0.05 }}
                className="tech-pill"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground mx-auto animate-bounce" />
          <p className="text-xs text-muted-foreground mt-2 font-mono">Scroll to descend</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
