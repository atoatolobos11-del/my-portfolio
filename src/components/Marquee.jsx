const items = [
  "React",
  "JavaScript",
  "UI/UX Design",
  "Tailwind CSS",
  "React Native",
  "PHP & MySQL",
  "Git & GitHub",
  "Figma",
  "Responsive Design",
  "Problem Solving",
];

export default function Marquee() {
  const row = (hidden) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-2xl font-bold uppercase tracking-tight text-cream/80 md:text-3xl">
            {item}
          </span>
          <span aria-hidden="true" className="text-lg text-lime">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/60 py-5">
      <div className="marquee-hover flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink"
      />
    </div>
  );
}
