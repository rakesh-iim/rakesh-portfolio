export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft animated blurred orbs — pure CSS, GPU-accelerated, zero JS cost */}
      <div className="orb orb-emerald" />
      <div className="orb orb-amber" />
      <div className="orb orb-cream" />
      <div className="orb-grain" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/70" />
    </div>
  );
}
