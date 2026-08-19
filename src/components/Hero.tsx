"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const words = ["innovadoras", "memorables", "intuitivas", "impactantes"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 h-[300px] w-[300px] rounded-full bg-accent/[0.03] blur-[100px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 h-[250px] w-[250px] rounded-full bg-accent/[0.04] blur-[80px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] md:blur-[100px]"
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-4xl pt-20 text-center sm:pt-24"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[84px]"
        >
          Creo experiencias
          <br />
          digitales{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-accent via-[#b31122] to-accent bg-clip-text text-transparent">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                {words[wordIndex]}
              </motion.span>
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-accent/20 md:-bottom-2 md:h-[3px]"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-7 sm:text-lg md:text-xl"
        >
          Diseñador UX/UI especializado en transformar ideas complejas en
          interfaces elegantes que las personas aman usar.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row"
        >
          <motion.a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(122,7,16,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-accent px-8 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Ver proyectos
          </motion.a>
          <motion.a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-border bg-white/50 px-8 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-accent/5 sm:w-auto"
          >
            Hablemos
          </motion.a>
        </motion.div>

        {/* Skill chips — compact, centered, no grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-14 sm:gap-3"
        >
          {[
            { label: "UX Research", dot: "bg-accent" },
            { label: "UI Design", dot: "bg-violet-500" },
            { label: "Prototyping", dot: "bg-blue-500" },
            { label: "Design Systems", dot: "bg-emerald-500" },
            { label: "User Testing", dot: "bg-amber-500" },
          ].map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.85 + i * 0.07 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/50 px-4 py-2 text-xs font-medium text-muted backdrop-blur-sm transition-all hover:border-accent/25 hover:bg-white/80 hover:text-foreground hover:shadow-sm"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${chip.dot}`} />
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-widest text-light uppercase">
            Scroll
          </span>
          <ArrowDown size={14} className="text-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
