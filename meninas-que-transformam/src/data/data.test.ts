import { describe, expect, it } from "vitest";
import { CAREERS, getCareerById } from "./careers";
import { COURSES } from "./courses";
import { QUIZ_QUESTIONS } from "./quizQuestions";
import { SCHOLARSHIPS } from "./scholarships";
import { PARTNERS } from "./partners";
import { CAREER_IDS, type CareerId, type CareerWeights } from "@/domain";
import { resolveQuiz } from "@/lib/quiz";

describe("integridade dos dados de carreiras", () => {
  it("cobre exatamente as carreiras canônicas, sem duplicatas", () => {
    const ids = CAREERS.map((c) => c.id).sort();
    expect(ids).toEqual([...CAREER_IDS].sort());
    expect(new Set(ids).size).toBe(CAREERS.length);
  });

  it("cada carreira tem todos os campos obrigatórios preenchidos", () => {
    for (const career of CAREERS) {
      expect(career.nome.length).toBeGreaterThan(0);
      expect(career.resumo.length).toBeGreaterThan(0);
      expect(career.descricao.length).toBeGreaterThan(0);
      expect(career.habilidades.length).toBeGreaterThan(0);
      expect(career.cargos.length).toBeGreaterThan(0);
      expect(career.cursosRelacionados.length).toBeGreaterThan(0);
    }
  });

  it("mapeia as áreas de dados separadamente e as vagas antes sem orientação", () => {
    const ids = new Set<string>(CAREERS.map((c) => c.id));
    for (const area of [
      "analise-dados",
      "ciencia-dados",
      "engenharia-dados",
      "seguranca",
      "produto",
      "suporte",
    ]) {
      expect(ids.has(area), `carreira "${area}" ausente`).toBe(true);
    }
  });

  it("cursosRelacionados apontam para cursos existentes", () => {
    const courseIds = new Set(COURSES.map((c) => c.id));
    for (const career of CAREERS) {
      for (const courseId of career.cursosRelacionados) {
        expect(courseIds.has(courseId)).toBe(true);
      }
    }
  });

  it("getCareerById retorna a carreira correta", () => {
    expect(getCareerById("frontend")?.id).toBe("frontend");
  });
});

describe("integridade do quiz", () => {
  it("tem exatamente 10 perguntas", () => {
    expect(QUIZ_QUESTIONS).toHaveLength(10);
  });

  it("ids de perguntas e de opções são únicos", () => {
    const questionIds = QUIZ_QUESTIONS.map((q) => q.id);
    expect(new Set(questionIds).size).toBe(questionIds.length);

    const optionIds = QUIZ_QUESTIONS.flatMap((q) => q.opcoes.map((o) => o.id));
    expect(new Set(optionIds).size).toBe(optionIds.length);
  });

  it("cada pergunta tem ao menos 2 opções com pesos válidos", () => {
    const validCareers = new Set<CareerId>(CAREER_IDS);
    for (const question of QUIZ_QUESTIONS) {
      expect(question.opcoes.length).toBeGreaterThanOrEqual(2);
      for (const option of question.opcoes) {
        const entries = Object.entries(option.pesos);
        expect(entries.length).toBeGreaterThan(0);
        for (const [careerId, peso] of entries) {
          expect(validCareers.has(careerId as CareerId)).toBe(true);
          expect(peso).toBeGreaterThan(0);
        }
      }
    }
  });

  it.each(CAREER_IDS)(
    "%s pode ser a carreira sugerida para quem responde com esse perfil",
    (careerId) => {
      expect(resolveQuiz(QUIZ_QUESTIONS, respostasDoPerfil(careerId)).careerId).toBe(
        careerId,
      );
    },
  );

  it("nenhuma carreira domina o resultado quando as respostas variam", () => {
    // 20 mil combinações de respostas sorteadas com semente fixa (reprodutível).
    let seed = 2026;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) % 2 ** 32;
      return seed / 2 ** 32;
    };
    const total = 20_000;
    const wins = new Map<CareerId, number>();
    for (let i = 0; i < total; i++) {
      const answers = QUIZ_QUESTIONS.map(
        (q) => q.opcoes[Math.floor(random() * q.opcoes.length)].id,
      );
      const { careerId } = resolveQuiz(QUIZ_QUESTIONS, answers);
      wins.set(careerId, (wins.get(careerId) ?? 0) + 1);
    }

    // Com 11 carreiras, a fatia justa é ~9%.
    for (const careerId of CAREER_IDS) {
      const share = (wins.get(careerId) ?? 0) / total;
      const label = `${careerId}: ${(share * 100).toFixed(1)}%`;
      expect(share, label).toBeGreaterThan(0.06);
      expect(share, label).toBeLessThan(0.14);
    }
  });
});

/**
 * Respostas de alguém com o perfil de uma carreira: em cada pergunta, escolhe
 * a opção que mais pontua essa carreira. Quando nenhuma opção combina (empate),
 * escolhe a que menos fortalece uma carreira rival — como faria quem responde
 * sem preferência por outra área.
 */
function respostasDoPerfil(careerId: CareerId): string[] {
  const placar = new Map<CareerId, number>();
  const maiorRival = (pesos: CareerWeights) =>
    Math.max(
      ...CAREER_IDS.filter((id) => id !== careerId).map(
        (id) => (placar.get(id) ?? 0) + (pesos[id] ?? 0),
      ),
    );

  return QUIZ_QUESTIONS.map((question) => {
    const [best] = [...question.opcoes].sort(
      (a, b) =>
        (b.pesos[careerId] ?? 0) - (a.pesos[careerId] ?? 0) ||
        maiorRival(a.pesos) - maiorRival(b.pesos),
    );
    for (const [id, peso] of Object.entries(best.pesos)) {
      placar.set(id as CareerId, (placar.get(id as CareerId) ?? 0) + (peso ?? 0));
    }
    return best.id;
  });
}

describe("integridade de cursos, bolsas e parceiros", () => {
  it("todos os links externos usam https", () => {
    const urls = [
      ...COURSES.map((item) => item.url),
      ...SCHOLARSHIPS.map((item) => item.url),
      ...PARTNERS.flatMap((item) => (item.url ? [item.url] : [])),
    ];
    for (const url of urls) {
      expect(url, url).toMatch(/^https:\/\//);
    }
  });

  it("ids são únicos em cada coleção", () => {
    for (const collection of [COURSES, SCHOLARSHIPS, PARTNERS]) {
      const ids = collection.map((i) => i.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});
