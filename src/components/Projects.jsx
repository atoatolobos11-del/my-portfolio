import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projectFilters, projects } from "../data/portfolio";
import { EASE } from "../motion/variants";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-label="Featured projects" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title={
            <>
              Selected <span className="text-lime">work.</span>
            </>
          }
          description="Real projects I have built. Links appear only when a live demo or repository actually exists."
        />

        <Reveal className="mb-8 flex flex-wrap gap-2.5" delay={0.05}>
          {projectFilters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                filter === id
                  ? "bg-lime text-ink"
                  : "border border-line bg-panel text-muted hover:border-lime/40 hover:text-cream"
              }`}
            >
              {label}
            </button>
          ))}
        </Reveal>

        {reduce ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onDetails={() => setSelected({ project, index: i })} />
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 24 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="h-full"
                >
                  <ProjectCard project={project} index={i} onDetails={() => setSelected({ project, index: i })} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
      <ProjectModal
        project={selected?.project ?? null}
        index={selected?.index ?? 0}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
