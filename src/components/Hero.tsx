"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useIntro } from "./IntroProvider";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const { ready } = useIntro();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="flex flex-col items-center"
      >
        <motion.div variants={item} className="relative mb-7">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full bg-teal/20 blur-2xl"
          />
          <div className="relative h-24 w-24 sm:h-28 sm:w-28">
            <Image
              src="/avatar.jpg"
              alt="Lydia Groza"
              fill
              sizes="112px"
              className="rounded-full border border-foreground/20 object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-5 flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-4 py-1.5 text-xs font-medium text-teal"
        >
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-teal motion-safe:animate-pulse"
          />
          Open to freelance & internships
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground"
        >
          Lydia Groza<span className="text-teal">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-lg text-balance text-lg text-muted"
        >
          Computer science student in Brașov, Romania. I build AI tools,
          full-stack apps, and the occasional piece of hardware — and I take
          on freelance website projects, so if you need one built, that&apos;s
          me.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="whitespace-nowrap rounded-md bg-teal px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-teal/85"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="whitespace-nowrap rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-teal/50 hover:text-teal"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/lydiagroza"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-teal hover:text-teal"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/lydiagroza/"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-teal hover:text-teal"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 text-muted/60 transition-colors hover:text-teal"
      >
        <ChevronDown size={22} className="motion-safe:animate-bounce" />
      </motion.a>
    </section>
  );
}
