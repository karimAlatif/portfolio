import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

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

const HeroSection = () => {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <section className="relative">
      {/* ── Hero Viewport ── */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Floating grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-[200%] animate-grid-move"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
              Senior 3D Web Engineer
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
          >
            <span className="block">Karim</span>
            <span className="block gradient-text">Mohamed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Building interactive 3D experiences, configurators, and real-time
            simulations for web and immersive platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(var(--glow)/0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:border-primary/50 transition-all"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </div>

      {/* ── About ── */}
      <div id="about" className="py-24 md:py-32 section-padding" ref={aboutRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
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
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
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
                creative technology — building tools that are not only
                technically robust but visually compelling and intuitively
                interactive.
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
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
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
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
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
      </div>
    </section>
  );
};

export default HeroSection;
