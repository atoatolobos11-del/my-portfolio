import { useState } from "react";
import { AnimatePresence, motion, useAnimation, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { navLinks, profile, socials } from "../data/portfolio";
import { EASE } from "../motion/variants";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const reduce = useReducedMotion();
  const controls = useAnimation();
  const [launching, setLaunching] = useState(false);

  // Rocket launch: button blasts upward with a light trail while the
  // page glides to the top, then drops back with a spring bounce.
  const handleTop = async () => {
    if (reduce || launching) {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      if (!reduce) setLaunching(false);
      return;
    }
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    await controls.start({
      y: -180,
      opacity: 0,
      scale: 1.3,
      transition: { duration: 0.45, ease: EASE },
    });
    controls.set({ y: 140, opacity: 0, scale: 0.7 });
    await controls.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 240, damping: 14 },
    });
    setLaunching(false);
  };

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
            <Magnetic strength={0.35}>
              <motion.button
                type="button"
                onClick={handleTop}
                disabled={launching}
                animate={controls}
                whileHover={reduce ? undefined : { scale: 1.12 }}
                whileTap={reduce ? undefined : { scale: 0.9 }}
                aria-label="Back to top"
                className="relative flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_28px_rgba(198,255,61,0.35)]"
              >
                {/* Pulsing launch rings */}
                <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-lime/40" />
                <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-lime/25" style={{ animationDelay: "0.5s" }} />
                <ArrowUp size={18} className="arrow-bob relative" />
                {/* Light trail during launch */}
                <AnimatePresence>
                  {launching && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ opacity: 0.9, scaleY: 0.2 }}
                      animate={{ opacity: 0, scaleY: 1.6, y: 30 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="absolute left-1/2 top-full ml-[-3px] h-16 w-1.5 origin-top rounded-full bg-gradient-to-b from-lime to-transparent"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            </Magnetic>
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
