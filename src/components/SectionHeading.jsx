import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-lime">
        <span className="text-muted">[{index}]</span>
        <span className="inline-block h-px w-10 bg-lime/60" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
