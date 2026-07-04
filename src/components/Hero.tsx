"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "./icons";

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
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center"
      >
        <motion.div variants={item} className="relative mb-7 h-24 w-24 sm:h-28 sm:w-28">
          <Image
            src="https://avatars.githubusercontent.com/u/131545909?v=4"
            alt="Lydia Groza"
            fill
            sizes="112px"
            className="rounded-full border border-border object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl font-semibold tracking-tight text-foreground"
        >
          Lydia Groza
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

        <motion.div variants={item} className="mt-8 flex items-center gap-3">
          <a
            href="#projects"
            className="rounded-md border border-foreground px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            See my work
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
    </section>
  );
}
