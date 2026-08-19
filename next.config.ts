import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // genera carpeta /out estática
  trailingSlash: true,    // GitHub Pages necesita index.html en cada ruta
  images: {
    unoptimized: true,    // next/image no funciona en exportación estática sin esto
  },
};

export default nextConfig;
