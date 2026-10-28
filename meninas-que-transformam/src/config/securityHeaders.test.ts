import { describe, expect, it } from "vitest";
import {
  buildContentSecurityPolicy,
  buildSecurityHeaders,
} from "./securityHeaders.mjs";

/** Separa a CSP em { diretiva: fontes[] }. */
function parseCsp(csp: string): Record<string, string[]> {
  return Object.fromEntries(
    csp
      .split(";")
      .map((directive) => directive.trim())
      .filter(Boolean)
      .map((directive) => {
        const [name, ...sources] = directive.split(/\s+/);
        return [name, sources];
      }),
  );
}

/**
 * Diz se o navegador executaria um <script> inline sob esta CSP. Pela
 * especificação, 'unsafe-inline' é ignorado quando a diretiva também tem
 * nonce, hash ou 'strict-dynamic'.
 */
function allowsInlineScripts(csp: string): boolean {
  const directives = parseCsp(csp);
  const sources = directives["script-src"] ?? directives["default-src"] ?? [];
  const disablesUnsafeInline = sources.some(
    (source) =>
      /^'(nonce|sha256|sha384|sha512)-/.test(source) ||
      source === "'strict-dynamic'",
  );
  return sources.includes("'unsafe-inline'") && !disablesUnsafeInline;
}

describe("Content-Security-Policy de produção", () => {
  const csp = buildContentSecurityPolicy({ isDev: false });

  it("permite os scripts inline que o App Router do Next usa para montar a página", () => {
    // Bloqueá-los deixa o site em branco: a hidratação nunca acontece.
    expect(allowsInlineScripts(csp)).toBe(true);
  });

  it("não permite eval, que só o modo dev precisa", () => {
    expect(parseCsp(csp)["script-src"]).not.toContain("'unsafe-eval'");
  });

  it("não autoriza nenhuma origem externa", () => {
    // next/font serve as fontes do próprio domínio; nada vem de terceiros.
    const sources = Object.values(parseCsp(csp)).flat();
    const external = sources.filter(
      (source) => !source.startsWith("'") && !["data:", "blob:"].includes(source),
    );
    expect(external).toEqual([]);
  });
});

describe("Content-Security-Policy de desenvolvimento", () => {
  it("permite o que o React Refresh e o live-reload precisam", () => {
    const directives = parseCsp(buildContentSecurityPolicy({ isDev: true }));
    expect(allowsInlineScripts(buildContentSecurityPolicy({ isDev: true }))).toBe(true);
    expect(directives["script-src"]).toContain("'unsafe-eval'");
    expect(directives["connect-src"]).toContain("ws:");
  });
});

describe("Strict-Transport-Security", () => {
  const hsts = (isDev: boolean) =>
    buildSecurityHeaders({ isDev }).find(
      (header) => header.key === "Strict-Transport-Security",
    );

  it("é enviado em produção", () => {
    expect(hsts(false)?.value).toMatch(/max-age=\d+/);
  });

  it("não é enviado em dev, onde o site roda em http://localhost", () => {
    expect(hsts(true)).toBeUndefined();
  });
});
