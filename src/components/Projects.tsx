"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import type { ProjectView } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects({
  t,
  projects,
}: {
  t: Dictionary["projects"];
  projects: ProjectView[];
}) {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
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
            className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {t.more}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
