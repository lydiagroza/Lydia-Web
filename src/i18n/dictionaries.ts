export const locales = ["en", "ro"] as const;
export type Locale = (typeof locales)[number];

// Path of the home page for each locale (trailingSlash is on).
export const localePath: Record<Locale, string> = { en: "/", ro: "/ro/" };

const en = {
  meta: {
    title: "Lydia Groza — Web Developer in Brașov",
    description:
      "Freelance web developer and CS student in Brașov, Romania. I design and build fast, modern websites and web platforms for businesses — plus AI tools and full-stack apps.",
    ogLocale: "en_US",
  },
  nav: {
    links: {
      work: "Websites",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    home: "Lydia Groza — back to top",
    menu: "Toggle menu",
    language: "Language",
  },
  hero: {
    badge: "Open to freelance & internships",
    intro:
      "Computer science student in Brașov, Romania. I design and build websites for businesses — plus AI tools, full-stack apps, and the occasional piece of hardware.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    scroll: "Scroll to my work",
  },
  websites: {
    eyebrow: "Websites",
    title: "Websites I've built",
    lead: "Real client work, plus concept sites I designed for local businesses.",
    client: "Client",
    concept: "Concept",
    visit: "Visit site",
    private: "Private platform · login required",
  },
  services: {
    eyebrow: "Services",
    title: "What I can build for you",
    lead: "From a simple site that brings in calls to a custom platform that runs your day-to-day.",
    items: [
      {
        title: "Business websites",
        body: "A fast, modern site that explains what you do and makes it easy to contact you. Optionally with an editing panel, so you can update content yourself.",
        example: "e.g. A&C Consulting",
      },
      {
        title: "Cafés, restaurants & venues",
        body: "Menu, opening hours, events and photos — designed to look great on a phone, where most of your visitors are.",
        example: "e.g. Purpur Coffee, Ozaki Arena",
      },
      {
        title: "Custom platforms",
        body: "Web apps with accounts, schedules and dashboards, built around how your business actually works.",
        example: "e.g. Spectrum Terapia",
      },
    ],
    processTitle: "How it works",
    steps: [
      {
        title: "Chat",
        body: "We talk about your business and what the site needs to do. Free, no commitment.",
      },
      {
        title: "Design",
        body: "You see and approve the design before any code is written.",
      },
      {
        title: "Build",
        body: "Fast, mobile-friendly, and set up so Google can find you.",
      },
      {
        title: "Launch",
        body: "I put it live on your domain and stay around for changes.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "A little about me",
    p1: [
      "I'm a computer science student at ",
      "Transilvania University of Brașov",
      ". Most of my coursework and side projects land somewhere between AI tooling, full-stack web apps, and lower-level systems work — whatever a project needs. I also build websites, so if you or someone you know needs one, that's a project I'd take on.",
    ],
    p2: [
      "Outside of that, I'm usually out with my dog ",
      "Bailey",
      ", who has strong opinions about frisbees.",
    ],
    stack: "Stack I reach for",
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've built",
    lead: "A few of the ones I'd actually want you to look at.",
    more: "See everything else on GitHub →",
  },
  contact: {
    eyebrow: "Contact",
    title: "Need a website?",
    body: "I build those. Tell me a bit about your project and I'll get back to you — email, call, or message me on WhatsApp. Also happy to hear about internships, collabs, or anything else code-related.",
    email: "Email me",
    whatsapp: "WhatsApp",
    whatsappText: "Hi Lydia! I'm interested in a website.",
    direct: "Or reach me directly",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      placeholder: "What do you need built?",
      send: "Send message",
      sending: "Sending…",
      success: "Thanks! Your message is on its way — I'll reply soon.",
      error:
        "Something went wrong. Please email me directly at lydiagroza@gmail.com.",
      invalid:
        "Please add your name, a valid email, and a message of at least 10 characters.",
    },
  },
  footer: {
    rights: "Brașov, Romania. Built with Next.js.",
    top: "Back to top ↑",
  },
};

export type Dictionary = typeof en;

const ro: Dictionary = {
  meta: {
    title: "Lydia Groza — Dezvoltator web în Brașov",
    description:
      "Dezvoltare web freelance în Brașov. Creez site-uri și platforme web rapide și moderne pentru afaceri — plus unelte AI și aplicații full-stack.",
    ogLocale: "ro_RO",
  },
  nav: {
    links: {
      work: "Site-uri",
      services: "Servicii",
      projects: "Proiecte",
      about: "Despre",
      contact: "Contact",
    },
    home: "Lydia Groza — înapoi sus",
    menu: "Deschide meniul",
    language: "Limba",
  },
  hero: {
    badge: "Accept proiecte freelance și internshipuri",
    intro:
      "Studiez informatica în Brașov. Creez site-uri pentru afaceri — plus unelte AI, aplicații full-stack și, din când în când, câte un proiect hardware.",
    ctaWork: "Vezi proiectele",
    ctaContact: "Hai să vorbim",
    scroll: "Derulează la proiecte",
  },
  websites: {
    eyebrow: "Site-uri",
    title: "Site-uri create de mine",
    lead: "Proiecte reale pentru clienți, plus site-uri concept create pentru afaceri locale.",
    client: "Client",
    concept: "Concept",
    visit: "Vezi site-ul",
    private: "Platformă privată · necesită autentificare",
  },
  services: {
    eyebrow: "Servicii",
    title: "Ce pot construi pentru tine",
    lead: "De la un site simplu care îți aduce clienți, până la o platformă personalizată care îți organizează activitatea de zi cu zi.",
    items: [
      {
        title: "Site-uri de prezentare",
        body: "Un site rapid și modern care arată clar ce faci și te face ușor de contactat. Opțional, cu panou de administrare, ca să poți actualiza singur conținutul.",
        example: "ex. A&C Consulting",
      },
      {
        title: "Cafenele, restaurante și locații",
        body: "Meniu, program, evenimente și galerie foto — gândite să arate impecabil pe telefon, de unde vin majoritatea vizitatorilor.",
        example: "ex. Purpur Coffee, Ozaki Arena",
      },
      {
        title: "Platforme personalizate",
        body: "Aplicații web cu conturi, programări și panouri de control, construite în jurul modului în care funcționează afacerea ta.",
        example: "ex. Spectrum Terapia",
      },
    ],
    processTitle: "Cum lucrăm",
    steps: [
      {
        title: "Discuție",
        body: "Vorbim despre afacerea ta și despre ce trebuie să facă site-ul. Gratuit, fără obligații.",
      },
      {
        title: "Design",
        body: "Vezi și aprobi designul înainte să fie scrisă vreo linie de cod.",
      },
      {
        title: "Dezvoltare",
        body: "Rapid, adaptat pentru mobil și pregătit să fie găsit pe Google.",
      },
      {
        title: "Lansare",
        body: "Îl pun online pe domeniul tău și te ajut în continuare cu modificări.",
      },
    ],
  },
  about: {
    eyebrow: "Despre",
    title: "Câteva lucruri despre mine",
    p1: [
      "Studiez informatica la ",
      "Universitatea Transilvania din Brașov",
      ". Majoritatea proiectelor mele, de la facultate sau personale, se împart între unelte AI, aplicații web full-stack și programare de nivel jos — orice are nevoie proiectul. Creez și site-uri, așa că dacă tu sau cineva cunoscut are nevoie de unul, e un proiect pe care îl preiau cu drag.",
    ],
    p2: [
      "În timpul liber mă găsești de obicei afară cu cățelul meu, ",
      "Bailey",
      ", care are păreri foarte ferme despre frisbee.",
    ],
    stack: "Tehnologiile mele preferate",
  },
  projects: {
    eyebrow: "Proiecte",
    title: "Lucruri pe care le-am construit",
    lead: "Câteva dintre cele la care chiar aș vrea să te uiți.",
    more: "Restul le găsești pe GitHub →",
  },
  contact: {
    eyebrow: "Contact",
    title: "Ai nevoie de un site?",
    body: "Asta fac. Spune-mi câteva lucruri despre proiectul tău și îți răspund cât de curând — scrie-mi pe email, sună-mă ori trimite-mi un mesaj pe WhatsApp. Mă bucur să aud și despre internshipuri, colaborări sau orice altceva legat de programare.",
    email: "Trimite un email",
    whatsapp: "WhatsApp",
    whatsappText: "Bună, Lydia! Aș vrea un site.",
    direct: "Sau contactează-mă direct",
    form: {
      name: "Nume",
      email: "Email",
      message: "Mesaj",
      placeholder: "Ce ai vrea să construim?",
      send: "Trimite mesajul",
      sending: "Se trimite…",
      success: "Mulțumesc! Mesajul tău a fost trimis — îți răspund curând.",
      error:
        "Ceva n-a mers bine. Te rog scrie-mi direct la lydiagroza@gmail.com.",
      invalid:
        "Completează numele, un email valid și un mesaj de cel puțin 10 caractere.",
    },
  },
  footer: {
    rights: "Brașov, România. Construit cu Next.js.",
    top: "Înapoi sus ↑",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ro };
