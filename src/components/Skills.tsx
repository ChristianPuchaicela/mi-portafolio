"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Diseño UX",
    color: "from-accent/10 to-transparent",
    skills: [
      { name: "User Research", level: 95 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 92 },
      { name: "Usability Testing", level: 88 },
      { name: "Design Thinking", level: 94 },
    ],
  },
  {
    title: "Diseño UI",
    color: "from-violet-500/10 to-transparent",
    skills: [
      { name: "Visual Design", level: 93 },
      { name: "Design Systems", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Motion Design", level: 85 },
      { name: "Iconography", level: 82 },
    ],
  },
  {
    title: "Herramientas",
    color: "from-emerald-500/10 to-transparent",
    skills: [
      { name: "Figma", level: 98 },
      { name: "Adobe XD", level: 88 },
      { name: "Sketch", level: 80 },
      { name: "After Effects", level: 75 },
      { name: "Principle", level: 78 },
    ],
  },
];

const tools = [
  "Figma", "FigJam", "Miro", "Notion", "Slack",
  "Jira", "Zeplin", "Abstract", "InVision", "Maze",
  "Hotjar", "Google Analytics",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="habilidades" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <span className="section-label">Habilidades</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Mi conjunto de
            <br />
            <span className="gradient-text">habilidades</span>
          </h2>
        </motion.div>

        {/* Bento grid for skills */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + catIndex * 0.1 }}
              className="apple-card group relative overflow-hidden p-5 md:p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <h3 className="relative mb-5 text-sm font-semibold text-foreground uppercase tracking-wider sm:text-base">
                {category.title}
              </h3>
              <div className="relative space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + catIndex * 0.1 + skillIndex * 0.06,
                    }}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-border"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name}: ${skill.level}%`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5 + catIndex * 0.1 + skillIndex * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools - horizontal scrolling pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-3"
        >
          <div className="apple-card p-5 md:p-6">
            <h3 className="mb-4 text-xs font-semibold text-muted uppercase tracking-wider sm:text-sm">
              Herramientas que uso
            </h3>
            <div
              className="flex flex-wrap gap-2"
              role="list"
              aria-label="Lista de herramientas"
            >
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                  role="listitem"
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="cursor-default rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground hover:shadow-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
