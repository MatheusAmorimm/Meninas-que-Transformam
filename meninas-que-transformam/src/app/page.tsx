import Link from "next/link";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const atalhos = [
  {
    href: "/quiz",
    titulo: "Quiz de Carreira",
    texto:
      "Responda 10 perguntas rápidas e descubra qual área de tecnologia mais combina com você.",
  },
  {
    href: "/carreiras",
    titulo: "Carreiras em Tech",
    texto:
      "Conheça diferentes caminhos na tecnologia, com as habilidades que cada um pede.",
  },
  {
    href: "/bolsas-e-cursos",
    titulo: "Bolsas e Cursos",
    texto:
      "Cursos gratuitos e oportunidades de bolsa para começar sem gastar nada.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-lilac-light px-4 py-1 text-sm font-semibold text-lilac-dark">
              PUC-SP + Instituto Pedro Henrique
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Meninas que{" "}
              <span className="text-lilac-dark">Transformam</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/80">
              Um espaço de apoio para mulheres que querem entrar na tecnologia.
              Descubra sua carreira, saiba o que as vagas pedem e encontre cursos
              gratuitos e bolsas de estudo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/quiz">Fazer o quiz de carreira</LinkButton>
              <LinkButton href="/sobre" variant="secondary">
                Conhecer o projeto
              </LinkButton>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-lilac via-blush to-lilac-light opacity-80 blur-sm" />
            <div className="absolute inset-6 rounded-[2rem] bg-white/60 backdrop-blur" />
          </div>
        </div>
      </section>

      {/* Atalhos */}
      <section className="container-page py-8 md:py-12">
        <h2 className="text-2xl font-bold">Por onde começar</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {atalhos.map((item) => (
            <Card key={item.href} as="article" className="flex flex-col">
              <h3 className="text-xl font-semibold">{item.titulo}</h3>
              <p className="mt-2 flex-1 text-ink/80">{item.texto}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 font-semibold text-lilac-dark underline-offset-4 hover:underline"
              >
                Acessar
                <span aria-hidden="true">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Chamada final */}
      <section className="container-page py-12">
        <Card className="bg-lilac-light/50 text-center">
          <h2 className="text-2xl font-bold">
            A tecnologia precisa de você
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-ink/80">
            Não é preciso ter experiência para começar. Dê o primeiro passo
            descobrindo a área que mais tem a ver com o seu jeito.
          </p>
          <div className="mt-6 flex justify-center">
            <LinkButton href="/quiz">Começar agora</LinkButton>
          </div>
        </Card>
      </section>
    </>
  );
}
