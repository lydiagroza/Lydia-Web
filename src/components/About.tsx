"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";
import SectionHeading from "./SectionHeading";
import type { Dictionary } from "@/i18n/dictionaries";

const skills = [
  "C++",
  "Java",
  "Python",
  "TypeScript",
  "C#",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "SQL Server",
  "Docker",
  "FastAPI",
  "HTML5",
  "CSS3",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <div className="mt-6 space-y-4 text-muted text-lg leading-relaxed">
            {[t.p1, t.p2].map(([before, highlight, after]) => (
              <p key={highlight}>
                {before}
                <span className="text-foreground">{highlight}</span>
                {after}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <p className="font-mono text-sm text-muted mb-4">{t.stack}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
