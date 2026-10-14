/**
 * Aurora backdrop: slow-morphing violet / lime / azure light masses
 * fixed behind all content. Transform-only animation, screen-blended,
 * faint by design. Frozen automatically under reduced-motion.
 */
export default function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="animate-aurora-a absolute -top-[18vmax] left-[-12vmax] h-[62vmax] w-[62vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.34)_0%,transparent_65%)] blur-[70px] mix-blend-screen" />
      <div className="animate-aurora-b absolute -top-[22vmax] right-[-14vmax] h-[58vmax] w-[58vmax] rounded-full bg-[radial-gradient(circle,rgba(198,255,61,0.16)_0%,transparent_65%)] blur-[70px] mix-blend-screen" />
      <div className="animate-aurora-c absolute left-[28%] top-[30vh] h-[46vmax] w-[46vmax] rounded-full bg-[radial-gradient(circle,rgba(77,141,255,0.22)_0%,transparent_65%)] blur-[80px] mix-blend-screen" />
      <div className="animate-aurora-b absolute bottom-[-24vmax] left-[-10vmax] h-[52vmax] w-[52vmax] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,transparent_65%)] blur-[80px] mix-blend-screen" style={{ animationDelay: "-14s" }} />
      {/* Wide aurora ribbon across the hero */}
      <div className="animate-aurora-a absolute left-1/2 top-[8vh] h-[26vmax] w-[110vmax] -translate-x-1/2 rounded-[100%] bg-[linear-gradient(90deg,transparent,rgba(139,92,246,0.14)_30%,rgba(198,255,61,0.1)_55%,rgba(77,141,255,0.14)_75%,transparent)] blur-[50px] mix-blend-screen" />
    </div>
  );
}
