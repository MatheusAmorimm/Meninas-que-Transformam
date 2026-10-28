/**
 * Configuração do Next.js com cabeçalhos de segurança.
 *
 * O site é estático e informativo (sem backend, sem coleta de dados), então a
 * CSP pode ser restritiva. Permitimos apenas o necessário para Next + next/font
 * (Google Fonts) e estilos inline usados pelo framework.
 */

const isDev = process.env.NODE_ENV !== "production";

/**
 * Em desenvolvimento o Next injeta scripts inline (bootstrap de hidratação),
 * usa eval para o HMR/React Refresh e abre WebSocket para live-reload. Uma CSP
 * estrita quebra isso: o HTML do SSR aparece (flash) e logo a hidratação falha,
 * deixando a tela branca. Por isso usamos uma CSP permissiva em dev e mantemos
 * a CSP estrita apenas em produção (onde não há scripts inline do framework).
 */
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self'";

const connectSrc = isDev
  ? "connect-src 'self' ws: wss:"
  : "connect-src 'self'";

const directives = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  connectSrc,
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
];

// upgrade-insecure-requests força https; em dev (http://localhost) atrapalha.
if (!isDev) {
  directives.push("upgrade-insecure-requests");
}

const contentSecurityPolicy = directives.join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // HSTS só em produção: em http://localhost forçaria https e quebraria o dev.
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Comprime as respostas HTML/JS/CSS (gzip) servidas pelo Next.
  compress: true,
  experimental: {
    // Tree-shaking mais agressivo de pacotes com muitos exports.
    optimizePackageImports: ["next/font"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
