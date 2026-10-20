import type { Metadata, Viewport } from "next";
import { dictionaries, localePath, type Locale } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#08090c",
};

export function buildMetadata(locale: Locale): Metadata {
  const { title, description, ogLocale } = dictionaries[locale].meta;
  const url = localePath[locale];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    authors: [{ name: "Lydia Groza", url: "https://github.com/lydiagroza" }],
    keywords: [
      "Lydia Groza",
      "web developer",
      "freelance web developer",
      "dezvoltator web",
      "creare site",
      "site de prezentare",
      "Brașov",
      "Romania",
    ],
    alternates: {
      canonical: url,
      languages: { en: localePath.en, ro: localePath.ro, "x-default": localePath.en },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Lydia Groza",
      type: "website",
      locale: ogLocale,
      alternateLocale: locale === "en" ? "ro_RO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
