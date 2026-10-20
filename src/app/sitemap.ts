import type { MetadataRoute } from "next";
import { localePath, locales } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const languages = Object.fromEntries(
  locales.map((l) => [l, `${siteUrl}${localePath[l]}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}${localePath[locale]}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
