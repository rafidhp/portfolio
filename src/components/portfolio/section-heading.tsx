import { motion } from "framer-motion"

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
    </motion.div>
  )
}