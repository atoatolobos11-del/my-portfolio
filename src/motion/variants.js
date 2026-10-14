// Shared motion language — one easing curve and reusable variants
// so every section animates with the same timing and feel.

export const EASE = [0.21, 0.47, 0.32, 0.98];

export const DUR = {
  fast: 0.45,
  base: 0.7,
  slow: 0.9,
};

/** Parent that staggers any children using `item` variants. */
export const staggerParent = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Standard rise used by grid/card children. */
export const riseChild = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
};

/** Soft fade for large containers (footer rows, asides). */
export const fadeChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DUR.slow, ease: EASE } },
};

/** Masked line: inner text slides up inside an overflow-hidden mask. */
export const maskChild = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: DUR.slow, ease: EASE } },
};

/** Curtain wipe for image frames (clip-path, GPU-cheap). */
export const curtainChild = {
  hidden: { opacity: 0, clipPath: "inset(6% 5% 6% 5% round 28px)" },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0% round 28px)",
    transition: { duration: 1, ease: EASE },
  },
};
