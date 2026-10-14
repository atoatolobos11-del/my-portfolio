import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASE } from "../motion/variants";

/**
 * Floating joystick back-to-top: pops in after scrolling, idles with
 * glow rings + bobbing knob, leans like a thumbstick toward the cursor,
 * and rocket-launches (with light trail) when pressed.
 */
export default function JoystickTop() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);
  const controls = useAnimation();

  const [fine] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance pop (plays on mount, since this only mounts when visible).
  useEffect(() => {
    controls.start({ opacity: 1, scale: 1, y: 0 });
  }, [controls]);

  // Thumbstick lean (desktop only).
  const kx = useMotionValue(0);
  const ky = useMotionValue(0);
  const skx = useSpring(kx, { stiffness: 300, damping: 15 });
  const sky = useSpring(ky, { stiffness: 300, damping: 15 });

  const lean = (e) => {
    if (!fine || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
    kx.set(Math.max(-1, Math.min(1, nx)) * 6);
    ky.set(Math.max(-1, Math.min(1, ny)) * 6);
  };
  const reset = () => {
    kx.set(0);
    ky.set(0);
  };

  const launch = async () => {
    if (reduce || launching) {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      return;
    }
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    await controls.start({
      y: -220,
      opacity: 0,
      scale: 1.3,
      transition: { duration: 0.45, ease: EASE },
    });
    controls.set({ y: 160, opacity: 0, scale: 0.7 });
    await controls.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 240, damping: 14 },
    });
    setLaunching(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={launch}
          disabled={launching}
          animate={controls}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, y: 32 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, y: 32 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseMove={lean}
          onMouseLeave={reset}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink shadow-[0_0_36px_rgba(198,255,61,0.45)]"
        >
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-lime/40" />
          <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-lime/25" style={{ animationDelay: "0.5s" }} />
          {/* Thumbstick knob */}
          <motion.span
            aria-hidden="true"
            style={fine && !reduce ? { x: skx, y: sky } : undefined}
            className="absolute inset-1.5 rounded-full border border-ink/15 bg-ink/[0.07]"
          />
          <ArrowUp size={20} className="arrow-bob relative" strokeWidth={2.5} />
          <AnimatePresence>
            {launching && (
              <motion.span
                aria-hidden="true"
                initial={{ opacity: 0.9, scaleY: 0.2 }}
                animate={{ opacity: 0, scaleY: 1.8, y: 34 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="absolute left-1/2 top-full ml-[-3px] h-20 w-1.5 origin-top rounded-full bg-gradient-to-b from-lime to-transparent"
              />
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
