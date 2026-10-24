import { ArrowLeft } from "lucide-react";
import { LogoMark, LogoWordmark } from "@/components/Logo";
import { dictionaries, localePath, locales, type Locale } from "@/i18n/dictionaries";

// Background glow and top bar for pages outside the home page. `paths` maps
// each locale to this page, for the language switch.
export default function SubpageShell({
  locale,
  paths,
}: {
  locale: Locale;
  paths: Record<Locale, string>;
}) {
  const t = dictionaries[locale];
  const home = localePath[locale];

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.13),transparent_70%)]"
      />
      <header id="top" className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a href={home} aria-label={t.nav.home} className="group flex items-center gap-3">
          <LogoMark className="text-[22px] text-foreground" />
          <span className="hidden items-center gap-3 sm:flex">
            <span aria-hidden className="h-6 w-px bg-border" />
            <LogoWordmark className="text-[15px] transition-opacity group-hover:opacity-80" />
          </span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href={home}
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            {t.quote.back}
          </a>
          <div
            role="group"
            aria-label={t.nav.language}
            className="flex items-center rounded-full border border-border p-0.5 font-code text-[11px]"
          >
            {locales.map((l) => (
              <a
                key={l}
                href={paths[l]}
                hrefLang={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  l === locale
                    ? "bg-foreground/10 text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
