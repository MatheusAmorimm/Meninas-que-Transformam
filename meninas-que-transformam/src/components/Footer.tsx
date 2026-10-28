import Link from "next/link";
import { NAV_LINKS } from "@/config/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-lilac-light bg-lilac-light/40">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold text-ink">
            Meninas que Transformam
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink/80">
            Apoiando a inserção de mulheres na tecnologia com informação,
            orientação e acolhimento.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink/70">
            Navegação
          </h2>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink/80 underline-offset-4 hover:text-lilac-dark hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink/70">
            Realização
          </h2>
          <p className="mt-3 text-sm text-ink/80">
            Projeto oficial da{" "}
            <span className="font-semibold text-ink">PUC-SP</span> em parceria
            com o{" "}
            <a
              href="https://institutopedrohenrique.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lilac-dark underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Instituto Pedro Henrique
            </a>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-lilac-light">
        <p className="container-page py-4 text-center text-xs text-ink/60">
          © {year} Meninas que Transformam. Este site é informativo e não coleta
          dados pessoais.
        </p>
      </div>
    </footer>
  );
}
