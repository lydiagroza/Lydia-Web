export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Lydia Groza. Built with Next.js.</p>
        <p>Brasov, Romania</p>
      </div>
    </footer>
  );
}
