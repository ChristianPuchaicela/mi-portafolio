"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wellperf",
    category: "Sitio web",
    description: "Diseño y desarrollo de un sitio web para Wellperf, una empresa dedicada a la venta de productos de wellness. Experiencia de usuario intuitiva y atractiva que refleja la calidad de los servicios.",
    tags: ["UX Research", "UI Design", "Prototyping", "Web Design"],
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accentColor: "bg-blue-500",
    year: "2026",
    image: "/images/projects/wellperf.png",
    span: "sm:col-span-2 md:col-span-3",
  },
  {
    id: 2,
    title: "Sistema de gestión de aplicaciones",
    category: "Sistema de gestión de aplicaciones",
    description: "Rediseño de un sistema de gestión de aplicaciones.",
    tags: ["UX/UI Design", "Prototyping"],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "bg-emerald-500",
    year: "2026",
    image: "/images/projects/sistema-wellperf.png",
    span: "md:col-span-3",
  },
  // {
  //   id: 3,
  //   title: "EcoMarket",
  //   category: "E-commerce",
  //   description: "Marketplace sostenible con enfoque en la experiencia de compra y confianza del usuario.",
  //   tags: ["Brand", "Web Design", "System"],
  //   gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
  //   accentColor: "bg-amber-500",
  //   year: "2026",
  //   image: "/images/projects/ecomarket.png",
  //   span: "md:col-span-2",
  // },
  // {
  //   id: 4,
  //   title: "Sistema de gestión de proyectos",
  //   category: "EdTech",
  //   description: "Plataforma de aprendizaje virtual con gamificación para mejorar el engagement estudiantil.",
  //   tags: ["UX Strategy", "Gamification", "UI"],
  //   gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
  //   accentColor: "bg-violet-500",
  //   year: "2026",
  //   image: "/images/projects/sistema-wellperf.png",
  //   span: "md:col-span-2",
  // },
  // {
  //   id: 5,
  //   title: "TaskFlow",
  //   category: "Productividad",
  //   description: "App de gestión de proyectos para equipos remotos. Maximizar productividad sin sacrificar UX.",
  //   tags: ["Mobile App", "Dashboard", "Prototyping"],
  //   gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
  //   accentColor: "bg-rose-500",
  //   year: "2026",
  //   image: "/images/projects/taskflow.png",
  //   span: "md:col-span-2",
  // },
];

function ProjectCard({ project, index, isInView }: {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
      whileHover={{ y: -5 }}
      className={`apple-card group cursor-pointer overflow-hidden ${project.span} transition-all hover:shadow-xl hover:shadow-accent/5`}
    >
      {/* ── Image preview ── */}
      <div
        className="relative h-48 w-full overflow-hidden"
        style={{ background: "var(--border)" }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 to-black/10 pointer-events-none" />

        {/* Placeholder letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`select-none font-heading text-8xl font-bold opacity-10 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}>
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Project screenshot */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`Preview de ${project.title}`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Year + arrow badges */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-foreground/60 backdrop-blur-sm shadow-sm">
            {project.year}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-foreground/30 shadow-sm backdrop-blur-sm transition-all group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight size={13} />
          </div>
        </div>
      </div>

      {/* ── Text content ── */}
      <div className="p-4 sm:p-5">
        {/* Category */}
        <div className="mb-2 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${project.accentColor}`} />
          <span className="text-[11px] font-medium text-muted uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent sm:text-base">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-3 text-xs leading-relaxed text-muted line-clamp-2 sm:text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface px-2.5 py-1 text-[10px] font-medium text-muted border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="proyectos" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <span className="section-label">Proyectos</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trabajo seleccionado
          </h2>
        </motion.div>

        {/* Grid — sin row-span, alturas naturales */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
