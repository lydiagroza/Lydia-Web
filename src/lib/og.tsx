import { ImageResponse } from "next/og";
import type { Locale } from "@/i18n/dictionaries";

export const ogSize = { width: 1200, height: 630 };

const copy: Record<Locale, { tagline: string; services: string }> = {
  en: {
    tagline: "Websites and web platforms for businesses.",
    services: "Web development · Brașov, Romania",
  },
  ro: {
    tagline: "Site-uri și platforme web pentru afaceri.",
    services: "Dezvoltare web · Brașov, România",
  },
};

// Social share card (Open Graph / Twitter) for one locale.
export function renderOgImage(locale: Locale) {
  const { tagline, services } = copy[locale];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#08090c",
          backgroundImage:
            "radial-gradient(circle at 50% -20%, rgba(79, 70, 229, 0.35), transparent 60%)",
          padding: "96px",
          fontFamily: "sans-serif",
        }}
      >
        {/* The <LG> mark, drawn as paths so it needs no custom font. */}
        <svg width="176" height="104" viewBox="0 0 44 26" fill="none">
          <path
            d="M7 3 2 13l5 10M37 3l5 10-5 10"
            stroke="#4f46e5"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M11.5 4v17.5H19" stroke="#f1f2f6" strokeWidth="3.4" />
          <path
            d="M30.6 8.6A6.6 6.6 0 1 0 32.4 13H26.6"
            stroke="#f1f2f6"
            strokeWidth="3.4"
          />
        </svg>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 92,
            fontWeight: 700,
            color: "#f1f2f6",
            letterSpacing: "-0.03em",
          }}
        >
          Lydia Groza
          <span style={{ color: "#8b8ff8" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 40, color: "#9b9eb3" }}>
          {tagline}
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 26, color: "#5d6075" }}>
          {services} · lydiagrozaweb.com
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
