import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "AquaFlow",
    description: "Real-time maritime logistics dashboard for fleet management.",
    problem: "High latency in real-time data visualization for maritime logistics, causing delayed decision-making.",
    solution: "Implemented a WebSocket-based streaming architecture with WebAssembly parsers, reducing latency by 60%.",
    tech: ["React", "Rust", "WebAssembly", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "DeepSync",
    description: "Distributed file synchronization engine for remote teams.",
    problem: "Existing sync tools failed under poor network conditions common in maritime environments.",
    solution: "Built a CRDT-based sync engine with conflict resolution, achieving 99.9% data consistency.",
    tech: ["Node.js", "TypeScript", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "TidalAPI",
    description: "Open-source API gateway with rate limiting and analytics.",
    problem: "No lightweight, self-hosted API gateway existed with built-in analytics for small teams.",
    solution: "Created a Go-based gateway with sub-millisecond routing and a real-time analytics dashboard.",
    tech: ["Go", "React", "ClickHouse", "Kubernetes"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
};

const ProjectShowcase = () => {
  return (
    <section className="relative px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Depth: 200m — Twilight Zone</p>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground">
            Project Showcase
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.2, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-panel-hover p-8"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <header className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 relative">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-secondary-foreground mt-1">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 relative">
                <div>
                  <p className="section-label mb-2">Problem</p>
                  <p className="text-sm text-secondary-foreground font-mono leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="section-label mb-2">Solution</p>
                  <p className="text-sm text-secondary-foreground font-mono leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="inline-flex items-center gap-2 text-sm text-primary font-mono hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="inline-flex items-center gap-2 text-sm text-accent font-mono hover:text-foreground transition-colors"
                >
                  Live Demo
                  <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
