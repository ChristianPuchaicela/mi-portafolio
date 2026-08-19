"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Layers, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Investigación",
    description: "Entiendo a tus usuarios, analizo la competencia y defino los objetivos del proyecto.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description: "Creo wireframes, prototipos y diseños visuales que resuelven problemas.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Prototipado",
    description: "Construyo prototipos interactivos para testear y validar soluciones antes de la implementacion.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementación",
    description: "Realizo los entregables al equipo de desarrollo para una implementación perfecta.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <span className="section-label">Proceso</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Mi enfoque de
            <br />
            <span className="gradient-text">diseño</span>
          </h2>
        </motion.div>

        {/* Process grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="apple-card group relative overflow-hidden p-5 transition-all hover:shadow-lg hover:shadow-accent/5 md:p-6"
            >
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-accent/[0.03] blur-[40px] transition-all group-hover:bg-accent/[0.06]" />
              <div className="relative flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                  <step.icon size={18} strokeWidth={1.5} />
                </div>
                <span className="text-2xl font-bold text-border/60 transition-colors group-hover:text-accent/100 sm:text-3xl">
                  {step.number}
                </span>
              </div>
              <h3 className="relative mt-4 text-sm font-semibold text-foreground sm:text-base">
                {step.title}
              </h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
