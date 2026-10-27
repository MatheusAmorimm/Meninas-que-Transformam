import { Card } from "@/components/ui/Card";
import { Button, LinkButton } from "@/components/ui/Button";
import { getCareerById } from "@/data/careers";
import { COURSES } from "@/data/courses";
import type { CareerId } from "@/domain";

interface ResultCardProps {
  careerId: CareerId;
  onRestart: () => void;
}

/** Exibe o resultado do quiz: carreira sugerida, habilidades e cursos. */
export function ResultCard({ careerId, onRestart }: ResultCardProps) {
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

  return (
    <Card className="mx-auto max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-lilac-dark">
        A carreira que mais combina com você é
      </p>
      <h2 className="mt-1 text-3xl font-bold">{career.nome}</h2>
      <p className="mt-3 text-ink/80">{career.descricao}</p>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-lilac-dark">
        Habilidades-chave
      </h3>
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

      {cursos.length > 0 && (
        <>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-lilac-dark">
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
