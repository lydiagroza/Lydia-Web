"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  {
    label: "Email",
    href: "mailto:lydiagroza@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/lydiagroza",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lydiagroza/",
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-mono text-sm text-teal mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Need a website?
        </h2>
        <p className="text-muted text-lg mb-10">
          I build those. If you or someone you know needs a site built,
          email me and let&apos;s talk about it. Also happy to hear about
          internships, collabs, or anything else code-related.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noreferrer"}
              className="group flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-teal hover:text-teal"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
