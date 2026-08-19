"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_50%,rgba(122,7,16,0.06),transparent)]" />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(122,7,16,1) 1px, transparent 1px), linear-gradient(90deg, rgba(122,7,16,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          {/* Launch badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="secondary"
              size="sm"
              className="gap-2 border border-accent/20 bg-accent/5 text-accent hover:bg-accent/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Nuevo proyecto lanzado
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Main headline */}
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-bold tracking-tighter md:text-7xl lg:text-[80px] lg:leading-[1.05]"
            >
              <span className="block text-center">Diseño experiencias</span>
              <span className="block text-center">
                que{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-accent via-[#b31122] to-accent bg-clip-text text-transparent">
                    importan
                  </span>
                  <motion.span
                    className="absolute bottom-1 left-0 h-3 w-full bg-accent/10 md:bottom-2 md:h-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted md:text-xl"
            >
              Creando interfaces intuitivas y visualmente impactantes que conectan
              marcas con sus usuarios a través del diseño centrado en las personas.
            </motion.p>
          </div>

          {/* Animated word ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-10 w-full overflow-hidden text-center md:h-12"
          >
            <span className="text-base font-medium tracking-wide text-muted-foreground md:text-lg">
              Experiencias{" "}
            </span>
            <span className="relative inline-flex h-full w-[200px] overflow-hidden align-bottom text-base font-semibold text-foreground md:w-[260px] md:text-lg">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 top-0 font-semibold"
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row gap-3"
          >
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-accent/30 hover:border-accent hover:bg-accent/5"
            >
              Ver proyectos
              <MoveRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="gap-2 bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/25"
            >
              Contactar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted p-1"
            >
              <motion.div className="h-1.5 w-1.5 rounded-full bg-accent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
