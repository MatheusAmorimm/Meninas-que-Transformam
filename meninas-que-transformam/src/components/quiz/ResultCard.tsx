import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button, LinkButton } from "@/components/ui/Button";
import { getCareerById } from "@/data/careers";
import { COURSES } from "@/data/courses";
import type { Career, CareerId } from "@/domain";

interface ResultCardProps {
  careerId: CareerId;
  /** Carreiras que vêm logo depois da sugerida no ranking. */
  afins: readonly CareerId[];
  onRestart: () => void;
}

const subtitleClasses =
  "text-sm font-semibold uppercase tracking-wide text-lilac-dark";

/**
 * Exibe o resultado do quiz: carreira sugerida, habilidades, como ela aparece
 * nas vagas, cursos e outras carreiras que também combinam.
 */
export function ResultCard({ careerId, afins, onRestart }: ResultCardProps) {
  const career = getCareerById(careerId);

  if (!career) {
    return (
      <Card className="text-center">
        <p>Não foi possível calcular o resultado. Tente novamente.</p>
        <div className="mt-4 flex justify-center">
          <Button onClick={onRestart}>Refazer quiz</Button>
        </div>
      </Card>
    );
  }

  const cursos = COURSES.filter((course) =>
    career.cursosRelacionados.includes(course.id),
  );
  const carreirasAfins = afins
    .map(getCareerById)
    .filter((afim): afim is Career => afim !== undefined);

  return (
    <Card className="mx-auto max-w-2xl">
      <p className={subtitleClasses}>A carreira que mais combina com você é</p>
      <h2 className="mt-1 text-3xl font-bold">{career.nome}</h2>
      <p className="mt-3 text-ink/80">{career.descricao}</p>

      <h3 className={`mt-6 ${subtitleClasses}`}>Habilidades-chave</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {career.habilidades.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-lilac-light px-3 py-1 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>

      <section aria-labelledby="resultado-vagas">
        <h3 id="resultado-vagas" className={`mt-6 ${subtitleClasses}`}>
          Como aparece nas vagas
        </h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {career.cargos.map((cargo) => (
            <li
              key={cargo}
              className="rounded-full border border-lilac px-3 py-1 text-sm"
            >
              {cargo}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-ink/70">
          Dica: nos sites de vagas, busque também pelo nome em inglês e pela
          forma no masculino, que ainda é a mais comum nos anúncios.
        </p>
      </section>

      {cursos.length > 0 && (
        <>
          <h3 className={`mt-6 ${subtitleClasses}`}>
            Cursos gratuitos para começar
          </h3>
          <ul className="mt-2 space-y-2">
            {cursos.map((course) => (
              <li key={course.id}>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-lilac-dark underline-offset-4 hover:underline"
                >
                  {course.nome} — {course.instituicao}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {carreirasAfins.length > 0 && (
        <section
          aria-labelledby="resultado-afins"
          className="mt-6 border-t border-lilac-light pt-6"
        >
          <h3 id="resultado-afins" className={subtitleClasses}>
            Também combina com você
          </h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {carreirasAfins.map((afim) => (
              <li
                key={afim.id}
                className="rounded-xl border border-lilac-light p-4"
              >
                <Link
                  href={`/carreiras#${afim.id}`}
                  className="font-semibold text-lilac-dark underline-offset-4 hover:underline"
                >
                  {afim.nome}
                </Link>
                <p className="mt-1 text-sm text-ink/80">{afim.resumo}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-8 flex flex-wrap gap-4">
        <Button onClick={onRestart} variant="secondary">
          Refazer quiz
        </Button>
        <LinkButton href="/carreiras">Ver todas as carreiras</LinkButton>
        <LinkButton href="/bolsas-e-cursos" variant="secondary">
          Ver bolsas e cursos
        </LinkButton>
      </div>
    </Card>
  );
}
