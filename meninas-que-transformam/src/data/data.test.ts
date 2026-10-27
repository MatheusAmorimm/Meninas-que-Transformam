import { describe, expect, it } from "vitest";
import { CAREERS, getCareerById } from "./careers";
import { COURSES } from "./courses";
import { QUIZ_QUESTIONS } from "./quizQuestions";
import { SCHOLARSHIPS } from "./scholarships";
import { PARTNERS } from "./partners";
import { CAREER_IDS, CareerId } from "@/domain";

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
      expect(career.cursosRelacionados.length).toBeGreaterThan(0);
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

  it("toda carreira pode ser alcançada por alguma opção", () => {
    const reachable = new Set<string>();
    for (const q of QUIZ_QUESTIONS) {
      for (const o of q.opcoes) {
        for (const careerId of Object.keys(o.pesos)) {
          reachable.add(careerId);
        }
      }
    }
    for (const careerId of CAREER_IDS) {
      expect(reachable.has(careerId)).toBe(true);
    }
  });
});

describe("integridade de cursos, bolsas e parceiros", () => {
  it("todos os links externos usam https", () => {
    for (const item of [...COURSES, ...SCHOLARSHIPS]) {
      expect(item.url.startsWith("https://")).toBe(true);
    }
  });

  it("ids são únicos em cada coleção", () => {
    for (const collection of [COURSES, SCHOLARSHIPS, PARTNERS]) {
      const ids = collection.map((i) => i.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });
});
