"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Lightbulb, Users, Zap, ArrowUpRight } from "lucide-react";

const stats = [
  { number: "5+", label: "Años de experiencia" },
  { number: "40+", label: "Proyectos completados" },
  { number: "25+", label: "Clientes satisfechos" },
];

const values = [
  {
    icon: Palette,
    title: "Diseño con propósito",
    description: "Cada elemento visual tiene una razón de ser. Creo en el diseño que comunica y resuelve problemas.",
  },
  {
    icon: Lightbulb,
    title: "Pensamiento estratégico",
    description: "No solo diseño pantallas, creo soluciones que alinean objetivos de negocio con necesidades del usuario.",
  },
  {
    icon: Users,
    title: "Centrado en el usuario",
    description: "Investigo, testeo y itero para asegurar que cada interacción sea intuitiva y significativa.",
  },
  {
    icon: Zap,
    title: "Innovación continua",
    description: "Me mantengo actualizado con las últimas tendencias para ofrecer soluciones vanguardistas.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sobre-mi" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <span className="section-label">Sobre mí</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Creo en el poder del
            <br />
            <span className="gradient-text">diseño centrado en las personas</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          {/* Bio - spans 4 cols on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="apple-card group relative overflow-hidden p-6 md:col-span-4 md:p-8"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.03] blur-[60px] transition-all group-hover:bg-accent/[0.06]" />
            <p className="relative text-base leading-relaxed text-muted sm:text-lg">
              Soy un diseñador UX/UI apasionado por crear experiencias digitales
              que no solo se ven increíbles, sino que realmente funcionan. Con más
              de 5 años de experiencia, he trabajado con startups y empresas
              establecidas para transformar ideas en productos digitales exitosos.
            </p>
            <p className="relative mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Mi enfoque combina investigación de usuarios, diseño visual y
              prototipado rápido para crear soluciones que escalan.
            </p>
          </motion.div>

          {/* Stats - spans 2 cols on md+; horizontal row on mobile */}
          <div className="grid grid-cols-3 gap-3 md:col-span-2 md:grid-cols-1">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, x: -4 }}
                className="apple-card flex flex-col items-start gap-1 p-4 transition-all hover:shadow-md hover:shadow-accent/5 sm:flex-row sm:items-center sm:gap-4 sm:p-5"
              >
                <span className="text-2xl font-bold gradient-text sm:text-3xl">{stat.number}</span>
                <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Values - 2x2 bento grid */}
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ scale: 1.01, y: -4 }}
              className="apple-card group relative overflow-hidden p-5 md:col-span-3 md:p-6"
            >
              <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-accent/[0.03] blur-[40px] transition-all group-hover:bg-accent/[0.06]" />
              <div className="relative flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-white">
                  <value.icon size={18} strokeWidth={1.5} />
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-border transition-all group-hover:text-accent"
                />
              </div>
              <h3 className="relative mt-3 text-sm font-semibold text-foreground sm:text-base">
                {value.title}
              </h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
