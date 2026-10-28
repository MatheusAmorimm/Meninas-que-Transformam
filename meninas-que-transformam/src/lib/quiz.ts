/**
 * Camada de aplicação — lógica pura de pontuação do quiz.
 *
 * Função determinística e sem efeitos colaterais: recebe perguntas e as opções
 * escolhidas e devolve a carreira de maior afinidade. Não acessa rede, DOM nem
 * armazenamento — alinhado ao requisito de "não coletar dados".
 */
import {
  CAREER_IDS,
  type CareerId,
  type QuizOption,
  type QuizQuestion,
  type QuizResult,
} from "@/domain";

/** Cria um placar zerado para todas as carreiras. */
function createEmptyScore(): Record<CareerId, number> {
  return CAREER_IDS.reduce(
    (acc, id) => {
      acc[id] = 0;
      return acc;
    },
    {} as Record<CareerId, number>,
  );
}

/**
 * Acumula os pesos de uma lista de opções escolhidas em um placar por carreira.
 */
export function scoreAnswers(
  selectedOptions: readonly QuizOption[],
): Record<CareerId, number> {
  const score = createEmptyScore();

  for (const option of selectedOptions) {
    for (const careerId of CAREER_IDS) {
      const peso = option.pesos[careerId];
      if (typeof peso === "number") {
        score[careerId] += peso;
      }
    }
  }

  return score;
}

/** Quantas carreiras afins o resultado sugere além da vencedora. */
const MAX_AFINS = 2;

/**
 * Ordena todas as carreiras da maior para a menor pontuação.
 *
 * Desempate determinístico: em caso de empate na pontuação, vem primeiro a
 * carreira que aparece antes em {@link CAREER_IDS}, garantindo resultado
 * reproduzível.
 */
export function rankCareers(score: Record<CareerId, number>): CareerId[] {
  // sort é estável: empates mantêm a ordem canônica de CAREER_IDS.
  return [...CAREER_IDS].sort((a, b) => score[b] - score[a]);
}

/** Escolhe a carreira vencedora: a primeira de {@link rankCareers}. */
export function pickWinner(score: Record<CareerId, number>): CareerId {
  return rankCareers(score)[0];
}

/**
 * Resolve o quiz a partir das perguntas e dos ids de opção escolhidos.
 *
 * @param questions   perguntas do quiz (fonte de verdade das opções)
 * @param selectedIds id da opção escolhida por pergunta (na mesma ordem)
 * @throws se alguma pergunta não tiver resposta ou um id for inválido
 */
export function resolveQuiz(
  questions: readonly QuizQuestion[],
  selectedIds: readonly (string | undefined)[],
): QuizResult {
  const selectedOptions: QuizOption[] = questions.map((question, index) => {
    const chosenId = selectedIds[index];
    const option = question.opcoes.find((o) => o.id === chosenId);
    if (!option) {
      throw new Error(
        `Resposta ausente ou inválida para a pergunta "${question.id}".`,
      );
    }
    return option;
  });

  const pontuacao = scoreAnswers(selectedOptions);
  const [careerId, ...demais] = rankCareers(pontuacao);
  const afins = demais
    .filter((id) => pontuacao[id] > 0)
    .slice(0, MAX_AFINS);

  return { careerId, pontuacao, afins };
}
