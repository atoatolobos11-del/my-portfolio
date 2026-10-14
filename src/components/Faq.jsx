import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/portfolio";
import { EASE } from "../motion/variants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Item({ faq, open, onToggle }) {
  const reduce = useReducedMotion();
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        open ? "border-lime/40 bg-panel" : "border-line bg-panel/60 hover:border-lime/25"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
      >
        <span className={`font-display text-base font-bold md:text-lg ${open ? "text-lime" : "text-cream"}`}>
          {faq.q}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
            open ? "border-lime/50 text-lime" : "border-line text-muted"
          }`}
        >
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:px-6 md:pb-6 md:text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-lime">answered.</span>
            </>
          }
          description="The things recruiters and clients ask me most."
        />
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={Math.min(i * 0.06, 0.24)}>
              <Item
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
