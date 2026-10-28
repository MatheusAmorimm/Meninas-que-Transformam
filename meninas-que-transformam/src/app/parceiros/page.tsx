import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { PARTNERS } from "@/data/partners";

export const metadata: Metadata = {
  title: "Parceiros",
  description:
    "Instituições que realizam o projeto Meninas que Transformam: PUC-SP e Instituto Pedro Henrique.",
};

export default function ParceirosPage() {
  return (
    <>
      <PageHeader
        titulo="Parceiros"
        descricao="Instituições que tornam o projeto possível."
      />

      <section className="container-page py-12">
        <ul className="grid gap-6 md:grid-cols-2">
          {PARTNERS.map((partner) => (
            <Card as="li" key={partner.id} className="flex gap-4">
              {/* Espaço reservado para o logo (uso futuro) */}
              <div
                aria-hidden="true"
                className="h-16 w-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-lilac to-blush transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
              />
              <div>
                <h2 className="text-xl font-semibold">{partner.nome}</h2>
                <p className="mt-1 text-ink/80">{partner.descricao}</p>
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-lilac-dark underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    Visitar site oficial
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </Card>
          ))}
        </ul>
      </section>
    </>
  );
}
