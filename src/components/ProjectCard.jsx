import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { EASE } from "../motion/variants";
import { GithubIcon } from "./icons";

const visuals = [
  "from-lime/30 via-lime/5 to-transparent",
  "from-vio/40 via-vio/10 to-transparent",
  "from-azure/40 via-azure/10 to-transparent",
];

/**
 * Interactive project card: spring 3D tilt + shine sweep on desktop,
 * staggered tag entrance, hover overlay. Fully static on touch /
 * reduced-motion — links remain plain tappable anchors everywhere.
 */
export default function ProjectCard({ project, index }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [fine] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches
  );

  const tiltOn = fine && !reduce;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 20 });
  const sry = useSpring(ry, { stiffness: 220, damping: 20 });

  const onMove = (e) => {
    if (!tiltOn || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 9);
    rx.set(py * -9);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const initials = project.title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        tiltOn
          ? { rotateX: srx, rotateY: sry, transformPerspective: 900 }
          : undefined
      }
      whileHover={tiltOn ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: EASE }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-[border-color,box-shadow] duration-300 hover:border-lime/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] will-change-transform"
    >
      {/* Visual preview (generated — no broken images) */}
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${visuals[index % visuals.length]}`}>
        <div aria-hidden="true" className="bg-blueprint absolute inset-0 opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="font-display text-6xl font-bold tracking-tight text-cream/15 transition-all duration-500 group-hover:scale-110 group-hover:text-cream/25 md:text-7xl"
          >
            {initials}
          </span>
        </div>
        {/* Shine sweep on hover (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cream/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
        {/* Hover overlay reveal */}
        {(project.live || project.source) && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-ink/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-transform duration-300 group-hover:translate-y-0">
              {project.live ? "View Live" : "View Code"}
              <ArrowUpRight size={14} className="dart-diag" />
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-lime backdrop-blur">
          {project.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-cream transition-colors duration-200 group-hover:text-lime">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, ti) => (
            <motion.li
              key={tag}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ti * 0.05, ease: EASE }}
              className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-muted transition-colors duration-200 hover:border-lime/40 hover:text-cream"
            >
              {tag}
            </motion.li>
          ))}
        </ul>

        {(project.live || project.source) && (
          <div className="mt-5 flex flex-wrap gap-2.5 border-t border-line pt-5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(198,255,61,0.3)]"
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
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cream transition-colors duration-200 hover:border-cream/50"
              >
                <GithubIcon size={14} />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
