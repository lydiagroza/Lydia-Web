import ContactForm from "@/components/ContactForm";
import DirectContact from "@/components/DirectContact";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import SectionHeading from "@/components/SectionHeading";
import SubpageShell from "@/components/SubpageShell";
import { dictionaries, quotePath, thanksPath, type Locale } from "@/i18n/dictionaries";

// Standalone page for the quote form, linked from every "Get a free quote"
// button on the home page.
export default function QuotePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <SubpageShell locale={locale} paths={quotePath} />

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
              thanksHref={thanksPath[locale]}
              types={t.services.items.map((item) => item.title)}
            />
          </div>
          <div className="mt-10">
            <DirectContact t={t.hero} />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <ProcessSteps steps={t.services.steps} />
        </div>
      </main>
      <Footer t={t.footer} />
    </>
  );
}
