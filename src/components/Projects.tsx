"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-teal mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Things I&apos;ve built
          </h2>
          <p className="max-w-xl text-muted text-lg mb-12">
            A few of the ones I&apos;d actually want you to look at.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/lydiagroza"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-teal hover:decoration-teal"
          >
            See everything else on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
