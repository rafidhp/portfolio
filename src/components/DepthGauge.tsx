import { motion, useScroll, useTransform } from "framer-motion";

const DepthGauge = () => {
  const { scrollYProgress } = useScroll();
  const depth = useTransform(scrollYProgress, [0, 1], [0, 4000]);
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="depth-gauge hidden lg:flex">
      <div className="relative w-px h-40 bg-muted rounded-full overflow-hidden">
        <motion.div
          style={{ height: barHeight }}
          className="absolute bottom-0 w-full bg-primary rounded-full"
        />
      </div>
      <motion.p className="text-[10px] text-muted-foreground font-mono tabular-nums mt-2 writing-vertical">
        <motion.span>{depth}</motion.span>m
      </motion.p>
    </div>
  );
};

export default DepthGauge;
