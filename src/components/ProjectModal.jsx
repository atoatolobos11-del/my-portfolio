import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { EASE } from "../motion/variants";
import { GithubIcon } from "./icons";

const visuals = [
  "from-lime/30 via-lime/5 to-transparent",
  "from-vio/40 via-vio/10 to-transparent",
  "from-azure/40 via-azure/10 to-transparent",
];

/**
 * Case-study dialog. Shows only confirmed data: title, description,
 * tags, links, plus optional `role` / `highlights` when the data file
 * provides them. Escape / backdrop click closes; focus moves to the
 * close button on open and body scroll locks while open.
 */
export default function ProjectModal({ project, index, onClose }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const open = Boolean(project);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const initials = project
    ? project.title
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-ink/80 p-4 backdrop-blur-sm sm:items-center"
          aria-hidden={!open || undefined}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(e) => e.stopPropagation()}
            initial={reduce ? false : { opacity: 0, y: 56, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-panel"
          >
            <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${visuals[(index ?? 0) % visuals.length]} sm:h-56`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} — live site preview`}
                  loading="lazy"
                  width={1000}
                  height={625}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <>
                  <div aria-hidden="true" className="bg-blueprint absolute inset-0 opacity-70" />
                  <span aria-hidden="true" className="font-display text-7xl font-bold tracking-tight text-cream/20 sm:text-8xl">
                    {initials}
                  </span>
                </>
              )}
              <span className="absolute left-5 top-5 rounded-full border border-line bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                {project.categoryLabel}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-ink/80 text-cream transition-colors hover:border-lime/60 hover:text-lime"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 id="project-modal-title" className="font-display text-2xl font-bold text-cream sm:text-3xl">
                {project.title}
              </h3>
              {project.role && (
                <p className="mt-1 text-sm font-semibold text-vio">{project.role}</p>
              )}
              <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

              {project.highlights?.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-cream">
                    Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                        <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h4 className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-cream">
                Built with
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-muted">
                    {tag}
                  </li>
                ))}
              </ul>

              {(project.live || project.source) && (
                <div className="mt-7 flex flex-wrap gap-2.5 border-t border-line pt-6">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-shadow hover:shadow-[0_8px_24px_rgba(198,255,61,0.3)]"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream/50"
                    >
                      <GithubIcon size={14} />
                      Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
