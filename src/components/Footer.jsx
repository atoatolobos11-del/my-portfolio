import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "../data/portfolio";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

const YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="relative z-10 border-t border-line bg-panel/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Reveal variant="fade">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label={`${profile.name} — back to top`}>
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime font-display text-sm font-bold text-ink">
              {profile.initials}
            </span>
            <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-cream">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-muted transition-colors hover:text-lime"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-lime/50 hover:text-lime"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-lime/50 hover:text-lime"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-lime/50 hover:text-lime"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
        </Reveal>

        <div className="mt-10 border-t border-line pt-6 text-center md:text-left">
          <p className="text-sm text-muted">
            © {YEAR} {profile.name}. Built with React, Vite & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
