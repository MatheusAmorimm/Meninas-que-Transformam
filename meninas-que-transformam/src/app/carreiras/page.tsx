import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { CAREERS } from "@/data/careers";

export const metadata: Metadata = {
  title: "Carreiras em Tech",
  description:
    "Conheça carreiras em tecnologia como Front-end, Back-end, Dados, UX/Design, QA e DevOps, com as habilidades que cada área pede.",
};

export default function CarreirasPage() {
  return (
    <>
      <PageHeader
        titulo="Carreiras em Tech"
        descricao="Existem muitos caminhos na tecnologia. Conheça alguns deles e veja o que cada um costuma pedir."
      />

      <section className="container-page py-12">
        <ul className="grid gap-6 md:grid-cols-2">
          {CAREERS.map((career) => (
            <Card as="li" key={career.id} className="flex flex-col">
              <h2 className="text-xl font-semibold">{career.nome}</h2>
              <p className="mt-2 text-ink/80">{career.descricao}</p>

              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-lilac-dark">
                Habilidades-chave
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {career.habilidades.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-lilac-light px-3 py-1 text-sm text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <p className="text-ink/80">Não sabe por onde começar?</p>
          <div className="mt-4 flex justify-center">
            <LinkButton href="/quiz">Descobrir com o quiz</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
