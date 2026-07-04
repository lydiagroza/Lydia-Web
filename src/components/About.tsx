"use client";

import { motion } from "framer-motion";

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
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <p className="font-mono text-sm text-teal mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            A little about me
          </h2>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              I&apos;m a computer science student at{" "}
              <span className="text-foreground">
                Transilvania University of Brașov
              </span>
              . Most of my coursework and side projects land somewhere
              between AI tooling, full-stack web apps, and lower-level
              systems work — whatever a project needs. I also build websites
              on the side, so if you or someone you know needs one, that&apos;s
              a project I&apos;d take on.
            </p>
            <p>
              Outside of that, I&apos;m usually out with my dog{" "}
              <span className="text-foreground">Bailey</span>, who has
              strong opinions about frisbees.
            </p>
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
          <p className="font-mono text-sm text-muted mb-4">Stack I reach for</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
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
