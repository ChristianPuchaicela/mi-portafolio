"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Transformó nuestra visión en una experiencia digital increíble. Su atención al detalle y comprensión del usuario es excepcional.",
    name: "María García",
    designation: "CEO, TechStart",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    quote:
      "No solo diseñó una interfaz hermosa, sino que mejoró significativamente nuestras métricas de conversión. Un verdadero profesional.",
    name: "Alexander Tibanta",
    designation: "Consultor IT",
    src: "/images/clients/alexander-tibanta.png",
  },
  {
    quote:
      "Su enfoque centrado en el usuario y capacidad para trabajar bajo presión hizo que nuestro proyecto fuera un éxito rotundo.",
    name: "Gabriela Baquero",
    designation: "Coordinadora de Marketing",
    src: "/images/clients/gabriela-baquero.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10 sm:mb-14">
          <span className="section-label">Testimonios</span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Lo que dicen
            <br />
            <span className="gradient-text">mis clientes</span>
          </h2>
        </div>

        {/* Circular Testimonials — responsive font sizes */}
        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#1d1d1f",
              designation: "#5a5a61ff",
              testimony: "#1d1d1f",
              arrowBackground: "#1d1d1f",
              arrowForeground: "#f5f5f7",
              arrowHoverBackground: "#7A0710",
            }}
            fontSizes={{
              name: "clamp(18px, 3vw, 28px)",
              designation: "clamp(13px, 2vw, 18px)",
              quote: "clamp(14px, 2.5vw, 20px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
