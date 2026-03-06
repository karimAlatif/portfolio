import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects, type Project } from "@/data/projects";

/* ------------------------------------------------------------------ */
/*  Featured project card (large, first item)                          */
/* ------------------------------------------------------------------ */
const FeaturedCard = ({ project }: { project: Project }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group relative glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:glow-border md:col-span-2"
    >
      <div className="grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-64 md:h-[400px] overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />

          {/* Accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-px transition-all duration-700"
            style={{
              background: hovered
                ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                : "transparent",
            }}
          />

          {/* Video badge */}
          {project.linkType === "video" && (
            <div className="absolute top-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider uppercase">
                Video
              </span>
            </div>
          )}

          {/* Link type badge */}
          <div className="absolute bottom-4 right-4 glass rounded-full px-3 py-1.5">
            <span className="text-[10px] font-mono tracking-wider uppercase">
              {project.linkType === "live" ? "Live Demo" : "Video Demo"}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold px-3 py-1 rounded-full"
              style={{
                color: project.color,
                background: `${project.color}1a`,
              }}
            >
              Featured
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300">
            View Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 8H12M12 8L8 4M12 8L8 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Regular project card                                               */
/* ------------------------------------------------------------------ */
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      className="group relative glass rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:glow-border hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-52 md:h-60 overflow-hidden">
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
          style={{
            background: hovered
              ? `linear-gradient(90deg, transparent, ${project.color}, transparent)`
              : "transparent",
          }}
        />

        {/* Image count badge */}
        <div className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-[10px] font-mono">
            {project.galleryImages.length + 1}
          </span>
        </div>

        {/* Video badge */}
        {project.videos.length > 0 && (
          <div className="absolute top-3 left-3 glass rounded-full px-2.5 py-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider uppercase">
              Video
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded"
            style={{
              color: project.color,
              background: `${project.color}1a`,
            }}
          >
            {project.linkType === "live" ? "Live" : "Video"}
          </span>
          <motion.div
            animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="py-32 section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Each project is a journey from concept to polished product. Click
            any project to explore the full story, gallery, and video.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured */}
          {featured && <FeaturedCard key={featured.id} project={featured} />}

          {/* Rest */}
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Projects count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-xs font-mono text-muted-foreground mt-10"
        >
          {projects.length} projects
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;
