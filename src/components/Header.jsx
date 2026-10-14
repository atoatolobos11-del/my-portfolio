import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { EASE } from "../motion/variants";
import Magnetic from "./Magnetic";

const menuList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const menuItem = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Header() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <motion.header
      initial={reduce ? false : { y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime font-display text-sm font-bold text-ink transition-transform duration-300 group-hover:-rotate-6"
          >
            {profile.initials}
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-cream">
            {profile.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`group relative px-0.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-200 ${
                active === id ? "text-lime" : "text-muted hover:text-cream"
              }`}
            >
              {label}
              {/* Sliding underline: glides between links via layoutId */}
              {active === id ? (
                <motion.span
                  aria-hidden="true"
                  layoutId="nav-underline"
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full bg-lime"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-cream/40 transition-transform duration-300 group-hover:scale-x-100"
                />
              )}
            </a>
          ))}
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="rounded-full bg-lime px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(198,255,61,0.35)]"
            >
              Hire Me
            </a>
          </Magnetic>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-cream lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              variants={reduce ? undefined : menuList}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-1 px-4 pb-8 pt-4"
            >
              {navLinks.map(({ id, label }, i) => (
                <motion.li key={id} variants={reduce ? undefined : menuItem}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-3 rounded-lg px-3 py-3 font-display text-2xl font-bold text-cream transition-colors hover:bg-panel hover:text-lime"
                  >
                    <span className="text-xs font-semibold text-lime">
                      0{i + 1}
                    </span>
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="px-4 pb-8">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-lime px-5 py-3.5 text-center text-sm font-bold uppercase tracking-[0.18em] text-ink"
              >
                Hire Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Scroll progress — decorative, mirrors scroll position */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-lime"
      />
    </motion.header>
  );
}
