import { motion, useReducedMotion } from "framer-motion";
import { Code, Palette, Server, Wrench } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { riseChild, staggerParent } from "../motion/variants";
import SectionHeading from "./SectionHeading";

const icons = {
  code: Code,
  wrench: Wrench,
  palette: Palette,
  server: Server,
};

const accents = ["text-lime", "text-vio", "text-azure", "text-lime"];

export default function Skills() {
  const reduce = useReducedMotion();

  const cards = (extraClass = "") => (
    <>
      {skillGroups.map((group, gi) => {
        const Icon = icons[group.icon] ?? Code;
        const card = (
          <article className={`group h-full rounded-2xl border border-line bg-ink p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_16px_50px_rgba(0,0,0,0.45)] ${extraClass}`}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon size={20} className={accents[gi % accents.length]} />
              </span>
              <h3 className="font-display text-lg font-bold text-cream">
                {group.title}
              </h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <li
                  key={skill}
                  style={reduce ? undefined : { transitionDelay: `${si * 25}ms` }}
                  className="rounded-full bg-panel2 px-3 py-1.5 text-[13px] font-medium text-muted transition-colors group-hover:text-cream"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        );
        return reduce ? (
          <div key={group.id}>{card}</div>
        ) : (
          <motion.div key={group.id} variants={riseChild}>
            {card}
          </motion.div>
        );
      })}
    </>
  );

  return (
    <section id="skills" aria-label="Skills and technologies" className="scroll-mt-24 border-y border-line bg-panel/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={
            <>
              Tools I can <span className="text-lime">actually use.</span>
            </>
          }
          description="Every skill below is one I have genuinely worked with. The full list lives in one data file, so it stays easy to update."
        />

        {reduce ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {cards()}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerParent(0.1, 0.05)}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5"
          >
            {cards()}
          </motion.div>
        )}
      </div>
    </section>
  );
}
