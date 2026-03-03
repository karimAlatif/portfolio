import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "Performance-First",
    description: "Every frame counts. Architectures optimized for 60fps rendering and minimal resource consumption.",
  },
  {
    title: "Real-Time Precision",
    description: "Building systems that respond instantly — from live sensor data to interactive 3D manipulation.",
  },
  {
    title: "Scalable Systems",
    description: "Modular, maintainable architectures that grow from prototype to production without rewrites.",
  },
  {
    title: "Visual Storytelling",
    description: "Engineering meets artistry. Technical depth delivered through intuitive, beautiful interfaces.",
  },
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Engineering <span className="gradient-text">approach</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-8 border-l border-border hover:border-primary/50 transition-colors duration-500"
            >
              <div className="absolute left-[-4.5px] top-1 w-2 h-2 rounded-full bg-primary/40" />
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
