import { Compass } from "lucide-react";
import profileImage from "../assets/profile.jpg";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              A developer who cares <span className="text-lime">about the details.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-vio/30 to-azure/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-panel">
              <img
                src={profileImage}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[4/5] w-full object-cover"
                style={{ objectPosition: "center 20%" }}
                loading="lazy"
                width={640}
                height={800}
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="font-display text-xl font-bold text-cream md:text-2xl">
                {profile.title}
              </p>
              {profile.bio.map((para, i) => (
                <p key={i} className="mt-4 leading-relaxed text-muted md:text-lg">
                  {para}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-cream">
                What I&rsquo;m into
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {profile.interests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-cream transition-colors hover:border-lime/50 hover:text-lime"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 rounded-2xl border border-lime/30 bg-lime/[0.06] p-5 md:p-6">
              <p className="flex items-start gap-3 text-sm leading-relaxed text-cream md:text-base">
                <Compass size={20} className="mt-0.5 shrink-0 text-lime" />
                <span>
                  <strong className="font-semibold text-lime">Currently seeking: </strong>
                  internship or entry-level opportunities where I can contribute
                  real work and keep growing as a developer.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
