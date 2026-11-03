export const locales = ["en", "ro"] as const;
export type Locale = (typeof locales)[number];

// Path of the home page for each locale (trailingSlash is on).
export const localePath: Record<Locale, string> = { en: "/", ro: "/ro/" };

// Path of the free-quote page for each locale.
export const quotePath: Record<Locale, string> = { en: "/quote/", ro: "/ro/oferta/" };

// Where the quote form lands after sending. A page of its own, so analytics
// can count sent requests as page views.
export const thanksPath: Record<Locale, string> = {
  en: "/quote/thanks/",
  ro: "/ro/oferta/multumesc/",
};

// Path of the privacy page for each locale.
export const privacyPath: Record<Locale, string> = {
  en: "/privacy/",
  ro: "/ro/confidentialitate/",
};

const en = {
  meta: {
    title: "Lydia Groza — Web Developer in Brașov",
    description:
      "Freelance web developer in Brașov. Fast, modern websites for businesses — designed for phones and set up to be found on Google. Get a free quote.",
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
    cta: "Get a free quote",
  },
  hero: {
    badge: "Taking on new projects",
    name: "Lydia Groza · Web developer in Brașov",
    // The middle part gets the animated highlight.
    title: ["Get a ", "free quote", " for your website"],
    intro:
      "I design and build fast, modern websites for businesses — so people find you on Google, see what you offer, and get in touch.",
    ctaContact: "Get a free quote",
    ctaWork: "See my work",
    direct: "Or reach me directly",
    whatsapp: "WhatsApp",
    whatsappText: "Hi Lydia! I'm interested in a website.",
    call: "Call",
    email: "Email",
    scroll: "Scroll to services",
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
    cta: "Get a free quote",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      type: "What do you need?",
      other: "Something else",
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
  quote: {
    meta: {
      title: "Get a free quote — Lydia Groza",
      description:
        "Tell me about your business and the website you need, and I'll reply with a free, no-obligation quote.",
    },
    back: "Back to site",
    eyebrow: "Free quote",
    title: "Let's talk about your website",
    lead: "Tell me a bit about your business and what you need. I'll reply with a free, no-obligation quote.",
    thanks: {
      title: "Thanks — your request is on its way",
      body: "I'll get back to you soon with your free quote. If it's urgent, message me on WhatsApp.",
      home: "Back to the site",
    },
  },
  footer: {
    rights: "Brașov, Romania. Built with Next.js.",
    top: "Back to top ↑",
    privacy: "Privacy",
    privacyHref: privacyPath.en,
    cookies: "Cookie settings",
  },
  consent: {
    label: "Cookie consent",
    text: "May I use Google Analytics cookies to see how visitors use this site? They only load if you accept.",
    privacy: "Privacy policy",
    accept: "Accept",
    decline: "Decline",
  },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: 3 November 2026",
    sections: [
      {
        heading: "Who is responsible",
        body: [
          "This site is run by Lydia Groza, a web developer based in Brașov, Romania. For anything about your data, email lydiagroza@gmail.com.",
        ],
      },
      {
        heading: "The contact form",
        body: [
          "The form collects your name, email address, optional phone number, the kind of project you need and your message. They reach me by email, so I can reply and prepare the quote you asked for. The legal basis is taking the steps you request before a possible contract.",
          "I don't use these details for marketing. I keep them only as long as needed to answer you and for any work that follows, unless the law requires longer.",
          "To limit spam, the server also keeps a hashed form of your IP address with the times of your recent submissions.",
        ],
      },
      {
        heading: "Google Analytics",
        body: [
          "Only if you accept, this site uses Google Analytics 4, provided by Google Ireland Limited, to measure visits. It sets cookies (_ga and _ga_*) and collects the pages you view, how you reached the site, your device and browser type and your approximate location. The legal basis is your consent.",
          "Google may process this data outside the EU, including in the United States. Analytics data is kept for 2 months. If you decline, Google Analytics doesn't load at all.",
          "You can change your choice at any time through “Cookie settings” at the bottom of each page.",
        ],
      },
      {
        heading: "Storage in your browser",
        body: [
          "Your browser's local storage remembers your cookie choice, and its session storage remembers that the intro animation has already played. Neither is used to track you.",
        ],
      },
      {
        heading: "Service providers",
        body: [
          "The site is hosted by InMotion Hosting and delivered through Cloudflare, which process technical data such as IP addresses to serve pages. Form messages are sent through the host's mail service and MailChannels and arrive in my Gmail account, provided by Google.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask to access, correct or delete your data, to restrict or object to its processing, or to receive a copy of it. Where processing relies on consent, you can withdraw it at any time.",
          "You can also complain to the Romanian data protection authority, ANSPDCP (dataprotection.ro).",
        ],
      },
    ],
  },
};

export type Dictionary = typeof en;

