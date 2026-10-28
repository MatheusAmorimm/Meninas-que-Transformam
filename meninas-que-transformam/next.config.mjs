/**
 * Configuração do Next.js com cabeçalhos de segurança.
 *
 * Os cabeçalhos (CSP, HSTS etc.) são montados em
 * src/config/securityHeaders.mjs, onde também estão documentados e testados.
 */
import { buildSecurityHeaders } from "./src/config/securityHeaders.mjs";

const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Comprime as respostas HTML/JS/CSS (gzip) servidas pelo Next.
  compress: true,
  images: {
    // O otimizador de imagens (/_next/image) só processa os PNGs locais do
    // site, sem query string e numa única qualidade. Isso evita que ele seja
    // usado para buscar outras rotas ou para gerar variações sem fim no cache.
    // Para novas imagens em outras pastas/formatos, amplie o padrão.
    localPatterns: [{ pathname: "/*.png", search: "" }],
    qualities: [75],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: buildSecurityHeaders({ isDev }),
      },
    ];
  },
};

export default nextConfig;
