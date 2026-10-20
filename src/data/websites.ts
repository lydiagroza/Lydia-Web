import type { Locale } from "@/i18n/dictionaries";

export type Website = {
  name: string;
  kind: "client" | "concept";
  description: Record<Locale, string>;
  stack: string[];
  // Omitted for private platforms that can't be visited.
  href?: string;
  image?: string;
};

export type WebsiteView = Omit<Website, "description"> & { description: string };

export const localizeWebsite = (w: Website, locale: Locale): WebsiteView => ({
  ...w,
  description: w.description[locale],
});

export const websites: Website[] = [
  {
    name: "A&C Consulting",
    kind: "client",
    description: {
      en: "Bilingual (EN/DE) website for a team of Workday consultants — services, industries and expertise, with a built-in CMS so the client can update content themselves.",
      ro: "Site bilingv (EN/DE) pentru o echipă de consultanți Workday — servicii, industrii și expertiză, cu CMS integrat, ca firma să-și poată actualiza singură conținutul.",
    },
    stack: ["Astro", "React", "Tailwind", "Keystatic CMS"],
    href: "https://ac-consulting-blue.vercel.app",
    image: "/work/ac-consulting.jpg",
  },
  {
    name: "Spectrum Terapia",
    kind: "client",
    description: {
      en: "Management platform for a children's therapy centre. Parents, therapists and admins each get their own view of schedules, monthly session packages, make-up sessions and each child's full history.",
      ro: "Platformă de management pentru un centru de terapie pentru copii. Părinții, terapeuții și administratorii au fiecare propria vedere asupra orarului, abonamentelor lunare, recuperărilor și istoricului complet al fiecărui copil.",
    },
    stack: ["Astro", "React", "PostgreSQL", "Prisma"],
  },
  {
    name: "Purpur Coffee",
    kind: "concept",
    description: {
      en: "Concept site for a specialty coffee bar in Brașov — menu, events, gallery and opening hours, with an editorial, magazine-style design.",
      ro: "Site concept pentru o cafenea de specialitate din Brașov — meniu, evenimente, galerie și program, cu un design editorial, de revistă.",
    },
    stack: ["Astro", "React", "Tailwind"],
    href: "https://pur-pur.vercel.app",
    image: "/work/purpur.jpg",
  },
  {
    name: "Ozaki Arena",
    kind: "concept",
    description: {
      en: "Concept site for a climbing gym in Sibiu — bouldering, rope climbing, Ninja Warrior and kids' activities, with a bold, high-energy look.",
      ro: "Site concept pentru o sală de escaladă din Sibiu — boulder, coardă, Ninja Warrior și activități pentru copii, cu un design îndrăzneț și energic.",
    },
    stack: ["Astro", "React", "Tailwind"],
    href: "https://ozaki-arena.vercel.app",
    image: "/work/ozaki-arena.jpg",
  },
];
