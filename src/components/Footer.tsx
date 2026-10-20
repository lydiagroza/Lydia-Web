import { LogoMark, LogoWordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <a
          href="#top"
          aria-label="Lydia Groza — back to top"
          className="group flex items-center gap-3"
        >
          <LogoMark className="text-lg text-foreground" />
          <span aria-hidden className="h-5 w-px bg-border" />
          <LogoWordmark className="text-[13px]" />
        </a>
        <p className="text-center">
          © {new Date().getFullYear()} Lydia Groza · Brașov, Romania. Built
          with Next.js.
        </p>
        <a
          href="#top"
          className="transition-colors hover:text-teal"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
