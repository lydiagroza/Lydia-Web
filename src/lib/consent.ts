import { useSyncExternalStore } from "react";

// The visitor's analytics choice: null until they answer the banner.
export type Consent = "granted" | "denied" | null;

const KEY = "lg-analytics-consent";

let settingsOpen = false;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

// Used if storage is blocked, so the choice still holds for this page.
let memory: Consent = null;

function readConsent(): Consent {
  try {
    const value = localStorage.getItem(KEY);
    return value === "granted" || value === "denied" ? value : memory;
  } catch {
    return memory;
  }
}

function clearAnalyticsCookies() {
  const host = location.hostname;
  const domains = ["", `;domain=${host}`, `;domain=${host.replace(/^www\./, "")}`];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=;path=/;max-age=0${domain}`;
    }
  }
}

export function setConsent(value: "granted" | "denied") {
  const withdrawn = readConsent() === "granted" && value === "denied";
  memory = value;
  try {
    localStorage.setItem(KEY, value);
  } catch {}
  settingsOpen = false;
  if (withdrawn) {
    // gtag can't be unloaded from a running page, so start a clean one.
    clearAnalyticsCookies();
    location.reload();
    return;
  }
  notify();
}

export function openConsentSettings() {
  settingsOpen = true;
  notify();
}

// On the server and during hydration nothing shows and nothing loads.
export const useConsent = () =>
  useSyncExternalStore<Consent>(subscribe, readConsent, () => "denied");

export const useConsentSettingsOpen = () =>
  useSyncExternalStore(subscribe, () => settingsOpen, () => false);
