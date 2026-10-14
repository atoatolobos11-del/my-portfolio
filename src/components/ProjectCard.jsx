import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const visuals = [
  "from-lime/30 via-lime/5 to-transparent",
  "from-vio/40 via-vio/10 to-transparent",
  "from-azure/40 via-azure/10 to-transparent",
];

export default function ProjectCard({ project, index }) {
  const initials = project.title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1.5 hover:border-lime/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Visual preview (generated — no broken images) */}
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${visuals[index % visuals.length]}`}>
        <div aria-hidden="true" className="bg-blueprint absolute inset-0 opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="font-display text-6xl font-bold tracking-tight text-cream/15 transition-all duration-300 group-hover:scale-110 group-hover:text-cream/25 md:text-7xl"
          >
            {initials}
          </span>
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-lime backdrop-blur">
          {project.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-cream transition-colors group-hover:text-lime">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(project.live || project.source) && (
          <div className="mt-5 flex flex-wrap gap-2.5 border-t border-line pt-5">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,255,61,0.3)]"
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
    </article>
  );
}
