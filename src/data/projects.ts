import type { Locale } from "@/i18n/dictionaries";

type Localized = Record<Locale, string>;

export type Project = {
  title: string;
  description: Localized;
  stack: string[];
  href: string;
  badge?: Localized;
  featured?: boolean;
  // Spans two grid columns: "sm" from two columns up, "lg" only in the
  // three-column layout. Used to keep every row of the grid full.
  wide?: "sm" | "lg";
};

// A project with its text resolved for one locale.
export type ProjectView = Omit<Project, "description" | "badge"> & {
  description: string;
  badge?: string;
};

export const localizeProject = (p: Project, locale: Locale): ProjectView => ({
  ...p,
  description: p.description[locale],
  badge: p.badge?.[locale],
});

export const projects: Project[] = [
  {
    title: "CodeSplainer",
    description: {
      en: "AI-powered repository explorer with a RAG pipeline, vector search, and an LLM-driven chat interface over any codebase. Built in a team of 8 — I worked on the backend.",
      ro: "Explorator de repository-uri bazat pe AI, cu pipeline RAG, căutare vectorială și o interfață de chat cu LLM peste orice codebase. Construit într-o echipă de 8 — am lucrat pe partea de backend.",
    },
    stack: ["Python", "NestJS", "FastAPI", "ChromaDB", "Docker"],
    href: "https://github.com/titelaex/krontech-proiect",
    badge: { en: "1st place, Krontech Challenge", ro: "Locul 1, Krontech Challenge" },
    featured: true,
    wide: "sm",
  },
  {
    title: "Remanage",
    description: {
      en: "Full-stack property management platform with separate frontend and backend, listing management, tenant workflows, and dashboard analytics.",
      ro: "Platformă full-stack de administrare a proprietăților, cu frontend și backend separate, gestionarea anunțurilor, fluxuri pentru chiriași și dashboard de analiză.",
    },
    stack: ["TypeScript", "React", "Next.js", "Node.js"],
    href: "https://github.com/lydiagroza/Remanage",
    featured: true,
  },
  {
    title: "OnlineRestaurant",
    description: {
      en: "Full-featured desktop ordering app with a dual client/employee role system, stored procedures, BCrypt auth, and configurable business logic.",
      ro: "Aplicație desktop completă de comenzi, cu roluri separate pentru clienți și angajați, proceduri stocate, autentificare BCrypt și logică de business configurabilă.",
    },
    stack: ["C#", "Avalonia UI", ".NET 10", "SQL Server"],
    href: "https://github.com/lydiagroza/OnlineRestaurant",
    featured: true,
    wide: "lg",
  },
  {
    title: "7 Wonders Duel",
    description: {
      en: "A from-scratch implementation of the board game — a game engine decoupled into its own library, a Qt6 GUI, a console client, and an AI opponent. Built in a team of 4.",
      ro: "Implementare de la zero a jocului de societate — motor de joc separat într-o bibliotecă proprie, interfață Qt6, client de consolă și un adversar AI. Construit într-o echipă de 4.",
    },
    stack: ["C++", "Qt6", "CMake"],
    href: "https://github.com/lydiagroza/ProjectMC",
  },
  {
    title: "SmartKnob",
    description: {
      en: "A physical smart knob with haptic feedback — firmware and control loop for a motorized rotary input device.",
      ro: "Un buton rotativ inteligent cu feedback haptic — firmware și buclă de control pentru un dispozitiv de intrare motorizat.",
    },
    stack: ["C++", "Embedded"],
    href: "https://github.com/lydiagroza/SmartKnob",
  },
  {
    title: "Secure Chat (TCP)",
    description: {
      en: "An encrypted chat client/server built directly on top of TCP sockets, exploring handshake and message-framing design from scratch.",
      ro: "Client/server de chat criptat construit direct peste socket-uri TCP, cu handshake și încadrarea mesajelor proiectate de la zero.",
    },
    stack: ["C#", "Sockets", "Cryptography"],
    href: "https://github.com/lydiagroza/secure-chat-tcp",
  },
  {
    title: "Reliable UDP",
    description: {
      en: "Reliable data transfer over plain UDP: a TCP-style three-way handshake, a negotiated sliding window, and sequence numbers on raw datagrams.",
      ro: "Transfer de date fiabil peste UDP simplu: handshake în trei pași în stil TCP, fereastră glisantă negociată și numere de secvență peste datagrame.",
    },
    stack: ["C#", "UDP", "Networking"],
    href: "https://github.com/lydiagroza/reliable-udp",
  },
];
