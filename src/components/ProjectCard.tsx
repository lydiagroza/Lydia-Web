"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-background/80 p-6 backdrop-blur-sm transition-[border-color,box-shadow] hover:border-teal/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,167,0.25)]"
    >
      {project.featured && (
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal"
        />
      </div>

      {project.badge && (
        <span className="mt-2.5 inline-flex w-fit items-center gap-1.5 rounded-full border border-coral/30 bg-coral/10 px-2.5 py-1 text-xs font-medium text-coral">
          <Trophy size={12} />
          {project.badge}
        </span>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-foreground/5 px-2 py-1 font-mono text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
