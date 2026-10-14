import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../motion/variants";
import Reveal from "./Reveal";
import SplitLines from "./SplitLines";

export default function SectionHeading({ index, eyebrow, title, description }) {
  const reduce = useReducedMotion();
  return (
    <div className="mb-10 md:mb-14">
      <Reveal variant="fade">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime">
          <span className="text-muted">[{index}]</span>
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-block h-px w-10 origin-left bg-lime/60"
          />
          {eyebrow}
        </p>
      </Reveal>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl">
        <SplitLines lines={Array.isArray(title) ? title : [title]} stagger={0.08} />
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
