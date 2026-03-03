import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const identities = [
  { label: "Engineer", icon: "⚙️" },
  { label: "Creative Technologist", icon: "🎨" },
  { label: "3D Problem Solver", icon: "🧊" },
];

const expertise = [
  "Web-based 3D Engines",
  "Babylon.js / Three.js",
  "Unity & VR Development",
  "IoT & Real-time Systems",
  "Interactive Configurators",
  "GIS & Cesium Integration",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight max-w-3xl">
            Engineering immersive digital{" "}
            <span className="gradient-text">experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building complex, real-time 3D web applications
              that push the boundaries of what's possible in the browser. From
              product configurators to digital twins, I engineer systems that
              blend performance with visual excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work sits at the intersection of software engineering and
              creative technology — building tools that are not only technically
              robust but visually compelling and intuitively interactive.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {identities.map((id) => (
                <div
                  key={id.label}
                  className="glass glow-border rounded-lg px-4 py-2.5 text-sm font-medium flex items-center gap-2"
                >
                  <span>{id.icon}</span>
                  <span>{id.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-6">
              Core Expertise
            </p>
            <div className="space-y-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary glow-dot shrink-0" />
                  <span className="text-secondary-foreground group-hover:text-primary transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
