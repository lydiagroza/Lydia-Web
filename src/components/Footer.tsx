import CookieSettingsButton from "./CookieSettingsButton";
import { LogoMark, LogoWordmark } from "./Logo";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <a
          href="#top"
          aria-label="Lydia Groza"
          className="group flex items-center gap-3"
        >
          <LogoMark className="text-lg text-foreground" />
          <span aria-hidden className="h-5 w-px bg-border" />
          <LogoWordmark className="text-[13px]" />
        </a>
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p>
            © {new Date().getFullYear()} Lydia Groza · {t.rights}
          </p>
          <div className="flex items-center gap-4">
            <a href={t.privacyHref} className="transition-colors hover:text-accent">
              {t.privacy}
            </a>
            <CookieSettingsButton label={t.cookies} />
          </div>
        </div>
        <a
          href="#top"
          className="transition-colors hover:text-accent"
        >
          {t.top}
        </a>
      </div>
    </footer>
  );
}
