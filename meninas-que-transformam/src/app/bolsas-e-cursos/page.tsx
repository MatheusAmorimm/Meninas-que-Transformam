import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { COURSES } from "@/data/courses";
import { SCHOLARSHIPS } from "@/data/scholarships";

export const metadata: Metadata = {
  title: "Bolsas e Cursos",
  description:
    "Cursos gratuitos (Fundação Bradesco, Curso em Vídeo, Senac, Cisco, Microsoft Learn e outros), bolsas de estudo e o que as vagas de tecnologia costumam pedir.",
};

const requisitosComuns = [
  "Lógica de programação e vontade de aprender",
  "Conhecimento de pelo menos uma linguagem ou ferramenta da área",
  "Trabalho em equipe e boa comunicação",
  "Portfólio ou projetos pessoais, mesmo que simples",
];

export default function BolsasECursosPage() {
  return (
    <>
      <PageHeader
        titulo="Bolsas e Cursos"
        descricao="Oportunidades gratuitas para começar e orientações sobre o que as vagas costumam pedir."
      />

      {/* Cursos gratuitos */}
      <section
        className="container-page py-12"
        aria-labelledby="titulo-cursos"
      >
        <h2 id="titulo-cursos" className="text-2xl font-bold">
          Cursos gratuitos
        </h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          Plataformas confiáveis para dar os primeiros passos sem custo.
        </p>
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <Card as="li" key={course.id} className="flex flex-col">
              <span className="text-sm font-semibold text-lilac-dark">
                {course.instituicao}
              </span>
              <h3 className="mt-1 text-lg font-semibold">{course.nome}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/80">
                {course.descricao}
              </p>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-semibold text-lilac-dark underline-offset-4 hover:underline"
              >
                Acessar curso
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </Card>
          ))}
        </ul>
      </section>

      {/* Bolsas */}
      <section
        className="container-page py-4 pb-12"
        aria-labelledby="titulo-bolsas"
      >
        <h2 id="titulo-bolsas" className="text-2xl font-bold">
          Bolsas de estudo
        </h2>
        <p className="mt-2 max-w-2xl text-ink/80">
          Programas que ajudam a custear cursos e graduações em tecnologia.
        </p>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {SCHOLARSHIPS.map((item) => (
            <Card as="li" key={item.id} className="flex flex-col">
              <h3 className="text-lg font-semibold">{item.nome}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/80">
                {item.descricao}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-semibold text-lilac-dark underline-offset-4 hover:underline"
              >
                Saber mais
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </Card>
          ))}
        </ul>
      </section>

      {/* O que as vagas pedem */}
      <section
        className="container-page pb-16"
        aria-labelledby="titulo-vagas"
      >
        <Card className="bg-lilac-light/50">
          <h2 id="titulo-vagas" className="text-2xl font-bold">
            O que as vagas costumam pedir
          </h2>
          <p className="mt-2 max-w-3xl text-ink/80">
            Os requisitos variam conforme a área, mas alguns pontos aparecem com
            frequência. Use como um mapa, não como uma barreira.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {requisitosComuns.map((req) => (
              <li key={req} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-lilac"
                />
                <span className="text-ink/90">{req}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
}
