import { useState } from "react";
import { projectFilters, projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [filter, setFilter] = useState("all");
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i * 0.06, 0.3)} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
