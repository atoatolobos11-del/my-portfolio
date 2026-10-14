import { motion, useReducedMotion } from "framer-motion";
import { Award, Briefcase, Download, FileText, GraduationCap } from "lucide-react";
import { certifications, education, experience, profile } from "../data/portfolio";
import { riseChild, staggerParent } from "../motion/variants";
import useResumeReady from "../hooks/useResumeReady";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Timeline({ items, type }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <ol className="relative space-y-5 border-l-2 border-line pl-6">
        {items.map((item) => (
          <TimelineItem key={item.id} item={item} type={type} />
        ))}
      </ol>
    );
  }
  return (
    <motion.ol
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerParent(0.12)}
      className="relative space-y-5 border-l-2 border-line pl-6"
    >
      {items.map((item) => (
        <motion.li key={item.id} variants={riseChild} className="relative">
          <TimelineItem item={item} type={type} bare />
        </motion.li>
      ))}
    </motion.ol>
  );
}

function TimelineItem({ item, type, bare = false }) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-lime shadow-[0_0_12px_rgba(198,255,61,0.7)]"
      />
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
        {item.period}
      </p>
      <h4 className="mt-1 font-display text-lg font-bold text-cream">
        {type === "edu" ? item.school : item.role}
      </h4>
      <p className="text-sm font-semibold text-vio">
        {type === "edu" ? item.program : item.org}
      </p>
      {item.description && (
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
      )}
    </>
  );
  if (bare) return inner;
  return <li className="relative">{inner}</li>;
}

export default function Resume() {
  // Shared check — shows a setup note instead of a dead button
  // until public/resume.pdf actually exists.
  const pdfReady = useResumeReady();

  return (
    <section id="resume" aria-label="Resume, education and experience" className="scroll-mt-24 border-y border-line bg-panel/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Resume"
          title={
            <>
              Experience & <span className="text-lime">background.</span>
            </>
          }
          description="Entries appear newest first. Only confirmed details are listed — nothing is invented."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="space-y-10">
            {education.length > 0 && (
              <Reveal>
                <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-cream">
                  <GraduationCap size={22} className="text-lime" />
                  Education
                </h3>
                <div className="mt-5">
                  <Timeline items={education} type="edu" />
                </div>
              </Reveal>
            )}

            <Reveal>
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-cream">
                <Briefcase size={22} className="text-lime" />
                Experience
              </h3>
              <div className="mt-5">
                <Timeline items={experience} type="exp" />
              </div>
            </Reveal>

            {certifications.length > 0 && (
              <Reveal>
                <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-cream">
                  <Award size={22} className="text-lime" />
                  Certifications
                </h3>
                <ul className="mt-5 space-y-3">
                  {certifications.map((c) => (
                    <li key={c.id} className="rounded-xl border border-line bg-ink p-4 text-sm text-cream transition-colors hover:border-lime/40">
                      <strong className="font-semibold">{c.title}</strong>
                      {c.issuer && <span className="text-muted"> — {c.issuer}</span>}
                      {c.year && <span className="ml-2 text-xs text-lime">{c.year}</span>}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} variant="scale">
            <aside className="rounded-2xl border border-line bg-ink p-6 transition-colors duration-300 hover:border-lime/30 md:p-8 lg:sticky lg:top-28">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15">
                <FileText size={24} className="text-lime" />
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-cream">
                Grab my resume
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A one-page PDF with my education, skills, and experience — handy
                for recruiters and internship coordinators.
              </p>
              {pdfReady === false ? (
                <p role="note" className="mt-5 rounded-xl border border-vio/40 bg-vio/10 p-4 text-sm leading-relaxed text-cream">
                  The resume PDF hasn&rsquo;t been added yet. Place the file at{" "}
                  <code className="rounded bg-ink px-1.5 py-0.5 text-lime">public/resume.pdf</code>{" "}
                  and this button will start working automatically.
                </p>
              ) : (
                <Magnetic strength={0.18} className="mt-5 w-full">
                  <a
                    href={profile.resumePdfPath}
                    download={profile.resumeFileName}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-shadow duration-200 hover:shadow-[0_12px_40px_rgba(198,255,61,0.35)]"
                  >
                    <Download size={18} className="dart-down" />
                    Download Resume
                  </a>
                </Magnetic>
              )}
              <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Location</dt>
                  <dd className="font-semibold text-cream">{profile.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Status</dt>
                  <dd className="font-semibold text-lime">{profile.seeking}</dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
