import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  getProjectById,
  getAdjacentProjects,
  type Project,
} from "@/data/projects";
import {
  isVimeoUrl,
  getVimeoEmbedUrl,
  isGoogleDriveUrl,
  getGoogleDriveEmbedUrl,
} from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Image Lightbox                                                     */
/* ------------------------------------------------------------------ */
const Lightbox = ({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 4L16 16M16 4L4 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
          aria-label="Previous image"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12 4L6 10L12 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Image */}
      <motion.img
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        src={images[activeIndex]}
        alt=""
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
          aria-label="Next image"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M8 4L14 10L8 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Project Page                                                       */
/* ------------------------------------------------------------------ */
const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const { prev, next } = getAdjacentProjects(id || "");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll to top on project change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveGalleryIndex(0);
  }, [id]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const videoSectionRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = useCallback(() => {
    videoSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const nextImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((prev) => (prev + 1) % project.galleryImages.length);
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex(
      (prev) =>
        (prev - 1 + project.galleryImages.length) %
        project.galleryImages.length,
    );
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [project.mainImage, ...project.galleryImages];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => navigate("/#projects")}
        className="fixed top-6 left-6 z-50 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 hover:glow-border group"
        aria-label="Go back"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          className="transition-transform group-hover:-translate-x-0.5"
        >
          <path
            d="M12 4L6 10L12 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

        {/* Accent glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
        />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 section-padding pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span
                className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold px-3 py-1 rounded-full"
                style={{
                  color: project.color,
                  background: `${project.color}1a`,
                }}
              >
                {project.linkType === "live" ? "Live Demo" : "Video Demo"}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-secondary/60 text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 max-w-4xl leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Two column: Description + Technologies */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 mb-16 md:mb-24">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="w-16 h-1 rounded-full mb-8"
                style={{ background: project.color }}
              />
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                About this project
              </h2>
              {project.longDescription.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              {/* Technologies */}
              <div className="glass rounded-xl p-6">
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono tracking-wider px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground transition-colors hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="flex flex-col gap-3">
                {project.linkType === "video" && project.videos.length > 0 ? (
                  <button
                    onClick={scrollToVideo}
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-[0_0_30px_hsl(var(--glow)/0.4)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Watch Video
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all hover:shadow-[0_0_30px_hsl(var(--glow)/0.4)] hover:scale-[1.02] active:scale-[0.98]"
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
                    View Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-24"
          >
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Gallery
            </p>

            {/* Main gallery image */}
            <div
              className="relative rounded-2xl overflow-hidden mb-4 cursor-pointer group"
              onClick={() => openLightbox(activeGalleryIndex)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeGalleryIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={allImages[activeGalleryIndex]}
                  alt={`${project.title} gallery`}
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-16 h-16 rounded-full glass-strong flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGalleryIndex(i)}
                  className={`relative shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeGalleryIndex === i
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          {project.videos.length > 0 && (
            <motion.div
              ref={videoSectionRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="mb-16 md:mb-24"
            >
              <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground mb-6">
                Video Preview
              </p>
              <div className="space-y-6">
                {project.videos.map((videoSrc, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden glass"
                  >
                    <div className="aspect-video">
                      {isVimeoUrl(videoSrc) ? (
                        <iframe
                          src={getVimeoEmbedUrl(videoSrc)}
                          className="w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={`${project.title} video ${i + 1}`}
                        />
                      ) : isGoogleDriveUrl(videoSrc) ? (
                        <iframe
                          src={getGoogleDriveEmbedUrl(videoSrc)}
                          className="w-full h-full"
                          allow="autoplay"
                          allowFullScreen
                          title={`${project.title} video ${i + 1}`}
                        />
                      ) : (
                        <video
                          src={videoSrc}
                          controls
                          className="w-full h-full object-fill"
                          preload="metadata"
                          playsInline
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Divider */}
          <div className="relative mb-16 md:mb-24">
            <div className="h-px bg-border" />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
              }}
            />
          </div>

          {/* Navigation to other projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-muted-foreground mb-8 text-center">
              More Projects
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {prev && (
                <Link
                  to={`/project/${prev.id}`}
                  className="group glass rounded-xl p-6 flex items-center gap-5 transition-all duration-500 hover:glow-border"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  >
                    <path
                      d="M12 4L6 10L12 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1">
                      Previous
                    </p>
                    <p className="font-semibold truncate group-hover:text-primary transition-colors">
                      {prev.title}
                    </p>
                  </div>
                  <div className="w-14 h-10 rounded-lg overflow-hidden shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    <img
                      src={prev.mainImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  to={`/project/${next.id}`}
                  className={`group glass rounded-xl p-6 flex items-center gap-5 transition-all duration-500 hover:glow-border ${
                    !prev ? "md:col-start-2" : ""
                  }`}
                >
                  <div className="w-14 h-10 rounded-lg overflow-hidden shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    <img
                      src={next.mainImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-right">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mb-1">
                      Next
                    </p>
                    <p className="font-semibold truncate group-hover:text-primary transition-colors">
                      {next.title}
                    </p>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  >
                    <path
                      d="M8 4L14 10L8 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </div>

            {/* Back to all */}
            <div className="text-center mt-10">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12 4L6 10L12 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={allImages}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectPage;
