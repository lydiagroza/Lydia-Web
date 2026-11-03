"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { setConsent, useConsent, useConsentSettingsOpen } from "@/lib/consent";
import { gaId } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries";

const button =
  "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors sm:flex-none";

// Loads Google Analytics only after the visitor accepts. Without a measurement
// ID nothing is tracked, so there is nothing to ask. It sits under the home
// page's intro splash (z-40), so it appears once that clears.
export default function CookieConsent({
  t,
  privacyHref,
}: {
  t: Dictionary["consent"];
  privacyHref: string;
}) {
  const consent = useConsent();
  const settingsOpen = useConsentSettingsOpen();

  if (!gaId) return null;

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={gaId} />}
      {(consent === null || settingsOpen) && (
        <div
          role="region"
          aria-label={t.label}
          className="fixed inset-x-4 bottom-4 z-30 mx-auto flex max-w-2xl flex-col gap-4 rounded-xl border border-border bg-background/90 p-4 text-sm text-muted shadow-2xl backdrop-blur-md sm:flex-row sm:items-center"
        >
          <p className="flex-1">
            {t.text}{" "}
            <a href={privacyHref} className="text-foreground underline underline-offset-2 hover:text-accent">
              {t.privacy}
            </a>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setConsent("denied")}
              className={`${button} border border-border text-foreground hover:border-accent/50 hover:text-accent`}
            >
              {t.decline}
            </button>
            <button
              type="button"
              onClick={() => setConsent("granted")}
              className={`${button} border border-indigo bg-indigo text-white hover:bg-indigo-bright`}
            >
              {t.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
