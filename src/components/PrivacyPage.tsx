import Footer from "@/components/Footer";
import SubpageShell from "@/components/SubpageShell";
import { dictionaries, privacyPath, type Locale } from "@/i18n/dictionaries";

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <SubpageShell locale={locale} paths={privacyPath} />

      <main className="flex-1 px-6 pb-24 pt-12 sm:pt-16">
        <article className="mx-auto max-w-2xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.privacy.title}
          </h1>
          <p className="mt-3 font-mono text-xs text-muted">{t.privacy.updated}</p>
          {t.privacy.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-xl font-semibold">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <Footer t={t.footer} />
    </>
  );
}
