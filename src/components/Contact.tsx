"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-2xl text-center"
      >
        <SectionHeading eyebrow="Contact" title="Need a website?" centered />
        <p className="mt-4 text-muted text-lg mb-10">
          I build those. If you or someone you know needs a site built,
          email, call, or text me and let&apos;s talk about it. Also happy to
          hear about
          internships, collabs, or anything else code-related.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:lydiagroza@gmail.com"
            className="flex items-center gap-2 rounded-md bg-indigo px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-10px_rgba(79,70,229,0.8)] transition-[background-color,box-shadow,translate] hover:-translate-y-px hover:bg-indigo-bright hover:shadow-[0_10px_30px_-8px_rgba(79,70,229,0.9)]"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href="https://github.com/lydiagroza"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lydiagroza/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 font-mono text-sm text-muted">
          <a
            href="mailto:lydiagroza@gmail.com"
            className="transition-colors hover:text-accent"
          >
            lydiagroza@gmail.com
          </a>
          <a
            href="tel:+40723040958"
            className="transition-colors hover:text-accent"
          >
            RO&nbsp;&nbsp;+40 723 040 958
          </a>
          <a
            href="tel:+19202051110"
            className="transition-colors hover:text-accent"
          >
            US&nbsp;&nbsp;+1 (920) 205-1110
          </a>
        </div>
      </motion.div>
    </section>
  );
}
