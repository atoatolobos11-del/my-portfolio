import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import profileImage from "../assets/profile.jpg";
import { profile } from "../data/portfolio";
import { EASE } from "../motion/variants";
import Magnetic from "./Magnetic";
import SplitLines from "./SplitLines";

/**
 * Entrance timeline (all delays relative to mount):
 *  badge 0.35 → headline lines 0.45 → sub/intro 0.9 → CTAs 1.05
 *  → meta 1.2 → visual curtain 0.55 → header enters at 0.15 (see Header).
 * No loading screen — content is interactive throughout.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const [fine] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches
  );

  const parallaxOn = fine && !reduce;

  // Mouse-responsive movement (desktop, spring-smoothed).
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });

  const tiltX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const orbX = useTransform(sx, [-0.5, 0.5], [-28, 28]);
  const orbY = useTransform(sy, [-0.5, 0.5], [-20, 20]);
  const glowX = useTransform(sx, [-0.5, 0.5], [-70, 70]);
  const glowY = useTransform(sy, [-0.5, 0.5], [-50, 50]);

  const onMouseMove = (e) => {
    if (!parallaxOn || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const load = (delay, extra = {}) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE, ...extra },
  });

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      aria-label="Introduction"
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40"
    >
      {/* Ambient color + cursor glow — decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div style={parallaxOn ? { x: orbX, y: orbY } : undefined} className="absolute inset-0">
          <div className="animate-drift-a absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-vio/25 blur-[140px]" />
          <div className="animate-drift-b absolute right-[-8rem] top-40 h-80 w-80 rounded-full bg-lime/15 blur-[120px]" />
          <div className="animate-drift-a absolute left-[-10rem] top-72 h-80 w-80 rounded-full bg-azure/20 blur-[120px]" />
        </motion.div>
        {parallaxOn && (
          <motion.div
            style={{ x: glowX, y: glowY }}
            className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-lime/10 blur-[100px]"
          />
        )}
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <motion.p
            {...load(0.35)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-lime"
          >
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {profile.seeking}
          </motion.p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-cream sm:text-6xl md:text-7xl xl:text-8xl">
            <SplitLines
              mode="load"
              delay={0.45}
              stagger={0.12}
              lines={[
                <>Hi, I&rsquo;m</>,
                <span key="n" className="whitespace-nowrap text-lime text-4xl sm:text-6xl md:text-7xl xl:text-8xl">{profile.name}.</span>,
                <span key="d">
                  <span className="text-outline">Developer</span>
                  <span aria-hidden="true" className="text-vio">.</span>
                </span>,
              ]}
            />
          </h1>

          <motion.p {...load(0.95)} className="mt-5 font-display text-lg font-medium text-cream md:text-xl">
            {profile.title}
          </motion.p>

          <motion.p {...load(1.0)} className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div {...load(1.1)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-[box-shadow,background-color] duration-200 hover:shadow-[0_12px_40px_rgba(198,255,61,0.35)]"
              >
                View My Projects
                <ArrowRight size={18} className="dart-x" />
              </a>
            </Magnetic>
            <Magnetic strength={0.22}>
              <a
                href={profile.resumePdfPath}
                download={profile.resumeFileName}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-cream transition-colors duration-200 hover:border-lime/60 hover:text-lime"
              >
                <Download size={18} className="dart-down" />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div {...load(1.25)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-lime" />
              {profile.location}
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-line sm:block" />
            <span>Code · Design · Problem-solving</span>
          </motion.div>
        </div>

        {/* Visual composition: curtain reveal + mouse tilt */}
        <motion.div
          initial={reduce ? false : { opacity: 0, clipPath: "inset(8% 6% 8% 6% round 32px)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 32px)" }}
          transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div
            style={
              parallaxOn
                ? { rotateX: tiltX, rotateY: tiltY, transformPerspective: 1100 }
                : undefined
            }
            className="relative will-change-transform"
          >
            <div aria-hidden="true" className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-lime/25 via-vio/25 to-azure/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel">
              <motion.img
                src={profileImage}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: "center 20%" }}
                loading="eager"
                width={640}
                height={800}
                initial={reduce ? false : { scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, delay: 0.55, ease: EASE }}
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
        </motion.div>
      </div>
    </section>
  );
}
