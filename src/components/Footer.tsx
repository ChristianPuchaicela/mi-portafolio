"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink, Mail, Phone } from "lucide-react";

const socialLinks = [
  { icon: Globe, href: "https://www.linkedin.com/in/christian-puchaicela-065421395", label: "LinkedIn" },
  { icon: ExternalLink, href: "#", label: "Dribbble" },
  { icon: Mail, href: "[EMAIL_ADDRESS]", label: "Email" },
  { icon: Phone, href: "+593 99 344 7232", label: "Teléfono" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("inicio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-base font-semibold tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
          </motion.a>

          {/* Social links */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-black transition-all hover:border-accent hover:text-accent hover:shadow-sm"
                aria-label={link.label}
              >
                <link.icon size={16} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-black">
            © {new Date().getFullYear()} Christian Puchaicela
          </p>
        </div>
      </div>
    </footer>
  );
}