const ro: Dictionary = {
  meta: {
    title: "Lydia Groza — Dezvoltator web în Brașov",
    description:
      "Dezvoltator web freelance în Brașov. Creez site-uri rapide și moderne pentru afaceri, gândite pentru telefon și ușor de găsit pe Google. Cere o ofertă gratuită.",
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
    cta: "Cere o ofertă gratuită",
  },
  hero: {
    badge: "Accept proiecte noi",
    name: "Lydia Groza · Dezvoltator web în Brașov",
    title: ["Cere o ", "ofertă gratuită", " pentru site-ul tău"],
    intro:
      "Creez site-uri rapide și moderne pentru afaceri — ca oamenii să te găsească pe Google, să vadă ce oferi și să te contacteze.",
    ctaContact: "Cere o ofertă gratuită",
    ctaWork: "Vezi site-urile",
    direct: "Sau contactează-mă direct",
    whatsapp: "WhatsApp",
    whatsappText: "Bună, Lydia! Aș vrea un site.",
    call: "Sună",
    email: "Email",
    scroll: "Derulează la servicii",
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
    cta: "Cere o ofertă gratuită",
    form: {
      name: "Nume",
      email: "Email",
      phone: "Telefon (opțional)",
      type: "De ce ai nevoie?",
      other: "Altceva",
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
  quote: {
    meta: {
      title: "Cere o ofertă gratuită — Lydia Groza",
      description:
        "Spune-mi despre afacerea ta și de ce site ai nevoie, iar eu îți trimit o ofertă gratuită, fără obligații.",
    },
    back: "Înapoi la site",
    eyebrow: "Ofertă gratuită",
    title: "Hai să vorbim despre site-ul tău",
    lead: "Spune-mi câteva lucruri despre afacerea ta și de ce ai nevoie. Îți răspund cu o ofertă gratuită, fără obligații.",
    thanks: {
      title: "Mulțumesc — cererea ta a fost trimisă",
      body: "Îți răspund curând cu oferta gratuită. Dacă e urgent, scrie-mi pe WhatsApp.",
      home: "Înapoi la site",
    },
  },
  footer: {
    rights: "Brașov, România. Construit cu Next.js.",
    top: "Înapoi sus ↑",
    privacy: "Confidențialitate",
    privacyHref: privacyPath.ro,
    cookies: "Setări cookie",
  },
  consent: {
    label: "Consimțământ cookie",
    text: "Îmi permiți să folosesc cookie-uri Google Analytics ca să văd cum este folosit site-ul? Se încarcă doar dacă accepți.",
    privacy: "Politica de confidențialitate",
    accept: "Accept",
    decline: "Refuz",
  },
  privacy: {
    title: "Politica de confidențialitate",
    updated: "Ultima actualizare: 3 noiembrie 2026",
    sections: [
      {
        heading: "Cine este responsabil",
        body: [
          "Acest site este administrat de Lydia Groza, dezvoltator web din Brașov, România. Pentru orice întrebare despre datele tale, scrie-mi la lydiagroza@gmail.com.",
        ],
      },
      {
        heading: "Formularul de contact",
        body: [
          "Formularul colectează numele, adresa de email, numărul de telefon (opțional), tipul de proiect și mesajul tău. Acestea ajung la mine prin email, ca să îți pot răspunde și pregăti oferta cerută. Temeiul legal este efectuarea demersurilor pe care le soliciți înaintea unui posibil contract.",
          "Nu folosesc aceste date pentru marketing. Le păstrez doar cât este nevoie ca să îți răspund și pentru eventuala colaborare care urmează, cu excepția cazului în care legea cere o perioadă mai lungă.",
          "Pentru a limita spamul, serverul păstrează și o formă hash a adresei tale IP, împreună cu momentele în care ai trimis recent formularul.",
        ],
      },
      {
        heading: "Google Analytics",
        body: [
          "Doar dacă accepți, acest site folosește Google Analytics 4, furnizat de Google Ireland Limited, pentru a măsura vizitele. Serviciul setează cookie-uri (_ga și _ga_*) și colectează paginile vizualizate, modul în care ai ajuns pe site, tipul de dispozitiv și browser și locația aproximativă. Temeiul legal este consimțământul tău.",
          "Google poate prelucra aceste date în afara UE, inclusiv în Statele Unite. Datele de analiză sunt păstrate 2 luni. Dacă refuzi, Google Analytics nu se încarcă deloc.",
          "Îți poți schimba oricând alegerea din „Setări cookie”, în partea de jos a fiecărei pagini.",
        ],
      },
      {
        heading: "Stocarea în browser",
        body: [
          "Stocarea locală a browserului reține alegerea ta privind cookie-urile, iar stocarea de sesiune reține că animația de început a rulat deja. Niciuna nu este folosită pentru a te urmări.",
        ],
      },
      {
        heading: "Furnizori de servicii",
        body: [
          "Site-ul este găzduit de InMotion Hosting și livrat prin Cloudflare, care prelucrează date tehnice, precum adresele IP, pentru a afișa paginile. Mesajele din formular sunt trimise prin serviciul de email al gazdei și MailChannels și ajung în contul meu de Gmail, furnizat de Google.",
        ],
      },
      {
        heading: "Drepturile tale",
        body: [
          "Poți cere accesul la datele tale, corectarea sau ștergerea lor, restricționarea prelucrării, te poți opune prelucrării sau poți primi o copie a datelor. Când prelucrarea se bazează pe consimțământ, îl poți retrage oricând.",
          "De asemenea, poți depune o plângere la autoritatea română de protecție a datelor, ANSPDCP (dataprotection.ro).",
        ],
      },
    ],
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ro };
