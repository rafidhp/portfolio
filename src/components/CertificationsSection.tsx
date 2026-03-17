import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "Certification",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Le Wagon",
    date: "2023",
    type: "Bootcamp",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023",
    type: "Certification",
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2022",
    type: "Bootcamp",
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2022",
    type: "Certification",
  },
];

const CertificationsSection = () => {
  return (
    <section className="relative px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Depth: 4000m — Black Box Data</p>
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-foreground">
            Certifications & Bootcamps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)", scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.2, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-panel-hover p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground tracking-tight">{cert.title}</h3>
                <p className="text-sm text-primary font-mono mt-0.5">{cert.issuer}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="tech-pill">{cert.type}</span>
                  <span className="text-xs text-muted-foreground font-mono tabular-nums">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
