import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import IntroProvider from "@/components/IntroProvider";
import IntroSplash from "@/components/IntroSplash";

export default function Home() {
  return (
    <IntroProvider>
      <IntroSplash />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(45,212,167,0.07),transparent_70%)]"
      />
      <ParticleField />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </IntroProvider>
  );
}
