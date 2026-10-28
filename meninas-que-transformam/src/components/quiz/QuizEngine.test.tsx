import { describe, expect, it } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { QuizEngine } from "./QuizEngine";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";

describe("QuizEngine", () => {
  it("começa na primeira pergunta com o avançar desabilitado", () => {
    render(<QuizEngine />);
    expect(
      screen.getByText(`Pergunta 1 de ${QUIZ_QUESTIONS.length}`),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Avançar" })).toBeDisabled();
  });

  it("responde as 10 perguntas e chega a um resultado", () => {
    render(<QuizEngine />);

    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const fieldset = screen.getByRole("group");
      const radios = within(fieldset).getAllByRole("radio");
      // Escolhe sempre a primeira opção
      fireEvent.click(radios[0]);

      const advanceLabel =
        i === QUIZ_QUESTIONS.length - 1 ? "Ver resultado" : "Avançar";
      fireEvent.click(screen.getByRole("button", { name: advanceLabel }));
    }

    expect(
      screen.getByText("A carreira que mais combina com você é"),
    ).toBeInTheDocument();
    // As primeiras opções pontuam várias carreiras, então há afins a sugerir.
    expect(
      screen.getByRole("region", { name: "Também combina com você" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Refazer quiz" }),
    ).toBeInTheDocument();
  });
});
