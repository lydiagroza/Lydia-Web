import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Websites from "@/components/Websites";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import IntroProvider from "@/components/IntroProvider";
import IntroSplash from "@/components/IntroSplash";
import SmoothScroll from "@/components/SmoothScroll";
import { dictionaries, localePath, quotePath, type Locale } from "@/i18n/dictionaries";
import { localizeProject, projects } from "@/data/projects";
import { localizeWebsite, websites } from "@/data/websites";
import { siteUrl } from "@/lib/site";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  // Lets Google show the business (name, location, contact) in results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lydia Groza — Web Development",
    url: `${siteUrl}${localePath[locale]}`,
    description: t.meta.description,
    image: `${siteUrl}/avatar.jpg`,
    email: "lydiagroza@gmail.com",
    telephone: "+40723040958",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brașov",
      addressCountry: "RO",
    },
    areaServed: "RO",
    founder: {
      "@type": "Person",
      name: "Lydia Groza",
      sameAs: [
        "https://github.com/lydiagroza",
        "https://www.linkedin.com/in/lydiagroza/",
      ],
    },
  };

  return (
    <IntroProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IntroSplash />
      <SmoothScroll />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.13),transparent_70%)]"
      />
      <ParticleField />
      <Nav locale={locale} t={t.nav} />
      <main className="flex-1">
        <Hero t={t.hero} quoteHref={quotePath[locale]} />
        <Services t={t.services} />
        <Websites
          t={t.websites}
          websites={websites.map((w) => localizeWebsite(w, locale))}
        />
        <Projects
          t={t.projects}
          projects={projects.map((p) => localizeProject(p, locale))}
        />
        <About t={t.about} />
        <Contact t={t.contact} quoteHref={quotePath[locale]} />
      </main>
      <Footer t={t.footer} />
    </IntroProvider>
  );
}
