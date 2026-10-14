import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../motion/variants";

/**
 * Masked line-by-line text reveal (reference-style oversized typography).
 * Each line slides up inside its own overflow-hidden mask.
 * `mode="load"` plays on mount (hero), `mode="scroll"` plays in view.
 * Reduced-motion renders the plain text with identical line breaks.
 */
export default function SplitLines({
  lines,
  delay = 0,
  stagger = 0.1,
  duration = 0.95,
  mode = "scroll",
  className = "",
  masks = [],
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span className={`block ${className}`}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  const trigger =
    mode === "load"
      ? { animate: "show" }
      : { whileInView: "show", viewport: { once: true, margin: "-60px" } };

  return (
    <motion.span
      className={`block ${className}`}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${masks[i] ?? ""}`}>
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "112%" },
              show: { y: "0%", transition: { duration, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
