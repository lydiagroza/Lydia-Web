import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import DirectContact from "@/components/DirectContact";
import Footer from "@/components/Footer";
import { LogoMark, LogoWordmark } from "@/components/Logo";
import SectionHeading from "@/components/SectionHeading";
import {
  dictionaries,
  localePath,
  locales,
  quotePath,
  type Locale,
} from "@/i18n/dictionaries";

// Standalone page for the quote form, linked from every "Get a free quote"
// button on the home page.
export default function QuotePage({ locale }: { locale: Locale }) {
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
                href={quotePath[l]}
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

      <main className="flex-1 px-6 pb-24 pt-12 sm:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow={t.quote.eyebrow}
            title={t.quote.title}
            lead={t.quote.lead}
            centered
          />
          <div className="mt-10">
            <ContactForm
              t={t.contact.form}
              types={t.services.items.map((item) => item.title)}
            />
          </div>
          <div className="mt-10">
            <DirectContact t={t.hero} />
          </div>
        </div>

        <ol className="mx-auto mt-20 grid max-w-5xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.services.steps.map((step, i) => (
            <li key={step.title} className="bg-background p-6">
              <span className="font-code text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-display font-semibold text-foreground">
                {step.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </main>
      <Footer t={t.footer} />
    </>
  );
}
