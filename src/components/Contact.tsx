"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Calendar, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32 bg-surface">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <span className="section-label">Contacto</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trabajemos
            <br />
            <span className="gradient-text">juntos</span>
          </h2>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="apple-card group relative overflow-hidden p-6 md:row-span-2 md:p-8"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent/[0.04] blur-[60px] transition-all group-hover:bg-accent/[0.08]" />
            <p className="relative mb-6 text-base leading-relaxed text-muted sm:mb-8 sm:text-lg">
              ¿Tienes un proyecto en mente? Cuéntame tu idea y juntos podemos
              crear algo extraordinario.
            </p>

            <div className="relative space-y-5 sm:space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-muted uppercase tracking-wider">
                    Email
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">
                    cg.puchaicela@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted uppercase tracking-wider">
                    Ubicación
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Quito — Ecuador
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                  <Calendar size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-muted uppercase tracking-wider">
                    Disponibilidad
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Tiempo completo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="apple-card p-6 md:col-span-2 md:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle size={48} className="mb-4 text-emerald-500" />
                <h3 className="text-xl font-semibold text-foreground">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Te responderé lo antes posible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-medium text-muted uppercase tracking-wider"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-light focus:border-accent focus:ring-2 focus:ring-accent/10"
                      placeholder="Tu nombre"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-medium text-muted uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-light focus:border-accent focus:ring-2 focus:ring-accent/10"
                      placeholder="tu@email.com"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-medium text-muted uppercase tracking-wider"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-light focus:border-accent focus:ring-2 focus:ring-accent/10"
                      placeholder="Cuéntame sobre tu proyecto..."
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 sm:w-auto sm:px-8"
                >
                  <span>Enviar mensaje</span>
                  <Send size={15} strokeWidth={1.5} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
