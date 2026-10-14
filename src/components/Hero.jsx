import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import profileImage from "../assets/profile.jpg";
import { profile } from "../data/portfolio";

const ease = [0.21, 0.47, 0.32, 0.98];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
      {/* Ambient color — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-vio/25 blur-[140px]" />
        <div className="animate-drift-b absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-lime/15 blur-[120px]" />
        <div className="animate-drift-a absolute left-[-10rem] top-72 h-80 w-80 rounded-full bg-azure/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <motion.p
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-lime"
          >
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {profile.seeking}
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-cream sm:text-6xl md:text-7xl xl:text-8xl"
          >
            Hi, I&rsquo;m
            <br />
            <span className="text-lime">{profile.name}.</span>
            <br />
            <span className="text-outline">Developer</span>
            <span aria-hidden="true" className="text-vio">.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.25)} className="mt-5 font-display text-lg font-medium text-cream md:text-xl">
            {profile.title}
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(198,255,61,0.35)]"
            >
              View My Projects
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumePdfPath}
              download={profile.resumeFileName}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/60 hover:text-lime"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-lime" />
              {profile.location}
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-line sm:block" />
            <span>Code · Design · Problem-solving</span>
          </motion.div>
        </div>

        {/* Visual composition */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-lime/25 via-vio/25 to-azure/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel">
            <img
              src={profileImage}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover"
              style={{ objectPosition: "center 20%" }}
              loading="eager"
              width={640}
              height={800}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
              <div>
                <p className="font-display text-lg font-bold text-cream">{profile.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-lime">Developer & Designer</p>
              </div>
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-lime font-display text-sm font-bold text-ink">
                {profile.initials}
              </span>
            </div>
          </div>

          <div className="animate-float-y absolute -left-3 top-8 rounded-xl border border-line bg-ink/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream shadow-xl backdrop-blur sm:-left-8">
            <span className="text-lime">◈</span> React
          </div>
          <div className="animate-float-y absolute -right-3 top-1/3 rounded-xl border border-line bg-ink/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream shadow-xl backdrop-blur sm:-right-6" style={{ animationDelay: "-1.6s" }}>
            <span className="text-vio">◈</span> UI/UX
          </div>
          <div className="animate-float-y absolute -left-3 bottom-16 rounded-xl border border-line bg-ink/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream shadow-xl backdrop-blur sm:-left-6" style={{ animationDelay: "-3.2s" }}>
            <span className="text-azure">◈</span> JavaScript
          </div>
        </motion.div>
      </div>
    </section>
  );
}
