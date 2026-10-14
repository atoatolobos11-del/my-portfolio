import { Quote } from "lucide-react";
import { testimonials } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Renders nothing until you add REAL testimonials to the data file.
 * Never invent quotes — recruiters check.
 */
export default function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <section aria-label="Testimonials" className="scroll-mt-24 border-t border-line bg-panel/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Kind words"
          title={
            <>
              What people <span className="text-lime">say.</span>
            </>
          }
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={Math.min(i * 0.08, 0.24)}>
              <figure className="h-full rounded-2xl border border-line bg-ink p-6 transition-colors duration-300 hover:border-lime/40 md:p-8">
                <Quote size={28} className="text-lime" aria-hidden="true" />
                <blockquote className="mt-4 leading-relaxed text-cream">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <p className="font-display font-bold text-cream">{t.name}</p>
                  {t.role && <p className="text-sm text-muted">{t.role}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
