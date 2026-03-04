import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Email",
    href: "mailto:karim_abdel-latif@outlook.com",
    display: "karim_abdel-latif@outlook.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karim-a-latif-b56142172/",
    display: "linkedin.com/in/karim-a-latif",
  },
  {
    label: "GitHub",
    href: "https://github.com/karimAlatif",
    display: "github.com/karimAlatif",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's build something{" "}
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Available for freelance projects, collaborations, and full-time
            opportunities in 3D web development and interactive experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 glass rounded-lg px-5 py-3 hover:glow-border transition-all duration-500"
            >
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
                {link.label}
              </span>
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                →
              </span>
            </a>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          href="/projects/Karim_AbdelLatif_Resume.pdf"
          className="inline-block font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors border-b border-border hover:border-primary/50 pb-1"
        >
          Download CV ↓
        </motion.a>
      </div>

      {/* Footer */}
      <div className="mt-32 text-center">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          © 2024 Karim Mohamed — Crafted with precision
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
