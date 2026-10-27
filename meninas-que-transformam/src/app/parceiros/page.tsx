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
                className="h-16 w-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-lilac to-blush"
              />
              <div>
                <h2 className="text-xl font-semibold">{partner.nome}</h2>
                <p className="mt-1 text-ink/80">{partner.descricao}</p>
              </div>
            </Card>
          ))}
        </ul>
      </section>
    </>
  );
}
