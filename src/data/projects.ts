export type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  badge?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "CodeSplainer",
    description:
      "AI-powered repository explorer with a RAG pipeline, vector search, and an LLM-driven chat interface over any codebase. Built in a team of 8 — owned the backend service.",
    stack: ["Python", "NestJS", "FastAPI", "ChromaDB", "Docker"],
    href: "https://github.com/titelaex/krontech-proiect",
    badge: "1st place, Krontech Challenge",
    featured: true,
  },
  {
    title: "Remanage",
    description:
      "Full-stack property management platform with separate frontend and backend, listing management, tenant workflows, and dashboard analytics.",
    stack: ["TypeScript", "React", "Next.js", "Node.js"],
    href: "https://github.com/lydiagroza/Remanage",
    featured: true,
  },
  {
    title: "OnlineRestaurant",
    description:
      "Full-featured desktop ordering app with a dual client/employee role system, stored procedures, BCrypt auth, and configurable business logic.",
    stack: ["C#", "Avalonia UI", ".NET 10", "SQL Server"],
    href: "https://github.com/lydiagroza/OnlineRestaurant",
    featured: true,
  },
  {
    title: "7 Wonders Duel",
    description:
      "A from-scratch implementation of the board game — a game engine decoupled into its own library, a Qt6 GUI, a console client, and an AI opponent.",
    stack: ["C++", "Qt6", "CMake"],
    href: "https://github.com/lydiagroza/ProjectMC",
  },
  {
    title: "SmartKnob",
    description:
      "A physical smart knob with haptic feedback — firmware and control loop for a motorized rotary input device.",
    stack: ["C++", "Embedded"],
    href: "https://github.com/lydiagroza/SmartKnob",
  },
  {
    title: "Secure Chat (TCP)",
    description:
      "An encrypted chat client/server built directly on top of TCP sockets, exploring handshake and message-framing design from scratch.",
    stack: ["C#", "Sockets", "Cryptography"],
    href: "https://github.com/lydiagroza/secure-chat-tcp",
  },
];
