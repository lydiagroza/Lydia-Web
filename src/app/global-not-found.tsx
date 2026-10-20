import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";
import { LogoMark } from "@/components/Logo";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "404 — Lydia Groza",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        <LogoMark className="text-5xl text-foreground" />
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p lang="ro" className="-mt-4 text-muted">
          Pagina nu a fost găsită
        </p>
        <div className="flex gap-3 text-sm">
          <Link
            href="/"
            className="rounded-md bg-indigo px-5 py-2.5 font-medium text-white transition-colors hover:bg-indigo-bright"
          >
            Home
          </Link>
          <Link
            href="/ro/"
            lang="ro"
            className="rounded-md border border-border px-5 py-2.5 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Acasă
          </Link>
        </div>
      </main>
    </RootDocument>
  );
}
