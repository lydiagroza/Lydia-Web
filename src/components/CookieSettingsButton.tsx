"use client";

import { openConsentSettings } from "@/lib/consent";
import { gaId } from "@/lib/site";

// Lets visitors change their analytics choice later.
export default function CookieSettingsButton({ label }: { label: string }) {
  if (!gaId) return null;

  return (
    <button
      type="button"
      onClick={openConsentSettings}
      className="transition-colors hover:text-accent"
    >
      {label}
    </button>
  );
}
