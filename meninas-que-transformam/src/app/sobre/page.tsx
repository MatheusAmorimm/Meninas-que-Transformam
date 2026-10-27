import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre o projeto",
  description:
    "Conheça o projeto Meninas que Transformam, iniciativa da PUC-SP com o Instituto Pedro Henrique para apoiar mulheres na tecnologia.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        titulo="Sobre o projeto"
        descricao="Meninas que Transformam é uma iniciativa de apoio à inserção de mulheres na tecnologia."
      />

      <section className="container-page grid gap-8 py-12 md:grid-cols-3">
        <Card as="article">
          <h2 className="text-xl font-semibold">Nossa missão</h2>
          <p className="mt-2 text-ink/80">
            Encurtar a distância entre mulheres e as carreiras de tecnologia,
            oferecendo informação clara, orientação e acolhimento para quem quer
            começar.
          </p>
        </Card>
        <Card as="article">
          <h2 className="text-xl font-semibold">Por que isso importa</h2>
          <p className="mt-2 text-ink/80">
            A tecnologia transforma o mundo, mas as mulheres ainda são minoria na
            área. Representatividade abre portas e inspira novas gerações.
          </p>
        </Card>
        <Card as="article">
          <h2 className="text-xl font-semibold">Como ajudamos</h2>
          <p className="mt-2 text-ink/80">
            Reunimos um quiz de carreira, orientações sobre o que as vagas pedem,
            cursos gratuitos e bolsas de estudo, tudo em um só lugar.
          </p>
        </Card>
      </section>

      <section className="container-page pb-16">
        <Card className="bg-lilac-light/50">
          <h2 className="text-2xl font-bold">Uma parceria que transforma</h2>
          <p className="mt-3 max-w-3xl text-ink/80">
            O projeto é uma realização da{" "}
            <strong>PUC-SP</strong> em parceria com o{" "}
            <strong>Instituto Pedro Henrique</strong>, unindo educação e impacto
            social para apoiar mais mulheres na tecnologia.
          </p>
          <div className="mt-6">
            <LinkButton href="/parceiros" variant="secondary">
              Conhecer os parceiros
            </LinkButton>
          </div>
        </Card>
      </section>
    </>
  );
}
