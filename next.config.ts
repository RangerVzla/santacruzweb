// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // genera HTML estático en /out
  images: { unoptimized: true } // desactiva Image Optimization (incompatible con 'export')
};

export default nextConfig;

