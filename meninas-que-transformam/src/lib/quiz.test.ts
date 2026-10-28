import { describe, expect, it } from "vitest";
import { pickWinner, rankCareers, resolveQuiz, scoreAnswers } from "./quiz";
import { CAREER_IDS, type CareerId, type QuizQuestion } from "@/domain";

function emptyScore(): Record<CareerId, number> {
  return CAREER_IDS.reduce(
    (acc, id) => ({ ...acc, [id]: 0 }),
    {} as Record<CareerId, number>,
  );
}

describe("scoreAnswers", () => {
  it("soma os pesos de cada opção por carreira", () => {
    const score = scoreAnswers([
      { id: "a", texto: "", pesos: { frontend: 2, "ux-design": 1 } },
      { id: "b", texto: "", pesos: { frontend: 1, "analise-dados": 3 } },
    ]);

    expect(score.frontend).toBe(3);
    expect(score["ux-design"]).toBe(1);
    expect(score["analise-dados"]).toBe(3);
    expect(score.backend).toBe(0);
  });

  it("retorna placar zerado quando não há opções", () => {
    expect(scoreAnswers([])).toEqual(emptyScore());
  });
});

describe("pickWinner", () => {
  it("escolhe a carreira de maior pontuação", () => {
    const score = { ...emptyScore(), backend: 5, "analise-dados": 2 };
    expect(pickWinner(score)).toBe("backend");
  });

  it("desempata de forma determinística pela ordem canônica", () => {
    const score = { ...emptyScore(), qa: 3, devops: 3 };
    // "qa" vem antes de "devops" em CAREER_IDS
    expect(pickWinner(score)).toBe("qa");
  });

  it("com placar totalmente zerado, vence a primeira carreira canônica", () => {
    expect(pickWinner(emptyScore())).toBe(CAREER_IDS[0]);
  });
});

describe("rankCareers", () => {
  it("ordena as carreiras da maior para a menor pontuação", () => {
    const score = { ...emptyScore(), devops: 5, qa: 2, frontend: 1 };
    expect(rankCareers(score).slice(0, 3)).toEqual(["devops", "qa", "frontend"]);
  });

  it("desempata pela ordem canônica", () => {
    const score = { ...emptyScore(), devops: 3, qa: 3, backend: 3 };
    expect(rankCareers(score).slice(0, 3)).toEqual(["backend", "qa", "devops"]);
  });
});

describe("resolveQuiz", () => {
  const questions: QuizQuestion[] = [
    {
      id: "q1",
      pergunta: "P1",
      opcoes: [
        { id: "q1a", texto: "Visual", pesos: { frontend: 3 } },
        { id: "q1b", texto: "Dados", pesos: { "analise-dados": 3 } },
      ],
    },
    {
      id: "q2",
      pergunta: "P2",
      opcoes: [
        { id: "q2a", texto: "UI", pesos: { frontend: 2, "ux-design": 1 } },
        { id: "q2b", texto: "Infra", pesos: { devops: 3 } },
      ],
    },
  ];

  it("resolve a carreira vencedora a partir das respostas", () => {
    const result = resolveQuiz(questions, ["q1a", "q2a"]);
    expect(result.careerId).toBe("frontend");
    expect(result.pontuacao.frontend).toBe(5);
  });

  it("lança erro quando falta resposta", () => {
    expect(() => resolveQuiz(questions, ["q1a", undefined])).toThrow();
  });

  it("lança erro quando o id de opção é inválido", () => {
    expect(() => resolveQuiz(questions, ["q1a", "inexistente"])).toThrow();
  });

  it("não sugere como afim uma carreira que não pontuou", () => {
    // frontend 5, ux-design 1, demais 0
    expect(resolveQuiz(questions, ["q1a", "q2a"]).afins).toEqual(["ux-design"]);
  });
});

describe("resolveQuiz — carreiras afins", () => {
  const questions: QuizQuestion[] = [
    {
      id: "q1",
      pergunta: "P1",
      opcoes: [{ id: "q1a", texto: "", pesos: { frontend: 3 } }],
    },
    {
      id: "q2",
      pergunta: "P2",
      opcoes: [{ id: "q2a", texto: "", pesos: { devops: 3 } }],
    },
    {
      id: "q3",
      pergunta: "P3",
      opcoes: [{ id: "q3a", texto: "", pesos: { qa: 2, backend: 1 } }],
    },
  ];

  it("sugere as 2 carreiras seguintes do ranking, sem repetir a principal", () => {
    // frontend 3, devops 3 (empate: frontend vem antes), qa 2, backend 1
    const result = resolveQuiz(questions, ["q1a", "q2a", "q3a"]);
    expect(result.careerId).toBe("frontend");
    expect(result.afins).toEqual(["devops", "qa"]);
  });
});
