import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-4 md:inset-x-auto md:inset-y-8 md:max-w-4xl md:mx-auto z-50 glass-strong rounded-2xl overflow-y-auto"
          >
            {/* Hero image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={project.galleryImages[activeImage] || project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface-glass))] via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-10">
              {/* Gallery thumbnails */}
              <div className="flex gap-2 mb-8 -mt-14 relative z-10">
                {project.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i
                        ? "border-primary glow-border"
                        : "border-border/50 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Accent line */}
              <div
                className="w-16 h-1 rounded-full mb-6"
                style={{ background: `hsl(${project.accentColor})` }}
              />

              <div className="flex items-center gap-4 mb-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {project.title}
              </h2>
              <p
                className="text-lg font-medium mb-6"
                style={{ color: `hsl(${project.accentColor})` }}
              >
                {project.subtitle}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Video */}
              {project.videoUrl && (
                <div className="mb-8">
                  <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                    Video Preview
                  </p>
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-secondary">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} video`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono tracking-wider px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live link button */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-[0_0_30px_hsl(var(--glow)/0.4)]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  View Live Project
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
