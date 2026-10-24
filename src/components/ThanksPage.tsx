import { CheckCircle2 } from "lucide-react";
import DirectContact from "@/components/DirectContact";
import Footer from "@/components/Footer";
import SubpageShell from "@/components/SubpageShell";
import { dictionaries, localePath, thanksPath, type Locale } from "@/i18n/dictionaries";

// Shown after the quote form is sent.
export default function ThanksPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <SubpageShell locale={locale} paths={thanksPath} />

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo/15 text-accent">
          <CheckCircle2 size={28} />
        </span>
        <h1 className="mt-6 max-w-xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.quote.thanks.title}
        </h1>
        <p className="mt-4 max-w-md text-balance text-lg text-muted">
          {t.quote.thanks.body}
        </p>
        <div className="mt-10">
          <DirectContact t={t.hero} />
        </div>
        <a
          href={localePath[locale]}
          className="mt-10 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          {t.quote.thanks.home}
        </a>
      </main>
      <Footer t={t.footer} />
    </>
  );
}
