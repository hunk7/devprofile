export function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="text-text-secondary">This page could not be found.</p>
      <a href="/" className="text-accent">
        Return home
      </a>
    </main>
  );
}
