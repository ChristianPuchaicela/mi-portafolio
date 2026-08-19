import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Christian Puchaicela — Diseñador UX/UI",
  description:
    "Portafolio de diseño UX/UI. Creo experiencias digitales que conectan personas con productos mediante diseño centrado en el usuario.",
  keywords: [
    "UX",
    "UI",
    "diseño",
    "portafolio",
    "diseñador",
    "Figma",
    "prototipado",
  ],
  authors: [{ name: "Christian Puchaicela" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7A0710",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
