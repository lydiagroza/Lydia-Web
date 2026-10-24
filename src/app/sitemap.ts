import type { MetadataRoute } from "next";
import { localePath, locales, quotePath } from "@/i18n/dictionaries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const languagesFor = (paths: Record<string, string>) =>
  Object.fromEntries(locales.map((l) => [l, `${siteUrl}${paths[l]}`]));

export default function sitemap(): MetadataRoute.Sitemap {
  return [localePath, quotePath].flatMap((paths, i) =>
    locales.map((locale) => ({
      url: `${siteUrl}${paths[locale]}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: (locale === "en" ? 1 : 0.9) - i * 0.2,
      alternates: { languages: languagesFor(paths) },
    })),
  );
}
