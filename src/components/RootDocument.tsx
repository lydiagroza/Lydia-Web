import { Geist, Geist_Mono, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { introScript } from "@/components/IntroProvider";
import type { Locale } from "@/i18n/dictionaries";
import "@/app/globals.css";

// latin-ext covers Romanian diacritics (ă, ș, ț).
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

// The <html> shell shared by each language's root layout.
export default function RootDocument({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent">
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <noscript>
          <style>{`.intro-overlay{display:none}`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
