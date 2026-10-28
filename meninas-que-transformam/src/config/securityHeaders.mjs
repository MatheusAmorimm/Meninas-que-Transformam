/**
 * Cabeçalhos HTTP de segurança do site, aplicados pelo next.config.mjs.
 *
 * Ficam neste módulo (e não direto no next.config.mjs) para poderem ser
 * testados — ver securityHeaders.test.ts.
 *
 * O site é estático e informativo (sem backend, sem coleta de dados), então a
 * CSP pode ser restritiva: tudo vem do próprio domínio. As fontes também,
 * porque o next/font baixa as do Google no build e as serve localmente.
 */

/**
 * Monta a Content-Security-Policy.
 *
 * Sobre 'unsafe-inline' em script-src: o App Router do Next injeta scripts
 * inline em TODAS as páginas, inclusive em produção (o bootstrap e o payload
 * dos React Server Components em `self.__next_f.push(...)`). Sem permiti-los a
 * hidratação falha e o site fica em branco. A alternativa seria nonce, mas ela
 * obriga a renderizar cada página por requisição — sem HTML estático nem
 * prefetch, a troca de páginas fica lenta. Como o site não renderiza conteúdo
 * vindo de usuárias nem de terceiros, 'unsafe-inline' (abordagem da
 * documentação do Next para sites sem nonce) é o equilíbrio adequado.
 * Em dev, o React Refresh também precisa de eval.
 *
 * @param {{ isDev: boolean }} options
 * @returns {string}
 */
export function buildContentSecurityPolicy({ isDev }) {
  const directives = [
    "default-src 'self'",
    isDev
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      : "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: blob:",
    // Em dev o live-reload usa WebSocket.
    isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
  ];

  // upgrade-insecure-requests força https; em dev (http://localhost) atrapalha.
  if (!isDev) {
    directives.push("upgrade-insecure-requests");
  }

  return directives.join("; ");
}

/**
 * Lista de cabeçalhos no formato esperado por `headers()` do Next.
 *
 * @param {{ isDev: boolean }} options
 * @returns {{ key: string, value: string }[]}
 */
export function buildSecurityHeaders({ isDev }) {
  return [
    {
      key: "Content-Security-Policy",
      value: buildContentSecurityPolicy({ isDev }),
    },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
    // Impede que páginas de outras origens abertas a partir do site (ou que
    // abram o site) acessem esta janela.
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
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
}
