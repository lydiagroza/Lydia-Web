import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "CS student and web developer in Brașov, Romania — building AI tools, full-stack platforms, and low-level systems. Available for freelance website projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lydia Groza — Web Developer & CS Student",
  description,
  authors: [{ name: "Lydia Groza", url: "https://github.com/lydiagroza" }],
  keywords: [
    "Lydia Groza",
    "web developer",
    "freelance web developer",
    "computer science student",
    "Brașov",
    "Romania",
    "portfolio",
  ],
  openGraph: {
    title: "Lydia Groza — Web Developer & CS Student",
    description,
    url: siteUrl,
    siteName: "Lydia Groza",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lydia Groza — Web Developer & CS Student",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-teal">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
