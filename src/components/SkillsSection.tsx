import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "WebGL", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "3D & Rendering",
    skills: ["Babylon.js", "Three.js", "Unity", "WebGPU", "GLTF/glTF"],
  },
  {
    title: "Systems & Backend",
    skills: ["REST API", "WebSockets", "IoT Platforms", "Firebase", "Node.js"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Figma", "Blender", "VS Code", "Docker"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Technologies & <span className="gradient-text">tools</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all duration-500"
            >
              <h3 className="font-mono text-xs tracking-widest uppercase text-primary mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: ci * 0.15 + si * 0.05 + 0.3 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary group-hover:glow-dot transition-all" />
                    <span className="text-sm text-secondary-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
