import { motion, useReducedMotion } from "framer-motion";
import { DUR, EASE } from "../motion/variants";

/**
 * Scroll-triggered reveal with selectable character:
 * "rise" (default), "fade", "clip" (curtain wipe), "scale".
 * Fires once when entering the viewport; reduced-motion renders static.
 */
const VARIANTS = {
  rise: (y, delay) => ({
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: DUR.base, delay, ease: EASE } },
  }),
  fade: (_y, delay) => ({
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: DUR.slow, delay, ease: EASE } },
  }),
  clip: (_y, delay) => ({
    hidden: { opacity: 0, clipPath: "inset(10% 6% 10% 6% round 24px)" },
    show: {
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0% round 24px)",
      transition: { duration: DUR.slow, delay, ease: EASE },
    },
  }),
  scale: (_y, delay) => ({
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1, transition: { duration: DUR.base, delay, ease: EASE } },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  variant = "rise",
  className = "",
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const build = VARIANTS[variant] ?? VARIANTS.rise;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={build(y, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
