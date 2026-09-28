export function BackgroundOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-accent/30 to-fuchsia-500/20 blur-3xl animate-blob-slow" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-accent/25 blur-3xl animate-blob-slower" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-500/10 blur-3xl animate-blob-slow" />
    </div>
  );
}
