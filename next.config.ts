import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` genera la carpeta `out/` que Cloudflare Pages sirve.
  output: "export",
  images: {
    // Requerido con `output: export` (no hay servidor que optimice imágenes).
    unoptimized: true,
  },
  // react-leaflet v5 no es compatible con el doble-montaje de React Strict Mode
  // en desarrollo (provoca "Map container is being reused"). Solo afecta a dev.
  reactStrictMode: false,
  allowedDevOrigins: ["192.168.50.111", "localhost"],
};

export default nextConfig;
